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

  const [userData, setUserData] = useContext(UserContext);
  const [localUserData, setLocalUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    order_payment_type: "",
    order_description: "",
  });
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [location, setLocation] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [delivery_type, setDeliveryType] = useState("");

  const [AddCard, setAddCard] = useState("");
  const [CardNumber, setCardNumber] = useState("");
  const [CardExpiry, setCardExpiry] = useState("");
  const [CVVNumber, setCVVNumber] = useState("");
  const [ZipCode, setZipCode] = useState("");
  useEffect(() => {
    AsyncStoragefunction();
  }, []);
  const AsyncStoragefunction = async () => {
    const orderData = await AsyncStorage.getItem("orderData");
    if (orderData !== "") {
      setDateTime(JSON.parse(orderData).order_schedule_time);
      setLocation(JSON.parse(orderData).address);
      setDeliveryType(JSON.parse(orderData).delivery_type);
    }
    const { data } = await apiCall("POST", ENDPOINTS.GET_USER_PROFILE);
    if (data.status === 200) {
      setLocalUserData({
        ...localUserData,
        first_name: data?.data?.first_name ? data?.data.first_name : "",
        last_name: data?.data?.last_name ? data?.data.last_name : "",
        email: data?.data?.email ? data?.data?.email : "",
        mobile: data?.data?.phone ? data?.data?.phone : "",
        order_payment_type: paymentMethod ? 1 : 2,
      });
    }
  };
  const onPressPaymentMethod = () => {
    setPaymentMethod(!paymentMethod);
    setLocalUserData({
      ...localUserData,
      order_payment_type: paymentMethod ? 1 : 2,
    });
    console.log(
      "localUserData.order_payment_type",
      localUserData.order_payment_type
    );
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
    if (paymentMethod) {
      if (AddCard === "") {
        setErrorMessage("Please enter online order phone number");
        setVisibleErr(true);
        return false;
      }
      if (CardNumber === "") {
        setErrorMessage("Please enter online Card number");
        setVisibleErr(true);
        return false;
      }
      if (CardExpiry === "") {
        setErrorMessage("Please enter online card expiry number");
        setVisibleErr(true);
        return false;
      }
      if (CVVNumber === "") {
        setErrorMessage("Please enter online card cvv number");
        setVisibleErr(true);
        return false;
      }
      if (ZipCode === "") {
        setErrorMessage("Please enter online zipCode");
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
            AddCard,
            CardNumber,
            CardExpiry,
            CVVNumber,
            ZipCode,
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
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        onPressContinue={onPressContinue}
        AddCard={AddCard}
        CardNumber={CardNumber}
        CardExpiry={CardExpiry}
        CVVNumber={CVVNumber}
        ZipCode={ZipCode}
        setAddCard={setAddCard}
        setCardNumber={setCardNumber}
        setCardExpiry={setCardExpiry}
        setCVVNumber={setCVVNumber}
        setZipCode={setZipCode}
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
