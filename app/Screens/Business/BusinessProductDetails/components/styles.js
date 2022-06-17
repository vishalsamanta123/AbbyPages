import { StyleSheet } from 'react-native';
import { BLACK_COLOR_CODE,FONT_FAMILY_REGULAR, SMALL_TEXT_COLOR_CODE, WHITE_COLOR_CODE, YELLOW_COLOR_CODE } from '../../../../Utils/Constant';
const styles = StyleSheet.create({
    body: { flex: 3.5, backgroundColor: WHITE_COLOR_CODE, padding: 20 },
    localFooter: {
        // flex: 2.5,
        paddingHorizontal: 2,
        paddingVertical: 10,
        backgroundColor: YELLOW_COLOR_CODE,
    },
    text: {
        color: SMALL_TEXT_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR
    },
    MainText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 19
    },
    row: { flexDirection: "row", alignItems: "center" },
    PosterImgeStyle: {
        width: '100%',
        height: 230
    },
    PriceOfDishTxt: {
        color: BLACK_COLOR_CODE,
        fontSize: 17,
        lineHeight: 25,
        fontFamily: FONT_FAMILY_REGULAR
    },
    DishNameTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: BLACK_COLOR_CODE,
        fontSize: 17,
        width: '60%'
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "silver",
        marginHorizontal: 4
    },
    infocon: {
        padding: 20,
        borderBottomWidth: 15,
        borderBottomColor: '#f2f2f2',
        backgroundColor: '#fff'
    },
    hdngtxt: {
        fontSize: 18,
        lineHeight: 22,
        width: '90%',
        fontFamily: FONT_FAMILY_REGULAR,
        color: "#3a3838"
    },
    basiccon: {
        flexDirection: "row",
        alignItems: "center", margin: 2
    },
    maincontainers: {
        // padding: 10,
        flex: 1,
        backgroundColor: WHITE_COLOR_CODE,
        borderBottomWidth: 10,
        borderColor: "#f2f2f2"
    },
})
export default styles;