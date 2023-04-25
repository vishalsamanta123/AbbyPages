import React, { useEffect, useState } from "react";
import { View } from "react-native";
import apiEndPoints from "../../../../../Utils/apiEndPoints";
import { apiCall } from "../../../../../Utils/httpClient";
import MorePageView from "./components/MorePageView";
import CommonStyles from "../../../../../Utils/CommonStyles";
import AsyncStorage from "@react-native-community/async-storage";
import { businessPageObj } from "../../../../../Utils/staticData";

const MorePage = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [recent_view, setRecent_view] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getRecentView();
  }, []);
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
  const onPressOptions = (options) => {
    if (options.type === "2") {
      navigation.navigate("ShopList");
    } else if (options.type === "1" || options.type === "3") {
      const newObj = { ...businessPageObj, business_type: options.type };
      navigation.navigate("BusinessPageListing", {
        nearbySearch: newObj,
      });
    } else if (options.type === "") {
      navigation.navigate("Login");
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
      <MorePageView
        userData={userData}
        visible={visible}
        recent_view={recent_view}
        handleSignupLogin={handleSignupLogin}
        onPressOptions={onPressOptions}
        onPressView={onPressView}
      />
    </View>
  );
};

export default MorePage;
