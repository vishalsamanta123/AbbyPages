import { StyleSheet } from "react-native";
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  windowHeight,
  windowWidth,
} from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
  rowVw: {
    flexDirection: "row",
    marginVertical: 4,
  },
  smallImgVw: {
    width: 35,
    height: 35,
    borderRadius: 100,
    // marginHorizontal: 5,
    // marginLeft: 10,
    marginTop: 10,
  },
  ratingTxt: {
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.medium,
  },
  lightTxt: {
    fontSize: FONT_SIZE.smallL,
    color: COLORS.SMALL_TEXT,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  descriptionTxt: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.smallL,
  },
  nullTxt: {
    color: COLORS.BLUE,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.smallL,
    marginTop: 10,
  },
  headlineTxt: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.NORMAL_BOLD,
    fontSize: FONT_SIZE.medium,
  },
  imageStyle: {
    width: windowWidth / 1.1,
    height: windowHeight / 2.2,
    resizeMode: "cover",
    margin: 5,
  },
  imagesView: { marginTop: 20, alignItems: "center" },
  likeSection: {
    flexDirection: "row",
    // flex: 1,
    marginVertical: 15,
    paddingHorizontal: 5,
    justifyContent: "space-between",
  },
  likeView: {
    // flex: 1,
    // justifyContent: "space-between",
    // backgroundColor: "red",
    // margin: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GREY,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  likeSectionText: {
    textAlign: "center",
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.smallL,
  },
  likeCountView: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginHorizontal: 10,
    marginVertical: 5,
    marginTop: 20
  },
});

export default styles;
