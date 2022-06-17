import { StyleSheet } from 'react-native';
import {
    YELLOW_COLOR_CODE,
    FONT_FAMILY_REGULAR,
    LIGHT_GREY_COLOR_CODE,
    BLACK_COLOR_CODE,
    WHITE_COLOR_CODE
} from '../../../../Utils/Constant';
const Styles = StyleSheet.create({
    FlatlistContain: {
        width: '100%',
        borderTopColor: WHITE_COLOR_CODE,
        borderTopWidth: 0.4,
        backgroundColor: YELLOW_COLOR_CODE,
        height: '10%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    secmainvwe: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingLeft: 10,
    },
    addvxvwe: { paddingLeft: 10, paddingRight: 8 },
    allicontxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 14,
        color: LIGHT_GREY_COLOR_CODE
    },
    RightImgeStyle: {
        marginLeft: 5,
        marginRight: 5
    },
    NoteText: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: WHITE_COLOR_CODE,
        fontSize: 12
    },
    EnjoyView: {
        borderBottomWidth: 1,
        // paddingBottom: 10,
        // paddingTop: 15,
        borderColor: LIGHT_GREY_COLOR_CODE,
        marginLeft: 20,
        marginRight: 20
    },
    EnjoyText: {
        fontSize: 13,
        color: LIGHT_GREY_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR,
    },
    AbbyPagesView: {
        paddingLeft: 15,
        paddingRight: 15,
        // paddingTop: 10
    },
    AbbyPagesText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 20,
        lineHeight: 30
    },
    BoxContainer: {
        padding: 30,
        backgroundColor: YELLOW_COLOR_CODE,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 3,
        borderWidth: 0.3,
        width: '90%',
        borderColor: LIGHT_GREY_COLOR_CODE
    },
    FreeSignUpText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 22
    },
    BoxTextMain: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 15,
        color: LIGHT_GREY_COLOR_CODE,
        textAlign: 'center'
    },
    creditvwe: { paddingLeft: 25, paddingRight: 25 },
    btnbxstyle: {
        backgroundColor: WHITE_COLOR_CODE, marginTop: '5%'
    },
    termsvwe: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5%'
    },
    seetermstxt: {
        fontSize: 15,
        fontFamily: FONT_FAMILY_REGULAR,
        color: WHITE_COLOR_CODE
    },
    declinetxt: {
        fontSize: 15,
        fontFamily: FONT_FAMILY_REGULAR,
        color: WHITE_COLOR_CODE
    },
    longtxtvwe: {
        marginLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    longtxt: {
        lineHeight: 20,
        fontSize: 13,
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE
    }
})
export default Styles;