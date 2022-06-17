import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import {
    FONT_FAMILY_REGULAR,
    WHITE_COLOR_CODE,
    BLACK_COLOR_CODE,
    SMALL_TEXT_COLOR,
    YELLOW_COLOR_CODE
} from '../../../../Utils/Constant';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.8,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    sgnupviw: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '15%'
    },
    sgntxt: {
        fontSize: 25,
        color: BLACK_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR
    },
    body: {
        flex: 5.2
    },
    footer: {
        height: 60, width: '100%',
        alignSelf: "center",
        justifyContent: "flex-end"
    },
    retouch: {
        marginTop: "8%",
        flexDirection: 'row', alignSelf: 'center'
    },
    reTXT: {
        color: YELLOW_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 15,
        marginLeft: 5
    },
    didnttxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: SMALL_TEXT_COLOR
    },
    footervwe: {
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:'red'
    },
    maintxt: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.5
    },
    emailtxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 16,
        color: SMALL_TEXT_COLOR
    },
    mobtxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 16,
        color: SMALL_TEXT_COLOR
    },
    LinearGradient: {
        marginTop: 15
    },
    logtxt: {
        fontSize: 20,
        color: WHITE_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR,
        textAlign: "center"
    },
})
export default styles;