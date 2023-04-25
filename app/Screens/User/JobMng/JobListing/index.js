import React, { useState, useEffect } from "react";
import { ToastAndroid, View } from "react-native";
import JobListingView from "./components/JobListingView";
import CommonStyles from "../../../../Utils/CommonStyles";
import FilterPopUp from "./components/FilterPopUp";
import { apiCall } from "../../../../Utils/httpClient";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Error from "../../../../Components/Modal/error";
import Loader from "../../../../Utils/Loader";
import _ from "lodash";
import { AuthContext } from "../../../../Utils/UserContext";
import QuestionModal from "../../../../Components/Modal/questionModal";

const JobListing = ({ navigation }) => {
  useEffect(() => {
    if (!search) {
      handleJobFilter(0);
    }
  }, []);
  const [loader, setLoader] = useState();
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState(false);
  const [jobList, setJobList] = useState();
  const [postjob, setPostjob] = useState(false);
  const [offset, setoffset] = useState(0);
  const [filterData, setFilterData] = useState({
    title: "",
    city_name: "",
    category: "",
    country: "",
    state: "",
    city: "",
    job_type: "",
    latitude: "",
    longitude: "",
  });
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
    setSearch(true);
    setVisible(true);
  };
  const handleFilter = () => {
    setSearch(false);
    setVisible(true);
  };
 
  const handleJobFilter = async (offSet) => {
    setoffset(offSet);
    try {
      // setLoader(true);
      const params = {
        job_title: filterData?.title ? filterData?.title : null,
        city_name: filterData?.city_name ? filterData?.city_name : null,
        category: filterData?.category ? filterData?.category : null,
        country: filterData?.country ? filterData?.country : null,
        state: filterData?.state ? filterData?.state : null,
        city: filterData?.city ? filterData?.city : null,
        job_type: filterData?.job_type ? filterData?.job_type : null,
        latitude: filterData?.latitude ? filterData?.latitude : null,
        longitude: filterData?.longitude ? filterData?.longitude : null,
        offset: offSet,
        limit: 10 + offSet,
      };
      const { data } = await apiCall("POST", ENDPOINTS.JOB_FILTER, params);
      if (data.status == 200) {
        setJobList(data.data);
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
        onPressJob={onPressJob}
        goBack={goBack}
        setVisible={setVisible}
        onPressMap={onPressMap}
        search={search}
        setSearch={setSearch}
        handleJobFilter={handleJobFilter}
        handleSearch={handleSearch}
        offset={offset}
        handlePostJob={handlePostJob}
        handleFilter={handleFilter}
        postjob={postjob}
        setPostjob={setPostjob}
      />
      <FilterPopUp
        visible={visible}
        search={search}
        closeModel={() => setVisible(false)}
        setVisible={setVisible}
        goBack={goBack}
        setFilterData={setFilterData}
        handleJobFilter={handleJobFilter}
        filterData={filterData}
        setLoader={setLoader}
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
