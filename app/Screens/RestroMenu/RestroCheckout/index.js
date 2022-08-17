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
import QuestionModal from "../../../Components/Modal/questionModal";
const RestroCheckoutView = ({ navigation }) => {
  const [isDateTimePickerVisible, setDateTimePickerVisibility] =
    useState(false);
  const [dateTime, setDateTime] = useState("");

  const [removeItem, setRemoveItem] = useState(false);
  const [removeIndex, setRemoveIndex] = useState("");
  const [delivery_type, setDeliveryType] = useState(true);
  const [cartData, setCartData] = useContext(CartContext);
  const [cartLocalData, setCartLocalData] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [location, setLocation] = useState([]);
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
    _handleDetails();
    setCartLocalData(cartData);
    handleFinalAmount();
    const DateTime = moment().format("h:mm:ss a,Do MMMM");
    setDateTime(DateTime);
  }, [removeIndex]);
  const _handleDetails = async () => {
    try {
      setVisible(true);
      const { data } = await apiCall("POST", ENDPOINTS.DASHBOARD_DETAILS);
      console.log("data: ", data);
      if (data.status === 200) {
        setLocationList(data.data.user_location && data.data.user_location);
        if (data.data.user_location) {
          var getLocation = _.filter(data.data.user_location, {
            primary_status: 1,
          });
          setLocation(getLocation);
        }
        setVisible(false);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setVisible(false);
      setVisibleErr(true);
      setErrorMessage(error.message);
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
  console.log('item: ', item);
    return (
      <View style={styles.DishMainView}>
        <View style={styles.DishTextCOntain}>
          <TouchableOpacity
            onPress={() => {
              setRemoveItem(true);
              setRemoveIndex(index);
            }}
          >
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
    if (location.length === 0) {
      setErrorMessage("Please enter address");
      setVisibleErr(true);
      return false;
    }
    if (dateTime == "") {
      setErrorMessage("Please enter date & time");
      setVisibleErr(true);
      return false;
    }
    if (cartLocalData.length === 0) {
      setErrorMessage("Please add items");
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
            address: location ? location[0] : null,
            order_schedule_time: dateTime,
            business_id: JSON.parse(orderData).business_id,
            business_name: JSON.parse(orderData).business_name,
            delivery_type: delivery_type == true ? 1 : 2,
          };
          await AsyncStorage.setItem("orderData", JSON.stringify(params));
          navigation.navigate("CheckoutDetail");
          setVisible(false);
        }
      } catch (erorr) {
        setVisible(false);
        setErrorMessage(erorr.message);
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
export default RestroCheckoutView;
