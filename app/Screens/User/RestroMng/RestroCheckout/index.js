import React, { useState, useEffect, useContext } from "react";
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
import { CartContext, UserContext } from "../../../../Utils/UserContext";
import moment from "moment";
import { Constants } from "../../../../Utils/Constant";

const RestroCheckout = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [userData, setUserData] = useContext(UserContext);
  const [cartData, setCartData] = useContext(CartContext);

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
    latitude: "",
    location: "",
    longitude: "",
    date_time: moment().format(Constants.TIME_DATE_FORMAT),
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
    handleGetData();
  }, []);
  const handleGetData = async () => {
    setVisible(true);
    setLocalUserData({
      ...localUserData,
      first_name: userData?.first_name ? userData.first_name : "",
      last_name: userData?.last_name ? userData.last_name : "",
      email: userData?.email ? userData?.email : "",
      mobile: userData?.mobile ? userData?.mobile : "",
      order_payment_type: 1,
      latitude: userData?.latitude ? userData.latitude : "",
      location: userData?.location ? userData.location : "",
      longitude: userData?.longitude ? userData.longitude : "",
      date_time: moment().format(Constants.TIME_DATE_FORMAT),
    });
    setVisible(false);
  };
  const onPressPaymentMethod = (resp) => {
    setLocalUserData({
      ...localUserData,
      order_payment_type: resp === 2 ? 1 : 2,
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
    } else if (localUserData.last_name == "") {
      setMessageShow({
        visible: true,
        message: "Please enter lastname",
        type: "error",
      });
      return false;
    } else if (localUserData.email == "") {
      setMessageShow({
        visible: true,
        message: "Please enter email",
        type: "error",
      });
      return false;
    } else if (localUserData.mobile == "") {
      setMessageShow({
        visible: true,
        message: "Please enter phone number",
        type: "error",
      });
      return false;
    } else if (localUserData.order_payment_type === "") {
      setMessageShow({
        visible: true,
        message: "Please Select Payment Method",
        type: "error",
      });
      return false;
    } else if (localUserData.order_description === "") {
      setMessageShow({
        visible: true,
        message: "Please enter order description",
        type: "error",
      });
      return false;
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
            latitude = "",
            location = "",
            longitude = "",
            date_time = "",
          } = localUserData || {};
          setVisible(true);
          const params = {
            location,
            latitude,
            longitude,
            date_time,
            delivery_type: cartData[0]?.delivery_type,
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
          setVisible(false);
          navigation.navigate("RestroPlaceOrder", { orderData: params });
      } catch (error) {}
    }
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <RestroCheckoutView
        localUserData={localUserData}
        setLocalUserData={setLocalUserData}
        onPressPaymentMethod={onPressPaymentMethod}
        onPressContinue={onPressContinue}
        onlineDetail={onlineDetail}
        setOnlineDetail={setOnlineDetail}
        cartData={cartData}
      />
      <ShowMessage
        visible={messageShow?.visible}
        message={messageShow?.message}
        messageViewType={messageShow?.type}
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
