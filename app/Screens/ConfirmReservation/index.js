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

  useFocusEffect(
    React.useCallback(() => {
      getRestroData();
      getProfile();
      return () => {
        getRestroData();
        getProfile();
      };
    }, [navigation, route])
  );

  const [profileData, setProfileData] = useState(null);
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
  const getProfile = async () => {
    setVisible(true);
    const { data } = await apiCall("POST", ENDPOINTS.GET_USER_PROFILE);
    if (data.status === 200) {
      setProfileData(data.data);
      await userDatas();
    }
  };
  const userDatas = async () => {
    setVisible(false);
    setLocalUserData({
      firstName: profileData.first_name,
      lastName: profileData.last_name,
      emailAddress: profileData.email,
      mobile: profileData.phone,
      note: profileData.note,
    });
  };
  const getRestroData = () => {
    if (route?.params) {
      const { reservationData, restroDetail } = route?.params;
      setReservationData(reservationData);
      setRestroDetail(restroDetail);
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
    if (localUserData.email == "") {
      setVisibleErr(true);
      setErrorMessage("Please Enter Email");
      return false;
    }
    if (localUserData.mobile == "") {
      setVisibleErr(true);
      setErrorMessage("Please Enter Phone No.");
      return false;
    }
    return true;
  };
  const onPressConfirm = async () => {
    const valid = validationForm();
    if (valid) {
      setVisible(true);
      var date = dateFormat(reservationData.date, "yyyy-mm-dd");
      const params = {
        business_id: restroDetail.business_id,
        business_type: 1,
        booking_date: date,
        booking_time: reservationData.time,
        note: localUserData.note,
        people: reservationData.people,
        first_name: localUserData.firstName,
        last_name: localUserData.lastName,
        phone: localUserData.mobile,
        email: localUserData.email,
        // booking_type: reservationData.booking_type,
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
