import { StyleSheet } from 'react-native';
import { WHITE_COLOR_CODE, YELLOW_COLOR_CODE, LINE_COMMON_COLOR_CODE, GREY_COLOR_CODE, FONT_FAMILY_THIN, FONT_FAMILY_REGULAR, BLACK_COLOR_CODE } from '../../../Utils/Constant';
const Styles = StyleSheet.create({
    LocatnSrchCntain: {
        flex: 2.8,
        backgroundColor: YELLOW_COLOR_CODE,
        justifyContent: 'center',
        paddingBottom: 15
    },
    TextInputView: {
        alignSelf: 'center',
        width: '90%',
        marginTop: 10
    },
    TextInputStyle: {
        borderRadius: 4,
        backgroundColor: WHITE_COLOR_CODE,
        fontSize: 16,
        paddingLeft: 40,
        fontFamily: FONT_FAMILY_REGULAR,
        color: BLACK_COLOR_CODE
    },
    TextInputImge: {
        position: 'absolute',
        zIndex: 1,
        marginTop: 15,
        marginLeft: 10
    },
    SearchTxtStyle: {
        color: WHITE_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR
    },
    SearchBtnStyle: {
        backgroundColor: 'rgba(50, 50, 50, 0.4)',
        padding: 14,
        borderRadius: 4,
        marginTop: 10
    },
    OptionsConatin: {
        flex: 3.2, backgroundColor: WHITE_COLOR_CODE
    },
    MainOptinsView: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        marginLeft: 10,
        borderBottomColor: LINE_COMMON_COLOR_CODE,
        backgroundColor: WHITE_COLOR_CODE,
        paddingTop: 15,
        paddingBottom: 15
    },
    OptnsImgContain: {
        flex: 1,
        alignItems: 'center',
        paddingRight: 15
    },
    OptnsMainText: {
        fontSize: 19,
        color: GREY_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR
    },
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    modalView: {
        backgroundColor: WHITE_COLOR_CODE,
        borderRadius: 10,
        borderWidth: 0.5,
        width: '100%',
        height: '100%',
    },
    TouchableFlse: {
        position: 'absolute',
        flex: 1,
        right: 0,
        paddingRight: 15,
        top: 10,
        zIndex: 1
    },
    TxtInptStyle: {
        borderBottomWidth: 0.5,
        borderColor: GREY_COLOR_CODE,
        fontSize: 17,
        paddingLeft: 15,
        color: GREY_COLOR_CODE
    },
    MainCntrySlctTouchble: {
        flex: 5,
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgrey'
    },
})
export default Styles;