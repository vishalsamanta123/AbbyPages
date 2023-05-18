import { StyleSheet } from "react-native";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../../../../Utils/Constant";
const Styles = StyleSheet.create({
  containerVw: {
    flexDirection: "row",
    paddingTop: 15,
    paddingLeft: 8,
    alignItems: "center",
  },
  headTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.mediumL,
    paddingLeft: 10,
    color: COLORS.BLACK,
  },
  subTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_GREY,
    fontSize: FONT_SIZE.small,
    marginHorizontal: 10,
    lineHeight: 16,
  },
  subheadTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.normal,
    paddingLeft: 10,
  },
  paymentMethodVw: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingLeft: 10,
  },
  subHeadTxt: {
    fontSize: FONT_SIZE.normal,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  cardDetailsTxt: {
    marginLeft: 10,
    marginVertical: 8,
    fontSize: 18,
  },
  cardStyleVw: {
    paddingVertical: 26,
    marginHorizontal: 8,
  },
  cardStyle: {
    borderColor: COLORS.COMMON,
    borderWidth: 1,
    borderRadius: 9,
    textColor: COLORS.BLACK,
  },
  smallTxtVw: {
    borderWidth: Constants.normalBW,
    borderColor: COLORS.BORDER_LINE,
    borderRadius: 50,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginBottom: 8,
    marginTop: 3,
    marginHorizontal: 20,
  },
  smallTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.normal,
    paddingLeft: 10,
    color: COLORS.DARK_PURPLE,
  },
});
export default Styles;
