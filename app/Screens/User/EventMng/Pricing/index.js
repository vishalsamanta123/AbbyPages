import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import PricingView from "./components/PricingView";
import AsyncStorage from "@react-native-community/async-storage";

const Pricing = ({ navigation }) => {
  return <PricingView />;
};

export default Pricing;
