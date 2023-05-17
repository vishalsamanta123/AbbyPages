import { StyleSheet } from 'react-native';
import { LIGHT_GREY_COLOR_CODE, LINE_COMMON_COLOR_CODE, FONT_FAMILY_REGULAR, YELLOW_COLOR_CODE } from '../../../../Utils/Constant';
const Styles = StyleSheet.create({
    WriteTextView: {
        padding: 15
    },
    WriteText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 17
    },
    TimeLineImge: {
        width: '100%',
        height: 90
    },
    ShareText: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE,
        fontSize: 13
    },
    OptionContain: {
        padding: 15,
        borderColor: LINE_COMMON_COLOR_CODE,
        borderWidth: 1.5,
        borderRadius: 5,
        margin: 15
    },
    selectOptionContain: {
        padding: 15,
        borderColor: YELLOW_COLOR_CODE,
        borderWidth: 1.5,
        borderRadius: 5,
        margin: 15
    },
    ImgeConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    WriteOwnText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 18
    },
    SecondContain: {
        margin: 15,
        borderRadius: 5,
        borderColor: LIGHT_GREY_COLOR_CODE,
        borderWidth: 1,
        padding: 15,
        height: 140
    },
    SecondContainTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE
    },
    NeedHelpContain: {
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15
    },
    NeedHelpText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 13,
        color: LIGHT_GREY_COLOR_CODE
    },
    InputStyleTxt: {
        height: 50,
        borderWidth: 1,
        paddingLeft: 10,
        borderColor: YELLOW_COLOR_CODE,
        borderRadius: 5
    }
})
export default Styles;