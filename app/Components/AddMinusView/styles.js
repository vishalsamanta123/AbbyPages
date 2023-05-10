import { StyleSheet } from "react-native";
import { COLORS, Constants } from "../../Utils/Constant";

const styles = StyleSheet.create({
  spinnerVw: {
    backgroundColor: COLORS.YELLOW,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerInput: {
    backgroundColor: COLORS.TRANSPARENT,
    fontSize: 20,
    top: Constants.Ios ? 0 : 8,
    paddingTop: 0,
  },
  addItemBttn: {
    height: 25,
    width: 25,
    paddingTop: 0,
    bottom: 2,
    backgroundColor: COLORS.TRANSPARENT,
    paddingHorizontal: 5,
  },
});

export default styles;
