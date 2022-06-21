import React, { useState, useEffect, useContext } from "react";
import SignUpScreen from "./components/SignUpScreen";
import AsyncStorage from "@react-native-community/async-storage";
import Geolocation from "@react-native-community/geolocation";
import Geocoder from "react-native-geocoding";
import DeviceInfo from "react-native-device-info";
import { apiCall, setDefaultHeader } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import { View } from "react-native";
import Loader from "../../../Utils/Loader";
import { UserContext, AuthContext } from "../../../Utils/UserContext";
import Error from "../../../Components/Modal/error";
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from "react-native-fbsdk";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-community/google-signin";
GoogleSignin.configure({
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  webClientId:
    "448393819239-s9q3t5pngpbao0pl4nm2eu5ae5ojsa33.apps.googleusercontent.com",
  // webClientId: "448393819239-rj2apu3vkg3h8bui92h51gmlgr3eitll.apps.googleusercontent.com",
  offlineAccess: true,
});
Geocoder.init("AIzaSyAvtWufwnjN7MwtOfwtQrzmv2Rp_wUxBbw");
const SignUpView = ({ navigation }) => {
  let watchID;
  const { signIn } = React.useContext(AuthContext);
  const [registrationData, setRegistrationData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    zip_code: "",
    birth_date: "",
  });
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const [userData, setUserData] = useContext(UserContext);
  const [fcmToken, setFcmToken] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  // const { signIn } = React.useContext(AuthContext);
  function validationFrom() {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (registrationData.first_name == "") {
      setErrorMessage("Please Enter FirstName");
      setVisibleErr(true);
      return false;
    }
    if (registrationData.last_name == "") {
      setErrorMessage("Please Enter LastName");
      setVisibleErr(true);
      return false;
    }
    if (registrationData.email == "") {
      setErrorMessage("Please Enter Email");
      setVisibleErr(true);
      return false;
    }
    if (reg.test(registrationData.email) === false) {
      setErrorMessage("Please Enter Correct Email Address");
      setVisibleErr(true);
      return false;
    }
    if (registrationData.password == "") {
      setErrorMessage("Please Enter Password");
      setVisibleErr(true);
      return false;
    }
    if (registrationData.password.length <= 5) {
      setErrorMessage("please Enter password min 6 characters");
      setVisibleErr(true);
      return false;
    }
    if (registrationData.zip_code == "") {
      setErrorMessage("Please Enter Zip Code");
      setVisibleErr(true);
      return false;
    }
    if (registrationData.birth_date == "") {
      setErrorMessage("Please Select BirthDate");
      setVisibleErr(true);
      return false;
    }
    return true;
  }
  const onPressSingUp = async () => {
    const valid = validationFrom();
    if (valid) {
      setVisible(true);
      try {
        const params = {
          first_name: registrationData.first_name,
          last_name: registrationData.last_name,
          email: registrationData.email,
          password: registrationData.password,
          zip_code: registrationData.zip_code, //only taken numbers but keyboard is not number-pad
          birth_date: registrationData.birth_date,
        };
        console.log("params: ", params);
        const { data } = await apiCall("POST", ENDPOINTS.USER_SIGN_UP, params);
        console.log("dataSIGNUPP: ", data);
        if (data.status === 200) {
          await setDefaultHeader("token", data.data.token);
          navigation.navigate("UserVerify", { email: registrationData.email });
          setRegistrationData({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            zip_code: "",
            birth_date: "",
          });
          setVisible(false);
        } else {
          setVisible(false);
          setErrorMessage(data.message);
          setVisibleErr(true);
        }
      } catch (e) {
        setVisible(false);
        setErrorMessage(JSON.stringify(e));
        setVisibleErr(true);
      }
    }
  };
  useEffect(() => {
    getOneTimeLocation();
    subscribeLocationLocation();
    fireBaseToken();
    deviceDetails();
  }, []);
  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        // var currentLocation = {
        // lat: position.coords.latitude,
        // lng: position.coords.longitude
        // }
        // console.log(position)
        // setLocation(currentLocation)
        // dataSetAsyncStorage(currentLocation)
        // Geocoder.from(currentLocation.lat, currentLocation.lng)
        //     .then(json => {
        //         var addressComponent = json.results[0].formatted_address;
        //         console.log(addressComponent);
        //         // setLocation({
        //         //     ...location,
        //         //     address: addressComponent
        //         // })
        //     })
        //     .catch(error => console.warn(error));
      },
      (error) => {
        setErrorMessage(error.message);
        setVisibleErr(true);
        // alert(error.message);
      },
      { enableHighAccuracy: false, timeout: 30000, maximumAge: 1000 }
    );
  };
  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        // console.log(position);
        // var currentLocation = {
        //     lat: position.coords.latitude,
        //     lng: position.coords.longitude
        // }
        // dataSetAsyncStorage(currentLocation)
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
    // alert(JSON.stringify(deviceId))
    // console.log(deviceId)
  }
  async function fireBaseToken() {
    const fcmtoken = await AsyncStorage.getItem("fcmToken");
    setFcmToken(fcmtoken);
  }
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
      // console.log(googleData)
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
      <SignUpScreen
        onPressGoogle={onPressGoogle}
        onPressFacebook={onPressFacebook}
        registrationData={registrationData}
        setRegistrationData={setRegistrationData}
        onPressSingUp={onPressSingUp}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
    </View>
  );
};
export default SignUpView;
