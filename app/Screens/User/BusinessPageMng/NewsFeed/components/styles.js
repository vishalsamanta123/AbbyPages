import { StyleSheet } from "react-native";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
  mainConatiner: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  largeImgVw: {
    width: 110,
    height: 120,
    borderRadius: 15,
    marginBottom: 5,
  },
  straightVw: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  rowVw: {
    flexDirection: "row",
    marginVertical: 4,
  },
  ratingVw: {
    backgroundColor: COLORS.LIGHT_GREEN,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginRight: 5,
  },
  ratingTxt: {
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.medium,
  },
  innContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  infoView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },
  largeNameTxt: {
    fontFamily:  FONT_FAMILY.REGULAR,
    fontSize: 18,
    color: COLORS.BLACK,
    textTransform: "capitalize",
  },
  smallTxt: {
    fontFamily:  FONT_FAMILY.REGULAR,
    fontSize: 13.5,
    color: COLORS.LIGHT_BLACK,
  },
  emptyConVw: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyConTxt: {
    fontSize: 18,
    color: COLORS.BLACK,
    fontFamily:  FONT_FAMILY.REGULAR,
  },
  lightTxt: {
    fontSize: 14,
    color: COLORS.SMALL_TEXT,
    fontFamily:  FONT_FAMILY.REGULAR,
  },
  smallImgVw: {
    width: 35,
    height: 35,
    borderRadius: 100,
    marginHorizontal: 5,
    marginLeft: 10,
    marginTop: 10,
  },
  postImageStyle: {
    width: Constants.windowWidth / 1.2,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 5,
    marginLeft: 10,
    marginTop: 10,
  },
  likeSection: {
    flexDirection: "row",
    flex: 1,
    padding: 20,
  },
  likeView: {
    flex: 1,
    justifyContent: "space-between",
  },
  likeSectionText: {
    textAlign: "center",
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.medium,
  },
  postBreakView: {
    height: 0.5,
    backgroundColor: COLORS.BORDER_LINE,
    width: "100%",
  },
  likeCountView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 5,
  },
});

export default styles;
