import React, { useState, useEffect, useContext } from "react";
import {
  Image,
  View,
  Text,
  Alert,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import RestroCheckout from "./component/RestroCheckout";
import styles from "./component/styles";
import moment from "moment";
import _ from "lodash";
import CommonStyles from "../../../Utils/CommonStyles";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import { CartContext } from "../../../Utils/UserContext";
import Loader from "../../../Utils/Loader";
import Success from "../../../Components/Modal/success";
import Error from "../../../Components/Modal/error";
import { YELLOW_COLOR_CODE } from "../../../Utils/Constant";
const RestroCheckoutView = ({ navigation }) => {
  const [isDateTimePickerVisible, setDateTimePickerVisibility] =
    useState(false);
  const [dateTime, setDateTime] = useState("");

  const [delivery_type, setDeliveryType] = useState(true);
  const [cartData, setCartData] = useContext(CartContext);
  const [cartLocalData, setCartLocalData] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [location, setLocation] = useState([{}]);
  const [locationList, setLocationList] = useState([]);

  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const [AddressVisible, setAddressVisible] = useState(false);
  const [Address, setAddress] = useState("");

  const hideDateTimePicker = () => {
    setDateTimePickerVisibility(false);
  };
  const handleDateTimeConfirm = (date) => {
    const DateTime = moment(date).format("h:mm:ss a,Do MMMM");
    setDateTime(DateTime);
    hideDateTimePicker();
  };
  useEffect(() => {
    setCartLocalData(cartData);
    _handleDetails();
    handleFinalAmount();
    const DateTime = moment().format("h:mm:ss a,Do MMMM");
    setDateTime(DateTime);
  }, []);
  const _handleDetails = async () => {
    setVisible(true);
    try {
      const { data } = await apiCall("POST", ENDPOINTS.DASHBOARD_DETAILS);
      if (data.status === 200) {
        setLocationList(data.data.user_location && data.data.user_location);
        if (data.data.user_location) {
          var getLocation = _.filter(data.data.user_location, (item) => {
            return { primary_status: 1 };
          });
        //   var getLocation = _.filter(data.data.user_location, { primary_status: 1 });
          setLocation(getLocation);
        }
        setVisible(false);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setVisibleErr(true);
      setErrorMessage(error);
    }
  };
  // useEffect(() => {
  //     BackHandler.addEventListener(
  //         'hardwareBackPress',
  //         onBackPress
  //     );
  //     return () => {
  //         BackHandler.removeEventListener(
  //             'hardwareBackPress',
  //             onBackPress
  //         );
  //     };
  // }, []);

  // const onBackPress = () => {
  //     setAddressVisible(false)
  //     return true;
  // };

  const handleSetAddress = (item, index) => {
    setLocation([item]);
    setAddressVisible(false);
  };
  const onPressRemoveItem = (item, index) => {
    Alert.alert(
      "Delete Item From Cart",
      "Are you sure want to delete this item from Your cart ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => deleteItem(item, index) },
      ],
      { cancelable: false }
    );
  };
  const deleteItem = (item, index) => {
    try {
      setVisible(true);
      const cartLocalFunctionData = [...cartLocalData];
      cartLocalFunctionData.splice(item.item_id, 1);
      setCartLocalData(cartLocalFunctionData);
      setCartData(cartLocalFunctionData);
      const FinalAmount = cartLocalFunctionData.reduce(
        (accumulatedTotal, curr) => accumulatedTotal + curr.total_item_price,
        0
      );
      setTotalAmount(FinalAmount);
      setVisible(false);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleFinalAmount = (item, index) => {
    const FinalAmount = cartData.reduce(
      (accumulatedTotal, curr) => accumulatedTotal + curr.total_item_price,
      0
    );
    setTotalAmount(FinalAmount);
  };
  const _handleLocationList = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => handleSetAddress(item)}
        style={[
          styles.DishTextCOntain,
          {
            borderWidth: 0.4,
            width: "100%",
            padding: 5,
            borderColor: YELLOW_COLOR_CODE,
            marginTop: 10,
          },
        ]}
      >
        <View style={{ padding: 5 }}>
          <Image source={require("../../../Assets/qty_plus_icon.png")} />
        </View>
        <Text style={[styles.AddressTextStyle]}>
          {item.location && item.location}
        </Text>
      </TouchableOpacity>
    );
  };
  const _handleDishItem = (item, index) => {
    return (
      <View style={styles.DishMainView}>
        <View style={styles.DishTextCOntain}>
          <TouchableOpacity onPress={() => onPressRemoveItem(item, index)}>
            <Image source={require("../../../Assets/minus_icon_cart.png")} />
          </TouchableOpacity>
          <Text style={styles.DishTextStyle}>{item.quantity}</Text>
          <Text style={styles.DishTextStyle}>{item.item_name}</Text>
        </View>
        <Text style={styles.PriceDishText}>{"$" + item.total_item_price}</Text>
      </View>
    );
  };
  const onPressAddNewAddress = () => {
    setAddressVisible(false);
    navigation.navigate("AddLocation");
  };
  function validationFrom() {
    if (location == [{}]) {
      setErrorMessage("Please enter address");
      setVisibleErr(true);
      return false;
    }
    if (dateTime == "") {
      setErrorMessage("Please enter date & time");
      setVisibleErr(true);
      return false;
    }
    return true;
  }
  const onPressCheckOut = async () => {
    const valid = validationFrom();
    if (valid) {
      setVisible(true);
      try {
        const orderData = await AsyncStorage.getItem("orderData");
        if (orderData !== "") {
          const params = {
            address: location[0],
            order_schedule_time: dateTime,
            business_id: JSON.parse(orderData).business_id,
            business_name: JSON.parse(orderData).business_name,
            delivery_type: delivery_type == true ? 1 : 2,
          };
          await AsyncStorage.setItem("orderData", JSON.stringify(params));
          navigation.navigate("CheckoutDetail");
          setVisible(false);
        }
      } catch (e) {
        setVisible(false);
        setErrorMessage(e);
        setVisibleErr(true);
      }
    }
  };
  const onPressChangeAdd = () => {
    setAddressVisible(true);
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <RestroCheckout
        delivery_type={delivery_type}
        setDeliveryType={setDeliveryType}
        dateTime={dateTime}
        isDateTimePickerVisible={isDateTimePickerVisible}
        setDateTimePickerVisibility={setDateTimePickerVisibility}
        hideDateTimePicker={hideDateTimePicker}
        handleDateTimeConfirm={handleDateTimeConfirm}
        onPressAddNewAddress={onPressAddNewAddress}
        location={location}
        cartLocalData={cartLocalData}
        totalAmount={totalAmount}
        locationList={locationList}
        _handleLocationList={_handleLocationList}
        _handleDishItem={_handleDishItem}
        onPressCheckOut={onPressCheckOut}
        onPressChangeAdd={onPressChangeAdd}
        AddressVisible={AddressVisible}
        setAddressVisible={setAddressVisible}
        setAddress={setAddress}
        Address={Address}
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
export default RestroCheckoutView;
