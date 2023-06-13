import { View, StyleSheet } from "react-native";
import React from "react";
import FastImages from "../FastImage";
import { Constants } from "../../Utils/Constant";

const BackImage = (props) => {
  const {
    children,
    source,
    imageWidth = "100%",
    imageHeight = Constants.Ios ? 250 : 200,
  } = props;
  return (
    <>
      <FastImages
        source={source}
        style={{ width: imageWidth, height: imageHeight }}
      />
      <View style={styles.innerContainer}>{children}</View>
    </>
  );
};

export default BackImage;
const styles = StyleSheet.create({
  innerContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    bottom: Constants.Ios ? 18 : 0,
  },
});
