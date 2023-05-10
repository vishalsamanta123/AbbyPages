import React, { useState, useContext } from "react";
import { Image, View, Text, TouchableOpacity, Alert } from "react-native";
import PlaceOrder from "./component/PlaceOrder";
import styles from "./component/styles";
import {
  FONT_FAMILY_REGULAR,
  LIGHT_GREY_COLOR_CODE,
} from "../../../Utils/Constant";

import AsyncStorage from "@react-native-community/async-storage";
import _ from "lodash";
import CommonStyles from "../../../Utils/CommonStyles";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import { CartContext } from "../../../Utils/UserContext";
import Loader from "../../../Utils/Loader";
import Success from "../../../Components/Modal/success";
import Error from "../../../Components/Modal/showMessage";
import QuestionModal from "../../../Components/Modal/questionModal";
import { useFocusEffect } from "@react-navigation/native";
import { Images } from "../../../Utils/images";

const PlaceOrderView = ({ navigation }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const [removeItem, setRemoveItem] = useState(false);
  const [removeIndex, setRemoveIndex] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [cartData, setCartData] = useContext(CartContext);
  const [cartLocalData, setCartLocalData] = useState("");

  useFocusEffect(
    React.useCallback(() => {
      setCartLocalData(cartData);
      getOrderDetails();
      handleFinalAmount();
      return () => {
        setCartLocalData(cartData);
        handleFinalAmount();
      };
    }, [removeIndex])
  );
  const getOrderDetails = async () => {
    try {
      const orderData = await AsyncStorage.getItem("orderData");
      if (orderData !== "") {
        setBusinessName(JSON.parse(orderData).business_name);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
    }
  };

  const _handleDishItem = (item, index) => {
    return (
      <View style={styles.DishMainView}>
        <View style={styles.DishTextCOntain}>
          <TouchableOpacity
            style={{ marginLeft: 2, marginRight: 2 }}
            onPress={() => {
              setRemoveItem(true);
              setRemoveIndex(index);
            }}
          >
            <Image source={Images.MINUS_IMG} />
          </TouchableOpacity>
          <View style={{ paddingLeft: 5, flexDirection: "row" }}>
            <Text style={styles.DishTextStyle}>{item.quantity + " "}</Text>
            <Text style={styles.DishTextStyle}>{item.item_name}</Text>
          </View>
          {/* <Text style={{ fontFamily: FONT_FAMILY_REGULAR, color: LIGHT_GREY_COLOR_CODE }}>Plain</Text> */}
        </View>
        <Text style={styles.PriceDishText}>
          {"$ " +
            Number(parseFloat(item.total_item_price).toFixed(2)).toLocaleString(
              "en",
              {
                minimumFractionDigits: 2,
              }
            )}
        </Text>
      </View>
    );
  };

  const DeleteItem = (index) => {
    try {
      setVisible(true);
      setRemoveItem(false);
      const cartLocalFunctionData = [...cartLocalData];
      const newItems = cartLocalFunctionData?.filter(
        (ele, key) => key != index
      );
      setCartLocalData(newItems);
      setCartData(newItems);
      setRemoveIndex("");
      const FinalAmount = cartLocalFunctionData.reduce(
        (accumulatedTotal, curr) => accumulatedTotal + curr.total_item_price,
        0
      );
      setTotalAmount(FinalAmount);
      setVisible(false);
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(false);
      setVisible(false);
    }
  };
  const handleFinalAmount = (item, index) => {
    const FinalAmount = cartData.reduce(
      (accumulatedTotal, curr) => accumulatedTotal + curr.total_item_price,
      0
    );
    setTotalAmount(FinalAmount);
  };
  const checkoutPress = async () => {
    const orderData = await AsyncStorage.getItem("orderData");
    if (orderData !== "") {
      try {
        if (JSON.parse(orderData).order_payment_type == 2) {
          setVisible(true);
          const params = {
            amount: totalAmount.toString(),
            email: JSON.parse(orderData).email,
            user_name: JSON.parse(orderData).first_name,
            card_number: "424242424242" + JSON.parse(orderData).last4,
            // cvc: JSON.parse(orderData).validCVC.toString(),
            exp_month: JSON.parse(orderData).expiryMonth.toString(),
            exp_year: JSON.parse(orderData).expiryYear.toString(),
            zipcode: JSON.parse(orderData).postalCode,
          };
          const { data } = await apiCall(
            "POST",
            ENDPOINTS.ORDERPAYMENT,
            params
          );
          console.log("data PAyment: ", data);
          if (data.status === 200) {
            OnPressCheckOut();
          } else {
            setErrorMessage(data.message);
            setVisibleErr(true);
            setVisible(false);
          }
        } else {
          OnPressCheckOut();
        }
      } catch (error) {
        setErrorMessage(error.message);
        setVisibleErr(true);
        setVisible(false);
      }
    }
  };
  const OnPressCheckOut = async () => {
    setVisible(true);
    try {
      const orderData = await AsyncStorage.getItem("orderData");
      if (orderData !== "") {
        const params = {
          business_type: 1,
          business_id: JSON.parse(orderData).business_id,
          delivery_type: JSON.parse(orderData).delivery_type,
          item: cartData,
          first_name: JSON.parse(orderData).first_name,
          last_name: JSON.parse(orderData).last_name,
          email: JSON.parse(orderData).email,
          mobile: JSON.parse(orderData).mobile,
          address: JSON.parse(orderData)?.address?.location,
          latitude: JSON.parse(orderData)?.address?.latitude,
          longitude: JSON.parse(orderData)?.address?.longitude,
          order_description: JSON.parse(orderData).order_description,
          order_schedule_time: JSON.parse(orderData).order_schedule_time,
          order_payment_type: JSON.parse(orderData).order_payment_type,
          total_order_amount: totalAmount,
          order_discount: 0,
          total_amount: totalAmount,
          order_booking_type: 1,
        };
        const { data } = await apiCall(
          "POST",
          ENDPOINTS.BUSINESS_ITEM_ORDER,
          params
        );
        console.log("data: BUSINESS_ITEM_ORDER", data);
        if (data.status === 200) {
          setCartData([]);
          try {
            await AsyncStorage.removeItem("orderData");
          } catch (error) {
            setErrorMessage(error.message);
            setVisibleErr(true);
            setVisible(false);
          }
          setVisibleSuccess(true);
          setSuccessMessage(data.message);
          setVisible(false);
        } else {
          setErrorMessage(data.message);
          setVisibleErr(true);
          setVisible(false);
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
      <PlaceOrder
        totalAmount={totalAmount}
        setTotalAmount={setTotalAmount}
        cartLocalData={cartLocalData}
        businessName={businessName}
        _handleDishItem={_handleDishItem}
        checkoutPress={checkoutPress}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() =>
          navigation.navigate("OrderHistory", setVisibleSuccess(false))
        }
      />
      <QuestionModal
        surringVisible={removeItem}
        topMessage={"Delete Item From Cart"}
        message={"Are you sure want to delete this item from Your cart ?"}
        positiveResponse={() => DeleteItem(removeIndex)}
        negativeResponse={() => setRemoveItem(false)}
      />
    </View>
  );
};
export default PlaceOrderView;
