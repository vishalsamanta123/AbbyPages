import { StyleSheet } from "react-native";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../Utils/Constant";

const styles = StyleSheet.create({
  headCon: {
    paddingHorizontal: 8,
  },
  topHeaderVw: {
    justifyContent: "space-between",
    paddingHorizontal: 6,
    paddingVertical: Constants.Ios ? 10 : 4,
    backgroundColor: COLORS.WHITE,
  },
  blockCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Constants.Ios ? 15 : 0,
    paddingVertical: Constants.Ios ? 10 : 10,
    backgroundColor: COLORS.WHITE,
  },
  logoVw: {
    width: 190,
    height: 48,
  },
  backtxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.medium,
    color: COLORS.BLACK,
  },
  topHeaderTxt: {
    fontSize: FONT_SIZE.largeL,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.BOLD,
    textAlign: "center",
  },
  leftIconVw: {
    marginHorizontal: 6,
    backgroundColor: COLORS.LIGHT_WHITE,
    borderRadius: 100,
    padding: 8,
  },
  notifyVw: {
    position: "absolute",
    right: -7,
    top: -8,
    backgroundColor: COLORS.YELLOW,
    borderRadius: 200,
    height: 20,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  notifyTxt: {
    fontSize: FONT_SIZE.small,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.BOLD,
  },
  topLogoVw: {
    width: 45,
    height: 38,
    marginLeft: Constants.Ios ? 5 : 2,
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
    shadowColor: COLORS.BLACK,
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
});
export default styles;
