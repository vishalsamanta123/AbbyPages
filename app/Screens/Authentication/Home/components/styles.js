import { StyleSheet } from "react-native";
import {
  GREY_COLOR_CODE,
  WHITE_COLOR_CODE,
  FONT_FAMILY_REGULAR,
} from "../../../../Utils/Constant";
const Styles = StyleSheet.create({
  MainImageView: {
    flex: 4,
    alignItems: "center",
  },
  imagesVw: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5
  },
  MainLogoImge: {
    width: "65%",
    height: "20%",
  },
  MainContainImge: {
    width: 300,
    height: 300,
  },
  FooterContain: {
    flex: 1,
    justifyContent: "flex-end",
  },
  createAccntTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: WHITE_COLOR_CODE,
  },
  LoginBtnTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
  },
  signUpBtnStyle: {
    backgroundColor: GREY_COLOR_CODE,
    marginVertical: 5,
  },
});
export default Styles;
