import React, { useEffect, useState } from "react";
import { Linking, View } from "react-native";
import apiEndPoints from "../../../../../Utils/apiEndPoints";
import { apiCall } from "../../../../../Utils/httpClient";
import MenuPageView from "./components/MenuPageView";
import CommonStyles from "../../../../../Utils/CommonStyles";
import AsyncStorage from "@react-native-community/async-storage";
import { businessPageObj } from "../../../../../Utils/staticData";
import { AuthContext } from "../../../../../Utils/UserContext";
import QuestionModal from "../../../../../Components/Modal/questionModal";
import { useFocusEffect } from "@react-navigation/native";

const MenuPage = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);
  const [recent_view, setRecent_view] = useState([]);
  const [userData, setUserData] = useState({});
  const { signOut } = React.useContext(AuthContext);
  const [logoutVw, setLogoutVw] = useState(false);
  
  const signOutFun = () => {
    signOut();
    navigation.navigate("App");
    setLogoutVw(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      getRecentView();
    }, [navigation, route, logoutVw, signOut])
  );
  const getRecentView = async () => {
    setVisible(true);
    try {
      const getUserData = await AsyncStorage.getItem("localuserdata");
      if (JSON?.parse(getUserData)?.login_type) {
        setUserData(JSON?.parse(getUserData));
      }
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
      navigation.navigate("ShopList");
    } else if (options.type === "1" || options.type === "3") {
      const newObj = { ...businessPageObj, business_type: options.type };
      navigation.navigate("BusinessPageListing", {
        nearbySearch: newObj,
      });
    } else if (options.type === "") {
      navigation.navigate("Login");
    } else if (options?.type?.includes("Business")) {
      const supported = await Linking.canOpenURL(options.url);
      if (supported) {
        await Linking.openURL(options.url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${options.url}`);
      }
    }
  };
  const onPressView = (item) => {
    const data = {
      ...item,
      search_business_type: item.business_type,
    };
    navigation.navigate("BusinessPageDetails", { detail: data });
  };
  return (
    <View style={CommonStyles.container}>
      {/* {visible ? <Loader state={visible} /> : null} */}
      <MenuPageView
        userData={userData}
        visible={visible}
        recent_view={recent_view}
        handleSignupLogin={handleSignupLogin}
        onPressOptions={onPressOptions}
        onPressView={onPressView}
        logoutVw={logoutVw}
        setLogoutVw={setLogoutVw}
      />
      <QuestionModal
        surringVisible={logoutVw}
        message={"Are you sure you want to Logout"}
        positiveResponse={() => signOutFun()}
        negativeResponse={() => setLogoutVw(false)}
      />
    </View>
  );
};

export default MenuPage;
