import React, { useEffect, useState } from "react";
import { View } from "react-native";
import apiEndPoints from "../../../../Utils/apiEndPoints";
import { apiCall } from "../../../../Utils/httpClient";
import Loader from "../../../../Utils/Loader";
import ReviewRatingView from "./components/ReviewRatingView";
import CommonStyles from "../../../../Utils/CommonStyles";
import AsyncStorage from "@react-native-community/async-storage";

const ReviewRating = ({ navigation, route }) => {
  const { params = {} } = route;
  const [visible, setVisible] = useState(false);
  const [recntRVwsData, setRecntRVwsData] = useState({});
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getReviewsAndRating();
  }, [navigation]);
  const getReviewsAndRating = async () => {
    setVisible(true);
    const getUserData = await AsyncStorage.getItem("localuserdata");
    if (JSON?.parse(getUserData)?.login_type) {
      setUserData(JSON?.parse(getUserData));
    }
    const param = {
      business_name_slug: params?.business_name,
    };
    try {
      const { data } = await apiCall(
        "POST",
        apiEndPoints.USER_BUSINESS_DETAIL,
        param
      );
      if (data.status === 200) {
        setVisible(false);
        setRecntRVwsData(data?.data);
      } else {
        setVisible(false);
      }
    } catch (error) {
      setVisible(false);
    }
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <ReviewRatingView recntRVwsData={recntRVwsData} userData={userData} />
    </View>
  );
};

export default ReviewRating;
