import LinearGradient from "react-native-linear-gradient";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";

import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../Utils/Constant";

const EventDetailShimmer = ({ messageIcon = false }) => {
  const arr = [""];
  return (
    <>
      {arr.map((item) => {
        return (
          <View style={styles.activityCon}>
            <ShimmerPlaceHolder
              LinearGradient={LinearGradient}
              height={200}
              //   width={}
              style={styles.activityBnnrVw}
              shimmerColors={COLORS.shimmerColors}
            />
            <View style={{ marginHorizontal: 10 }}>
              <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                height={10}
                width={120}
                style={styles.descTxt}
                shimmerColors={COLORS.shimmerColors}
              />
              <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                height={10}
                width={150}
                style={styles.descTxt}
                shimmerColors={COLORS.shimmerColors}
              />
              <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                height={10}
                width={80}
                style={styles.descTxt}
                shimmerColors={COLORS.shimmerColors}
              />
              <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                height={10}
                width={80}
                style={styles.descTxt}
                shimmerColors={COLORS.shimmerColors}
              />
              <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                height={10}
                width={80}
                style={styles.descTxt}
                shimmerColors={COLORS.shimmerColors}
              />
              <View style={styles.likeSectioneView}>
                <ShimmerPlaceHolder
                  LinearGradient={LinearGradient}
                  height={25}
                  width={150}
                  style={styles.likeBtn}
                  shimmerColors={COLORS.shimmerColors}
                />
                <ShimmerPlaceHolder
                  LinearGradient={LinearGradient}
                  height={25}
                  width={150}
                  style={styles.likeBtn}
                  shimmerColors={COLORS.shimmerColors}
                />
              </View>
              <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                height={200}
                //   width={}
                style={styles.activityBnnrVw}
                shimmerColors={COLORS.shimmerColors}
              />
            </View>
          </View>
        );
      })}
    </>
  );
};

export default EventDetailShimmer;

const styles = StyleSheet.create({
  activityCon: {
    // margin: 20,
    marginBottom: 20,
    marginTop: 50,
  },
  rowVw: {
    flexDirection: "row",
  },
  activityNameTxt: {
    marginBottom: 10,
    marginLeft: 20,
  },
  activityRvwTxt: {
    marginLeft: 20,
  },
  descTxt: {
    marginTop: 10,
  },
  likeBtn: {
    marginTop: 10,
    borderRadius: 5,
    marginRight: 20,
  },
  activityBnnrVw: {
    width: "100%",
    marginTop: 10,
  },
  one: {
    height: 15,
    marginTop: 10,
  },
  two: {
    marginTop: 10,
  },
  likeSectioneView: {
    flexDirection: "row",
    // justifyContent: "space-between",
    marginVertical: 5,
  },
});
