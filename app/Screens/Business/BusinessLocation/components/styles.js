import { StyleSheet } from 'react-native';
import { WHITE_COLOR_CODE, FONT_FAMILY_BOLD, LIGHT_GREY_COLOR_CODE, LINE_COMMON_COLOR_CODE, GREY_COLOR_CODE, BLACK_COLOR_CODE, FONT_FAMILY_REGULAR, FONT_FAMILY_THIN, FONT_FAMILY_LIGHT, YELLOW_COLOR_CODE } from '../../../../Utils/Constant';
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
    selectOptionContain: {
        padding: 15,
        borderColor: YELLOW_COLOR_CODE,
        borderWidth: 1.5,
        borderRadius: 5,
        margin: 15
    },
    WriteOwnText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 18
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
    EstimateView: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },
    AudienceCOntain: {
        margin: 15,
        borderColor: LINE_COMMON_COLOR_CODE,
        borderWidth: 0.3
    },
    HintView: {
        flexDirection: 'row',
        padding: 10,
        paddingRight: 20,
        backgroundColor: "#fff8e8",
        width: '100%'
    },
    HintTextMain: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE,
        fontSize: 12,
        lineHeight: 20
    },
    LimitedView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15
    },
    MeterImge: {
        width: 130,
        height: 80,
        bottom: 20
    }
})
export default Styles;