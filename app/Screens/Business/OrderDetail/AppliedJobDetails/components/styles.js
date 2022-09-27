import { StyleSheet } from "react-native";
import {
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  GREY_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  SMALL_TEXT_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../../Utils/Constant";
const styles = StyleSheet.create({
  maincontainers: {
    padding: 16,
    flex: 1,
    backgroundColor: WHITE_COLOR_CODE,
    borderBottomWidth: 18,
    borderColor: "#f2f2f2",
  },
  mainTxt: {
    fontSize: 20,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  secondaryTxt: {
    fontSize: 14.5,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    marginLeft: 5,
  },
  straightVw: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },
  otherTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: YELLOW_COLOR_CODE,
    fontSize: 18,
  },
  basiccon: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    marginVertical: 2,
  },
  dotIcon: {
    height: 18,
    width: 18,
  },
  smallTxt: {
    fontSize: 14,
    color: LIGHT_BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  modalCon: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modelVw: {
    paddingHorizontal: 10,
    marginHorizontal: 12,
    backgroundColor: WHITE_COLOR_CODE,
    borderRadius: 8,
    paddingVertical: 8,
  },
  modalCloseVw: {
    position: "absolute",
    right: 0,
    //
    margin: 8,
  },
  modalContentVw: {
    paddingVertical: 14,
    borderColor: "#d8d8d8",
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: "row",
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  modalTxtVw: {
    flex: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },
  modalTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 17,
    paddingLeft: 10,
  },
  bckArrowBack: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default styles;
