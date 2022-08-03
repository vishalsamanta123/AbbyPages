import React, { useEffect, useState } from "react";
import { View, FlatList, StatusBar, KeyboardAvoidingView } from "react-native";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
const Notifications = (props) => {
  return (
    <KeyboardAvoidingView style={[CommonStyles.container]}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Header
        RightImg={null}
        leftImg={require("../../../Assets/hamburger_icon.png")}
        HeaderText="Notifications"
        type="Drawer"
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
