import { View } from "react-native";
import React from "react";
import FastImages from "../FastImage";

const BackImage = (props) => {
  const { children, source, imageWidth = "100%", imageHeight = 200 } = props;
  return (
    <>
      <FastImages
        source={source}
        style={{ width: imageWidth, height: imageHeight }}
      />
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </View>
    </>
  );
};

export default BackImage;
