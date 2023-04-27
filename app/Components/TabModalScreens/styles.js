import { StyleSheet } from "react-native";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../Utils/Constant";

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    backfaceVisibility: "visible",
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    paddingVertical: 5,
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  plusVw: {
    position: "absolute",
    bottom: 30,
    backgroundColor: COLORS.WHITE,
    borderRadius: 100,
    alignSelf: "center",
    padding: 5,
    paddingHorizontal: 8,
    borderWidth: Constants.normalBW,
  },
  tapVws: {
    alignItems: "center",
    flex: 1,
  },
  leftContainers: {
    marginRight: 45,
  },
  rightContainers: {
    marginLeft: 26,
  },
  iconStyleVw: {
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Constants.Ios ? 10 : 1,
    paddingTop: 6,
  },
  iconActiveVw: {
    borderRadius: 100,
    backgroundColor: COLORS.YELLOW,
    padding: 5,
  },
  iconInActiveVw: {
    borderRadius: 100,
    padding: 6,
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
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 55,
    height: Constants.windowHeight,
    width: Constants.windowWidth,
    backgroundColor: "rgba(0,0,0,0.1)",
    flex: 1,
  },
  popupVw: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: 10,
    width: 200,
    borderRadius: 20,
  },
  subCatVw: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.BORDER_LINE,
    borderBottomWidth: Constants.normalBW,
    paddingVertical: 8,
  },
  subCatTxt: {
    fontSize: 15,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    textAlign: "center",
  },
});

export default styles;
