import React from "react";
import { View, FlatList, KeyboardAvoidingView, Platform } from "react-native";
import Header from "../../../../../Components/Header";
import CommonStyles from "../../../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  FONT_SIZE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../../../Utils/Constant";
import { Images } from "../../../../../Utils/images";
import MainHeader from "../../../../../Components/MainHeader";
const Notifications = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? 'padding' : null}
      style={[CommonStyles.container]}>
      <MainHeader
        headerText={"Notifications"}
        fontSize={FONT_SIZE.medium}
        notifyIcon={false}
        TxtMarginRight={'20%'}
      />
      <View style={[CommonStyles.body]}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={props.NotificationData}
          renderItem={({ item, index }) =>
            props._handleNotificationData(item, index)
          }
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default Notifications;
