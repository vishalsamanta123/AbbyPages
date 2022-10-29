import { Platform, StyleSheet } from "react-native";
import {
  YELLOW_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
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
  editPencilVw: {
    backgroundColor: YELLOW_COLOR_CODE,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackDropDownImg: {
    width: 20,
    height: 20,
    tintColor: LIGHT_BLACK_COLOR_CODE
  },
  dotTxt: {
    fontSize: 10,
    bottom: 1,
    marginHorizontal: 5
  },
});
export default Styles;
