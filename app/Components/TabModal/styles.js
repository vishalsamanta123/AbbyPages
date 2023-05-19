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
    flex: 1,
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
    backgroundColor: COLORS.RGBA2,
    position: "absolute",
    zIndex: 1,
    bottom: 50,
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
