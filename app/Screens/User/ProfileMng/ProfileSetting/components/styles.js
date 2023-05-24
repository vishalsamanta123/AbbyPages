import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY } from "../../../../../Utils/Constant";

const Styles = StyleSheet.create({
  container: {
    height: 60,
    borderColor: "#d8d8d8",
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: "row",
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  textInput: {
    fontSize: 18,
    paddingLeft: 20,
    marginLeft: 4,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  CameraImgView: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },
  TextContainer: {
    flex: 4.5,
    justifyContent: "center",
  },
  AddPhotosTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 17,
    paddingLeft: 10,
  },
  BckArrowBack: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  MainContainer: {
    backgroundColor: COLORS.WHITE,
    paddingTop: 15,
    paddingBottom: 15,
  },
  LocationView: {
    paddingTop: 10,
  },
  LoctionTextStyle: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_GREY,
  },
  LocationNameTXt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 17,
  },
  AnyProblmTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_GREY,
    fontSize: 16,
    textAlign: "center",
  },
});
export default Styles;
