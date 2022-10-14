import { Platform, StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  GREY_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  BLACK_COLOR_CODE,
  LIGHT_WHITE_COLOR,
  LIGHT_BLACK_COLOR_CODE,
  BLUE_COLOR_CODE,
  LIGHT_GREY_COLOR_CODE,
  LIGHT_GREEN_COLOR_CODE,
} from "../../../Utils/Constant";
const Styles = StyleSheet.create({
  LocatnSrchCntain: {
    flex: 1,
    backgroundColor: YELLOW_COLOR_CODE,
    paddingBottom: 15,
  },
  straightVw: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
  topVwsCon: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "rgba(50, 50, 50, 0.8)",
    borderRadius: 10,
  },
  topVwsTxt: {
    fontSize: 16,
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  TextInputView: {
    alignSelf: "center",
    width: "90%",
    marginTop: 10,
  },
  TextInputStyle: {
    backgroundColor: WHITE_COLOR_CODE,
    fontSize: 16,
    paddingLeft: 40,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
  },
  addressVw: {
    textInputContainer: {
      backgroundColor: WHITE_COLOR_CODE,
      fontSize: 16,
      paddingLeft: 30,
      fontFamily: FONT_FAMILY_REGULAR,
    },
    textInput: {
      fontFamily: FONT_FAMILY_REGULAR,
      fontSize: 16,
      color: BLACK_COLOR_CODE,
      top: 4,
    },
    listView: {
      backgroundColor: WHITE_COLOR_CODE,
    },
  },
  TextInputImge: {
    position: "absolute",
    zIndex: 1,
    marginTop: 15,
    marginLeft: 10,
    width: 22,
    height: 20,
  },
  SearchTxtStyle: {
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  SearchBtnStyle: {
    backgroundColor: "rgba(50, 50, 50, 0.8)",
    padding: 14,
    borderRadius: 4,
    marginVertical: 10,
  },
  OptionsConatin: {
    flex: 3.2,
    backgroundColor: WHITE_COLOR_CODE,
  },
  MainOptinsView: {
    flexDirection: "row",
    borderBottomWidth: 0.9,
    paddingLeft: 16,
    borderBottomColor: LINE_COMMON_COLOR_CODE,
    backgroundColor: WHITE_COLOR_CODE,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  rowVw: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 3,
  },
  OptnsImgContain: {
    alignItems: "center",
    paddingRight: 15,
  },
  OptnsMainText: {
    fontSize: 19,
    color: LIGHT_BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  OptnsMainImg: {
    width: 20,
    height: 20,
    tintColor: LIGHT_BLACK_COLOR_CODE,
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  modalView: {
    backgroundColor: WHITE_COLOR_CODE,
    borderRadius: 10,
    borderWidth: 0.5,
    width: "100%",
    height: "100%",
    paddingTop: Platform.OS === "ios" ? 30 : 20,
  },
  TouchableFlse: {
    position: "absolute",
    right: 0,
    marginRight: 10,
    top: Platform.OS === "ios" ? 45 : 10,
    zIndex: 1,
  },
  TxtInptStyle: {
    borderBottomWidth: 0.5,
    borderColor: GREY_COLOR_CODE,
    fontSize: 17,
    paddingLeft: 15,
    color: GREY_COLOR_CODE,
    paddingVertical: Platform.OS === "ios" ? 16 : 0,
  },
  MainCntrySlctTouchble: {
    flex: 5,
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "lightgrey",
  },
  otherConVw: {
    backgroundColor: "#f2f2f2",
    marginHorizontal: 8,
    marginVertical: 5,
    borderRadius: 10,
    borderTopLeftRadius: 10,
  },
  titlesTxt: {
    fontSize: 20,
    paddingLeft: 12,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    marginTop: 12,
  },
  moreItemsVw: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginHorizontal: 6,
  },
  moreItemsCon: {
    width: "46%",
    paddingHorizontal: 5,
    borderWidth: 0.8,
    borderColor: GREY_COLOR_CODE,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  moreItemsImgs: {
    width: "100%",
    height: 80,
    resizeMode: "stretch",
    marginTop: 2,
  },
  directoryTypTxt: {
    fontSize: 16,
    marginHorizontal: 5,
    marginVertical: 2,
    color: BLACK_COLOR_CODE,
  },
  smallSizeImg: {
    width: 32,
    height: 32,
    marginRight: 8,
    resizeMode: "cover",
    top: 3,
  },
  moreItemsTxtVw: {
    paddingLeft: 6,
    marginTop: 3,
  },
  moreItemsTxt: {
    fontSize: 17,
    fontFamily: FONT_FAMILY_REGULAR,
    width: "70%",
    marginTop: 4,
    color: BLACK_COLOR_CODE,
  },
  smallSizeTxt: {
    fontSize: 16,
    color: LIGHT_BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    marginTop: 8,
    alignSelf: "center",
    paddingLeft: 5,
  },
  otherTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLUE_COLOR_CODE,
    fontSize: 18,
    alignSelf: "center",
    marginVertical: 12,
  },
  smallVw: {
    backgroundColor: LIGHT_GREEN_COLOR_CODE,
    paddingHorizontal: 5,
    borderRadius: 6,
    marginLeft: 4,
    paddingVertical: 2,
  },
  ratingTxt: {
    fontSize: 14,
    fontFamily: FONT_FAMILY_REGULAR,
    marginLeft: 5,
  },
});
export default Styles;
