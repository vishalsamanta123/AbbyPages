import { StyleSheet } from 'react-native';
import { BLACK_COLOR_CODE, FONT_FAMILY_REGULAR, LIGHT_GREY_COLOR_CODE, WHITE_COLOR_CODE } from '../../../../Utils/Constant';
const styles = StyleSheet.create({
    ProfileImgStyle: {
        width: 110,
        height: 110,
        borderWidth: 1,
        borderColor: "#a9a9a9"
    },
    selectvwe: {
        marginTop: 8,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tchvwe: {
        paddingLeft: 25,
        height: 65,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d8d8d8',
        width: '92%',
        justifyContent: 'center',
        marginBottom: 5
    },
    slctdtxt: {
        fontSize: 17,
        color: BLACK_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(100,100,100, 0.2)'
    },
    alertBackground: {
        margin: 10,
        borderRadius: 5,
        paddingVertical: 20,
        backgroundColor: LIGHT_GREY_COLOR_CODE,
    },
    selectyoursize: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    sizeslct: {
        fontSize: 18,
        fontFamily: FONT_FAMILY_REGULAR,
        color: WHITE_COLOR_CODE
    },
    cancelvwe: {
        position: "absolute",
        right: 5,
        top: 5
    },
    closeicon: {
        height: 25,
        width: 25,
        zIndex: 1
    },
})
export default styles;