import { View, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import NewsFeedView from "./components/NewsFeedView";
import CommonStyles from "../../../../Utils/CommonStyles";
import { useFocusEffect } from "@react-navigation/native";
import apiEndPoints from "../../../../Utils/apiEndPoints";
import { apiCall } from "../../../../Utils/httpClient";
import ShowMessage from "../../../../Components/Modal/showMessage";
import { handleSharePress } from "../../../../Utils/Globalfunctions";

const NewsFeed = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);
  const [newsfeedData, setNewsfeedData] = useState({});
  const [commentParams, setCommentParams] = useState({
    business_id: "",
    comment: "",
    comment_id: "",
    post_id: "",
  });
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });
  const [likeUnlikeData, setLikeUnlikeData] = useState({});
  const [commentResp, setCommentResp] = useState({});
  const { business_name = "" } = route.params;
  useFocusEffect(
    React.useCallback(() => {
      getNewsFeedDetails();
      return () => {};
    }, [navigation, route])
  );
  useEffect(() => {
    getNewsFeedDetails("likeComment");
  }, [likeUnlikeData, commentResp]);
  const getNewsFeedDetails = async (type) => {
    try {
      setVisible(type === "likeComment" ? false : true);
      const params = {
        business_name: business_name ? business_name : "",
        limit: 10,
        offset: 0,
      };
      const { data } = await apiCall(
        "POST",
        apiEndPoints.GETABBYCONNECTPOST,
        params
      );
      if (data.status == 200) {
        setVisible(false);
        setNewsfeedData(data?.data?.abbyConnectData);
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
        setLikeUnlikeData(data?.data);
      } else {
        if (data.status === 201) {
          setLikeUnlikeData({});
          setMessageShow({
            visible: true,
            message: data?.message,
            type: "error",
          });
        } else {
          setMessageShow({
            visible: true,
            message: data?.message,
            type: "error",
          });
        }
      }
    } catch (error) {
      setVisible(false);
    }
  };

  const handleOnCommentPress = async () => {
    Keyboard.dismiss();
    try {
      if (commentParams.comment.trim() !== "") {
        const { data } = await apiCall(
          "POST",
          apiEndPoints.COMMENT_ON_ABBY_CONNECT_POST,
          commentParams
        );
        if (data.status == 200) {
          setCommentResp(data?.data);
        } else {
          if (data.status === 201) {
            setCommentResp({});
          } else {
            setCommentResp({});
          }
        }
      } else {
        setCommentParams({
          ...commentParams,
          comment: "",
        });
      }
    } catch (error) {
      setVisible(false);
    }
  };

  const handelOnPressPost = (data) => {
    navigation.navigate("NeweFeedDetails", { post: data });
  };

  const onSharePress = async (post_id, business_name, logo) => {
    const finalName = business_name.split(" ").join("-");
    const options = {
      message: `https://abbypages.com/news-feeds/${finalName}/${post_id}`,
    };

    // const shareResponse = await Share.open(options);
    handleSharePress({
      message: `https://abbypages.com/news-feeds/${finalName}/${post_id}`,
      title: business_name,
      imageUrl: logo,
    });
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
        onSharePress={onSharePress}
      />
      <ShowMessage
        visible={messageShow?.visible}
        message={messageShow?.message}
        messageViewType={messageShow?.type}
        onEndVisible={() =>
          setMessageShow({
            visible: false,
            type: "",
            message: "",
          })
        }
      />
    </View>
  );
};

export default NewsFeed;
