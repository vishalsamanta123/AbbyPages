import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE, windowWidth } from "../../Utils/Constant";

const styles = StyleSheet.create({
  mainContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
  },
  oneImageView: {
    marginTop: 10,
  },
  oneImageStyle: {
    height: 210,
    width: windowWidth / 1.1,
  },
  twoImageView: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  twoImageStyle: {
    height: 200,
    width: windowWidth / 2.2,
    margin: 2,
  },
  threeImageView: {
    marginTop: 10,
    justifyContent: "center",
  },
  thirdImageStyle: {
    height: 200,
    width: windowWidth / 1.1,
    margin: 2,
  },
  fourthImageStyle: {
    height: 200,
    width: windowWidth / 2.2,
    margin: 2,
    backgroundColor: COLORS.BLACK,
    justifyContent: 'center',
    alignItems: 'center'
  },
  seeAllTxt:{
    fontFamily: FONT_FAMILY.NORMAL_BOLD,
    fontSize: FONT_SIZE.largeL,
    color: COLORS.WHITE,
  }
});

export default styles;
