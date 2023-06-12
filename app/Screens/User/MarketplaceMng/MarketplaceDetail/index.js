import React, { useState } from "react";
import MarkteplaceDetailView from "./components/MarkteplaceDetailView";
import { apiCall } from "../../../../Utils/httpClient";
import apiEndPoints from "../../../../Utils/apiEndPoints";
import { useFocusEffect } from "@react-navigation/native";
import _ from "lodash";
import ShowMessage from "../../../../Components/Modal/showMessage";

const MarketplaceDetail = ({ navigation, route }) => {
  const { product_id, business_id } = route.params;
  const [productDetail, setProductDetail] = useState({});
  const [cartData, setCartData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });
  useFocusEffect(
    React.useCallback(() => {
      getProductDetail({});
      setQuantity(1);
    }, [navigation, route])
  );
  const getProductDetail = async () => {
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
      if (data?.status === 200) {
        setProductDetail({
          ...data?.data,
          product_specification: JSON?.parse(data?.data?.product_specification),
        });
      } else {
        setProductDetail({});
      }
    } catch (error) {}
  };
  const removeFromCart = (item, value) => {
    setQuantity(value);
  };
  const addToCart = async (item, value) => {
    setQuantity(value);
  };
  const addProductOnCart = async (item, value, type) => {
    try {
      const params = {
        product_id: item?.product_id,
        quantity: value,
        business_id: item?.business_id,
        business_type: item?.business_type,
      };
      const { data } = await apiCall(
        "POST",
        apiEndPoints.ADD_TO_CART_PRODUCT,
        params
      );
      if (data?.status === 200) {
        if (type === "buynow") {
          onPressCart();
        } else {
          setMessageShow({
            visible: true,
            type: "success",
            message: data?.message,
          });
        }
      } else {
        setMessageShow({
          visible: true,
          type: "error",
          message: data?.message,
        });
      }
    } catch (e) {
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
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        cartData={cartData}
        onPressCart={onPressCart}
        quantity={quantity}
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
    </>
  );
};

export default MarketplaceDetail;
