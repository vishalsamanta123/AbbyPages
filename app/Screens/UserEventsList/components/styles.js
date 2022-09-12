import { StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  SMALL_TEXT_COLOR_CODE,
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  LIGHT_GREY_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  LIGHT_WHITE_COLOR,
  GREY_COLOR_CODE,
} from "../../../Utils/Constant";
const Styles = StyleSheet.create({
  containerVw: {
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  allTxtVw: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    flex: 1,
    justifyContent: "space-between",
  },
  nameTxt: {
    fontSize: 20,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  straightVw: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },
  straightTxt: {
    fontSize: 15,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  straightImg: {
    width: 15,
    height: 15,
    resizeMode: "contain",
    marginRight: 5,
  },
  allEventsVw: {
    paddingHorizontal: 20,
  },
  downloadTxt: {
    fontSize: 12,
    color: YELLOW_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  downloadImg: {
    width: 30,
    height: 30,
    transform: [{ rotate: "180deg" }],
  },
  emptyEventVw: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyEventTxt: {
    fontSize: 20,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
});
export default Styles;
