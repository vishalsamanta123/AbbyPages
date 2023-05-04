import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY } from "./Constant";

const Styles = StyleSheet.create({
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
    fontSize: 10,
    bottom: 1,
    marginHorizontal: 5,
  },
  middleLogoVw: {
    width: 190,
    height: 60,
  },
  straightCon: {
    flexDirection: "row",
    alignItems: "center",
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
});
export default Styles;
