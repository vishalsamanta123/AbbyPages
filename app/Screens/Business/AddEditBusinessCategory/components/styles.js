import { StyleSheet } from 'react-native';
import {
    WHITE_COLOR_CODE,
    FONT_FAMILY_REGULAR,
    LIGHT_GREY_COLOR_CODE,
    BLACK_COLOR_CODE
} from '../../../../Utils/Constant';
const styles = StyleSheet.create({
    labelStyle: {
        width: '98%',
        padding: 5,
        borderRadius: 7,
        flexDirection: "row",
        // marginBottom: '2%',
        backgroundColor: '#f2f2f2',
        marginLeft: 4,
        marginTop: 5
    },
    txt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 18,
        textAlign: "left",
        width: '100%',
        color: BLACK_COLOR_CODE,
        paddingLeft: 5
    },
    lstimgvwe: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
})
export default styles;