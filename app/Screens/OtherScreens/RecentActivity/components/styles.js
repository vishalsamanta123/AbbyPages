import { StyleSheet } from 'react-native';
import { WHITE_COLOR_CODE, FONT_FAMILY_REGULAR, LIGHT_GREY_COLOR_CODE } from '../../../Utils/Constant';
const Styles = StyleSheet.create({
    EmailContainer: {
        padding: 15,
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 10,
        backgroundColor: WHITE_COLOR_CODE
    },
    NotificationText: {
        fontFamily: FONT_FAMILY_REGULAR,
        lineHeight: 24,
        fontSize: 16,
        color: LIGHT_GREY_COLOR_CODE
    },
    TimingTextMain: {
        fontFamily: FONT_FAMILY_REGULAR,
        lineHeight: 25,
        fontSize: 14,
        color: LIGHT_GREY_COLOR_CODE
    }
})
export default Styles;