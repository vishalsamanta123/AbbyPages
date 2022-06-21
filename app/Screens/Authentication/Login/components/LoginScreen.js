import React from "react";
import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import styles from "./styles";
import Input from "../../../../Components/Input";
import Button from "../../../../Components/Button";
import CommonStyles from "../../../../Utils/CommonStyles";
import Header from "../../../../Components/Header";
import { WHITE_COLOR_CODE } from "../../../../Utils/Constant";
import { TouchableOpacity } from "react-native-gesture-handler";
const LoginScreen = (props) => {
  return (
    <KeyboardAvoidingView style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        HeaderText=""
        HeaderMiddleImg={require("../../../../Assets/login_logo.png")}
      />
      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.WelcomeCntainer}>
          <View style={styles.MainConatinWelcome}>
            <Text style={styles.WelcomeTxt}>Welcome,</Text>
            <Text style={styles.SignInContinue}>Sign in to continue!</Text>
          </View>
          <View style={styles.InputContainer}>
            <Input
              onChangeText={(UserName) => props.setUserName(UserName)}
              value={props.UserName}
              secureTextEntry={false}
              placeholder="Username"
              InputType="withScroll"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input
              onChangeText={(Password) => props.setPassword(Password)}
              value={props.Password}
              secureTextEntry={true}
              placeholder="Password"
              InputType="withScroll"
            />
            <TouchableOpacity
              onPress={() => props.handleForgotPassword()}
              style={styles.ForgotPsswrdView}
            >
              <Text style={styles.ForgotPsswrdTxt}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <Button
            buttonText="Log In"
            buttonLabelStyle={styles.LoginBtnTxt}
            onPress={props.onPressLogin}
          />
          <Button
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
          />
          <TouchableOpacity
            onPress={() => props.onPressSignUp()}
            style={{ paddingTop: 10 }}
          >
            <Text style={styles.CreateAccountTxt}>
              Not Registered yet? Create new account{" "}
              <Text style={styles.SignUpTtx}>SignUp</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default LoginScreen;
