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
    padding: 5,
  },
  addItemBttn: {
    width: 100,
    paddingTop: 0,
    paddingHorizontal: 5,
    borderRadius: 50,
    backgroundColor: COLORS.YELLOW,
  },
});

export default styles;
