import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import {
  FONT_FAMILY_REGULAR,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../Utils/Constant";
import { Images } from "../../Utils/images";

const BoxContainers = (props) => {
  const {
    paddingVertical = 28,
    marginHorizontal = 0,
    boxContainerTxt = "Box Container",
    fontSize = 18,
    boxContainerImg = "",
    minWidth = 150,
    onPress,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.mainVw,
        {
          paddingVertical: paddingVertical,
          minWidth: minWidth,
          marginHorizontal: marginHorizontal,
        },
      ]}
    >
      {boxContainerImg ? (
        <Image source={boxContainerImg} style={[styles.mainImg]} />
      ) : null}
      <Text
        style={[
          styles.mainTxt,
          {
            fontSize: fontSize,
          },
        ]}
      >
        {boxContainerTxt}
      </Text>
    </TouchableOpacity>
  );
};

export default BoxContainers;

const styles = StyleSheet.create({
  mainVw: {
    backgroundColor: WHITE_COLOR_CODE,
    elevation: 2,
    borderRadius: 8,
    margin: 5,
    alignItems: "center",
  },
  mainTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_BLACK_COLOR_CODE,
    fontSize: 18,
  },
  mainImg: {
    width: 45,
    height: 45,
    alignSelf: "center",
    marginBottom: 10,
  },
});
