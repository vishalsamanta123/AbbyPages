import React, { useState, useEffect } from "react";
import { ToastAndroid, View } from "react-native";
import JobListScreen from "./components/JobListScreen";
import CommonStyles from "../../Utils/CommonStyles";
import FilterPopUp from "./components/FilterPopUp";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Error from "../../Components/Modal/error";
import Loader from "../../Utils/Loader";
import _ from "lodash";

const JobList = ({ navigation }) => {
  useEffect(() => {
    if (!search) {
      handleJobFilter(0);
    }
  }, [jobList]);
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [loader, setLoader] = useState();
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState(false);
  const [jobList, setJobList] = useState();
  const [stopOffset, setstopOffset] = useState(false);
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
      business_type: 2,
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
  const _hanldeSetLike = async (item) => {
    try {
      const params = {
        business_id: item.business_id,
        like_status: item?.user_like == 1 ? 0 : 1,
      };
      const { data } = await apiCall("POST", ENDPOINTS.BUSINESS_LIKE, params);
      console.log('data: ', data);
      if (data.status == 200) {
        ToastAndroid.show(data.message, ToastAndroid.SHORT);
        handleJobFilter(offset);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setLoader(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setLoader(false);
    }
  };
  const handlejobsList = async (offSet) => {
    setoffset(offSet);
    const params = {
      offset: offSet,
    };
    try {
      setLoader(true);
      const { data } = await apiCall("POST", ENDPOINTS.GET_JOB_LIST, params);
      if (data.status === 200) {
        data.data.forEach(function (item, i) {
          item["latitude"] = i + 22.7196;
          item["longitude"] = i + 75.8577;
        });
        setJobList(data.data);
        setLoader(false);
      } else {
        setErrorMessage(data.message);
        setstopOffset(true);
        setVisibleErr(true);
        setJobList([]);
        setLoader(false);
      }
    } catch (error) {
      setVisibleErr(true);
      setErrorMessage(error.toString());
      setLoader(false);
    }
  };
  const handleJobFilter = async (offSet) => {
    setoffset(offSet);
    try {
      setLoader(true);
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
        setstopOffset(true);
        setLoader(false);
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setLoader(false);
      setErrorMessage(error.message);
      setVisibleErr(true);
    }
  };

  const onPressJob = (item) => {
    navigation.navigate("JobDetails", { detail: item });
  };
  return (
    <View style={CommonStyles.container}>
      {loader && <Loader state={loader} />}
      <JobListScreen
        _hanldeSetLike={_hanldeSetLike}
        jobList={jobList}
        filterData={filterData}
        onPressJob={onPressJob}
        goBack={goBack}
        setVisible={setVisible}
        onPressMap={onPressMap}
        search={search}
        setSearch={setSearch}
        handlejobsList={handlejobsList}
        handleJobFilter={handleJobFilter}
        handleSearch={handleSearch}
        stopOffset={stopOffset}
        offset={offset}
        handleFilter={handleFilter}
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
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        setVisibleErr={setVisibleErr}
        setLoader={setLoader}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
    </View>
  );
};
export default JobList;
// posterimg: require('../../Assets/extraImages/salooonimg.jpg'),
// companyname: 'MME Studio',
// postingtime: '11 hours ago',
// title: "3D Animation Designer",
// address: "92 Halsey St,Brooklyn,New York",
// worktype: 'Abby Pages',
// req_amount: "$500.00 - $1,000.00"
