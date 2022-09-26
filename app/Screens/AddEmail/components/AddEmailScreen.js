import React from 'react';
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import styles from './styles';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import Header from '../../../Components/Header';
import CommonStyles from '../../../Utils/CommonStyles';
import {
    WHITE_COLOR_CODE,
    YELLOW_COLOR_CODE,
    BLACK_COLOR_CODE,
    FONT_FAMILY_REGULAR
} from '../../../Utils/Constant';

const AddEmailScreen = (props) => {
    return (
        <KeyboardAvoidingView style={[CommonStyles.container]}>
            <StatusBar
                translucent={true}
                backgroundColor='transparent'
                barStyle='dark-content'
            />
            <Header
                RightImg={null}
                HeaderText={'Add a new Email'}
                tintColor={BLACK_COLOR_CODE}
                mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
            />
            <View style={[CommonStyles.body, { paddingTop: '20%', backgroundColor: WHITE_COLOR_CODE, justifyContent: 'center' }]}>
                <ScrollView keyboardShouldPersistTaps={"always"}>
                    {
                        props.verifyEmail === '' ?
                            <>
                                <Input
                                    onChangeText={(email) => props.setAddEmail({
                                        ...props.addEmail,
                                        email: email
                                    })}
                                    value={props.addEmail && props.addEmail.email}
                                    secureTextEntry={false}
                                    placeholder="Email"
                                    keyboardType="email-address"
                                    InputType="withScroll"
                                />
                                <Button
                                    buttonText="Save Changes"
                                    buttonLabelStyle={styles.SaveBtnTxt}
                                    onPress={props.onPressSave}
                                    style={{ marginTop: 5 }}
                                />
                            </>
                            :
                            <>
                            <Text style={{textAlign:"center",paddingBottom:15}}>
                                Please Enter Otp
                            </Text>
                                <OTPTextView
                                    handleTextChange={(val) => props.setOtp(val)}
                                    tintColor={YELLOW_COLOR_CODE}
                                    containerStyle={{ alignSelf: "center" }}
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
                                    buttonLabelStyle={styles.logtxt}
                                    onPress={() => props._handleOtpVerify()}
                                />
                            </>
                    }

                    <Button
                        buttonText="Cancel"
                        buttonLabelStyle={styles.CancelBtnTxt}
                        onPress={props.onPressCancelBtn}
                        style={styles.CancelBtnStyle}
                    />
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}
export default AddEmailScreen
