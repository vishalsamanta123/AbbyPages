import { StyleSheet } from "react-native";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
  topHeaderVw: {
    justifyContent: "space-between",
    paddingHorizontal: 6,
    paddingVertical: Constants.Ios ? 10 : 4,
    backgroundColor: COLORS.WHITE,
  },
  topHeaderTxt: {
    fontSize: FONT_SIZE.mediumL,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  backImgVw: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 30,
    paddingHorizontal: 35,
  },
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
    // tintColor: BLACK_COLOR_CODE
    marginRight: 10,
  },
  listText: {
    fontSize: FONT_SIZE.mediumL,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.BOLD,
  },
});

export default styles;
