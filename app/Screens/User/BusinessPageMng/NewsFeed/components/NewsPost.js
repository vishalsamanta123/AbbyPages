import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { Images } from "../../../../../Utils/images";
import { COLORS } from "../../../../../Utils/Constant";
import ScaleText from "../../../../../Components/ScaleText";
import { ICON_TYPE, IconX } from "../../../../../Components/Icons/Icon";
import moment from "moment";
import Collage from "../../../../../Components/Collage";
import CommentsModal from "../../../../../Components/Modal/CommentsModal";
import { useNavigation } from "@react-navigation/native";
import { handleBusinessShow } from "../../../../../Utils/Globalfunctions";

const NewsPost = (props) => {
  const navigation = useNavigation();
  const {
    newsData,
    handleOnCommentPress,
    setCommentParams,
    commentParams,
    handelOnPressPost,
    onSharePress,
  } = props;
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const isPostLiked = newsData?.postLikeData?.likeStatus === 0 ? false : true;
  return (
    <TouchableOpacity
      style={styles.mainConatiner}
      onPress={() => handelOnPressPost(newsData)}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.rowVw}>
          <Image
            style={styles.smallImgVw}
            resizeMode="cover"
            source={{ uri: newsData?.logo_url }}
          />
          <TouchableOpacity
            onPress={() => {
              handleBusinessShow(newsData, "", navigation);
            }}
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
          </TouchableOpacity>
        </View>
        <ScaleText style={styles.headlineTxt}>
          {newsData?.headline ? newsData?.headline : null}
        </ScaleText>
        <ScaleText style={styles.descriptionTxt}>
          {newsData?.description ? newsData?.description : null}
        </ScaleText>
        {newsData?.link ? (
          <TouchableOpacity onPress={() => Linking.openURL(newsData?.link)}>
            <ScaleText style={styles.nullTxt}>
              {newsData?.link ? newsData?.link : null}
            </ScaleText>
          </TouchableOpacity>
        ) : null}
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
            <View style={{ marginRight: 5 }}>
              <IconX
                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                color={COLORS.BLACK}
                name={"comment-outline"}
                size={20}
              />
            </View>
            <ScaleText style={styles.likeSectionText}>Comment</ScaleText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.likeView}
            onPress={() =>
              onSharePress(
                newsData?.post_id,
                newsData?.business_name,
                newsData?.logo_url
              )
            }
          >
            <View style={{ marginRight: 5 }}>
              <IconX
                origin={ICON_TYPE.ANT_ICON}
                color={COLORS.BLACK}
                name={"sharealt"}
                size={20}
              />
            </View>
            <ScaleText style={styles.likeSectionText}>Share</ScaleText>
          </TouchableOpacity>
        </View>
        <View style={styles.postBreakView}></View>
      </View>
      <CommentsModal
        isVisible={isCommentsVisible}
        setIsCommentsVisible={setIsCommentsVisible}
        commentData={newsData?.commentData}
        handleOnCommentPress={handleOnCommentPress}
        setCommentParams={setCommentParams}
        commentParams={commentParams}
        post_id={newsData?.post_id}
        business_id={newsData?.business_id}
      />
    </TouchableOpacity>
  );
};

export default NewsPost;
