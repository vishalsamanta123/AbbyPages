import { StyleSheet } from 'react-native';
import { GREY_COLOR_CODE, WHITE_COLOR_CODE, FONT_FAMILY_REGULAR } from '../../../../Utils/Constant';
const Styles = StyleSheet.create({
    MainImageView: {
        flex: 4,
        alignItems: 'center'
    },
    MainLogoImge: {
        width: '65%',
        height: '20%'
    },
    MainContainImge: {
        flex: 1
    },
    FooterContain: {
        width: '100%',
        flex: 2,
        justifyContent: 'space-evenly'
    },
    createAccntTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: WHITE_COLOR_CODE
    },
    LoginBtnTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
    },
    signUpBtnStyle: {
        backgroundColor: GREY_COLOR_CODE
    }
})
export default Styles;