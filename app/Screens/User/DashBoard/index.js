import React, { useEffect, useState } from "react";
import { View } from "react-native";
import DashBoardScreen from "./components/DashBoardScreen";
import CommonStyles from "../../../Utils/CommonStyles";
import _ from "lodash";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import { windowWidth } from "../../../Utils/Constant";

const DashBoardView = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { currentPage: pageIndex } = sliderState;
  const [recent_activity, setRecent_Activity] = useState([]);
  const [businessTypes, setBusinessTypes] = useState([]);
  const [moreCategory, setMoreCategory] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [recentLoader, setRecentLoader] = React.useState(false);
  const [byCategory, setByCategory] = useState({
    services: [],
    moreServices: [],
  });

  useEffect(() => {
    getDashBoardActivity();
    getDashBoardBussiness();
    getDashBoardCategory();
  }, [navigation]);

  const onRefresh = () => {
    getDashBoardActivity();
    getDashBoardBussiness();
    getDashBoardCategory();
    setVisible(false);
    setRefreshing(false);
    setRecentLoader(false);
  };
  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.ceil(x / windowWidth);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const getDashBoardActivity = async () => {
    setRecentLoader(true);
    if (!refreshing) {
      setVisible(true);
    }
    try {
      const { data } = await apiCall("GET", ENDPOINTS.NEW_ACTIVITIES);
      if (data.status === 200) {
        setVisible(false);
        setRecent_Activity(data?.data);
        setRecentLoader(false);
        setRefreshing(false);
      } else {
        setVisible(false);
        setRefreshing(false);
        setRecentLoader(false);
      }
    } catch (error) {
      setVisible(false);
      setRecentLoader(false);
    }
  };
  const getDashBoardCategory = async () => {
    if (!refreshing) {
      setVisible(true);
    }
    try {
      const { data } = await apiCall("GET", ENDPOINTS.CATEGORIES_AT_HOME_LIST);
      if (data.status === 200) {
        setVisible(false);
        setByCategory({
          ...byCategory,
          services: data?.data?.services,
          moreServices: data?.data?.moreServices,
        });
        setRefreshing(false);
      } else {
        setVisible(false);
        setRefreshing(false);
      }
    } catch (error) {
      setVisible(false);
      setRefreshing(false);
    }
  };
  const getDashBoardBussiness = async () => {
    if (!refreshing) {
      setVisible(true);
    }
    try {
      const { data } = await apiCall("POST", ENDPOINTS.HOME_DASHBOARD);
      if (data.status === 200) {
        setVisible(false);
        setBusinessTypes(data.data.business_type);
        setRefreshing(false);
      } else {
        setVisible(false);
        setRefreshing(false);
      }
    } catch (error) {
      setVisible(false);
      setRefreshing(false);
    }
  };
  const refreshFun = () => {
    getDashBoardActivity();
    getDashBoardBussiness();
    getDashBoardCategory();
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <DashBoardScreen
        pageIndex={pageIndex}
        setSliderPage={setSliderPage}
        recent_activity={recent_activity}
        services={byCategory?.services}
        moreServices={byCategory?.moreServices}
        moreCategory={moreCategory}
        businessTypes={businessTypes}
        setMoreCategory={setMoreCategory}
        navigation={navigation}
        visible={visible}
        setVisible={setVisible}
        refreshFun={refreshFun}
        recentLoader={recentLoader}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
      {/* <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => setVisibleSuccess(false)}
      /> */}
      {/* <QuestionModal
        surringVisible={forBusinees}
        cancelModel={() => setForBusinees(false)}
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
export default DashBoardView;
