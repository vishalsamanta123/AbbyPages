import { StyleSheet } from "react-native";
import {
  YELLOW_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "./Constant";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR_CODE,
  },
  header: {
    flex: 0.5,
    flexDirection: "row",
    backgroundColor: YELLOW_COLOR_CODE,
  },
  body: {
    flex: 5.5,
  },
  text: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
  },
});
export default Styles;
