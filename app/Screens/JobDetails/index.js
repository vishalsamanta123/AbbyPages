import React, { useState } from "react";
import { View } from "react-native";
import JobDetailsScreen from "./components/JobDetailsScreen";
import CommonStyles from "../../Utils/CommonStyles";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
const JobDetails = ({ route, navigation }) => {
  console.log("route: ", route);
  const jobDetails = async () => {
    const { detail } = route.params;
    // const { data } = apiCall("POST",ENDPOINTS.);
  };
  return (
    <View style={CommonStyles.container}>
      <JobDetailsScreen />
    </View>
  );
};
export default JobDetails;
