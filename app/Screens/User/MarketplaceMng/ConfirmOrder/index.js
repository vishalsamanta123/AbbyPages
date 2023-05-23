import React, { useState, useEffect } from "react";
import ConfirmOrder from "./components/ConfirmOrder";
import styles from "./components/styles";
import { View, Text, Image, ToastAndroid } from "react-native";
import _ from "lodash";
import CommonStyles from "../../../../Utils/CommonStyles";
import { apiCall } from "../../../../Utils/httpClient";
import Loader from "../../../../Utils/Loader";
import apiEndPoints from "../../../../Utils/apiEndPoints";
import ShowMessage from "../../../../Components/Modal/showMessage";
import { useFocusEffect } from "@react-navigation/native";
const ConfirmOrderView = ({ navigation, route }) => {
  const { order_payment_type, location } = route?.params;
  const [shoppingCartData, setShoppingCartData] = useState([]);
  const [localUserData, setLocalUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    description: "",
  });
  const [finalAmount, setFinalAmount] = useState("");

  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });

  const [onlineDetail, setOnlineDetail] = useState({
    brand: "",
    expiryMonth: "",
    expiryYear: "",
    last4: "",
    postalCode: "",
    validCVC: "",
    validExpiryDate: "",
    validNumber: "",
  });

  useEffect(() => {
    getUserData();
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      getCartProducts({});
    }, [navigation, route])
  );
  const getCartProducts = async () => {
    try {
      const { data } = await apiCall("GET", apiEndPoints.GET_TO_CART_PRODUCT);
      if (data?.status === 200) {
        setShoppingCartData(data?.data?.allProduct);
        setFinalAmount(data?.data?.total_amount);
      } else {
        setShoppingCartData({});
        setMessageShow({
          visible: true,
          type: "error",
          message: data?.message,
        });
      }
    } catch (e) {
      console.log("🚀 ~ file: index.js:136 ~ e:", e);
    }
  };
  const getUserData = async () => {
    try {
      const { data } = await apiCall("POST", apiEndPoints.GET_USER_PROFILE);
      if (data?.status === 200) {
        setLocalUserData({
          ...localUserData,
          first_name: data?.data?.first_name ? data.data.first_name : "",
          last_name: data?.data?.last_name ? data.data.last_name : "",
          email: data?.data?.email ? data.data.email : "",
          mobile: data?.data?.modile ? data?.data?.modile : "",
        });
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

  const _handleConfirmOrder = (item, index) => {
    return (
      <View key={index} style={styles.MainProductContain}>
        <Image
          style={styles.ProductImge}
          source={{ uri: item.product_image }}
        />
        <View style={styles.ProdctDetailView}>
          <Text style={styles.ProductNameText}>{item.product_name}</Text>
          <Text style={styles.ProductDescrptn}>{item.product_description}</Text>
          <Text style={styles.QuantityText}>Qty: {item.quantity}</Text>
        </View>
      </View>
    );
  };
  const validationForOrder = () => {
    if (localUserData.first_name == "") {
      setErrorMessage("Please Enter First Name");
      setVisibleErr(true);
      return false;
    }
    if (localUserData.last_name == "") {
      setErrorMessage("Please Enter Last Name");
      setVisibleErr(true);
      return false;
    }
    if (localUserData.email == "") {
      setErrorMessage("Please Enter Email");
      setVisibleErr(true);
      return false;
    }
    if (localUserData.mobile == "") {
      setErrorMessage("Please Enter Mobile Number");
      setVisibleErr(true);
      return false;
    }
    if (order_payment_type === 2) {
      if (onlineDetail.validNumber !== "Valid") {
        setErrorMessage("Please enter card number correctly");
        setVisibleErr(true);
        return false;
      }
      if (onlineDetail.brand !== "Visa") {
        setErrorMessage("Please enter card number starts from 42");
        setVisibleErr(true);
        return false;
      }
      if (onlineDetail.validExpiryDate !== "Valid") {
        setErrorMessage("Please enter correct expiry date");
        setVisibleErr(true);
        return false;
      }
      if (onlineDetail.validCVC !== "Valid") {
        setErrorMessage("Please enter correct cvc number");
        setVisibleErr(true);
        return false;
      }
      if (onlineDetail.postalCode === "" || null) {
        setErrorMessage("Please enter postal code card details");
        setVisibleErr(true);
        return false;
      }
      return true;
    }
    return true;
  };
  const confirmPress = async () => {
    const valid = validationForOrder();
    if (valid) {
      try {
        if (order_payment_type === 2) {
          setVisible(true);
          const onlineDetails = onlineDetail;
          const params = {
            amount: Number(finalAmount),
            email: localUserData.email,
            user_name: localUserData.first_name,
            card_number: "424242424242" + onlineDetails.last4,
            // cvc: onlineDetails.validCVC.toString(),
            exp_month: onlineDetails.expiryMonth.toString(),
            exp_year: onlineDetails.expiryYear.toString(),
            zipcode: onlineDetails.postalCode,
          };
          const { data } = await apiCall(
            "POST",
            apiEndPoints.ORDERPAYMENT,
            params
          );
          if (data?.status === 200) {
            onPressConfirm();
            ToastAndroid.show(data?.message, ToastAndroid.SHORT);
          } else {
            setVisible(false);
            setMessageShow({
              visible: true,
              type: "error",
              message: data?.message,
            });
          }
        } else {
          onPressConfirm();
        }
      } catch (error) {
        setVisible(false);
        setMessageShow({
          visible: true,
          type: "error",
          message: error?.message,
        });
      }
    }
  };
  const onPressConfirm = async () => {
    console.log("ON CONFIRM API CALLED");
    try {
      setVisible(true);
      const params = {
        product_items: shoppingCartData,
        first_name: localUserData.first_name,
        last_name: localUserData.last_name,
        email: localUserData.email,
        mobile: localUserData.mobile,
        address: location[0].location,
        latitude: Number(location[0].latitude),
        longitude: Number(location[0].longitude),
        order_payment_type: order_payment_type, //online or COD
        total_order_amount: finalAmount,
        total_amount: finalAmount,
        order_discount: 0,
        delivery_type: 1, //takeaway or delievery
        order_booking_type: 2, //table ,outside,foodand item
        order_description: "",
      };
      console.log("🚀 ~ file: index.js:267 ~ params:", params);
      console.log("🚀 ~ file: index.js:269 ~ data:", data);
      const { data } = await apiCall(
        "POST",
        apiEndPoints.PRODUCT_ORDER_BOOKING,
        params
      );
      if (data?.status == 200) {
        setVisible(false);
        setShoppingCartData([]);
        navigation.navigate("OrderHistory");
        setMessageShow({
          visible: true,
          type: "success",
          message: data?.message,
        });
      } else {
        setVisible(false);
        setMessageShow({
          visible: true,
          type: "error",
          message: data?.message,
        });
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
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <ConfirmOrder
        confirmPress={confirmPress}
        localUserData={localUserData}
        setLocalUserData={setLocalUserData}
        shoppingCartData={shoppingCartData}
        _handleConfirmOrder={_handleConfirmOrder}
        setOnlineDetail={setOnlineDetail}
        order_payment_type={order_payment_type}
        location={location}
      />
      <ShowMessage
        visible={messageShow?.visible || visibleErr}
        message={messageShow?.message || errorMessage}
        messageViewType={messageShow?.type}
        onEndVisible={() => {
          setMessageShow({
            visible: false,
            message: "",
            type: "",
          });
          setVisibleErr(false);
        }}
      />
    </View>
  );
};
export default ConfirmOrderView;
