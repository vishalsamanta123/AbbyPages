import { StyleSheet } from "react-native";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../../../Utils/Constant";

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
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
    marginTop: 12,
    marginLeft: 13,
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
    alignItems: "center",
  },
  moreServiceVw: {
    margin: 4,
    backgroundColor: COLORS.COMMON,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  supportTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.mediumL,
    color: COLORS.WHITE,
  },
  showMoreTouch: {
    backgroundColor: COLORS.BORDER_LINE,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    paddingVertical: 5,
    borderRadius: 30,
  },
  showMoreTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.mediumL,
    marginRight: 10,
  },

  activityConVw: {
    marginTop: 3,
  },
  activityCon: {
    flex: 1,
    borderRadius: 10,
    marginVertical: 8,
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  rowVw: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 5,
  },
  activityProfileVw: {
    width: 48,
    height: 48,
    marginLeft: 5,
    borderRadius: 50,
  },
  textVw: {
    marginLeft: 12,
  },
  activityNameTxt: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.NORMAL_BOLD,
    color: COLORS.LIGHT_BLACK,
  },
  activityTitlTxt: {
    fontSize: FONT_SIZE.normal,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.RGBA,
    bottom: 4,
  },
  mainContVw: {
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  mainHeadTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.NORMAL_BOLD,
    color: COLORS.YELLOW,
    textDecorationLine: "underline",
    textTransform: "capitalize",
  },
  photosVw: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  activityBnnrVw: {
    height: 120,
    width: "100%",
    marginTop: 5,
    borderWidth: Constants.normalBW,
    borderColor: COLORS.COMMON2,
  },
  seeMoreVw: {
    alignSelf: "flex-end",
    marginHorizontal: 10,
    marginBottom: 10,
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
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_BLACK,
    marginLeft: 4,
  },
  extraTxt: {
    fontSize: FONT_SIZE.normal,
    color: COLORS.BLUE,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  activitySubTxt: {
    fontSize: FONT_SIZE.normal,
    color: COLORS.RGBA,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  activityLightTxt: {
    fontSize: FONT_SIZE.normal,
    color: COLORS.RGBA1,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  likeSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  likeView: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRightWidth: Constants.standardBW,
    borderColor: COLORS.BORDER_LINE,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  likeSectionText: {
    color: COLORS.RGBA,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.normal,
  },
});
export default Styles;
