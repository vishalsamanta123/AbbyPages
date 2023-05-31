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
    justifyContent: "center",
  },
  boxesVw: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  boxesTxt: {
    fontSize: FONT_SIZE.normal,
    color: COLORS.RGBA,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  subTxt: {
    fontSize: FONT_SIZE.normal,
    color: COLORS.RGBA,
    fontFamily: FONT_FAMILY.REGULAR,
    textAlign: "center",
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
  },
  smallTxt: {
    fontSize: FONT_SIZE.small,
    color: COLORS.RGBA,
    fontFamily: FONT_FAMILY.REGULAR,
    alignSelf: "center",
    marginBottom: 20,
    width: "85%",
  },
  suggstTxt: {
    fontSize: FONT_SIZE.smallL,
    color: COLORS.RGBA,
    fontFamily: FONT_FAMILY.REGULAR,
    marginBottom: 8,
  },
});

export default styles;
