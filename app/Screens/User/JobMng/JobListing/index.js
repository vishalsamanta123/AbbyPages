import React, { useState } from "react";
import { View } from "react-native";
import JobListingView from "./components/JobListingView";
import { useFocusEffect } from "@react-navigation/native";
import CommonStyles from "../../../../Utils/CommonStyles";
import { apiCall } from "../../../../Utils/httpClient";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import _ from "lodash";
import QuestionModal from "../../../../Components/Modal/questionModal";
import ShowMessage from "../../../../Components/Modal/showMessage";

const JobListing = ({ navigation, route }) => {
  const nullObj = {
    job_title: "",
    city_name: "",
    category: "",
    country: "",
    state: "",
    city: "",
    job_type: "",
    latitude: "",
    longitude: "",
    country_name_d: "",
    state_name_d: "",
    city_name_d: "",
    hire_name_d: "",
  };
  const [loader, setLoader] = useState();
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });
  const [jobList, setJobList] = useState([]);
  const [postjob, setPostjob] = useState(false);
  const [offset, setoffset] = useState(0);
  const [moreData, setMoreData] = useState(0);
  const [filterData, setFilterData] = useState(nullObj);

  useFocusEffect(
    React.useCallback(() => {
      handleJobFilter(0, nullObj);
    }, [navigation, route])
  );

  const goBack = () => {
    navigation.goBack(null);
  };

  const handleJobFilter = async (offSet, otherItem) => {
    setoffset(offSet);
    setFilterData(otherItem);
    try {
      setLoader(true);
      const params = {
        job_title: otherItem?.job_title ? otherItem?.job_title : null,
        city_name: otherItem?.city_name ? otherItem?.city_name : null,
        category: otherItem?.category ? otherItem?.category : null,
        country: otherItem?.country ? otherItem?.country : null,
        state: otherItem?.state ? otherItem?.state : null,
        city: otherItem?.city ? otherItem?.city : null,
        job_type: otherItem?.job_type ? otherItem?.job_type : null,
        latitude: otherItem?.latitude ? otherItem?.latitude : null,
        longitude: otherItem?.longitude ? otherItem?.longitude : null,
        offset: offSet,
        limit: 10,
      };
      const { data } = await apiCall("POST", ENDPOINTS.JOB_FILTER, params);
      if (data.status == 200) {
        if (offSet === 0) {
          setJobList(data?.data);
        } else {
          setJobList([...jobList, ...data.data]);
        }
        setMoreData(data?.total_count);
        setLoader(false);
      } else {
        if (data.status == 201) {
          setJobList([]);
          setLoader(false);
        } else {
          setLoader(false);
        }
      }
    } catch (error) {
      setLoader(false);
    }
  };

  const onPressLike = async (item, index) => {
    try {
      const params = {
        favorite: item?.user_like === 0 ? 1 : 0,
        interest: 0,
        item_id: item?.job_id,
        item_type: 3,
        like: item?.user_like === 0 ? 1 : 0,
        views: item?.user_view,
      };
      const { data } = await apiCall("POST", ENDPOINTS.USERCOMMONLIKES, params);
      if (data.status === 200) {
        const newObj = { ...item, user_like: item?.user_like === 0 ? 1 : 0 };
        const newArray = [...jobList];
        newArray[index] = newObj;
        setJobList(newArray);
        // setMessageShow({
        //   visible: true,
        //   type: "success",
        //   message: data?.message,
        // });
      } else {
        setMessageShow({
          visible: true,
          type: "error",
          message: data?.message,
        });
      }
    } catch (error) {
      setMessageShow({
        visible: true,
        type: "error",
        message: error?.message,
      });
    }
  };
  const onPressJob = (item) => {
    navigation.navigate("JobDetail", { detail: item });
  };
  const handlePostJob = (type) => {
    if (type === 1) {
      navigation.navigate("BusinessSignUp");
      setPostjob(false);
      // signOut();
    } else {
      navigation.navigate("Login", { loginType: "new" });
      setPostjob(false);
      // signOut();
    }
  };

  return (
    <View style={CommonStyles.container}>
      {/* {loader && <Loader state={loader} />} */}
      <JobListingView
        jobList={jobList}
        filterData={filterData}
        nullObj={nullObj}
        setFilterData={setFilterData}
        onPressJob={onPressJob}
        goBack={goBack}
        handleJobFilter={handleJobFilter}
        offset={offset}
        handlePostJob={handlePostJob}
        postjob={postjob}
        setPostjob={setPostjob}
        moreData={moreData}
        onPressLike={onPressLike}
        loader={loader}
      />
      {/* <QuestionModal
        surringVisible={postjob}
        cancelModel={() => setPostjob(false)}
        modalType={""}
        topMessage={"Add a Business"}
        message={
          "Are you a customer or the owner/manager of the busineess you'd like to add?"
        }
        positiveTxt={"I m a customer"}
        negativeTxt={"This is my businesss"}
        positiveResponse={() => handlePostJob(1)}
        negativeResponse={() => handlePostJob(2)}
      /> */}
      <ShowMessage
        visible={messageShow?.visible}
        message={messageShow?.message}
        messageViewType={messageShow?.type}
        onEndVisible={() => {
          setMessageShow({
            visible: false,
            message: "",
            type: "",
          });
        }}
      />
    </View>
  );
};
export default JobListing;
