import React, { useState, useContext } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import ProductListingScreen from "./components/ProductListingScreen";
import { useFocusEffect } from "@react-navigation/native";
import _ from "lodash";
import CommonStyles from "../../../Utils/CommonStyles";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import Success from "../../../Components/Modal/success";
import InputSpinner from "react-native-input-spinner";
import Button from "../../../Components/Button";
import Error from "../../../Components/Modal/showMessage";
import styles from "./components/styles";
import {
  YELLOW_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  WHITE_COLOR_CODE,
  BLACK_COLOR_CODE,
} from "../../../Utils/Constant";
import { ShoppingCartContext } from "../../../Utils/UserContext";
import AsyncStorage from "@react-native-community/async-storage";
import FilterPopUp from "./components/FilterPopUp";
import QuestionModal from "../../../Components/Modal/questionModal";
const ProductListing = ({ navigation, route }) => {
  const [shoppingCartData, setShoppingCartData] =
    useContext(ShoppingCartContext);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [stopOffset, setstopOffset] = useState(false);
  const [reload, setReload] = useState(false);
  const [offSet, setOffSet] = useState();
  const [productList, setProductList] = useState([]);
  const [filter, setFilter] = useState(false);
  const [filterData, setFilterData] = useState({
    color: [],
    category_id: "",
    sub_category_id: "",
    size: "",
    company_brand: "",
    max_price: "",
    min_price: "",
    product_size: "",
    product_tags: "",
    sorting: "",
  });
  useFocusEffect(
    React.useCallback(() => {
      if (route.params) {
        const { detail } = route.params;
        productOrderData(detail);
        handleFilterProduct();
      }
    }, [])
  );

  const productOrderData = async (detail) => {
    try {
      const data = {
        businessDetail: detail,
      };
      await AsyncStorage.setItem("productOrderData", JSON.stringify(data));
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
    }
  };
  const handleFilterProduct = async () => {
    try {
      setVisible(true);
      const params = {
        category_id: filterData.category_id ? filterData.category_id : null,
        company_brand: filterData.company_brand
          ? filterData.company_brand
          : null,
        max_price: filterData.max_price ? filterData.max_price : null,
        min_price: 0,
        product_color: filterData?.color ? filterData?.color : null,
        product_size: filterData.product_size ? filterData.product_size : null,
        product_tags: filterData.product_tags ? filterData.product_tags : null,
        status: 1,
        sub_category_id: filterData.sub_category_id
          ? filterData.sub_category_id
          : null,
        product_filter: filterData.sorting ? filterData.sorting : null,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.FILTER_PRODUCTLIST,
        params
      );
      if (data.status === 200) {
        setVisible(false);
        setProductList(data.data);
      } else {
        if (data.status === 201) {
          setVisible(false);
          setProductList([]);
        } else {
          setstopOffset(true);
          setErrorMessage(data.message);
          setVisibleErr(true);
          setVisible(false);
          setProductList([]);
        }
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const SearchProduct = (searchKey) => {
    const lowerCased = searchKey.toLowerCase();
    const searchArray = [...productList];
    const list = _.filter(searchArray, (item) => {
      return item.product_name.toLowerCase().match(lowerCased);
    });
    if (searchKey == "") {
      handleFilterProduct();
    }
    setProductList(list);
  };

  const onPressProductDetail = (detail) => {
    navigation.navigate("ProductDetails", { detail: detail });
  };
  const addProductOnCart = async (item, value) => {
    try {
      const cartProduct = {
        business_id: item.business_id,
        business_type: item.business_type,
        product_id: item.product_id,
        product_name: item.product_name,
        price: item.final_price,
        quantity: value,
        total_product_price: item.final_price * value,
        product_discount: item.price - item.final_price,
        product_size: item.product_size,
        product_color: item.product_color,
        product_brand: item.company_brand,
        category_id: item.category_id,
        sku: item.sku,
        sub_category_id: item.sub_category_id,
        product_image: item.product_image,
      };
      if (shoppingCartData.length > 0) {
        var getIndex = _.findIndex(shoppingCartData, {
          product_id: item.product_id,
        });
        if (getIndex >= 0) {
          shoppingCartData[getIndex].quantity =
            shoppingCartData[getIndex].quantity + 1;
          shoppingCartData[getIndex].total_product_price =
            shoppingCartData[getIndex].price * value;
          setShoppingCartData(shoppingCartData);
        } else {
          setShoppingCartData((curr) => [...curr, cartProduct]);
        }
      } else {
        setShoppingCartData((curr) => [...curr, cartProduct]);
        // await AsyncStorage.setItem('localCartData', JSON.stringify(shoppingCartData))
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
    }
  };
  const removeFromCart = (item) => {
    if (shoppingCartData.length > 0) {
      var getIndex = _.findIndex(shoppingCartData, {
        product_id: item.product_id,
      });
      if (getIndex >= 0) {
        if (shoppingCartData[getIndex].quantity > 0) {
          shoppingCartData[getIndex].quantity =
            shoppingCartData[getIndex].quantity - 1;
          shoppingCartData[getIndex].total_product_price =
            shoppingCartData[getIndex].total_product_price -
            shoppingCartData[getIndex].price;
          setShoppingCartData(shoppingCartData);
        }
        if (shoppingCartData[getIndex].quantity === 0) {
          shoppingCartData.splice(getIndex, 1);
          setShoppingCartData(shoppingCartData);
          setReload(!reload);
          shoppingCartData.length == 0;
        }
      }
    }
  };
  const getqty = (item) => {
    var getIndex = _.findIndex(shoppingCartData, {
      product_id: item.product_id,
    });
    if (getIndex >= 0) {
      return shoppingCartData[getIndex].quantity;
    }
  };
  const onPressAddProduct = (item, index) => {
    addProductOnCart(item, 1);
  };
  const _renderProductList = (item, index) => {
    return (
      <View key={index} style={styles.flatlistcon}>
        <TouchableOpacity onPress={() => onPressProductDetail(item)}>
          <Image
            resizeMode="stretch"
            style={styles.productimg}
            source={{ uri: item.product_image }}
          />
        </TouchableOpacity>
        <View style={{ paddingTop: 5 }}>
          <Text numberOfLines={1} style={styles.nameTxt}>
            {item.product_name}
          </Text>
          <Text style={styles.finalPriceTxt}>
            {Number(parseFloat(item.final_price).toFixed(2)).toLocaleString(
              "en",
              {
                minimumFractionDigits: 2,
              }
            )}
            {"      "}
            <Text style={styles.cutPriceTxt}>
              {Number(parseFloat(item.price).toFixed(2)).toLocaleString("en", {
                minimumFractionDigits: 2,
              })}
            </Text>
          </Text>

          {shoppingCartData &&
          shoppingCartData?.some(
            ({ product_id }) => product_id === item.product_id
          ) ? (
            <InputSpinner
              value={getqty(item)}
              onIncrease={(value) => addProductOnCart(item, value)}
              onDecrease={(value) => removeFromCart(item, value)}
              max={10}
              step={1}
              // min={1}
              editable={false}
              rounded={false}
              height={34}
              width={"100%"}
              textColor={WHITE_COLOR_CODE}
              colorMax={YELLOW_COLOR_CODE}
              colorMin={YELLOW_COLOR_CODE}
              colorPress={YELLOW_COLOR_CODE}
              buttonPressTextColor={YELLOW_COLOR_CODE}
              buttonFontSize={30}
              inputStyle={styles.spinnerInput}
              buttonStyle={styles.addItemBttn}
              buttonFontFamily={FONT_FAMILY_REGULAR}
              style={styles.spinnerVw}
            />
          ) : (
            <Button
              onPress={() => onPressAddProduct(item, index)}
              style={styles.addBttn}
              buttonLabelStyle={styles.addBttnTxt}
              buttonText="Add"
            />
          )}
        </View>
      </View>
    );
  };
  const onPressFilter = () => {
    setFilter(true);
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <ProductListingScreen
        shoppingCartData={shoppingCartData}
        onPressCart={() => {
          shoppingCartData.length !== 0 && navigation.navigate("ShoppingCart");
        }}
        _renderProductList={_renderProductList}
        SearchProduct={SearchProduct}
        productList={productList}
        onPressProductDetail={onPressProductDetail}
        onPressFilter={onPressFilter}
        reload={reload}
      />
      <FilterPopUp
        filter={filter}
        closeModel={() => setFilter(false)}
        setFilterData={setFilterData}
        filterData={filterData}
        handleFilterProduct={handleFilterProduct}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        setVisible={setVisible}
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
export default ProductListing;
