import { StyleSheet } from "react-native";
import {
  LIGHT_GREY_COLOR_CODE,
  YELLOW_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  BLACK_COLOR_CODE,
} from "../../../../../Utils/Constant";
const Styles = StyleSheet.create({
  CheckOutView: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 10,
  },
  CheckoutText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 20,
    paddingLeft: 10,
  },
  ParaViewStyle: {
    padding: 15,
  },
  ParaViewText: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_GREY_COLOR_CODE,
    fontSize: 12,
  },
  ArrowDownImge: {
    position: "absolute",
    right: 0,
    marginTop: 29,
    marginRight: 28,
  },
  ImageView: {
    margin: 15,
  },
  ImgeStyleMain: {
    width: "100%",
    height: 190,
  },
  TakeOutText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
    paddingLeft: 10,
  },
  paymentMethodVw: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  cardDetailsTxt: {
    marginLeft: 10,
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
    textColor: BLACK_COLOR_CODE,
  },
  AddressText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 14,
    paddingLeft: 10,
    color: LIGHT_GREY_COLOR_CODE,
  },
  ChangeText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
    paddingLeft: 10,
    color: YELLOW_COLOR_CODE,
  },
});
export default Styles;
