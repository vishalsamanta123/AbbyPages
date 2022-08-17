import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import CommonStyles from "../../Utils/CommonStyles";
import ConfirmReservation from "./components/ConfirmReservation";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import styles from "./components/styles";
import { UserContext } from "../../Utils/UserContext";
import Loader from "../../Utils/Loader";
import Success from "../../Components/Modal/success";
import Error from "../../Components/Modal/error";
import dateFormat from "dateformat";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";

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
  });
  const [reservationData, setReservationData] = useState(null);
  const [restroDetail, setRestroDetail] = useState(null);
  const [SaveCheckBox, setSaveCheckBox] = useState(true);
  const onPressCheckBox = () => {
    setSaveCheckBox(!SaveCheckBox);
  };

  const onPressEditDetails = () => {
    navigation.navigate("RestauranrtBooking", { detail: restroDetail });
  };

  const getRestroData = async () => {
    try {
      setVisible(true);
      const { data } = await apiCall("POST", ENDPOINTS.GET_USER_PROFILE);
      if (data.status === 200) {
        setLocalUserData({
          firstName: data.data.first_name ? data.data.first_name : null,
          lastName: data.data.last_name ? data.data.last_name : null,
          emailAddress: data.data.email ? data.data.email : null,
          mobile: data.data.phone ? data.data.phone : null,
          note: data.data.note ? data.data.note : null,
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
    if (localUserData.firstName == null) {
      setVisibleErr(true);
      setErrorMessage("Please Enter First Name");
      return false;
    }
    if (localUserData.lastName == null) {
      setVisibleErr(true);
      setErrorMessage("Please Enter Last Name");
      return false;
    }
    if (localUserData.emailAddress == null) {
      setVisibleErr(true);
      setErrorMessage("Please Enter Email");
      return false;
    }
    if (localUserData.mobile == null) {
      setVisibleErr(true);
      setErrorMessage("Please Enter Phone No. Also");
      return false;
    }
    return true;
  };
  const onPressConfirm = async () => {
    const valid = validationForm();
    if (valid) {
      try {
        setVisible(true);
        var date = dateFormat(reservationData.date, "yyyy-mm-dd");
        const params = {
          business_id: restroDetail.business_id,
          business_type: 1,
          booking_date: date,
          booking_time: reservationData.time,
          people: reservationData.people,
          first_name: localUserData.firstName,
          last_name: localUserData.lastName,
          phone: localUserData.mobile,
          email: localUserData.email,
          note: localUserData.note,
          order_booking_type: reservationData.booking_type == 1 ? 3 : 4,
          receive_special_offer: 1,
        };
        const { data } = await apiCall(
          "POST",
          ENDPOINTS.RESTAURANTS_TABLE_BOOKING,
          params
        );
        if (data.status === 200) {
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
        SaveCheckBox={SaveCheckBox}
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
    </View>
  );
};
export default ConfirmReservationView;
