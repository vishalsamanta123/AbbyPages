import React, { useEffect, useState } from "react";
import { View } from "react-native";
import DashBoardScreen from "./components/DashBoardScreen";
import CommonStyles from "../../../Utils/CommonStyles";
import _ from "lodash";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import { useFocusEffect } from "@react-navigation/native";
import { Constants } from "../../../Utils/Constant";
import AsyncStorage from "@react-native-community/async-storage";

const DashBoardView = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [sliderState, setSliderState] = useState({ activeSlide: 0 });
  const [recent_activity, setRecent_Activity] = useState([]);
  const [businessTypes, setBusinessTypes] = useState([]);
  const [actOffset, setActOffset] = useState(0);
  const [moreData, setMoreData] = useState(0);
  const [moreCategory, setMoreCategory] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [recentLoader, setRecentLoader] = React.useState(false);
  const [userData, setUserData] = useState({});
  const [byCategory, setByCategory] = useState({
    services: [],
    moreServices: [],
  });

  useFocusEffect(
    React.useCallback(() => {
      getDashBoardActivity(0);
      getDashBoardBussiness();
      getDashBoardCategory();
      return () => {};
    }, [navigation])
  );

  const onRefresh = () => {
    getDashBoardActivity(0);
    getDashBoardBussiness();
    getDashBoardCategory();
    setVisible(false);
    setRefreshing(false);
    setRecentLoader(false);
  };
  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.ceil(x / Constants.windowWidth);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const getDashBoardActivity = async (offset) => {
    // setRecentLoader(true);
    setActOffset(offset);
    const getUserData = await AsyncStorage.getItem("localuserdata");
    if (JSON?.parse(getUserData)?.login_type) {
      setUserData(JSON?.parse(getUserData));
    }
    const params = {
      offset: offset,
      limit: 3,
    };
    if (!refreshing && offset === 0) {
      setVisible(true);
    }
    try {
      const { data } = await apiCall("POST", ENDPOINTS.NEW_ACTIVITIES, params);
      if (data.status === 200) {
        setVisible(false);
        setMoreData(20);
        if (offset === 0) {
          setRecent_Activity(data?.data);
        } else {
          setRecent_Activity([...recent_activity, ...data?.data]);
        }
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
  const handleOnActivity = (item) => {
    if (item?.review) {
      navigation.navigate("ReviewRating", item);
    }
  };
  const onSearchByCategoryPress = (item) => {
    navigation.navigate("CategorySearch");
  };
  return (
    <View style={CommonStyles.container}>
      {/* {visible && <Loader state={visible} />} */}
      <DashBoardScreen
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
        recentLoader={recentLoader}
        onRefresh={onRefresh}
        refreshing={refreshing}
        handleOnActivity={handleOnActivity}
        onSearchByCategoryPress={onSearchByCategoryPress}
        actOffset={actOffset}
        getDashBoardActivity={getDashBoardActivity}
        moreData={moreData}
        setSliderState={setSliderState}
        sliderState={sliderState}
        userData={userData}
      />
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
