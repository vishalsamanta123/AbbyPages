import { Platform, StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  LIGHT_GREY_COLOR_CODE,
  LIGHT_RED_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
} from "../../../Utils/Constant";
const Styles = StyleSheet.create({
  ContainerStyle: {
    padding: 15,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: WHITE_COLOR_CODE,
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
    marginRight: 5
  },
  AddPhotosTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 17,
    paddingLeft: 2,
  },
  BckArrowBack: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  dropDownImg: {
    width: 20,
    height: 20,
    tintColor: LIGHT_BLACK_COLOR_CODE
  },
  TextinputContain: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 15,
  },
  CommntyAmbsdorTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 20,
  },
  ColumbiaText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 12,
    color: LIGHT_GREY_COLOR_CODE,
  },
  HeadingTextStyle: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 18,
  },
  coverLetterDescrptn: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 13,
    lineHeight: 20,
    color: LIGHT_GREY_COLOR_CODE,
  },
  willYouNowText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 13,
    lineHeight: 20,
    color: LIGHT_GREY_COLOR_CODE,
  },
  SubmitBtnMain: {
    marginBottom: 15,
    marginTop: 5,
  },
  pickerVw: {
    width: Platform.OS == "ios" ? "85%" : "80%",
    backgroundColor: WHITE_COLOR_CODE,
    marginLeft: 8,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 17,
  },
  requireTxt: {
    fontSize: 16,
    marginVertical: 10,
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_RED_COLOR_CODE,
    marginHorizontal: 10,
  },
});
export default Styles;
