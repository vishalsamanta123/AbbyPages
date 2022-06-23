import React, { useState, useEffect } from "react";
import { View } from "react-native";
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
    handlejobsList();
  }, []);
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [loader, setLoader] = useState();
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState(false);
  const [like, setLike] = useState(false);
  const [jobList, setJobList] = useState();
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
    // like == index ? setLike(null) : setLike(index);
    alert("Coming Soon");
  };
  const handlejobsList = async () => {
    const params = {
      offset: 0,
    };
    try {
      setLoader(true);
      const { data } = await apiCall("POST", ENDPOINTS.GET_JOB_LIST, params);
      if (data.status === 200) {
        setJobList(data.data);
        setLoader(false);
      } else {
        setJobList([]);
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
    }
  };
  const onPressJob = (item) => {
    navigation.navigate("JobDetails", { detail: item });
  };
  const searchJob = (searchKey) => {
    const lowerCased = searchKey.toLowerCase();
    const searchArray = [...jobList];
    const list = _.filter(searchArray, (item) => {
      return item.company_name.toLowerCase().match(lowerCased);
    });
    if (searchKey == "") {
      setVisible(true);
      handlejobsList();
      setVisible(false);
    } else {
      setJobList(list);
    }
  };
  return (
    <View style={CommonStyles.container}>
      {loader && <Loader state={loader} />}
      <JobListScreen
        _hanldeSetLike={_hanldeSetLike}
        like={like}
        jobList={jobList}
        onPressJob={onPressJob}
        goBack={goBack}
        setVisible={setVisible}
        onPressMap={onPressMap}
        search={search}
        setSearch={setSearch}
        searchJob={searchJob}
      />
      <FilterPopUp
        visible={visible}
        closeModel={() => setVisible(false)}
        setVisible={setVisible}
        goBack={goBack}
        // OnpressBack={OnpressBack}
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
