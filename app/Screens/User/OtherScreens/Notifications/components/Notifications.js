import React from "react";
import { View,  } from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import {
  FONT_SIZE,
} from "../../../../../Utils/Constant";
import MainHeader from "../../../../../Components/MainHeader";
import ListingView from "../../../../../Components/ListingView";

const Notifications = (props) => {
  return (
    <View
      style={[CommonStyles.container]}>
      <MainHeader
        headerText={"Notifications"}
        fontSize={FONT_SIZE.medium}
        notifyIcon={false}
        TxtMarginRight={'20%'}
      />
      <View style={[CommonStyles.body]}>
        <ListingView
          keyExtractor={(item, index) => index.toString()}
          data={props.NotificationData}
          renderItem={({ item, index }) =>
            props._handleNotificationData(item, index)
          }
        />
      </View>
    </View>
  );
};
export default Notifications;
