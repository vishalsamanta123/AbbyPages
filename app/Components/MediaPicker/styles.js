import { StyleSheet } from "react-native";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../Utils/Constant";

const styles = StyleSheet.create({
  pickerContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  pickerModalCon: {
    backgroundColor: COLORS.THEME,
    paddingHorizontal: 10,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    paddingVertical: 10,
  },
  cancelModalVw: {
    position: "absolute",
    alignSelf: "center",
    top: -21,
    backgroundColor: COLORS.THEME,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 14,
    paddingVertical: 5,
  },
  straightVw: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 12,
    justifyContent: "space-around",
    marginTop: 5,
  },
  componentsVw: {
    alignItems: "center",
    borderWidth: Constants.normalBW,
    borderColor: COLORS.WHITE,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    width: "45%",
  },
  componentsTxt: {
    fontSize: FONT_SIZE.small,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    textAlign: "center",
  },
});

export default styles;
