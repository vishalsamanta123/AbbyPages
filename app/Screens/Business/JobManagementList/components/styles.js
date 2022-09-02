import { StyleSheet } from "react-native";
import {
  LIGHT_GREY_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_BOLD,
  BLACK_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
const Styles = StyleSheet.create({
  MainContain: {
    marginHorizontal: 20,
    marginBottom: 5,
    padding: 15,
    borderWidth: 1,
    borderColor: LINE_COMMON_COLOR_CODE,
    borderRadius: 4,
  },
  ViewContainer: {
    padding: 15,
  },
  TableNottEXT: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 17,
  },
  settingPersonView: {
    flexDirection: "row",
    paddingTop: 10,
  },
  UserIcon: {
    width: 16,
    height: 16,
    top: 1,
  },
  PersonText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 12,
    color: LIGHT_GREY_COLOR_CODE,
  },
  PlusView: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  PlusImge: {
    width: 28,
    height: 28,
  },
  AddBtnTouchable: {
    backgroundColor: YELLOW_COLOR_CODE,
    width: 35,
    marginTop: 15,
    position: "absolute",
    right: 20,
    bottom: 5,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  JobContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  DescrptionText: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: YELLOW_COLOR_CODE,
    fontSize: 15,
  },
  DescrptnTextStyle: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 14,
    color: LIGHT_GREY_COLOR_CODE,
    lineHeight: 20,
  },
  straightVw: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeadingTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 12,
    color: BLACK_COLOR_CODE,
  },
  JobDscrptn: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 20,
  },
});
export default Styles;
