import { StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  BLACK_COLOR_CODE,
} from "../../../Utils/Constant";
const Styles = StyleSheet.create({
  startedbtntxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 20,
  },
  maintxtVwe: {
    paddingTop: "12%",
  },
  maintxt: {
    fontSize: 23,
    lineHeight: 30,
    fontFamily: FONT_FAMILY_REGULAR,
    textAlign: "center",
  },
  inputwvwe: {
    justifyContent: "center",
    paddingTop: 20,
  },
  locationVw: {
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
      backgroundColor: WHITE_COLOR_CODE,
      marginHorizontal: 10,
    },
  },
  dateVw: {
    backgroundColor: "rgba(0,0,0,0)",
    height: 70,
    margin: 10,
    marginLeft: 17,
    marginRight: 17,
    borderColor: "#d8d8d8",
    borderWidth: 1,
    borderRadius: 8,
    // alignItems: "center"
    justifyContent: "center",
    padding: 15,
  },
  footervwe: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: WHITE_COLOR_CODE,
    justifyContent: "center",
    marginBottom: 16,
  },
  boximgvwe: {
    flex: 0.5,
    flexDirection: "row",
  },
  imgvwe: {
    justifyContent: "center",
    paddingLeft: 20,
  },
  lstbtnvwe: {
    flex: 3,
    flexDirection: "row",
    paddingLeft: 10,
  },
  inputtexvwe: {
    flex: 4.5,
    backgroundColor: WHITE_COLOR_CODE,
  },
  btnvwe: {
    flex: 0.9,
    marginLeft: "10%",
  },
});
export default Styles;
