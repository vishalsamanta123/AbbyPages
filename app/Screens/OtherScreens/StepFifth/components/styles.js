import { StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  SMALL_TEXT_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_BOLD,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
const Styles = StyleSheet.create({
  startedbtntxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 20,
  },
  maintxtVwe: {
    paddingTop: "12%",
  },
  maintxt: {
    fontSize: 22,
    lineHeight: 30,
    fontFamily: FONT_FAMILY_REGULAR,
    textAlign: "center",
  },
  inputwvwe: {
    paddingTop: 20,
    justifyContent: "center",
  },
  footervwe: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: WHITE_COLOR_CODE,
    marginBottom: 16,
  },
  boximgvwe: {
    flex: 0.5,
    flexDirection: "row",
  },
  imgvwe: {
    justifyContent: "center",
    paddingLeft: 20,
  },
  btnvwe: {
    flex: 0.9,
    marginLeft: "10%",
  },
  lstbtnvwe: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  emailview: { flex: 3 },
  emailtxtview: { paddingLeft: 15, paddingRight: 15 },
  bussinessinfotxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 13,
    textAlign: "center",
    lineHeight: 22,
    color: SMALL_TEXT_COLOR_CODE,
  },
  fifht: {
    flex: 3,
    justifyContent: "flex-end",
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  fifhttxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 13,
    textAlign: "center",
    lineHeight: 22,
    color: SMALL_TEXT_COLOR_CODE,
  },
  yellowtxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 13,
    textAlign: "center",
    lineHeight: 22,
    color: YELLOW_COLOR_CODE,
  },
  pptxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 13,
    textAlign: "center",
    lineHeight: 22,
    color: YELLOW_COLOR_CODE,
  },
});
export default Styles;
