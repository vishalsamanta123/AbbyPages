import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../../../Utils/Constant";

const Styles = StyleSheet.create({
  mainVw: {
    flex: 1,
  },
  backgroundImgVw: {
    flex: 2,
    backgroundColor: COLORS.YELLOW,
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
    fontSize: FONT_SIZE.medium,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  boxesVw: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 6,
    justifyContent: "center",
  },
  containersVw: {
    marginTop: 10,
    marginVertical: 4,
    marginHorizontal: 3,
  },
  titlesTxt: {
    //on Dashboard and ByCategory
    fontSize: FONT_SIZE.largeM,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
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
    backgroundColor: COLORS.WHITE,
    elevation: 5,
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
    fontSize: FONT_SIZE.large,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_BLACK,
  },
  activityRvwTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.SMALL_TEXT,
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
    height: 150,
    flexGrow: 1,
  },
  activityMainTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.BOLD,
    color: COLORS.BLUE,
    marginTop: 8,
    paddingHorizontal: 14,
  },
  activityCmntTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.BOLD,
    color: COLORS.SMALL_TEXT,
    paddingHorizontal: 14,
  },
  seeAllTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.BOLD,
    color: COLORS.BLUE,
    marginLeft: 16,
    marginTop: 5,
  },
  seeMoreBttn: {
    alignSelf: "center",
    paddingVertical: 5,
  },
  seeMoreBttnTxt: {
    fontSize: FONT_SIZE.medium,
    color: COLORS.BLUE,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  posterVw: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 4,
    borderColor: COLORS.BLACK,
    paddingVertical: 5,
  },
  posterTitleTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
    marginTop: 5,
    marginLeft: 5,
  },
  posterTxt: {
    fontSize: FONT_SIZE.smallL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_BLACK,
    marginLeft: 5,
  },
  dotActiveVw: {
    borderRadius: 100,
    backgroundColor: COLORS.BLACK,
    width: 12,
    height: 12,
  },
  dotInActiveVw: {
    borderRadius: 100,
    backgroundColor: COLORS.BLACK,
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
    backgroundColor: COLORS.BLACK,
    marginLeft: 10,
  },
  moreServiceVw: {
    margin: 8,
    backgroundColor: COLORS.COMMON,
    borderRadius: 10,
    padding: 4,
  },
  searchModal: {
    flexGrow: 1,
    backgroundColor: COLORS.WHITE,
  },
  ctgTopHeader: {
    flex: 1,
    top: 10,
    marginLeft: 8,
  },
  searchTxt: {
    fontSize: FONT_SIZE.largeM,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
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
    backgroundColor: COLORS.COMMON,
    borderRadius: 10,
  },
  catgSearchInput: {
    height: 54,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.medium,
    color: COLORS.GREY,
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
    backgroundColor: COLORS.WHITE,
    elevation: 10,
    marginVertical: 3,
  },
  searchHeadTxt: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.YELLOW,
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
    fontSize: FONT_SIZE.mediumL,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    marginLeft: 10,
  },
  categorySmallTxt: {
    fontSize: FONT_SIZE.small,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    marginLeft: 10,
    marginRight: 50,
  },
  categoryImg: {
    width: 50,
    height: 40,
    borderRadius: 12,
  },
  supportTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.mediumL,
    color: COLORS.WHITE
  },
});
export default Styles;
