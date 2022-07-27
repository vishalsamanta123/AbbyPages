import { StyleSheet } from 'react-native';
import {
    BLACK_COLOR_CODE,
    YELLOW_COLOR_CODE,
    FONT_FAMILY_REGULAR,
    LIGHT_GREY_COLOR_CODE,
} from '../../../../Utils/Constant';
const Styles = StyleSheet.create({
    allmainimg: {
        width: '100%',
        height: '28%'
    },
    mainboxvwe: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        paddingLeft: 0,
        marginLeft: 15,
        borderBottomColor: LIGHT_GREY_COLOR_CODE,
        borderBottomWidth: 0.5
    },
    secmainvwe: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    addvxvwe: { paddingLeft: 10 },
    allicontxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 18,
        color: BLACK_COLOR_CODE
    },
    alladdtxt: {
        fontSize: 12,
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE
    },
    lastimvwe: { justifyContent: 'center' },
    alladdtxtyellowtxt: {
        fontSize: 12,
        fontFamily: FONT_FAMILY_REGULAR,
        color: YELLOW_COLOR_CODE
    }
})
export default Styles;