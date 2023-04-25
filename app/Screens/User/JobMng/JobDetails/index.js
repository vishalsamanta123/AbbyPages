import React, { useEffect, useState } from "react";
import { Share, ToastAndroid, View } from "react-native";
import JobDetailsScreen from "./components/JobDetailsScreen";
import CommonStyles from "../../Utils/CommonStyles";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Success from "../../Components/Modal/success";
import Error from "../../Components/Modal/error";

const JobDetails = ({ route, navigation }) => {
  const { detail } = route.params || { detail: "" };
  const [details, setDetails] = useState();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (route?.params) {
      jobDetails(detail);
    }
  }, []);
  const jobDetails = async (data) => {
    setVisible(true);
    const params = {
      job_id: data.job_id,
    };
    try {
      const { data } = await apiCall("POST", ENDPOINTS.GET_JOB_DETAILS, params);
      if (data.status === 200) {
        setDetails(data.data);
        setVisible(false);
      } else {
        setVisible(false);
      }
    } catch (error) {
      setVisible(false);
    }
  };
  const applyNow = async () => {
    navigation.navigate("ApplyJob", { details });
  };
  const onPressJob = (item) => {
    jobDetails(item);
  };
  const compareFun = () => {
    alert("Coming Soon");
  };
  const saveJob = async () => {
    try {
      setVisible(true);
      const params = {
        item_type: details.job_type,
        item_id: details?.job_id,
        like: details?.user_like ? (details?.user_like === 1 ? 0 : 1) : 1,
        favorite: details?.favorite,
        interest: details?.interest,
        views: details?.job_views,
      };
      const { data } = await apiCall("POST", ENDPOINTS.USERCOMMONLIKES, params);
      if (data.status === 200) {
        setVisible(false);
        jobDetails(detail);
      } else {
        setVisible(false);
      }
    } catch (error) {
      setVisible(false);
    }
  };
  const shareTo = async () => {
    const result = await Share.share({ message: "Share Job with others" });
    if (result.action) {
      console.log("result: ", result.action);
    }
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <JobDetailsScreen
        details={details}
        applyNow={applyNow}
        compareFun={compareFun}
        saveJob={saveJob}
        shareTo={shareTo}
        onPressJob={onPressJob}
      />
    </View>
  );
};
export default JobDetails;
