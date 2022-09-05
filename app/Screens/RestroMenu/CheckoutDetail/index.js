import React, { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import CommonStyles from "../../../Utils/CommonStyles";
import CheckoutDetail from "./components/CheckoutDetail";
import AsyncStorage from "@react-native-community/async-storage";
import { UserContext, AuthContext } from "../../../Utils/UserContext";
import Loader from "../../../Utils/Loader";
import Success from "../../../Components/Modal/success";
import Error from "../../../Components/Modal/error";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import { apiCall } from "../../../Utils/httpClient";
const CheckoutDetailView = ({ navigation }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const [localUserData, setLocalUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    order_payment_type: "",
    order_description: "",
  });
  const [location, setLocation] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [delivery_type, setDeliveryType] = useState("");
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
    AsyncStoragefunction();
  }, []);
  const AsyncStoragefunction = async () => {
    const orderData = await AsyncStorage.getItem("orderData");
    if (orderData !== "") {
      setDateTime(JSON.parse(orderData).order_schedule_time);
      if (orderData?.address !== null) {
        setLocation(JSON.parse(orderData)?.address);
      }
      setDeliveryType(JSON.parse(orderData).delivery_type);
    }
    try {
      setVisible(true);
      const { data } = await apiCall("POST", ENDPOINTS.GET_USER_PROFILE);
      if (data.status === 200) {
        setLocalUserData({
          ...localUserData,
          first_name: data?.data?.first_name ? data?.data.first_name : "",
          last_name: data?.data?.last_name ? data?.data.last_name : "",
          email: data?.data?.email ? data?.data?.email : "",
          mobile: data?.data?.phone ? data?.data?.phone : "",
          order_payment_type: 1,
        });
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const onPressPaymentMethod = (resp) => {
    setLocalUserData({
      ...localUserData,
      order_payment_type: resp == 2 ? 1 : 2,
    });
  };
  function validationFrom() {
    if (localUserData.first_name == "") {
      setErrorMessage("Please enter name");
      setVisibleErr(true);
      return false;
    }
    if (localUserData.last_name == "") {
      setErrorMessage("Please enter lastname");
      setVisibleErr(true);
      return false;
    }
    if (localUserData.email == "") {
      setErrorMessage("Please enter email");
      setVisibleErr(true);
      return false;
    }
    if (localUserData.mobile == "") {
      setErrorMessage("Please enter phone no.");
      setVisibleErr(true);
      return false;
    }
    if (localUserData.order_payment_type === "") {
      setErrorMessage("Please Select Payment Method");
      setVisibleErr(true);
      return false;
    }
    if (localUserData.order_description === "") {
      setErrorMessage("Please enter order description");
      setVisibleErr(true);
      return false;
    }
    if (delivery_type === 1) {
      if (location?.location == "") {
        setErrorMessage("Please enter address for delievery address");
        setVisibleErr(true);
        return false;
      }
    }
    if (localUserData.order_payment_type === 2) {
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
    }
    return true;
  }
  const onPressContinue = async () => {
    const valid = validationFrom();
    if (valid) {
      try {
        const orderData = await AsyncStorage.getItem("orderData");
        if (orderData !== "") {
          const {
            brand = "",
            expiryMonth = "",
            expiryYear = "",
            last4 = "",
            postalCode = "",
            validCVC = "",
            validExpiryDate = "",
            validNumber = "",
          } = onlineDetail || {};
          const {
            first_name = "",
            last_name = "",
            mobile = "",
            email = "",
            order_payment_type = "",
            order_description = "",
          } = localUserData || {};
          const {
            business_id = "",
            address = "",
            order_schedule_time = "",
            business_name = "",
            delivery_type = "",
          } = JSON.parse(orderData) || {};

          setVisible(true);
          const params = {
            business_id,
            address,
            order_schedule_time,
            business_name,
            delivery_type,
            first_name,
            last_name,
            email,
            mobile,
            order_payment_type,
            order_description,
            brand,
            expiryMonth,
            expiryYear,
            last4,
            postalCode,
            validCVC,
            validExpiryDate,
            validNumber,
          };
          await AsyncStorage.setItem("orderData", JSON.stringify(params));
          setVisible(false);
          navigation.navigate("PlaceOrder");
        }
      } catch (error) {
        setErrorMessage(error.message);
        setVisibleErr(true);
      }
    }
    // navigation.navigate("PlaceOrder");
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <CheckoutDetail
        delivery_type={delivery_type}
        dateTime={dateTime}
        location={location}
        localUserData={localUserData}
        setLocalUserData={setLocalUserData}
        onPressPaymentMethod={onPressPaymentMethod}
        onPressContinue={onPressContinue}
        onlineDetail={onlineDetail}
        setOnlineDetail={setOnlineDetail}
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
export default CheckoutDetailView;
