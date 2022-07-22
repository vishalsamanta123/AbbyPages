import React, { useEffect, useState } from "react";
import { Share, View } from "react-native";
import JobDetailsScreen from "./components/JobDetailsScreen";
import CommonStyles from "../../Utils/CommonStyles";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Success from "../../Components/Modal/success";
import Error from "../../Components/Modal/error";

const JobDetails = ({ route, navigation }) => {
  const [details, setDetails] = useState([]);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (route.params) {
      const { detail } = route.params;
      console.log("detail: ", detail);
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
      console.log("data: ", data);
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
  const onPressJob = (item) => {
    jobDetails(item);
  };
  
  const applyNow = () => {
    navigation.navigate("ApplyJob", {
      details,
    });
  };
  const compareFun = () => {
    alert("Coming Soon");
  };
  const saveJob = async () => {
    try {
      setVisible(true);
      const params = {
        item_type: details.business_type,
        item_id: details.business_id,
        like: details.likes,
        favorite: details?.favorite,
        interest: details?.interest,
        views: details.views,
      };
      const { data } = await apiCall("POST", ENDPOINTS.USERCOMMONLIKES, params);
      if (data.status === 200) {
        setVisible(false);
        setVisibleSuccess(true);
        setSuccessMessage(data.message);
      } else {
        setVisible(false);
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setVisible(false);
    }
  };
  const shareTo = async () => {
    const result = await Share.share({
      message: "Share Job with others",
    });
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
