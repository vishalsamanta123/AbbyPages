import { Dimensions, StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  FONT_FAMILY_BOLD,
  YELLOW_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  GREY_COLOR_CODE,
  FONT_FAMILY_REGULAR,
} from "../../../Utils/Constant";
const { width, height } = Dimensions.get("window");
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
  imageStyle: {
    height: 210,
    width: width,
  },
  paginationWrapper: {
    bottom: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: WHITE_COLOR_CODE,
    marginLeft: 10,
  },
  RatingContainer: {
    flexDirection: "row",
    paddingTop: 10,
  },
  RatingStyles: {
    backgroundColor: "#a3d74e",
    width: 28,
    height: 19,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  RatingStylesTxt: {
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 11,
  },
  RatingTextMain: {
    paddingLeft: 8,
    fontFamily: FONT_FAMILY_REGULAR,
    color: GREY_COLOR_CODE,
  },
  AddOptnsTextMain: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: GREY_COLOR_CODE,
  },
  RestroDetailView: {
    backgroundColor: WHITE_COLOR_CODE,
    paddingLeft: 15,
    paddingBottom: 25,
    paddingRight: 15,
  },
  RestroNameTxt: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 23,
  },
  FlexRowView: {
    flexDirection: "row",
  },
  RateTextStyle: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: GREY_COLOR_CODE,
  },
  MainClosedTime: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: "red",
  },
  AddShareContainer: {
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 25,
    borderBottomWidth: 1.3,
    borderBottomColor: LINE_COMMON_COLOR_CODE,
  },
  AddShareView: {
    flexDirection: "row",
    borderBottomLeftRadius: 10,
    elevation: 0.5,
    paddingBottom: 10,
    borderBottomRightRadius: 10,
    backgroundColor: WHITE_COLOR_CODE,
    paddingTop: 20,
    justifyContent: "space-evenly",
  },
  CameraViewStyle: {
    backgroundColor: WHITE_COLOR_CODE,
    elevation: 1,
    marginTop: 10,
    padding: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  CameraMainText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 18,
  },
  MainUpdateContainer: {
    backgroundColor: WHITE_COLOR_CODE,
    padding: 15,
  },
  UpdatesViewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  CovidMainTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 19,
  },
  EditTextStyle: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: YELLOW_COLOR_CODE,
    fontSize: 16,
  },
  CovidParaView: {
    paddingTop: 10,
  },
  PostDateText: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: GREY_COLOR_CODE,
  },
  MainCovidPara: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: GREY_COLOR_CODE,
    lineHeight: 21,
  },
  UpdatedServics: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 17,
  },
  UpdateOptions: {
    flexDirection: "row",
    alignItems: "center",
  },
  RightImgeStyle: {
    width: 17,
    height: 15,
    top: 2,
    marginHorizontal: 5,
    // right: 4
  },
  OutDoorSeatingTxt: {
    fontSize: 14,
    fontFamily: FONT_FAMILY_REGULAR,
    paddingTop: 5,
    color: GREY_COLOR_CODE,
  },
  RightImge: {
    width: 17,
    height: 15,
    bottom: 5,
    right: 4,
  },
  Accordingusers: {
    fontSize: 10,
    fontFamily: FONT_FAMILY_REGULAR,
    color: GREY_COLOR_CODE,
  },
  PopularDishContain: {
    marginTop: 10,
    backgroundColor: WHITE_COLOR_CODE,
    padding: 15,
  },
  PopularDishView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ViewFullmenu: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 17,
    color: YELLOW_COLOR_CODE,
  },
  LocationContainer: {
    marginTop: 10,
    backgroundColor: WHITE_COLOR_CODE,
    paddingBottom: 15,
  },
  LocationTxtView: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  ChoosedLocationTxt: {
    fontSize: 17,
    fontFamily: FONT_FAMILY_REGULAR,
    padding: 15,
  },
  DaysContainer: {
    paddingLeft: 15,
    borderTopWidth: 0.5,
    borderTopColor: LINE_COMMON_COLOR_CODE,
    paddingTop: 10,
  },
  DaysMainText: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: GREY_COLOR_CODE,
    lineHeight: 28,
  },
  EditBusinessInfoView: {
    flexDirection: "row",
    paddingTop: 10,
  },
  AboutBusinessContain: {
    marginTop: 10,
    backgroundColor: WHITE_COLOR_CODE,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  FlexDirectnStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  WriteReviewTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 17,
    color: YELLOW_COLOR_CODE,
  },
  UserContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
  UserProfileStyle: {
    width: 100,
    height: 100,
    borderRadius: 80,
  },
  ReviewFullView: {
    color: GREY_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 14,
  },
  ReviewFullList: {
    marginTop: 10,
    backgroundColor: WHITE_COLOR_CODE,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  OptionsContain: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
  },
  OptionsText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 18,
  },
  PopularConatiner: {
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 0.6,
    margin: 5,
    marginTop: 10,
    borderColor: LINE_COMMON_COLOR_CODE,
  },
  PopularDishImg: {
    height: 120,
    width: 190,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  DishNameTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
  },
  ImgeDetailTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 10,
    color: GREY_COLOR_CODE,
  },
  ReviewContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
  },
  AddPhotoCOntainer: {
    alignItems: "center",
    flex: 2,
    borderRightWidth: 1,
    borderColor: LINE_COMMON_COLOR_CODE,
  },
  SaveContainer: {
    alignItems: "center",
    flex: 2,
    borderLeftWidth: 1,
    borderColor: LINE_COMMON_COLOR_CODE,
  },
  MainBtnTouchable: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: YELLOW_COLOR_CODE,
  },
  ButtonLabel: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 18,
  },
  MainContent: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  ArrowTouchable: {
    position: "absolute",
    right: -10,
    top: -10,
  },
  PleaseEnterTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    textAlign: "center",
    fontSize: 17,
    paddingTop: 15,
  },
  txtInputStyle: {
    width: "80%",
    borderWidth: 1.5,
    fontFamily: FONT_FAMILY_REGULAR,
    borderColor: LINE_COMMON_COLOR_CODE,
    borderRadius: 5,
    height: 40,
    paddingLeft: 10,
    marginTop: 15,
  },
});
export default Styles;
