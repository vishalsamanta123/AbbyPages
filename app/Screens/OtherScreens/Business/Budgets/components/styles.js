import { StyleSheet } from 'react-native';
import { WHITE_COLOR_CODE, FONT_FAMILY_BOLD, LIGHT_GREY_COLOR_CODE, LINE_COMMON_COLOR_CODE, GREY_COLOR_CODE, BLACK_COLOR_CODE, FONT_FAMILY_REGULAR, FONT_FAMILY_THIN, FONT_FAMILY_LIGHT, YELLOW_COLOR_CODE } from '../../../../Utils/Constant';
const Styles = StyleSheet.create({
    WriteTextView: {
        padding: 15
    },
    WriteText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 23,
    },
    TimeLineImge: {
        width: '100%',
        height: 90
    },
    ShareText: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: BLACK_COLOR_CODE,
        fontSize: 16,
        paddingTop: 10
    },
    OptionContain: {
        padding: 15,
        borderColor: LINE_COMMON_COLOR_CODE,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: WHITE_COLOR_CODE,
        margin: 15
    },
    selectOptionContain: {
        padding: 15,
        borderColor: YELLOW_COLOR_CODE,
        backgroundColor: WHITE_COLOR_CODE,
        borderWidth: 1,
        borderRadius: 5,
        margin: 15
    },
    ImgeConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    WriteOwnText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 22
    },
    SecondContainTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: GREY_COLOR_CODE,
        lineHeight: 23,
        fontSize: 14
    },
    SpecialText: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: YELLOW_COLOR_CODE
    },
    SpecialContainer: {
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    EstimatedContain: {
        padding: 15, 
        paddingTop: 0
    },
    EstimatedText: {
        fontSize: 13,
        lineHeight: 19,
        fontFamily: FONT_FAMILY_REGULAR,
        color: GREY_COLOR_CODE
    },
    StandOutText: {
        fontSize: 13,
        lineHeight: 19,
        paddingTop: 10,
        fontFamily: FONT_FAMILY_REGULAR,
        color: GREY_COLOR_CODE
    },
    RecommndedView: {
        padding: 10,
        paddingTop: 0,
        paddingRight: 20
    },
    RightView: {
        flexDirection: 'row',
        paddingTop: 10
    },
    RecommndedText: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE,
        fontSize: 12
    },
    BudgetWorkView:{
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingBottom: 10, 
        borderBottomColor: LINE_COMMON_COLOR_CODE,
         borderBottomWidth: 1 
    },
    BudgetWorkCOntain:{
        padding: 10, paddingLeft: 0
    }
})
export default Styles;