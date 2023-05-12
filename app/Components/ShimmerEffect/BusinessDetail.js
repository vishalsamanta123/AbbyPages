import LinearGradient from "react-native-linear-gradient";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";

import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../Utils/Constant";

const BusinessDetail = (props) => {
    const {type} = props
  console.log("🚀 ~ file: BusinessDetail.js:9 ~ type:", type)
  const arr = [""];
  return (
    <>
      {arr.map((item) => {
        return (
          <View style={styles.activityCon}>
            {type === "image" ? (
              <View style={styles.rowVw}>
                <ShimmerPlaceHolder
                  LinearGradient={LinearGradient}
                  height={200}
                  //   width={}
                  style={styles.activityBnnrVw}
                  shimmerColors={COLORS.shimmerColors}
                />
              </View>
            ) : type === "category" ? (
              <View>
                <ShimmerPlaceHolder
                  LinearGradient={LinearGradient}
                  height={15}
                  width={200}
                  style={styles.descTxt}
                  shimmerColors={COLORS.shimmerColors}
                />
                <ShimmerPlaceHolder
                  LinearGradient={LinearGradient}
                  height={15}
                  width={300}
                  style={styles.descTxt}
                  shimmerColors={COLORS.shimmerColors}
                />
              </View>
            ) : null}
          </View>
        );
      })}
    </>
  );
};

export default BusinessDetail;

const styles = StyleSheet.create({
  activityCon: {
    // margin: 20,
    // marginBottom: 20,
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
    borderRadius: 20,
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
    justifyContent: "space-between",
    marginVertical: 5,
  },
});
