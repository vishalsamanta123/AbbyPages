import { Platform, StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY } from "../../../../../Utils/Constant";
const Styles = StyleSheet.create({
  alertBackground: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  modalItem: {
    fontFamily: FONT_FAMILY.REGULAR,
    textAlign: "center",
  },
  alertBox: {
    width: 200,
    flexDirection: "row",
    backgroundColor: COLORS.WHITE,
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
    backgroundColor: COLORS.WHITE,
    fontFamily: FONT_FAMILY.REGULAR,
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
    fontFamily: FONT_FAMILY.REGULAR,
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
    backgroundColor: COLORS.WHITE,
    paddingTop: 15,
    paddingBottom: 15,
    marginHorizontal: 10,
  },
  HeaderContain: {
    flex: 1,
    zIndex: 1,
    backgroundColor: COLORS.YELLOW,
  },
  ImageView: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  EditProfileImge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "red",
  },
});
export default Styles;
