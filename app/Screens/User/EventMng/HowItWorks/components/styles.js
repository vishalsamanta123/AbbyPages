import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
  backgroundImgVw: {
    height: 450,
    backgroundColor: COLORS.BLACK,
    paddingVertical: 70,
    overflow : "hidden"
  },
  imgInnerVw: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  createbtn: {
    borderRadius: 30,
    marginTop: 10,
  },
  createBtnTxt: {
    color: COLORS.WHITE,
  },
  stepsWrap: {},
  createHeadingView: {
    marginTop: 15,
  },
  createHeadingtxt: {
    fontSize: FONT_SIZE.largeL,
    fontFamily: FONT_FAMILY.BOLD,
    marginBottom: 10,
    textAlign: "center",
  },
  cardView: {
    backgroundColor: COLORS.WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    // flexDirection: "row",
  },
  cardheading: {
    fontSize: FONT_SIZE.large,
    fontFamily: FONT_FAMILY.BOLD,
    marginBottom: 10,
    color: COLORS.DARK_PURPLE,
    textAlign: "center",
    marginTop: 10,
  },
  cardDesc: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
    marginBottom: 10,
    textAlign: "center",
  },
  imageView: {
    backgroundColor: COLORS.DARK_PURPLE,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 20,
  },
});

export default styles;
