import { StyleSheet } from "react-native";
import {
  BLACK_COLOR_CODE,
  BLUE_COLOR_CODE,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  GREY_COLOR_CODE,
  LIGHT_WHITE_COLOR,
  LINE_COMMON_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
  headerVw: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: "space-between",
    backgroundColor: WHITE_COLOR_CODE,
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
  },
  topLogoVw2: {
    width: 200,
    height: 38,
  },

  topButtonVw: {
    backgroundColor: YELLOW_COLOR_CODE,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginLeft: 8,
  },
  topButtonVwNon: {
    backgroundColor: WHITE_COLOR_CODE,
    elevation: 10,
  },
  topButtonTxt: {
    color: WHITE_COLOR_CODE,
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
  },

  mainContainer: {
    flexGrow: 1,
    marginHorizontal: 18,
    marginVertical: 12,
  },
  headTxt: {
    fontFamily: FONT_FAMILY_BOLD,
    color: BLACK_COLOR_CODE,
    fontSize: 22,
  },
  subHeadTxt: {
    marginTop: 20,
    fontSize: 17,
    fontFamily: FONT_FAMILY_BOLD,
    color: BLUE_COLOR_CODE,
    marginLeft: 2,
  },
  subHeadTxtNon: {
    marginTop: 0,
    fontSize: 17,
    fontFamily: FONT_FAMILY_BOLD,
    color: BLACK_COLOR_CODE,
    marginBottom: 10,
  },
  reViewCont: {
    backgroundColor: WHITE_COLOR_CODE,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderWidth: 0.5,
    borderColor: GREY_COLOR_CODE,
    marginTop: 30,
  },
  smallTxt: {
    fontSize: 15,
    fontFamily: FONT_FAMILY_REGULAR,
    color: GREY_COLOR_CODE,
    marginLeft: 6,
  },
  descriptVw: {
    marginVertical: 5,
    minHeight: 200,
  },
  descriptInput: {
    fontSize: 17,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    marginHorizontal: 5,
  },
  bottomVw: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
});
export default styles;
