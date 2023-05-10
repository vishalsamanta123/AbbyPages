import { StyleSheet } from "react-native";
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../../../../Utils/Constant";
const Styles = StyleSheet.create({
  ConfirmationContain: {
    padding: 15,
  },
  HaedingParatTXT: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.GREY,
    fontSize: FONT_SIZE.smallL,
    paddingLeft: 10,
  },
  notesTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.YELLOW,
    fontSize: FONT_SIZE.smallL,
  },
  specialOffrVw: {
    flexDirection: "row",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  RestroInfoView: {
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 15,
    borderColor: COLORS.COMMON,
    padding: 15,
  },
  RestroProfile: {
    width: 90,
    height: 90,
    borderRadius: 4,
  },
  RestroNameView: {
    width: 210,
    paddingLeft: 10,
  },
  RestroNameTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.mediumL,
  },
  DateViewContain: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
  },
  CalenderImge: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
  DateMainTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.GREY,
    fontSize: FONT_SIZE.smallL,
    paddingLeft: 5,
  },
  GuestsView: {
    flexDirection: "row",
    paddingLeft: 2,
    paddingTop: 5,
    alignItems: "center",
  },
  UserImgeStyle: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
  EditDetailTxt: {
    textDecorationLine: "underline",
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.YELLOW,
    fontSize: FONT_SIZE.small,
  },
});
export default Styles;
