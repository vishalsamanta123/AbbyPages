import { View, Text } from "react-native";
import React, { useState } from "react";
import Share from "react-native-share";
import NewsFeedView from "./components/NewsFeedView";
import CommonStyles from "../../../../Utils/CommonStyles";
import { useFocusEffect } from "@react-navigation/native";
import apiEndPoints from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import { apiCall } from "../../../../Utils/httpClient";

const NewsFeed = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);
  const [newsfeedData, setNewsfeedData] = useState({});
  const [commentParams, setCommentParams] = useState({
    business_id: "",
    comment: "",
    comment_id: "",
    post_id: "",
  });
  const [likeUnlikeData, setLikeUnlikeData] = useState({});
  const [commentResp, setCommentResp] = useState({});
  const objData = route.params;

  useFocusEffect(
    React.useCallback(() => {
      getNewsFeedDetails();
      return () => {};
    }, [navigation, route, likeUnlikeData, commentResp])
  );
  const getNewsFeedDetails = async () => {
    try {
      setVisible(true);
      const params = {
        business_name: objData?.business_name,
      };
      const { data } = await apiCall(
        "POST",
        apiEndPoints.GETABBYCONNECTPOST,
        params
      );
      if (data.status == 200) {
        setVisible(false);
        setNewsfeedData(data?.data);
        setCommentParams({
          business_id: "",
          comment: "",
          comment_id: "",
          post_id: "",
        });
      } else {
        if (data.status === 201) {
          setNewsfeedData({});
          setVisible(false);
        } else {
          setVisible(false);
        }
      }
    } catch (error) {
      setVisible(false);
    }
  };

  const handleOnPressLike = async (post_id, like_status, business_id) => {
    try {
      // setVisible(true);
      const params = {
        post_id: post_id,
        like_status: like_status, //1 = like , 0 = unlike
        business_id: business_id,
      };

      const { data } = await apiCall(
        "POST",
        apiEndPoints.LIKE_UNLIKE_ABBY_CONNECT_POST,
        params
      );

      if (data.status == 200) {
        // setVisible(false);
        setLikeUnlikeData(data?.data);
      } else {
        if (data.status === 201) {
          // setVisible(false);
          setLikeUnlikeData({});
        } else {
          // setVisible(false);
        }
      }
    } catch (error) {
      setVisible(false);
    }
  };

  const handleOnCommentPress = async () => {
    try {
      // setVisible(true);
      const { data } = await apiCall(
        "POST",
        apiEndPoints.COMMENT_ON_ABBY_CONNECT_POST,
        commentParams
      );
      if (data.status == 200) {
        // setVisible(false);
        setCommentResp(data?.data);
      } else {
        if (data.status === 201) {
          // setVisible(false);
          setCommentResp({});
        } else {
          // setVisible(false);
          setCommentResp({});
        }
      }
    } catch (error) {
      setVisible(false);
    }
  };

  const handelOnPressPost = (data) => {
    navigation.navigate("NeweFeedDetails", { post: data });
  };

  const handleSharePress = async (post_id) => {
    const finalName = objData?.business_name.split(" ").join("-");
    const options = {
      message: `https://abbypages.com/news-feeds/${finalName}/${post_id}`,
    };
    console.log("options", options);

    const shareResponse = await Share.open(options);
  };
  return (
    <View style={CommonStyles.container}>
      <NewsFeedView
        newsfeedData={newsfeedData}
        handleOnPressLike={handleOnPressLike}
        setCommentParams={setCommentParams}
        handleOnCommentPress={handleOnCommentPress}
        commentParams={commentParams}
        handelOnPressPost={handelOnPressPost}
        visible={visible}
        handleSharePress={handleSharePress}
      />
    </View>
  );
};

export default NewsFeed;
