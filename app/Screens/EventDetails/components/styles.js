import { StyleSheet } from 'react-native';
import {
    FONT_FAMILY_REGULAR,
    YELLOW_COLOR_CODE,
    SMALL_TEXT_COLOR_CODE,
} from '../../../Utils/Constant'
const Styles = StyleSheet.create({
    bannerimg: {
        width: '100%',
        height: 180,
        alignSelf: "center",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    infocon: {
        padding: 20,
        borderBottomWidth: 15,
        borderBottomColor: '#f2f2f2',
        backgroundColor: '#fff'
    },
    hdngtxt: {
        fontSize: 18,
        lineHeight: 22,
        width: '90%',
        fontFamily: FONT_FAMILY_REGULAR,
        color: "#3a3838",
        paddingBottom: 10
    },
    basiccon: {
        flexDirection: "row",
        alignItems: "center", margin: 2
    },
    icon: {
        height: 17,
        margin: 2,
        marginLeft: 0,
        marginRight: 5,
        width: 17
    },
    text: {
        color: SMALL_TEXT_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR
    },
    btncon: {
        paddingVertical: 15,
        paddingHorizontal: 35,
        backgroundColor: YELLOW_COLOR_CODE,
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10,
    },
    btntxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        lineHeight: 18
    }
}
);
export default Styles;