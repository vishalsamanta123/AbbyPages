import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY } from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  txtipt: {
    height: 65,
    borderColor: COLORS.BORDER_LINE,
    borderWidth: 0.8,
    width: "90%",
    alignSelf: "center",
    borderRadius: 12,
  },
  txtipttxt: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.REGULAR,
    marginTop: 19,
    paddingLeft: 20,
    marginLeft: 4,
  },
  body: {
    flex: 5.2,
    marginTop: 20,
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 10,
  },
  sgnupviw: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: "15%",
  },
  sgntxt: {
    fontSize: 20,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  CancelBtnTxt: {
    fontSize: 20,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.REGULAR,
    textAlign: "center",
  },
  CancelBtn: {
    backgroundColor: COLORS.GREY,
    marginTop: 10,
  },
});
export default styles;
