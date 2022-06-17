import { StyleSheet } from 'react-native';
import {
    FONT_FAMILY_REGULAR,
    WHITE_COLOR_CODE,
    SMALL_TEXT_COLOR_CODE,
    YELLOW_COLOR_CODE,
} from '../../../Utils/Constant'
const Styles = StyleSheet.create({
    bannerimg: {
        width: 360,
        height: 240,
        // alignSelf: "center",
        // justifyContent: "flex-end",
        // alignItems: "flex-end"
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
        color: "#3a3838"
    },
    basiccon: {
        flexDirection: "row",
        alignItems: "center", margin: 2
    },
    maincontainers: {
        padding: 20,
        flex: 1,
        backgroundColor: WHITE_COLOR_CODE,
        borderBottomWidth: 20,
        borderColor: "#f2f2f2"
    },
    icon: {
        height: 20,
        margin: 2,
        marginLeft: 0,
        marginRight: 5,
        width: 20
    },
    text: {
        color: SMALL_TEXT_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR,
        lineHeight: 18
    },
    aboutview: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    abouttxt: {
        fontFamily: FONT_FAMILY_REGULAR, fontSize: 17
    },
    revieewbtn: {
        elevation: 1, width: '35%', height: '35%',
    },
    buttonLabelStyle: {
        fontSize: 10,
        fontFamily: FONT_FAMILY_REGULAR,
    },
    ButtonLabel: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 18,
    },
    AddBtnTouchable: {
        backgroundColor: YELLOW_COLOR_CODE,
        width: '92%',
        marginVertical: 5,
        height: 65,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
}
);
export default Styles;