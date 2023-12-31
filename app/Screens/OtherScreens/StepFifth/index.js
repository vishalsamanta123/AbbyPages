import React, { useState, useContext, useEffect } from "react";
import StepFifthScreen from "./components/StepFifthScreen";
import { View } from "react-native";
import CommonStyles from "../../Utils/CommonStyles";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Success from "../../Components/Modal/success";
import Error from "../../Components/Modal/showMessage";
import { ServiceProviderContext, UserContext } from "../../Utils/UserContext";
const StepFifth = ({ navigation, route }) => {
  const [serviceProviderData, setServiceProviderData] = useContext(
    ServiceProviderContext
  );
  const [profileData, setProfileData] = useState();
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [localUserData, setLocalUserData] = useState({
    email: "",
    mobile: "",
    user_name: "",
  });
  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = async () => {
    try {
      const { data } = await apiCall("POST", ENDPOINTS.GET_USER_PROFILE);
      if (data.status === 200) {
        setProfileData(data.data);
        setLocalUserData({
          email: data.data?.email ? data.data?.email : "",
          mobile: data.data?.phone ? data.data?.phone : "",
          user_name: data.data?.first_name
            ? data.data?.first_name + " " + data.data?.last_name
            : "",
        });
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const validationFormForLocalUserData = () => {
    if (localUserData.email === "") {
      setErrorMessage("Please Enter Email");
      setVisibleErr(true);
      return false;
    }
    // if (localUserData.mobile === "") {
    //   setErrorMessage("Please Enter Phone");
    //   setVisibleErr(true);
    //   return false;
    // }
    if (localUserData.user_name === "") {
      setErrorMessage("Please Enter UserName");
      setVisibleErr(true);
      return false;
    }
    return true;
  };
  const onPressStepSix = () => {
    const valid = validationFormForLocalUserData();
    if (valid) {
      const params = {
        serviceDetail: serviceProviderData.serviceDetail,
        selectedCategory: serviceProviderData.selectedCategory,
        selectedSubCategory: serviceProviderData.selectedSubCategory,
        // zip_code: 452001
        latitude: serviceProviderData.latitude,
        longitude: serviceProviderData.longitude,
        address: serviceProviderData.address,
        booking_time: serviceProviderData.booking_time,
        booking_date: serviceProviderData.booking_date,
        description: serviceProviderData.description,
        username: localUserData.user_name,
        email: localUserData.email,
        phone: localUserData.mobile,
      };
      setServiceProviderData(params);
      navigation.navigate("StepSeven");
    }
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <StepFifthScreen
        goBack={() => navigation.goBack(null)}
        localUserData={localUserData}
        setLocalUserData={setLocalUserData}
        onPressStepSix={onPressStepSix}
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
export default StepFifth;
