import React from "react";
import {
  View,
  KeyboardAvoidingView,
  ImageBackground,
  Platform,
} from "react-native";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import { WHITE_COLOR_CODE, YELLOW_COLOR_CODE } from "../../../Utils/Constant";
const BookmarkMapScreen = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
      <Header
        RightImg={require("../../../Assets/map_list_icon.png")}
        HeaderText={"Bookmark"}
        onPress={() => props.onPressBack()}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../../../Assets/extraImages/google2x.png")}
      />
    </KeyboardAvoidingView>
  );
};
export default BookmarkMapScreen;
