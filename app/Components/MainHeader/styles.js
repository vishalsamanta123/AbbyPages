import { StyleSheet } from "react-native";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
  WHITE_COLOR_CODE,
} from "../../Utils/Constant";

const styles = StyleSheet.create({
  headCon: {
    paddingHorizontal: 8,
    backgroundColor: WHITE_COLOR_CODE,
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
    // justifyContent: "space-between",
    // paddingHorizontal: 8,
    // marginVertical: 5,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: Constants.Ios ? 10 : 6,
    backgroundColor: COLORS.WHITE,
  },
  logoVw: {
    width: 190,
    height: 50,
  },
  backView: {
    flexDirection: "row",
    alignItems: "center",
  },
  backtxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.mediumL,
    color: COLORS.BLACK,
  },
  topHeaderTxt: {
    fontSize: FONT_SIZE.largeL,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    marginLeft: 30,
  },
  leftIconVw: {
    marginLeft: 10,
    backgroundColor: "#efefef",
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
});
export default styles;
