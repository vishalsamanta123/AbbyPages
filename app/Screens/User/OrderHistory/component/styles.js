import { StyleSheet } from "react-native";
import {
  COLORS, FONT_FAMILY, FONT_SIZE,
} from "../../../../Utils/Constant";
const styles = StyleSheet.create({
  cardCon: {
    paddingHorizontal: 20,
    backgroundColor: COLORS.WHITE,
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
    fontSize: FONT_SIZE.mediumL,
    color: COLORS.LIGHT_WHITE,
    lineHeight: 25,
    textAlign: "center",
  },
  lablestyle: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  txtCat: {
    fontSize: FONT_SIZE.medium,
    lineHeight: 18,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  FriendContainer: {
    flex: 1,
  },
  topCont: {
    paddingVertical: 5,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    backgroundColor: COLORS.YELLOW,
  },
  FlatlistContain: {
    borderTopColor: COLORS.WHITE,
    borderTopWidth: 0.3,
  },
  ConatinView: {
    borderWidth: 0.5,
    flexDirection: "row",
    borderRadius: 3,
    margin: 15,
    marginBottom: 5,
    borderColor: COLORS.LIGHT_GREY,
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
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
    fontSize: FONT_SIZE.mediumL,
  },
  DiscrptnTxtStyle: {
    fontFamily: FONT_FAMILY.REGULAR,
    lineHeight: 18,
    color: COLORS.LIGHT_GREY,
    fontSize: FONT_SIZE.small,
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
    color: COLORS.LIGHT_GREY,
    fontSize: FONT_SIZE.small,
    fontFamily: FONT_FAMILY.REGULAR,
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
    backgroundColor: COLORS.YELLOW,
    padding: 8,
    borderRadius: 30,
  },
  arrowImg: {
    width: 8,
    height: 10,
    backgroundColor: COLORS.YELLOW,
    tintColor: COLORS.WHITE,
  },
  AddBtnTouchable: {
    backgroundColor: COLORS.YELLOW,
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
