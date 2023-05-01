import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../Utils/Constant";
import ScaleText from "../ScaleText";

const EmptyList = (props) => {
  const {
    message = "List",
    height = 200,
    alignItems = "center",
    marginLeft = 0,
  } = props;
  return (
    <View
      style={[
        styles.emptyConVw,
        {
          height: height,
          alignItems: alignItems,
          marginLeft: marginLeft,
        },
      ]}
    >
      <ScaleText style={styles.emptyConTxt}>
        No {message} is available
      </ScaleText>
    </View>
  );
};

export default EmptyList;
const styles = StyleSheet.create({
  emptyConVw: {
    justifyContent: "center",
  },
  emptyConTxt: {
    fontSize: FONT_SIZE.mediumL,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});
