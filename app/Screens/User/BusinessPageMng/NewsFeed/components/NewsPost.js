import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import { Images } from "../../../../../Utils/images";
import { BLACK_COLOR_CODE } from "../../../../../Utils/Constant";

const NewsPost = (props) => {
  const { newsData } = props;
  console.log("newsData", newsData?.photo);
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
                <Text style={[styles.ratingTxt, { color: BLACK_COLOR_CODE }]}>
                  Here goes the usernme
                </Text>
                <View style={styles.rowVw}>
                  <Text style={styles.lightTxt}>By Owner | </Text>
                  <Text style={styles.lightTxt}>a month ago</Text>
                </View>
              </View>
              <View style={styles.straightVw}>
                {/* <View style={styles.ratingVw}>
                  <Text style={styles.ratingTxt}>12 likes</Text>
                </View> */}
                {/* <Text
                      style={[styles.ratingTxt, { color: BLACK_COLOR_CODE }]}
                    >
                      rating
                    </Text> */}
              </View>
            </View>
            <Text>{newsData?.description}</Text>
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
          <Text style={styles.likeSectionText}>
            {newsData?.postLikeData?.likeCount} Likes
          </Text>
          <Text style={styles.likeSectionText}>
            {newsData?.commentData.length} Comments
          </Text>
        </View>
        <View style={styles.likeSection}>
          <View style={styles.likeView}>
            <Text style={styles.likeSectionText}>Like</Text>
          </View>
          <View style={styles.likeView}>
            <Text style={styles.likeSectionText}>Comment</Text>
          </View>
          <View style={styles.likeView}>
            <Text style={styles.likeSectionText}>Subscribe</Text>
          </View>
        </View>
        <View style={styles.postBreakView}></View>
      </View>
    </View>
  );
};

export default NewsPost;
