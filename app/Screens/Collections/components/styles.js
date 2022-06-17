import { StyleSheet } from 'react-native';
import {
    FONT_FAMILY_REGULAR,
    YELLOW_COLOR_CODE,
    WHITE_COLOR_CODE,
    SMALL_TEXT_COLOR_CODE,
    LIGHT_GREY_COLOR_CODE
} from '../../../Utils/Constant'
const Styles = StyleSheet.create({
    lablestyle: {
        flexDirection: 'row',
        margin: 10,
    },
    txtCat: {
        fontSize: 15,
        lineHeight: 18,
        color: WHITE_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR,
    },
    mnCon: {
        margin: 10,
        borderWidth: 0.3,
        borderColor: LIGHT_GREY_COLOR_CODE,
        backgroundColor: WHITE_COLOR_CODE,
        width: "92%",
        borderRadius: 3,
        alignSelf: "center",
    },
    bannerimg: {
        width: '100%',
        height: 170,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    infobox: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hdngtxt: {
        fontSize: 17,
        lineHeight: 20,
        fontFamily: FONT_FAMILY_REGULAR,
        color: "#3a3838"
    },
    text: {
        color: SMALL_TEXT_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR
    },
    btncon: {
        paddingVertical: 9,
        paddingHorizontal: 13,
        backgroundColor: YELLOW_COLOR_CODE,
        flexDirection: 'row',
        alignItems: 'center'
    }
}
);
export default Styles;