import { StyleSheet } from 'react-native';
import { WHITE_COLOR_CODE, FONT_FAMILY_REGULAR, LIGHT_GREY_COLOR_CODE } from '../../../Utils/Constant';
const Styles = StyleSheet.create({
    BoxContainer: {
        // height: '40%',
        padding: 30,
        backgroundColor: WHITE_COLOR_CODE,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        borderRadius: 3,
        borderWidth: 0.3,
        borderColor: LIGHT_GREY_COLOR_CODE
    },
    FreeSignUpText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 20
    },
    BoxTextMain: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 15,
        color: LIGHT_GREY_COLOR_CODE,
        textAlign: 'center'
    }
})
export default Styles;