import { StyleSheet } from 'react-native';
import { YELLOW_COLOR_CODE, WHITE_COLOR_CODE, GREY_COLOR_CODE, BLACK_COLOR_CODE, FONT_FAMILY_REGULAR, FONT_FAMILY_BOLD } from '../../../../Utils/Constant';
const Styles = StyleSheet.create({
    LoginBtnTxt: {
        fontFamily: FONT_FAMILY_REGULAR
    },
    FacebookBtnTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: WHITE_COLOR_CODE,
    },
    WelcomeCntainer: {
        flex: 4
    },
    MainConatinWelcome: {
        paddingLeft: 15,
        flex: 2.2,
        justifyContent: 'flex-end'
    },
    WelcomeTxt: {
        fontSize: 30,
        fontFamily: FONT_FAMILY_REGULAR
    },
    SignInContinue: {
        fontSize: 23,
        color: GREY_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR
    },
    InputContainer: {
        flex: 3.8,
        justifyContent: 'flex-end',
        marginBottom: 10
    },
    SignUpTtx: {
        color: YELLOW_COLOR_CODE,
        fontSize:14,
        textDecorationLine: 'underline'
    },
    CreateAccountTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        textAlign: 'center',
        fontSize: 12,
        color: BLACK_COLOR_CODE
    },
    ForgotPsswrdView: {
        alignItems: 'flex-end',
        paddingRight: 15
    },
    ForgotPsswrdTxt: {
        fontFamily: FONT_FAMILY_BOLD,
        textDecorationLine: 'underline',
        color: YELLOW_COLOR_CODE,
        fontSize: 16
    },
    ButtonContainer: {
        flex: 2,
        paddingTop: 10,
        justifyContent: 'center'
    },
    FacebookBtnStyle: {
        backgroundColor: "#1877f2",
        marginTop: 10
    },
    GoogleBtnStyle: {
        marginTop: 10,
        backgroundColor: WHITE_COLOR_CODE,
        borderWidth: 0.5
    }
})
export default Styles;