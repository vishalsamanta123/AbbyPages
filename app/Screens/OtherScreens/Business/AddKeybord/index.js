import React, { useState, Fragment } from "react";
import { View } from "react-native";
import AddKeybord from "./components/AddKeybord";
import Loader from "../../../Utils/Loader";
import Error from "../../../Components/Modal/showMessage";
import Success from "../../../Components/Modal/success";
import { apiCall, setDefaultHeader } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import { useFocusEffect, useLinkProps } from "@react-navigation/native";
const AddKeybordView = ({ navigation }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [textOptn, setTextOptn] = useState(false);
  const [keywords, setKeywordsTxt] = useState("");

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
          ? setKeywordsTxt(data.data.business_info[0].keywords)
          : null;
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
    }
  };

  const onPressTextOptn = () => {
    setTextOptn(!textOptn);
  };
  const onPressPreview = () => {
    navigation.navigate("AddTextPreview");
  };
  const onPressNext = async () => {
    const valid = validationFrom();
    if (valid) {
      setVisible(true);
      try {
        const params = {
          keywords: keywords,
        };
        const { data } = await apiCall(
          "POST",
          ENDPOINTS.ADD_BUSINEES_INFO,
          params
        );
        if (data.status === 200) {
          navigation.navigate("BusinessLocation");
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
    if (keywords == "") {
      setErrorMessage("Please Write your keyword text");
      setVisibleErr(true);
      return false;
    }
    return true;
  }

  const handleWriteText = (value) => {
    setKeywordsTxt(value);
  };
  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <AddKeybord
        onPressTextOptn={onPressTextOptn}
        onPressPreview={onPressPreview}
        onPressNext={onPressNext}
        textOptn={textOptn}
        handleWriteText={(value) => handleWriteText(value)}
        keywords={keywords}
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
export default AddKeybordView;
