import { Platform, StyleSheet } from "react-native";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
  FONT_FAMILY_REGULAR,
} from "../../../../../Utils/Constant";
const Styles = StyleSheet.create({
  alertBackground: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // If the mask is to be displayed in a semi-transparent state, it must be set here. The a in the reba controls the transparency, which is in the range of 0.0 to 1.0.
  },
  modalItem: {
    fontFamily: FONT_FAMILY_REGULAR,
    textAlign: "center",
  },
  alertBox: {
    width: 200,
    // height: 100,
    flexDirection: "row",
    backgroundColor: WHITE_COLOR_CODE,
  },
  profileModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 60,
    borderColor: "#d8d8d8",
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: "row",
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  pickerVw: {
    width: "100%",
    backgroundColor: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 17,
  },
  pickerItemVw: {
    height: Platform.OS === "ios" ? "90%" : null,
    textAlign: "left",
    bottom: Platform.OS === "ios" ? 12 : 0,
  },
  CameraImgView: {
    flex: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },
  AddPhotosTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 17,
    paddingLeft: 10,
    paddingTop: Platform.OS === "ios" ? 12 : 0,
  },
  BckArrowBack: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  MainContainer: {
    backgroundColor: WHITE_COLOR_CODE,
    paddingTop: 15,
    paddingBottom: 15,
  },
  HeaderContain: {
    flex: 1,
    zIndex: 1,
    backgroundColor: YELLOW_COLOR_CODE,
  },
  ImageView: {
    // position: 'absolute',
    // right: 0,
    // top: 0,
    // bottom: -45,
    // top: -45,
    // left: 0,
    alignItems: "center",
    backgroundColor: YELLOW_COLOR_CODE,
    // height:40,
    justifyContent: "flex-end",
    // position: 'absolute',
    // right: 0,
    // top: 0,
    // bottom: -45,
    // // top: -45,
    // left: 0,
    // alignItems: 'center',
    // justifyContent: 'flex-end'
  },
  EditProfileImge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "red",
  },
});
export default Styles;
