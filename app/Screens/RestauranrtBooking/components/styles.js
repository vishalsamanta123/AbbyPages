import { StyleSheet, Dimensions, PixelRatio } from "react-native";
import {
  WHITE_COLOR_CODE,
  FONT_FAMILY_BOLD,
  YELLOW_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  GREY_COLOR_CODE,
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_BLACK,
} from "../../../Utils/Constant";
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
    backgroundColor:'red'
  },
  FlexRowView: {
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
    paddingLeft: 5,
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
  RateTextStyle: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: GREY_COLOR_CODE,
  },
  MainClosedTime: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: "red",
  },
  AddShareContainer: {
    padding: 15,
    marginTop: 10,
    backgroundColor: WHITE_COLOR_CODE,
  },
  MainUpdateContainer: {
    backgroundColor: WHITE_COLOR_CODE,
    padding: 15,
    marginTop: 10,
  },
  CovidMainTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 21,
  },
  MainCovidPara: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: GREY_COLOR_CODE,
  },
  PopularDishContain: {
    marginTop: 10,
    backgroundColor: WHITE_COLOR_CODE,
    padding: 15,
    paddingBottom: 20,
  },
  LocationContainer: {
    marginTop: 10,
    backgroundColor: WHITE_COLOR_CODE,
    paddingBottom: 15,
  },
  LocationTxtView: {
    padding: 15,
  },
  AboutBusinessContain: {
    marginTop: 10,
    backgroundColor: WHITE_COLOR_CODE,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  FlexDirectnStyle: {
    paddingTop: 15,
  },
  WriteReviewTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 17,
    color: YELLOW_COLOR_CODE,
  },
  UserContainer: {
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomColor: LINE_COMMON_COLOR_CODE,
    borderBottomWidth: 0.5,
  },
  UserProfileStyle: {
    width: 90,
    height: 90,
    borderRadius: 3,
  },
  ReviewFullView: {
    color: GREY_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 13,
  },
  ReviewFullList: {
    marginTop: 10,
    paddingLeft: 15,
    backgroundColor: WHITE_COLOR_CODE,
    paddingTop: 10,
    paddingBottom: 10,
  },
  ImgeDetailTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 10,
    color: GREY_COLOR_CODE,
  },
  DishNameTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
  },
  RecommndedDishImg: {
    height: 120,
    width: 210,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  RecommendedConatiner: {
    borderRadius: 5,
    borderWidth: 0.6,
    marginTop: 10,
    margin: 5,
    borderColor: LINE_COMMON_COLOR_CODE,
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
    borderBottomColor: LINE_COMMON_COLOR_CODE,
  },
  TextInputImg: {
    position: "absolute",
    right: 0,
    marginRight: 40,
    marginTop: 30,
  },
  TextInputImageStyle: {
    width: 21,
    height: 21,
  },
  FindTableContain: {
    paddingTop: 10,
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
  },
  SeereservatnTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    textAlign: "center",
    color: YELLOW_COLOR_CODE,
    paddingLeft: 8,
  },
  AboutImge: {
    width: 17,
    height: 17,
    right: 3,
    top: 2,
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
    borderColor: "#d8d8d8",
    borderWidth: 1,
    height: 64,
    borderRadius: 9,
    justifyContent: "center",
    paddingLeft: 25,
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  DateSTyles: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 18,
  },
  noTableTxt: {
    fontSize: 16,
    color: YELLOW_COLOR_CODE,
    fontFamily: FONT_FAMILY_BLACK,
  },
});
export default Styles;
