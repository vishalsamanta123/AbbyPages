import React from "react";
import { View, StatusBar, KeyboardAvoidingView } from "react-native";
import styles from "./styles";
import Header from "../../../../Components/Header";
import Input from "../../../../Components/Input";
import Button from "../../../../Components/Button";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
const ChangePassword = (props) => {
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
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
      />
      <View style={styles.body}>
        <Input
          onChangeText={(CurrentPasswrd) =>
            props.setCurrentPasswrd(CurrentPasswrd)
          }
          secureTextEntry={false}
          value={props.CurrentPasswrd}
          autoCapitalize="none"
          placeholder="Current Password"
          InputType="withScroll"
          keyboardType="visible-password"
        />
        <Input
          onChangeText={(NewPasswrd) => props.setNewPasswrd(NewPasswrd)}
          secureTextEntry={false}
          value={props.NewPasswrd}
          autoCapitalize="none"
          placeholder="New Password"
          InputType="withScroll"
          keyboardType="visible-password"
        />
        <Input
          onChangeText={(VerifyPasswrd) =>
            props.setVerifyPasswrd(VerifyPasswrd)
          }
          secureTextEntry={false}
          value={props.VerifyPasswrd}
          autoCapitalize="none"
          placeholder="Verify New Password"
          InputType="withScroll"
          keyboardType="visible-password"
        />
        <Button buttonText="Save Password" onPress={() => props.submitbtn()} />
        <Button
          buttonText="Cancel"
          style={styles.CancelBtn}
          buttonLabelStyle={styles.CancelBtnTxt}
          // onPress={() => props.submitbtn()}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default ChangePassword;
