import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../Utils/Constant";

const style = StyleSheet.create({
  mainCont: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  buttonTxt: {
    textAlign: "center",
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.normal,
    bottom: 1.5,
  },
});
export default style;
