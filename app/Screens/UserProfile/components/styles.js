import { StyleSheet } from 'react-native';
import { YELLOW_COLOR_CODE, WHITE_COLOR_CODE, GREY_COLOR_CODE, BLACK_COLOR_CODE, FONT_FAMILY_REGULAR, FONT_FAMILY_BOLD, LIGHT_GREY_COLOR_CODE } from '../../../Utils/Constant';
const Styles = StyleSheet.create({
    EmailContainer: {
        padding: 15,
        paddingBottom: 25,
        backgroundColor: WHITE_COLOR_CODE
    },
    FlexViewContain: {
        flexDirection: 'row'
    },
    EmailNotifyTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 19
    },
    AddAccountTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        paddingTop: 5,
        lineHeight: 18,
        color: LIGHT_GREY_COLOR_CODE,
        fontSize: 13
    },
    PhoneNumberContain: {
        backgroundColor: WHITE_COLOR_CODE,
        marginTop: 10,
        paddingBottom: 15
    },
    PhoneDescrptnView: {
        padding: 15
    },
    PhoneDescrptnText: {
        lineHeight: 19,
        paddingTop: 5,
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE,
        fontSize: 12
    },
    EmalNotifyText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 14,
        color: BLACK_COLOR_CODE
    },
    ReceiveEmailView: {
        flexDirection: 'row',
    },
    ReceiveContain: {
        paddingLeft: 10
    },
    ReceiveEmailText: {
        fontSize: 12,
        width: '60%',
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE
    },
    NOteTextStyle: {
        fontSize: 9,
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE,
        width: '60%'
    },
    SaveBtnsTYLE: {
        marginTop: 5,
        marginTop: 10
    },
    CancelBtnTxt: {
        color: WHITE_COLOR_CODE,
        fontFamily: FONT_FAMILY_BOLD
    },
    CancelBtnStyle: {
        marginTop: 5,
        backgroundColor: GREY_COLOR_CODE,
        marginTop: 10,
        marginBottom: 10
    }
})
export default Styles;