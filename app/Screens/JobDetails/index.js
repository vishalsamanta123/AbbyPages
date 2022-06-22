import React, { useState } from "react";
import { View } from "react-native";
import JobDetailsScreen from "./components/JobDetailsScreen";
import CommonStyles from "../../Utils/CommonStyles";
const JobDetails = () => {
  return (
    <View style={CommonStyles.container}>
      <JobDetailsScreen />
    </View>
  );
};
export default JobDetails;
