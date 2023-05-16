import { StyleSheet } from "react-native";
import { COLORS, Constants, FONT_FAMILY, FONT_SIZE } from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
  nameView: {},
  productName: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.BOLD,
    marginTop: 10,
  },
  priceView: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  finalPrice: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  price: {
    fontSize: FONT_SIZE.smallL,
    fontFamily: FONT_FAMILY.REGULAR,
    marginBottom: 1,
    marginLeft: 10,
    textDecorationLine: "line-through",
  },
  shareView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  shareBtnsTouch: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 20,
    backgroundColor: COLORS.LIGHT_WHITE,
    margin: 5,
    borderRadius: 10,
  },
  shareTxt: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.REGULAR,
    marginLeft: 10,
  },
  considrImgVw: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 12,
  },
  businessNameInDetailTxt: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.mediumL,
  },
  smallTxt: {
    fontSize: FONT_SIZE.smallL,
    color: COLORS.GREY,
    fontFamily: FONT_FAMILY.BOLD,
    top: 1,
  },
  sellerInfoTxt: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.NORMAL_BOLD,
    marginTop: 10,
    marginBottom: 10
  },
  sellerInfoView: {},
  sendmsgView: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.WHITE,
    margin: 10,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  sendMsgTxt: {
    fontSize: FONT_SIZE.smallL,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  msgInputStyle: {
    backgroundColor: COLORS.COMMON2,
    paddingHorizontal: 30,
    width: "85%",
    borderRadius: 10,
    fontSize: FONT_SIZE.smallL,
    fontFamily: FONT_FAMILY.REGULAR,
    marginRight: 10,
    paddingVertical: Constants.Ios ? 10 : 0
  },
  inputBtnStyle: {},
  detailView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  keyTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
    maxWidth: '50%'
  },
  valueTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.NORMAL_BOLD,
    color: COLORS.GREY,
    maxWidth: '50%',
    textAlign: 'right'
  },
  descTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.NORMAL_BOLD,
    color: COLORS.GREY,
  },
});

export default styles;
