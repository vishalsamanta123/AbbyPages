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
  const [details, setDetails] = useState([]);
  console.log("details: ", details);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (route.params) {
      const { detail } = route.params;
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
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setVisible(false);
      setErrorMessage(error.message);
      setVisibleErr(true);
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
     console.log("data",data)
      if (data.status === 200) {
        setVisible(false);
        ToastAndroid.show(data.message, ToastAndroid.SHORT);
      } else {
        setVisible(false);
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setVisible(false);
      setErrorMessage(error.message);
      setVisibleErr(true);
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
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => setVisibleSuccess(false)}
      />
    </View>
  );
};
export default JobDetails;
