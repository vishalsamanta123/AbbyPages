import React from "react";
import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Image,
  Platform,
} from "react-native";
import styles from "./styles";
import Button from "../../../Components/Button";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../Utils/Constant";
const FriendsScreen = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
      <Header
        RightImg={null}
        leftImg={require("../../../Assets/hamburger_icon.png")}
        HeaderText="Friends"
        type="Drawer"
        MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
        <View style={styles.MainImgeStyle}>
          <Image source={require("../../../Assets/friends_info_graphic.png")} />
        </View>
        <View style={{ paddingTop: 10 }}>
          <View style={styles.ParaViewText}>
            <Text style={styles.ParaMainText}>
              Did you know you can connect with friends to discover the business
              they love and show off your own great taste? Welcome to the
              clubhouse, where you can view your friends, profile, read their
              reviews, and manage your friends list.
            </Text>
          </View>
          <Button
            buttonText="Invite Friends"
            style={{ marginTop: 10 }}
            onPress={() => props.onPressInviteFriends()}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default FriendsScreen;
