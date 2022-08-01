import { StyleSheet } from "react-native";
import {
  LIGHT_GREY_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  LINE_COMMON_COLOR_CODE,
  GREY_COLOR_CODE,
  WHITE_COLOR_CODE,
  LIGHT_WHITE_COLOR,
  LIGHT_BLACK_COLOR_CODE,
  SMALL_TEXT_COLOR_CODE,
  BLACK_COLOR_CODE,
} from "../../../Utils/Constant";
const styles = StyleSheet.create({
  restoImg: {
    width: "100%",
    height: 200,
  },
  mainContentVw: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 8,
    borderBottomColor: LINE_COMMON_COLOR_CODE,
    paddingBottom: 10,
  },
  bttnsVw: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    width: "65%",
    backgroundColor: LINE_COMMON_COLOR_CODE,
    padding: 0,
  },
  bttnsTxt: {
    fontSize: 15,
    color: BLACK_COLOR_CODE,
  },
  orderItemVw: {
    padding: 20,
    borderBottomWidth: 8,
    borderColor: LINE_COMMON_COLOR_CODE,
  },
  invoiceBttn: {
    padding: 0,
    paddingVertical: 14,
    width: "80%",
  },
  orderStatusTxt: {
    fontSize: 16,
    color: SMALL_TEXT_COLOR_CODE,
    paddingBottom: 15,
  },
  orderStatusVw: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  ConatinView: {
    marginTop: 5,
    flexDirection: "row",
    borderRadius: 5,
    alignSelf: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: LIGHT_GREY_COLOR_CODE,
  },
  DishImgeStyle: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  DishDiscptnView: {
    flex: 5,
    padding: 10,
  },
  itemImgCon: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  nameTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 23,
    color: BLACK_COLOR_CODE,
  },
  detailTitleTxt: {
    fontSize: 13,
    color: SMALL_TEXT_COLOR_CODE,
  },
  detailTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 15,
  },
  text: {
    fontFamily: FONT_FAMILY_REGULAR,
  },
});
export default styles;
