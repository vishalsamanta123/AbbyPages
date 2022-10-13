import React, { useState } from "react";
import { View } from "react-native";
import Goals from "./components/Goals";
import Loader from "../../../Utils/Loader";
import Error from "../../../Components/Modal/error";
import Success from "../../../Components/Modal/success";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import { useFocusEffect, useLinkProps } from "@react-navigation/native";
const GoalsView = ({ navigation }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [textOptn, setTextOptn] = useState(false);
  const [callingOptn, setCallingOptn] = useState(false);
  const [WebsiteClick, setWebsiteClick] = useState(false);
  const [goal, setGoal] = useState();
  useFocusEffect(
    React.useCallback(() => {
      getProfile();
      return () => getProfile();
    }, [])
  );

  const getProfile = async () => {
    try {
      const { data } = await apiCall("POST", ENDPOINTS.GET_USER_PROFILE);
      if (data.status === 200) {
        data.data.business_info
          ? setGoal(data.data.business_info[0].goal)
          : null;
        data.data.business_info
          ? setTextOptn(data.data.business_info[0].goal == 1 ? true : false)
          : null;
        data.data.business_info
          ? setCallingOptn(data.data.business_info[0].goal == 3 ? true : false)
          : null;
        data.data.business_info
          ? setWebsiteClick(data.data.business_info[0].goal == 2 ? true : false)
          : null;
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const onPressTextOptn = () => {
    setTextOptn(!textOptn);
    setCallingOptn(false);
    setWebsiteClick(false);
    setGoal(1);
  };
  const onPressCalling = () => {
    setCallingOptn(!callingOptn);
    setWebsiteClick(false);
    setTextOptn(false);
    setGoal(3);
  };
  const onPressWebsite = () => {
    setWebsiteClick(!WebsiteClick);
    setTextOptn(false);
    setCallingOptn(false);
    setGoal(2);
  };
  const onPressNext = async () => {
    const valid = validationFrom();
    if (valid) {
      setVisible(true);
      try {
        const params = {
          goal: goal,
        };
        const { data } = await apiCall(
          "POST",
          ENDPOINTS.ADD_BUSINEES_INFO,
          params
        );
        if (data.status === 200) {
          navigation.navigate("AddText");
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
    }
  };

  function validationFrom() {
    if (goal == "") {
      setErrorMessage("Please select your goal");
      setVisibleErr(true);
      return false;
    }
    return true;
  }
  const onPressPreview = () => {
    navigation.navigate("GoalPreview");
  };

  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <Goals
        onPressTextOptn={onPressTextOptn}
        onPressCalling={onPressCalling}
        onPressWebsite={onPressWebsite}
        textOptn={textOptn}
        callingOptn={callingOptn}
        WebsiteClick={WebsiteClick}
        onPressNext={onPressNext}
        onPressPreview={onPressPreview}
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
export default GoalsView;
