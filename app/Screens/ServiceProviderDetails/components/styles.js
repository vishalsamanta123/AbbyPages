import { StyleSheet } from "react-native";
import {
  FONT_FAMILY_REGULAR,
  SMALL_TEXT_COLOR_CODE,
  LIGHT_GREY_COLOR_CODE,
  LIGHT_RED_COLOR_CODE,
  LIGHT_GREEN_COLOR_CODE,
  WHITE_COLOR_CODE,
  GREY_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  YELLOW_COLOR_CODE,
  BLACK_COLOR_CODE,
} from "../../../Utils/Constant";

const Styles = StyleSheet.create({
  alertBackground: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // If the mask is to be displayed in a semi-transparent state, it must be set here. The a in the reba controls the transparency, which is in the range of 0.0 to 1.0.
  },
  modalItem: {
    fontFamily: FONT_FAMILY_REGULAR,
    textAlign: "center",
  },
  alertBox: {
    width: 200,
    // height: 100,
    flexDirection: "row",
    backgroundColor: WHITE_COLOR_CODE,
  },
  profileModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  startedbtntxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 19,
  },
  RightImgeStyle: {
    width: 17,
    height: 15,
    top: 2,
    marginHorizontal: 2,
    // right: 4
  },
  mainfrsrvwe: {
    padding: 15,
    backgroundColor: WHITE_COLOR_CODE,
  },
  taichitxt: {
    fontSize: 22,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  addressvwe: {
    flexDirection: "row",
  },
  addresstxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: SMALL_TEXT_COLOR_CODE,
  },
  fourmanvwe: {
    flexDirection: "row",
    paddingTop: 8,
  },
  fivevwe: {
    borderColor: LIGHT_GREEN_COLOR_CODE,
    backgroundColor: LIGHT_GREEN_COLOR_CODE,
    borderWidth: 1,
    width: 38,
    height: 23,
    borderRadius: 3,
  },
  fivevwetxt: {
    textAlign: "center",
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  fourratingstxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_GREY_COLOR_CODE,
    fontSize: 14,
  },
  standinglinetxt: {
    color: GREY_COLOR_CODE,
  },
  closedtxt: {
    color: LIGHT_RED_COLOR_CODE,
  },
  timetxt: {
    color: LIGHT_GREY_COLOR_CODE,
  },
  centermainvwe: {
    borderColor: WHITE_COLOR_CODE,
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: WHITE_COLOR_CODE,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 0.5,
    paddingBottom: 10,
    paddingTop: 10,
  },
  addphotovwe: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 0.5,
    borderColor: LIGHT_GREY_COLOR_CODE,
  },
  sharephotovwe: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  addtxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_GREY_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 13,
    textAlign: "center",
  },
  coviduudatevew: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
  },
  coviduudatetxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 20,
    color: BLACK_COLOR_CODE,
  },
  editvwe: {
    flexDirection: "row",
    marginRight: 10,
    alignItems: "center",
  },
  edittxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: YELLOW_COLOR_CODE,
    fontSize: 15,
  },
  dinevwe: {},
  dinetxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    lineHeight: 20,
    fontSize: 12,
    color: SMALL_TEXT_COLOR_CODE,
    paddingTop: 5,
    paddingLeft: 10,
  },
  postedvwe: {
    paddingTop: 15,
  },
  posttetxt: {
    fontSize: 13,
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_GREY_COLOR_CODE,
    paddingLeft: 10,
  },
  healthyvwe: {
    paddingTop: 13,
  },
  healthtxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 18,
    paddingLeft: 10,
  },
  saveimg: {
    flexDirection: "row",
    paddingTop: 5,
  },
  stafftxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 15,
  },
  accodingvwe: {
    fontSize: 12,
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_GREY_COLOR_CODE,
  },
  frontvweant: {
    flexDirection: "column",
  },
  stafftxtanth: {
    fontSize: 15,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  socildistancingviwe: {
    flexDirection: "row",
  },
  anotherview: {
    left: "50%",
    marginTop: "1.5%",
  },
  profileview: {
    flexDirection: "row",
  },
  profileanotherview: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  vervwe: {
    flex: 4.5,
    justifyContent: "center",
    paddingLeft: "5%",
  },
  VefiedLiesetxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 24,
  },
  abbytxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 14,
    color: LIGHT_GREY_COLOR_CODE,
  },
  tenYearbussinessvwe: {
    flex: 1,
    backgroundColor: WHITE_COLOR_CODE,
    marginTop: 10,
    padding: 15,
  },
  hightxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 20,
  },
  tenanothervwe: {
    flexDirection: "row",
    paddingTop: 8,
    paddingBottom: 5,
  },
  allpostjobsvwe: {
    paddingLeft: 10,
  },
  allpostjobstxt: {
    fontSize: 17,
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_GREY_COLOR_CODE,
  },
  photoview: {
    backgroundColor: WHITE_COLOR_CODE,
    marginTop: 10,
    padding: 15,
  },
  photosecview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pandvtxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 22,
    color: BLACK_COLOR_CODE,
  },
  seealltxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: YELLOW_COLOR_CODE,
  },
  serceainview: {
    flexDirection: "row",
    paddingTop: 10,
  },
  srcmntxt: {
    paddingLeft: 10,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
    textDecorationLine: "underline",
    color: LIGHT_GREY_COLOR_CODE,
  },
  mondaysecvwe: {
    flexDirection: "row",
    paddingLeft: 15,
    paddingBottom: 10,
  },
  montxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 15,
    color: LIGHT_GREY_COLOR_CODE,
  },
  timepmtxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 15,
    color: LIGHT_GREY_COLOR_CODE,
  },
  highlighsvwe: {
    flexDirection: "row",
    padding: 15,
  },
  highlightxt: {
    fontSize: 15,
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_BLACK_COLOR_CODE,
  },
  serviceview: {
    backgroundColor: WHITE_COLOR_CODE,
    marginTop: 10,
    padding: 15,
  },
  sirsecview: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sixmore: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: YELLOW_COLOR_CODE,
    fontSize: 15,
  },
  seviceIMG: {
    width: 20,
    height: 20,
  },
  locationview: {
    backgroundColor: WHITE_COLOR_CODE,
    marginTop: 10,
  },
  locationsec: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  locktxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 20,
    color: LIGHT_BLACK_COLOR_CODE,
  },
  getlocktext: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: YELLOW_COLOR_CODE,
    fontSize: 15,
  },
  googlebigimg: {
    width: "100%",
    height: 200,
  },
  twoaddvwe: { padding: 15 },
  twotxt: {
    fontSize: 18,
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_BLACK_COLOR_CODE,
  },
  timetxtvwe: {
    paddingLeft: 10,
    alignItems: "center",
    paddingLeft: 10,
    alignItems: "center",
  },
  editwiewwew: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  pencilediticon: {
    height: 13,
    width: 13,
  },
  penciltxtedit: {
    color: YELLOW_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 15,
  },
  aboutbussvwe: {
    backgroundColor: WHITE_COLOR_CODE,
    marginTop: 10,
    padding: 15,
  },
  aboutview: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  abouttxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 17,
  },
  revieewbtn: {
    elevation: 1,
    width: "35%",
    height: 35,
    padding: 5,
  },
  buttonLabelStyle: {
    fontSize: 11,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  owenwerview: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  bussinessimg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  steveview: {
    justifyContent: "center",
    paddingLeft: "5%",
  },
  stevetxt: {
    fontSize: 20,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  bussinessvwe: {
    fontSize: 13,
    color: LIGHT_GREY_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  longbussinessvwe: {
    paddingTop: 10,
    paddingBottom: 15,
  },
  longbussinesstxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    lineHeight: 18,
    color: LIGHT_GREY_COLOR_CODE,
    fontSize: 12,
  },
  reviewview: {
    backgroundColor: WHITE_COLOR_CODE,
    marginTop: 10,
    padding: 15,
  },
  reviewtxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 20,
    color: LIGHT_BLACK_COLOR_CODE,
  },
  verfiedview: {
    backgroundColor: WHITE_COLOR_CODE,
    padding: 15,
    marginTop: 10,
  },
});
export default Styles;
//275
