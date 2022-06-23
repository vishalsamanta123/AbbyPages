import React, { useState, Fragment, useEffect } from "react";
import { View } from "react-native";
import CommonStyles from "../../Utils/CommonStyles";
import ProfileSettings from "./components/ProfileSettings";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Success from "../../Components/Modal/success";
import Error from "../../Components/Modal/error";
const ProfileSettingsView = ({ navigation }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [userProfileData, setUserProfileData] = useState("");
  useEffect(() => {
    getProfileData();
  }, []);
  const getProfileData = async () => {
    setVisible(true);
    const { data } = await apiCall("POST", ENDPOINTS.GET_USER_PROFILE);
    if (data.status === 200) {
      setUserProfileData(data.data);
      setVisible(false);
    } else {
      setErrorMessage(data.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const onPressProfile = () => {
    navigation.navigate("UpdateProfile");
  };
  const onPressPassword = () => {
    navigation.navigate("ChangePassword");
  };
  const onPressEmail = () => {
    navigation.navigate("NotificationSettings");
  };
  const onPressLocations = () => {
    navigation.navigate("Locations");
  };
  const onPressSettings = () => {
    navigation.navigate("UserProfile");
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <ProfileSettings
        userProfileData={userProfileData}
        onPressPassword={onPressPassword}
        onPressProfile={onPressProfile}
        onPressEmail={onPressEmail}
        onPressLocations={onPressLocations}
        onPressSettings={onPressSettings}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => setVisibleSuccess(false)}
      />
    </View>
  );
};
export default ProfileSettingsView;
