import { StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  GREY_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_BOLD,
  BLACK_COLOR_CODE,
} from "../../../../Utils/Constant";

const Styles = StyleSheet.create({
  addressVw: {
    textInputContainer: {
      backgroundColor: "rgba(0,0,0,0)",
      height: 70,
      margin: 10,
      marginLeft: 17,
      marginRight: 17,
      borderColor: "#d8d8d8",
      borderWidth: 1,
      borderRadius: 8,
      alignItems: "center",
    },
    textInput: {
      fontSize: 16,
      color: BLACK_COLOR_CODE,
      fontFamily: FONT_FAMILY_REGULAR,
    },
    listView: {
      marginLeft: 17,
      marginRight: 17,
      backgroundColor: WHITE_COLOR_CODE,
    },
  },
  SaveBtnTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
  },
  CancelBtnTxt: {
    fontFamily: FONT_FAMILY_BOLD,
    color: WHITE_COLOR_CODE,
  },
  CancelBtnStyle: {
    marginTop: 10,
    backgroundColor: GREY_COLOR_CODE,
    borderWidth: 0.5,
  },
});
export default Styles;
