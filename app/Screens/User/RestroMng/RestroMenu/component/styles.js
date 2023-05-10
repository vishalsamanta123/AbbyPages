import { Platform, StyleSheet } from "react-native";
import { COLORS, Constants, FONT_FAMILY } from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
  listVw: {
    alignItems: "center",
    borderBottomWidth: Constants.standardBW,
    borderColor: COLORS.BORDER_LINE,
  },
  lablestyle: {
    flexDirection: "row",
    margin: 15,
  },
  txtCat: {
    fontSize: 15,
    lineHeight: 18,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  toplistCon: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderBottomColor: COLORS.BORDER_LINE,
    borderBottomWidth: Constants.normalBW,
  },
  MainContainer: {},
  searchVw: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 0.9,
    borderColor: COLORS.GREY,
  },
  searchInputVw: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.REGULAR,
    borderRadius: 5,
    flex: 1,
    color: COLORS.LIGHT_BLACK,
  },
  MainHeadText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 24,
  },
  ConatinView: {
    borderWidth: 0.5,
    flexDirection: "row",
    borderRadius: 3,
    marginBottom: 15,
    borderColor: COLORS.LIGHT_GREY,
  },
  DishImgeStyle: {
    width: "40%",
    height: "100%",
  },
  DishDiscptnView: {
    padding: 15,
  },
  DishNameTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
    fontSize: 17,
    width: "60%",
  },
  DiscrptnTxtStyle: {
    fontFamily: FONT_FAMILY.REGULAR,
    lineHeight: 18,
    color: COLORS.LIGHT_GREY,
    fontSize: 12,
    width: "45%",
  },
  PriceOfDishTxt: {
    color: COLORS.BLACK,
    fontSize: 19,
    lineHeight: 24,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  ReviewView: {
    flexDirection: "row",
    alignItems: "center",
  },
  ReviewText: {
    color: COLORS.LIGHT_GREY,
    fontSize: 12,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  AddBtnTouchable: {
    backgroundColor: COLORS.YELLOW,
    width: 90,
    height: 30,
    marginLeft: 18,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerVw: {
    backgroundColor: COLORS.YELLOW,
    marginLeft: 20,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  addItemBttn: {
    height: 25,
    width: 25,
    paddingTop: 0,
    bottom: 2,
    backgroundColor: "transparent",
    paddingHorizontal: 5,
  },
  AddBtnTxt: {
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 16,
  },
  spinnerInput: {
    backgroundColor: "transparent",
    fontSize: 20,
    top: Platform.OS === "ios" ? 0 : 8,
    paddingTop: 0,
  },
});
export default styles;
