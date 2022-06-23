import React from 'react';
import {
    View,
    KeyboardAvoidingView,
    StatusBar,
} from 'react-native';
import styles from './styles';
import Header from '../../../../Components/Header';
import Input from '../../../../Components/Input';
import Button from '../../../../Components/Button';
const ChangePassword = (props) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <StatusBar
                barStyle='dark-content'
                translucent={true}
                backgroundColor={'transparent'} />
            <Header
                HeaderText='Change Password'
                RightImg={null}
            />
            <View style={styles.body}>
                <Input
                    onChangeText={(CurrentPasswrd) => props.setCurrentPasswrd(CurrentPasswrd)}
                    secureTextEntry={false}
                    value={props.CurrentPasswrd}
                    autoCapitalize="none"
                    placeholder="Current Password"
                    InputType="withScroll"
                    keyboardType='visible-password'
                />
                <Input
                    onChangeText={(NewPasswrd) => props.setNewPasswrd(NewPasswrd)}
                    secureTextEntry={false}
                    value={props.NewPasswrd}
                    autoCapitalize="none"
                    placeholder="New Password"
                    InputType="withScroll"
                    keyboardType='visible-password'
                />
                <Input
                    onChangeText={(VerifyPasswrd) => props.setVerifyPasswrd(VerifyPasswrd)}
                    secureTextEntry={false}
                    value={props.VerifyPasswrd}
                    autoCapitalize="none"
                    placeholder="Verify New Password"
                    InputType="withScroll"
                    keyboardType='visible-password'
                />
                <Button
                    buttonText="Save Password"
                    onPress={() => props.submitbtn()}
                />
                <Button
                    buttonText="Cancel"
                    style={styles.CancelBtn}
                    buttonLabelStyle={styles.CancelBtnTxt}
                    // onPress={() => props.submitbtn()}
                />
            </View>
        </KeyboardAvoidingView>
    )
}
export default ChangePassword;