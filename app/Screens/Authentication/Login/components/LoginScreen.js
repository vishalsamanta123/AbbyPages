import React from "react";
import { View, ScrollView, Platform, Image, StatusBar } from "react-native";
import styles from "./styles";
import Input from "../../../../Components/Input";
import Button from "../../../../Components/Button";
import CommonStyles from "../../../../Utils/CommonStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, YELLOW_COLOR_CODE } from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";
import MainInput from "../../../../Components/MainInput";
import ScaleText from "../../../../Components/ScaleText";
const LoginScreen = (props) => {
  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor={YELLOW_COLOR_CODE}
        barStyle="dark-content"
      />
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        contentContainerStyle={CommonStyles.scrollCon}
      >
        <View style={styles.WelcomeCntainer}>
          <View style={styles.MainConatinWelcome}>
            <View style={{ alignSelf: "center" }}>
              <Image
                resizeMode="contain"
                style={{ width: 220, height: 82 }}
                source={Images.LOGO}
              />
            </View>
            <View style={{ marginTop: 28 }}>
              <ScaleText style={styles.WelcomeTxt}>Welcome,</ScaleText>
              <ScaleText style={styles.SignInContinue}>
                Sign in to continue!
              </ScaleText>
            </View>
          </View>
          <View style={styles.InputContainer}>
            <View style={{ marginHorizontal: 16 }}>
              <MainInput
                headTxt={"Email-address"}
                placeholder={""}
                onChangeText={(txt) => {
                  props.setLoginData({
                    ...props.loginData,
                    email: txt,
                  });
                }}
                value={props.loginData?.email}
                keyboardType={"email-address"}
              />
              <MainInput
                headTxt={"Password"}
                placeholder={""}
                onChangeText={(txt) => {
                  props.setLoginData({
                    ...props.loginData,
                    password: txt,
                  });
                }}
                value={props.loginData?.password}
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity
              onPress={() => props.handleForgotPassword()}
              style={styles.ForgotPsswrdView}
            >
              <ScaleText style={styles.ForgotPsswrdTxt}>
                Forgot Password?
              </ScaleText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <Button
            buttonText="Log In"
            buttonLabelStyle={styles.LoginBtnTxt}
            onPress={() => props.onPressLogin()}
          />
          {/* <Button
            buttonText="Continue with Facebook"
            buttonLabelStyle={styles.FacebookBtnTxt}
            style={styles.FacebookBtnStyle}
            onPress={props.onPressFacebook}
          />
          <Button
            buttonText="Continue with Google"
            buttonLabelStyle={styles.LoginBtnTxt}
            onPress={props.onPressGoogle}
            style={styles.GoogleBtnStyle}
          /> */}
          <TouchableOpacity
            onPress={() => props.onPressSignUp()}
            style={{ paddingTop: 10 }}
          >
            <ScaleText style={styles.CreateAccountTxt}>
              Not Registered yet? Create new account{" "}
              <ScaleText style={styles.SignUpTtx}>SignUp</ScaleText>
            </ScaleText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
export default LoginScreen;
