import React from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import { LINE_COMMON_COLOR_CODE } from '../../../../Utils/Constant';
import Input from '../../../../Components/Input';
import Button from '../../../../Components/Button';
import Header from '../../../../Components/Header';
const ForgotPassword = (props) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}>
            <Header
                HeaderText='Forgot Password'
                RightImg={null}
            />
            <View style={{ height: '0.2%', backgroundColor: LINE_COMMON_COLOR_CODE }} />
            <View style={styles.body}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: "5%",
                    marginBottom: "5%"
                }}>
                    <Text style={styles.registxt}>Please enter you registered</Text>
                    <Text style={styles.emailtxt}>Email/Mobile number.</Text>
                </View>
                <Input
                    onChangeText={(email) => props.setEmail(email)}
                    // secureTextEntry={false}
                    value={props.email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholder="Email"
                    InputType="withScroll"
                />
                {/* <View style={styles.txtipt}>
                    <Text
                        textAlignVertical={true}
                        style={labelStyle}>
                        Email/ Mobile
                    </Text>
                    <TextInput
                        style={styles.txtipttxt}
                        onFocus={props._handleFocusEmail}
                        onBlur={props._handleBlurEmail}
                        onChangeText={(text) => props.setEmail(text)}
                    />
                </View> */}
                <Button
                    buttonText="Submit"
                    style={styles.LinearGradient}
                    buttonLabelStyle={styles.logtxt}
                    onPress={() => props.submitbtn()}
                />
            </View>
        </KeyboardAvoidingView>
    )
}
export default ForgotPassword;