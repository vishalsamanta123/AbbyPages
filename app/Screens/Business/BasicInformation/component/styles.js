import { StyleSheet } from 'react-native';
import {
    WHITE_COLOR_CODE,
    FONT_FAMILY_REGULAR,
    LIGHT_GREY_COLOR_CODE,
    BLACK_COLOR_CODE
} from '../../../../Utils/Constant';
const Styles = StyleSheet.create({
    startedbtntxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 20
    },
    inptvwe: {
        backgroundColor: WHITE_COLOR_CODE,
        paddingTop: 5
    },
    servicevwe: {
        borderRadius: 5,
        backgroundColor: WHITE_COLOR_CODE,
        padding: 15,
        marginTop: 10
    },
    serrtxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 20,
    },
    atlocatetxt: {
        fontSize: 14,
        fontFamily: FONT_FAMILY_REGULAR
    },
    frsttouchvwe: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10
    },
    alluncheck: {
        width: 30,
        height: 30
    },
    yestxt: {
        fontFamily: FONT_FAMILY_REGULAR, fontSize: 17, marginLeft: 5
    },
    Touchableopacityallvwe: {
        paddingTop: 5
    },
    ametientxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 19,
    },
    longtyxt: {
        fontSize: 13,
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE,
        lineHeight: 20
    },
    alcolholtxt: {
        paddingTop: 10,
    },
    alcolholvewtxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 18,
    },
    beervew: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    beertxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 15,
        paddingLeft: 5,
        color: LIGHT_GREY_COLOR_CODE
    },
    btnvwe: {
        flex: 1,
        marginTop: 10,
        marginBottom: 5,
    },
    lstbtnvwe: { backgroundColor: '#3a3838' },
    cancelbtntxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 20, color: WHITE_COLOR_CODE
    },
    labelStyle: {
        width: '98%',
        padding: 5,
        borderRadius: 7,
        flexDirection: "row",
        // marginBottom: '2%',
        backgroundColor: '#f2f2f2',
        marginLeft: 4,
        marginTop: 5
    },
    txt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 18,
        textAlign: "left",
        width: '100%',
        color: BLACK_COLOR_CODE,
        paddingLeft: 5
    },
    iconimg: {
        width: 20,
        height: 20,
        // borderRadius:15
    },
    lstimgvwe: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    countryViewSty: {
        backgroundColor: 'rgba(0,0,0,0)',
        marginLeft: 16,
        marginRight: 16,
        marginBottom:10,
        borderColor: '#d8d8d8',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: "center"
    },
    countryViewInnerSty: {
        backgroundColor: 'rgba(0,0,0,0)',
        height: 70,
        width: '98%',
        borderColor: '#d8d8d8',
        paddingLeft: 20,
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: "center"
    },
    latlistViewSty: {
        marginLeft: 20,
        borderWidth: 1,
        // height: 200,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        width: '90%',
        borderColor: '#d8d8d8',
    },
    flatlistViewSty: {
        marginLeft:18,
        marginRight:18,
        borderWidth:1,
        borderColor: '#d8d8d8',

    }
})
export default Styles;