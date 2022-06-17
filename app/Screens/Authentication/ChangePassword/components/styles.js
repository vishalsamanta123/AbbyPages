import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import {
    FONT_FAMILY_REGULAR,
    BLACK_COLOR_CODE,
    WHITE_COLOR_CODE,
    GREY_COLOR_CODE
} from '../../../../Utils/Constant';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE_COLOR_CODE
    },

    txtipt: {
        height: 65,
        borderColor: '#d8d8d8',
        borderWidth: 0.8,
        width: "90%",
        alignSelf: "center",
        borderRadius: 12,
    },
    txtipttxt: {
        fontSize: 18,
        fontFamily: FONT_FAMILY_REGULAR,
        marginTop: 19,
        paddingLeft: 20,
        marginLeft: 4,
    },
    body: {
        flex: 5.2,
        marginTop: 20,
        backgroundColor: WHITE_COLOR_CODE
    },
    sgnupviw: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '15%'
    },
    sgntxt: {
        fontSize: 20,
        color: BLACK_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR
    },
    CancelBtnTxt: {
        fontSize: 20,
        color: WHITE_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR,
        textAlign: "center"
    },
    CancelBtn: {
        backgroundColor: GREY_COLOR_CODE,
        marginTop: 10
    },
})
export default styles;