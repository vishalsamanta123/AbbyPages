import { StyleSheet } from 'react-native';
import {
    FONT_FAMILY_REGULAR,
    YELLOW_COLOR_CODE,
    WHITE_COLOR_CODE,
    SMALL_TEXT_COLOR_CODE,
    LIGHT_GREY_COLOR_CODE,
    BLACK_COLOR_CODE
} from '../../../../Utils/Constant'
const Styles = StyleSheet.create({
    lablestyle: {
        flexDirection: 'row',
        margin: 15,
        marginRight: 20
    },
    txtCat: {
        fontSize: 15,
        lineHeight: 18,
        color: WHITE_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR,
    },
    ConatinView: {
        borderWidth: 0.5,
        flexDirection: 'row',
        borderRadius: 3,
        margin: 15,
        marginBottom: 5,
        borderColor: LIGHT_GREY_COLOR_CODE,
    },
    DishImgeStyle: {
        width: '40%',
        height: '100%'
    },
    DishDiscptnView: {
        padding: 15,
        width:'60%',
    },
    DishNameTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: BLACK_COLOR_CODE,
        fontSize: 19,
    },
    PriceOfDishTxt: {
        color: BLACK_COLOR_CODE,
        fontSize: 19,
        lineHeight: 35,
        fontFamily: FONT_FAMILY_REGULAR
    },
    DiscrptnTxtStyle: {
        fontFamily: FONT_FAMILY_REGULAR,
        lineHeight: 18,
        color: LIGHT_GREY_COLOR_CODE,
        fontSize: 12,
        width: '95%'
    },
    AddBtnTouchable: {
        backgroundColor: YELLOW_COLOR_CODE,
        width: 35,
        marginRight: 10,
        marginTop: 15,
        height: 35,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ReviewText: {
        color: LIGHT_GREY_COLOR_CODE,
        fontSize: 12,
        fontFamily: FONT_FAMILY_REGULAR
    },
    DateContainer: {
        flexDirection: 'row',
        paddingTop: 12
    },
    DateImge: {
        width: 13,
        height: 15,
        top: 2
    },
    ViewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    PendingView: {
        flexDirection: 'row',
        paddingTop: 5
    },
    CheckImge: {
        width: 13,
        height: 13,
        top: 2

    }
}
);
export default Styles;