import { StyleSheet } from "react-native";
import {
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  LIGHT_BLACK_COLOR_CODE,
  SMALL_TEXT_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
const styles = StyleSheet.create({
  body: {
    flex: 3.5,
    backgroundColor: WHITE_COLOR_CODE,
    padding: 20,
  },
  localFooter: {
    paddingHorizontal: 2,
    paddingVertical: 10,
    marginTop: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: LIGHT_BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 15,
  },
  MainText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 19,
  },
  PosterImgeStyle: {
    width: "100%",
    height: 230,
  },
  dotsVw: {
    flexDirection: "row",
    position: "absolute",
    justifyContent: "center",
    width: "100%",
    bottom: 10,
  },
  PriceOfDishTxt: {
    color: BLACK_COLOR_CODE,
    fontSize: 17,
    lineHeight: 25,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  DishNameTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    fontSize: 17,
    width: "60%",
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4,
  },
  infocon: {
    paddingHorizontal: 12,
    borderBottomWidth: 15,
    borderBottomColor: "#f2f2f2",
    backgroundColor: "#fff",
    marginTop: 8,
  },
  hdngtxt: {
    fontSize: 18,
    lineHeight: 22,
    width: "90%",
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    paddingVertical: 3,
  },
  basiccon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  maincontainers: {
    flex: 1,
    backgroundColor: WHITE_COLOR_CODE,
    borderBottomWidth: 10,
    borderColor: "#f2f2f2",
  },
});
export default styles;
