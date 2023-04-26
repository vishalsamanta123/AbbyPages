import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import HowItWorksView from "./components/HowItWorksView";

const HowItWorks = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getUserDetail();
  }, []);
  const getUserDetail = async () => {
    const getUserData = await AsyncStorage.getItem("localuserdata");
    if (JSON?.parse(getUserData)?.login_type) {
      setUserData(JSON?.parse(getUserData));
    }
  };
  return <HowItWorksView userData={userData} />;
};

export default HowItWorks;
