import React, { useState } from "react";
import AddEmailScreen from "./components/AddEmailScreen";
import { View } from "react-native";
import CommonStyles from "../../../../Utils/CommonStyles";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import Success from "../../../../Components/Modal/success";
import Error from "../../../../Components/Modal/showMessage";
import { apiCall } from "../../../../Utils/httpClient";
import ShowMessage from "../../../../Components/Modal/showMessage";
const AddEmail = ({ navigation }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const [otp, setOtp] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState("");
  const [addEmail, setAddEmail] = useState({ email: "" });
  function validationFrom() {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (addEmail.email == "") {
      setErrorMessage("Please enter email");
      setVisibleErr(true);
      return false;
    }
    if (reg.test(addEmail.email) === false) {
      setErrorMessage("Please enter correct email");
      setVisibleErr(true);
      return false;
    }
    return true;
  }
  const onPressSave = async () => {
    const valid = validationFrom();
    if (valid) {
      try {
        setVisible(true);
        const params = addEmail;
        const { data } = await apiCall("POST", ENDPOINTS.ADD_EMAIL, params);
        if (data.status === 200) {
          setVerifyEmail(data.message);
          setVisible(false);
        } else {
          setErrorMessage(data.message);
          setVisibleErr(true);
          setVisible(false);
        }
      } catch (error) {
        setErrorMessage(error.message);
        setVisibleErr(true);
        setVisible(false);
      }
    }
  };
  function validationFormotp() {
    if (otp == "") {
      setErrorMessage("Please enter otp");
      setVisibleErr(true);
      return false;
    }
    return true;
  }
  const _handleOtpVerify = async () => {
    const valid = validationFormotp();
    if (valid) {
      try {
        setVisible(true);
        const params = {
          email: addEmail.email,
          otp: otp,
        };
        const { data } = await apiCall(
          "POST",
          ENDPOINTS.VERIFY_NOTIFICATION_EMAIL,
          params
        );
        if (data.status === 200) {
          setSuccessMessage(data.message);
          setVisibleSuccess(true);
          setVisible(false);
          setVerifyEmail("");
          setAddEmail({
            ...addEmail,
            email: "",
          })
          navigation.goBack();
        } else {
          setErrorMessage(data.message);
          setVisibleErr(true);
          setVisible(false);
          setVerifyEmail("");
          setAddEmail({
            ...addEmail,
            email: "",
          })
        }
      } catch (error) {
        setErrorMessage(error.message);
        setVisibleErr(true);
        setVisible(false);
        setVerifyEmail("");
        setAddEmail({
          ...addEmail,
          email: "",
        })
      }
    }
  };
  const onPressCancelBtn = () => {
    navigation.navigate("NotificationSettings");
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <AddEmailScreen
        addEmail={addEmail}
        setAddEmail={setAddEmail}
        verifyEmail={verifyEmail}
        setOtp={setOtp}
        _handleOtpVerify={_handleOtpVerify}
        onPressSave={onPressSave}
        onPressCancelBtn={onPressCancelBtn}
      />
      {/* <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() =>
          navigation.navigate("NotificationSettings", setVisibleSuccess(false))
        }
      /> */}
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
export default AddEmail;
