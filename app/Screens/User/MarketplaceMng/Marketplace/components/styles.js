import { StyleSheet } from "react-native";
import { COLORS, Constants, FONT_FAMILY, FONT_SIZE } from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
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
    paddingHorizontal: 25,
    // marginRight: 20,
    paddingVertical: 5,
  },
  searchBttnTxt: {
    fontSize: FONT_SIZE.smallL,
    color: COLORS.DARK_PURPLE,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  subCatView: {
    margin: 5,
    borderRadius: 50,
    borderColor: COLORS.GREY,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10
  },
  subCatTxt: {
    fontSize: FONT_SIZE.small,
    color: COLORS.DARK_PURPLE,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  emptyView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  emtyTxt: {
    fontSize: FONT_SIZE.medium,
    color: COLORS.DARK_PURPLE,
    fontFamily: FONT_FAMILY.REGULAR,
    marginTop: 20
  },
});

export default styles;
