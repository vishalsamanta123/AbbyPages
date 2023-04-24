import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../../../../Utils/Constant";

const Styles = StyleSheet.create({
  headText: {
    fontFamily: FONT_FAMILY.FONT_FAMILY_REGULAR,
    color: COLORS.BLACK,
    fontSize: FONT_SIZE.largeM,
    marginLeft: 12,
    marginBottom: 5,
  },
  straightVw: {
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  topContainer: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  topContainerTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.FONT_FAMILY_REGULAR,
    color: COLORS.BLACK,
    lineHeight: 22,
  },
  MainConatiner: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  emptyConVw: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyConTxt: {
    fontSize: FONT_SIZE.mediumL,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.FONT_FAMILY_REGULAR,
  },
});
export default Styles;
