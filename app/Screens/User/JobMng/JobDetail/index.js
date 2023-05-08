import React, { useEffect, useState } from "react";
import { Share, View } from "react-native";
import JobDetailView from "./components/JobDetailView";
import CommonStyles from "../../../../Utils/CommonStyles";
import { apiCall } from "../../../../Utils/httpClient";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import { useFocusEffect } from "@react-navigation/native";

const JobDetail = ({ route, navigation }) => {
  const { detail = {} } = route.params;
  const [jobDetail, setJobDetail] = useState();
  const [visible, setVisible] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      getJobDetails(detail);
    }, [navigation, route])
  );
  const getJobDetails = async (data) => {
    setVisible(true);
    const params = {
      job_id: data.job_id,
    };
    try {
      const { data } = await apiCall("POST", ENDPOINTS.GET_JOB_DETAILS, params);
      if (data.status === 200) {
        setJobDetail(data.data);
        setVisible(false);
      } else {
        setVisible(false);
      }
    } catch (error) {
      setVisible(false);
    }
  };
  const applyNowPress = async () => {
    navigation.navigate("ApplyJob", jobDetail);
  };
  const onPressJob = (item) => {
    getJobDetails(item);
  };
  const compareFun = () => {
    alert("Coming Soon");
  };
  const saveJob = async () => {
    try {
      setVisible(true);
      const params = {
        item_type: jobDetail.job_type,
        item_id: jobDetail?.job_id,
        like: jobDetail?.user_like ? (jobDetail?.user_like === 1 ? 0 : 1) : 1,
        favorite: jobDetail?.favorite,
        interest: jobDetail?.interest,
        views: jobDetail?.job_views,
      };
      const { data } = await apiCall("POST", ENDPOINTS.USERCOMMONLIKES, params);
      if (data.status === 200) {
        setVisible(false);
        getJobDetails(detail);
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
      <JobDetailView
        jobDetail={jobDetail}
        applyNowPress={applyNowPress}
        compareFun={compareFun}
        saveJob={saveJob}
        shareTo={shareTo}
        onPressJob={onPressJob}
      />
    </View>
  );
};
export default JobDetail;
