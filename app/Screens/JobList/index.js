import React, { useState, useEffect } from "react";
import { View } from "react-native";
import JobListScreen from "./components/JobListScreen";
import CommonStyles from "../../Utils/CommonStyles";
import FilterPopUp from "./components/FilterPopUp";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Error from "../../Components/Modal/error";
import Loader from "../../Utils/Loader";
const JobList = ({ navigation }) => {
  
  useEffect(() => {
    handlejobsList();
  }, []);
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [loader, setLoader] = useState();
  const [visible, setVisible] = useState(false);
  const [like, setLike] = useState(false);
  const [jobList, setJobList] = useState([]);
  const openFilter = () => {
    // setVisible(true)
  };
  const goBack = () => {
    navigation.goBack(null);
  };
  const onPressMap = () => {
    navigation.navigate("ListingMap", {
      businessList: jobList,
      business_type: 2,
    });
  };
  const _hanldeSetLike = (index) => {
    like == index ? setLike(null) : setLike(index);
  };
  const handlejobsList = async () => {
    const params = {
      offset: 0,
    };
    try {
      setLoader(true);
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_BUSINESS_JOB_LIST,
        params
      );
      if (data.status === 200) {
        setJobList(data.data);
        setLoader(false);
        setVisibleErr(true);
      } else {
        setErrorMessage(data.message);
        setJobList([]);
        setLoader(false);
        setVisibleErr(true);
      }
    } catch (error) {
      setLoader(false);
      setErrorMessage(error);
    }
  };
  const onPressJob = () => {
    navigation.navigate("JobDetails");
  };
  return (
    <View style={CommonStyles.container}>
      {loader && <Loader state={loader} />}
      <JobListScreen
        openFilter={openFilter}
        _hanldeSetLike={_hanldeSetLike}
        like={like}
        jobList={jobList}
        onPressJob={onPressJob}
        goBack={goBack}
        onPressMap={onPressMap}
      />
      <FilterPopUp
        visible={visible}
        closeModel={() => setVisible(false)}
        setVisible={setVisible}
        // OnpressBack={OnpressBack}
      />
      <Error
        message={errorMessage}
        visible={loader}
        closeModel={() => setVisibleErr(false)}
      />
    </View>
  );
};
export default JobList;
