import { StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  SMALL_TEXT_COLOR_CODE,
  BLACK_COLOR_CODE,
} from "../../../Utils/Constant";
const Styles = StyleSheet.create({
  containers: {
    marginHorizontal: 18,
    marginTop: 8,
  },
  eventTitlesTxt: {
    fontSize: 20,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  seeAllTxt: {
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
    color: SMALL_TEXT_COLOR_CODE,
  },
  seeForTxt: {
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
    color: SMALL_TEXT_COLOR_CODE,
    marginLeft: 4,
  },
  seeForImg: {
    width: 16,
    height: 16,
    marginLeft: 8,
    resizeMode: "contain",
    top: 2,
  },
  containerVw: {
    paddingVertical: 10,
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
    fontSize: 20,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  straightVw: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },
  straightTxt: {
    fontSize: 12,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
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
    color: BLACK_COLOR_CODE,
    fontSize: 18,
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
    flexGrow: 1,
  },
  lablestyle: {
    flexDirection: "row",
    marginTop: 5,
    paddingHorizontal: 5,
  },
  txtTimeCat: {
    fontSize: 15,
    lineHeight: 18,
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  timeDataImg: {
    width: 16,
    height: 2,
    transform: [{ rotate: "90deg" }],
    marginTop: 8,
  },
  mnCon: {
    margin: 5,
    elevation: 2,
    backgroundColor: WHITE_COLOR_CODE,
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
    fontSize: 17,
    lineHeight: 20,
    fontFamily: FONT_FAMILY_REGULAR,
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
    color: SMALL_TEXT_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  yellowtxt: {
    color: YELLOW_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
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
    backgroundColor: YELLOW_COLOR_CODE,
    borderRadius: 8,
    marginBottom: 10,
    marginRight: 10,
  },
  buytckttxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    lineHeight: 16,
  },
});
export default Styles;
