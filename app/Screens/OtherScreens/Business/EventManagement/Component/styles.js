import { StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  FONT_FAMILY_BOLD,
  GREY_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  BLACK_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
const Styles = StyleSheet.create({
  moreOptionVw: {
    borderColor: GREY_COLOR_CODE,
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
    marginHorizontal: 10,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  moreOptionInnrVw: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },
  JobDscrptn: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 20,
    color: BLACK_COLOR_CODE,
    paddingLeft: 8,
  },
  PlusImge: {
    width: 30,
    height: 30,
    marginTop: 3,
    borderWidth: 0.8,
    borderColor: BLACK_COLOR_CODE,
    borderRadius: 16,
  },
  listImg: {
    width: 25,
    height: 25,
    marginTop: 5,
    tintColor: BLACK_COLOR_CODE,
  },
  MainConatiner: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 10,
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
  },
  BtnStyle: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: YELLOW_COLOR_CODE,
    borderRadius: 8,
  },
  BtnTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: WHITE_COLOR_CODE,
    fontSize: 14,
  },
});
export default Styles;
