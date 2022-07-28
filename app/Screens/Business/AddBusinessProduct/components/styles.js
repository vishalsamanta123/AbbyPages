import { StyleSheet } from 'react-native';
import {
    FONT_FAMILY_BOLD,
    BLACK_COLOR_CODE,
    WHITE_COLOR_CODE,
    FONT_FAMILY_REGULAR,
    LIGHT_GREY_COLOR_CODE,
    SMALL_TEXT_COLOR_CODE,
} from '../../../../Utils/Constant';
const styles = StyleSheet.create({
    ProfileImgStyle: {
        width: 110,
        height: 110,
        borderWidth: 1,
        borderColor: "#a9a9a9"
    },
    labelStyle: {
        width: '98%',
        padding: 5,
        borderRadius: 7,
        flexDirection: "row",
        backgroundColor: '#f2f2f2',
        marginLeft: 4,
        marginTop: 5
    },
    txt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 18,
        textAlign: "left",
        width: '100%',
        color: BLACK_COLOR_CODE
    },
    /* Modal */
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(100,100,100, 0.2)'
    },
    alertBackground: {
        margin: 10,
        borderRadius: 5,
        paddingVertical: 20,
        backgroundColor: LIGHT_GREY_COLOR_CODE,
    },
    plseslecttxt: {
        fontSize: 15,
        fontFamily: FONT_FAMILY_BOLD,
        color: SMALL_TEXT_COLOR_CODE
    },
    selectvwe: {
        marginTop: 8,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tchvwe: {
        paddingLeft: 25,
        height: 65,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d8d8d8',
        width: '92%',
        justifyContent: 'center',
        marginBottom: 5
    },
    slctdtxt: {
        fontSize: 17,
        color: BLACK_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR,
    },
    uploadiconvwe: {
        marginTop: 15,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    secimgvwe: {
        height: 70,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d8d8d8',
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    prdctimgtxt: {
        paddingLeft: 25,
        fontSize: 17
    },
    uploadicin: {
        position: "absolute",
        right: 30,
    },
    slctimguri: {
        padding: 5,
        paddingLeft: 20,
        marginTop: 5
    },
    slcttch: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    selectyoursize: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    xtxt: {
        height: 25,
        width: 25,
        backgroundColor: 'red',
        borderRadius: 15,
    },
    xtetx: {
        paddingTop: 3,
        paddingLeft: 8,
        color: '#fff'
    },
    prdctvwe: {
        padding: 5,
        paddingLeft: 20,
        marginTop: 5
    },
    sizeslct: {
        fontSize: 18,
        fontFamily: FONT_FAMILY_REGULAR,
        color: WHITE_COLOR_CODE
    },
    cancelvwe: {
        position: "absolute",
        right: 5,
        top: 5
    },
    closeicon: {
        height: 25,
        width: 25,
        zIndex: 1
    },
    savebtn: {
        marginBottom: 15,
        marginTop: 10
    },
    categoryvwe: {
        height: 70,
        marginTop: 15,
        borderColor: '#d8d8d8',
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 8
    },
    catetchvwe: {
        justifyContent: 'space-between',
        paddingRight: 10,
        flexDirection: 'row',
        height: 70,
        alignItems: 'center'
    },
    cetetxt: { paddingLeft: 20 },
    dropiconvwe: {
        width: 25,
        height: 25
    },
    srchtxtinptvwe: {
        paddingLeft: 14,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#a9a9a9"
    }
})
export default styles;