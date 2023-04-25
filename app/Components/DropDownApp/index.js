import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Images } from "../../Utils/images";
import {
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  LIGHT_BLACK_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../Utils/Constant";

const DropDownApp = (props) => {
  const {
    DropDownText = "DropDown",
    onPress = () => {},
    onLongPress = () => {},
    DropDownImg,
    onPressArrow  = () => {},
    arrowShow = false,
  } = props;
  return (
    <View style={styles.MainOptinsView}>
      <TouchableOpacity
        onPress={() => onPress()}
        onLongPress={() => onLongPress()}
        style={styles.rowVw}
      >
        <View style={styles.OptnsImgContain}>
          <Image source={DropDownImg} style={DropDownImg ? styles.dropDownImg : null} />
        </View>
        <Text style={styles.OptnsMainText}>{DropDownText}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPressArrow()}
        style={styles.OptnsImgContain}
      >
        <Image
          style={styles.OptnsMainImg}
          source={arrowShow ? Images.ARROW_UP_IMG : Images.ARROW_DOWN_IMG}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DropDownApp;
const styles = StyleSheet.create({
  OptionsConatin: {
    flex: 3,
    backgroundColor: WHITE_COLOR_CODE,
  },
  MainOptinsView: {
    flexDirection: "row",
    borderBottomWidth: 0.9,
    paddingLeft: 16,
    borderBottomColor: LINE_COMMON_COLOR_CODE,
    backgroundColor: WHITE_COLOR_CODE,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderRadius: 10
  },
  dropDownImg: {
    width: 24,
    height: 24,
    tintColor: LIGHT_BLACK_COLOR_CODE,
  },
  rowVw: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 3,
  },
  OptnsImgContain: {
    alignItems: "center",
    paddingRight: 15,
  },
  OptnsMainText: {
    fontSize: 19,
    color: LIGHT_BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  OptnsMainImg: {
    width: 20,
    height: 20,
    tintColor: LIGHT_BLACK_COLOR_CODE,
  },
});
