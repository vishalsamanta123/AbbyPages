import { StyleSheet } from 'react-native';
import {
    YELLOW_COLOR_CODE,
    FONT_FAMILY_REGULAR,
    FONT_FAMILY_BOLD,
    SMALL_TEXT_COLOR_CODE,
    LIGHT_BLACK_COLOR_CODE,
    LIGHT_GREY_COLOR_CODE,
    WHITE_COLOR_CODE,
    BLACK_COLOR_CODE,
    } from '../../../../Utils/Constant';
const styles = StyleSheet.create({
    ProfileImgStyle: {
        width: 110,
        height: 110,
        borderWidth: 1,
        borderColor: "#a9a9a9"
    },
    labelStyle: {
        width: '98%',
        padding: 5,
        borderRadius: 7,
        flexDirection: "row",
        // marginBottom: '2%',
        backgroundColor: '#f2f2f2',
        marginLeft:4,
        marginTop:5
    },
    txt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 18,
        textAlign: "left",
        width: '100%',
        color: BLACK_COLOR_CODE
    },
})
export default styles;