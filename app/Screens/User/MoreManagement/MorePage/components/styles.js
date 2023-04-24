import { StyleSheet } from "react-native";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 20,
    backgroundColor: COLORS.WHITE,
    flex: 1,
  },
  centerButton: {
    backgroundColor: COLORS.YELLOW,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 9,
    marginHorizontal: 10,
    marginHorizontal: 20,
    elevation: 2,
    borderRadius: 20,
  },
  centerButtonTxt: {
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.large,
  },
  headTxt: {
    fontSize: FONT_SIZE.large,
    color: COLORS.LIGHT_BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    marginHorizontal: 20,
    marginTop: 20,
    textAlign: "center",
  },
  subCatVw: {
    alignItems: "center",
    flexDirection: "row",
    borderColor: COLORS.BORDER_LINE,
    borderBottomWidth: Constants.normalBW,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  subCatTxt: {
    fontSize: FONT_SIZE.large,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    textAlign: "center",
    marginLeft: 8,
  },
  profileVw: {
    marginHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: COLORS.COMMON,
    paddingHorizontal: 10,
    borderRadius: 16,
  },
  profileImgVw: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 12,
  },
  profileTxt: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
  },
  profileSmallTxt: {
    fontSize: FONT_SIZE.smallL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.GREY,
  },
  listVew: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: Constants.normalBW,
    borderColor: COLORS.BORDER_LINE,
  },
  listImgVw: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 12,
  },
  listTxt: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
    width: "95%",
  },
  listSmallTxt: {
    fontSize: FONT_SIZE.smallL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.GREY,
  },
  seeMoreBttn: {
    alignSelf: "center",
    paddingVertical: 5,
  },
  seeMoreBttnTxt: {
    fontSize: FONT_SIZE.medium,
    color: COLORS.BLUE,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});
export default styles;
