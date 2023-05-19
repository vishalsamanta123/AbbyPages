import { View, Text } from "react-native";
import React, { useState } from "react";
import MarkteplaceDetailView from "./components/MarkteplaceDetailView";
import { apiCall } from "../../../../Utils/httpClient";
import apiEndPoints from "../../../../Utils/apiEndPoints";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import _ from "lodash";
import ShowMessage from "../../../../Components/Modal/showMessage";

const MarketplaceDetail = ({ navigation, route }) => {
  const { product_id, business_id } = route.params;
  const [productDetail, setProductDetail] = useState({});
  const [addToCartData, setAddToCartData] = useState({});
  const [cartData, setCartData] = useState([]);
  const [productSpecification, setProductSpecification] = useState({});
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });
  useFocusEffect(
    React.useCallback(() => {
      getProductList({});
    }, [navigation, route])
  );
  const getProductList = async (info) => {
    try {
      const params = {
        product_id: product_id,
        business_id: business_id,
      };
      const { data } = await apiCall(
        "POST",
        apiEndPoints.GET_BUSINESS_PRODUCT_DETAILS,
        params
      );
      if (data.status === 200) {
        setProductDetail({
          ...data.data,
          product_specification: JSON?.parse(data?.data?.product_specification),
        });
      } else {
        setProductDetail([]);
      }
    } catch (error) {}
  };
  const getqty = (item) => {
    // var getIndex = _.findIndex(shoppingCartData, {
    //   product_id: item.product_id,
    // });
    // if (getIndex >= 0) {
    //   return shoppingCartData[getIndex].quantity;
    // }
  };
  const removeFromCart = (item) => {
    if (cartData.length > 0) {
      var getIndex = _.findIndex(cartData, { item_id: item.item_id });
      if (getIndex >= 0) {
        if (cartData[getIndex].quantity > 0) {
          cartData[getIndex].quantity = cartData[getIndex].quantity - 1;
          cartData[getIndex].total_item_price =
            cartData[getIndex].total_item_price - cartData[getIndex].price;
          // setTotalPrice(totalPrice - cartData[getIndex].price)
          setCartData(cartData);
        }
        if (cartData[getIndex].quantity === 0) {
          // setTotalPrice(totalPrice - cartData[getIndex].price)
          cartData.splice(getIndex, 1);
          setCartData(cartData);
          cartData.length == 0;
        }
      }
      getProductList();
    }
  };
  const addToCart = async (item, value) => {
    try {
      const cartItem = {
        item_id: item.item_id,
        item_name: item.item_name,
        price: item.price,
        quantity: value,
        total_item_price: item.price * value,
        item_discount: item.item_discount,
      };
      if (cartData.length > 0) {
        var getIndex = _.findIndex(cartData, { item_id: item.item_id });
        if (getIndex >= 0) {
          cartData[getIndex].quantity = cartData[getIndex].quantity + 1;
          cartData[getIndex].total_item_price =
            cartData[getIndex].price * value;
          setCartData(cartData);
          getProductList();
        } else {
          setCartData((curr) => [...curr, cartItem]);
          // setTotalPrice(totalPrice + item.price);
        }
      } else {
        setCartData((curr) => [...curr, cartItem]);
      }
    } catch (e) {
      // setErrorMessage(e);
      // setVisibleErr(true);
    }
  };
  const addProductOnCart = async (item, value) => {
    try {
      const params = {
        product_id: item?.product_id,
        quantity: value,
        business_id: item?.business_id
      };
      const { data } = await apiCall(
        "POST",
        apiEndPoints.ADD_TO_CART_PRODUCT,
        params
      );
      if (data.status === 200) {
        setAddToCartData(data?.data);
        setMessageShow({
          visible: true,
          type: "success",
          message: data?.message,
        });
      } else {
        setAddToCartData({});
        setMessageShow({
          visible: true,
          type: "error",
          message: data?.message,
        });
      }
    } catch (e) {
      console.log("🚀 ~ file: index.js:136 ~ e:", e);
      setMessageShow({
        visible: true,
        type: "error",
        message: e?.message,
      });
    }
  };

  const onPressCart = () => {
    navigation.navigate("ShoppingCart");
  };
  return (
    <>
      <MarkteplaceDetailView
        productDetail={productDetail}
        addProductOnCart={addProductOnCart}
        getqty={getqty}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        cartData={cartData}
        onPressCart={onPressCart}
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
    </>
  );
};

export default MarketplaceDetail;
