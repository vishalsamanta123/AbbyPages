import React from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import styles from "./styles";
import Button from "../../../../../Components/Button";
import {
  FONT_SIZE,
} from "../../../../../Utils/Constant";
import MainHeader from "../../../../../Components/MainHeader";
import MainInput from "../../../../../Components/MainInput";

const ChangePassword = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : null}
      style={styles.container}
    >
      <MainHeader
        headerText={"Change Password"}
        fontSize={FONT_SIZE.medium}
        loginButton={false}
        isLogin={true}
      />
      <View style={styles.body}>
        <MainInput
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
        <MainInput
          onChangeText={(NewPasswrd) => props.setNewPasswrd(NewPasswrd)}
          secureTextEntry={false}
          value={props.NewPasswrd}
          autoCapitalize="none"
          placeholder="New Password"
          InputType="withScroll"
          keyboardType="visible-password"
        />
        <MainInput
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
        <View style={{marginTop: 20}}>
          <Button
            buttonText="Save Password"
            onPress={() => props.submitbtn()}
            paddingHeight={10}
          />
          <Button
            buttonText="Cancel"
            style={styles.CancelBtn}
            buttonLabelStyle={styles.CancelBtnTxt}
            onPress={() => props.goback()}
            paddingHeight={10}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default ChangePassword;
