import { StyleSheet,Dimensions } from 'react-native';
import { WHITE_COLOR_CODE, FONT_FAMILY_BOLD, LIGHT_GREY_COLOR_CODE, LINE_COMMON_COLOR_CODE, GREY_COLOR_CODE, BLACK_COLOR_CODE, FONT_FAMILY_REGULAR, FONT_FAMILY_THIN, FONT_FAMILY_LIGHT, YELLOW_COLOR_CODE } from '../../../../Utils/Constant';
const win = Dimensions.get('window');
const ratio = win.width/541; //541 is actual image width
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;
const Styles = StyleSheet.create({
    ImageContainer: {
        backgroundColor: WHITE_COLOR_CODE,
        paddingBottom: 25
    },
    PosterImgeStyle: {
        width: imageWidth,
        height: imageHeight
        // width: win.width,
        // height: 300 * ratio, 
    },
    UserProfileImage: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 20
    },
    ProfileIMG: {
        width: 110,
        height: 110,
        position: 'absolute'
    },
    ViewContain: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    UserNameText: {
        fontSize: 19,
        fontFamily: FONT_FAMILY_BOLD
    },
    FollowersText: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE,
        fontSize: 12
    },
    StarViewContain: {
        flexDirection: 'row',
        height:20
    },
    FollowersCountView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        paddingTop: 10
    },
    LastUpdateTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: BLACK_COLOR_CODE,
        fontSize: 15
    },
    BookMarkContainer: {
        backgroundColor: WHITE_COLOR_CODE,
        marginTop: 10,
        padding: 15
    },
    MainFlatlistView: {
        padding: 10,
        paddingLeft: 0
    },
    FlatlistImge: {
        width: 170,
        height: 170,
        borderRadius: 7
    },
    portfolioTextMain: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: BLACK_COLOR_CODE,
        fontSize: 15,
        paddingTop: 10
    },
    PortfolioPhoto: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE,
        fontSize: 12
    },
    BusinessImge: {
        bottom: 30,
        alignItems: 'flex-end'
    },
    BuildingImge: {
        marginRight: 20,
        bottom: 10,
        width: 50,
        height: 50
    },
    EditBtnView: {
        width: '42%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 5,
        backgroundColor: YELLOW_COLOR_CODE
    },
    OptionViewContain: {
        alignItems: 'center', flex: 2
    },
    ImageView: {
        width: 60,
        height: 60,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 45
    },
    OptionText: {
        textAlign: 'center', fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE
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
        padding: 25,
        paddingTop: 0
    },
    ParagrapghTextMain: {
        fontSize: 13,
        lineHeight: 19,
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE
    },
    YellowText: {
        fontSize: 13,
        lineHeight: 35,
        fontFamily: FONT_FAMILY_REGULAR,
        color: YELLOW_COLOR_CODE
    },
    CategoryText: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: BLACK_COLOR_CODE,
        fontSize: 14,
        lineHeight: 29
    },
    CategoriesDcptnText: {
        fontSize: 13,
        lineHeight: 19,
        paddingTop: 5,
        paddingBottom: 5,
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE
    },
    BusinessHighlight: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: GREY_COLOR_CODE,
        fontSize: 14,
        lineHeight: 29
    },
    indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        bottom: 35,
        backgroundColor: 'red'
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "silver",
        marginHorizontal: 4
    },
})
export default Styles;