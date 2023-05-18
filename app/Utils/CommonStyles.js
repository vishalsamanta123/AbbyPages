import { StyleSheet } from "react-native";
import { COLORS, Constants, FONT_FAMILY, FONT_SIZE } from "./Constant";

const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  otherContainer: {
    flex: 1,
    backgroundColor: COLORS.COMMON,
  },
  header: {
    paddingVertical: 16,
    flexDirection: "row",
    backgroundColor: COLORS.YELLOW,
    alignItems: "center",
  },
  body: {
    flex: 5.5,
  },
  text: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
  },
  scrollCon: {
    flexGrow: 1,
    backgroundColor: COLORS.WHITE,
  },
  otherScrollCon: {
    flexGrow: 1,
    backgroundColor: COLORS.LIGHT_WHITE,
  },
  editPencilVw: {
    backgroundColor: COLORS.YELLOW,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  bigTxtVw: {
    fontSize: 24,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.BOLD,
    textAlign: "center",
    paddingHorizontal: 5,
  },
  mediumTxt: {
    fontSize: 19,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.REGULAR,
    textAlign: "center",
  },
  blackDropDownImg: {
    width: 20,
    height: 20,
    tintColor: COLORS.LIGHT_BLACK,
  },
  dotTxt: {
    fontSize: FONT_SIZE.light,
    color: COLORS.DARK_PURPLE,
    marginHorizontal: 3,
  },
  middleLogoVw: {
    width: 190,
    height: 60,
  },
  straightCon: {
    flexDirection: "row",
    alignItems: "center",
  },
  justifyCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  locSearchVw: {
    textInputContainer: {
      fontSize: 16,
      fontFamily: FONT_FAMILY.REGULAR,
      paddingLeft: 30,
      width: "95%",
    },
    textInput: {
      fontFamily: FONT_FAMILY.REGULAR,
      fontSize: 16,
      backgroundColor: COLORS.TRANSPARENT,
      color: COLORS.GREY,
      height: 45,
    },
    listView: {
      backgroundColor: COLORS.LIGHT_WHITE,
    },
  },
  locationIcon: {
    position: "absolute",
    top: 12,
    left: 5,
  },
  specialTxtVw: {
    position: "absolute",
    right: 5,
    backgroundColor: COLORS.COMMON,
    top: 38,
    borderRadius: 10,
    paddingHorizontal: 10,
    zIndex: 1,
    paddingVertical: 5,
    borderWidth: Constants.normalBW,
    borderColor: COLORS.GREY,
  },
  specialTxt: {
    fontSize: FONT_SIZE.verysmall,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});
export default CommonStyles;
