import { Platform, StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../../../../Utils/Constant";

const Styles = StyleSheet.create({
  containerStyl: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 12,
  },
  inputCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 2,
    paddingHorizontal: 7,
    paddingLeft: 12,
  },
  container: {
    height: 60,
    borderColor: "#d8d8d8",
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: "row",
    marginTop: 15,
  },
  CameraImgView: {
    flex: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },
  checkImgs: {
    width: 38,
    height: 38,
    marginRight: 5,
  },
  AddPhotosTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 17,
    paddingLeft: 2,
  },
  rightImgVw: {
    marginLeft: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  dropDownImg: {
    width: 20,
    height: 20,
    tintColor: COLORS.LIGHT_BLACK,
  },
  TextinputContain: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 15,
  },
  CommntyAmbsdorTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 20,
  },
  ColumbiaText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 12,
    color: COLORS.LIGHT_GREY,
  },
  headTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.medium,
    color: COLORS.BLACK,
    marginHorizontal: 5,
  },
  subTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.verysmall,
    lineHeight: 19,
    color: COLORS.LIGHT_GREY,
    marginLeft: 5,
  },
  willYouNowText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 13,
    lineHeight: 20,
    color: COLORS.LIGHT_GREY,
  },
  SubmitBtnMain: {
    marginBottom: 15,
    marginTop: 5,
  },
  pickerVw: {
    width: Platform.OS == "ios" ? "85%" : "80%",
    backgroundColor: COLORS.WHITE,
    marginLeft: 8,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 17,
  },
  requireTxt: {
    fontSize: 16,
    marginVertical: 10,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_RED,
    marginHorizontal: 10,
  },
});
export default Styles;
