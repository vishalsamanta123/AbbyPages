import { StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  FONT_FAMILY_BOLD,
  GREY_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  BLACK_COLOR_CODE,
  YELLOW_COLOR_CODE,
  LIGHT_GREY_COLOR_CODE,
} from "../../../../Utils/Constant";

const Styles = StyleSheet.create({
  image: {
    width: 400,
    height: 200,
  },
  headingTxt: {
    fontSize: 18,
    color: LIGHT_GREY_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    lineHeight: 22,
  },
  switchstyle: {
    marginHorizontal: 10,
  },
  BtnStyle: {
    padding: 18,
    backgroundColor: YELLOW_COLOR_CODE,
    alignItems: "center",
    width: "40%",
    borderRadius: 16,
  },
  statusContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  MainConatiner: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  MainImgeStyle: {
    width: 110,
    height: 110,
    borderRadius: 15,
    borderWidth: 0.2,
    borderColor: "grey",
    marginBottom: 5,
  },
  MainConatinerView: {
    flex: 1,
    paddingHorizontal: 10,
  },
  MainServiceName: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16.5,
  },
  AddressTxtStyle: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 12,
    color: GREY_COLOR_CODE,
    lineHeight: 15,
  },
  InformationView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },
  statusVw: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 3,
  },
  MapImgeStyle: {
    width: 16,
    height: 16,
    marginRight: 2,
  },
  AddressTextStyles: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 12,
    color: GREY_COLOR_CODE,
  },
  RatingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  RatingStyles: {
    backgroundColor: "#a3d74e",
    width: 28,
    height: 19,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  RatingStylesTxt: {
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 11,
  },
  RatingTextMain: {
    paddingLeft: 8,
    fontFamily: FONT_FAMILY_REGULAR,
    color: GREY_COLOR_CODE,
  },
  emptyConVw: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyConTxt: {
    fontSize: 18,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  editDeleteVW: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  BtnTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: WHITE_COLOR_CODE,
    fontSize: 22,
  },
});
export default Styles;
