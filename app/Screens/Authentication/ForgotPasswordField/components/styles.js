import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import {
  FONT_FAMILY_REGULAR,
  WHITE_COLOR_CODE,
  BLACK_COLOR_CODE,
  YELLOW_COLOR_CODE,
  SMALL_TEXT_COLOR,
} from "../../../../Utils/Constant";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgvwe: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flex: 5.2,
    backgroundColor: "#ffffff",
    marginVertical: 5,
  },
  hdion: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  txtpasswrdipttxt: {
    fontSize: 18,
    width: "80%",
    fontFamily: FONT_FAMILY_REGULAR,
    marginTop: 19,
    marginLeft: 4,
    paddingLeft: 20,
  },
  LinearGradient: {
    height: 60,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
    borderRadius: 12,
  },
  logtxt: {
    fontSize: 20,
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    textAlign: "center",
  },
  retouch: {
    marginTop: "8%",
    flexDirection: "row",
    alignSelf: "center",
  },
  reTXT: {
    color: YELLOW_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 15,
    marginLeft: 5,
  },
  didnttxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: SMALL_TEXT_COLOR,
  },
});
export default styles;
