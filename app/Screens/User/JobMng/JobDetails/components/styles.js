import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../../../../Utils/Constant";
const Styles = StyleSheet.create({
  bannerimg: {
    width: "100%",
    height: 150,
  },
  infocon: {
    padding: 20,
    borderBottomWidth: 15,
    borderBottomColor: "#f2f2f2",
    backgroundColor: "#fff",
  },
  hdngtxt: {
    fontSize: FONT_SIZE.mediumL,
    width: "90%",
    fontFamily: FONT_FAMILY.REGULAR,
    color: "#3a3838",
  },
  basiccon: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    marginVertical: 2,
  },
  maincontainers: {
    padding: 20,
    flex: 1,
    backgroundColor: COLORS.WHITE,
    borderBottomWidth: 20,
    borderColor: COLORS.WHITE,
  },
  descriptioncon: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center'
  },
  btnmncon: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    height: 18,
    margin: 2,
    marginLeft: 0,
    marginRight: 5,
    width: 18,
  },
  text: {
    color: COLORS.SMALL_TEXT,
    fontFamily: FONT_FAMILY.REGULAR,
    lineHeight: 22,
    letterSpacing: 0.2,
  },
  btncon: {
    paddingVertical: 18,
    backgroundColor: COLORS.YELLOW,
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  btntxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.mediumL,
  },
  noTimeTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.medium,
    color: COLORS.YELLOW,
    marginTop: 8,
    marginLeft: 5,
  },
  relatedItemsTxt: {
    marginLeft: 16,
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
  },
  relatedItems: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 4,
    marginBottom: 10,
  },
  mainConatiner: {
    paddingHorizontal: 10,
    flexDirection: "row",
    paddingVertical: 10,
    flex: 1,
  },
  mainImgeStyle: {
    width: 80,
    height: 100,
    borderRadius: 4,
    borderWidth: 0.2,
    borderColor: "grey",
    marginBottom: 5,
  },
  mainConatinerView: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  mainServiceName: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.mediumL,
  },
  addressTxtStyle: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.smallL,
    color: COLORS.GREY,
    lineHeight: 15,
  },
  jobTypeTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.medium,
    color: COLORS.LIGHT_BLACK,
    lineHeight: 20,
  },
});
export default Styles;
