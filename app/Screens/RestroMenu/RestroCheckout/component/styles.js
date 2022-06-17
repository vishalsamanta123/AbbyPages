import { StyleSheet } from 'react-native';
import { WHITE_COLOR_CODE, FONT_FAMILY_REGULAR, LIGHT_GREY_COLOR_CODE, LINE_COMMON_COLOR_CODE, YELLOW_COLOR_CODE } from '../../../../Utils/Constant';
const styles = StyleSheet.create({
    MainContainer: {
        padding: 15,
        backgroundColor: WHITE_COLOR_CODE
    },
    AddressTextView: {
        paddingLeft: 10,
    },
    AddressTextStyle: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE,
        fontSize: 17
    },
    ChangeTextStyle: {
        fontFamily: FONT_FAMILY_REGULAR,
        lineHeight: 26,
        color: YELLOW_COLOR_CODE,
        fontSize: 15
    },
    AddressCOntain: {
        flexDirection: 'row'
    },
    CheckOutText: {
        fontSize: 18,
        fontFamily: FONT_FAMILY_REGULAR
    },
    DishMainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    DishTextCOntain: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    DishTextStyle: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 14,
        paddingLeft: 5,
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

    MainBtnTouchable: {
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: YELLOW_COLOR_CODE
    },
    ButtonLabel: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 18,
    },
    MainContent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    ArrowTouchable: {
        position: 'absolute',
        right: -10,
        top: -10
    },
    PleaseEnterTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        textAlign: "center",
        fontSize: 19,
        paddingTop: 15
    },
    txtInputStyle: {
        width: '100%',
        justifyContent: 'center',
        borderWidth: 1.5,
        fontFamily: FONT_FAMILY_REGULAR,
        borderColor: LINE_COMMON_COLOR_CODE,
        borderRadius: 5,
        height: 50,
        paddingLeft: 10,
        marginTop: 15
    },
    ScrollImge: {
        position: 'absolute',
        right: 14,
        bottom: 15
    },
    SechudleView: {
        width: '100%',
        marginTop: 5
    },
    ScheduleTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 16
    }
})
export default styles;