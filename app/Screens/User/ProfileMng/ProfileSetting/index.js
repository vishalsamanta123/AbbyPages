import React, { useState, useEffect } from "react";
import { View } from "react-native";
import CommonStyles from "../../../../Utils/CommonStyles";
import ProfileSettingsView from "./components/ProfileSettingsView";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import { apiCall } from "../../../../Utils/httpClient";
import ShowMessage from "../../../../Components/Modal/showMessage";

const ProfileSetting = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [userProfileData, setUserProfileData] = useState("");
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });
  useEffect(() => {
    getProfileData();
  }, []);
  const getProfileData = async () => {
    try {
      setVisible(true);
      const { data } = await apiCall("POST", ENDPOINTS.GET_USER_PROFILE);
      if (data.status === 200) {
        setUserProfileData(data.data);
        setVisible(false);
      } else {
        // setErrorMessage(data.message);
        // setVisibleErr(true);
        // setVisible(false);
        setMessageShow({
          visible: true,
          message: data.message,
          type: "error",
        });
      }
    } catch (error) {
      // setErrorMessage(error.message);
      // setVisibleErr(true);
      // setVisible(false);
      setMessageShow({
        visible: true,
        message: error.message,
        type: "error",
      });
    }
  };
  const onPressProfile = () => {
    navigation.navigate("UpdateProfileView");
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
  const onPressOrderHistory = () => {
    const params = {
      from : 'profile'
    }
    navigation.navigate("OrderHistory",  params);
  };
  const onPressSettings = () => {
    navigation.navigate("UserProfile");
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <ProfileSettingsView
        userProfileData={userProfileData}
        onPressPassword={onPressPassword}
        onPressProfile={onPressProfile}
        onPressEmail={onPressEmail}
        onPressLocations={onPressLocations}
        onPressSettings={onPressSettings}
        onPressOrderHistory={onPressOrderHistory}
      />
      <ShowMessage
        visible={messageShow?.visible}
        message={messageShow?.message}
        messageViewType={messageShow?.type}
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
export default ProfileSetting;
