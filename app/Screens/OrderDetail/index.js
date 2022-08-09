import React, { useState, useEffect } from "react";
import { Alert, ToastAndroid, View } from "react-native";
import CommonStyles from "../../Utils/CommonStyles";
import OrderDetailScreen from "./components/OrderDetailScreen";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Success from "../../Components/Modal/success";
import Error from "../../Components/Modal/error";
const OrderDetailIndex = ({ route, navigation }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [orderDetail, setOrderDetail] = useState("");
  const [businessType, setBusinessType] = useState("");
  useEffect(() => {
    if (route.params) {
      const { OrderDetail } = route.params;
      setBusinessType(OrderDetail.business_type);
      getOrderDetail(OrderDetail);
    }
  }, []);
  const getOrderDetail = async (orderDetail) => {
    setVisible(true);
    try {
      const params = {
        order_id: orderDetail.order_id,
        business_type: orderDetail.business_type,
        order_booking_type: orderDetail.order_booking_type,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.BUSINESS_ITEM_ORDER_DETAILS,
        params
      );
      if (data.status === 200) {
        setOrderDetail(data.data);
        setVisible(false);
      } else {
        setErrorMessage(data.message);
        setVisible(false);
        setVisibleErr(true);
      }
    } catch (error) {
      setErrorMessage(error);
      setVisible(false);
      setVisibleErr(true);
    }
  };
  const onPressCancel = () => {
    Alert.alert(
      "",
      "Are you sure you want cancel this order",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => cancelOrder() },
      ],
      { cancelable: false }
    );
  };
  const cancelOrder = async () => {
    try {
      setVisible(true);
      const params = {
        order_id: orderDetail.order_id,
        business_type: orderDetail.business_type,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.ORDER_CANCEL_BYUSER,
        params
      );
      if (data.status === 200) {
        setVisible(false);
        ToastAndroid.show(data.message, ToastAndroid.LONG);
        getOrderDetail(orderDetail);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const onPressInvoice = () => {
    alert("Working");
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <OrderDetailScreen
        orderDetail={orderDetail}
        onPressCancel={onPressCancel}
        onPressInvoice={onPressInvoice}
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
export default OrderDetailIndex;
