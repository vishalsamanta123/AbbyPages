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
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.mediumL,
    color: COLORS.BLACK,
    textTransform: "capitalize",
  },
  smallTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.smallL,
    color: COLORS.LIGHT_BLACK,
  },
  emptyConVw: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyConTxt: {
    fontSize: FONT_SIZE.mediumL,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  lightTxt: {
    fontSize: FONT_SIZE.smallL,
    color: COLORS.SMALL_TEXT,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  smallImgVw: {
    width: 35,
    height: 35,
    borderRadius: 100,
    // marginHorizontal: 5,
    // marginLeft: 10,
    marginTop: 10,
  },
  postImageStyle: {
    width: "90%",
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
  descriptionTxt: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.smallL,
  },
  headlineTxt: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.medium,
  },
  commentWrap: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    // marginRight: 20
  },
  profileView: {
    flex: 1,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginTop: 5,
  },
  commnentSideView: {
    backgroundColor: COLORS.LIGHT_WHITE,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 20,
  },
  userNameTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.BOLD,
  },
  commentTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  replyBtnView: {},
  commentBottonSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 5,
  },
  timeTxt: {
    color: COLORS.LIGHT_BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.smallL,
  },
  replyBtnTxt: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.smallL,
  },
  replyView: {
    marginTop: 15,
    flexDirection: "row",
  },
  replyProfileImage: {
    height: 35,
    width: 35,
    borderRadius: 35,
    marginTop: 5,
  },
  replycommnentSideView: {
    backgroundColor: COLORS.LIGHT_WHITE,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 20,
  },
  replyuserNameTxt: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.smallL,
  },
  replycommentTxt: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.small,
  },
  inputStyle: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.small,
    margin: 5,
    padding: 10,
    // backgroundColor: 'red',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.BORDER_LINE,
    flex: 5,
    height: 50,
  },
  inputView: {
    marginBottom: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  inputBtnStyle: {
    flex: 1,
    margin: 5,
    height: 50,
    // backgroundColor: COLORS.YELLOW,
    borderWidth: 2,
    borderColor: COLORS.BORDER_LINE,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  emptyCommentView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  noCommentTxt: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.mediumL,
    marginBottom: 20
  },
  beFirstTxt: {
    color: COLORS.LIGHT_BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.smallL,
  },
});

export default styles;
