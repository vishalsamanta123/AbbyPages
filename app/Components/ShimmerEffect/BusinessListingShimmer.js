import LinearGradient from "react-native-linear-gradient";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";

import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../Utils/Constant";

const BusinessListingShimmer = ({ messageIcon = false }) => {
  const arr = ["", "", "", "", "", ""];
  return (
    <>
      {arr.map((item) => {
        return (
          <View style={styles.activityCon}>
            <View style={styles.rowVw}>
              <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                height={120}
                width={120}
                style={{ borderRadius: 10 }}
                shimmerColors={COLORS.shimmerColors}
              />
              <View style={styles.textVw}>
                <ShimmerPlaceHolder
                  LinearGradient={LinearGradient}
                  height={15}
                  width={100}
                  style={styles.activityNameTxt}
                  shimmerColors={COLORS.shimmerColors}
                />
                <ShimmerPlaceHolder
                  LinearGradient={LinearGradient}
                  height={10}
                  width={100}
                  style={styles.activityRvwTxt}
                  shimmerColors={COLORS.shimmerColors}
                />
                <ShimmerPlaceHolder
                  LinearGradient={LinearGradient}
                  height={10}
                  width={200}
                  style={styles.activityRvwTxt}
                  shimmerColors={COLORS.shimmerColors}
                />
                <ShimmerPlaceHolder
                  LinearGradient={LinearGradient}
                  height={10}
                  width={150}
                  style={styles.activityRvwTxt}
                  shimmerColors={COLORS.shimmerColors}
                />
                <ShimmerPlaceHolder
                  LinearGradient={LinearGradient}
                  height={10}
                  width={180}
                  style={styles.activityRvwTxt}
                  shimmerColors={COLORS.shimmerColors}
                />
                <ShimmerPlaceHolder
                  LinearGradient={LinearGradient}
                  height={10}
                  width={250}
                  style={styles.activityRvwTxt}
                  shimmerColors={COLORS.shimmerColors}
                />
              </View>
            </View>
          </View>
        );
      })}
    </>
  );
};

export default BusinessListingShimmer;

const styles = StyleSheet.create({
  activityCon: {
    margin: 20,
    marginBottom: 20
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
    marginTop: 10
  },
});
