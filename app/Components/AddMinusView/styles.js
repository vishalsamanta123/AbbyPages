import { StyleSheet } from "react-native";
import { COLORS, Constants } from "../../Utils/Constant";

const styles = StyleSheet.create({
  spinnerVw: {
    backgroundColor: COLORS.TRANSPARENT,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerInput: {
    backgroundColor: COLORS.TRANSPARENT,
    fontSize: 20,
    paddingTop: 5,
    borderWidth: Constants.normalBW,
    borderColor: COLORS.YELLOW,
    marginHorizontal: 6,
    borderRadius: 5,
    color: COLORS.BLACK,
  },
  addItemBttn: {
    width: 40,
    paddingTop: 0,
    backgroundColor: COLORS.YELLOW,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});

export default styles;
