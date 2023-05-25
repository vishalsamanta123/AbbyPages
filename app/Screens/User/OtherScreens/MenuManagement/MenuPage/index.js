import React, { useContext, useEffect, useState } from "react";
import { Linking, View } from "react-native";
import apiEndPoints from "../../../../../Utils/apiEndPoints";
import { apiCall } from "../../../../../Utils/httpClient";
import MenuPageView from "./components/MenuPageView";
import CommonStyles from "../../../../../Utils/CommonStyles";
import AsyncStorage from "@react-native-community/async-storage";
import { businessPageObj } from "../../../../../Utils/staticData";
import { AuthContext, UserContext } from "../../../../../Utils/UserContext";
import QuestionModal from "../../../../../Components/Modal/questionModal";
import { useFocusEffect } from "@react-navigation/native";
import { handleBusinessNav } from "../../../../../Utils/Globalfunctions";

const MenuPage = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);
  const [userData, setUserData] = useContext(UserContext);
  const [recent_view, setRecent_view] = useState([]);
  const { signOut } = React.useContext(AuthContext);
  const [logoutVw, setLogoutVw] = useState(false);

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
    } else if (options?.type === "5") {
      navigation.navigate("JobListing");
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
