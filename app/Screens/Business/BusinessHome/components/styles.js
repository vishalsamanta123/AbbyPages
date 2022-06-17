import { StyleSheet } from 'react-native';
import { WHITE_COLOR_CODE, FONT_FAMILY_BOLD, LIGHT_GREY_COLOR_CODE, LINE_COMMON_COLOR_CODE, GREY_COLOR_CODE, BLACK_COLOR_CODE, FONT_FAMILY_REGULAR, FONT_FAMILY_THIN, FONT_FAMILY_LIGHT, YELLOW_COLOR_CODE } from '../../../../Utils/Constant';
const Styles = StyleSheet.create({
    ImageContainer: {
        backgroundColor: WHITE_COLOR_CODE,
    },
    PosterImgeStyle: {
        width: '100%',
        height: 190
    },
    ViewContain: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    BookMarkContainer: {
        backgroundColor: WHITE_COLOR_CODE,
        marginTop: 10,
        padding: 15,
        margin: 15,
        borderRadius: 3,
        borderColor: LINE_COMMON_COLOR_CODE,
        borderWidth: 0.5
    },
    MainContainText: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: BLACK_COLOR_CODE,
        fontSize: 18
    },
    ViewContainer: {
        flexDirection: 'row',
        paddingTop: 10
    },
    ViewParagrapgh: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        paddingTop: 0
    },
    YellowText: {
        fontSize: 15,
        fontFamily: FONT_FAMILY_REGULAR,
        color: YELLOW_COLOR_CODE
    },
    CategoriesDcptnText: {
        fontSize: 13,
        lineHeight: 19,
        paddingBottom: 10,
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE
    },
    ItinfoTextStyle: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: 18,
        color: WHITE_COLOR_CODE
    },
    AddressText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 14,
        color: WHITE_COLOR_CODE
    },
    ReviewText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 13,
        color: WHITE_COLOR_CODE
    },
    MainActivityTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 20,
        padding: 15,
        color: BLACK_COLOR_CODE
    },
    ActivityView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 15,
    },
    ActivityOptn: {
        width: '30%',
        backgroundColor: GREY_COLOR_CODE,
        height: 45,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ActivityOptnTxt: {
        fontFamily: FONT_FAMILY_BOLD,
        color: WHITE_COLOR_CODE
    },
    MainWelcomeContain: {
        backgroundColor: WHITE_COLOR_CODE,
        padding: 15
    },
    pageVisitView: {
        padding: 14,
        marginTop: 10,
        borderRadius: 4,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: LIGHT_GREY_COLOR_CODE,
        flexDirection: 'row'
    },
    pageVisitTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 14,
        paddingLeft: 5
    },
    WelcomeHead: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 20,
        paddingTop: 10,
        color: BLACK_COLOR_CODE
    },
    GrowContain: {
        backgroundColor: "#fff8e8",
        padding: 15
    },
    AboutCOntainer: {
        padding: 15,
        backgroundColor: WHITE_COLOR_CODE,
        marginTop: 20
    },
    AboutOptnView: {
        flexDirection: 'row',
        paddingTop: 10
    },
    AboutOptnText: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: BLACK_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 14
    },
    TextDescptn: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 14
    }
})
export default Styles;