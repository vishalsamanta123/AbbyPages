import { StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  LIGHT_GREY_COLOR_CODE,
  YELLOW_COLOR_CODE,
  BLACK_COLOR_CODE,
} from "../../../Utils/Constant";
const styles = StyleSheet.create({
  cardCon: {
    paddingHorizontal: 20,
    backgroundColor: WHITE_COLOR_CODE,
    paddingBottom: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 1.5,
  },
  imgCon: {
    justifyContent: "center",
    alignItems: "center",
    bottom: 45,
  },
  emptyListTxt: {
    bottom: 25,
    fontSize: 18,
    color: "#6c6c6c",
    lineHeight: 25,
    textAlign: "center",
  },
  lablestyle: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  txtCat: {
    fontSize: 15,
    lineHeight: 18,
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  FriendContainer: {
    flex: 1,
  },
  topCont: {
    paddingVertical: 5,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    backgroundColor: YELLOW_COLOR_CODE,
  },
  FlatlistContain: {
    borderTopColor: WHITE_COLOR_CODE,
    borderTopWidth: 0.3,
  },
  ConatinView: {
    borderWidth: 0.5,
    flexDirection: "row",
    borderRadius: 3,
    margin: 15,
    marginBottom: 5,
    borderColor: LIGHT_GREY_COLOR_CODE,
  },
  DishImgeStyle: {
    width: "35%",
    height: "100%",
    margin: 2,
  },
  DishDiscptnView: {
    padding: 15,
    width: "65%",
  },
  DishNameTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    fontSize: 18,
  },
  DiscrptnTxtStyle: {
    fontFamily: FONT_FAMILY_REGULAR,
    lineHeight: 18,
    color: LIGHT_GREY_COLOR_CODE,
    fontSize: 12,
    width: "95%",
  },
  DateContainer: {
    flexDirection: "row",
    // paddingTop: 12
  },
  DateImge: {
    width: 13,
    height: 15,
    top: 2,
  },
  ReviewText: {
    color: LIGHT_GREY_COLOR_CODE,
    fontSize: 12,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  ViewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  PendingView: {
    flexDirection: "row",
    paddingTop: 5,
  },
  CheckImge: {
    width: 13,
    height: 13,
    top: 2,
  },
  arrowCon: {
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1,
  },
  arrowVw: {
    backgroundColor: YELLOW_COLOR_CODE,
    padding: 8,
    borderRadius: 30,
  },
  arrowImg: {
    width: 8,
    height: 10,
    backgroundColor: YELLOW_COLOR_CODE,
    tintColor: WHITE_COLOR_CODE,
  },
  AddBtnTouchable: {
    backgroundColor: YELLOW_COLOR_CODE,
    width: 35,
    marginRight: 10,
    marginTop: 15,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyListVw: {
    minHeight: 400,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default styles;
