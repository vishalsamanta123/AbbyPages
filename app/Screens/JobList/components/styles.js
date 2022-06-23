import { StyleSheet } from "react-native";
import {
  FONT_FAMILY_REGULAR,
  GREY_COLOR_CODE,
  WHITE_COLOR_CODE,
  SMALL_TEXT_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  YELLOW_COLOR_CODE,
  BLACK_COLOR_CODE,
  FONT_FAMILY_BOLD,
  LIGHT_BLACK_COLOR_CODE,
  FONT_FAMILY_LIGHT,
} from "../../../Utils/Constant";
const Styles = StyleSheet.create({
  HeaderView: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },
  HeaderMiddleCon: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  MainHeadTxt: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 20,
    lineHeight: 23,
    color: WHITE_COLOR_CODE,
  },
  HeaderRightView: {
    flex: 2.5,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headericon: {
    marginRight: 10,
    height: 25,
    width: 25,
  },
  hdngtxt: {
    fontSize: 18,
    lineHeight: 20,
    fontFamily: FONT_FAMILY_REGULAR,
    color: "#3a3838",
    marginTop: 10,
  },
  jobTitle: {
    fontSize: 15,
    lineHeight: 18,
    fontFamily: FONT_FAMILY_REGULAR,
    color: "#3a3838",
  },
  dataCon: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    paddingLeft: 5,
    borderBottomWidth: 0.3,
    borderColor: "lightgrey",
  },
  text: {
    color: SMALL_TEXT_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 12,
    lineHeight: 14,
    marginVertical: 2,
  },
  posterimg: {
    width: 115,
    height: 115,
    borderRadius: 15,
    borderWidth: 0.2,
    borderColor: "grey",
    alignItems: "center",
    marginHorizontal: 5,
  },
  basiccon: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 2,
  },
  icon: {
    height: 15,
    width: 15,
    margin: 2,
    marginLeft: 0,
    marginRight: 5,
  },
  AnyKeywordView: {
    backgroundColor: WHITE_COLOR_CODE,
    padding: 20,
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    borderRadius: 3,
    borderColor: LINE_COMMON_COLOR_CODE,
    borderColor: "#f2f2f2",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  MainBtnText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 19,
  },
  HeaderArrow: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 10,
  },
  HeaderViewMidle: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center",
  },
  HeaderMiddleTxt: {
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 18,
  },
  FilterImgeView: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  PriceRangeView: {
    padding: 15,
    borderTopColor: LINE_COMMON_COLOR_CODE,
    borderTopWidth: 10,
    borderBottomColor: LINE_COMMON_COLOR_CODE,
    borderBottomWidth: 10,
  },
  PriceRngetXT: {
    fontSize: 18,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  PriceRngeText: {
    color: GREY_COLOR_CODE,
    fontSize: 15,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  FiltersTgView: {
    padding: 15,
  },
  FilterOptnView: {
    backgroundColor: YELLOW_COLOR_CODE,
    width: 120,
    marginTop: 10,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  FiltersText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 12,
    color: BLACK_COLOR_CODE,
  },
  detailsVw: {
    flex: 1,
    paddingHorizontal: 5,
    marginRight: 5,
    justifyContent: "center",
  },
  emptyVw: {
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyTxt: {
    color: LIGHT_BLACK_COLOR_CODE,
    fontSize: 16,
    fontFamily: FONT_FAMILY_LIGHT,
  },
  inputVw: {
    backgroundColor: WHITE_COLOR_CODE,
    height: 48,
    borderRadius: 6,
  },
  input: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
    color: LINE_COMMON_COLOR_CODE,
    paddingLeft: 10,
  },
});
export default Styles;
