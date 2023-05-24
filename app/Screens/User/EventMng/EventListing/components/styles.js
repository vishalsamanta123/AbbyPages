import { StyleSheet } from "react-native";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../../../../Utils/Constant";
const Styles = StyleSheet.create({
  containers: {
    marginTop: 8,
  },
  eventTitlesTxt: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
    marginTop: 12,
    marginLeft: 16,
  },
  seeEventsVw: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  bannervideoStyle: {
    height: 350,
  },
  videoBannerView: {},
  bannerView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    // opacity: 0.5
  },
  bannerHeading: {
    // fontSize: FONT_SIZE.veryLarge,
    // fontFamily: FONT_FAMILY.BOLD,
    // color: COLORS.WHITE,
    // marginBottom: 10,
    // textAlign: "center",
    fontSize: 24,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.BOLD,
    textAlign: "center",
    paddingHorizontal: 5,
  },
  bannerHeadingDesc: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.WHITE,
    textAlign: "center",
  },
  createbtn: {
    borderRadius: 30,
    marginTop: 10,
  },
  createBtnTxt: {
    color: COLORS.WHITE,
  },
  seeOnVw: {
    borderWidth: Constants.standardBW,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  seeOnTxt: {
    fontSize: FONT_SIZE.smallL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.YELLOW,
  },
  seeForImg: {
    width: 14,
    height: 14,
    marginLeft: 8,
    resizeMode: "contain",
    top: 2,
    tintColor: COLORS.SMALL_TEXT,
  },
  containerVw: {
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  eventImg: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },
  allTxtVw: {
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  nameTxt: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
  },
  straightVw: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginBottom: 7,
  },
  straightTxt: {
    fontSize: FONT_SIZE.small,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    maxWidth: 230,
  },
  straightImg: {
    width: 16,
    height: 16,
    resizeMode: "contain",
    marginRight: 5,
  },
  seeAllBttn: {
    marginBottom: 12,
    marginVertical: 8,
  },
  seeAllBttnTxt: {
    color: COLORS.BLACK,
    fontSize: FONT_SIZE.mediumL,
  },
  popularEventVw: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
    marginBottom: 10,
  },
  allEventsVw: {
    paddingHorizontal: 20,
  },
  lablestyle: {
    flexDirection: "row",
    marginTop: 15,
    paddingHorizontal: 5,
  },
  txtTimeCat: {
    fontSize: FONT_SIZE.medium,
    lineHeight: 18,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  timeDataImg: {
    transform: [{ rotate: "90deg" }],
    top: 3,
  },
  mnCon: {
    margin: 5,
    elevation: 2,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    width: "92%",
    alignSelf: "center",
    marginBottom: 5,
  },
  bannerimg: {
    width: "100%",
    height: 160,
    alignSelf: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  infobox: {
    flex: 1,
    padding: 20,
  },
  hdngtxt: {
    fontSize: FONT_SIZE.mediumL,
    lineHeight: 20,
    fontFamily: FONT_FAMILY.REGULAR,
    color: "#3a3838",
  },
  icon: {
    height: 17,
    width: 17,
    margin: 2,
    marginLeft: 0,
    marginRight: 5,
  },
  text: {
    color: COLORS.SMALL_TEXT,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  yellowtxt: {
    color: COLORS.YELLOW,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  intcon: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  minicon: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 2,
    paddingBottom: 2,
  },
  btncon: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.YELLOW,
    borderRadius: 8,
    marginBottom: 10,
    marginRight: 10,
  },
  buytckttxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    lineHeight: 16,
  },
  emptyEventVw: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 50,
  },
  emptyEventTxt: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_BLACK,
  },
  footerVw: {
    paddingHorizontal: 10,
  },
  footerTxt: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
    alignSelf: "flex-start",
    paddingVertical: 10,
  },
});
export default Styles;
