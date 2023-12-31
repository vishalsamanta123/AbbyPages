import { StyleSheet, Dimensions, Platform } from "react-native";
import {
  FONT_FAMILY_REGULAR,
  YELLOW_COLOR_CODE,
  WHITE_COLOR_CODE,
  BLACK_COLOR_CODE,
  FONT_FAMILY_BOLD,
  GREY_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
} from "../../../../Utils/Constant";

const { width, height } = Dimensions.get("window");
const Styles = StyleSheet.create({
  inputconmn: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 0,
    height: 60,
    backgroundColor: YELLOW_COLOR_CODE,
    justifyContent: "space-around",
  },
  inputconsmall: {
    backgroundColor: WHITE_COLOR_CODE,
    height: 40,
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
    borderRadius: 5,
  },
  searchInput: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
    width: "90%",
  },
  filtericonCon: {
    backgroundColor: "#a48400",
    height: 39,
    width: "12%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  nameTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    fontSize: 14,
    width: "95%",
  },
  finalPriceTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: YELLOW_COLOR_CODE,
    fontSize: 14,
  },
  cutPriceTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: YELLOW_COLOR_CODE,
    textDecorationLine: "line-through",
    textDecorationColor: BLACK_COLOR_CODE,
  },
  text: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
  },
  spinnerVw: {
    backgroundColor: YELLOW_COLOR_CODE,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },
  spinnerInput: {
    backgroundColor: "transparent",
    fontSize: 24,
    top: Platform.OS === "ios" ? 3 : 10,
    paddingTop: 0,
  },
  addItemBttn: {
    height: 28,
    width: 32,
    paddingTop: 0,
    top: -2,
    backgroundColor: "transparent",
  },
  addBttn: {
    padding: 0,
    paddingVertical: 8,
    width: "100%",
    marginVertical: 5,
  },
  addBttnTxt: {
    fontSize: 14,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
  },
  AddBtnTxt: {
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
  },
  productimg: {
    width: "100%",
    height: Dimensions.get("window").height / 5,
    backgroundColor: WHITE_COLOR_CODE,
  },
  flatlistcon: {
    // height: Dimensions.get('window').height / 2,
    height: Dimensions.get("window").height / 2.7,
    width: Dimensions.get("window").width / 2,
    backgroundColor: "#f2f2f2",
    padding: 10,
    flex: 1,
    paddingBottom: 5,
    paddingTop: 15,
  },
  AddBtnTouchable: {
    backgroundColor: YELLOW_COLOR_CODE,
    width: "100%",
    marginVertical: 5,
    height: 30,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  headerVw: {
    paddingVertical: 16,
    flexDirection: "row",
    backgroundColor: YELLOW_COLOR_CODE,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 45 : 0,
  },
  headerArrow: {
    // justifyContent: "center",
    // alignItems: "flex-start",
  },
  headerViewMidle: {
    // flex: 1,
    alignItems: "center",
  },
  headerMiddleTxt: {
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 18,
  },
  resetVw: {
    paddingHorizontal: 10,
    top: 5,
  },
  resetTxt: {
    fontSize: 16,
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_BOLD,
  },
  filterImgeView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  filterVw: {
    flexGrow: 1,
    paddingHorizontal: 18,
  },
  typesTxt: {
    fontSize: 17,
    color: LIGHT_BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_BOLD,
    marginLeft: 5,
    marginTop: 12,
    marginBottom: 5,
  },
  containerVws: {
    elevation: 2,
    backgroundColor: WHITE_COLOR_CODE,
    borderRadius: 10,
  },
  selectedVw: {
    height: 2.8,
    backgroundColor: YELLOW_COLOR_CODE,
  },
  container: {
    height: 50,
    borderColor: GREY_COLOR_CODE,
    borderTopWidth: 0,
    borderWidth: 1,
    borderRadius: 8,
  },
  pickerVw: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 17,
    paddingLeft: 8,
    // height: Platform.OS === "ios" ? 50 : 0,
  },
  colorVw: {
    paddingVertical: 5,
    marginVertical: 2,
  },
  sortingCon: {
    flexDirection: "row",
    flexWrap: "wrap",
    elevation: 2,
    backgroundColor: WHITE_COLOR_CODE,
    borderRadius: 10,
    paddingVertical: 10,
  },
  sortingVw: {
    paddingVertical: 6,
  },
  sortingText: {
    fontSize: 14,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  catgCon: {
    flexDirection: "row",
    flexWrap: "wrap",
    elevation: 2,
    backgroundColor: WHITE_COLOR_CODE,
    borderRadius: 10,
    paddingVertical: 10,
  },
  catgVw: {
    width: "32%",
    marginHorizontal: 5,
  },
  catgItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  catgText: {
    fontSize: 18,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  subCategoryVw: {
    height: 48,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: GREY_COLOR_CODE,
    justifyContent: "center",
    borderRadius: 8,
  },
  subCategoryTxt: {
    paddingLeft: 10,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
    // height: Platform.OS === "ios" ? 60 : 0,
  },
  selecteTxt: {
    marginVertical: 8,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    fontSize: 16,
  },
  minMaxVw: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    bottom: 8,
  },
  minMaxTxt: {
    fontSize: 14,
    color: YELLOW_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  emptyVw: {
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyTxt: {
    fontSize: 20,
    color: LIGHT_BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
});
export default Styles;
