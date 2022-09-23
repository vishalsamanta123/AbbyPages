import { StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  SMALL_TEXT_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  BLACK_COLOR_CODE,
  LIGHT_GREY_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
} from "../../../Utils/Constant";
const Styles = StyleSheet.create({
  imageStyle: {
    height: 210,
    width: "100%",
  },
  infocon: {
    marginTop: 16,
    marginHorizontal: 20,
    borderBottomWidth: 15,
    borderBottomColor: "#fff",
    backgroundColor: "#fff",
  },
  paginationWrapper: {
    bottom: 24,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  nameTxt: {
    fontSize: 18,
    lineHeight: 22,
    width: "90%",
    fontFamily: FONT_FAMILY_REGULAR,
    color: "#3a3838",
    paddingBottom: 10,
    textTransform: "capitalize",
  },
  detailTxt: {
    color: SMALL_TEXT_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 14,
    lineHeight: 18,
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: WHITE_COLOR_CODE,
    marginLeft: 10,
  },
  basiccon: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  icon: {
    height: 17,
    margin: 2,
    marginLeft: 0,
    marginRight: 5,
    width: 17,
  },
  btncon: {
    paddingVertical: 15,
    backgroundColor: YELLOW_COLOR_CODE,
    borderRadius: 12,
    marginTop: 10,
    marginHorizontal: 20,
    borderWidth: 0.8,
    borderColor: LIGHT_GREY_COLOR_CODE,
  },
  modalCon: {
    flex: 1,
    backgroundColor: WHITE_COLOR_CODE,
  },
  modalsVw: {
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  ticketDetailVw: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderWidth: 0.5,
    marginVertical: 4,
    borderRadius: 6,
    borderColor: YELLOW_COLOR_CODE,
    marginTop: 12,
  },
  ticketTxt: {
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    marginTop: 10,
  },
  ticketsInputVw: {
    paddingVertical: 2,
    width: "95%",
    marginLeft: 0,
    margin: 0,
    marginTop: 8,
  },
  secInputVw: {
    borderColor: "#d8d8d8",
    borderWidth: 1,
    borderRadius: 9,
  },
  codesVw: {
    borderWidth: 1,
    borderColor: "#d8d8d8",
    top: 4,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 55,
    paddingHorizontal: 5,
    paddingVertical: 14,
  },
  codesTxt: {
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
  },
  interestedModalVw: {
    backgroundColor: WHITE_COLOR_CODE,
    marginHorizontal: 24,
    borderRadius: 10,
    paddingVertical: 8,
  },
  respnsesTxtVw: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    justifyContent: "space-between",
  },
  responseTxt: {
    fontSize: 24,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    textTransform: "capitalize",
    paddingLeft: 20,
  },
  respnsesVw: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.4,
  },
  notIntrstVw: {
    borderRadius: 12,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  respnsesTxt: {
    fontSize: 18,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    marginLeft: 8,
  },
  addToCalImg: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  addToCalTxt: {
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
  },
  addToCalVw: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  respnsesBttnVw: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginRight: 10,
  },
  respnsesBttn: {
    width: "40%",
    padding: 8,
  },
  eventNameTx: {
    fontSize: 24,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    textTransform: "capitalize",
    textAlign: "center",
  },
  startDateTxt: {
    fontSize: 14,
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_BLACK_COLOR_CODE,
    textAlign: "center",
  },
  selectTxt: {
    fontSize: 16,
    marginTop: 18,
    textAlign: "center",
    color: BLACK_COLOR_CODE,
    fontSize: 20,
    textDecorationLine: "underline",
  },
  titleTxt: {
    fontSize: 18,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    marginTop: 12,
    marginLeft: 4,
  },
  subTitleTxt: {
    fontSize: 16,
    marginTop: 2,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
  },
  smallInputVw: {
    height: 48,
    width: "80%",
    marginLeft: 0,
    margin: 0,
    marginTop: 5,
  },
  bttnSubmitVw: {
    marginTop: 10,
    width: "70%",
    height: 48,
    padding: 12,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  ticketCategoryVw: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 0.5,
    borderColor: YELLOW_COLOR_CODE,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 8,
    borderRadius: 6,
  },
  ticketCtgryTxt: {
    fontSize: 18,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  ticketAmtTxt: {
    fontSize: 16,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    marginTop: 2,
  },
  spinnerVw: {
    backgroundColor: YELLOW_COLOR_CODE,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
    alignSelf: "flex-end",
  },
  spinnerInput: {
    backgroundColor: "transparent",
    fontSize: 20,
    top: 8,
    paddingTop: 0,
  },
  addItemBttn: {
    height: 28,
    width: 32,
    paddingTop: 0,
    top: -2,
    backgroundColor: "transparent",
  },
  smallTxt: {
    fontSize: 12,
    marginVertical: 2,
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_GREY_COLOR_CODE,
  },
  straightVw: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  ticketsNameTxt: {
    fontSize: 15,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
  },
  timeShownVw: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 25,
  },
  digitStyle: {
    backgroundColor: "transparent",
    width: 25,
    height: 25,
  },
  timeTxt: {
    fontSize: 15,
    fontFamily: FONT_FAMILY_REGULAR,
    textAlign: "center",
    color: LIGHT_BLACK_COLOR_CODE,
    marginVertical: 2,
  },
  percentTxt: {
    fontSize: 12,
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_BLACK_COLOR_CODE,
    marginTop: 6,
    marginRight: 5,
  },
  timeCon: {
    backgroundColor: LINE_COMMON_COLOR_CODE,
    borderRadius: 10,
    height: 12,
  },
  timeConVw: {
    backgroundColor: YELLOW_COLOR_CODE,
    borderRadius: 10,
  },
  // formsTxt: {
  //   fontSize: 18,
  //   fontFamily: FONT_FAMILY_REGULAR,
  //   color: BLACK_COLOR_CODE,
  // },
  // ticketConfrTxt: {
  //   fontSize: 14,
  //   fontFamily: FONT_FAMILY_REGULAR,
  //   color: LIGHT_BLACK_COLOR_CODE,
  // },
  // straightCont: {
  //   flexDirection: "row",
  //   alignItems: "center",
  // },
  // ticketInputVw: {
  //   backgroundColor: LINE_COMMON_COLOR_CODE,
  //   borderRadius: 5,
  //   justifyContent: "space-between",
  //   height: 30,
  //   paddingHorizontal: 5,
  // },
  // ticketInput: {
  //   paddingVertical: 8,
  //   fontFamily: FONT_FAMILY_REGULAR,
  //   color: BLACK_COLOR_CODE,
  //   fontSize: 12.5,
  //   top: 2,
  //   marginRight: 6,
  //   width: "70%",
  // },
  // ticketInputImg: {
  //   width: 18,
  //   height: 18,
  //   resizeMode: "contain",
  //   tintColor: WHITE_COLOR_CODE,
  // },
  // enteredTxt: {
  //   fontSize: 16,
  //   fontFamily: FONT_FAMILY_REGULAR,
  //   color: LIGHT_GREY_COLOR_CODE,
  //   paddingVertical: 2,
  // },
  // errorMssgTxt: {
  //   textAlign: "center",
  //   paddingVertical: 10,
  //   fontSize: 16,
  //   fontFamily: FONT_FAMILY_REGULAR,
  //   color: LIGHT_RED_COLOR_CODE,
  // },
  // numbersListVw: {
  //   paddingHorizontal: 8,
  //   paddingVertical: 10,
  //   position: "absolute",
  //   elevation: 1,
  //   height: 130,
  //   backgroundColor: LINE_COMMON_COLOR_CODE,
  //   width: "100%",
  //   marginTop: 32,
  //   marginLeft: 5,
  // },
  // numbersListCon: {
  //   paddingVertical: 2,
  //   paddingHorizontal: 4,
  // },
  // numberTxt: {
  //   color: BLACK_COLOR_CODE,
  //   fontSize: 12,
  //   fontFamily: FONT_FAMILY_REGULAR,
  // },
  // formsFillsVw: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   paddingVertical: 5,
  // },
  // formContainersVw: {
  //   width: "62%",
  //   borderWidth: 1,
  //   borderColor: LIGHT_BLACK_COLOR_CODE,
  //   height: 40,
  //   borderRadius: 3,
  //   justifyContent: "center",
  // },
  // formsStyleVws: {
  //   fontFamily: FONT_FAMILY_REGULAR,
  //   color: LIGHT_BLACK_COLOR_CODE,
  //   fontSize: 16,
  //   height: "100%",
  //   paddingLeft: 8,
  // },
  // cardDetailTxt: {
  //   marginTop: 2,
  //   fontSize: 16,
  // },
  // successTxt: {
  //   fontSize: 16,
  //   fontFamily: FONT_FAMILY_REGULAR,
  //   color: YELLOW_COLOR_CODE,
  //   marginTop: 10,
  // },
  cardStyleVw: {
    marginVertical: 6,
    height: 50,
  },
  cardStyle: {
    borderColor: "#d8d8d8",
    borderWidth: 1,
    borderRadius: 9,
    textColor: BLACK_COLOR_CODE,
  },
  modalBttnVw: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },
  modalBttn: {
    width: "45%",
    marginHorizontal: 5,
    paddingVertical: 8,
    alignSelf: "flex-end",
    backgroundColor: YELLOW_COLOR_CODE,
  },
  modalBttnTxt: {
    color: LIGHT_BLACK_COLOR_CODE,
  },
});
export default Styles;
