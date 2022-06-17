import { StyleSheet } from 'react-native';
import {
    YELLOW_COLOR_CODE,
    WHITE_COLOR_CODE, FONT_FAMILY_BOLD,
    FONT_FAMILY_REGULAR,
    SMALL_TEXT_COLOR_CODE
} from '../../../../Utils/Constant';
const Styles = StyleSheet.create({
    AddPhotosText: {
        fontSize: 24,
        fontFamily: FONT_FAMILY_BOLD,
        padding: 15
    },
    buttonstyle: {
        width: '100%',
    },
    maintxtvwe: {
        flexDirection: 'row',
        paddingTop:15,
        justifyContent: 'space-evenly'
    },
    maintxt: { fontFamily: FONT_FAMILY_REGULAR, fontSize: 21, },
    circleicon: { marginTop: 7 },
    mainboxvwe: {
        borderRadius: 10,
        borderColor: WHITE_COLOR_CODE,
        alignSelf: 'center',
        marginTop: '5%',
        padding: '5%',
        backgroundColor: WHITE_COLOR_CODE,
        width: '90%',
        height: '45%',
        borderWidth: 1
    },
    lefttxtvwe: {
        flex: 1, flexDirection: 'row'
    },
    lefttxtvwesec: { flex: 2, justifyContent: 'center', alignItems: 'center', },
    ittextvwe: {
        flex: 4,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    companytxt: { fontFamily: FONT_FAMILY_REGULAR, fontSize: 20, },
    alltwoxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 11,
        color: SMALL_TEXT_COLOR_CODE
    },
})
export default Styles;