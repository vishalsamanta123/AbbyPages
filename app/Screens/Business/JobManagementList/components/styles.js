import { StyleSheet } from 'react-native';
import { LIGHT_GREY_COLOR_CODE, LINE_COMMON_COLOR_CODE, FONT_FAMILY_REGULAR, FONT_FAMILY_BOLD, BLACK_COLOR_CODE, YELLOW_COLOR_CODE } from '../../../../Utils/Constant';
const Styles = StyleSheet.create({
    MainContain: {
        margin: 20,
        marginBottom: 5,
        padding: 15,
        borderWidth: 1,
        borderColor: LINE_COMMON_COLOR_CODE,
        borderRadius: 4
    },
    ViewContainer: {
        padding: 15
    },
    TableNottEXT: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 17
    },
    settingPersonView: {
        flexDirection: 'row',
        paddingTop: 10
    },
    UserIcon: {
        width: 16,
        height: 16,
        top: 1
    },
    PersonText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 12,
        color: LIGHT_GREY_COLOR_CODE
    },
    PlusView: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    PlusImge: {
        width: 35,
        height: 35
    },
    AddBtnTouchable: {
        backgroundColor: YELLOW_COLOR_CODE,
        width: 35,
        marginTop: 15,
        position: 'absolute',
        right: 20,
        bottom: 30,
        height: 35,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    JobContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    DescrptionText: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: YELLOW_COLOR_CODE,
        fontSize: 15
    },
    DescrptnTextStyle: {
        fontFamily: FONT_FAMILY_REGULAR,
        lineHeight: 17, fontSize: 12,
        color: LIGHT_GREY_COLOR_CODE,
        width: '80%'
    },
    HeadingTxt: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: 12,
        paddingTop: 5,
        color: BLACK_COLOR_CODE
    },
    JobDscrptn: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 20
    }
})
export default Styles;