import { TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONT_FAMILY } from "../../Utils/Constant";
import ScaleText from "../ScaleText";

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
      <ScaleText
        style={[
          styles.mainTxt,
          {
            fontSize: fontSize,
          },
        ]}
      >
        {boxContainerTxt}
      </ScaleText>
    </TouchableOpacity>
  );
};

export default BoxContainers;

const styles = StyleSheet.create({
  mainVw: {
    backgroundColor: COLORS.WHITE,
    elevation: 2,
    borderRadius: 8,
    margin: 5,
    alignItems: "center",
  },
  mainTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_BLACK,
    fontSize: 18,
  },
  mainImg: {
    width: 45,
    height: 45,
    alignSelf: "center",
    marginBottom: 10,
  },
});
