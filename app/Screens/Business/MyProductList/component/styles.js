import { StyleSheet } from 'react-native';
import { WHITE_COLOR_CODE, FONT_FAMILY_REGULAR, LIGHT_GREY_COLOR_CODE, FONT_FAMILY_BOLD, BLACK_COLOR_CODE, YELLOW_COLOR_CODE } from '../../../../Utils/Constant';
const styles = StyleSheet.create({
    lablestyle: {
        flexDirection: 'row',
        margin: 5,
        marginBottom:20,
        width: 110,
        borderRadius: 20,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    txtCat: {
        fontSize: 15,
        lineHeight: 18,
        color: WHITE_COLOR_CODE,
        fontFamily: FONT_FAMILY_BOLD,
    },
    MainContainer: {
        padding: 10
    },
    MainHeadText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 22
    },
    ConatinView: {
        borderWidth: 0.5,
        flexDirection: 'row',
        borderRadius: 3,
        marginBottom: 15,
        borderColor: LIGHT_GREY_COLOR_CODE,
        padding:10
    },
    DishImgeStyle: {
        // width: 120,
        // height: 150
        flex:1
    },
    DishDiscptnView: {
        width:'98%',
        padding:5
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
        width: '65%'
    },
    PriceOfDishTxt: {
        color: BLACK_COLOR_CODE,
        fontSize: 17,
        lineHeight: 25,
        fontFamily: FONT_FAMILY_REGULAR
    },
    ReviewView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    ReviewText: {
        color: LIGHT_GREY_COLOR_CODE,
        fontSize: 12,
        fontFamily: FONT_FAMILY_REGULAR
    },
    AddBtnTouchable: {
        backgroundColor: YELLOW_COLOR_CODE,
        width: 35,
        marginTop: 15,
        height: 35,
        marginLeft: 10,
        borderRadius: 20,
        left:1,
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