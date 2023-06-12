import {
  Image,
  Linking,
  Modal,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import CommonStyles from "../../../../../Utils/CommonStyles";

import ScaleText from "../../../../../Components/ScaleText";
import { COLORS, FONT_SIZE } from "../../../../../Utils/Constant";
import moment from "moment";
import styles from "./styles";
import { handleBusinessShow, OpenDoc } from "../../../../../Utils/Globalfunctions";
import { ICON_TYPE, IconX } from "../../../../../Components/Icons/Icon";
import CommentsModal from "../../../../../Components/Modal/CommentsModal";
import { NewsFeedDetailShimmer } from "../../../../../Components/ShimmerEffect";
import MainHeader from "../../../../../Components/MainHeader";
import PageScroll from "../../../../../Components/PageScroll";

const NewsFeedView = (props) => {
  const {
    postData,
    commentParams,
    setCommentParams,
    handleOnCommentPress,
    visible,
    onSharePress,
  } = props;
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);

  const isPostLiked = postData?.postLikeData?.likeStatus === 0 ? false : true;

  useEffect(() => {
    if (props?.post?.openFile === "comment") {
      setIsCommentsVisible(true);
    }
  }, [props?.post]);
  const renderImages = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          OpenDoc(item?.photo_url);
        }}
      >
        <Image source={{ uri: item?.photo_url }} style={styles.imageStyle} />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={CommonStyles.container}>
      {visible ? (
        <NewsFeedDetailShimmer />
      ) : (
        <>
          <MainHeader
            headerText={"News Feed"}
            fontSize={FONT_SIZE.large}
            loginButton={false}
            isLogin={true}
          />
          <PageScroll contentContainerStyle={{ padding: 20 }}>
            <View style={styles.rowVw}>
              <Image
                style={styles.smallImgVw}
                resizeMode="cover"
                source={{ uri: postData?.logo_url }}
              />
              <TouchableOpacity
                onPress={() =>
                  handleBusinessShow(postData, "", props.navigation)
                }
                style={{ flex: 1 }}
              >
                <View
                  style={[
                    styles.rowVw,
                    {
                      paddingHorizontal: 10,
                    },
                  ]}
                >
                  <View style={{ width: "70%" }}>
                    <ScaleText
                      style={[styles.ratingTxt, { color: COLORS.BLACK }]}
                    >
                      {postData?.business_name}
                    </ScaleText>
                    <View style={styles.rowVw}>
                      {/* <ScaleText style={styles.lightTxt}>By Owner | </ScaleText> */}
                      <ScaleText style={styles.lightTxt}>
                        {moment(postData?.post_created_date)
                          .startOf("seconds")
                          .fromNow()}
                      </ScaleText>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <ScaleText style={styles.headlineTxt}>
              {postData?.headline ? postData?.headline : null}
            </ScaleText>
            <ScaleText style={styles.descriptionTxt}>
              {postData?.description ? postData?.description : null}
            </ScaleText>
            {postData?.link ? (
              <TouchableOpacity onPress={() => Linking.openURL(postData?.link)}>
                <ScaleText style={styles.nullTxt}>
                  {postData?.link ? postData?.link : null}
                </ScaleText>
              </TouchableOpacity>
            ) : null}
            <View style={styles.likeCountView}>
              <ScaleText style={styles.likeSectionText}>
                {postData?.postLikeData?.likeCount > 0
                  ? `${postData?.postLikeData?.likeCount} likes`
                  : "No likes yet"}
              </ScaleText>
              <ScaleText style={styles.likeSectionText}>
                {postData?.commentData?.length > 0
                  ? `${postData?.commentData?.length} Comments`
                  : "No Comments yet"}
              </ScaleText>
            </View>
            <View style={styles.likeSection}>
              <TouchableOpacity
                onPress={() =>
                  props.handleOnPressLike(
                    postData?.post_id,
                    isPostLiked ? 0 : 1,
                    postData?.business_id
                  )
                }
                style={[
                  styles.likeView,
                  isPostLiked ? { borderColor: COLORS.YELLOW } : {},
                ]}
              >
                <View style={{ marginRight: 5 }}>
                  <IconX
                    origin={ICON_TYPE.ANT_ICON}
                    color={isPostLiked ? COLORS.YELLOW : COLORS.BLACK}
                    name={isPostLiked ? "like1" : "like2"}
                    size={20}
                  />
                </View>
                <ScaleText
                  style={[
                    styles.likeSectionText,
                    isPostLiked && { color: COLORS.YELLOW },
                  ]}
                >
                  {isPostLiked ? "Liked" : "Like"}
                </ScaleText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsCommentsVisible(true)}
                style={styles.likeView}
              >
                <ScaleText style={styles.likeSectionText}>Comment</ScaleText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onSharePress()}
                style={styles.likeView}
              >
                <ScaleText style={styles.likeSectionText}>Share</ScaleText>
              </TouchableOpacity>
            </View>

            <View style={styles.imagesView}>
              {postData?.photo?.map((item) => renderImages(item))}
            </View>
          </PageScroll>
          <CommentsModal
            isVisible={isCommentsVisible}
            setIsCommentsVisible={setIsCommentsVisible}
            commentData={postData?.commentData}
            handleOnCommentPress={handleOnCommentPress}
            setCommentParams={setCommentParams}
            commentParams={commentParams}
            post_id={postData?.post_id}
            business_id={postData?.business_id}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default NewsFeedView;
