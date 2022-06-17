import { StyleSheet } from 'react-native';
import {
    FONT_FAMILY_REGULAR,
    SMALL_TEXT_COLOR_CODE,
    LIGHT_GREY_COLOR_CODE,
    GREY_COLOR_CODE
} from '../../../Utils/Constant';
const Styles = StyleSheet.create({
    startedbtntxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 20
    },
    bigmainvwe: { flex: 1, },
    firstimgvwe: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        marginTop: '5%'
    },
    congratulationsimg: {
        width: 90, height: 90
    },
    maintxtimg: {
        flexDirection: 'column'
    },
    firstlinetxt: {
        fontSize: 23,
        fontFamily: FONT_FAMILY_REGULAR,
        textAlign: 'center'
    },
    frstlinesmltxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        textAlign: 'center',
        fontSize: 15,
        color: SMALL_TEXT_COLOR_CODE,
        lineHeight: 22
    },
    centerlinvwe: {
        borderColor: LIGHT_GREY_COLOR_CODE,
        borderWidth:0.4,
        marginTop: '10%'
    },
    bdymnvwe: {
        flex: 3,
    },
    scrollablevwe: {
        marginTop: "8%"
    },
    whtastxt: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: FONT_FAMILY_REGULAR
    },
    btnvwe: {
        justifyContent: 'center',
        marginTop: "5%"
    },
    frstmnbxvwe: {
        borderWidth: 0.4,
        borderColor: GREY_COLOR_CODE,
        width: 320,
        alignSelf: 'center',
        marginTop: '5%',
        borderRadius: 5,padding:5
    },
    viaemailtxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 17,
        marginLeft: '4%',
        color: SMALL_TEXT_COLOR_CODE,
    },
    secmanvwe: {
        borderWidth: 0.4,
        borderColor: LIGHT_GREY_COLOR_CODE,
        width: 320,
        alignSelf: 'center',
        marginTop: '5%',
        borderRadius: 5,
        marginBottom: '2%'
    },
    hiretxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 17,
        marginLeft: '4%',
        color: SMALL_TEXT_COLOR_CODE,
    }
})
export default Styles;