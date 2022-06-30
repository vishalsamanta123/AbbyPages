import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import {
  FONT_FAMILY_REGULAR,
  BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
  GREY_COLOR_CODE,
} from "../../../../Utils/Constant";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR_CODE,
  },
  txtipt: {
    height: 65,
    borderColor: "#d8d8d8",
    borderWidth: 0.8,
    width: "90%",
    alignSelf: "center",
    borderRadius: 12,
  },
  txtipttxt: {
    fontSize: 18,
    fontFamily: FONT_FAMILY_REGULAR,
    marginTop: 19,
    paddingLeft: 20,
    marginLeft: 4,
  },
  body: {
    backgroundColor: WHITE_COLOR_CODE,
    flexGrow: 1,
  },
  sgnupviw: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: "15%",
  },
  sgntxt: {
    fontSize: 20,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  emailtxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 18,
    textAlign: "center",
    color: GREY_COLOR_CODE,
    lineHeight: 35,
    marginVertical: 5,
  },
  registxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 18,
    textAlign: "center",
    color: GREY_COLOR_CODE,
  },
  logtxt: {
    fontSize: 20,
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    textAlign: "center",
  },
  LinearGradient: {
    // bottom: 0,
    // padding: 25,
    // height: 60,
    // width: "90%",
    // alignSelf: "center",
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 16,
    borderRadius: 12,
  },
});
export default styles;
