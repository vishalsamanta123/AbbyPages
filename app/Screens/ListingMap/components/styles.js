import { StyleSheet } from "react-native";
import {
  YELLOW_COLOR_CODE,
  WHITE_COLOR_CODE,
  FONT_FAMILY_REGULAR,
} from "../../../Utils/Constant";
const Styles = StyleSheet.create({
  header: {
    // flex: 1,
    paddingVertical: 16,
    flexDirection: "row",
    backgroundColor: YELLOW_COLOR_CODE,
  },
  headerBackBtnCon: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  headerMiddleCon: {
    flex: 4.4,
    justifyContent: "center",
  },
  iptCon: {
    borderRadius: 5,
    flexDirection: "row",
    backgroundColor: WHITE_COLOR_CODE,
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
});
export default Styles;
