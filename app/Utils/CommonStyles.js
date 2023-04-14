import { Platform, StyleSheet } from "react-native";
import {
  YELLOW_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  FONT_FAMILY_BOLD,
  LIGHT_WHITE_COLOR_CODE,
  GREY_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  TRANSPARENT_CODE,
} from "./Constant";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR_CODE,
  },
  header: {
    paddingVertical: 16,
    flexDirection: "row",
    backgroundColor: YELLOW_COLOR_CODE,
    alignItems: "center",
  },
  body: {
    flex: 5.5,
  },
  text: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
  },
  scrollCon: {
    flexGrow: 1,
    backgroundColor: WHITE_COLOR_CODE,
  },
  editPencilVw: {
    backgroundColor: YELLOW_COLOR_CODE,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  bigTxtVw: {
    fontSize: 24,
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_BOLD,
    textAlign: "center",
  },
  mediumTxt: {
    fontSize: 19,
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    textAlign: "center",
  },
  blackDropDownImg: {
    width: 20,
    height: 20,
    tintColor: LIGHT_BLACK_COLOR_CODE,
  },
  dotTxt: {
    fontSize: 10,
    bottom: 1,
    marginHorizontal: 5,
  },
  middleLogoVw: {
    width: 190,
    height: 60,
  },
  locSearchVw: {
    textInputContainer: {
      fontSize: 16,
      fontFamily: FONT_FAMILY_REGULAR,
      paddingLeft: 30,
      width: "95%",
    },
    textInput: {
      fontFamily: FONT_FAMILY_REGULAR,
      fontSize: 16,
      backgroundColor: TRANSPARENT_CODE,
      color: GREY_COLOR_CODE,
      height: 52,
    },
    listView: {
      backgroundColor: LIGHT_WHITE_COLOR_CODE,
    },
  },
  locationIcon: {
    position: "absolute",
    top: 12,
    left: 5,
  },
});
export default Styles;
