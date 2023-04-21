import { StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  BLUE_COLOR_CODE,
  FONT_FAMILY_BOLD,
  SMALL_TEXT_COLOR_CODE,
  GREY_COLOR_CODE,
  IOS,
  LIGHT_WHITE_COLOR,
} from "../../../../Utils/Constant";

const Styles = StyleSheet.create({
  mainVw: {
    flex: 1,
  },
  backgroundImgVw: {
    flex: 2,
    backgroundColor: YELLOW_COLOR_CODE,
    paddingVertical: 70,
  },
  imgInnerVw: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  straightVw: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    width: "70%",
    justifyContent: "space-between",
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
  boxesVw: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 6,
    justifyContent: "center",
  },
  containersVw: {
    marginTop: 20,
    marginVertical: 4,
    marginHorizontal: 3,
    borderColor: GREY_COLOR_CODE,
  },
  titlesTxt: {
    //on Dashboard and ByCategory
    fontSize: 22,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    marginTop: 12,
    marginLeft: 13,
  },
  activityConVw: {
    marginHorizontal: 6,
    marginTop: 3,
  },
  activityCon: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 10,
    marginVertical: 12,
    backgroundColor: WHITE_COLOR_CODE,
    elevation: 5,
    borderColor: LINE_COMMON_COLOR_CODE,
    marginHorizontal: 10,
  },
  rowVw: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  activityProfileVw: {
    width: 48,
    height: 48,
    marginLeft: 12,
    borderRadius: 50,
  },
  textVw: {
    marginLeft: 20,
  },
  activityNameTxt: {
    fontSize: 20,
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_BLACK_COLOR_CODE,
  },
  activityRvwTxt: {
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
    color: SMALL_TEXT_COLOR_CODE,
  },
  activityBnnrVw: {
    height: 120,
    width: "100%",
    marginTop: 20,
    marginHorizontal: 5,
    marginBottom: 12,
  },
  photosVw: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  activityMainTxt: {
    fontSize: 16,
    fontFamily: FONT_FAMILY_BOLD,
    color: BLUE_COLOR_CODE,
    marginTop: 8,
    paddingHorizontal: 14,
  },
  activityCmntTxt: {
    fontSize: 16,
    fontFamily: FONT_FAMILY_BOLD,
    color: SMALL_TEXT_COLOR_CODE,
    paddingHorizontal: 14,
  },
  seeAllTxt: {
    fontSize: 16,
    fontFamily: FONT_FAMILY_BOLD,
    color: BLUE_COLOR_CODE,
    marginLeft: 16,
    marginTop: 5,
  },
  seeMoreBttn: {
    backgroundColor: LIGHT_WHITE_COLOR,
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 10,
  },
  seeMoreBttnTxt: {
    fontSize: 17,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  posterVw: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 4,
    borderColor: BLACK_COLOR_CODE,
    paddingVertical: 5,
  },
  posterTitleTxt: {
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    marginTop: 5,
    marginLeft: 5,
  },
  posterTxt: {
    fontSize: 14,
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_BLACK_COLOR_CODE,
    marginLeft: 5,
  },
  dotActiveVw: {
    borderRadius: 100,
    backgroundColor: YELLOW_COLOR_CODE,
    width: 16,
    height: 16,
  },
  dotInActiveVw: {
    borderRadius: 100,
    backgroundColor: BLACK_COLOR_CODE,
    width: 20,
    height: 20,
  },
  paginationWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 5,
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: BLACK_COLOR_CODE,
    marginLeft: 10,
  },
  moreServiceVw: {
    margin: 8,
    backgroundColor: LINE_COMMON_COLOR_CODE,
    borderRadius: 10,
    padding: 4,
  },
  searchModal: {
    flexGrow: 1,
    backgroundColor: WHITE_COLOR_CODE,
  },
  ctgTopHeader: {
    flex: 1,
    top: 10,
    marginLeft: 8,
  },
  searchTxt: {
    fontSize: 22,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    textAlign: "center",
  },
  crossVw: {
    paddingRight: 8,
    marginTop: 2,
  },
  searchVw: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
  catgSearchVw: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: LINE_COMMON_COLOR_CODE,
    borderRadius: 10,
  },
  catgSearchInput: {
    height: 54,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
    color: GREY_COLOR_CODE,
    width: "80%",
  },
  searchButtonVw: {
    borderRadius: 20,
    marginHorizontal: 0,
    width: "100%",
    marginVertical: 8,
  },
  categoriesVw: {
    marginHorizontal: 34,
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
export default Styles;
