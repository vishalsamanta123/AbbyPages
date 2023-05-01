import React from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../Utils/Constant";

const ScaleText = ({
  style: propStyle,
  title,
  description,
  children,
  onLayout,
  onPress,
  numberOfLines,
}) => {
  const { titleStyle, subtitleStyle, descriptionStyle } = styles;
  let defaultStyle = subtitleStyle;
  if (title) defaultStyle = titleStyle;
  else if (description) defaultStyle = descriptionStyle;
  return (
    <Text
      onPress={onPress}
      onLayout={onLayout}
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
  titleStyle: {
    fontSize: FONT_SIZE.medium,
    letterSpacing: -0.408,
    color: "red",
    fontFamily: FONT_FAMILY.REGULAR,
  },
  subtitleStyle: {
    fontSize: FONT_SIZE.smallL,
    letterSpacing: -0.24,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  descriptionStyle: {
    fontSize: FONT_SIZE.verysmall,
    fontWeight: "400",
    letterSpacing: -0.078,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});
