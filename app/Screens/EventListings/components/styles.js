import { StyleSheet } from 'react-native';
import {
    FONT_FAMILY_REGULAR,
    YELLOW_COLOR_CODE,
    WHITE_COLOR_CODE,
    SMALL_TEXT_COLOR_CODE
} from '../../../Utils/Constant'
const Styles = StyleSheet.create({
    lablestyle: {
        flexDirection: 'row',
        margin: 10,
    },
    txtCat: {
        fontSize: 15,
        lineHeight:18, 
        color: WHITE_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR,
    },
    mnCon: {
        margin: 5,
        elevation: 2,
        backgroundColor: WHITE_COLOR_CODE,
        borderRadius: 10,
        width: "92%",
        alignSelf: "center",
        marginBottom: 5
    },
    bannerimg: {
        width: '100%',
        height: 160,
        alignSelf: "center",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    infobox: {
        flex: 1,
        padding: 20
    },
    hdngtxt: {
        fontSize: 17,
        lineHeight:20,
        fontFamily: FONT_FAMILY_REGULAR,
        color: "#3a3838"
    },
    icon: {
        height: 17,
        width: 17,
        margin: 2,
        marginLeft: 0,
        marginRight: 5,
    },
    text: {
        color: SMALL_TEXT_COLOR_CODE,
        fontFamily:FONT_FAMILY_REGULAR
    },
    yellowtxt: {
        color: YELLOW_COLOR_CODE,
        fontFamily:FONT_FAMILY_REGULAR
    },
    intcon: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    minicon: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop:2,
        paddingBottom:2
    },
    btncon: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: YELLOW_COLOR_CODE,
        borderRadius: 8,
        marginBottom: 10,
        marginRight: 10
    }
},
);
export default Styles;