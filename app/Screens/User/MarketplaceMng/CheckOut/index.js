import React, { useState, useContext, useEffect } from "react";
import { View, Alert } from "react-native";
import CommonStyles from "../../../../Utils/CommonStyles";
import CheckOutScreen from "./components/CheckOutScreen";
import _ from "lodash";
import { useFocusEffect } from "@react-navigation/native";
import { apiCall } from "../../../../Utils/httpClient";
import Loader from "../../../../Utils/Loader";
import Success from "../../../../Components/Modal/success";
import Error from "../../../../Components/Modal/showMessage";
import { ShoppingCartContext } from "../../../../Utils/UserContext";
import AsyncStorage from "@react-native-community/async-storage";
import QuestionModal from "../../../../Components/Modal/questionModal";
import apiEndPoints from "../../../../Utils/apiEndPoints";
import ShowMessage from "../../../../Components/Modal/showMessage";
const CheckOut = ({ navigation, route }) => {
  const [shoppingCartData, setShoppingCartData] = useState([]);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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
  const [removeItem, setRemoveItem] = useState(false);
  const [allDelete, setAllDelete] = useState(false);
  const [removeIndex, setRemoveIndex] = useState("");
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });

  useFocusEffect(
    React.useCallback(() => {
      handleFinalAmount();
      _handleDetails();
      return () => {
        handleFinalAmount();
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
    } catch (e) {
      console.log("🚀 ~ file: index.js:136 ~ e:", e);
    }
  };
  const validationForContinue = () => {
    if (location === []) {
      setErrorMessage("Please Select Location");
      setVisibleErr(true);
      return false;
    }
    console.log("🚀 ~ file: index.js:79 ~ onlineDetail:", onlineDetail);
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
  const onPressContinue = async () => {
    const valid = validationForContinue();
    navigation.navigate("ConfirmOrderView", {
      order_payment_type: order_payment_type,
      location: location
    });

    console.log("🚀 ~ file: index.js:109 ~ valid:", valid);
    if (valid) {
      try {
        const value = await AsyncStorage.getItem("productOrderData");
        console.log("🚀 ~ file: index.js:115 ~ value:", value);
        // if (value !== null) {
        const data = {
          businessDetail: JSON.parse(value).businessDetail,
          location: location,
          order_payment_type: order_payment_type,
          onlineDetail: onlineDetail,
        };
        await AsyncStorage.setItem("productOrderData", JSON.stringify(data));
        // }
      } catch (error) {
        setErrorMessage(error.message);
        setVisibleErr(true);
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
        // setErrorMessage(data.message);
        // setVisibleErr(true);
        // setVisible(false);
        setMessageShow({
          visible: true,
          type: "error",
          message: data?.message,
        });
      }
    } catch (error) {
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  const handleFinalAmount = () => {
    const FinalAmount = shoppingCartData.reduce(
      (accumulatedTotal, curr) => accumulatedTotal + curr.total_product_price,
      0
    );
    setFinalAmount(FinalAmount);
  };
  const DeleteCart = async () => {
    setShoppingCartData("");
    await AsyncStorage.removeItem("productOrderData");
    setAllDelete(false);
    navigation.navigate("ShopList");
  };
  const DeleteItem = (item) => {
    try {
      setVisible(true);
      setRemoveItem(false);
      if (shoppingCartData.length > 0) {
        var getIndex = _.findIndex(shoppingCartData, {
          product_id: item.product_id,
        });
        if (getIndex >= 0) {
          const cartLocalFunctionData = [...shoppingCartData];
          cartLocalFunctionData.splice(getIndex, 1);
          setShoppingCartData(cartLocalFunctionData);
          const FinalAmount = shoppingCartData.reduce(
            (accumulatedTotal, curr) =>
              accumulatedTotal + curr.total_product_price,
            0
          );
          setRemoveIndex("");
          setFinalAmount(FinalAmount);
          setReload(!reload);
          handleFinalAmount();
        }
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
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
        setRemoveItem={setRemoveItem}
        setRemoveIndex={setRemoveIndex}
        setAllDelete={setAllDelete}
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
      {/* <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => setVisibleSuccess(false)}
      /> */}
      <QuestionModal
        surringVisible={removeItem}
        topMessage={"Delete Product from Cart"}
        message={"Are you sure you want to delete product from cart ?"}
        positiveResponse={() => DeleteItem(removeIndex)}
        negativeResponse={() => setRemoveItem(false)}
      />
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
export default CheckOut;
