import { StyleSheet } from "react-native";
import {
  FONT_FAMILY_REGULAR,
  WHITE_COLOR_CODE,
  SMALL_TEXT_COLOR_CODE,
  YELLOW_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  BLACK_COLOR_CODE,
} from "../../../../Utils/Constant";
const Styles = StyleSheet.create({
  bannerimg: {
    width: 360,
    height: 240,
    justifyContent: "flex-end",
  },
  infocon: {
    padding: 20,
    borderBottomWidth: 15,
    borderBottomColor: "#f2f2f2",
    backgroundColor: "#fff",
  },
  hdngtxt: {
    fontSize: 18,
    lineHeight: 22,
    width: "90%",
    fontFamily: FONT_FAMILY_REGULAR,
    color: "#3a3838",
  },
  basiccon: {
    flexDirection: "row",
    alignItems: "center",
    margin: 2,
  },
  maincontainers: {
    padding: 20,
    flex: 1,
    backgroundColor: WHITE_COLOR_CODE,
    borderBottomWidth: 20,
    borderColor: "#f2f2f2",
  },
  icon: {
    height: 20,
    margin: 2,
    marginLeft: 0,
    marginRight: 5,
    width: 20,
  },
  text: {
    color: SMALL_TEXT_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    lineHeight: 18,
  },
  aboutview: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  abouttxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 17,
  },
  revieewbtn: {
    elevation: 1,
    width: "35%",
    paddingVertical: 8,
    padding: 0,
  },
  buttonLabelStyle: {
    fontSize: 14,
    fontFamily: FONT_FAMILY_REGULAR,
    color: WHITE_COLOR_CODE,
  },
  ButtonLabel: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 18,
  },
  AddBtnTouchable: {
    backgroundColor: YELLOW_COLOR_CODE,
    width: "92%",
    marginVertical: 5,
    height: 65,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  relatedItemsTxt: {
    marginLeft: 16,
    fontSize: 18,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
  },
  relatedItems: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 4,
    marginBottom: 10,
  },
  mainConatiner: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  mainImgeStyle: {
    width: 100,
    height: 100,
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: "grey",
    marginBottom: 5,
  },
  mainConatinerView: {
    flex: 1,
    paddingHorizontal: 5,
  },
  productName: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16.5,
    maxWidth: 200,
  },
  priceTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
    color: LIGHT_BLACK_COLOR_CODE,
    lineHeight: 20,
  },
});
export default Styles;
