import React, { useState, useEffect } from "react";
import { View, Alert } from "react-native";
import BusinessProductDetails from "./components/BusinessProductDetails";
import CommonStyles from "../../../Utils/CommonStyles";
import { apiCall, setDefaultHeader } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import Error from "../../../Components/Modal/showMessage";
import Success from "../../../Components/Modal/success";
import moment from "moment";
import { useFocusEffect, useLinkProps } from "@react-navigation/native";
import QuestionModal from "../../../Components/Modal/questionModal";

const OrderDetail = ({ route, navigation }) => {
  const Id = route?.params?.productData || null;
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState(false);
  const [ProductData, setProductData] = useState();

  useFocusEffect(
    React.useCallback(() => {
      productDetailsFun();
      return () => productDetailsFun();
    }, [])
  );
  const productDetailsFun = async () => {
    setVisible(true);
    try {
      const params = {
        product_id: Id,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_BUSINESS_PRODUCT_DETAILS,
        params
      );
      if (data.status === 200) {
        setProductData(data.data);
        setVisible(false);
      } else {
        setVisible(false);
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const productStatus = async ({ id, status, is_delete }) => {
    setVisible(true);
    try {
      const params = {
        is_delete: is_delete,
        product_id: id,
        status: status,
      };
      setDeleteProduct(false);
      const response = await apiCall(
        "POST",
        ENDPOINTS.PRODUCT_STATUS_UPDATE,
        params
      );
      if (response.status === 200) {
        navigation.navigate("MyProductList");
        setVisible(false);
      } else {
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const editProduct = () => {
    navigation.navigate("AddBusinessProduct", {
      productId: Id,
      type: "Edit",
    });
  };

  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <BusinessProductDetails
        ProductData={ProductData}
        editProduct={editProduct}
        productStatus={productStatus}
        setDeleteProduct={setDeleteProduct}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => ("Home", setVisibleSuccess(false))}
      />
      <QuestionModal
        message={"Are you sure you want delete this product?"}
        surringVisible={deleteProduct}
        positiveResponse={() =>
          productStatus({
            id: ProductData?.product_id,
            status: ProductData?.status,
            is_delete: 1,
          })
        }
        negativeResponse={() => setDeleteProduct(false)}
      />
    </View>
  );
};
export default OrderDetail;
