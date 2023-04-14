import { Dimensions, StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  FONT_FAMILY_BOLD,
  YELLOW_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  GREY_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  BLACK_COLOR_CODE,
  LIGHT_GREEN_COLOR_CODE,
  LIGHT_RED_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
} from "../../../../Utils/Constant";
const { width, height } = Dimensions.get("window");

const Styles = StyleSheet.create({
  posterVw: {
    flex: 1,
    borderColor: BLACK_COLOR_CODE,
  },
  dotActiveVw: {
    borderRadius: 100,
    backgroundColor: YELLOW_COLOR_CODE,
    width: 16,
    height: 16,
  },
  dotInActiveVw: {
    borderRadius: 100,
    backgroundColor: BLACK_COLOR_CODE,
    width: 20,
    height: 20,
  },
});
export default Styles;
