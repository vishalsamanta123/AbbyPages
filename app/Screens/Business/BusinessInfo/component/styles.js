import { StyleSheet } from "react-native";
import {
  LIGHT_GREY_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
const Styles = StyleSheet.create({
  WriteTextView: {
    padding: 15,
  },
  WriteText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 20,
  },
  TimeLineImge: {
    width: "100%",
    height: 90,
  },
  OptionContain: {
    padding: 15,
    borderColor: LINE_COMMON_COLOR_CODE,
    borderWidth: 1.5,
    borderRadius: 5,
    margin: 15,
  },
  selectOptionContain: {
    padding: 15,
    borderColor: YELLOW_COLOR_CODE,
    borderWidth: 1.5,
    borderRadius: 5,
    margin: 15,
  },
  ImgeConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  WriteOwnText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 18,
  },
  NeedHelpContain: {
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
  },
  NeedHelpText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 13,
    color: LIGHT_GREY_COLOR_CODE,
  },
  RightView: {
    flexDirection: "row",
    paddingTop: 10,
  },
  RecommndedView: {
    padding: 10,
    paddingTop: 0,
    paddingRight: 20,
  },
  RecommndedText: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_GREY_COLOR_CODE,
    fontSize: 15,
  },
});
export default Styles;
