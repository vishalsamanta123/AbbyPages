import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../Utils/Constant";

const EmptyList = (props) => {
  const { message = "List", height = 200 } = props;
  return (
    <View
      style={[
        styles.emptyConVw,
        {
          height: height,
        },
      ]}
    >
      <Text style={styles.emptyConTxt}>No {message} is available</Text>
    </View>
  );
};

export default EmptyList;
const styles = StyleSheet.create({
  emptyConVw: {
    alignItems: "center",
    justifyContent: "center",
  },
  emptyConTxt: {
    fontSize: FONT_SIZE.mediumL,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.FONT_FAMILY_REGULAR,
  },
});
