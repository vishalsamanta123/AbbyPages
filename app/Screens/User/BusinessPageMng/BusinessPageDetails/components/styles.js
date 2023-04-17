import { Dimensions, StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  FONT_FAMILY_BOLD,
  YELLOW_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  GREY_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  BLACK_COLOR_CODE,
  LIGHT_GREEN_COLOR_CODE,
  LIGHT_RED_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  LIGHT_GREY_COLOR_CODE,
  IOS,
} from "../../../../../Utils/Constant";
const { width, height } = Dimensions.get("window");

const Styles = StyleSheet.create({
  topHeaderVw: {
    justifyContent: "space-between",
    paddingHorizontal: 6,
    paddingVertical: IOS ? 30 : 4,
  },
  topHeaderTxt: {
    fontSize: 18,
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  backImgVw: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 30,
    paddingHorizontal: 35,
  },
  mainTxt: {
    fontSize: 30,
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_BOLD,
    marginRight: 28,
  },
  mainContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: WHITE_COLOR_CODE,
    marginVertical: 4,
  },
  titletxt: {
    fontSize: 20,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  subTitleTxt: {
    fontSize: 18,
    color: LIGHT_RED_COLOR_CODE,
    fontFamily: FONT_FAMILY_BOLD,
  },
  smallTxt: {
    fontSize: 16,
    color: GREY_COLOR_CODE,
    fontFamily: FONT_FAMILY_BOLD,
    top: 1,
  },
  smallOptionVw: {
    backgroundColor: LINE_COMMON_COLOR_CODE,
    borderRadius: 100,
    padding: 8,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  smallOptiontxt: {
    fontSize: 15,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    width: 80,
    textAlign: "center",
  },
  longTxt: {
    fontSize: 20,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_BOLD,
    textAlign: "center",
  },
  smallCon: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginVertical: 8,
    marginHorizontal: 10,
    backgroundColor: LINE_COMMON_COLOR_CODE,
    borderRadius: 12,
  },
  smallOptiontxt2: {
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
  },
  buttonsVw: {
    alignItems: "center",
    flexDirection: "row",
    borderColor: GREY_COLOR_CODE,
    borderBottomWidth: 0.5,
    paddingVertical: 8,
    marginHorizontal: 20,
    justifyContent: "space-between",
    marginVertical: 10,
  },
  buttonsTxt: {
    fontSize: 20,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    marginLeft: 8,
  },
  sectionTxt: {
    fontSize: 22,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_BOLD,
  },
  tapButtonsVw: {
    backgroundColor: WHITE_COLOR_CODE,
    elevation: 2,
    alignItems: "center",
    paddingVertical: 12,
    marginVertical: 10,
  },

  posterVw: {
    flex: 1,
    borderColor: BLACK_COLOR_CODE,
  },
  dotActiveVw: {
    borderRadius: 100,
    backgroundColor: YELLOW_COLOR_CODE,
    width: 16,
    height: 16,
  },
  dotInActiveVw: {
    borderRadius: 100,
    backgroundColor: BLACK_COLOR_CODE,
    width: 20,
    height: 20,
  },
});
export default Styles;
