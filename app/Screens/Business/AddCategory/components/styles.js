import { StyleSheet } from 'react-native';
import { FONT_FAMILY_BOLD, WHITE_COLOR_CODE, LIGHT_GREY_COLOR_CODE, FONT_FAMILY_REGULAR, BLACK_COLOR_CODE, YELLOW_COLOR_CODE } from '../../../../Utils/Constant';
const styles = StyleSheet.create({
    lablestyle: {
        flexDirection: 'row',
        margin: 5,
        marginBottom: 20,
        borderRadius: 20,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: LIGHT_GREY_COLOR_CODE,
    },
    txtCat: {
        fontSize: 15,
        lineHeight: 18,
        color: WHITE_COLOR_CODE,
        fontFamily: FONT_FAMILY_BOLD,
    },
    catetxt: {
        flex: 4,
        flexDirection: 'row',
        margin: 5,
        marginTop: 20,
        borderRadius: 20,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: LIGHT_GREY_COLOR_CODE,
    },
    mainvwe: {
        flex: 1,
        flexDirection: 'row',
    },
    commmonvwe: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    editPencilVw: {
        width: 40,
        height: 40,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(100,100,100, 0.5)'
    },
    alertBackground: {
        margin: 10,
        borderRadius: 5,
        paddingVertical: 20,
        backgroundColor: WHITE_COLOR_CODE
    },
    alertBox: {
        width: 200,
        height: 250,
        flexDirection: "row",
    },
    selectyoursize: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    sizeslct: {
        fontSize: 18,
        fontFamily: FONT_FAMILY_REGULAR,
        color: BLACK_COLOR_CODE
    },
    cancelvwe: {
        position: "absolute",
        right: 5,
        top: 5
    },
    closeicon: {
        height: 20,
        width: 20,
        zIndex: 1
    },
})
export default styles;