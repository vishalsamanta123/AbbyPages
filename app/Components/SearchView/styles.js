import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../Utils/Constant";

const styles = StyleSheet.create({
  searchVw: {
    marginHorizontal: 16,
  },
  catgSearchVw: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    marginTop: 10,
  },
  catgSearchInput: {
    height: 48,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.medium,
    color: COLORS.GREY,
    width: "80%",
  },
  searchButtonVw: {
    borderRadius: 10,
    marginHorizontal: 0,
    marginTop: 12,
  },
  categoriesVw: {
    marginHorizontal: 2,
    backgroundColor: COLORS.WHITE,
    elevation: 10,
    marginVertical: 3,
  },
  searchHeadTxt: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.YELLOW,
    marginLeft: 10,
    marginVertical: 5,
  },
  categoryVw: {
    marginVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  categoryTxt: {
    fontSize: FONT_SIZE.mediumL,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    marginLeft: 10,
  },
  categorySmallTxt: {
    fontSize: FONT_SIZE.small,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    marginLeft: 10,
    marginRight: 50,
  },
  categoryImg: {
    width: 50,
    height: 40,
    borderRadius: 12,
  },
  searchView: {
    position: "absolute",
    bottom: -20,
    width: "100%",
  },
  inputStyle: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  searchText: {
    fontSize: FONT_SIZE.mediumL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
  },
});
export default styles;
