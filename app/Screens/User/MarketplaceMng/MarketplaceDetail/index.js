import { View, Text } from "react-native";
import React, { useState } from "react";
import MarkteplaceDetailView from "./components/MarkteplaceDetailView";
import { apiCall } from "../../../../Utils/httpClient";
import apiEndPoints from "../../../../Utils/apiEndPoints";
import { useFocusEffect } from "@react-navigation/native";

const MarketplaceDetail = ({ navigation, route }) => {
  const { product_id, business_id } = route.params;
  const [productDetail, setProductDetail] = useState({});
  const [productSpecification, setProductSpecification] = useState({});
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
  return <MarkteplaceDetailView productDetail={productDetail} />;
};

export default MarketplaceDetail;
