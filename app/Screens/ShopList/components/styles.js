import { StyleSheet } from 'react-native';
import {
    WHITE_COLOR_CODE,
    FONT_FAMILY_BOLD,
    GREY_COLOR_CODE,
    FONT_FAMILY_REGULAR
} from '../../../Utils/Constant';
const Styles = StyleSheet.create({
    MainConatiner: {
        paddingTop: 10,
        paddingLeft: 15,
    },
    MainImgeStyle: {
        width: 100,
        height: 100,
        borderRadius: 15,
        // backgroundColor: "red",
        borderWidth: 0.2,
        borderColor: "grey", marginBottom: 5
    },
    MainConatinerView: {
        paddingLeft: 10,
        // paddingRight: 10,
        width: '56%'
    },
    MainServiceName: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 16.5
    },
    AddressTxtStyle: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 12,
        color: GREY_COLOR_CODE,
        lineHeight: 15
    },
    InformationView: {
        flexDirection: 'row',
        alignItems: "center"
    },
    MapImgeStyle: {
        width: 18,
        height: 18,
        top: 4
    },
    AddressTextStyles: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 12,
        color: GREY_COLOR_CODE,
        lineHeight: 25
    },
    RatingContainer: {
        flexDirection: 'row',
        // bottom: 10
    },
    RatingStyles: {
        backgroundColor: '#a3d74e',
        width: 28,
        height: 19,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    RatingStylesTxt: {
        color: WHITE_COLOR_CODE,
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: 11
    },
    RatingTextMain: {
        paddingLeft: 10,
        fontFamily: FONT_FAMILY_REGULAR,
        color: GREY_COLOR_CODE
    }
})
export default Styles;