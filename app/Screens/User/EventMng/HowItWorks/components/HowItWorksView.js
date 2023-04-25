import { View, Text } from "react-native";
import React from "react";
import CommonStyles from "../../../../../Utils/CommonStyles";
import MainHeader from "../../../../../Components/MainHeader";

const HowItWorksView = () => {
  return (
    <View style={CommonStyles.container}>
      <MainHeader isSearch isDrawer />
    </View>
  );
};

export default HowItWorksView;
