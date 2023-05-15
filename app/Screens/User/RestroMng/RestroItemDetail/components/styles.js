import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../../../../Utils/Constant";

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  mainImgStyle: {
    width: "100%",
    height: 180,
  },
  titleTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.mediumL,
    color: COLORS.BLACK,
    textTransform: "capitalize",
  },
  dsrcptnText: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLUE,
    fontSize: FONT_SIZE.small,
    textTransform: "capitalize",
  },
  priceTxtSty: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.large,
  },
  AddBtnTouchableCon: {
    height: 60,
    width: 80,
    backgroundColor: COLORS.YELLOW,
  },
  AddBtnTouchable: {
    width: 300,
    height: 60,
    borderRadius: 6,
    alignSelf: "center",
    borderWidth: 1.5,
    borderColor: COLORS.YELLOW,
  },
  levelsCon: {
    borderColor: COLORS.COMMON,
    borderWidth: 1.5,
    width: "92%",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 70,
    paddingHorizontal: 20,
    alignSelf: "center",
  },
  otherTxts: {
    fontSize: 17,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  levelsVwTxt: {
    borderBottomColor: "#d8d8d8",
    borderBottomWidth: 1,
    paddingVertical: 5,
    fontSize: 15,
    fontFamily: FONT_FAMILY.REGULAR,
    marginVertical: 3,
  },
});
export default Styles;
