import { StyleSheet } from 'react-native';
import { LIGHT_GREY_COLOR_CODE, LINE_COMMON_COLOR_CODE, FONT_FAMILY_REGULAR } from '../../../../Utils/Constant';
const Styles = StyleSheet.create({
    MainContain: {
        margin: 20,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: LINE_COMMON_COLOR_CODE,
        borderRadius: 4
    },
    IMgeStyle: {
        width: '42%',
        height: 130
    },
    ViewContainer: {
        width: '60%',
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
        alignItems: 'flex-end'
    },
    PlusImge: {
        width: 35,
        height: 35
    }
})
export default Styles;