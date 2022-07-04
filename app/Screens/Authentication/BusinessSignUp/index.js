import React, { useState, useEffect, useContext } from "react";
import BusinessSignUp from "./components/BusinessSignUpScreen";
import Geocoder from "react-native-geocoding";
import { apiCall, setDefaultHeader } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import { View } from "react-native";
import Loader from "../../../Utils/Loader";
import { AuthContext } from "../../../Utils/UserContext";
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
    "448393819239-rj2apu3vkg3h8bui92h51gmlgr3eitll.apps.googleusercontent.com",
  offlineAccess: true,
});
Geocoder.init("AIzaSyAvtWufwnjN7MwtOfwtQrzmv2Rp_wUxBbw");
const BusinessSignUpView = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  const [registrationData, setRegistrationData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  // const { signIn } = React.useContext(AuthContext);
  function validationFrom() {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (registrationData.first_name == "") {
      setErrorMessage("Please enter firstname");
      setVisibleErr(true);
      return false;
    }
    if (registrationData.last_name == "") {
      setErrorMessage("Please enter lastname");
      setVisibleErr(true);
      return false;
    }
    if (registrationData.email == "") {
      setErrorMessage("Please enter email address");
      setVisibleErr(true);
      return false;
    }
    if (reg.test(registrationData.email) === false) {
      setErrorMessage("please enter correct email address");
      setVisibleErr(true);
      return false;
    }
    if (registrationData.password == "") {
      setErrorMessage("Please enter password");
      setVisibleErr(true);
      return false;
    }
    if (registrationData.password.length <= 5) {
      setErrorMessage("please enter password min 6 characters");
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
        const params = registrationData;
        const { data } = await apiCall(
          "POST",
          ENDPOINTS.BUSINEES_SIGN_UP,
          params
        );
        if (data.status === 200) {
          await setDefaultHeader("token", data.token);
          navigation.navigate("GetStarted", { email: registrationData.email });
          // navigation.navigate('UserVerify', { email: registrationData.email })
          setRegistrationData({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
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

  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <BusinessSignUp
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
export default BusinessSignUpView;
