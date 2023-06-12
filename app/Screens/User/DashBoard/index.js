import React, { useState } from "react";
import { View } from "react-native";
import DashBoardScreen from "./components/DashBoardScreen";
import CommonStyles from "../../../Utils/CommonStyles";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import { useFocusEffect } from "@react-navigation/native";
import { Constants } from "../../../Utils/Constant";
import ShowMessage from "../../../Components/Modal/showMessage";

const DashBoardView = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [recent_activity, setRecent_Activity] = useState([]);
  const [businessTypes, setBusinessTypes] = useState([]);
  const [actOffset, setActOffset] = useState(0);
  const [moreData, setMoreData] = useState(0);
  const [moreCategory, setMoreCategory] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [recentLoader, setRecentLoader] = React.useState(false);
  const [byCategory, setByCategory] = useState({
    services: [],
    moreServices: [],
  });
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
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
  const getDashBoardActivity = async (offset) => {
    setActOffset(offset);
    const params = {
      offset: offset,
      limit: offset === 0 ? 6 : 6,
    };
    if (!refreshing && offset === 0) {
      setVisible(true);
    } else {
      setRecentLoader(true);
    }
    try {
      const { data } = await apiCall("POST", ENDPOINTS.NEW_ACTIVITIES, params);
      if (data.status === 200) {
        setVisible(false);
        setMoreData(data?.activityCount);
        data?.data?.forEach(function (item, i) {
          item?.activity_type === 5
            ? (item["likeStatus"] = item?.abbyconnect?.postLikeData?.likeStatus)
            : item;
        });
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

  const handleCategoryPress = (item) => {
    const newObject = {
      ...item,
      city: "",
    };
    navigation.navigate("BusinessPageListing", { nearbySearch: newObject });
  };
  return (
    <View style={CommonStyles.container}>
      {/* {visible && <Loader state={visible} />} */}
      <DashBoardScreen
        recent_activity={recent_activity}
        setRecent_Activity={setRecent_Activity}
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
        actOffset={actOffset}
        getDashBoardActivity={getDashBoardActivity}
        moreData={moreData}
        handleCategoryPress={handleCategoryPress}
        messageShow={messageShow}
        setMessageShow={setMessageShow}
      />
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
