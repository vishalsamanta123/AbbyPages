import { StyleSheet, Dimensions } from "react-native";
import {
  FONT_FAMILY_REGULAR,
  YELLOW_COLOR_CODE,
  WHITE_COLOR_CODE,
  BLACK_COLOR_CODE,
  FONT_FAMILY_BOLD,
  GREY_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
} from "../../../Utils/Constant";

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
  filtericonCon: {
    backgroundColor: "#a48400",
    height: 39,
    width: "12%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
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
  headerArrow: {
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 10,
  },
  headerViewMidle: {
    flex: 1,
    alignItems: "center",
    paddingRight: 20,
  },
  headerMiddleTxt: {
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 18,
  },
  filterImgeView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  filterVw: {
    flexGrow: 1,
    paddingHorizontal: 20,
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
    backgroundColor: WHITE_COLOR_CODE,
    marginLeft: 8,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 17,
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
    color: YELLOW_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
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
});
export default Styles;
