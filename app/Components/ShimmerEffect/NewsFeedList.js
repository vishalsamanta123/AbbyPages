import LinearGradient from "react-native-linear-gradient";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";

import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../Utils/Constant";

const NewsFeedListShimmer = ({ messageIcon = false }) => {
  const arr = ["", "", ""];
  return (
    <>
      {arr.map((item) => {
        return (
          <View style={styles.activityCon}>
            <View style={styles.rowVw}>
              <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                height={50}
                width={50}
                style={{ borderRadius: 50 }}
                shimmerColors={COLORS.shimmerColors}
              />
              <View style={styles.textVw}>
                <ShimmerPlaceHolder
                  LinearGradient={LinearGradient}
                  height={20}
                  width={100}
                  style={styles.activityNameTxt}
                  shimmerColors={COLORS.shimmerColors}
                />
                <ShimmerPlaceHolder
                  LinearGradient={LinearGradient}
                  height={15}
                  width={200}
                  style={styles.activityRvwTxt}
                  shimmerColors={COLORS.shimmerColors}
                />
              </View>
            </View>
            <ShimmerPlaceHolder
              LinearGradient={LinearGradient}
              height={15}
              width={200}
              style={styles.descTxt}
              shimmerColors={COLORS.shimmerColors}
            />
            <ShimmerPlaceHolder
              LinearGradient={LinearGradient}
              height={200}
              //   width={}
              style={styles.activityBnnrVw}
              shimmerColors={COLORS.shimmerColors}
            />
          </View>
        );
      })}
    </>
  );
};

export default NewsFeedListShimmer;

const styles = StyleSheet.create({
  activityCon: {
    margin: 20,
    marginBottom: 20,
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
});
