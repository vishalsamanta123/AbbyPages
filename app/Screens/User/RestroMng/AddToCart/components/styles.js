import { StyleSheet } from "react-native";
import {
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  LIGHT_GREY_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../../Utils/Constant";
const Styles = StyleSheet.create({
  ADDBtnTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
  },
  ContainerStyle: {
    padding: 15,
  },
  MainImgeStyle: {
    width: "100%",
    height: 180,
  },
  DishNameTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 20,
  },
  DesrcptnText: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_GREY_COLOR_CODE,
    fontSize: 13,
  },
  MainPriceView: {
    paddingTop: 10,
  },
  priceTextStyle: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 25,
  },
  AddBtnTouchableCon: {
    height: 60,
    width: 80,
    backgroundColor: YELLOW_COLOR_CODE,
  },
  AddBtnTouchable: {
    width: 300,
    height: 60,
    borderRadius: 6,
    alignSelf: "center",
    borderWidth: 1.5,
    borderColor: YELLOW_COLOR_CODE,
  },
  levelsCon: {
    borderColor: "#d8d8d8",
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
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  levelsVwTxt: {
    borderBottomColor: "#d8d8d8",
    borderBottomWidth: 1,
    paddingVertical: 5,
    fontSize: 15,
    fontFamily: FONT_FAMILY_REGULAR,
    marginVertical: 3,
  },
});
export default Styles;
