import { StyleSheet } from 'react-native';
import { FONT_FAMILY_REGULAR, LIGHT_GREY_COLOR_CODE } from '../../../Utils/Constant';
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
        marginTop:2
    },
    TimingTextMain: {
        fontFamily: FONT_FAMILY_REGULAR,
        lineHeight: 25,
        fontSize: 14,
        color: LIGHT_GREY_COLOR_CODE
    }

})
export default Styles;