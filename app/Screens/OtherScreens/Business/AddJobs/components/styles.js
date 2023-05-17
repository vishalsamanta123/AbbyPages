import { Platform, StyleSheet } from "react-native";
import {
  FONT_FAMILY_BOLD,
  YELLOW_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  BLACK_COLOR_CODE,
  GREY_COLOR_CODE,
  LIGHT_GREY_COLOR_CODE,
  WHITE_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
} from "../../../../Utils/Constant";
const Styles = StyleSheet.create({
  inputwvwe: {
    justifyContent: "center",
    paddingTop: 10,
  },
  container: {
    height: 60,
    borderColor: "#d8d8d8",
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: "row",
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  secContainer: {
    height: 60,
    borderColor: "#d8d8d8",
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: "row",
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  CameraImgView: {
    flex: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },
  headervwe: {
    borderBottomWidth: 0.8,
    borderBottomColor: "green",
    flexDirection: "row",
    height: 50,
    flexDirection: "row",
    paddingTop: Platform.OS === "ios" ? 10 : 0,
  },
  arealstvwe: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  arealsttxt: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 15,
    color: BLACK_COLOR_CODE,
  },
  cancelbtnimgvwe: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  cancelimg: {
    width: 20,
    height: 20,
    marginTop: 8,
  },
  moadlvwe: {
    width: "100%",
    marginLeft: 14,
    marginRight: 14,
    height: "100%",
  },
  AddPhotosTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 17,
    paddingLeft: 10,
  },
  BckArrowBack: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dropDownVw: {
    tintColor: LIGHT_BLACK_COLOR_CODE,
    width: 20,
    height: 20
  },
  TxtInptStyle: {
    borderBottomWidth: 0.5,
    borderColor: GREY_COLOR_CODE,
    fontSize: 17,
    paddingLeft: 15,
    color: GREY_COLOR_CODE,
    height: Platform.OS === "ios" ? 60 : 50,
    // height:60
  },
  alluncheck: {
    width: 40,
    height: 40,
  },
  BasicVwe: {
    marginLeft: "5%",
    marginTop: "5%",
  },

  basictxt: {
    fontSize: 20,
    fontFamily: FONT_FAMILY_REGULAR,
  },

  addtionalvwe: {
    marginLeft: "6%",
    marginTop: "2%",
  },

  addtionaltxt: {
    fontSize: 20,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  jobdesvwe: {
    justifyContent: "center",
  },
  inputsVw: {
    borderColor: "#d8d8d8",
    borderWidth: 1,
    borderRadius: 9,
    margin: 8,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  inputTitleTxt: {
    position: "absolute",
    left: 25,
    justifyContent: "center",
    fontFamily: FONT_FAMILY_REGULAR,
  },
  jobinputvwe: {
    borderColor: "#d8d8d8",
    borderRadius: 10,
    borderWidth: 0.5,
    fontSize: 16,
    fontFamily: FONT_FAMILY_BOLD,
  },
  addjobd: {
    marginLeft: "6%",
    marginTop: "2%",
  },

  addjobdtxt: {
    fontSize: 20,
    fontFamily: FONT_FAMILY_REGULAR,
  },

  footermainvwe: {
    flex: 1,
    flexDirection: "row",
  },

  conditionvwe: {
    flex: 1,
    marginLeft: "5%",
  },

  acceptvwe: {
    justifyContent: "center",
    marginRight: "5%",
    flex: 5,
  },

  accepttxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 17,
  },

  btnvwe: {
    padding: 15,
    marginBottom: 5,
  },

  btntxt: {
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },

  btnstyle: {
    marginTop: 10,
    backgroundColor: YELLOW_COLOR_CODE,
  },
  selectvwe: {
    marginTop: 8,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  tchvwe: {
    paddingLeft: 25,
    paddingVertical: 12,
    // height: 65,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d8d8d8",
    width: "92%",
    justifyContent: "center",
    marginBottom: 5,
  },
  slctdtxt: {
    fontSize: 17,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(100,100,100, 0.2)",
  },
  alertBackground: {
    margin: 10,
    borderRadius: 5,
    paddingVertical: 20,
    backgroundColor: LIGHT_GREY_COLOR_CODE,
  },
  selectyoursize: {
    justifyContent: "center",
    alignItems: "center",
  },
  sizeslct: {
    fontSize: 18,
    fontFamily: FONT_FAMILY_REGULAR,
    color: WHITE_COLOR_CODE,
  },
  cancelvwe: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  closeicon: {
    height: 25,
    width: 25,
    zIndex: 1,
  },
  dropdownSkillView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: WHITE_COLOR_CODE,
    marginVertical: 7,
    paddingVertical: 10,
    paddingHorizontal: 9,
    marginHorizontal: 0,
    marginTop: 5,
  },
  categytxt: {
    color: LIGHT_BLACK_COLOR_CODE,
    fontSize: 15,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  arraySelectVw: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  arrayVw: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  titlesTxt: {
    fontSize: 17,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
  },
  arrayItmVw: {
    paddingRight: 8,
    minWidth: 70,
    marginHorizontal: 4,
    paddingVertical: 3,
  },
  modalVw: {
    flex: 1,
    borderBottomWidth: 0.3,
    borderBottomColor: "#f2f2f2",
    padding: 10,
    paddingVertical: 15,
    marginHorizontal: 15,
  },
  modalTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 15,
    color: BLACK_COLOR_CODE,
  },
  modalTwoTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 15,
    color: WHITE_COLOR_CODE,
  },
});
export default Styles;
