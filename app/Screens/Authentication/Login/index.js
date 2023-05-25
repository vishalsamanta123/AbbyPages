import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from "react-native-fbsdk";
import { GoogleSignin } from "@react-native-community/google-signin";
import Geolocation from "@react-native-community/geolocation";
import Geocoder from "react-native-geocoding";
import LoginScreen from "./components/LoginScreen";
import AsyncStorage from "@react-native-community/async-storage";
import { apiCall, setDefaultHeader } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import DeviceInfo from "react-native-device-info";
import { UserContext, AuthContext } from "../../../Utils/UserContext";
import Loader from "../../../Utils/Loader";
import Error from "../../../Components/Modal/showMessage";
import ShowMessage from "../../../Components/Modal/showMessage";

GoogleSignin.configure({
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  webClientId:
    "448393819239-s9q3t5pngpbao0pl4nm2eu5ae5ojsa33.apps.googleusercontent.com",
  offlineAccess: true,
});
Geocoder.init("AIzaSyAvtWufwnjN7MwtOfwtQrzmv2Rp_wUxBbw");
const SignInView = ({ navigation, route }) => {
  const { signIn } = React.useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });
  const [userData, setUserData] = useContext(UserContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    device_id: "",
    device_token: "",
    device_type: "",
    user_name: "",
  });

  useEffect(() => {
    fireBaseToken();
    deviceDetails();
  }, []);
  function deviceDetails() {
    let type = DeviceInfo.getDeviceType();
    setLoginData({ ...loginData, device_id: type });
    DeviceInfo.getAndroidId().then((androidId) => {
      setLoginData({ ...loginData, device_type: androidId });
    });
  }
  async function fireBaseToken() {
    const fcmtoken = await AsyncStorage.getItem("fcmToken");
    setLoginData({
      ...loginData,
      device_token: fcmtoken,
    });
  }
  function validationFrom() {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (loginData?.email == "") {
      setMessageShow({
        visible: true,
        type: "error",
        message: "Please enter email",
      });
      return false;
    } else if (reg.test(loginData?.email) === false) {
      setMessageShow({
        visible: true,
        type: "error",
        message: "Please enter correct email address",
      });
      return false;
    } else if (loginData?.password == "") {
      setMessageShow({
        visible: true,
        type: "error",
        message: "Please enter password",
      });
      return false;
    } 
    return true;
  }
  const onPressLogin = async () => {
    const valid = validationFrom();
    if (valid) {
      setVisible(true);
      try {
        const params = {
          email: loginData?.email,
          password: loginData?.password,
          device_id: loginData?.device_id,
          device_type: loginData?.device_type,
          device_token: loginData?.device_token,
        };
        const { data } = await apiCall("POST", ENDPOINTS.USERLOGIN, params);
        if (data?.status === 200) {
          if (data?.data?.verified === 0) {
            if (data?.data?.login_type === 1) {
              navigation.navigate("UserVerify", { email: data.data.email });
              setVisible(false);
            }
          } else if (data?.data?.verified === 1) {
            console.log("data?.data: ", data?.data);
            if (data?.data?.login_type === 1) {
              setUserData(data?.data);
              await AsyncStorage.setItem(
                "userData",
                JSON.stringify(data?.data)
              );
              await AsyncStorage.setItem("userToken", data?.token);
              setDefaultHeader("token", data?.token);
              navigation.navigate("HomeDashboard");
              setVisible(false);
              signIn(data);
            } else if (data?.data?.login_type === 2) {
              setVisible(false);
              setMessageShow({
                visible: true,
                type: "error",
                message: "It is your business account ,please check to login with user account",
              });
            }
          }
        } else {
          setVisible(false);
          setMessageShow({
            visible: true,
            type: "error",
            message: data?.message,
          });
        }
      } catch (error) {
        setVisible(false);
        setMessageShow({
          visible: true,
          type: "error",
          message: error?.message?.toString(),
        });
      }
    }
  };
  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };
  const onPressSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <LoginScreen
        handleForgotPassword={handleForgotPassword}
        onPressLogin={onPressLogin}
        onPressSignUp={onPressSignUp}
        loginData={loginData}
        setLoginData={setLoginData}
      />
      <ShowMessage
        visible={messageShow?.visible}
        message={messageShow?.message}
        messageViewType={messageShow?.type}
        // position={"top"}
        onEndVisible={() => {
          setMessageShow({
            visible: false,
            message: "",
            type: "",
          });
        }}
      />
    </View>
  );
};
export default SignInView;
