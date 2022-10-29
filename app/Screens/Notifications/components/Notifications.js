import React from "react";
import { View, FlatList, KeyboardAvoidingView, Platform } from "react-native";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../Utils/Constant";
import { Images } from "../../../Utils/images";
const Notifications = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? 'padding' : null}
      style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        leftImg={Images.DRAWER_IMG}
        HeaderText="Notifications"
        type="Drawer"
        MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          // data={props.NotificationData}
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
