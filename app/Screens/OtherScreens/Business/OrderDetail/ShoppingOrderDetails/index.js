import React, { useState, useEffect } from "react";
import { View, BackHandler } from "react-native";
import ShoppingOrderDetailsScreen from "./components/ShoppingOrderDetails";
import CommonStyles from "../../../../Utils/CommonStyles";
import { apiCall, setDefaultHeader } from "../../../../Utils/httpClient";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import Error from "../../../../Components/Modal/showMessage";
import Success from "../../../../Components/Modal/success";
import moment from "moment";
const ShoppingOrderDetails = ({ route, props, navigation }) => {
  const orderId = route.params.orderId;
  const BusinessType = route.params.BusinessType;
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [orderData, setorderData] = useState();
  const [orderProcess, setOrderProcess] = useState({
    process: "",
    orderStatus: "",
  });

  useEffect(() => {
    getOrderDetailsFun();
  }, []);

  // useEffect(() => {
  //     // getOrderDetailsFun()
  //     BackHandler.addEventListener("hardwareBackPress", backButtonHandler);

  //     return () => {
  //         BackHandler.removeEventListener("hardwareBackPress", backButtonHandler);
  //     };
  // }, [backButtonHandler]);

  // function backButtonHandler() {
  //     goBackFun()
  //     return true;
  // }

  const goBackFun = () => {
    navigation.navigate("BusinessOrderHistory", {
      BusinessType: route.params.BusinessType,
    });
    // navigation.goBack(route.params.BusinessType);
  };
  const getOrderDetailsFun = async () => {
    setVisible(true);
    try {
      const params = {
        business_type: BusinessType,
        order_id: orderId,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_ORDER_DETAILS,
        params
      );
      if (data.status === 200) {
        setorderData(data.data);
        setVisible(false);
      } else {
        setVisible(false);
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const orderStatusUpdate = async (item) => {
    setVisible(true);
    try {
      const params = {
        order_id: item.order_id,
        order_status: orderProcess.orderStatus,
        business_type: item.business_type,
        order_process: orderProcess.process,
      };

      const { data } = await apiCall(
        "POST",
        ENDPOINTS.ORDER_STATUS_UPDATE,
        params
      );
      if (data.status === 200) {
        getOrderDetailsFun();
        setVisible(false);
      } else {
        setVisible(false);
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const cancelOrder = async (item) => {
    setVisible(true);
    try {
      const params = {
        order_id: item.order_id,
        order_status: 4, //order cancel status 4
        business_type: item.business_type,
        order_process: 0, //
      };

      const { data } = await apiCall(
        "POST",
        ENDPOINTS.ORDER_STATUS_UPDATE,
        params
      );
      if (data.status === 200) {
        getOrderDetailsFun();
        setVisible(false);
      } else {
        setVisible(false);
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const onPressUpdate = () => {
    props.navigation.navigate("BusinessOrderHistory");
  };
  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <ShoppingOrderDetailsScreen
        onPressUpdate={onPressUpdate}
        orderData={orderData}
        goBackFun={goBackFun}
        orderProcess={orderProcess}
        setOrderProcess={setOrderProcess}
        orderStatusUpdate={orderStatusUpdate}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => ("Home", setVisibleSuccess(false))}
      />
    </View>
  );
};
export default ShoppingOrderDetails;
