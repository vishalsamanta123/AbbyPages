import React from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS, FONT_FAMILY } from "../../Utils/Constant";

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
    fontSize: 17,
    letterSpacing: -0.408,
    color: "red",
    fontFamily: FONT_FAMILY.REGULAR,
  },
  subtitleStyle: {
    fontSize: 14,
    letterSpacing: -0.24,
    color: COLORS.YELLOW,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  descriptionStyle: {
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: -0.078,
    color: COLORS.YELLOW,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});
