import LinearGradient from "react-native-linear-gradient";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";

import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../Utils/Constant";

const JobList = (props) => {
  const { type } = props;
  const arr = ["", ""];
  return (
    <>
      {arr.map((item) => {
        return (
          <View style={styles.activityCon}>
            <View style={styles.rowVw}>
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

export default JobList;

const styles = StyleSheet.create({
  activityCon: {
    // margin: 20,
    marginTop: 10,
    marginHorizontal: 20
  },
  rowVw: {
    flexDirection: "row",
  },
  activityBnnrVw: {
    width: "100%",
    marginTop: 10,
    borderRadius: 20

  },
});
