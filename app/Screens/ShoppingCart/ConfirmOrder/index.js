import React, { useState, useContext, useEffect } from "react";
import ConfirmOrder from "./components/ConfirmOrder";
import styles from "./components/styles";
import { View, Text, Image, Alert } from "react-native";
import _ from "lodash";
import CommonStyles from "../../../Utils/CommonStyles";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import Success from "../../../Components/Modal/success";
import Error from "../../../Components/Modal/error";
import { ShoppingCartContext, UserContext } from "../../../Utils/UserContext";
import AsyncStorage from "@react-native-community/async-storage";
const ConfirmOrderView = ({ navigation }) => {
  const [userData, setUserData] = useContext(UserContext);
  const [shoppingCartData, setShoppingCartData] =
    useContext(ShoppingCartContext);
  const [localUserData, setLocalUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    description: "",
  });
  const [total_order_amount, setTotalOrderAmount] = useState("");
  const [orderData, setOrderData] = useState("");
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    handleFinalAmount();
  }, []);
  const handleFinalAmount = async () => {
    const productOrderData = await AsyncStorage.getItem("productOrderData");
    setOrderData(JSON.parse(productOrderData));
    const total_order_amount = shoppingCartData.reduce(
      (accumulatedTotal, curr) => accumulatedTotal + curr.total_product_price,
      0
    );
    setTotalOrderAmount(total_order_amount);
    const { data } = await apiCall("POST", ENDPOINTS.GET_USER_PROFILE);
    if (data.status === 200) {
      setLocalUserData({
        first_name: data.data.first_name ? data.data.first_name : "",
        last_name: data.data.last_name ? data.data.last_name : "",
        email: data.data.email ? data.data.email : "",
        mobile: data.data.modile ? data.data.modile : "",
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
    return true;
  };
  const onPressConfirm = async () => {
    const valid = validationForOrder();
    if (valid) {
      setVisible(true);
      try {
        const params = {
          product_items: shoppingCartData,
          first_name: localUserData.first_name,
          last_name: localUserData.last_name,
          email: localUserData.email,
          mobile: localUserData.mobile,
          business_type: orderData.businessDetail.business_type,
          business_id: orderData.businessDetail.business_id,
          address: orderData.location[0].location,
          latitude: orderData.location[0].latitude,
          longitude: orderData.location[0].longitude,
          order_payment_type: orderData.order_payment_type, //online or COD
          total_order_amount: JSON.stringify(total_order_amount),
          total_amount: JSON.stringify(total_order_amount),
          order_discount: 0,
          delivery_type: 1, //takeaway or delievery
          order_booking_type: 2, //table ,outside,foodand item
        };
        const { data } = await apiCall(
          "POST",
          ENDPOINTS.PRODUCT_ORDER_BOOKING,
          params
        );
        if (data.status == 200) {
          setSuccessMessage(data.message);
          setVisibleSuccess(true);
          setVisible(false);
          setShoppingCartData("");
        } else {
          setErrorMessage(data.message);
          setVisibleErr(true);
          setVisible(false);
        }
      } catch (error) {
        setErrorMessage(error);
        setVisibleErr(true);
        setVisible(false);
      }
    }
  };
  const onPressDeleteCart = () =>
    Alert.alert(
      "Delete Cart",
      "Do you want to delete this cart ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Confirm", onPress: () => DeleteCart() },
      ],
      { cancelable: false }
    );
  const DeleteCart = async () => {
    setShoppingCartData("");
    await AsyncStorage.removeItem("productOrderData");
    navigation.navigate("ShopList");
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <ConfirmOrder
        onPressDeleteCart={onPressDeleteCart}
        orderData={orderData}
        onPressConfirm={onPressConfirm}
        localUserData={localUserData}
        setLocalUserData={setLocalUserData}
        shoppingCartData={shoppingCartData}
        _handleConfirmOrder={_handleConfirmOrder}
      />
      <Error
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
      />
    </View>
  );
};
export default ConfirmOrderView;
