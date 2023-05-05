import { StyleSheet } from "react-native";
import {
  FONT_SIZE,
  FONT_FAMILY,
  COLORS,
  Constants,
} from "../../../../../Utils/Constant";

const Styles = StyleSheet.create({
  topInfoVw: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  topStraightVw: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: COLORS.BORDER_LINE,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 20,
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 5,
  },
  hdngtxt: {
    fontSize: FONT_SIZE.normal,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
  },
  searchBttn: {
    alignSelf: "flex-end",
    borderWidth: Constants.standardBW,
    borderColor: COLORS.DARK_PURPLE,
    borderRadius: 18,
    paddingHorizontal: 20,
    marginRight: 20,
    paddingVertical: 1,
  },
  searchBttnTxt: {
    fontSize: FONT_SIZE.medium,
    color: COLORS.DARK_PURPLE,
    fontFamily: FONT_FAMILY.REGULAR,
    bottom: 2,
  },
  filterDropVw: {
    marginVertical: 8,
    marginHorizontal: 12,
  },
});
export default Styles;
