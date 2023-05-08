import { StyleSheet } from "react-native";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../Utils/Constant";

const styles = StyleSheet.create({
  rowCon: {
    flexDirection: "row",
    alignItems: "center",
  },
  columCon: {},
  container: {
    borderColor: COLORS.BORDER_LINE,
    borderWidth: Constants.normalBW,
    borderRadius: 16,
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  optionTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.medium,
    paddingLeft: 6,
    color: COLORS.LIGHT_GREY,
  },
});

export default styles;
