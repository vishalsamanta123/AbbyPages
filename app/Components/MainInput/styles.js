import { StyleSheet } from "react-native";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../Utils/Constant";

const styles = StyleSheet.create({
  mainCont: {
    marginVertical: 10,
    borderWidth: Constants.standardBW,
    borderColor: COLORS.DARK_PURPLE,
    paddingHorizontal: 10,
    flex: 0,
    paddingVertical: 0,
    backgroundColor: COLORS.WHITE,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  headTxtVw: {
    position: "absolute",
    top: -12,
    marginLeft: 16,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 2,
  },
  headTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.DARK_PURPLE,
    fontSize: FONT_SIZE.smallL,
  },
  inputCon: {
    fontSize: FONT_SIZE.normal,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});
export default styles;
