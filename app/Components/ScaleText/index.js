import React from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../Utils/Constant";

const ScaleText = ({ style: propStyle, children, onPress, numberOfLines }) => {
  const { txtStyle } = styles;
  let defaultStyle = txtStyle;
  return (
    <Text
      onPress={onPress}
      numberOfLines={numberOfLines}
      allowFontScaling={false}
      style={[defaultStyle, propStyle ? propStyle : null]}
    >
      {children}
    </Text>
  );
};
export default ScaleText;

const styles = StyleSheet.create({
  txtStyle: {
    fontSize: FONT_SIZE.medium,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});
