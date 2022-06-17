import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import {
    FONT_FAMILY_REGULAR,
    BLACK_COLOR_CODE,
    ORANGE_COLOR_CODE,
    LINE_COLOR,
    YELLOW_COLOR_CODE,
    WHITE_COLOR_CODE,
} from '../../../../Utils/Constant';
import OTPTextView from 'react-native-otp-textinput';
import Button from '../../../../Components/Button';
import Header from '../../../../Components/Header';
import CommonStyles from '../../../../Utils/CommonStyles';
const BusinessUserVerifyScreen = (props) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={CommonStyles.container}>
            <Header
                HeaderText='Verify Account'
                RightImg={null}
            />
            <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
                <View style={styles.maintxt}>
                    <Text style={styles.mobtxt}>
                        We have sent OTP on your registered
                   </Text>
                    <Text style={styles.emailtxt}>
                        email or phone
                   </Text>
                    <Text style={styles.mobtxt}>
                        Please verify your account
                   </Text>
                </View>
                <View style={styles.footervwe}>
                    <OTPTextView
                        handleTextChange={(val) => props.handleOtp(val)}
                        tintColor={YELLOW_COLOR_CODE}
                        containerStyle
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
                        style={styles.retouch}>
                        <Text style={styles.didnttxt}>
                            Didn't Receive an OTP?
                        </Text>
                        <Text style={styles.reTXT}>
                            Resend OTP
                                </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView >
    )
}
export default BusinessUserVerifyScreen;