import React, { useState } from "react";
import { View } from "react-native";
import ForgotPasswordField from "./components/ForgotPasswordField";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import Error from "../../../Components/Modal/error";
import Success from "../../../Components/Modal/success";
const ForgotPasswordFieldView = ({ route, navigation }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [otp, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [response, setResponse] = useState(false);
  const { email } = route.params;
  const otpresend = async () => {
    setVisible(true);
    const params = {
      email: email,
    };
    try {
      const { data } = await apiCall("POST", ENDPOINTS.RESENT_OTP, params);
      if (data.status === 200) {
        setVisible(false);
        setSuccessMessage(data.message);
        setVisibleSuccess(true);
        setResponse(true);
      } else {
        setVisible(false);
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setVisible(false);
      setErrorMessage(error.message);
      setVisibleErr(true);
    }
  };
  function validationFrom() {
    if (repeatPassword !== newPassword) {
      setErrorMessage("password does not match");
      setVisibleErr(true);
      return false;
    }
    if (otp == "") {
      setErrorMessage("please enter otp");
      setVisibleErr(true);
      return false;
    }
    if (newPassword == "") {
      setErrorMessage("Please enter password");
      setVisibleErr(true);
      return false;
    }
    return true;
  }
  const _handlepasswordupdate = async () => {
    const valid = validationFrom();
    if (valid) {
      setVisible(true);
      const params = {
        otp: otp,
        password: newPassword,
      };
      try {
        const { data } = await apiCall(
          "POST",
          ENDPOINTS.PASSWORD_UPDATE,
          params
        );
        if (data.status === 200) {
          setVisibleSuccess(true);
          setSuccessMessage(data.message);
          setVisible(false);
          setResponse(false);
        } else {
          setVisible(false);
          setErrorMessage(data.message);
          setVisibleErr(true);
        }
      } catch (error) {
        setVisible(false);
        setErrorMessage(error.message);
        setVisibleErr(true);
      }
    }
  };
  function Navtoback() {
    navigation.goBack(null);
  }

  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <ForgotPasswordField
        _handlepasswordupdate={_handlepasswordupdate}
        otpresend={otpresend}
        Navtoback={Navtoback}
        otp={otp}
        setOTP={setOTP}
        newPassword={newPassword}
        setNewPassword={setNewPassword}
        repeatPassword={repeatPassword}
        setRepeatPassword={setRepeatPassword}
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
          response
            ? setVisibleSuccess(false)
            : navigation.navigate("Home", setVisibleSuccess(false))
        }
      />
    </View>
  );
};
export default ForgotPasswordFieldView;
