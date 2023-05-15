import { StyleSheet } from "react-native";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../Utils/Constant";

const styles = StyleSheet.create({
  mainCon: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: Constants.standardBW,
    borderWidth: Constants.standardBW,
    borderRadius: 12,
  },
  headTxtVw: {
    position: "absolute",
    top: -12,
    marginLeft: 16,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 2,
  },
  headTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.DARK_PURPLE,
    fontSize: FONT_SIZE.smallL,
  },
  dropDownTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.DARK_PURPLE,
    fontSize: FONT_SIZE.medium,
  },
  listVw: {
    marginBottom: 5,
    borderTopWidth: 0,
    borderWidth: Constants.standardBW,
    borderColor: COLORS.BORDER_LINE,
    height: 180,
  },
  listItemVw: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderBottomWidth: Constants.normalBW,
    borderColor: COLORS.COMMON,
  },
  listItemTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.medium,
    color: COLORS.DARK_PURPLE,
  },
  emptyTxt: {
    textAlign: "center",
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.DARK_PURPLE,
  },
});

export default styles;
