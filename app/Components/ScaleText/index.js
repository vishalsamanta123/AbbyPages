import React from "react";
import { Text } from "react-native";
import styles from "./styles";

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
