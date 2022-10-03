import { Platform, StyleSheet } from "react-native";
import {
  YELLOW_COLOR_CODE,
  WHITE_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  BLACK_COLOR_CODE,
} from "../../../Utils/Constant";
const Styles = StyleSheet.create({
  header: {
    // flex: 1,
    paddingVertical: Platform.OS === "ios" ? 24 : 16,
    flexDirection: "row",
    backgroundColor: YELLOW_COLOR_CODE,
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 12 : 0,
  },
  headerBackBtnCon: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  headerMiddleCon: {
    flex: 4.4,
    justifyContent: "center",
  },
  iptCon: {
    borderRadius: 5,
    flexDirection: "row",
    backgroundColor: WHITE_COLOR_CODE,
    paddingVertical: 12,
  },
  searchIconCon: {
    justifyContent: "center",
    padding: 5,
  },
  iptStyles: {
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
    width: "85%",
  },
  openRestoVw: {
    height: 80,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  openRestoTxt: {
    fontSize: 18,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
});
export default Styles;
