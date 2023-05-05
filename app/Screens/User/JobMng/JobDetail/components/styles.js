import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../../../../Utils/Constant";

const Styles = StyleSheet.create({
  roundImgVw: {
    position: "absolute",
    top: -58,
    marginLeft: "7%",
  },
  roundImg: {
    width: 110,
    height: 110,
    borderRadius: 200,
  },
  topBttnVw: {
    alignSelf: "flex-end",
    bottom: 10,
    left: 8,
  },
  containerVw: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: COLORS.LIGHT_COMMON,
    marginBottom: 10,
  },
  tileTxt: {
    fontSize: FONT_SIZE.large,
    fontFamily: FONT_FAMILY.NORMAL_BOLD,
    color: COLORS.BLACK,
  },
  titledTxt: {
    fontSize: FONT_SIZE.normal,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLUE,
  },
  smallTxt: {
    fontSize: FONT_SIZE.small,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
  },
  headTxt: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.NORMAL_BOLD,
    color: COLORS.YELLOW,
  },
  subTxt: {
    fontSize: FONT_SIZE.normal,
    fontFamily: FONT_FAMILY.NORMAL_BOLD,
    color: COLORS.RGBA,
  },
  rowTxtVws: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  subTitleTxt: {
    fontSize: FONT_SIZE.normal,
    fontFamily: FONT_FAMILY.NORMAL_BOLD,
    color: COLORS.BLACK,
  },
  subSmallTxt: {
    fontSize: FONT_SIZE.smallL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
  },
});
export default Styles;
