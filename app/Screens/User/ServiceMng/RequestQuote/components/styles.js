import { StyleSheet } from "react-native";
import { FONT_FAMILY, FONT_SIZE } from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
  startedbtntxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.largeM,
  },
  centermanimg: {
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
  },
  centerimgstye: {
    width: 190,
    height: 190,
  },
  centervwe: {
    alignSelf: "center",
    paddingLeft: "10%",
    paddingRight: 10,
    flex: 2,
  },
  centermntxt: {
    fontSize: FONT_SIZE.mediumL,
    lineHeight: 30,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  btnvwe: {
    marginHorizontal: 20,
    marginBottom: 12,
  },
});

export default styles;
