import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import {
  FONT_FAMILY_REGULAR,
  BLACK_COLOR_CODE,
  YELLOW_COLOR_CODE,
  FONT_SIZE,
} from "../../../../Utils/Constant";
import OTPTextView from "react-native-otp-textinput";
import Button from "../../../../Components/Button";
import CommonStyles from "../../../../Utils/CommonStyles";
import MainHeader from "../../../../Components/MainHeader";

const UserVerifyScreen = (props) => {
  return (
    <View style={CommonStyles.container}>
      <MainHeader
        headerText={"Verify Account"}
        fontSize={FONT_SIZE.medium}
        notifyIcon={false}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.maintxt}>
          <Text style={styles.mobtxt}>We have sent OTP on your registered</Text>
          <Text style={styles.emailtxt}>email or phone</Text>
          <Text style={styles.mobtxt}>Please verify your account</Text>
        </View>
        <View style={styles.footervwe}>
          <OTPTextView
            handleTextChange={(val) => props.handleOtp(val)}
            tintColor={YELLOW_COLOR_CODE}
            textInputStyle={{
              borderWidth: 2,
              color: BLACK_COLOR_CODE,
              fontFamily: FONT_FAMILY_REGULAR,
              borderBottomWidth: 2,
            }}
            inputCount={4}
            inputCellLength={1}
          />
          <Button
            buttonText="Confirm"
            style={styles.LinearGradient}
            buttonLabelStyle={styles.logtxt}
            onPress={() => props._handleOtpVerify()}
          />
          <TouchableOpacity
            onPress={() => props.otpresend()}
            style={styles.retouch}
          >
            <Text style={styles.didnttxt}>Didn't Receive an OTP?</Text>
            <Text style={styles.reTXT}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default UserVerifyScreen;
