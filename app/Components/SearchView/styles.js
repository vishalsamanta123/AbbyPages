import { StyleSheet } from "react-native";
import {
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  GREY_COLOR_CODE,
  LIGHT_GREY_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../Utils/Constant";

const styles = StyleSheet.create({
  searchVw: {
    marginHorizontal: 16,
  },
  catgSearchVw: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: WHITE_COLOR_CODE,
    borderRadius: 10,
    marginTop: 10,
  },
  catgSearchInput: {
    height: 48,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
    color: GREY_COLOR_CODE,
    width: "80%",
  },
  searchButtonVw: {
    borderRadius: 10,
    marginHorizontal: 0,
    marginTop: 12,
  },
  categoriesVw: {
    marginHorizontal: 2,
    backgroundColor: WHITE_COLOR_CODE,
    elevation: 10,
    marginVertical: 3,
  },
  searchHeadTxt: {
    fontSize: 18,
    fontFamily: FONT_FAMILY_REGULAR,
    color: YELLOW_COLOR_CODE,
    marginLeft: 10,
    marginVertical: 5,
  },
  categoryVw: {
    marginVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  categoryTxt: {
    fontSize: 18,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    marginLeft: 10,
  },
  categorySmallTxt: {
    fontSize: 12,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    marginLeft: 10,
    marginRight: 50,
  },
  categoryImg: {
    width: 50,
    height: 40,
    borderRadius: 12,
  },
  searchView: {
    position: "absolute",
    bottom: -20,
    width: "100%",
  },
  inputStyle: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: WHITE_COLOR_CODE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  searchText: {
    fontSize: 18,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
  },
});
export default styles;
