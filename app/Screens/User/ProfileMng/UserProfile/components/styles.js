import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY } from "../../../../../Utils/Constant";
const Styles = StyleSheet.create({
  EmailContainer: {
    padding: 15,
    paddingBottom: 25,
    backgroundColor: COLORS.WHITE,
  },
  FlexViewContain: {
    flexDirection: "row",
  },
  EmailNotifyTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 19,
  },
  AddAccountTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    paddingTop: 5,
    lineHeight: 18,
    color: COLORS.LIGHT_GREY,
    fontSize: 13,
  },
  PhoneNumberContain: {
    backgroundColor: COLORS.WHITE,
    marginTop: 10,
    paddingBottom: 15,
  },
  PhoneDescrptnView: {
    padding: 15,
  },
  PhoneDescrptnText: {
    lineHeight: 19,
    paddingTop: 5,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_GREY,
    fontSize: 12,
  },
  EmalNotifyText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 14,
    color: COLORS.BLACK,
  },
  ReceiveEmailView: {
    flexDirection: "row",
  },
  ReceiveContain: {
    paddingLeft: 10,
  },
  ReceiveEmailText: {
    fontSize: 12,
    width: "60%",
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_GREY,
  },
  NOteTextStyle: {
    fontSize: 9,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_GREY,
    width: "60%",
  },
  SaveBtnsTYLE: {
    marginTop: 5,
    marginTop: 10,
  },
  CancelBtnTxt: {
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.BOLD,
  },
  CancelBtnStyle: {
    marginTop: 5,
    backgroundColor: COLORS.GREY,
    marginTop: 10,
    marginBottom: 10,
  },
});
export default Styles;
