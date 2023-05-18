import { StyleSheet } from 'react-native';
import { WHITE_COLOR_CODE, FONT_FAMILY_BOLD, LIGHT_GREY_COLOR_CODE, LINE_COMMON_COLOR_CODE, GREY_COLOR_CODE, BLACK_COLOR_CODE, FONT_FAMILY_REGULAR, FONT_FAMILY_THIN, FONT_FAMILY_LIGHT, YELLOW_COLOR_CODE } from '../../../../Utils/Constant';
const Styles = StyleSheet.create({
    BasicContain: {
        backgroundColor: WHITE_COLOR_CODE,
        padding: 15
    },
    BasicContainTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: BLACK_COLOR_CODE,
        fontSize: 18
    },
    DollarViewMain: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        justifyContent: 'center'
    },
    DiscountedPrice: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE,
        fontSize: 22,
        textDecorationLine: 'line-through'
    },
    MainPrice: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: BLACK_COLOR_CODE,
        fontSize: 22,
        paddingLeft: 5
    },
    MainContainer: {
        backgroundColor: WHITE_COLOR_CODE,
        padding: 15,
        paddingBottom: 20,
        paddingTop: 20, marginTop: 15
    },
    MainImpression: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        borderBottomWidth: 0.7,
        borderBottomColor: LINE_COMMON_COLOR_CODE,
        paddingBottom: 10
    },
    LastOptnView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    NoticeText: {
        fontSize: 13,
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE
    }

})
export default Styles;