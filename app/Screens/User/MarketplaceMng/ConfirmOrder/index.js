import React, { useState, useContext, useEffect } from "react";
import ConfirmOrder from "./components/ConfirmOrder";
import styles from "./components/styles";
import { View, Text, Image, Alert, ToastAndroid } from "react-native";
import _ from "lodash";
import CommonStyles from "../../../../Utils/CommonStyles";
import { apiCall } from "../../../../Utils/httpClient";
import Loader from "../../../../Utils/Loader";
import Success from "../../../../Components/Modal/success";
import Error from "../../../../Components/Modal/showMessage";
import {
  ShoppingCartContext,
  UserContext,
} from "../../../../Utils/UserContext";
import AsyncStorage from "@react-native-community/async-storage";
import QuestionModal from "../../../../Components/Modal/questionModal";
import apiEndPoints from "../../../../Utils/apiEndPoints";
import ShowMessage from "../../../../Components/Modal/showMessage";
import { useFocusEffect } from "@react-navigation/native";
const ConfirmOrderView = ({ navigation, route }) => {
  const { order_payment_type, location } = route?.params;
  const [userData, setUserData] = useContext(UserContext);
  const [shoppingCartData, setShoppingCartData] = useState([]);
  const [localUserData, setLocalUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    description: "",
  });
  const [total_order_amount, setTotalOrderAmount] = useState("");
  const [finalAmount, setFinalAmount] = useState("");

  const [orderData, setOrderData] = useState("");
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [allDelete, setAllDelete] = useState(false);
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
    handleFinalAmount();
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      getCartProducts({});
    }, [navigation, route])
  );
  const getCartProducts = async (item, value) => {
    try {
      const { data } = await apiCall("GET", apiEndPoints.GET_TO_CART_PRODUCT);

      if (data.status === 200) {
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
  const handleFinalAmount = async () => {
    const productOrderData = await AsyncStorage.getItem("productOrderData");
    console.log("🚀 ~ file: index.js:40 ~ productOrderData:", productOrderData);
    setOrderData(JSON.parse(productOrderData));
    const total_order_amount = shoppingCartData.reduce(
      (accumulatedTotal, curr) => accumulatedTotal + curr.total_product_price,
      0
    );
    setTotalOrderAmount(total_order_amount);
    try {
      const { data } = await apiCall("POST", apiEndPoints.GET_USER_PROFILE);
      console.log("🚀 ~ file: index.js:48 ~ data:", data);
      if (data.status === 200) {
        setLocalUserData({
          ...localUserData,
          first_name: data?.data?.first_name ? data.data.first_name : "",
          last_name: data?.data?.last_name ? data.data.last_name : "",
          email: data?.data?.email ? data.data.email : "",
          mobile: data?.data?.modile ? data?.data?.modile : "",
        });
      }
    } catch (error) {
      // setErrorMessage(error.message);
      // setVisibleErr(true);
      // setVisible(false);
      setMessageShow({
        visible: true,
        type: "error",
        message: data?.message,
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
    console.log("🚀 ~ file: index.js:104 ~ valid:", valid);
    console.log(
      "🚀 ~ file: index.js:109 ~ orderData.order_payment_type:",
      order_payment_type
    );
    if (valid) {
      try {
        if (order_payment_type === 2) {
          console.log("🚀 ~ file: index.js:194 ~ onlineDetails:", onlineDetail);
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
          console.log("🚀 ~ file: index.js:204 ~ params:", params);
          const { data } = await apiCall(
            "POST",
            apiEndPoints.ORDERPAYMENT,
            params
          );
          console.log("🚀 ~ file: index.js:205 ~ data: ORDERPAYMENT", data);

          if (data.status === 200) {
            onPressConfirm();
            ToastAndroid.show(data.message, ToastAndroid.SHORT);
          } else {
            // setErrorMessage(data.message);
            // setVisibleErr(true);
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
        // setErrorMessage(error.message);
        // setVisibleErr(true);
        setVisible(false);
        setMessageShow({
          visible: true,
          type: "error",
          message: data?.message,
        });
      }
    }
  };
  const onPressConfirm = async () => {
    console.log("ON CONFIRM API CALLED");
    try {
      setVisible(true);
      // product_items,
      // total_amount,
      // first_name,
      // last_name,
      // email,
      // mobile,
      // total_order_amount,
      // order_description,
      // order_discount,
      // address,
      // latitude,
      // longitude,
      // order_schedule_time,
      // order_payment_type,
      // order_booking_type,
      // delivery_type
      const params = {
        // product_items: JSON.stringify(shoppingCartData),
        product_items: shoppingCartData,
        first_name: localUserData.first_name,
        last_name: localUserData.last_name,
        email: localUserData.email,
        mobile: localUserData.mobile,
        // business_type: orderData.businessDetail.business_type,
        // business_id: orderData.businessDetail.business_id,
        address: location[0].location,
        latitude: Number(location[0].latitude),
        longitude: Number(location[0].longitude),
        order_payment_type: order_payment_type, //online or COD
        total_order_amount: finalAmount,
        total_amount: finalAmount,
        order_discount: 0,
        delivery_type: 1, //takeaway or delievery
        order_booking_type: 2, //table ,outside,foodand item
        order_description: 'd'
      };
      const { data } = await apiCall(
        "POST",
        apiEndPoints.PRODUCT_ORDER_BOOKING,
        params
      );
      console.log("PARMAS", params);
      console.log("🚀 ~ file: index.js:257 ~ data:", data);

      if (data.status == 200) {
        setSuccessMessage(data.message);
        setVisibleSuccess(true);
        setVisible(false);
        setShoppingCartData("");
      } else {
        // setErrorMessage(data.message);
        // setVisibleErr(true);
        setVisible(false);
        setMessageShow({
          visible: true,
          type: "error",
          message: data?.message,
        });
      }
    } catch (error) {
      // setErrorMessage(error.message);
      // setVisibleErr(true);
      // setVisible(false);
      setVisible(false);
      setMessageShow({
        visible: true,
        type: "error",
        message: error?.message,
      });
      console.log("🚀 ~ file: index.js:297 ~ error?.message:", error?.message);
    }
  };
  const DeleteCart = async () => {
    setShoppingCartData("");
    await AsyncStorage.removeItem("productOrderData");
    setAllDelete(false);
    navigation.navigate("ShopList");
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <ConfirmOrder
        orderData={orderData}
        confirmPress={confirmPress}
        localUserData={localUserData}
        setLocalUserData={setLocalUserData}
        shoppingCartData={shoppingCartData}
        _handleConfirmOrder={_handleConfirmOrder}
        setAllDelete={setAllDelete}
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
          setVisibleErr(false)
        }}
      />
      {/* <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => {
          navigation.navigate("OrderHistory"), setVisibleSuccess(false);
        }}
      /> */}
      <QuestionModal
        surringVisible={allDelete}
        topMessage={"Delete Carts"}
        message={"Do you want to delete this carts ?"}
        positiveResponse={() => DeleteCart()}
        negativeResponse={() => setAllDelete(false)}
      />
    </View>
  );
};
export default ConfirmOrderView;
