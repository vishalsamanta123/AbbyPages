import { View, Text } from "react-native";
import React, { useState } from "react";
import NewsFeedViewDetails from "./components/NewsFeedViewDetails";
import { apiCall } from "../../../../Utils/httpClient";
import apiEndPoints from "../../../../Utils/apiEndPoints";
import { useFocusEffect } from "@react-navigation/native";
import Share from "react-native-share";


const NeweFeedDetails = ({ navigation, route }) => {
  const { post } = route?.params;
  console.log('post', post)
  const [visible, setVisible] = useState(false);
  const [likeUnlikeData, setLikeUnlikeData] = useState({});
  const [commentResp, setCommentResp] = useState({});
  const [postData, setPostData] = useState({});

  const [commentParams, setCommentParams] = useState({
    business_id: "",
    comment: "",
    comment_id: "",
    post_id: "",
  });

  useFocusEffect(
    React.useCallback(() => {
      getPostDetail();
      return () => {};
    }, [navigation, route, likeUnlikeData, commentResp])
  );
  const getPostDetail = async () => {
    try {
       setVisible(true);
      const params = {
        post_id: post?.post_id,
        business_name: post?.business_name,
      };
      const { data } = await apiCall(
        "POST",
        apiEndPoints.GET_ABBY_CONNET_POST_DETAILS,
        params
      );
      if (data.status == 200) {
         setVisible(false);
        setPostData(data?.data);
      } else {
        if (data.status === 201) {
           setVisible(false);
          setPostData({});
        } else {
           setVisible(false);
          setPostData({});
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

  const handleSharePress = async () => {
    const finalName = post?.business_name.split(" ").join("-")
    const options = {
      message: `https://itinformatix.org/news-feeds/${finalName}/${post?.post_id}`,
    };
    console.log('options', options)

    const shareResponse = await Share.open(options);
  }

  return (
    <>
    {/* <NewsFeedListShimmer /> */}
    
    <NewsFeedViewDetails
      postData={postData}
      commentParams={commentParams}
      setCommentParams={setCommentParams}
      handleOnCommentPress={handleOnCommentPress}
      handleOnPressLike={handleOnPressLike}
      visible={visible}
      handleSharePress={handleSharePress}
      />
    </>
  );
};

export default NeweFeedDetails;
