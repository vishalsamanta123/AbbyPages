import { StyleSheet } from 'react-native';
import { FONT_FAMILY_REGULAR, LIGHT_GREY_COLOR_CODE } from '../../../Utils/Constant';
const Styles = StyleSheet.create({
    MainImgeStyle: {
        justifyContent: 'center',
        paddingTop: 15,
        alignItems: 'center'
    },
    ParaViewText: {
        paddingLeft: 20,
        paddingRight: 20
    },
    ParaMainText: {
        fontFamily: FONT_FAMILY_REGULAR,
        lineHeight: 24,
        textAlign: 'center',
        color: LIGHT_GREY_COLOR_CODE,
        fontSize: 13
    }
})
export default Styles;