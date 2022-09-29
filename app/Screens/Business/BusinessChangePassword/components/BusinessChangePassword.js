import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import styles from "./styles";
import {
  BLACK_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import Input from "../../../../Components/Input";
import Button from "../../../../Components/Button";
import Header from "../../../../Components/Header";
const ForgotPassword = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Header
        HeaderText="Change Password"
        RightImg={null}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <View
        style={{ height: "0.2%", backgroundColor: LINE_COMMON_COLOR_CODE }}
      />
      <View style={styles.body}>
        <Input
          onChangeText={(oldPassword) => props.setOldPassword(oldPassword)}
          secureTextEntry={true}
          value={props.oldPassword}
          autoCapitalize="none"
          placeholder="Old Passwprd"
          InputType="withScroll"
        />
        <Input
          onChangeText={(newPassword) => props.setNewPassword(newPassword)}
          secureTextEntry={true}
          value={props.newPassword}
          autoCapitalize="none"
          placeholder="New Password"
          InputType="withScroll"
        />
        <Button
          buttonText="Submit"
          style={styles.LinearGradient}
          buttonLabelStyle={styles.logtxt}
          onPress={() => props.submitbtn()}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default ForgotPassword;
