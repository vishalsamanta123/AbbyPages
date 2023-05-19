import { StyleSheet } from "react-native";
import {
  COLORS,
  FONT_FAMILY,
} from "../../../../../Utils/Constant";
const Styles = StyleSheet.create({
  TextInputView: {
    backgroundColor: "#f2f2f2",
    paddingLeft: 20,
    padding: 10,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.COMMON,
  },
  FirsNameTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.GREY,
    bottom: 4,
    fontSize: 16,
  },
  NameTextStyle: {
    fontSize: 17,
    fontFamily: FONT_FAMILY.REGULAR,
    // backgroundColor:"red",
  },
  MainProductContain: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 15,
    borderBottomColor: COLORS.COMMON,
  },
  ProductImge: {
    width: 110,
    height: 100,
    borderRadius: 3,
  },
  ProdctDetailView: {
    width: "65%",
    paddingLeft: 10,
  },
  ProductNameText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 18,
  },
  ProductDescrptn: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.GREY,
    fontSize: 12,
  },
  QuantityText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 16,
  },
  COnfirmBtnView: {
    marginBottom: 10,
    marginTop: 10,
  },
  cardDetailsTxt: {
    marginLeft: 20,
    marginVertical: 8,
    fontSize: 18,
  },
  cardStyleVw: {
    paddingVertical: 30,
    marginHorizontal: 14,
  },
  cardStyle: {
    borderColor: "#d8d8d8",
    borderWidth: 1,
    borderRadius: 9,
    textColor: COLORS.BLACK,
  },
});
export default Styles;
