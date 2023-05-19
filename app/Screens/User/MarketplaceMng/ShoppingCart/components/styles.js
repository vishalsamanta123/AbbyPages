import { Platform, StyleSheet } from "react-native";
import {
  COLORS,
  FONT_FAMILY,
} from "../../../../../Utils/Constant";
const styles = StyleSheet.create({
  itemsVw: {
    flex: 2,
    justifyContent: "center",
  },
  dataCon: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    borderBottomWidth: 0.3,
    borderColor: "lightgrey",
  },
  posterimg: {
    width: 90,
    height: 90,
    alignSelf: "center",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  basiccon: {
    flexDirection: "row",
    alignItems: "center",
  },
  spinnerBttnVw: {
    justifyContent: "center",
    alignItems: "center",
    height: 25,
    width: 25,
    borderWidth: 2,
    borderColor: COLORS.SMALL_TEXT,
  },
  text: {
    color: COLORS.SMALL_TEXT,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  underLineVw: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgrey",
    marginTop: 15,
    marginBottom: 15,
  },
  priceVw: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10
  },
  hdngtxt: {
    fontSize: 18,
    width: "90%",
    fontFamily: FONT_FAMILY.REGULAR,
    color: "#3a3838",
  },
  itemsTxt: {
    opacity: 0.8,
    fontSize: 16,
    width: null,
  },
  icon: {
    height: 20,
    width: 20,
    margin: 2,
    marginLeft: 0,
    marginRight: 5,
    tintColor: COLORS.BLACK,
  },
  inputcon: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: "#d8d8d8",
    width: "70%",
    paddingVertical:Platform.OS==='ios'? 15:0
  },
  appliedbtncon: {
    width: null,
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontSize: 15,
    backgroundColor: COLORS.YELLOW,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  footerVw: {
    flex: 1,
    paddingTop: 12,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default styles;
