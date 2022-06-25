import React, { useEffect, useState } from "react";
import { View } from "react-native";
import JobDetailsScreen from "./components/JobDetailsScreen";
import CommonStyles from "../../Utils/CommonStyles";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";

const JobDetails = ({ route, navigation }) => {
  const [details, setDetails] = useState([]);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    jobDetails();
  }, []);
  const jobDetails = async () => {
    const { detail } = route.params;
    const params = {
      job_id: 16,
    };
    try {
      setVisible(true);
      const { data } = await apiCall("POST", ENDPOINTS.GET_JOB_DETAILS, params);
      console.log('data: ', data);
      if (data.status === 200) {
        setDetails(data.data);
        setVisible(false);
      } else {
        setVisible(false);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const applyNow = async () => {
    navigation.navigate("ApplyJob", {
      details,
    });
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <JobDetailsScreen details={details} applyNow={applyNow} />
    </View>
  );
};
export default JobDetails;
