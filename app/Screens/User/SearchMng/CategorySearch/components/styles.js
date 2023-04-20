import { StyleSheet } from "react-native";
import {
    BLACK_COLOR_CODE,
  BORDER_LINE_CODE,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  GREY_COLOR_CODE,
  IOS,
  WHITE_COLOR_CODE,
} from "../../../../../Utils/Constant";

const styles = StyleSheet.create({
  topHeaderVw: {
    justifyContent: "space-between",
    paddingHorizontal: 6,
    paddingVertical: IOS ? 30 : 4,
    backgroundColor: WHITE_COLOR_CODE,
  },
  topHeaderTxt: {
    fontSize: 18,
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  backImgVw: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 30,
    paddingHorizontal: 35,
  },
  listTouch: {
    padding: 10,
    backgroundColor: WHITE_COLOR_CODE,
    marginHorizontal: 10,
    borderColor: BORDER_LINE_CODE,
    borderWidth: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  iconStyle:{
    height: 40,
    width: 40,
    // tintColor: BLACK_COLOR_CODE
    marginRight: 10
  },    
  listText: {
    fontSize: 18,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_BOLD,

  },
});

export default styles;
