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
  };
  const [loader, setLoader] = useState();
  const [visible, setVisible] = useState(false);
  const [jobList, setJobList] = useState();
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
  const onPressMap = () => {
    navigation.navigate("ListingMap", {
      businessList: jobList,
      business_type: 5,
    });
  };
  const handleSearch = () => {
    setVisible(true);
  };
  const handleFilter = () => {
    setVisible(true);
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
      // console.log('params: ', params);
      const { data } = await apiCall("POST", ENDPOINTS.JOB_FILTER, params);
      if (data.status == 200) {
        if (offSet === 0) {
          setJobList(data.data);
        } else {
          setJobList([...jobList, ...data.data]);
        }
        setMoreData(data?.total_count);
        setLoader(false);
        setVisible(false);
      } else {
        if (data.status == 201) {
          setJobList([]);
          setLoader(false);
          setVisible(false);
        } else {
          setLoader(false);
        }
      }
    } catch (error) {
      setLoader(false);
    }
  };

  const onPressJob = (item) => {
    navigation.navigate("JobDetails", { detail: item });
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
      {loader && <Loader state={loader} />}
      <JobListingView
        jobList={jobList}
        filterData={filterData}
        nullObj={nullObj}
        setFilterData={setFilterData}
        onPressJob={onPressJob}
        goBack={goBack}
        setVisible={setVisible}
        onPressMap={onPressMap}
        handleJobFilter={handleJobFilter}
        handleSearch={handleSearch}
        offset={offset}
        handlePostJob={handlePostJob}
        handleFilter={handleFilter}
        postjob={postjob}
        setPostjob={setPostjob}
        moreData={moreData}
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
    </View>
  );
};
export default JobListing;
// posterimg: require('../../Assets/extraImages/salooonimg.jpg'),
// companyname: 'MME Studio',
// postingtime: '11 hours ago',
// title: "3D Animation Designer",
// address: "92 Halsey St,Brooklyn,New York",
// worktype: 'Abby Pages',
// req_amount: "$500.00 - $1,000.00"
