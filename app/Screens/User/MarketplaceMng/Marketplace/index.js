import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import MarketplaceView from "./components/MarketplaceView";
import { apiCall } from "../../../../Utils/httpClient";
import apiEndPoints from "../../../../Utils/apiEndPoints";
import { useFocusEffect } from "@react-navigation/native";
import ShowMessage from "../../../../Components/Modal/showMessage";

const MarketplaceScreen = ({ navigation, route }) => {
  const [isVisibleFilters, setIsVisibleFilters] = useState(false);
  const [subCategories, setSubCategories] = useState([]);
  const [productList, setProductList] = useState([]);
  const [canGoBack, setCanGoBack] = useState(true);
  const [likeData, setLikedata] = useState({});
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });

  useFocusEffect(
    React.useCallback(() => {
      setSubCategories([]);
      getProductList({});
    }, [navigation, route])
  );

  useEffect(() => {
    getProductList({});
  }, [likeData]);

  const handleCategoryPress = async (cat_name) => {
    getProductList({
      cat_name: cat_name,
    });
    try {
      const params = {
        business_type: 2,
        parents_name: cat_name,
      };
      const { data } = await apiCall(
        "POST",
        apiEndPoints.PRODUCT_CATEGORY_LIST,
        params
      );
      if (data.status === 200) {
        setSubCategories(data.data);
      } else {
        setSubCategories([]);
      }
    } catch (error) {}
  };
  const getProductList = async (info) => {
    try {
      const params = {
        category_id: null,
        category_name: info?.cat_name,
        sub_category_id: null,
        product_color: null,
        company_brand: null,
        product_size: null,
        min_price: 0,
        max_price: null,
        product_tags: null,
        status: 1,
      };
      if (typeof info.cat_name === "undefined") {
        setCanGoBack(true);
      } else {
        setCanGoBack(false);
      }
      const { data } = await apiCall(
        "POST",
        apiEndPoints.PRODUCT_FILTER_DATA,
        params
      );
      if (data.status === 200) {
        setProductList(data.data);
      } else {
        setProductList([]);
      }
    } catch (error) {}
  };

  const onPressLike = async (item) => {
    try {
      const params = {
        favorite: item?.product_user_favorite === 0 ? 1 : 0,
        interest: 0,
        item_id: item?.product_id,
        item_type: 2,
        like: item?.product_user_favorite === 0 ? 1 : 0,
        views: 0,
      };
      const { data } = await apiCall(
        "POST",
        apiEndPoints.USERCOMMONLIKES,
        params
      );
      if (data.status === 200) {
        setLikedata(data);
      } else {
        setLikedata({});
        setMessageShow({
          visible: true,
          type: "error",
          message: data?.message,
        });
      }
    } catch (error) {
      setMessageShow({
        visible: true,
        type: "error",
        message: error?.message,
      });
    }
  };
  const handleProductPress = (data) => {
    navigation.navigate("MarketplaceDetail", {
      product_id: data.product_id,
      business_id: data.business_id,
    });
  };
  const onBackPress = () => {
    if (canGoBack) {
      navigation.goBack();
    } else {
      setSubCategories([]);
      getProductList({});
    }
  };
  return (
    <>
      <MarketplaceView
        isVisibleFilters={isVisibleFilters}
        setIsVisibleFilters={setIsVisibleFilters}
        subCategories={subCategories}
        handleCategoryPress={handleCategoryPress}
        productList={productList}
        onBackPress={onBackPress}
        onPressLike={onPressLike}
        handleProductPress={handleProductPress}
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

export default MarketplaceScreen;
