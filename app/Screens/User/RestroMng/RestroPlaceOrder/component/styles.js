import { StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  LIGHT_GREY_COLOR_CODE,
  YELLOW_COLOR_CODE,
  FONT_SIZE,
  Constants,
  COLORS,
} from "../../../../../Utils/Constant";


const styles = StyleSheet.create({
  MainContainer: {
    padding: 15,
    backgroundColor: WHITE_COLOR_CODE,
  },
  CheckOutText: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  DishMainView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth:Constants.normalBW,
    borderColor:COLORS.BORDER_LINE,
    borderRadius: 10,
    marginVertical: 5
  },
  DishTextCOntain: {
    flexDirection: "row",
    alignItems: 'center'
  },
  DishTextStyle: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE.medium,
    color: YELLOW_COLOR_CODE,
  },
  PriceDishText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE.smallL,
    color: LIGHT_GREY_COLOR_CODE,
  },
  SubTotalView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  SubTotalText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE.smallL,
  },
  guidedTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_GREY_COLOR_CODE,
    fontSize: FONT_SIZE.smallL,
    lineHeight: 22,
  },
  CheckBtnView: {
    flex: 0.5,
    justifyContent: "center",
    backgroundColor: WHITE_COLOR_CODE,
    marginBottom: 16,
  },
  OrderTextStyle: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_GREY_COLOR_CODE,
  },
});
export default styles;
