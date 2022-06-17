import React, { useState } from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    StatusBar,
    Image,
    TouchableOpacity
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import styles from './styles';
import Input from '../../../../Components/Input';
import Button from '../../../../Components/Button';
import CommonStyles from '../../../../Utils/CommonStyles';
import { WHITE_COLOR_CODE, FONT_FAMILY_REGULAR, YELLOW_COLOR_CODE } from '../../../../Utils/Constant';
import Header from '../../../../Components/Header';
const SignUpScreen = (props) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
        const value = moment(date).format('DD-MM-YYYY')
        props.setRegistrationData({
            ...props.registrationData,
            birth_date: value
        })
        hideDatePicker();
    };
    return (
        <KeyboardAvoidingView style={[CommonStyles.container]}>
            <StatusBar
                translucent={true}
                backgroundColor='transparent'
                barStyle='dark-content'
            />
            <Header
                RightImg={null}
                mncontainer={{ flex: 0.6 }}
                HeaderText=''
                HeaderMiddleImg={require('../../../../Assets/login_logo.png')}
            />
            <View style={[CommonStyles.body, { flex: 5.4, backgroundColor: WHITE_COLOR_CODE }]}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.WelcomeCntainer}>
                        <View style={styles.MainConatinWelcome}>
                            <Text style={styles.WelcomeTxt}>Create Account,</Text>
                            <Text style={styles.SignInContinue}>Sign up to get started!</Text>
                        </View>
                        <View style={styles.InputContainer}>
                            <Input
                                // autoCapitalize={'characters'}
                                onChangeText={(first_name) => props.setRegistrationData({
                                    ...props.registrationData,
                                    first_name: first_name
                                })}
                                value={props.registrationData.first_name}
                                secureTextEntry={false}
                                placeholder="First Name"
                                InputType="withScroll"
                            />
                            <Input
                                onChangeText={(last_name) => props.setRegistrationData({
                                    ...props.registrationData,
                                    last_name: last_name
                                })}
                                value={props.registrationData.last_name}
                                secureTextEntry={false}
                                placeholder="Last Name"
                                InputType="withScroll"
                            />
                            <Input
                                onChangeText={(email) => props.setRegistrationData({
                                    ...props.registrationData,
                                    email: email
                                })}
                                value={props.registrationData.email}
                                secureTextEntry={false}
                                keyboardType="email-address"
                                placeholder="Email"
                                InputType="withScroll"
                                autoCapitalize='none'
                            />
                            <Input
                                onChangeText={(password) => props.setRegistrationData({
                                    ...props.registrationData,
                                    password: password
                                })}
                                value={props.registrationData.password}
                                // secureTextEntry={false}
                                placeholder="Password"
                                InputType="withScroll"
                            />
                            <Input
                                onChangeText={(zip_code) => props.setRegistrationData({
                                    ...props.registrationData,
                                    zip_code: zip_code
                                })}
                                value={props.registrationData.zip_code}
                                secureTextEntry={false}
                                placeholder="Zip Code"
                                InputType="withScroll"
                            />
                            {/* <Input
                                onChangeText={(birth_date) => props.setRegistrationData({
                                    ...props.registrationData,
                                    birth_date: birth_date
                                })}
                                value={props.registrationData.birth_date}
                                secureTextEntry={false}
                                placeholder="Birthday"
                                InputType="withScroll"
                            /> */}
                            <TouchableOpacity
                                onPress={() => showDatePicker()}
                                style={{
                                    // height: 60,
                                    padding: 20,
                                    borderColor: '#d8d8d8',
                                    borderWidth: 1,
                                    borderRadius: 12,
                                    flexDirection: 'row',
                                    margin: 10,
                                    marginLeft: 15,
                                    marginRight: 15,
                                    // flex:1,
                                    // backgroundColor:"red",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}>
                                <Text style={{ fontSize: 15, fontFamily: FONT_FAMILY_REGULAR }}>
                                    {props.registrationData.birth_date
                                        === '' ? "Select a Date"
                                        : props.registrationData.birth_date}
                                </Text>
                                <Image
                                    resizeMode={"contain"}
                                    style={{ height: 24, width: 24, alignSelf: "flex-end" }}
                                    source={
                                        require("../../../../Assets/calendar_icon_field.png")
                                    }
                                />
                            </TouchableOpacity>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode='date'
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                        </View>
                    </View>
                    <View style={styles.ButtonContainer}>
                        <Button
                            buttonText="Sign Up"
                            buttonLabelStyle={styles.LoginBtnTxt}
                            onPress={props.onPressSingUp}
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
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}
export default SignUpScreen;