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
    backgroundColor: COLORS.WHITE,
    borderRadius: 16,
    paddingVertical: 4,
  },
  headTxtVw: {
    position: "absolute",
    top: -2,
    marginLeft: 16,
    paddingHorizontal: 2,
    zIndex: 1,
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
    borderRadius: 18,
  },
  iconVw: {
    paddingHorizontal: 5,
    alignItems: "center",
    flex: 0.1,
  },
});
export default styles;
