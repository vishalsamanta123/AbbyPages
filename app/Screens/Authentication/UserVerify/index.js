import React, { useContext, useState } from "react";
import { View } from "react-native";
import UserVerifyScreen from "./components/UserVerify";
import AsyncStorage from "@react-native-community/async-storage";
import { apiCall, setDefaultHeader } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import { UserContext, AuthContext } from "../../../Utils/UserContext";
import ShowMessage from "../../../Components/Modal/showMessage";
const UserVerify = ({ route, navigation }) => {
  const [visible, setVisible] = useState(false);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useContext(UserContext);
  const [otp, setOtp] = useState("");
  const { signIn } = React.useContext(AuthContext);
  const email = route.params;

  const _handleOtpVerify = async () => {
    setVisible(true);
    if (otp !== "") {
      const params = {
        otp: otp,
      };
      try {
        const { data } = await apiCall("POST", ENDPOINTS.USER_VERIFY, params);
        if (data?.status === 200) {
          setVisible(false);
          if (data?.data?.login_type === 1) {
            navigation.navigate("DashBoard");
            setVisible(false);
            signIn(data);
          } else if (data?.data?.login_type === 2) {
            setVisible(false);
            setErrorMessage( "It is your business account ,please check to login with user account");
            setVisibleErr(true);
          }
        } else {
          setVisible(false);
          setErrorMessage(data?.message);
          setVisibleErr(true);
        }
      } catch (error) {
        setErrorMessage(error.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } else {
      setErrorMessage("please enter otp");
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const otpresend = async () => {
    setVisible(true);
    const params = {
      email: email,
    };
    try {
      const { data } = await apiCall("POST", ENDPOINTS.RESENT_OTP, params);
      if (data?.status === 200) {
        setVisible(false);
        setSuccessMessage(data?.message);
        setVisibleSuccess(true);
      } else {
        setVisible(false);
        setErrorMessage(data?.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setVisible(false);
      setErrorMessage(error.message);
      setVisibleErr(true);
    }
  };
  function Navtoback() {
    navigation.goBack(null);
  }
  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <UserVerifyScreen
        // otp={otp}
        Navtoback={Navtoback}
        otpresend={otpresend}
        handleOtp={(val) => setOtp(val)}
        _handleOtpVerify={(data) => _handleOtpVerify(data)}
      />
      <ShowMessage
        visible={visibleErr || visibleSuccess}
        message={errorMessage || successMessage}
        messageViewType={visibleErr ? "error" : "success"}
        onEndVisible={() => {
          setErrorMessage("");
          setVisibleErr(false);
          setVisibleSuccess(false);
          setSuccessMessage("");
        }}
      />
    </View>
  );
};
export default UserVerify;
