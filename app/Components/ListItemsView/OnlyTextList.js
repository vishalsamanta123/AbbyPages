import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../Utils/Constant";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import ScaleText from "../ScaleText";

const OnlyTextList = (props) => {
  const { txtName = "", onPressTxt = () => {}, item = {} } = props;
  return (
    <TouchableOpacity style={styles.listTouch} onPress={() => onPressTxt(item)}>
      <ScaleText style={styles.listText}>{txtName}</ScaleText>
      <IconX
        color={COLORS.BLACK}
        origin={ICON_TYPE.ANT_ICON}
        name={"right"}
        size={18}
        paddingRight={5}
      />
    </TouchableOpacity>
  );
};

export default OnlyTextList;

const styles = StyleSheet.create({
  listTouch: {
    padding: 10,
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 10,
    borderColor: COLORS.BORDER_LINE,
    borderWidth: Constants.normalBW,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconStyle: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  listText: {
    fontSize: FONT_SIZE.mediumL,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.BOLD,
    flex: 1,
  },
});
