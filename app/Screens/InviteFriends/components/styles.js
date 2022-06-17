import { StyleSheet } from 'react-native';
import { YELLOW_COLOR_CODE, WHITE_COLOR_CODE, GREY_COLOR_CODE, FONT_FAMILY_REGULAR, FONT_FAMILY_BOLD, LIGHT_GREY_COLOR_CODE } from '../../../Utils/Constant';
const Styles = StyleSheet.create({
    ADDBtnTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
    },
    ContainerStyle: {
        padding: 15
    },
    priceTextStyle: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 22
    },
    AnotherEmailView: {
        paddingLeft: 15,
        paddingBottom: 15
    },
    AnotherEmailText: {
        color: YELLOW_COLOR_CODE,
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: 18,
        textDecorationLine: 'underline'
    }
})
export default Styles;