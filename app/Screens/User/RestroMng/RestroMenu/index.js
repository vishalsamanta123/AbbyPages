import React, { useState, useContext } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Image, View } from "react-native";
import RestroMenuView from "./component/RestroMenuView";
import _ from "lodash";
import CommonStyles from "../../../../Utils/CommonStyles";
import { apiCall } from "../../../../Utils/httpClient";
import { CartContext, UserContext } from "../../../../Utils/UserContext";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import ShowMessage from "../../../../Components/Modal/showMessage";

const RestroMenu = ({ route, navigation }) => {
  const { detail = {} } = route?.params;
  const [userData, setUserData] = useContext(UserContext);
  const [cartData, setCartData] = useContext(CartContext);
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });
  const [visible, setVisible] = useState(false);
  const [dataType, setDataType] = useState("allData");
  const [totalAmount, setTotalAmount] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [itemsList, setItemsList] = useState([]);
  const [itemsListFxd, setItemsListFxd] = useState([]);
  const [selectedCatgory, setSelectedCatgory] = useState(null);
  const [search, setSearch] = useState("");

  useFocusEffect(
    React.useCallback(() => {
      if (route?.params) {
        handleItemCategoryList(detail);
        handleItemList(detail);
        // setCartData([])
      }
      return () => handleItemList(detail);
    }, [])
  );

  const handleItemCategoryList = async (data) => {
    setVisible(true);
    const params = {
      business_type: 1,
      business_id: data?.business_id,
    };
    try {
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.BUSINESS_ITEM_CATEGORY_LIST,
        params
      );
      if (data?.status === 200) {
        setCategoryList(data?.data);
        setVisible(false);
      } else {
        setMessageShow({
          visible: true,
          type: "error",
          message: data?.message,
        });
        setVisible(false);
      }
    } catch (error) {
      setVisible(false);
      setMessageShow({
        visible: true,
        type: "error",
        message: error?.message,
      });
    }
  };
  const handleItemList = async (data) => {
    setVisible(true);
    const params = {
      business_type: 1,
      business_id: data?.business_id,
    };
    try {
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.BUSINESS_ITEM_LIST,
        params
      );
      if (data?.status === 200) {
        setItemsList(data?.data);
        setItemsListFxd(data?.data);
        setVisible(false);
      } else {
        setMessageShow({
          visible: true,
          type: "error",
          message: data?.message,
        });
        setVisible(false);
      }
    } catch (error) {
      setVisible(false);
      setMessageShow({
        visible: true,
        type: "error",
        message: error?.message,
      });
    }
  };
  const handleTypeSelect = (type, itemSelected, index) => {
    setDataType(type);
    if (type === "allData") {
      setSelectedCatgory(null);
      handleItemList(detail);
    } else {
      setSelectedCatgory(itemSelected);
      const filterData = _.filter(itemsListFxd, {
        business_item_category_id: itemSelected.business_item_category_id,
      });
      setItemsList(filterData);
    }
  };

  const getqty = (item) => {
    var getIndex = _.findIndex(cartData, { item_id: item.item_id });
    const FinalAmount = cartData.reduce(
      (accumulatedTotal, curr) => accumulatedTotal + curr.total_item_price,
      0
    );
    setTotalAmount(FinalAmount);
    if (getIndex >= 0) {
      return cartData[getIndex]?.quantity ? cartData[getIndex]?.quantity : 0;
    }
  };
  const removeFromCart = (item, value) => {
    if (cartData.length > 0) {
      var getIndex = _.findIndex(cartData, { item_id: item.item_id });
      if (getIndex >= 0) {
        if (cartData[getIndex].quantity > 0 && value > 0) {
          const newObj = { ...cartData[getIndex] };
          newObj.quantity = newObj.quantity - 1;
          newObj.total_item_price =
            newObj.total_item_price - newObj.discounted_price;
          const FinalAmount = cartData.reduce(
            (accumulatedTotal, curr) =>
              accumulatedTotal +
              (curr.total_item_price - curr.discounted_price),
            0
          );
          const newArray = [...cartData];
          newArray[getIndex] = newObj;
          setTotalAmount(FinalAmount);
          setCartData(newArray);
        } else if (value === 0) {
          cartData.splice(getIndex, 1);
          const FinalAmount = cartData.reduce(
            (accumulatedTotal, curr) =>
              accumulatedTotal +
              (curr.total_item_price - curr.discounted_price),
            0
          );
          setTotalAmount(FinalAmount);
          setCartData(cartData);
        }
      }
    }
  };
  const addToCart = async (item, value) => {
    try {
      const items = {
        ...item,
        discounted_price: item.discounted_price,
        total_item_price: item.discounted_price * value,
        item_discount: item.item_discount === null ? 0 : item.item_discount,
        quantity: value,
        spice_level: "",
        item_description: "",
      };
      if (cartData.length > 0) {
        var getIndex = _.findIndex(cartData, { item_id: item.item_id });
        if (getIndex >= 0) {
          const newObj = { ...cartData[getIndex] };
          newObj.quantity = newObj.quantity + 1;
          newObj.total_item_price = newObj.discounted_price * value;
          const FinalAmount = cartData.reduce(
            (accumulatedTotal, curr) =>
              accumulatedTotal + (curr.total_item_price - curr.item_discount),
            0
          );
          const newArray = [...cartData];
          newArray[getIndex] = newObj;
          setTotalAmount(FinalAmount);
          setCartData(newArray);
        } else {
          setCartData((curr) => [...curr, items]);
          const FinalAmount = cartData.reduce(
            (accumulatedTotal, curr) =>
              accumulatedTotal + (curr.total_item_price - curr.item_discount),
            0
          );
          setTotalAmount(FinalAmount);
        }
      } else {
        setCartData((curr) => [...curr, items]);
        const FinalAmount = cartData.reduce(
          (accumulatedTotal, curr) =>
            accumulatedTotal + (curr.total_item_price - curr.item_discount),
          0
        );
        setTotalAmount(FinalAmount);
      }
    } catch (error) {
      setMessageShow({
        visible: true,
        type: "error",
        message: error?.message,
      });
    }
  };
  const onPressCheckOut = () => {
    const newCartData = [...cartData];
    newCartData?.forEach(function (item, i) {
      item["delivery_type"] = detail?.delivery_type;
    });
    setCartData(newCartData);
    if (totalAmount !== "" && cartData?.length > 0) {
      navigation.navigate("RestroCheckout");
    } else {
      setMessageShow({
        visible: true,
        type: "",
        message: "Add Item To Cart",
      });
    }
  };

  const searchItemData = (searchKey) => {
    setSearch(searchKey);
    if (searchKey === "") {
      if (dataType === "allData") {
        setItemsList(itemsListFxd);
      } else {
        const filterData = _.filter(itemsListFxd, {
          business_item_category_id: selectedCatgory,
        });
        setItemsList(filterData);
      }
    } else {
      const searchedData = itemsList.filter((x) => {
        return x.item_name.toLowerCase().includes(searchKey.toLowerCase());
      });
      setItemsList([...searchedData]);
    }
  };
  const onPressItem = (item) => {
    navigation.navigate("RestroItemDetail", { itemDetail: item });
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <RestroMenuView
        searchItemData={searchItemData}
        totalAmount={totalAmount}
        onPressCheckOut={onPressCheckOut}
        itemsList={itemsList}
        categoryList={categoryList}
        handleTypeSelect={handleTypeSelect}
        dataType={dataType}
        search={search}
        selectedCatgory={selectedCatgory}
        onPressItem={onPressItem}
        addToCart={addToCart}
        getqty={getqty}
        cartData={cartData}
        removeFromCart={removeFromCart}
        userData={userData}
        setCartData={setCartData}
        navigation={navigation}
      />
      <ShowMessage
        visible={messageShow?.visible}
        message={messageShow?.message}
        messageViewType={messageShow?.type}
        onEndVisible={() => {
          setMessageShow({
            visible: false,
            message: "",
            type: "",
          });
        }}
      />
    </View>
  );
};
export default RestroMenu;
