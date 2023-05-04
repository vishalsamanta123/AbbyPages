import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
  backgroundImgVw: {
    height: 450,
    backgroundColor: COLORS.BLACK,
    paddingVertical: 70,
    overflow: "hidden",
  },
  imgInnerVw: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  createbtn: {
    borderRadius: 30,
    marginTop: 10,
  },
  createBtnTxt: {
    color: COLORS.WHITE,
  },
  priceCalWrap: {
    backgroundColor: COLORS.BORDER_LINE,
    borderRadius: 20,
    margin: 20,
  },
  priceCalView: {
    backgroundColor: COLORS.BLACK,
    width: 300,
    alignSelf: "center",
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  txtWithYellow: {
    fontSize: FONT_SIZE.largeL,
    fontFamily: FONT_FAMILY.BOLD,
    textAlign: "center",
    color: COLORS.YELLOW,
  },
  txtLight: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.BOLD,
    marginBottom: 10,
    textAlign: "center",
    color: COLORS.LIGHT_GREY,
  },
  plus: {
    fontSize: FONT_SIZE.largeL,
    fontFamily: FONT_FAMILY.BOLD,
    marginBottom: 10,
    textAlign: "center",
    color: COLORS.WHITE,
  },
  priceDescView: {
    margin: 20,
  },
  priceDescHeadingTxt: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.BOLD,
    marginBottom: 10,
    textAlign: "center",
  },
  priceDescTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
    marginBottom: 10,
    textAlign: "center",
  },
  feesCalWrap: {},
  feesInputView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputHeading: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  textinputStyle: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    height: 40,
    width: "40%",
    paddingRight: 10,
    textAlign: "right",
    fontSize: FONT_SIZE.medium,
  },
  partition: {
    backgroundColor: COLORS.WHITE,
    height: 2,
    marginVertical: 20,
  },
  secondWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thirdWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex :1
  },
  sectionView: {
    flex: 1,
  },
  createnowBtnview:{
    marginTop: 10
  },
  cardView: {
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    // margin: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    // padding: 20,
    // flexDirection: "row",
  },
  cardheading: {
    fontSize: FONT_SIZE.large,
    fontFamily: FONT_FAMILY.BOLD,
    marginBottom: 10,
    color: COLORS.WHITE,
    textAlign: "center",
    marginTop: 10,
  },
  cardDesc: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.WHITE,
    marginBottom: 10,
    textAlign: "center",
  },
  imageView: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 20,
  },
});

export default styles;
