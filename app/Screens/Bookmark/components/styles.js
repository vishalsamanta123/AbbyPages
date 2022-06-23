import { StyleSheet } from 'react-native';
import { WHITE_COLOR_CODE, FONT_FAMILY_BOLD, LIGHT_GREY_COLOR_CODE, FONT_FAMILY_REGULAR } from '../../../Utils/Constant';
const Styles = StyleSheet.create({
    ImageContainer: {
        backgroundColor: WHITE_COLOR_CODE,
        paddingBottom: 15
    },
    PosterImgeStyle: {
        width: '100%',
        height: 150
    },
    UserProfileImage: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    ProfileIMG: {
        width: 100,
        height: 100,
        position: 'absolute'
    },
    ViewContain: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50
    },
    UserNameText: {
        fontSize: 19,
        fontFamily: FONT_FAMILY_BOLD,
        textTransform: 'capitalize'
    },
    FollowersView: {
        flexDirection: 'row'
    },
    FollowersContain: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    FollowersText: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE,
        fontSize: 12
    },
    StarViewContain: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    },
    FollowersCountView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        paddingTop: 10
    },
    LastUpdateTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE
    },
    BookMarkView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    MyBookMarkTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 17
    },
    BookMarkContainer: {
        backgroundColor: WHITE_COLOR_CODE,
        marginTop: 10,
        height: '100%'
    },
    SortByView: {
        borderRadius: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: LIGHT_GREY_COLOR_CODE,
        borderWidth: 0.3,
        marginLeft: 15,
        marginRight: 15, padding: 11
    },
    SortByText: {
        fontFamily: FONT_FAMILY_REGULAR
    },
    ContainerCategory: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 10,
        marginRight: 10
    },
    CategoryView: {
        borderRadius: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        width: '47%',
        borderColor: LIGHT_GREY_COLOR_CODE,
        borderWidth: 0.3,
        padding: 11
    }
})
export default Styles;