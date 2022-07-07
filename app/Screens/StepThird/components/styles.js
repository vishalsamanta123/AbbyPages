import { StyleSheet } from 'react-native';
import { WHITE_COLOR_CODE, FONT_FAMILY_REGULAR } from '../../../Utils/Constant';
const Styles = StyleSheet.create({
    startedbtntxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 20
    },
    maintxtVwe: {
        paddingTop: '12%'
    },
    maintxt: {
        fontSize: 23,
        lineHeight: 30,
        fontFamily: FONT_FAMILY_REGULAR,
        textAlign: 'center'
    },
    inputwvwe: {
        justifyContent: 'center',
        paddingTop: 20
    },
    footervwe: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: WHITE_COLOR_CODE,
        justifyContent: 'center',
        // marginTop:20
    },
    boximgvwe: {
        flex: 0.5,
        flexDirection: 'row',
    },
    imgvwe: {
        justifyContent: 'center',
        paddingLeft: 20
    },
    lstbtnvwe: {
        flex: 3,
        flexDirection: 'row',
        paddingLeft: 10
    },
    inputtexvwe: {
        flex: 4.5, backgroundColor: WHITE_COLOR_CODE
    },
    btnvwe: {
        flex: 0.9,
        marginLeft: '10%'
    }

})
export default Styles;