import React from 'react';
import {
    View,
    Image,
    StatusBar,
} from 'react-native';
import styles from './styles';
import Button from '../../../../Components/Button';
import CommonStyles from '../../../../Utils/CommonStyles';
import { WHITE_COLOR_CODE } from '../../../../Utils/Constant';
const HomeScreen = (props) => {
    return (
        <View style={[CommonStyles.container, { backgroundColor: WHITE_COLOR_CODE }]}>
            <StatusBar
                translucent={false}
                backgroundColor='transparent'
                barStyle='dark-content'
            />
            <View style={[CommonStyles.body]}>
                <View style={styles.MainImageView}>
                    <Image resizeMethod={"auto"} resizeMode='contain' style={styles.MainLogoImge} source={require('../../../../Assets/login_logo2.png')} />
                    <Image style={styles.MainContainImge} resizeMode={"contain"} source={require('../../../../Assets/login_graphic2.png')} />
                </View>
                <View style={styles.FooterContain}>
                    <Button
                        buttonText="Create Business Account"
                        buttonLabelStyle={styles.LoginBtnTxt}
                        onPress={props.onPressCreateBusiness}
                    />
                    <Button
                        buttonText="Log in"
                        buttonLabelStyle={styles.LoginBtnTxt}
                        onPress={props.onPressLogin}
                    />
                    <Button
                        buttonText="Create New Account"
                        style={styles.signUpBtnStyle}
                        buttonLabelStyle={styles.createAccntTxt}
                        onPress={props.onPressSignUp}
                    />
                </View>
            </View>
        </View>
    )
}
export default HomeScreen
