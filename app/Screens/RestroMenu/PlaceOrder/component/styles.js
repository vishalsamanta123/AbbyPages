import { StyleSheet } from 'react-native';
import { WHITE_COLOR_CODE, FONT_FAMILY_REGULAR, LIGHT_GREY_COLOR_CODE, BLACK_COLOR_CODE, YELLOW_COLOR_CODE } from '../../../../Utils/Constant';
const styles = StyleSheet.create({
    MainContainer: {
        padding: 15,
        backgroundColor: WHITE_COLOR_CODE
    },
    CheckOutText: {
        fontSize: 19,
        fontFamily: FONT_FAMILY_REGULAR
    },
    DishMainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    DishTextCOntain: {
        flexDirection: 'row',
    },
    DishTextStyle: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 14,
        color: YELLOW_COLOR_CODE
    },
    PriceDishText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 14,
        color: LIGHT_GREY_COLOR_CODE
    },
    SubTotalView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15
    },
    SubTotalText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 14
    },
    CheckBtnView: {
        flex: 0.5,
        justifyContent: 'center',
        backgroundColor: WHITE_COLOR_CODE
    },
    OrderTextStyle: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE
    }
})
export default styles;