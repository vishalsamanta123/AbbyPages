import { StyleSheet } from "react-native";
import {
  SMALL_TEXT_COLOR,
  WHITE_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_BOLD,
  GREY_COLOR_CODE,
  LIGHT_GREY_COLOR_CODE,
} from "../../../Utils/Constant";
const Styles = StyleSheet.create({
  startedbtntxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 20,
  },
  btnvwe: {
    width: "40%",
    borderRadius: 4,
  },
  backbtn: {
    width: "40%",
    backgroundColor: WHITE_COLOR_CODE,
    borderColor: GREY_COLOR_CODE,
    borderWidth: 0.5,
    borderRadius: 3,
  },
  firstVwe: {
    flex: 0.5,
    justifyContent: "center",
  },
  firstTxt: {
    fontSize: 23,
    lineHeight: 30,
    fontFamily: FONT_FAMILY_REGULAR,
    textAlign: "center",
  },
  secondVwe: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  secondtxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 15,
    textAlign: "center",
    color: LIGHT_GREY_COLOR_CODE,
  },
  Allgrpimg: {
    width: 70,
    height: 70,
  },
  thirdVwe: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  thirdtxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 15,
    textAlign: "center",
    color: LIGHT_GREY_COLOR_CODE,
  },
  fourthvwe: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 5,
  },
  fourthtxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
    color: LIGHT_GREY_COLOR_CODE,
  },
  lastFootervwe: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 16,
  },
  questCon: {
    flex: 1,
    justifyContent: "space-between",
  },
  questVw: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  qusetTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  optionsCon: {
    flex: 1,
    alignItems: "center",
  },
  answerVw: {
    padding: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignSelf: "center",
  },
  answerTxt: {
    textAlign: "left",
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 14,
    flex: 5,
  },
});
export default Styles;
