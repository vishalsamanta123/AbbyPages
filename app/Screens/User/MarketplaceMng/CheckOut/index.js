import React, { useState } from "react";
import { View } from "react-native";
import CommonStyles from "../../../../Utils/CommonStyles";
import CheckOutScreen from "./components/CheckOutScreen";
import _ from "lodash";
import { useFocusEffect } from "@react-navigation/native";
import { apiCall } from "../../../../Utils/httpClient";
import Loader from "../../../../Utils/Loader";
import apiEndPoints from "../../../../Utils/apiEndPoints";
import ShowMessage from "../../../../Components/Modal/showMessage";

const CheckOut = ({ navigation, route }) => {
  const [shoppingCartData, setShoppingCartData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [reload, setReload] = useState(false);
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
  const [addressListVisible, setAddressListVisible] = useState(false);
  const [finalAmount, setFinalAmount] = useState("");
  const [locationList, setLocationList] = useState([]);
  const [location, setLocation] = useState([]);
  const [order_payment_type, setOrderPaymentType] = useState(1);
  const [removeIndex, setRemoveIndex] = useState("");
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });

  useFocusEffect(
    React.useCallback(() => {
      _handleDetails();
      return () => {
        _handleDetails();
      };
    }, [reload, removeIndex])
  );
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
    } catch (e) {}
  };
  const validationForContinue = () => {
    if (location === []) {
      setMessageShow({
        visible: true,
        type: "error",
        message: "Please Select Location",
      });
      return false;
    }
    return true;
  };
  const onPressContinue = async () => {
    const valid = validationForContinue();
    if (valid) {
      try {
        navigation.navigate("ConfirmOrderView", {
          order_payment_type: order_payment_type,
          location: location,
        });
      } catch (error) {
        setMessageShow({
          visible: true,
          type: "error",
          message: error?.message,
        });
      }
    }
  };

  const _handleDetails = async () => {
    setVisible(true);
    try {
      const { data } = await apiCall("POST", apiEndPoints.DASHBOARD_DETAILS);
      if (data.status === 200) {
        setLocationList(data.data.user_location);
        if (data.data.user_location) {
          var getLocation = _.filter(data.data.user_location, {
            primary_status: 1,
          });
          setLocation(getLocation);
        }
        setVisible(false);
      } else {
        setVisible(false);
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
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <CheckOutScreen
        order_payment_type={order_payment_type}
        setOrderPaymentType={setOrderPaymentType}
        onPressAddAddress={() =>
          navigation.navigate("AddLocation", setAddressListVisible(false))
        }
        addressListVisible={addressListVisible}
        setAddressListVisible={setAddressListVisible}
        location={location}
        setLocation={setLocation}
        locationList={locationList}
        finalAmount={finalAmount}
        shoppingCartData={shoppingCartData} //context
        onPressContinue={onPressContinue}
        setRemoveIndex={setRemoveIndex}
        onlineDetail={onlineDetail}
        setOnlineDetail={setOnlineDetail}
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
    </View>
  );
};
export default CheckOut;
