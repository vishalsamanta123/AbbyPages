import { StyleSheet } from 'react-native';
import { FONT_FAMILY_REGULAR, LIGHT_GREY_COLOR_CODE, YELLOW_COLOR_CODE } from '../../../../Utils/Constant';
const Styles = StyleSheet.create({
    ADDBtnTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
    },
    ContainerStyle: {
        padding: 15
    },
    MainImgeStyle: {
        width: '100%',
        height: 160
    },
    DishNameTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 20
    },
    DesrcptnText: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE,
        fontSize: 13
    },
    MainPriceView:{
        paddingTop: 10
    },
    priceTextStyle:{
        fontFamily: FONT_FAMILY_REGULAR, 
        fontSize: 25
    },
     AddBtnTouchable: {
        // backgroundColor: YELLOW_COLOR_CODE,
        width: 300,
        height: 60,
        // marginLeft: 14,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        borderWidth:1,
        borderColor:YELLOW_COLOR_CODE
    },
})
export default Styles;