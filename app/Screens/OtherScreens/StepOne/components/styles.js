import { StyleSheet } from 'react-native';
import { GREY_COLOR_CODE, WHITE_COLOR_CODE, FONT_FAMILY_REGULAR } from '../../../Utils/Constant';
const Styles = StyleSheet.create({
    startedbtntxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 20
    },
    centermanimg: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3,
    },
    centerimgstye: {
        width: 190,
        height:190
    },
    centervwe: {
        alignSelf: 'center',
        paddingLeft: "10%",
        paddingRight: 10,
        flex: 2
    },
    centermntxt: {
        fontSize: 20,
        lineHeight: 30,
        fontFamily: FONT_FAMILY_REGULAR
    },
    btnvwe: {
        flex: 1
    }
})
export default Styles;