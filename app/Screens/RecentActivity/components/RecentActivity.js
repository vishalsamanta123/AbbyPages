import React from "react";
import { View, FlatList, StatusBar, KeyboardAvoidingView } from "react-native";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../Utils/Constant";
const RecentActivity = (props) => {
  return (
    <KeyboardAvoidingView style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        leftImg={require("../../../Assets/hamburger_icon.png")}
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
