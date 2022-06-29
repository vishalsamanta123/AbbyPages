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
import Error from "../../../Components/Modal/error";

GoogleSignin.configure({
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  webClientId:
    "448393819239-s9q3t5pngpbao0pl4nm2eu5ae5ojsa33.apps.googleusercontent.com",
  offlineAccess: true,
});
Geocoder.init("AIzaSyAvtWufwnjN7MwtOfwtQrzmv2Rp_wUxBbw");
const SignInView = ({ navigation }) => {
  let watchID;
  const { signIn } = React.useContext(AuthContext);
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [userData, setUserData] = useContext(UserContext);
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [fcmToken, setFcmToken] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  useEffect(() => {
    fireBaseToken();
    deviceDetails();
    getOneTimeLocation();
    subscribeLocationLocation();
  }, []);
  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        setErrorMessage(error.message);
        setVisibleErr(true);
      },
      { enableHighAccuracy: false, timeout: 30000, maximumAge: 1000 }
    );
  };
  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        setErrorMessage(error.message);
        setVisibleErr(true);
      },
      { enableHighAccuracy: false, maximumAge: 1000 }
    );
  };
  function deviceDetails() {
    //device type
    let type = DeviceInfo.getDeviceType();
    setDeviceType(type);
    //device id
    DeviceInfo.getAndroidId().then((androidId) => {
      setDeviceId(androidId);
    });
  }
  async function fireBaseToken() {
    const fcmtoken = await AsyncStorage.getItem("fcmToken");
    setFcmToken(fcmtoken);
  }
  function validationFrom() {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (UserName == "") {
      setErrorMessage("Please enter email or username");
      setVisibleErr(true);
      return false;
    }
    if (reg.test(UserName) === false) {
      setErrorMessage("please enter correct email address");
      setVisibleErr(true);
      return false;
    }
    if (Password == "") {
      setErrorMessage("Please enter password");
      setVisibleErr(true);
      return false;
    }
    if (Password.length <= 5) {
      setErrorMessage("please enter password min 6 characters");
      setVisibleErr(true);
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
          email: UserName,
          password: Password,
          device_id: deviceId,
          device_type: deviceType,
          device_token: fcmToken,
        };
        const { data } = await apiCall("POST", ENDPOINTS.USER_SIGN_IN, params);
        if (data.status === 200) {
          await setDefaultHeader("token", data.token);
          if (data.data.verified === 1) {
            setUserData(data.data);
            try {
              await AsyncStorage.setItem("localuserdata", JSON.stringify(data.data));
            } catch (e) {
              setVisible(false);
              setErrorMessage(e);
              setVisibleErr(true);
            }
            setVisible(false);
            signIn(data.token);
          } else {
            setVisible(false);
            navigation.navigate("UserVerify", { email: data.data.email });
          }
        } else {
          setVisible(false);
          setErrorMessage(data.message);
          setVisibleErr(true);
        }
      } catch (e) {
        setVisible(false);
        setErrorMessage(e);
        setVisibleErr(true);
      }
    }
  };
  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };
  const onPressSignUp = () => {
    navigation.navigate("SignUp");
  };
  const onPressGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleData = {
        // login_type: 1,//define business or personal
        user_name: userInfo.user.name,
        email: userInfo.user.email,
        signup_mode: 2,
        social_id: userInfo.user.id,
        device_id: deviceId,
        device_type: deviceType,
        device_token: fcmToken, //fcmtoken
        accesstoken: userInfo.idToken, //site token
        latitude: latitude,
        longitude: longitude,
      };
      // setGoogle(googleData)
      _handleSocialLogin(googleData);
    } catch (error) {
      setErrorMessage("Login fail with " + error);
      setVisibleErr(true);
    }
  };
  const onPressFacebook = async () => {
    let result;
    try {
      if (Platform.OS === "ios") {
        result = await LoginManager.logInWithPermissions([
          "public_profile",
          "email",
        ]);
      } else {
        LoginManager.setLoginBehavior("WEB_ONLY");
        result = await LoginManager.logInWithPermissions([
          "public_profile",
          "email",
        ]);
      }
      console.log("Login success with permissions");
      if (result.isCancelled) {
        setErrorMessage("User cancelled request");
        setVisibleErr(true);
        // console.log("User cancelled request");
      } else {
        AccessToken.getCurrentAccessToken().then((data) => {
          const accessTokenFaceBook = data.accessToken;
          // alert(JSON.stringify(data))
          const responseCallback = (error, result) => {
            console.log(
              "accessTokenFaceBook: ",
              accessTokenFaceBook,
              " : Profile: ",
              result
            );
            var fbResponse = {
              // login_type: 1,//define business or personal
              user_name: result.name,
              email: result.email,
              signup_mode: 1,
              social_id: result.id,
              device_id: deviceId,
              device_type: deviceType,
              device_token: fcmToken, //fcmtoken
              accesstoken: accessTokenFaceBook, //site token
              latitude: latitude,
              longitude: longitude,
            };
            // alert(JSON.stringify(fbResponse))
            _handleSocialLogin(fbResponse);
          };
          // the famous params object...
          const profileRequestParams = {
            fields: {
              string: "id, name, email, first_name, last_name, gender",
            },
          };
          const profileRequestConfig = {
            httpMethod: "GET",
            version: "v2.5",
            parameters: profileRequestParams,
            accessToken: accessTokenFaceBook.toString(),
          };
          const profileRequest = new GraphRequest(
            "/me",
            profileRequestConfig,
            responseCallback
          );
          // Start the graph request.
          new GraphRequestManager().addRequest(profileRequest).start();
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  const _handleSocialLogin = async (params) => {
    // alert(JSON.stringify(params))
    const prms = JSON.stringify(params);
    setVisible(true);
    try {
      const { data } = await apiCall("POST", ENDPOINTS.SOCIAL_LOGIN, prms);
      console.log("dataSOCIAL: ", data);
      if (data.status === 200) {
        if (params.signup_mode === 1) {
          LoginManager.logOut();
        } else {
          await GoogleSignin.signOut();
        }
        setVisible(false);
        setUserData(data.data);
        await setDefaultHeader("token", data.token);
        await AsyncStorage.setItem("localuserdata", JSON.stringify(data));
        signIn();
      } else {
        setVisible(false);
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (e) {
      setVisible(false);
      setErrorMessage("Login with " + e);
      setVisibleErr(true);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <LoginScreen
        onPressFacebook={onPressFacebook}
        onPressGoogle={onPressGoogle}
        handleForgotPassword={handleForgotPassword}
        UserName={UserName}
        Password={Password}
        setUserName={setUserName}
        setPassword={setPassword}
        onPressLogin={onPressLogin}
        onPressSignUp={onPressSignUp}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
    </View>
  );
};
export default SignInView;
