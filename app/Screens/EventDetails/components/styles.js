import { StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  SMALL_TEXT_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  BLACK_COLOR_CODE,
  LIGHT_WHITE_COLOR,
  LINE_COMMON_COLOR_CODE,
  LIGHT_GREY_COLOR_CODE,
  LIGHT_RED_COLOR_CODE,
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
    borderBottomColor: "#f2f2f2",
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
    borderRadius: 8,
    marginTop: 10,
    marginHorizontal: 20,
  },
  ticketModal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
  },
  ticketModalVw: {
    backgroundColor: WHITE_COLOR_CODE,
    borderRadius: 5,
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  eventNameTx: {
    fontSize: 24,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    textTransform: "capitalize",
    lineHeight: 24,
  },
  formsTxt: {
    fontSize: 18,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
  },
  ticketConfrTxt: {
    fontSize: 14,
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_BLACK_COLOR_CODE,
  },
  straightCont: {
    flexDirection: "row",
    alignItems: "center",
  },
  ticketInputVw: {
    backgroundColor: LINE_COMMON_COLOR_CODE,
    borderRadius: 5,
    justifyContent: "space-between",
    height: 30,
    paddingHorizontal: 5,
  },
  ticketInput: {
    paddingVertical: 8,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    fontSize: 12.5,
    top: 2,
    marginRight: 6,
    width: "70%",
  },
  ticketInputImg: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    tintColor: WHITE_COLOR_CODE,
  },
  enteredTxt: {
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_GREY_COLOR_CODE,
    paddingVertical: 2,
  },
  errorMssgTxt: {
    color: LIGHT_RED_COLOR_CODE,
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  modalBttnVw: {
    flexDirection: "row",
    justifyContent: "center",
  },
  numbersListVw: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    position: "absolute",
    elevation: 1,
    height: 130,
    backgroundColor: LINE_COMMON_COLOR_CODE,
    width: "100%",
    marginTop: 32,
    marginLeft: 5,
  },
  numbersListCon: {
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  numberTxt: {
    color: BLACK_COLOR_CODE,
    fontSize: 12,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  formsFillsVw: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  pickerVw: {
    width: "60%",
    borderWidth: 1,
    borderColor: LIGHT_BLACK_COLOR_CODE,
    height: 40,
    backgroundColor: LIGHT_BLACK_COLOR_CODE,
    borderRadius: 10,
  },
  modalBttn: {
    width: "45%",
    marginHorizontal: 5,
    paddingVertical: 8,
    alignSelf: "flex-end",
    backgroundColor: SMALL_TEXT_COLOR_CODE,
  },
  modalBttnTxt: {
    color: WHITE_COLOR_CODE,
    fontSize: 20,
  },
});
export default Styles;
