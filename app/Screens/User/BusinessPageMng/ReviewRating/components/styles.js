import { StyleSheet } from "react-native";
import {
  BLACK_COLOR_CODE,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  GREY_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  LIGHT_RED_COLOR_CODE,
  LIGHT_WHITE_COLOR,
  LIGHT_WHITE_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
  headerVw: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: "space-between",
  },
  topLogoVw: {
    width: 45,
    height: 38,
  },
  topButtonVw: {
    backgroundColor: YELLOW_COLOR_CODE,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginLeft: 8,
  },
  topButtonVwNon: {
    backgroundColor: WHITE_COLOR_CODE,
    elevation: 10,
  },
  topButtonTxt: {
    color: WHITE_COLOR_CODE,
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
  },

  mainContainer: {
    marginHorizontal: 18,
    marginVertical: 12,
  },
  headTxt: {
    fontFamily: FONT_FAMILY_BOLD,
    color: BLACK_COLOR_CODE,
    fontSize: 22,
  },
  subHeadTxt: {
    marginTop: 20,
    fontSize: 17,
    fontFamily: FONT_FAMILY_BOLD,
    color: YELLOW_COLOR_CODE,
  },
  subHeadTxtNon: {
    marginTop: 0,
    fontSize: 17,
    fontFamily: FONT_FAMILY_BOLD,
    color: BLACK_COLOR_CODE,
  },
  reViewCont: {
    backgroundColor: WHITE_COLOR_CODE,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginVertical: 16,
    borderWidth: 0.5,
    borderColor: GREY_COLOR_CODE,
  },
  smallTxt: {
    fontSize: 17,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    marginTop: 5,
  },
});
export default styles;
