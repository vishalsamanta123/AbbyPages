import { Platform, StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  LIGHT_GREY_COLOR_CODE,
  FONT_FAMILY_BOLD,
  BLACK_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
const styles = StyleSheet.create({
  lablestyle: {
    flexDirection: "row",
    margin: 15,
  },
  txtCat: {
    fontSize: 15,
    lineHeight: 18,
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  FlatlistContain: {
    width: "100%",
    borderTopColor: WHITE_COLOR_CODE,
    borderTopWidth: 0.3,
    flexDirection: "row",
    backgroundColor: YELLOW_COLOR_CODE,
  },
  MainContainer: {
    padding: 15,
  },
  searchVw: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    backgroundColor: WHITE_COLOR_CODE,
    borderRadius: 10,
    marginBottom: 10,
  },
  searchInputVw: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
    borderRadius: 5,
    flex: 1,
  },
  MainHeadText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 24,
  },
  ConatinView: {
    borderWidth: 0.5,
    flexDirection: "row",
    borderRadius: 3,
    marginBottom: 15,
    borderColor: LIGHT_GREY_COLOR_CODE,
  },
  DishImgeStyle: {
    width: "40%",
    height: "100%",
  },
  DishDiscptnView: {
    padding: 15,
  },
  DishNameTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    fontSize: 17,
    width: "60%",
  },
  DiscrptnTxtStyle: {
    fontFamily: FONT_FAMILY_REGULAR,
    lineHeight: 18,
    color: LIGHT_GREY_COLOR_CODE,
    fontSize: 12,
    width: "45%",
  },
  PriceOfDishTxt: {
    color: BLACK_COLOR_CODE,
    fontSize: 19,
    lineHeight: 24,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  ReviewView: {
    flexDirection: "row",
    alignItems: "center",
  },
  ReviewText: {
    color: LIGHT_GREY_COLOR_CODE,
    fontSize: 12,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  AddBtnTouchable: {
    backgroundColor: YELLOW_COLOR_CODE,
    width: 90,
    height: 30,
    marginLeft: 18,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerVw: {
    backgroundColor: YELLOW_COLOR_CODE,
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
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
  },
  spinnerInput: {
    backgroundColor: "transparent",
    fontSize: 20,
    top:Platform.OS==='ios'?0: 8,
    paddingTop: 0,
  },
});
export default styles;
