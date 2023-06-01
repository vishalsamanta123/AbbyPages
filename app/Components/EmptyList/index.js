import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../Utils/Constant";
import ScaleText from "../ScaleText";
import { ICON_TYPE, IconX } from "../Icons/Icon";

const EmptyList = (props) => {
  const {
    message = "",
    height = 200,
    alignItems = "center",
    marginLeft = 0,
  } = props;
  return (
    <View style={[styles.emptyView,{}]}>
      <IconX
        origin={ICON_TYPE.ENTYPO}
        size={90}
        name={"emoji-sad"}
        paddingRight={5}
        // color={COLORS.BLACK}
      />
      <ScaleText style={styles.emtyTxt}>Oops! {message} Not found</ScaleText>
    </View>
  );
};

export default EmptyList;
const styles = StyleSheet.create({
  emptyView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  emtyTxt: {
    fontSize: FONT_SIZE.medium,
    color: COLORS.DARK_PURPLE,
    fontFamily: FONT_FAMILY.REGULAR,
    marginTop: 20,
  },
});
