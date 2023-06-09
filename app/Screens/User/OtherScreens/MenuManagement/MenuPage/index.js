import React, { useContext, useState } from "react";
import { View } from "react-native";
import apiEndPoints from "../../../../../Utils/apiEndPoints";
import { apiCall } from "../../../../../Utils/httpClient";
import MenuPageView from "./components/MenuPageView";
import CommonStyles from "../../../../../Utils/CommonStyles";
import { businessPageObj } from "../../../../../Utils/staticData";
import {
  AuthContext,
  TabModalContext,
  UserContext,
} from "../../../../../Utils/UserContext";
import QuestionModal from "../../../../../Components/Modal/questionModal";
import { useFocusEffect } from "@react-navigation/native";
import { handleBusinessNav } from "../../../../../Utils/Globalfunctions";
import AbbyCalendar from "../../../../../Components/AbbyCalendar";

const MenuPage = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);
  const [userData, setUserData] = useContext(UserContext);
  const [recent_view, setRecent_view] = useState([]);
  const { signOut } = React.useContext(AuthContext);
  const [logoutVw, setLogoutVw] = useState(false);
  const [abbyCalendar, setAbbyCalendar] = useState(false);
  const [onPressmodal, setOnPressmodal, isFocused, setIsFocused] =
    useContext(TabModalContext);

  const signOutFun = () => {
    signOut();
    navigation.navigate("Login");
    setLogoutVw(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      getRecentView();
      setUserData(userData);
    }, [navigation, route, userData])
  );

  const getRecentView = async () => {
    setVisible(true);
    try {
      const { data } = await apiCall("GET", apiEndPoints.RECENT_VIEWED);
      if (data.status === 200) {
        setVisible(false);
        setRecent_view(data?.data);
      } else {
        setVisible(false);
      }
    } catch (error) {
      setVisible(false);
    }
  };

  const handleSignupLogin = () => {
    navigation.navigate("Login");
  };
  const onPressOptions = async (options) => {
    if (options.type === "2") {
      navigation.navigate("MarketplaceScreen");
    } else if (options.type === "1" || options.type === "3") {
      const newObj = { ...businessPageObj, business_type: options.type };
      navigation.navigate("BusinessPageListing", {
        nearbySearch: newObj,
      });
    } else if (options.type === "") {
      navigation.navigate("Login");
    } else if (options.type === "feed") {
      navigation.navigate("NewsFeed", { business_name: "" });
    } else if (options?.type?.includes("Business")) {
      handleBusinessNav(options);
    } else if (options?.type === "4") {
      navigation.navigate("EventListings");
      setIsFocused("EventManagement");
    } else if (options?.type === "5") {
      navigation.navigate("JobListing");
      setIsFocused("JobManagement");
    } else if (options?.type === null) {
      navigation.navigate("Favorite");
    } else if (options?.type === "calendar") {
      setAbbyCalendar(true);
    }
  };
  const onPressView = (item) => {
    const data = {
      ...item,
      search_business_type: item.business_type,
    };
    navigation.navigate("BusinessPageDetails", { detail: data });
  };

  const handleSeeProfilePress = () => {
    navigation.navigate("ProfileSetting");
  };
  return (
    <View style={CommonStyles.container}>
      <MenuPageView
        userData={userData}
        visible={visible}
        recent_view={recent_view}
        handleSignupLogin={handleSignupLogin}
        onPressOptions={onPressOptions}
        onPressView={onPressView}
        logoutVw={logoutVw}
        setLogoutVw={setLogoutVw}
        handleSeeProfilePress={handleSeeProfilePress}
      />
      <AbbyCalendar
        showCalendar={abbyCalendar}
        endShowCalendar={setAbbyCalendar}
      />
      <QuestionModal
        surringVisible={logoutVw}
        spaceFromTop={true}
        message={"Are you sure you want to Logout"}
        positiveResponse={() => signOutFun()}
        negativeResponse={() => setLogoutVw(false)}
      />
    </View>
  );
};

export default MenuPage;
