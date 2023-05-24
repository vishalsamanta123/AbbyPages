import { StyleSheet } from "react-native";
import {
  BLACK_COLOR_CODE,
  COLORS,
  FONT_FAMILY_REGULAR,
  FONT_SIZE,
  LIGHT_GREY_COLOR_CODE,
} from "../../../../../Utils/Constant";
const Styles = StyleSheet.create({
  EmailContainer: {
    paddingHorizontal: 15,
    flex: 1,
    paddingBottom: 20,
  },
  FlexViewContain: {
    flexDirection: "row",
    paddingTop: 15,
    alignItems: "center",
  },
  EmailNotifyTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 19,
  },
  AddLocationView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addLocationImg: {
    width: 42,
    height: 42,
    resizeMode: "contain",
  },
  emailContainerBox: {
    borderRadius: 10,
    borderWidth: 0.7,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 18,
    borderColor: COLORS.BORDER_LINE,
    flexDirection: "row",
  },
  ImageDelete: {
    margin: 5,
  },
  MainEmaliTXt: {
    fontSize: FONT_SIZE.smallL,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  PrimaryText: {
    color: LIGHT_GREY_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  addressOptionVw: {
    flexDirection: "row",
    position: "absolute",
    right: 10,
    bottom: -25,
  },
});
export default Styles;
