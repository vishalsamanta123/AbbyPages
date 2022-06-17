import { StyleSheet } from 'react-native';
import { GREY_COLOR_CODE, FONT_FAMILY_REGULAR } from '../../../../Utils/Constant';
const Styles = StyleSheet.create({
    ConfirmationContain: {
        padding: 15,
        flexDirection: 'row'
    },
    GuestsView: {
        flexDirection: 'row',
        paddingLeft: 6,
        alignItems: 'center'
    },
    UserImgeStyle: {
        width: 17,
        height: 17
    },
    HeadingParatTXT: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: GREY_COLOR_CODE,
        fontSize: 15,
        paddingLeft: 10
    }
})
export default Styles;