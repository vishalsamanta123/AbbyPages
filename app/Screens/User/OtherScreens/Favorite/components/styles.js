import { Constants } from "@stripe/stripe-react-native";
import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
  topCont: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderBottomColor: COLORS.BORDER_LINE,
    borderBottomWidth: Constants.normalBW,
  },
});
export default styles;
