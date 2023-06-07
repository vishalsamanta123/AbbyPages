import { StyleSheet } from "react-native";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
  containerVw: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  headTxt: {
    fontFamily: FONT_FAMILY.NORMAL_BOLD,
    color: COLORS.LIGHT_BLACK,
    fontSize: FONT_SIZE.large,
    textAlign: "center",
  },
  itemCon: {
    backgroundColor: COLORS.WHITE,
    marginVertical: 10,
    padding: 80,
    alignSelf: "center",
    elevation: 2,
    borderRadius: 10,
  },
});
export default styles;
