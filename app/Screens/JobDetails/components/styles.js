import { StyleSheet } from "react-native";
import {
  FONT_FAMILY_REGULAR,
  YELLOW_COLOR_CODE,
  WHITE_COLOR_CODE,
  SMALL_TEXT_COLOR_CODE,
} from "../../../Utils/Constant";
const Styles = StyleSheet.create({
  bannerimg: {
    width: "100%",
    height: 150,
  },
  infocon: {
    padding: 20,
    borderBottomWidth: 15,
    borderBottomColor: "#f2f2f2",
    backgroundColor: "#fff",
  },
  hdngtxt: {
    fontSize: 18,
    width: "90%",
    fontFamily: FONT_FAMILY_REGULAR,
    color: "#3a3838",
  },
  basiccon: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    marginVertical: 2,
  },
  maincontainers: {
    padding: 20,
    flex: 1,
    backgroundColor: WHITE_COLOR_CODE,
    borderBottomWidth: 20,
    borderColor: "#f2f2f2",
  },
  descriptioncon: {
    flex: 1,
    flexDirection: "row",
  },
  btnmncon: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    height: 18,
    margin: 2,
    marginLeft: 0,
    marginRight: 5,
    width: 18,
  },
  text: {
    color: SMALL_TEXT_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    lineHeight: 22,
    letterSpacing: 0.2,
  },
  btncon: {
    paddingVertical: 18,
    backgroundColor: YELLOW_COLOR_CODE,
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  btntxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 17,
  },
  noTimeTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
    color: YELLOW_COLOR_CODE,
    marginTop: 8,
    marginLeft: 5,
  },
});
export default Styles;
