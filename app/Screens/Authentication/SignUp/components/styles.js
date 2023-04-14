import { StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  GREY_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  GREEN_COLOR_CODE,
} from "../../../../Utils/Constant";
const Styles = StyleSheet.create({
  LoginBtnTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
  },
  FacebookBtnTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: WHITE_COLOR_CODE,
  },
  WelcomeCntainer: {
    flex: 4,
  },
  MainConatinWelcome: {
    padding: 20,
    paddingTop: 20,
    flex: 2.2,
    justifyContent: "flex-end",
  },
  WelcomeTxt: {
    fontSize: 30,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  SignInContinue: {
    fontSize: 22,
    color: GREY_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  InputContainer: {
    flex: 3.8,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  messageVw: {
    bottom: 12,
    marginHorizontal: 20,
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  messageTxt: {
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
    color: GREEN_COLOR_CODE,
  },
  addressVw: {
    padding: 10,
    borderColor: "#d8d8d8",
    borderWidth: 1,
    borderRadius: 12,
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  ButtonContainer: {
    flex: 2,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center",
  },
  FacebookBtnStyle: {
    backgroundColor: "#1877f2",
    marginTop: 10,
  },
  GoogleBtnStyle: {
    marginTop: 10,
    backgroundColor: WHITE_COLOR_CODE,
    borderWidth: 0.5,
  },
});
export default Styles;
