import { StyleSheet } from "react-native";
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  Constants,
} from "../../../../../Utils/Constant";
const Styles = StyleSheet.create({
  containVw: {
    marginVertical: 2,
    paddingHorizontal: 7,
    paddingTop: 5,
    paddingVertical: 10,
    borderColor: COLORS.COMMON2,
    borderWidth: Constants.standardBW,
    backgroundColor: COLORS.COMMON2,
  },
  imageStyle: {
    height: 210,
    width: "100%",
  },
  infocon: {
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
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
    textTransform: "capitalize",
  },
  detailTxt: {
    color: COLORS.GREY,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.smallL,
    marginLeft: 5,
    flex: 1,
    marginVertical: 3,
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: COLORS.WHITE,
    marginLeft: 10,
  },
  basiccon: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  icon: {
    height: 18,
    width: 18,
    margin: 2,
    marginLeft: 0,
    marginRight: 5,
    tintColor: COLORS.LIGHT_BLACK,
  },
  btncon: {
    paddingVertical: 15,
    backgroundColor: COLORS.YELLOW,
    borderRadius: 12,
    marginTop: 10,
    marginHorizontal: 20,
    borderWidth: 0.8,
    borderColor: COLORS.LIGHT_GREY,
  },
  modalCon: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  modalsVw: {
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  ticketDetailVw: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderWidth: Constants.normalBW,
    marginVertical: 4,
    borderRadius: 6,
    borderColor: COLORS.BORDER_LINE,
    marginTop: 12,
  },
  ticketTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
    marginTop: 10,
  },
  ticketsInputVw: {
    paddingVertical: Constants.Ios ? 5 : 2,
    width: "95%",
    marginLeft: 0,
    margin: 0,
    marginTop: 8,
  },
  secInputVw: {
    borderColor: "#d8d8d8",
    borderWidth: 1,
    borderRadius: 9,
    paddingVertical: Constants.Ios ? 4 : 0,
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
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
  },
  interestedModalVw: {
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 24,
    borderRadius: 10,
    paddingVertical: 8,
  },
  respnsesTxtVw: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: Constants.standardBW,
    borderColor: COLORS.BORDER_LINE,
    justifyContent: "space-between",
  },
  responseTxt: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
    textTransform: "capitalize",
    paddingLeft: 20,
  },
  respnsesVw: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: Constants.normalBW,
    borderColor: COLORS.BORDER_LINE,
  },
  notIntrstVw: {
    borderRadius: 12,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  respnsesTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
    marginLeft: 8,
  },
  addToCalImg: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  addToCalTxt: {
    fontSize: FONT_SIZE.smallL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
  },
  addToCalVw: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  respnsesBttnVw: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 20,
  },
  respnsesBttn: {
    width: "40%",
    padding: 8,
  },
  eventNameTx: {
    fontSize: FONT_SIZE.large,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
    textTransform: "capitalize",
    textAlign: "center",
  },
  startDateTxt: {
    fontSize: FONT_SIZE.small,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_BLACK,
    textAlign: "center",
  },
  selectTxt: {
    marginTop: 18,
    textAlign: "center",
    color: COLORS.BLACK,
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
    textDecorationLine: "underline",
  },
  titleTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
    marginLeft: 10,
    textTransform: "capitalize",
  },
  subTitleTxt: {
    fontSize: FONT_SIZE.normal,
    marginTop: 2,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
  },
  smallInputVw: {
    height: 48,
    width: "80%",
    marginLeft: 0,
    margin: 0,
    marginTop: 5,
  },
  smallInnrInpVw: {
    marginTop: 0,
    paddingLeft: 8,
    paddingRight: 12,
    paddingVertical: Constants.Ios ? 0 : 10,
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
    flexDirection: "row",
    paddingHorizontal: 12,
    marginVertical: 6,
    borderRadius: 6,
    borderWidth: Constants.normalBW,
    borderColor: COLORS.BORDER_LINE,
    flex: 1,
  },
  ticketCtgryTxt: {
    fontSize: FONT_SIZE.mediumL,
    color: COLORS.LIGHT_BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    textTransform: "capitalize",
  },
  ticketAmtTxt: {
    fontSize: FONT_SIZE.smallL,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    marginTop: 2,
  },
  spinnerVw: {
    backgroundColor: COLORS.YELLOW,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
    alignSelf: "flex-end",
  },
  spinnerInput: {
    backgroundColor: "transparent",
    fontSize: FONT_SIZE.large,
    top: Constants.Ios ? 1 : 8,
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
    fontSize: FONT_SIZE.lightL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_GREY,
    paddingBottom: 10,
  },
  straightVw: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  ticketsNameTxt: {
    fontSize: FONT_SIZE.smallL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
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
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
    textAlign: "center",
    color: COLORS.LIGHT_BLACK,
    marginVertical: 2,
  },
  percentTxt: {
    fontSize: FONT_SIZE.small,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_BLACK,
    marginTop: 6,
    marginRight: 5,
  },
  timeCon: {
    backgroundColor: COLORS.BORDER_LINE,
    borderRadius: 10,
    height: 12,
  },
  timeConVw: {
    backgroundColor: COLORS.YELLOW,
    borderRadius: 10,
  },
  cardStyleVw: {
    marginVertical: 6,
    height: 50,
  },
  cardStyle: {
    borderColor: "#d8d8d8",
    borderWidth: 1,
    borderRadius: 9,
    textColor: COLORS.BLACK,
  },
  modalBttnVw: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 12,
    justifyContent: "space-between",
  },
  modalBttn: {
    width: "45%",
    marginHorizontal: 5,
    paddingVertical: Constants.Ios ? 12 : 8,
    alignSelf: "flex-end",
    backgroundColor: COLORS.YELLOW,
  },
  modalBttnTxt: {
    color: COLORS.LIGHT_BLACK,
  },
  emptyTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
    marginLeft: 6,
    marginVertical: 5,
  },
  inputVw: {
    marginHorizontal: 8,
    marginTop: 10,
  },
});
export default Styles;
