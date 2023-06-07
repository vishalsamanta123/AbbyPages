import React, { useState, useContext } from "react";
import { Image, View, Text, TouchableOpacity, Alert } from "react-native";
import RestroPlaceOrderView from "./component/RestroPlaceOrderView";
import styles from "./component/styles";
import AsyncStorage from "@react-native-community/async-storage";
import _ from "lodash";
import CommonStyles from "../../../../Utils/CommonStyles";
import { apiCall } from "../../../../Utils/httpClient";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import { CartContext } from "../../../../Utils/UserContext";
import Loader from "../../../../Utils/Loader";
import QuestionModal from "../../../../Components/Modal/questionModal";
import { useFocusEffect } from "@react-navigation/native";
import { Images } from "../../../../Utils/images";
import { ICON_TYPE, IconX } from "../../../../Components/Icons/Icon";
import { COLORS } from "../../../../Utils/Constant";
import ShowMessage from "../../../../Components/Modal/showMessage";

const RestroPlaceOrder = ({ navigation, route }) => {
  const { orderData } = route.params
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
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });

  useFocusEffect(
    React.useCallback(() => {
      setCartLocalData(cartData);
      getOrderDetails();
      handleFinalAmount();
      return () => {
        setCartLocalData(cartData);
        handleFinalAmount();
      };
    }, [removeIndex, navigation, orderData])
  );
  const getOrderDetails = async () => {
    try {
      // const orderData = await AsyncStorage.getItem("orderData");
      if (orderData !== "") {
        setBusinessName(cartData[0]?.business_name);
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
            {/* <Image source={Images.MINUS_IMG} /> */}
            <IconX
              origin={ICON_TYPE.ANT_ICON}
              name={"minuscircle"}
              size={22}
              color={COLORS.GREY}
            />
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
    // const orderData = await AsyncStorage.getItem("orderData");
    if (orderData !== "") {
      try {
        if (orderData.order_payment_type == 2) {
          setVisible(true);
          const params = {
            amount: totalAmount.toString(),
            email: orderData.email,
            user_name: orderData.first_name,
            card_number: "424242424242" + orderData.last4,
            // cvc: orderData.validCVC.toString(),
            exp_month: orderData.expiryMonth.toString(),
            exp_year: orderData.expiryYear.toString(),
            zipcode: orderData.postalCode,
          };
          const { data } = await apiCall(
            "POST",
            ENDPOINTS.ORDERPAYMENT,
            params
          );
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
      if (orderData !== "") {
        const params = {
          business_type: 1,
          // business_id: orderData.business_id,
          business_id: cartData[0]?.business_id,
          delivery_type: orderData.delivery_type,
          item: cartData,
          first_name: orderData.first_name,
          last_name: orderData.last_name,
          email: orderData.email,
          mobile: orderData.mobile,
          address: orderData?.address?.location,
          latitude: orderData?.address?.latitude,
          longitude: orderData?.address?.longitude,
          order_description: orderData.order_description,
          order_schedule_time: orderData.order_schedule_time,
          order_payment_type: orderData.order_payment_type,
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
        if (data.status === 200) {
          setCartData([]);
          setMessageShow({
            visible: true,
            type: "success",
            message: data?.message,
          });
            navigation.navigate("OrderHistory",{});
          setVisible(false);
        } else {
          setMessageShow({
            visible: true,
            type: "error",
            message: data?.message,
          });
          setVisible(false);
        }
      }
    } catch (error) {
      setMessageShow({
        visible: true,
        type: "error",
        message: error?.message,
      });
      setVisible(false);
    }
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <RestroPlaceOrderView
        totalAmount={totalAmount}
        setTotalAmount={setTotalAmount}
        cartLocalData={cartLocalData}
        businessName={businessName}
        _handleDishItem={_handleDishItem}
        checkoutPress={checkoutPress}
      />
      {/* <Error
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
      /> */}
      <QuestionModal
        surringVisible={removeItem}
        topMessage={"Delete Item From Cart"}
        message={"Are you sure want to delete this item from Your cart ?"}
        positiveResponse={() => DeleteItem(removeIndex)}
        negativeResponse={() => setRemoveItem(false)}
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
export default RestroPlaceOrder;
