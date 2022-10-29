import React from "react";
import { View, FlatList, StatusBar, KeyboardAvoidingView, Platform } from "react-native";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../Utils/Constant";
import { Images } from "../../../Utils/images";
const RecentActivity = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? 'padding' : null}
      style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        leftImg={Images.DRAWER_IMG}
        HeaderText="Recent Activity"
        type="Drawer"
        MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={props.RecentActivityData}
          renderItem={({ item, index }) =>
            props._handleRecentActivityData(item, index)
          }
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default RecentActivity;
