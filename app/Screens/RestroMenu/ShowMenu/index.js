import React, { useState, useEffect, useContext } from "react";
import { useFocusEffect, useLinkProps } from "@react-navigation/native";
import { Image, View, Text, TouchableOpacity, Alert } from "react-native";
import InputSpinner from "react-native-input-spinner";
import AsyncStorage from "@react-native-community/async-storage";
import ShowMenu from "./component/ShowMenu";
import _ from "lodash";
import styles from "./component/styles";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  LIGHT_WHITE_COLOR,
} from "../../../Utils/Constant";
import CommonStyles from "../../../Utils/CommonStyles";
import { apiCall } from "../../../Utils/httpClient";
import { CartContext } from "../../../Utils/UserContext";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import Success from "../../../Components/Modal/success";
import Error from "../../../Components/Modal/showMessage";
import { Images } from "../../../Utils/images";

const ShowMenuView = ({ route, navigation }) => {
  const [cartData, setCartData] = useContext(CartContext);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [dataType, setDataType] = useState("allData");
  const [totalAmount, setTotalAmount] = useState("");
  const [restroItemCategoryList, setRestroItemCategoryList] = useState([]);
  const [restroItemList, setRestroItemList] = useState([]);
  const [restroItemParentList, setRestroItemParentList] = useState([]);
  const [isSelectedCatgory, setIsSelectedCatgory] = useState(null);
  const [search, setSearch] = useState("");

  useFocusEffect(
    React.useCallback(() => {
      if (route.params) {
        const { detail } = route.params;
        setbusinessId(detail);
        handleRestroItemCategoryList(detail);
        handleRestroItemList(detail);
      }
      return () => handleRestroItemList(route?.params?.detail);
    }, [])
  );
  const handleRestroOrderDatas = async () => {
    setCartData("");
    await AsyncStorage.removeItem("orderData");
  };
  const setbusinessId = async (data) => {
    try {
      const params = {
        business_id: data.business_id,
        business_name: data.business_name,
      };
      await AsyncStorage.setItem("orderData", JSON.stringify(params));
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
    }
  };
  const handleRestroItemCategoryList = async (data) => {
    setVisible(true);
    const params = {
      business_type: 1,
      business_id: data.business_id,
    };
    try {
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.BUSINESS_ITEM_CATEGORY_LIST,
        params
      );
      if (data.status === 200) {
        setRestroItemCategoryList(data.data);
        setVisible(false);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  const handleRestroItemList = async (data) => {
    setVisible(true);
    const params = {
      business_type: 1,
      business_id: data.business_id,
    };
    try {
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.BUSINESS_ITEM_LIST,
        params
      );
      if (data.status === 200) {
        setRestroItemList(data.data);
        setRestroItemParentList(data.data); //use like a parent for filter
        setVisible(false);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  const _handleDataTypeSelected = (type, itemSelected, index) => {
    setDataType(type);
    if (type === "allData") {
      setIsSelectedCatgory(null);
      handleRestroItemList(route?.params?.detail);
    } else {
      setIsSelectedCatgory(itemSelected.business_item_category_id);
      const filterData = _.filter(restroItemParentList, {
        business_item_category_id: itemSelected.business_item_category_id,
      });
      setRestroItemList(filterData);
    }
  };
  const _renderCategory = (item, index) => {
    const selectedColor =
      item.business_item_category_id === isSelectedCatgory
        ? WHITE_COLOR_CODE
        : LIGHT_WHITE_COLOR;
    return (
      <>
        {item.status === 1 && (
          <TouchableOpacity
            onPress={() => _handleDataTypeSelected("catg", item, index)}
            style={styles.lablestyle}
          >
            <Text
              style={[
                styles.txtCat,
                {
                  color: selectedColor,
                },
              ]}
            >
              {item.category_name}
            </Text>
          </TouchableOpacity>
        )}
      </>
    );
  };
  const onPressAddItem = (item, index) => {
    addToCart(item, 1); //value dalna h 1 ki jagah
  };
  const getqty = (item) => {
    var getIndex = _.findIndex(cartData, { item_id: item.item_id });
    const FinalAmount = cartData.reduce(
      (accumulatedTotal, curr) => accumulatedTotal + curr.total_item_price,
      0
    );
    setTotalAmount(FinalAmount);
    if (getIndex >= 0) {
      return cartData[getIndex].quantity;
    }
  };
  const removeFromCart = (item, value) => {
    if (cartData.length > 0) {
      var getIndex = _.findIndex(cartData, { item_id: item.item_id });
      if (getIndex >= 0) {
        if (cartData[getIndex].quantity > 0) {
          cartData[getIndex].quantity = cartData[getIndex].quantity - 1;
          cartData[getIndex].total_item_price =
            cartData[getIndex].total_item_price - cartData[getIndex].price;
          const FinalAmount = cartData.reduce(
            (accumulatedTotal, curr) =>
              accumulatedTotal + (curr.total_item_price - curr.item_discount),
            0
          );
          setTotalAmount(FinalAmount);
          setCartData(cartData);
        }
        if (cartData[getIndex].quantity === 0) {
          cartData.splice(getIndex, 1);
          const FinalAmount = cartData.reduce(
            (accumulatedTotal, curr) =>
              accumulatedTotal + (curr.total_item_price - curr.item_discount),
            0
          );
          setTotalAmount(FinalAmount);
          setCartData(cartData);
          cartData.length == 0;
        }
      }
    }
  };
  const addToCart = async (item, value) => {
    try {
      const cartItem = {
        item_id: item.item_id,
        item_name: item.item_name,
        price: item.price,
        quantity: value,
        discounted_price: item.discounted_price,
        total_item_price: item.discounted_price * value,
        item_discount: item.item_discount === null ? 0 : item.item_discount,
        // item_discount: 0
      };
      if (cartData.length > 0) {
        var getIndex = _.findIndex(cartData, { item_id: item.item_id });
        if (getIndex >= 0) {
          cartData[getIndex].quantity = cartData[getIndex].quantity + 1;
          cartData[getIndex].total_item_price =
            cartData[getIndex].discounted_price * value;
          const FinalAmount = cartData.reduce(
            (accumulatedTotal, curr) =>
              accumulatedTotal + (curr.total_item_price - curr.item_discount),
            0
          );
          setTotalAmount(FinalAmount);
          setCartData(cartData);
        } else {
          setCartData((curr) => [...curr, cartItem]);
          const FinalAmount = cartData.reduce(
            (accumulatedTotal, curr) =>
              accumulatedTotal + (curr.total_item_price - curr.item_discount),
            0
          );
          setTotalAmount(FinalAmount);
        }
      } else {
        setCartData((curr) => [...curr, cartItem]);
        const FinalAmount = cartData.reduce(
          (accumulatedTotal, curr) =>
            accumulatedTotal + (curr.total_item_price - curr.item_discount),
          0
        );
        setTotalAmount(FinalAmount);
        await AsyncStorage.setItem("localCartData", JSON.stringify(cartData));
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
    }
  };
  const _handleSandwichDish = (item, index) => {
    return (
      <>
        {item.status == 1 && (
          <View key={index} style={styles.ConatinView}>
            <Image
              style={styles.DishImgeStyle}
              source={{ uri: item.item_image }}
            />
            <View style={styles.DishDiscptnView}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("AddToCart", { itemDetail: item })
                }
              >
                <Text style={styles.DishNameTxt}>{item.item_name}</Text>
                <Text numberOfLines={2} style={styles.DiscrptnTxtStyle}>
                  {item.description}
                </Text>
                {item.discounted_price ? (
                  <Text style={styles.PriceOfDishTxt}>
                    $
                    {Number(
                      parseFloat(item.discounted_price).toFixed(2)
                    ).toLocaleString("en", {
                      minimumFractionDigits: 2,
                    })}
                  </Text>
                ) : null}
                <Text
                  style={[
                    styles.PriceOfDishTxt,
                    {
                      textDecorationLine: item?.discounted_price
                        ? "line-through"
                        : "none",
                    },
                  ]}
                >
                  {Number(parseFloat(item.price).toFixed(2)).toLocaleString(
                    "en",
                    {
                      minimumFractionDigits: 2,
                    }
                  )}
                </Text>
              </TouchableOpacity>
              <View style={styles.ReviewView}>
                <Image source={Images.STAR_FILLED_IMG} />
                <Text style={styles.ReviewText}> {item.rating} Review</Text>
                {cartData &&
                  cartData.some(({ item_id }) => item_id === item.item_id) ? (
                  // {addBtn === index ? selected_row ?
                  // <Text>true1</Text>
                  <InputSpinner
                    value={getqty(item)}
                    onIncrease={(value) => addToCart(item, value)}
                    onDecrease={(value) => removeFromCart(item, value)}
                    max={10}
                    step={1}
                    // min={1}
                    editable={false}
                    rounded={false}
                    height={30}
                    width={85}
                    textColor={WHITE_COLOR_CODE}
                    colorMax={YELLOW_COLOR_CODE}
                    colorMin={YELLOW_COLOR_CODE}
                    colorPress={YELLOW_COLOR_CODE}
                    buttonPressTextColor={YELLOW_COLOR_CODE}
                    buttonFontSize={25}
                    inputStyle={styles.spinnerInput}
                    buttonStyle={styles.addItemBttn}
                    buttonFontFamily={FONT_FAMILY_REGULAR}
                    style={styles.spinnerVw}
                  />
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      addToCart(item, 1);
                    }}
                    style={styles.AddBtnTouchable}
                  >
                    <Text style={styles.AddBtnTxt}>Add</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        )}
      </>
    );
  };
  const onPressCheckOut = () => {
    if (totalAmount !== "" && cartData !== "") {
      navigation.navigate("RestroCheckout");
    } else {
      setErrorMessage("Add Item To Cart");
      setVisibleErr(true);
    }
  };
  const searchItem = (searchKey) => {
    setSearch(searchKey);
    if (searchKey.length == 0) {
      if (dataType === "allData") {
        // handleRestroItemList(route?.params?.detail);
        setRestroItemList(restroItemParentList);
      } else {
        const filterData = _.filter(restroItemParentList, {
          business_item_category_id: isSelectedCatgory,
        });
        setRestroItemList(filterData);
      }
    } else {
      const searchedData = restroItemParentList.filter((x) => {
        return x.item_name.toLowerCase().includes(searchKey.toLowerCase());
      });
      setRestroItemList([...searchedData]);
    }
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <ShowMenu
        searchItem={searchItem}
        totalAmount={totalAmount}
        onPressCheckOut={onPressCheckOut}
        restroItemList={restroItemList}
        restroItemCategoryList={restroItemCategoryList}
        _renderCategory={_renderCategory}
        _handleDataTypeSelected={_handleDataTypeSelected}
        _handleSandwichDish={_handleSandwichDish}
        dataType={dataType}
        search={search}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => setVisibleSuccess(false)}
      />
    </View>
  );
};
export default ShowMenuView;
