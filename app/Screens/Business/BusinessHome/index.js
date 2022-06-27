import React, { useState, Fragment, useEffect } from "react";
import BusinessHome from "./components/BusinessHome";
import { View, Image, Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect, useLinkProps } from "@react-navigation/native";
import { apiCall, setDefaultHeader } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import Error from "../../../Components/Modal/error";
import Success from "../../../Components/Modal/success";
import styles from "./components/styles";
const BusinessHomeView = ({ navigation }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [profileData, setProfileData] = useState("");
  const [sliderUrl, setSliderUrl] = useState("");
  const [ActiveActivity, setActiveActivity] = useState("1");
  const [ActiveDuration, setActiveDuration] = useState("30");
  const [pageVisit, setPageVisit] = useState("");

  // const selectedColor = index === isSelectedCatgory ? WHITE_COLOR_CODE : "#ffe98e"

  useFocusEffect(
    React.useCallback(() => {
      getProfile();
      return () => getProfile();
    }, [])
  );
  const getProfile = async () => {
    try {
      setVisible(true);
      const { data } = await apiCall("POST", ENDPOINTS.GET_USER_PROFILE);
      if (data.status === 200) {
        setProfileData(data.data);
        setSliderUrl(data.business_image_url);
        _handleDayes("30", "1");
        setVisible(false);
      } else {
        setVisible(false);
      }
    } catch (error) {
      setVisible(false);
    }
  };

  const _handleDayes = async (duration, active) => {
    setActiveActivity(active);
    if (duration == 30) {
      setActiveDuration(duration);
    } else if (duration == 12) {
      setActiveDuration(365);
    } else {
      setActiveDuration(730);
    }
    try {
      setVisible(true);
      const params = {
        duration: duration,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.BUSINESS_ACTIVITY_COUNT,
        params
      );
      if (data.status === 200) {
        setPageVisit(data.data.total_activity_count);
        // setProfileData(data.data)
        // setSliderUrl(data.business_image_url)
        setVisible(false);
      } else {
        setVisible(false);
      }
    } catch (error) {
      setVisible(false);
    }
  };

  const EditInformation = () => {
    navigation.navigate("BasicInformation");
  };

  return (
    <View style={{ flex: 1 }}>
      <BusinessHome
        _handleDayes={_handleDayes}
        profileData={profileData}
        sliderUrl={sliderUrl}
        EditInformation={EditInformation}
        ActiveActivity={ActiveActivity}
        pageVisit={pageVisit}
        ActiveDuration={ActiveDuration}
      />
      {visible && <Loader state={visible} />}
    </View>
  );
};
export default BusinessHomeView;
