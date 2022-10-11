import { Platform, StyleSheet } from "react-native";
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
    paddingVertical: 16,
    flexDirection: "row",
    backgroundColor: YELLOW_COLOR_CODE,
    alignItems: "center",
  },
  body: {
    flex: 5.5,
  },
  text: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
  },
  scrollCon: {
    flexGrow: 1,
  },
});
export default Styles;
