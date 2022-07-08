import { StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  SMALL_TEXT_COLOR_CODE,
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
  footervwe: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: WHITE_COLOR_CODE,
    marginBottom: 16,
  },
  boximgvwe: {
    flex: 1,
    flexDirection: "row",
  },
  imgvwe: {
    justifyContent: "center",
    marginLeft: "10%",
  },
  lstbtnvwe: {
    flex: 3,
    flexDirection: "row",
    paddingLeft: 10,
  },
  firsttextvwe: {
    paddingRight: 10,
    paddingLeft: 20,
    justifyContent: "center",
    flex: 0.3,
  },
  firstxt: {
    fontSize: 15,
    lineHeight: 25,
    color: SMALL_TEXT_COLOR_CODE,
    textAlign: "left",
  },
  centerbtntxt: {
    flex: 0.3,
    marginVertical: 5,
    // justifyContent: 'center',
  },
  mainboximg: {
    height: 58,
    width: 60,
  },
  choiceVw: {
    flexDirection: "row",
    height: 70,
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "space-around",
    marginVertical: 5,
  },
});
export default Styles;
