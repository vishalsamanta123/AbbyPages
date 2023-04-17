import { StyleSheet } from "react-native";
import {
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  GREY_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  LIGHT_GREY_COLOR_CODE,
  LIGHT_WHITE_COLOR,
  LINE_COMMON_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 20,
    backgroundColor: WHITE_COLOR_CODE,
    flex: 1,
  },
  centerButton: {
    backgroundColor: YELLOW_COLOR_CODE,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 9,
    marginHorizontal: 10,
    marginHorizontal: 20,
    elevation: 2,
    borderRadius: 20,
  },
  centerButtonTxt: {
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 20,
  },
  headTxt: {
    fontSize: 20,
    color: LIGHT_BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    marginHorizontal: 20,
    marginTop: 20,
  },
  subCatVw: {
    alignItems: "center",
    flexDirection: "row",
    borderColor: GREY_COLOR_CODE,
    borderBottomWidth: 0.5,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  subCatTxt: {
    fontSize: 20,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    textAlign: "center",
    marginLeft: 8,
  },
  profileVw: {
    marginHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: LINE_COMMON_COLOR_CODE,
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
    fontSize: 18,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
  },
  profileSmallTxt: {
    fontSize: 14,
    fontFamily: FONT_FAMILY_REGULAR,
    color: GREY_COLOR_CODE,
  },
  listVew: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: GREY_COLOR_CODE,
  },
  listImgVw: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 12,
  },
  listTxt: {
    fontSize: 18,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    width: "95%",
  },
  listSmallTxt: {
    fontSize: 14,
    fontFamily: FONT_FAMILY_REGULAR,
    color: GREY_COLOR_CODE,
  },

});
export default styles;
