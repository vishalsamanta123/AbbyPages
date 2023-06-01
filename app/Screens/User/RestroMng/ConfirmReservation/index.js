import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import CommonStyles from "../../../../Utils/CommonStyles";
import ConfirmReservation from "./components/ConfirmReservation";
// import ENDPOINTS from "../../../../Utils/apiEndPoints";
import styles from "./components/styles";
import { UserContext } from "../../../../Utils/UserContext";
import Loader from "../../../../Utils/Loader";
import Success from "../../../../Components/Modal/success";
import Error from "../../../../Components/Modal/showMessage";
import moment from "moment";
import { useIsFocused } from "@react-navigation/native";
import { apiCall } from "../../../../Utils/httpClient";
import apiEndPoints from "../../../../Utils/apiEndPoints";
import ShowMessage from "../../../../Components/Modal/showMessage";

const ConfirmReservationView = ({ navigation, route }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    getRestroData();
  }, [isFocused]);

  const [localUserData, setLocalUserData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    mobile: "",
    note: "",
    receive_special_offer: "",
  });
  const [reservationData, setReservationData] = useState(null);
  const [restroDetail, setRestroDetail] = useState(null);
  const onPressCheckBox = (res) => {
    setLocalUserData({
      ...localUserData,
      receive_special_offer: res === 0 ? 1 : 0,
    });
  };

  const onPressEditDetails = () => {
    navigation.navigate("RestroBooking", { detail: restroDetail });
  };

  const getRestroData = async () => {
    try {
      setVisible(true);
      const { data } = await apiCall("POST", apiEndPoints.GET_USER_PROFILE);
      if (data.status === 200) {
        setLocalUserData({
          firstName: data.data.first_name ? data.data.first_name : "",
          lastName: data.data.last_name ? data.data.last_name : "",
          emailAddress: data.data.email ? data.data.email : "",
          mobile: data.data.phone ? data.data.phone : "",
          note: data.data.note ? data.data.note : "",
          receive_special_offer: 0,
        });
      }
      if (route?.params) {
        const { reservationData, restroDetail } = route?.params;
        setReservationData(reservationData);
        setRestroDetail(restroDetail);
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const validationForm = () => {
    if (localUserData.firstName == "") {
      setVisibleErr(true);
      setErrorMessage("Please Enter First Name");
      return false;
    }
    if (localUserData.lastName == "") {
      setVisibleErr(true);
      setErrorMessage("Please Enter Last Name");
      return false;
    }
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (localUserData.emailAddress == "") {
      setVisibleErr(true);
      setErrorMessage("Please Enter Email");
      return false;
    }
    if (reg.test(localUserData.emailAddress) === false) {
      setVisibleErr(true);
      setErrorMessage("Please Enter Correct Email Address");
      return false;
    }
    if (localUserData.mobile == "") {
      setVisibleErr(true);
      setErrorMessage("Please Enter Phone No. Also");
      return false;
    }
    return true;
  };
  const onPressConfirm = async () => {
    const valid = validationForm();
    console.log("valid: ", valid);
    if (valid) {
      try {
        setVisible(true);
        var date = moment(reservationData.date).format("MM/DD/YYYY");
        const params = {
          business_id: restroDetail.business_id,
          business_type: 1,
          booking_date: date,
          booking_time: reservationData.time,
          people: reservationData.people,
          first_name: localUserData.firstName,
          last_name: localUserData.lastName,
          phone: localUserData.mobile,
          email: localUserData.emailAddress,
          note: localUserData.note,
          order_booking_type: reservationData.booking_type == 1 ? 3 : 4,
          receive_special_offer: localUserData.receive_special_offer,
        };
        const { data } = await apiCall(
          "POST",
          apiEndPoints.RESTAURANTS_TABLE_BOOKING,
          params
        );
        if (data.status === 200) {
          navigation.navigate("OrderHistory", {});
          setSuccessMessage(data.message);
          setVisibleSuccess(true);
          setVisible(false);
        } else {
          setErrorMessage(data.message);
          setVisibleErr(true);
          setVisible(false);
        }
      } catch (error) {
        setErrorMessage(error.message);
        setVisibleErr(true);
        setVisible(false);
      }
    }
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <ConfirmReservation
        restroDetail={restroDetail}
        reservationData={reservationData}
        localUserData={localUserData}
        setLocalUserData={setLocalUserData}
        onPressConfirm={onPressConfirm}
        onPressEditDetails={onPressEditDetails}
        onPressCheckBox={onPressCheckBox}
      />
      <ShowMessage
        visible={visibleSuccess}
        message={successMessage}
        onEndVisible={() => {
          setVisibleSuccess(false);
          setSuccessMessage("");
        }}
      />
      <ShowMessage
        visible={visibleErr}
        message={errorMessage}
        onEndVisible={() => {
          setVisibleErr(false);
          setErrorMessage("");
        }}
      />
    </View>
  );
};
export default ConfirmReservationView;
