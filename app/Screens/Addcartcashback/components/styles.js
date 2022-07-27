import { StyleSheet } from 'react-native';
import {
    GREY_COLOR_CODE,
    YELLOW_COLOR_CODE,
    FONT_FAMILY_REGULAR,
    LIGHT_GREY_COLOR_CODE,
    LINE_COMMON_COLOR_CODE,
} from '../../../Utils/Constant';
const Styles = StyleSheet.create({
    ContainerView: {
        padding: 15
    },
    MainLinkText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 19
    },
    WeTrustTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 14,
        color: LIGHT_GREY_COLOR_CODE
    },
    CardImgeStyle: {
        width: 29,
        height: 22,
        marginRight: 5,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: LINE_COMMON_COLOR_CODE
    },
    LockViewCOntain: {
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    LockTextStyle: {
        fontSize: 14,
        paddingLeft: 10,
        fontFamily: FONT_FAMILY_REGULAR,
        color: GREY_COLOR_CODE
    },
    ParaTextStyle: {
        color: LIGHT_GREY_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 12,
        lineHeight: 20,
        paddingTop: 10
    },
    YellowText: {
        color: YELLOW_COLOR_CODE
    }
})
export default Styles;