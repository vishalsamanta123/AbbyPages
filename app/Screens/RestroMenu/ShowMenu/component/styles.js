import { StyleSheet } from 'react-native';
import { WHITE_COLOR_CODE, FONT_FAMILY_REGULAR, LIGHT_GREY_COLOR_CODE, FONT_FAMILY_BOLD, BLACK_COLOR_CODE, YELLOW_COLOR_CODE } from '../../../../Utils/Constant';
const styles = StyleSheet.create({
    lablestyle: {
        flexDirection: 'row',
        margin: 15,
    },
    txtCat: {
        fontSize: 15,
        lineHeight: 18,
        color: WHITE_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR,
    },
    FlatlistContain: {
        width: '100%',
        borderTopColor: WHITE_COLOR_CODE,
        borderTopWidth: 0.3
    },
    MainContainer: {
        padding: 15
    },
    MainHeadText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 24
    },
    ConatinView: {
        borderWidth: 0.5,
        flexDirection: 'row',
        borderRadius: 3,
        marginBottom: 15,
        borderColor: LIGHT_GREY_COLOR_CODE,
    },
    DishImgeStyle: {
        width: '40%',
        height: '100%'
    },
    DishDiscptnView: {
        padding: 15
    },
    DishNameTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: BLACK_COLOR_CODE,
        fontSize: 17,
        width: '60%'
    },
    DiscrptnTxtStyle: {
        fontFamily: FONT_FAMILY_REGULAR,
        lineHeight: 18,
        color: LIGHT_GREY_COLOR_CODE,
        fontSize: 12,
        width: '45%'
    },
    PriceOfDishTxt: {
        color: BLACK_COLOR_CODE,
        fontSize: 19,
        lineHeight: 35,
        fontFamily: FONT_FAMILY_REGULAR
    },
    ReviewView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ReviewText: {
        color: LIGHT_GREY_COLOR_CODE,
        fontSize: 12,
        fontFamily: FONT_FAMILY_REGULAR
    },
    AddBtnTouchable: {
        backgroundColor: YELLOW_COLOR_CODE,
        width: 90,
        height: 30,
        marginLeft:10,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    AddBtnTxt: {
        color: '#fff',
        fontSize: 15,
        fontFamily: FONT_FAMILY_REGULAR
    },

})
export default styles;