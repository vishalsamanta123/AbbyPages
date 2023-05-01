import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import { Images } from "../../../../../Utils/images";
import { COLORS } from "../../../../../Utils/Constant";
import ScaleText from "../../../../../Components/ScaleText";

const NewsPost = (props) => {
  const { newsData } = props;
  return (
    <View style={styles.mainConatiner}>
      <View>
        <TouchableOpacity style={styles.rowVw}>
          <Image
            style={styles.smallImgVw}
            resizeMode="cover"
            source={Images.DEMO1}
          />
          <View style={{ flex: 1 }}>
            <View
              style={[
                styles.rowVw,
                {
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                },
              ]}
            >
              <View style={{ width: "70%" }}>
                <ScaleText style={[styles.ratingTxt, { color: COLORS.BLACK }]}>
                  Here goes the usernme
                </ScaleText>
                <View style={styles.rowVw}>
                  <ScaleText style={styles.lightTxt}>By Owner | </ScaleText>
                  <ScaleText style={styles.lightTxt}>a month ago</ScaleText>
                </View>
              </View>
              <View style={styles.straightVw}>
                {/* <View style={styles.ratingVw}>
                  <ScaleText style={styles.ratingTxt}>12 likes</ScaleText>
                </View> */}
                {/* <ScaleText
                      style={[styles.ratingTxt, { color: COLORS.BLACK }]}
                    >
                      rating
                    </ScaleText> */}
              </View>
            </View>
            <ScaleText>{newsData?.description}</ScaleText>
          </View>
        </TouchableOpacity>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={styles.postImageStyle}
            resizeMode="cover"
            source={Images.DEMO1}
          />
        </View>
        <View style={styles.likeCountView}>
          <ScaleText style={styles.likeSectionText}>
            {newsData?.postLikeData?.likeCount} Likes
          </ScaleText>
          <ScaleText style={styles.likeSectionText}>
            {newsData?.commentData.length} Comments
          </ScaleText>
        </View>
        <View style={styles.likeSection}>
          <View style={styles.likeView}>
            <ScaleText style={styles.likeSectionText}>Like</ScaleText>
          </View>
          <View style={styles.likeView}>
            <ScaleText style={styles.likeSectionText}>Comment</ScaleText>
          </View>
          <View style={styles.likeView}>
            <ScaleText style={styles.likeSectionText}>Subscribe</ScaleText>
          </View>
        </View>
        <View style={styles.postBreakView}></View>
      </View>
    </View>
  );
};

export default NewsPost;
