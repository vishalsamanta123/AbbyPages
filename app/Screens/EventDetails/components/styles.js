import { StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  SMALL_TEXT_COLOR_CODE,
  FONT_FAMILY_BOLD,
  LIGHT_BLACK_COLOR_CODE,
} from "../../../Utils/Constant";
const Styles = StyleSheet.create({
  imageStyle: {
    height: 210,
    width: "100%",
  },
  infocon: {
    marginTop: 16,
    marginHorizontal: 20,
    borderBottomWidth: 15,
    borderBottomColor: "#f2f2f2",
    backgroundColor: "#fff",
  },
  paginationWrapper: {
    bottom: 24,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  nameTxt: {
    fontSize: 18,
    lineHeight: 22,
    width: "90%",
    fontFamily: FONT_FAMILY_REGULAR,
    color: "#3a3838",
    paddingBottom: 10,
    textTransform: "capitalize",
  },
  detailTxt: {
    color: SMALL_TEXT_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 14,
    lineHeight: 18,
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: WHITE_COLOR_CODE,
    marginLeft: 10,
  },
  basiccon: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  icon: {
    height: 17,
    margin: 2,
    marginLeft: 0,
    marginRight: 5,
    width: 17,
  },
  btncon: {
    paddingVertical: 15,
    backgroundColor: YELLOW_COLOR_CODE,
    borderRadius: 8,
    marginTop: 10,
    marginHorizontal: 20,
  },
  interestedModal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  interestedModalVw: {
    backgroundColor: WHITE_COLOR_CODE,
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: 30,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  intrstConfrTxt: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: FONT_FAMILY_BOLD,
    color: LIGHT_BLACK_COLOR_CODE,
  },
  modalBttnVw: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
  },
  modalBttn: {
    width: "45%",
    marginHorizontal: 5,
    paddingVertical: 10,
  },
});
export default Styles;
