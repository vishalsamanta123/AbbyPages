import { StyleSheet } from 'react-native';
import { FONT_FAMILY_REGULAR, GREY_COLOR_CODE, LIGHT_GREY_COLOR_CODE } from '../../../Utils/Constant';
const Styles = StyleSheet.create({
    EmailContainer: {
        padding: 15,
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 10,
        backgroundColor: '#f2f2f2',
        elevation: 2
    },
    NotificationText: {
        fontFamily: FONT_FAMILY_REGULAR,
        lineHeight: 24,
        fontSize: 14,
        color: LIGHT_GREY_COLOR_CODE,
        marginTop: 2
    },
    TimingTextMain: {
        fontFamily: FONT_FAMILY_REGULAR,
        lineHeight: 25,
        fontSize: 14,
        color: LIGHT_GREY_COLOR_CODE
    },
    notificationttle: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 15,
        color: GREY_COLOR_CODE
    }

})
export default Styles;