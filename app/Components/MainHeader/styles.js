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
    paddingHorizontal: 8,
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
    fontSize: FONT_SIZE.mediumL,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    marginRight: 50,
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
});
export default styles;
