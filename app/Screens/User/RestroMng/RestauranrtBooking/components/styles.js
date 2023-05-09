import { StyleSheet } from "react-native";
import {
  FONT_SIZE,
  COLORS,
  FONT_FAMILY,
  Constants,
} from "../../../../../Utils/Constant";
const Styles = StyleSheet.create({
  imageStyle: {
    height: 210,
    width: "100%",
  },
  paginationWrapper: {
    bottom: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "red",
  },
  FlexRowView: {
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: COLORS.WHITE,
    marginLeft: 10,
  },
  RatingContainer: {
    flexDirection: "row",
    paddingTop: 10,
  },
  RatingStyles: {
    backgroundColor: COLORS.LIGHT_GREEN,
    width: 28,
    height: 19,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  RatingStylesTxt: {
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: 11,
  },
  RatingTextMain: {
    paddingLeft: 5,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.WHITE,
  },

  RestroDetailView: {
    backgroundColor: COLORS.WHITE,
    paddingLeft: 15,
    paddingBottom: 25,
    paddingRight: 15,
  },
  RestroNameTxt: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: 23,
  },
  RateTextStyle: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.GREY,
  },
  MainClosedTime: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: "red",
  },
  AddShareContainer: {
    padding: 15,
    marginTop: 10,
    backgroundColor: COLORS.WHITE,
  },
  MainUpdateContainer: {
    backgroundColor: COLORS.WHITE,
    padding: 15,
    marginTop: 10,
  },
  CovidMainTxt: {
    fontSize: FONT_SIZE.large,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.BOLD,
  },
  MainCovidPara: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.GREY,
    fontSize: FONT_SIZE.smallL,
  },
  PopularDishContain: {
    marginTop: 10,
    backgroundColor: COLORS.WHITE,
    padding: 15,
    paddingBottom: 20,
  },
  LocationContainer: {
    marginTop: 10,
    backgroundColor: COLORS.WHITE,
    paddingBottom: 15,
  },
  LocationTxtView: {
    padding: 15,
  },
  AboutBusinessContain: {
    marginTop: 10,
    backgroundColor: COLORS.WHITE,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  FlexDirectnStyle: {
    paddingTop: 15,
  },
  WriteReviewTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 17,
    color: COLORS.YELLOW,
  },
  UserContainer: {
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomColor: COLORS.COMMON,
    borderBottomWidth: 0.5,
  },
  UserProfileStyle: {
    width: 90,
    height: 90,
    borderRadius: 3,
  },
  ReviewFullView: {
    color: COLORS.GREY,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 13,
  },
  ReviewFullList: {
    marginTop: 10,
    paddingLeft: 15,
    backgroundColor: COLORS.WHITE,
    paddingTop: 10,
    paddingBottom: 10,
  },
  ImgeDetailTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 10,
    color: COLORS.GREY,
  },
  DishNameTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
  },
  RecommndedDishImg: {
    height: 80,
    width: 180,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  RecommendedConatiner: {
    borderRadius: 5,
    borderWidth: 0.6,
    marginTop: 10,
    margin: 5,
    borderColor: COLORS.COMMON,
  },
  PopularConatiner: {
    alignItems: "center",
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  PopularDishImg: {
    height: 150,
    width: 150,
    borderRadius: 5,
  },
  MapImgeStyle: {
    width: "100%",
    marginTop: 10,
    height: 190,
  },
  ReviewContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.COMMON,
  },
  TextInputImg: {
    position: "absolute",
    right: 0,
    marginRight: 20,
    marginTop: 30,
  },
  FindTableContain: {
    padding: 13,
    marginTop: 5,
  },
  buttonLabelStyle:{
    fontFamily: FONT_FAMILY.REGULAR,
  },
  SeereservatnView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  ArrowImge: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
  SeereservatnTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    textAlign: "center",
    color: COLORS.YELLOW,
    paddingLeft: 8,
  },
  AboutImge: {
    width: 17,
    height: 17,
    right: 3,
    top: 2,
    tintColor: COLORS.LIGHT_BLACK
  },
  AboutContainer: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
  },
  flexDirectionStyle: {
    flexDirection: "row",
  },
  CalenderSelect: {
    borderColor: COLORS.LIGHT_WHITE,
    borderWidth: 1,
    height: 64,
    borderRadius: 9,
    justifyContent: "center",
    paddingLeft: 25,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  DateSTyles: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.medium,
  },
  noTableTxt: {
    fontSize: 16,
    color: COLORS.YELLOW,
    fontFamily: FONT_FAMILY.BLACK,
  },
  timeCon: {
    paddingHorizontal: 18,
    paddingTop: 10,
  },
  timePickVw: {
    height: 35,
    width: 65,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: Constants.standardBW,
    borderColor: COLORS.COMMON,
    borderRadius: 5,
    margin: 5
  },
  timeTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.medium,
  },
  timeTxtHead: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.mediumL,
  },
  availableTimeTxt: {
    fontSize: 16,
    marginHorizontal: 10,
    fontFamily: FONT_FAMILY.REGULAR,
    textAlign: "center",
    marginBottom: 2,
  },
  datePickerVw: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: Constants.standardBW,
    flexDirection: "row",
    borderColor: COLORS.COMMON,
    borderRadius: 10,

  },
  peopleWithVw: {
    marginHorizontal: 20,
    paddingVertical: 4,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  peopleWithTxt: {
    fontSize: 20,
    fontFamily: FONT_FAMILY.REGULAR,
    color:   COLORS.BLACK,
  },
  backImgVw: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 30,
    paddingHorizontal: 35,
    backgroundColor: COLORS.RGBA1
  },
  mainTxt: {
    fontSize: FONT_SIZE.large,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.BOLD,
    marginRight: 28,
    textTransform: "capitalize",
  },
  smallTxt: {
    fontSize: FONT_SIZE.smallL,
    color: COLORS.GREY,
    fontFamily: FONT_FAMILY.BOLD,
    top: 1,
  },
});
export default Styles;
