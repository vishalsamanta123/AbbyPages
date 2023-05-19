import { StyleSheet } from "react-native";
import {
  FONT_SIZE,
  COLORS,
  FONT_FAMILY,
} from "../../../../../Utils/Constant";
const styles = StyleSheet.create({
  dataCon: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    borderBottomWidth: 0.3,
    borderColor: "lightgrey",
    marginVertical: 8,
  },
  posterimg: {
    width: 90,
    height: 90,
    alignSelf: "center",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  basiccon: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentCon: {
    paddingBottom: 8,
    paddingTop: 8,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    marginVertical: 5,
    paddingBottom: 10,
  },
  text: {
    color: COLORS.SMALL_TEXT,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  footerVw: {
    flex: 1,
    paddingTop: 12,
    paddingLeft: 20,
    paddingRight: 20,
  },
  hdngtxt: {
    fontSize: 18,
    width: "90%",
    fontFamily: FONT_FAMILY.REGULAR,
    color: "#3a3838",
  },
  paymentTxt: {
    marginLeft: 10,
    fontSize: 18,
    opacity: 0.9,
    width: null,
  },
  TakeOutText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 16,
    paddingLeft: 10,
  },
  cardDetailsTxt: {
    marginLeft: 10,
    marginVertical: 8,
    fontSize: 18,
  },
  cardStyleVw: {
    paddingVertical: 30,
    marginHorizontal: 14,
  },
  cardStyle: {
    borderColor: "#d8d8d8",
    borderWidth: 1,
    borderRadius: 9,
    textColor: COLORS.BLACK,
  },
  headingTxt: {
    fontSize: 18,
    opacity: 0.9,
  },
  locationTxt: {
    paddingVertical: 5,
    fontSize: 15,
    opacity: 0.9,
    width: "90%",
    fontFamily: FONT_FAMILY.REGULAR,
    color: "#3a3838",
  },
  addressEditVw: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    marginVertical: 5,
    paddingBottom: 10,
  },
  addressEditTxt: {
    fontSize: 12,
    color: COLORS.YELLOW,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  addressEditImg: {
    marginLeft: 4,
    height: 11,
    width: 11,
  },
  amountTxt: {
    opacity: 0.8,
    fontSize: 16,
    width: null,
  },
  icon: {
    height: 20,
    width: 20,
    margin: 2,
    marginLeft: 0,
    marginRight: 5,
    tintColor: COLORS.BLACK,
  },
  inputcon: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: "#d8d8d8",
    width: 220,
  },
  appliedbtncon: {
    width: null,
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontSize: 15,
    backgroundColor: COLORS.YELLOW,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  locationTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: "#3a3838",
    fontSize: FONT_SIZE.smallL,
  },
});
export default styles;
