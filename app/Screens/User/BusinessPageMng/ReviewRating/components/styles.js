import { StyleSheet } from "react-native";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
  headerVw: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: "space-between",
    backgroundColor: COLORS.WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  topLogoVw: {
    width: 45,
    height: 38,
    marginLeft: 5
  },
  topLogoVw2: {
    width: 200,
    height: 38,
  },

  topButtonVw: {
    backgroundColor: COLORS.YELLOW,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginLeft: 8,
  },
  topButtonVwNon: {
    backgroundColor: COLORS.WHITE,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  topButtonTxt: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
  },

  mainContainer: {
    flexGrow: 1,
    marginHorizontal: 18,
    marginVertical: 12,
  },
  headTxt: {
    fontFamily: FONT_FAMILY.BOLD,
    color: COLORS.BLACK,
    fontSize: FONT_SIZE.largeM,
  },
  subHeadTxt: {
    marginTop: 20,
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.BOLD,
    color: COLORS.BLUE,
    marginLeft: 2,
  },
  subHeadTxtNon: {
    marginTop: 0,
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.BOLD,
    color: COLORS.BLACK,
    marginBottom: 10,
  },
  reViewCont: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderWidth: Constants.normalBW,
    borderColor: COLORS.BORDER_LINE,
    marginTop: 30,
  },
  smallTxt: {
    fontSize: FONT_SIZE.normal,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.GREY,
    marginLeft: 6,
  },
  descriptVw: {
    marginVertical: 5,
    minHeight: 200,
  },
  descriptInput: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
    marginHorizontal: 5,
  },
  bottomVw: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
});
export default styles;
