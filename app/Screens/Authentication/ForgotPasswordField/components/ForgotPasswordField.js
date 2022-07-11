import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import Header from "../../../../Components/Header";
import Input from "../../../../Components/Input";
import Button from "../../../../Components/Button";
const ForgotPasswordFields = (props) => {
  return (
    <View style={styles.container}>
      <Header HeaderText="Forgot Password" RightImg={null} />
      <View style={styles.body}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Input
            onChangeText={(otp) => props.setOTP(otp)}
            secureTextEntry={false}
            value={props.otp}
            keyboardType="numeric"
            placeholder="OTP"
            InputType="withScroll"
            maxLength={6}
          />
          <Input
            onChangeText={(newPassword) => props.setNewPassword(newPassword)}
            secureTextEntry={false}
            value={props.newPassword}
            InputHeading="Password"
            placeholder="New Password"
            InputType="withScroll"
            maxLength={30}
          />
          <Input
            onChangeText={(repeatPassword) =>
              props.setRepeatPassword(repeatPassword)
            }
            secureTextEntry={false}
            InputHeading="Password"
            value={props.repeatPassword}
            placeholder="Repeat Password"
            maxLength={30}
            InputType="withScroll"
          />
          <Button
            buttonText="Submit"
            style={styles.LinearGradient}
            buttonLabelStyle={styles.logtxt}
            onPress={() => props._handlepasswordupdate()}
          />
          <TouchableOpacity
            onPress={() => props.otpresend()}
            style={styles.retouch}
          >
            <Text style={styles.didnttxt}>Didn't Receive an OTP?</Text>
            <Text style={styles.reTXT}>Resend OTP</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};
export default ForgotPasswordFields;
