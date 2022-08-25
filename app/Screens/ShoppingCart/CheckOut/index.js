import React, { useState, useContext, useEffect } from "react";
import { View, Alert } from "react-native";
import CommonStyles from "../../../Utils/CommonStyles";
import CheckOutScreen from "./components/CheckOutScreen";
import _ from "lodash";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import Success from "../../../Components/Modal/success";
import Error from "../../../Components/Modal/error";
import { ShoppingCartContext } from "../../../Utils/UserContext";
import AsyncStorage from "@react-native-community/async-storage";
import QuestionModal from "../../../Components/Modal/questionModal";
const CheckOut = ({ navigation }) => {
  const [shoppingCartData, setShoppingCartData] =
    useContext(ShoppingCartContext);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [reload, setReload] = useState(false);

  const [addressListVisible, setAddressListVisible] = useState(false);
  const [finalAmount, setFinalAmount] = useState("");
  const [locationList, setLocationList] = useState([]);
  const [location, setLocation] = useState([]);
  const [order_payment_type, setOrderPaymentType] = useState(true);
  const [removeItem, setRemoveItem] = useState(false);
  const [allDelete, setAllDelete] = useState(false);
  const [removeIndex, setRemoveIndex] = useState("");

  useEffect(() => {
    handleFinalAmount();
    _handleDetails();
  }, [reload, removeIndex]);

  const validationForContinue = () => {
    if (location === []) {
      setErrorMessage("Please Select Location");
      setVisibleErr(true);
      return false;
    }
    return true;
  };
  const onPressContinue = async () => {
    const valid = validationForContinue();
    if (valid) {
      try {
        const value = await AsyncStorage.getItem("productOrderData");
        if (value !== null) {
          const data = {
            businessDetail: JSON.parse(value).businessDetail,
            location: location,
            order_payment_type: order_payment_type ? 1 : 2,
          };
          await AsyncStorage.setItem("productOrderData", JSON.stringify(data));
          navigation.navigate("ConfirmOrder");
        }
      } catch (error) {
        setErrorMessage(error.message);
        setVisibleErr(true);
      }
    }
  };

  const _handleDetails = async () => {
    setVisible(true);
    try {
      const { data } = await apiCall("POST", ENDPOINTS.DASHBOARD_DETAILS);
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
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
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
    setAllDelete(false);
    navigation.navigate("ShopList");
    await AsyncStorage.removeItem("productOrderData");
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
