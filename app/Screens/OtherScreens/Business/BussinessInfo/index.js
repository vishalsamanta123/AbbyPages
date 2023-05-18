import React, { useState, useEffect } from "react";
import { View } from "react-native";
import BussinessInfoScreen from "./component/BussinessInfoScreen";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import Error from "../../../Components/Modal/showMessage";
import Success from "../../../Components/Modal/success";

const BussinessInfo = ({ navigation }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [profileData, setProfileData] = useState("");
  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = async () => {
    try {
      setVisible(true);
      const { data } = await apiCall("POST", ENDPOINTS.GET_USER_PROFILE);
      if (data.status === 200) {
        setProfileData(data.data);
        setVisible(false);
      } else {
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const navtoRestaurant = () => {
    navigation.navigate("RestaurantManagement");
  };
  const goalsFun = () => {
    navigation.navigate("Goals");
  };
  const AddKeybordFun = () => {
    navigation.navigate("AddKeybord");
  };
  const AddTextFun = () => {
    navigation.navigate("AddText");
  };
  const BusinessLocationFun = () => {
    navigation.navigate("BusinessLocation");
  };
  const BudgetsFun = () => {
    navigation.navigate("Budgets");
  };
  const navToBasicInfo = () => {
    navigation.navigate("BasicInformation");
  };
  const onPressConfirm = () => {
    navigation.navigate("Confirm");
  };
  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <BussinessInfoScreen
        onPressConfirm={onPressConfirm}
        profileData={profileData}
        navtoRestaurant={navtoRestaurant}
        goalsFun={goalsFun}
        AddKeybordFun={AddKeybordFun}
        AddTextFun={AddTextFun}
        BusinessLocationFun={BusinessLocationFun}
        BudgetsFun={BudgetsFun}
        navToBasicInfo={navToBasicInfo}
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
export default BussinessInfo;
