import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../../../../Utils/Constant";

const Styles = StyleSheet.create({
  headText: {
    fontFamily: FONT_FAMILY.BOLD,
    color: COLORS.BLACK,
    fontSize: FONT_SIZE.large,
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
    fontSize: FONT_SIZE.smallL,
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
});
export default Styles;
