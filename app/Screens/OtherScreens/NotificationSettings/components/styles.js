import { Platform, StyleSheet } from 'react-native';
import { WHITE_COLOR_CODE, GREY_COLOR_CODE, BLACK_COLOR_CODE, FONT_FAMILY_REGULAR, LIGHT_GREY_COLOR_CODE } from '../../../Utils/Constant';
const Styles = StyleSheet.create({
    GetEmailText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 15
    },
    MainGetEmailView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5
    },
    GetEmailOptnTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE,
        paddingLeft: 5,
        fontSize: 14
    },
    EmailContainer: {
        padding: 15,
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
    AddLocationView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    EmailContainerBox: {
        borderRadius: 5,
        borderWidth: 0.4,
        padding: 20,
        marginTop: 15,
        marginBottom: 20,
        borderColor: LIGHT_GREY_COLOR_CODE
    },
    MainEmaliTXt: {
        fontSize: 19,
        color: BLACK_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR
    },
    PrimaryText: {
        color: LIGHT_GREY_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR
    },
    ImageDelete: {
        position: 'absolute',
        right: 0,
        bottom: -19,
        zIndex: 1,
        marginRight: 17
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
        fontSize: 13
    },
    EmalNotifyText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 19,
        color: BLACK_COLOR_CODE
    },
    ReceiveEmailView: {
        flexDirection: 'row',
        paddingTop: 10
    },
    ReceiveContain: {
        paddingLeft: 10
    },
    ReceiveEmailText: {
        fontSize: 15,
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE
    },
    NOteTextStyle: {
        fontSize: 12,
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE,
        width: '60%'
    },

    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    modalView: {
        backgroundColor: WHITE_COLOR_CODE,
        borderRadius: 10,
        borderWidth: 0.5,
        width: '100%',
        height: '100%',
        paddingTop:20
    },
    TouchableFlse: {
        position: 'absolute',
        flex: 1,
        right: 0,
        paddingRight: 15,
        top:Platform.OS==='ios'?40: 10,
        zIndex: 1
    },
    TxtInptStyle: {
        borderBottomWidth: 0.5,
        borderColor: GREY_COLOR_CODE,
        fontSize: 17,
        paddingLeft: 15,
        color: GREY_COLOR_CODE,
        paddingVertical:Platform.OS==='ios'?20:0
    },
    MainCntrySlctTouchble: {
        flex: 5,
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgrey'
    },
    CountryText: {
        fontSize: 18,
        margin: 5,
        fontFamily: FONT_FAMILY_REGULAR,
        color: 'grey'
    },

    MainTextViewCountry: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 5.5
    },
    CountryflgTxt: {
        fontSize: 25,
        fontFamily: FONT_FAMILY_REGULAR,
        color: GREY_COLOR_CODE,
    },
    RegionTextMain: {
        fontSize: 17,
        margin: 10,
        fontFamily: FONT_FAMILY_REGULAR,
        color: GREY_COLOR_CODE,
        marginTop: 19,
    },
})
export default Styles;