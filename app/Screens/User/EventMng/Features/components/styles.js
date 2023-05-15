import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
  backgroundImgVw: {
    height: 450,
    backgroundColor: COLORS.BLACK,
    paddingVertical: 70,
    overflow: "hidden",
  },
  imgInnerVw: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  createbtn: {
    borderRadius: 30,
    marginTop: 10,
  },
  createBtnTxt: {
    color: COLORS.WHITE,
  },
  priceCalWrap: {
    backgroundColor: COLORS.BORDER_LINE,
    borderRadius: 20,
    margin: 20,
    paddingTop: 10
  },
  priceDescView: {
    margin: 20,
  },
  priceDescHeadingTxt: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.BOLD,
    marginBottom: 10,
    textAlign: "center",
  },
  listTxt:{
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
    marginBottom: 5,
    textAlign: "center",
  },
  priceDescTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
    marginBottom: 10,
    textAlign: "center",
  },
});

export default styles;
