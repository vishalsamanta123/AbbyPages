import { StyleSheet } from "react-native";
import {
  SMALL_TEXT_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  YELLOW_COLOR_CODE,
  BLACK_COLOR_CODE,
} from "../../../../Utils/Constant";
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
    // flex: 1,
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
    color: SMALL_TEXT_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
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
    fontFamily: FONT_FAMILY_REGULAR,
    color: "#3a3838",
  },
  paymentTxt: {
    marginLeft: 10,
    fontSize: 18,
    opacity: 0.9,
    width: null,
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
    fontFamily: FONT_FAMILY_REGULAR,
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
    color: YELLOW_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
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
    tintColor: BLACK_COLOR_CODE,
  },
  inputcon: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: "#d8d8d8",
    // paddingHorizontal: 20,
    width: 220,
  },
  appliedbtncon: {
    width: null,
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontSize: 15,
    backgroundColor: YELLOW_COLOR_CODE,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
export default styles;
