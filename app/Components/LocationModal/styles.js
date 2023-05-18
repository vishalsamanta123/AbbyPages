import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../Utils/Constant";

const styles = StyleSheet.create({
  mapView: {
    flex: 4,
  },
  sliderView: {
    flex: 2,
  },
  headingView: {
    margin: 10
  },
  headingTxt: {
    fontFamily: FONT_FAMILY.NORMAL_BOLD,
    fontSize: FONT_SIZE.medium,
    color: COLORS.BLACK,
  },
  descTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.small,
    color: COLORS.BLACK,
  },
  catgSearchVw: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.LIGHT_COMMON,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default styles;
