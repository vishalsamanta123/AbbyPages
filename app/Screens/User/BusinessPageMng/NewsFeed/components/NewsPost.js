import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { Images } from "../../../../../Utils/images";
import { COLORS } from "../../../../../Utils/Constant";
import ScaleText from "../../../../../Components/ScaleText";
import { ICON_TYPE, IconX } from "../../../../../Components/Icons/Icon";
import CommentsModal from "./Comments";
import moment from "moment";
import Collage from "../../../../../Components/Collage";

const NewsPost = (props) => {
  const {
    newsData,
    setComment,
    handleOnCommentPress,
    setCommentParams,
    commentParams,
  } = props;
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const isPostLiked = newsData?.postLikeData?.likeStatus === 0 ? false : true;
  return (
    <View style={styles.mainConatiner}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.rowVw}>
          <Image
            style={styles.smallImgVw}
            resizeMode="cover"
            source={{ uri: newsData?.logo_url }}
          />
          <View style={{ flex: 1 }}>
            <View
              style={[
                styles.rowVw,
                {
                  paddingHorizontal: 10,
                },
              ]}
            >
              <View style={{ width: "70%" }}>
                <ScaleText style={[styles.ratingTxt, { color: COLORS.BLACK }]}>
                  {newsData?.business_name}
                </ScaleText>
                <View style={styles.rowVw}>
                  {/* <ScaleText style={styles.lightTxt}>By Owner | </ScaleText> */}
                  <ScaleText style={styles.lightTxt}>
                    {moment(newsData?.post_created_date)
                      .startOf("seconds")
                      .fromNow()}
                  </ScaleText>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <ScaleText style={styles.headlineTxt}>
          {newsData?.headline ? newsData?.headline : null}
        </ScaleText>
        <ScaleText style={styles.descriptionTxt}>
          {newsData?.description ? newsData?.description : null}
        </ScaleText>
        {newsData?.link ? <TouchableOpacity onPress={() => Linking.openURL(newsData?.link)}>
          <ScaleText style={styles.nullTxt}>
            {newsData?.link ? newsData?.link : null}
          </ScaleText>
        </TouchableOpacity> : null}
        <Collage imagesData={newsData?.photo} />
        <View style={styles.likeCountView}>
          <ScaleText style={styles.likeSectionText}>
            {newsData?.postLikeData?.likeCount > 0
              ? `${newsData?.postLikeData?.likeCount} likes`
              : "No likes yet"}
          </ScaleText>
          <ScaleText style={styles.likeSectionText}>
            {newsData?.commentData?.length > 0
              ? `${newsData?.commentData?.length} Comments`
              : "No Comments yet"}
          </ScaleText>
        </View>
        <View style={styles.likeSection}>
          <TouchableOpacity
            onPress={() =>
              props.handleOnPressLike(
                newsData?.post_id,
                isPostLiked ? 0 : 1,
                newsData?.business_id
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
          <View style={styles.likeView}>
            <ScaleText style={styles.likeSectionText}>Subscribe</ScaleText>
          </View>
        </View>
        <View style={styles.postBreakView}></View>
      </View>
      <CommentsModal
        isVisible={isCommentsVisible}
        setIsCommentsVisible={setIsCommentsVisible}
        commentData={newsData?.commentData}
        setComment={setComment}
        handleOnCommentPress={handleOnCommentPress}
        setCommentParams={setCommentParams}
        commentParams={commentParams}
        post_id={newsData?.post_id}
        business_id={newsData?.business_id}
      />
    </View>
  );
};

export default NewsPost;
