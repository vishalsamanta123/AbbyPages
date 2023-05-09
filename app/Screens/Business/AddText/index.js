import React, { useState } from "react";
import { View } from "react-native";
import AddText from "./components/AddText";
import Loader from "../../../Utils/Loader";
import Error from "../../../Components/Modal/showMessage";
import Success from "../../../Components/Modal/success";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import { useFocusEffect } from "@react-navigation/native";

const AddTextView = ({ navigation }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [textOptn, setTextOptn] = useState(false);
  const [writeOwnTxt, setWriteOwnTxt] = useState("");

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
          ? setWriteOwnTxt(data.data.business_info[0].text)
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
          text: writeOwnTxt,
        };
        const { data } = await apiCall(
          "POST",
          ENDPOINTS.ADD_BUSINEES_INFO,
          params
        );
        if (data.status === 200) {
          navigation.navigate("AddKeybord");
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
    if (writeOwnTxt == "") {
      setErrorMessage("Please write your own text");
      setVisibleErr(true);
      return false;
    }
    return true;
  }
  const handleWriteText = (value) => {
    setWriteOwnTxt(value);
  };
  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <AddText
        onPressTextOptn={onPressTextOptn}
        onPressPreview={onPressPreview}
        onPressNext={onPressNext}
        textOptn={textOptn}
        handleWriteText={(value) => handleWriteText(value)}
        writeOwnTxt={writeOwnTxt}
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
export default AddTextView;
