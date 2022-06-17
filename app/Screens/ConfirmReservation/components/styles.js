import { StyleSheet } from 'react-native';
import { LINE_COMMON_COLOR_CODE, YELLOW_COLOR_CODE, GREY_COLOR_CODE, FONT_FAMILY_REGULAR } from '../../../Utils/Constant';
const Styles = StyleSheet.create({
    ConfirmationContain: {
        padding: 15
    },
    HaedingParatTXT: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: GREY_COLOR_CODE,
        fontSize: 14,
        paddingLeft: 10
    },
    RestroInfoView: {
        flexDirection: 'row',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 15,
        borderColor: LINE_COMMON_COLOR_CODE,
        padding: 15
    },
    RestroProfile: {
        width: 90,
        height: 90,
        borderRadius: 4
    },
    RestroNameView: {
        width: 210,
        paddingLeft: 10,
    },
    RestroNameTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 19
    },
    DateViewContain: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5
    },
    CalenderImge: {
        width: 17,
        height: 17,
        top: 2
    },
    DateMainTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: GREY_COLOR_CODE,
        fontSize: 11
    },
    GuestsView: {
        flexDirection: 'row',
        paddingLeft: 2,
        paddingTop: 5,
        alignItems: 'center'
    },
    UserImgeStyle: {
        width: 17,
        height: 17
    },
    EditDetailTxt: {
        textDecorationLine: 'underline',
        fontFamily: FONT_FAMILY_REGULAR,
        color: YELLOW_COLOR_CODE,
        fontSize: 12
    }
})
export default Styles;