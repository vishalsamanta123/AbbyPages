import React, { useState, useEffect } from "react";
import { View } from "react-native";
import CommonStyles from "../../../../Utils/CommonStyles";
import RestroCheckoutView from "./components/RestroCheckoutView";
import AsyncStorage from "@react-native-community/async-storage";
import Loader from "../../../../Utils/Loader";
import Success from "../../../../Components/Modal/success";
import Error from "../../../../Components/Modal/showMessage";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import { apiCall } from "../../../../Utils/httpClient";
import ShowMessage from "../../../../Components/Modal/showMessage";

const RestroCheckout = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });

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
    } catch (error) {}
  };
  const onPressPaymentMethod = (resp) => {
    setLocalUserData({
      ...localUserData,
      order_payment_type: resp == 2 ? 1 : 2,
    });
  };
  function validationFrom() {
    if (localUserData.first_name == "") {
      setMessageShow({
        visible: true,
        message: "Please enter name",
        type: "error",
      });
      return false;
    }
    if (localUserData.last_name == "") {
      setMessageShow({
        visible: true,
        message: "Please enter lastname",
        type: "error",
      });
      return false;
    }
    if (localUserData.email == "") {
      setMessageShow({
        visible: true,
        message: "Please enter email",
        type: "error",
      });
      return false;
    }
    if (localUserData.mobile == "") {
      setMessageShow({
        visible: true,
        message: "Please enter phone number",
        type: "error",
      });
      return false;
    }
    if (localUserData.order_payment_type === "") {
      setMessageShow({
        visible: true,
        message: "Please Select Payment Method",
        type: "error",
      });
      return false;
    }
    if (localUserData.order_description === "") {
      setMessageShow({
        visible: true,
        message: "Please enter order description",
        type: "error",
      });
      return false;
    }
    if (delivery_type === 1) {
      if (location?.location == "") {
        setMessageShow({
          visible: true,
          message: "Please enter address for delievery address",
          type: "error",
        });
        return false;
      }
    }
    if (localUserData.order_payment_type === 2) {
      if (onlineDetail.validNumber !== "Valid") {
        setMessageShow({
          visible: true,
          message: "Please enter card number correctly",
          type: "error",
        });
        return false;
      }
      if (onlineDetail.brand !== "Visa") {
        setMessageShow({
          visible: true,
          message: "Please enter card number starts from 42",
          type: "error",
        });
        return false;
      }
      if (onlineDetail.validExpiryDate !== "Valid") {
        setMessageShow({
          visible: true,
          message: "Please enter correct expiry date",
          type: "error",
        });
        return false;
      }
      if (onlineDetail.validCVC !== "Valid") {
        setMessageShow({
          visible: true,
          message: "Please enter correct cvc number",
          type: "error",
        });
        return false;
      }
      if (onlineDetail.postalCode === "" || null) {
        setMessageShow({
          visible: true,
          message: "Please enter postal code card details",
          type: "error",
        });
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
      } catch (error) {}
    }
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <RestroCheckoutView
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
      <ShowMessage
        visible={messageShow?.visible}
        message={messageShow?.message}
        messageViewType={messageShow?.type}
        position={messageShow?.type === "success" ? "bottom" : "top"}
        onEndVisible={() =>
          setMessageShow({
            visible: false,
            type: "",
            message: "",
          })
        }
      />
    </View>
  );
};
export default RestroCheckout;
