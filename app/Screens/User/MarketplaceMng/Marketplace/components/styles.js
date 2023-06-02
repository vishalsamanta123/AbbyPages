import { StyleSheet } from "react-native";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
  topInfoVw: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  topStraightVw: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: COLORS.BORDER_LINE,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 20,
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 5,
  },
  hdngtxt: {
    fontSize: FONT_SIZE.normal,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
  },
  searchBttn: {
    alignSelf: "flex-end",
    borderWidth: Constants.standardBW,
    borderColor: COLORS.DARK_PURPLE,
    borderRadius: 18,
    paddingHorizontal: 25,
    // marginRight: 20,
    paddingVertical: 5,
  },
  searchBttnTxt: {
    fontSize: FONT_SIZE.smallL,
    color: COLORS.DARK_PURPLE,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  setLocationView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10
  },
  locationtxt: {
    fontSize: FONT_SIZE.smallL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLUE,
  },
  subCatView: {
    margin: 5,
    borderRadius: 50,
    borderColor: COLORS.GREY,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  subCatTxt: {
    fontSize: FONT_SIZE.small,
    color: COLORS.DARK_PURPLE,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  emptyView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  emtyTxt: {
    fontSize: FONT_SIZE.medium,
    color: COLORS.DARK_PURPLE,
    fontFamily: FONT_FAMILY.REGULAR,
    marginTop: 20,
  },
  productTouch: {
    // padding: 10,
    // borderRadius: 10,
    // justifyContent: "center",
    // marginTop: 10,
    // marginHorizontal: 5,
    margin: 2,
    flex: 1
  },
  productImage: {
    height: Constants.windowHeight/ 4,
    width: '100%',
    // width: Constants.windowWidth / 2,
    // borderRadius: 10,
  },
  productTxt: {
    width: Constants.windowWidth / 2.5,
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  catTxt: {
    width: Constants.windowWidth / 2.5,
    fontSize: FONT_SIZE.smallL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.GREY
  },
  outOfTxt: {
    width: Constants.windowWidth / 2.5,
    color: COLORS.LIGHT_RED,
    fontSize: FONT_SIZE.small,
    fontFamily: FONT_FAMILY.REGULAR,
    marginTop: 5,
  },
  productPriceTxt: {
    fontSize: FONT_SIZE.normal,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.GREY,
  },
});

export default styles;
