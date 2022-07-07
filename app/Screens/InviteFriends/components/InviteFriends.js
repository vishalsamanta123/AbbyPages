import React from 'react';
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import Header from '../../../Components/Header';
import CommonStyles from '../../../Utils/CommonStyles';
import { WHITE_COLOR_CODE, FONT_FAMILY_REGULAR, LIGHT_GREY_COLOR_CODE, YELLOW_COLOR_CODE, FONT_FAMILY_BOLD } from '../../../Utils/Constant';
const InviteFriends = (props) => {
    return (
        <View style={[CommonStyles.container]}>
            <StatusBar
                translucent={true}
                backgroundColor='transparent'
                barStyle='dark-content'
            />
            <Header
                RightImg={null}
                HeaderText={'Invite Friend'}
            />
            <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
                <ScrollView>
                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <View style={styles.ContainerStyle}>
                            <Text style={styles.priceTextStyle}>Send AbbyPages invites to these email address:</Text>
                        </View>
                        <Input
                            onChangeText={(EmailAddress) => props.setEmailAddress(EmailAddress)}
                            value={props.EmailAddress}
                            secureTextEntry={false}
                            placeholder="Email"
                            InputType="withScroll"
                        />
                        {props.showEmailBox ?
                            <View>
                                <Input
                                    onChangeText={(emailExSecond) => props.setEmailExSecond(emailExSecond)}
                                    value={props.emailExSecond}
                                    secureTextEntry={false}
                                    placeholder="martinx@gmail.com"
                                    InputType="withScroll"
                                />
                                <Input
                                    onChangeText={(emailExThird) => props.setEmailExThired(emailExThird)}
                                    value={props.emailExThird}
                                    secureTextEntry={false}
                                    placeholder="martinx2406@gmail.com"
                                    InputType="withScroll"
                                />
                            </View>
                            :
                            null
                        }
                        <TouchableOpacity onPress={() => props.addAnotherEmail()} style={styles.AnotherEmailView}>
                            <Text style={styles.AnotherEmailText}>Add another email address</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, justifyContent: 'flex-end' }}>
                        <Button
                            buttonText="Save Email Invites"
                            buttonLabelStyle={styles.ADDBtnTxt}
                            onPress={()=>props.handleSaveEmail()}
                        />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
export default InviteFriends;
