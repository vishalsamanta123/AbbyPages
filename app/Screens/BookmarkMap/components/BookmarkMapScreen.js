import React from "react";
import {
  View,
  KeyboardAvoidingView,
  ImageBackground,
  Platform
} from "react-native";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import { BLACK_COLOR_CODE, WHITE_COLOR_CODE } from "../../../Utils/Constant";
const BookmarkMapScreen = (props) => {
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? 'padding' : null}
    style={[CommonStyles.container]}>
      <Header
        RightImg={require("../../../Assets/map_list_icon.png")}
        HeaderText={"Bookmark"}
        onPress={() => props.onPressBack()}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <ImageBackground
          style={{ flex: 1 }}
          source={require("../../../Assets/extraImages/google2x.png")}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default BookmarkMapScreen;
