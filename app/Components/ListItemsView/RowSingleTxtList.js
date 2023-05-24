import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import ScaleText from "../ScaleText";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../Utils/Constant";

const RowSingleTxtList = (props) => {
  const {
    text = "RowSingleTxtList",
    borderColor = COLORS.YELLOW,
    borderBottomWidth = Constants.normalBW,
    txtColor = COLORS.YELLOW,
    onPressItem = () => {},
    paddingHorizontal = 6,
    paddingVertical = 4,
    item = {},
  } = props;
  return (
    <TouchableOpacity
      style={[
        styles.mainCon,
        {
          borderBottomColor: borderColor,
          borderBottomWidth: borderBottomWidth,
          paddingHorizontal: paddingHorizontal,
          paddingVertical: paddingVertical,
        },
      ]}
      onPress={() => onPressItem(item)}
    >
      <ScaleText
        style={[
          styles.txtStyle,
          {
            color: txtColor,
          },
        ]}
      >
        {text}
      </ScaleText>
    </TouchableOpacity>
  );
};

export default RowSingleTxtList;

const styles = StyleSheet.create({
  mainCon: {
    marginHorizontal: 5,
  },
  txtStyle: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});
