import React, { useEffect, useState } from "react";
import ChangePassword from "./components/ChangePassword";
import { View } from "react-native";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import { apiCall } from "../../../../Utils/httpClient";
import ShowMessage from "../../../../Components/Modal/showMessage";
const ChangePasswordView = ({ navigation }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const [CurrentPasswrd, setCurrentPasswrd] = useState("");
  const [NewPasswrd, setNewPasswrd] = useState("");
  const [VerifyPasswrd, setVerifyPasswrd] = useState("");
  useEffect(() => {
    setCurrentPasswrd("")
    setNewPasswrd("")
    setVerifyPasswrd("")
  }, [])
  const submitbtn = async () => {
    setVisible(true);
    try {
      if (CurrentPasswrd !== "") {
        if (NewPasswrd === VerifyPasswrd) {
          if (NewPasswrd.length > 5 && VerifyPasswrd.length > 5) {
            const params = {
              old_password: CurrentPasswrd,
              new_password: NewPasswrd,
            };
            const { data } = await apiCall(
              "POST",
              ENDPOINTS.CHANGE_PASSWORD,
              params
            );
            console.log("🚀 ~ file: index.js:30 ~ data:", data);

            if (data.status === 200) {
              setSuccessMessage(data.message);
              setVisibleSuccess(true);
              setVisible(false);
            } else {
              setVisible(false);
              setErrorMessage(data.message);
              setVisibleErr(true);
            }
          } else {
            setVisible(false);
            setErrorMessage("Password Length should be 6 Characters");
            setVisibleErr(true);
          }
        } else {
          setVisible(false);
          setErrorMessage("Please Enter Same Password");
          setVisibleErr(true);
        }
      } else {
        setVisible(false);
        setErrorMessage("Please enter current Password");
        setVisibleErr(true);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  function goback() {
    navigation.goBack(null);
  }
  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <ChangePassword
        goback={goback}
        submitbtn={submitbtn}
        setCurrentPasswrd={setCurrentPasswrd}
        setNewPasswrd={setNewPasswrd}
        setVerifyPasswrd={setVerifyPasswrd}
        NewPasswrd={NewPasswrd}
        CurrentPasswrd={CurrentPasswrd}
        VerifyPasswrd={VerifyPasswrd}
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
export default ChangePasswordView;
