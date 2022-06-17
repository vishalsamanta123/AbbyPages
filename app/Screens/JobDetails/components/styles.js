import { StyleSheet } from 'react-native';
import {
    FONT_FAMILY_REGULAR,
    YELLOW_COLOR_CODE,
    WHITE_COLOR_CODE,
    SMALL_TEXT_COLOR_CODE,
    GREY_COLOR_CODE
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
    descriptioncon: {
        flex: 1,
        flexDirection: "row"
    },
    btnmncon: {
        justifyContent: "center",
        alignItems: "center",
        flex:1
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
        lineHeight:22
    },
    btncon: {
        paddingVertical: 18,
        backgroundColor: YELLOW_COLOR_CODE,
        borderRadius: 10,
        marginTop: 8,
        marginBottom: 5,
        justifyContent:"center",
        alignItems:"center"
    },
    btntxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize:17
    }
}
);
export default Styles;