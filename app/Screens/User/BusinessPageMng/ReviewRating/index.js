import React, { useEffect, useState } from "react";
import { View } from "react-native";
import apiEndPoints from "../../../../Utils/apiEndPoints";
import { apiCall } from "../../../../Utils/httpClient";
import Loader from "../../../../Utils/Loader";
import ReviewRatingView from "./components/ReviewRatingView";
import CommonStyles from "../../../../Utils/CommonStyles";
import AsyncStorage from "@react-native-community/async-storage";
import ShowMessage from "../../../../Components/Modal/showMessage";
import { useFocusEffect } from "@react-navigation/native";

const ReviewRating = ({ navigation, route }) => {
  const { detailData = {} } = route.params;
  const [visible, setVisible] = useState(false);
  const [reviewData, setReviewData] = useState({});
  const [userData, setUserData] = useState({});
  const [ratingData, setRatingData] = useState({
    title: "",
    description: "",
    business_rating: "",
  });
  useEffect(() => {
    setRatingData({
      title: "",
      description: "",
      business_rating: "",
    })
  }, [visible])
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });
  function validationFrom() {
    if (ratingData.business_rating == "") {
      setMessageShow({
        visible: true,
        type: "error",
        message: "Please enter rating",
      });
      return false;
    }
    if (ratingData.title == "") {
      setMessageShow({
        visible: true,
        type: "error",
        message: "Please enter title",
      });
      return false;
    }
    if (ratingData.description == "") {
      setMessageShow({
        visible: true,
        type: "error",
        message: "Please enter description",
      });
      return false;
    }
    return true;
  }
  const addReviewsAndRating = async () => {
    const params = {
      business_id: detailData?.business_id,
      business_type: detailData?.business_type,
      business_rating: ratingData?.business_rating,
      description: ratingData?.description,
      title: ratingData?.title,
    };
    if (validationFrom()) {
    setVisible(true);
      try {
        const { data } = await apiCall("POST", apiEndPoints.ADD_REVIEW, params);
        if (data?.status === 200) {
          setVisible(false);
          setReviewData(data?.data);
          setMessageShow({
            visible: true,
            type: "success",
            message: "Review added",
          });
          setRatingData({
            title: "",
            description: "",
            business_rating: "",
          });
          navigation.goBack();
        } else {
          setReviewData({});
          setVisible(false);
          setMessageShow({
            visible: true,
            type: "error",
            message: data?.message,
          });
        }
      } catch (error) {
        setVisible(false);
        setMessageShow({
          visible: true,
          type: "error",
          message: data?.message,
        });
      }
    }
  };
  const onPressRating = (item) => {
    setRatingData({
      ...ratingData,
      business_rating: item,
    });
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <ReviewRatingView
        recntRVwsData={detailData}
        userData={userData}
        onPressRating={onPressRating}
        ratingData={ratingData}
        setRatingData={setRatingData}
        addReviewsAndRating={addReviewsAndRating}
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
    </View>
  );
};

export default ReviewRating;
