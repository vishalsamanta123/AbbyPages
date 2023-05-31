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
    paddingHorizontal: 2,
  },
  headTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.DARK_PURPLE,
    fontSize: FONT_SIZE.smallL,
  },
  inputCon: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    flex: 1,
    paddingLeft: 16,
  },
  iconVw: {
    paddingHorizontal: 5,
    alignItems: "center",
    flex: 0.2,
  },
});
export default styles;
