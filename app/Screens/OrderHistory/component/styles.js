import { StyleSheet } from 'react-native';
import {
    WHITE_COLOR_CODE,
    FONT_FAMILY_REGULAR,
    LIGHT_GREY_COLOR_CODE,
    YELLOW_COLOR_CODE,
    BLACK_COLOR_CODE
} from '../../../Utils/Constant';
const styles = StyleSheet.create({
    cardCon: {
        paddingHorizontal: 20,
        backgroundColor: WHITE_COLOR_CODE,
        paddingBottom: 15,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 1
    },
    imgCon: {
        justifyContent: "center",
        alignItems: "center",
        bottom: 45
    },
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
    FriendContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    FlatlistContain: {
        width: '100%',
        borderTopColor: WHITE_COLOR_CODE,
        borderTopWidth: 0.3
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
        width: '35%',
        height: '100%'
    },
    DishDiscptnView: {
        padding: 15,
        width: '65%',
    },
    DishNameTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: BLACK_COLOR_CODE,
        fontSize: 18,
    },
    DiscrptnTxtStyle: {
        fontFamily: FONT_FAMILY_REGULAR,
        lineHeight: 18,
        color: LIGHT_GREY_COLOR_CODE,
        fontSize: 12,
        width: '95%'
    },
    DateContainer: {
        flexDirection: 'row',
        // paddingTop: 12
    },
    DateImge: {
        width: 13,
        height: 15,
        top: 2
    },
    ReviewText: {
        color: LIGHT_GREY_COLOR_CODE,
        fontSize: 12,
        fontFamily: FONT_FAMILY_REGULAR
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

})
export default styles;