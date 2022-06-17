import { StyleSheet } from 'react-native';
import {
    SMALL_TEXT_COLOR_CODE,
    FONT_FAMILY_REGULAR,
    YELLOW_COLOR_CODE
} from '../../../../Utils/Constant';
const styles = StyleSheet.create({
    dataCon: {
        // height: 80,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: "row",
        borderBottomWidth: 0.3,
        borderColor: 'lightgrey'
    },
    posterimg: {
        width: 90,
        height: 90,
        // flex: 1,
        alignSelf: "center",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    basiccon: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        color: SMALL_TEXT_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR
    },
    hdngtxt: {
        fontSize: 18,
        width: '90%',
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
    inputcon: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderWidth: 1,
        borderRightWidth: 0,
        borderColor: '#d8d8d8',
        // paddingHorizontal: 20,
        width: 220
    },
    appliedbtncon: {
        width: null,
        paddingVertical: 14,
        paddingHorizontal: 20,
        fontSize: 15,
        backgroundColor: YELLOW_COLOR_CODE,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    }
})
export default styles;