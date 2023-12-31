import { StyleSheet } from 'react-native';
import { SMALL_TEXT_COLOR, WHITE_COLOR_CODE, FONT_FAMILY_REGULAR, FONT_FAMILY_BOLD } from '../../../Utils/Constant';
const Styles = StyleSheet.create({
    startedbtntxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 20
    },
    maintxtVwe: {
        paddingTop: '12%'
    },
    maintxt: {
        fontSize: 22,
        lineHeight: 30,
        fontFamily: FONT_FAMILY_REGULAR,
        textAlign: 'center'
    },
    inputwvwe: {
        flex: 0.4,
        justifyContent: 'center'
    },
    footervwe: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor:WHITE_COLOR_CODE
    },
    btnvwe:{
        flex:0.9,
        marginLeft:'10%'
    },
    boximgvwe: {
        flex: 0.5,
        flexDirection: 'row'
    },
    imgvwe: {
        justifyContent: 'center',
        paddingLeft:20
    },
    lstbtnvwe: {
        flex: 3,
        flexDirection: 'row',
        paddingLeft: 10
    }
})
export default Styles;