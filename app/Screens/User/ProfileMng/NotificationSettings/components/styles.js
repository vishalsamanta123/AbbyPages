import { Platform, StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY } from "../../../../../Utils/Constant";
const Styles = StyleSheet.create({
  GetEmailText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 15,
  },
  MainGetEmailView: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
  },
  GetEmailOptnTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_GREY,
    paddingLeft: 5,
    fontSize: 14,
  },
  EmailContainer: {
    padding: 15,
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
  AddLocationView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  EmailContainerBox: {
    borderRadius: 10,
    borderWidth: 0.4,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: 15,
    marginBottom: 20,
    borderColor: COLORS.LIGHT_GREY,
  },
  MainEmaliTXt: {
    fontSize: 19,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  PrimaryText: {
    color: COLORS.LIGHT_GREY,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  ImageDelete: {
    position: "absolute",
    right: 0,
    bottom: -19,
    zIndex: 1,
    marginRight: 17,
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
    fontSize: 13,
  },
  EmalNotifyText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 19,
    color: COLORS.BLACK,
  },
  ReceiveEmailView: {
    flexDirection: "row",
    paddingTop: 10,
  },
  ReceiveContain: {
    paddingLeft: 10,
  },
  ReceiveEmailText: {
    fontSize: 15,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_GREY,
  },
  NOteTextStyle: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_GREY,
    width: "60%",
  },

  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  modalView: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    borderWidth: 0.5,
    width: "100%",
    height: "100%",
    paddingTop: 20,
  },
  TouchableFlse: {
    position: "absolute",
    flex: 1,
    right: 0,
    paddingRight: 15,
    top: Platform.OS === "ios" ? 40 : 10,
    zIndex: 1,
  },
  TxtInptStyle: {
    borderBottomWidth: 0.5,
    borderColor: COLORS.GREY,
    fontSize: 17,
    paddingLeft: 15,
    color: COLORS.GREY,
    paddingVertical: Platform.OS === "ios" ? 20 : 0,
  },
  MainCntrySlctTouchble: {
    flex: 5,
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "lightgrey",
  },
  CountryText: {
    fontSize: 18,
    margin: 5,
    fontFamily: FONT_FAMILY.REGULAR,
    color: "grey",
  },

  MainTextViewCountry: {
    flexDirection: "row",
    alignItems: "center",
    flex: 5.5,
  },
  CountryflgTxt: {
    fontSize: 25,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.GREY,
  },
  RegionTextMain: {
    fontSize: 17,
    margin: 10,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.GREY,
    marginTop: 19,
  },
});
export default Styles;
