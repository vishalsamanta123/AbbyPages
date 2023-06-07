import { StyleSheet } from "react-native";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../Utils/Constant";

const styles = StyleSheet.create({
  tapVws: {
    alignItems: "center",
  },
  iconStyleVw: {
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Constants.Ios ? 10 : 1,
    paddingTop: 6,
  },
  iconTxt: {
    fontSize: FONT_SIZE.verysmall,
    fontFamily: FONT_FAMILY.REGULAR,
    textAlign: "center",
  },
  profileVw: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: COLORS.YELLOW,
    borderRadius: 100,
  },
  customPopupVw: {
    position: "absolute",
    zIndex: 1,
    borderRadius: 21,
    padding: 2,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  popupVw: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: 10,
    borderRadius: 20,
  },
  subCatVw: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.BORDER_LINE,
    borderBottomWidth: Constants.normalBW,
    paddingVertical: 8,
    minWidth: 180,
  },
  subCatTxt: {
    fontSize: 15,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    textAlign: "center",
  },
});

export default styles;
