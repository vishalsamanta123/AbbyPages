import { StyleSheet } from "react-native";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
  centerVw: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  centervwe: {
    flex: 1,
  },
  centerimgstye: {
    width: 180,
    height: 180,
  },
  centermntxt: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
    lineHeight: 24,
    textAlign: "center",
  },
  btnvwe: {
    marginHorizontal: 20,
    marginBottom: 12,
  },
  boxesCon: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  boxesVw: {
    borderWidth: Constants.normalBW,
    borderColor: COLORS.COMMON2,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: "center",
  },
  boxesTxt: {
    fontSize: FONT_SIZE.normal,
    color: COLORS.RGBA,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});

export default styles;
