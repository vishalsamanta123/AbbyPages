import { StyleSheet } from 'react-native';
import { WHITE_COLOR_CODE, GREY_COLOR_CODE, FONT_FAMILY_REGULAR, FONT_FAMILY_BOLD } from '../../../Utils/Constant';
const Styles = StyleSheet.create({
    SaveBtnTxt: {
        fontFamily: FONT_FAMILY_REGULAR
    },
    CancelBtnTxt: {
        fontFamily: FONT_FAMILY_BOLD,
        color: WHITE_COLOR_CODE

    },
    CancelBtnStyle: {
        marginTop: 10,
        backgroundColor: GREY_COLOR_CODE,
        borderWidth: 0.5
    }
})
export default Styles;