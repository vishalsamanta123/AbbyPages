import { StyleSheet, Dimensions, PixelRatio } from 'react-native';
import { WHITE_COLOR_CODE, FONT_FAMILY_BOLD, YELLOW_COLOR_CODE, LINE_COMMON_COLOR_CODE, GREY_COLOR_CODE, BLACK_COLOR_CODE, FONT_FAMILY_REGULAR, FONT_FAMILY_THIN, FONT_FAMILY_LIGHT } from '../../../Utils/Constant';
const Styles = StyleSheet.create({
    Mainconatiner: {
        padding: 15
    },
    HeadingView: {
        fontFamily: FONT_FAMILY_REGULAR, 
        fontSize: 20
    },
    DashiStockView: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: LINE_COMMON_COLOR_CODE,
        backgroundColor: WHITE_COLOR_CODE,
        padding: 15
    },
    DashiStockImg: {
        width: 110,
        height: 110,
        borderRadius: 3
    },
    StockInfoContainer: {
        width: '70%',
        paddingLeft: 15
    },
    StockNameTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 18
    },
    CostOfStockTxt: {
        fontSize: 16,
        color: YELLOW_COLOR_CODE,
        fontFamily: FONT_FAMILY_BOLD
    },
    DescriptionTxt: {
        fontFamily: FONT_FAMILY_LIGHT,
        color: GREY_COLOR_CODE,
        fontSize: 13
    },
    ReviewContainer: {
        flexDirection: 'row'
    },
    StarImageStyle: {
        width: 16,
        height: 16,
    },
    ReviewTxtStyle: {
        fontFamily: FONT_FAMILY_LIGHT,
        color: GREY_COLOR_CODE,
        fontSize: 12
    },
    PhotoReviewView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    }
})
export default Styles;