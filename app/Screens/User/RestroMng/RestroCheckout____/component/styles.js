import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY } from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
  MainContainer: {
    padding: 15,
    backgroundColor: COLORS.WHITE,
  },
  AddressTextView: {
    paddingLeft: 10,
  },
  typesVw: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: COLORS.WHITE,
    marginBottom: 8,
    paddingVertical: 20,
  },
  deliverytypeVw: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  typesCheckVw: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  notSelectTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_GREY,
  },
  commonTxtStyle: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_GREY,
    fontSize: 17,
  },
  ChangeTextStyle: {
    fontFamily: FONT_FAMILY.REGULAR,
    lineHeight: 26,
    color: COLORS.YELLOW,
    fontSize: 15,
  },
  addressTxtCon: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.4,
    width: "100%",
    padding: 5,
    borderColor: COLORS.YELLOW,
    marginTop: 10,
  },
  AddressCOntain: {
    flexDirection: "row",
    alignItems: "center",
  },
  CheckOutText: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  DishMainView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  DishTextCOntain: {
    flexDirection: "row",
    alignItems: "center",
  },
  DishTextStyle: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 14,
    paddingLeft: 5,
    color: COLORS.YELLOW,
  },
  PriceDishText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 14,
    color: COLORS.LIGHT_GREY,
  },
  SubTotalView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    paddingVertical: 10,
    paddingLeft: 3,
  },
  SubTotalText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 15,
    color: COLORS.BLACK,
  },
  CheckOutVw: {
    backgroundColor: COLORS.WHITE,
    marginTop: 10,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  MainBtnTouchable: {
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: COLORS.YELLOW,
  },
  ButtonLabel: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 18,
  },
  MainContent: {
    justifyContent: "center",
    marginTop: 15,
  },
  ArrowTouchable: {
    position: "absolute",
    right: -10,
    top: -10,
  },
  PleaseEnterTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    textAlign: "center",
    fontSize: 19,
    paddingTop: 8,
  },
  emptyAddressVw: {
    minHeight: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  txtInputStyle: {
    width: "100%",
    justifyContent: "center",
    borderWidth: 1.5,
    fontFamily: FONT_FAMILY.REGULAR,
    borderColor: COLORS.COMMON,
    borderRadius: 5,
    height: 50,
    paddingLeft: 10,
    marginTop: 15,
  },
  ScrollImge: {
    position: "absolute",
    right: 14,
    bottom: 15,
  },
  SechudleView: {
    width: "100%",
    marginTop: 5,
  },
  ScheduleTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 16,
  },
});
export default styles;
