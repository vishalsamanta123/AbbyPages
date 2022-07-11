import { StyleSheet } from 'react-native';
import {
    YELLOW_COLOR_CODE,
    FONT_FAMILY_REGULAR,
    FONT_FAMILY_BOLD,
    LIGHT_BLACK_COLOR_CODE,
    LIGHT_GREY_COLOR_CODE,
    WHITE_COLOR_CODE,
    BLACK_COLOR_CODE,
} from '../../../../Utils/Constant';
const Styles = StyleSheet.create({
    AddPhotosText: {
        fontSize: 24,
        fontFamily: FONT_FAMILY_BOLD,
        color: YELLOW_COLOR_CODE
    },
    startxt: { padding: 15 },
    getstartxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 22,
        color: LIGHT_BLACK_COLOR_CODE
    },
    addmaintxt: {
        fontSize: 13,
        fontFamily: FONT_FAMILY_REGULAR,
        color: LIGHT_GREY_COLOR_CODE,
        lineHeight: 21
    },
    lstbtnvwe: { padding: 15 },
    continuetxt: {
        fontSize: 13,
        fontFamily: FONT_FAMILY_REGULAR,
        lineHeight: 22,
        color: LIGHT_GREY_COLOR_CODE
    },
    bussnesstxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 13,
        color: YELLOW_COLOR_CODE,
        lineHeight: 22
    },
    pptxt: {
        fontFamily: FONT_FAMILY_REGULAR, fontSize: 13,
        color: YELLOW_COLOR_CODE, lineHeight: 22
    },


    container: {
        flex: 1,
        backgroundColor: WHITE_COLOR_CODE
    },
    header: {
        flex: 0.8,
        paddingTop: 5,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    hdrbkbtnvw: {
        flex: 1,
        justifyContent: "center",
        paddingLeft: "0.5%",
        alignItems: "center",
    },
    bkbtn: {
        height: 20,
        width: 28
    },
    hdrtxtvw: {
        flex: 5,
        paddingRight: '5%'
    },
    hdrtxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 24,
        alignSelf: "center",
        color: "#3a3838"
    },
    body: {
        flex: 5.2,
        paddingTop: '2%',
        padding: 10,
    },
    labelStyle: {
        width: '98%',
        padding: 5,
        borderRadius: 7,
        flexDirection: "row",
        // marginBottom: '2%',
        backgroundColor: '#f2f2f2',
        marginLeft: 4,
        marginTop: 5
    },
    txt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 18,
        textAlign: "left",
        width: '100%',
        color: BLACK_COLOR_CODE
    },
    iconimg: {
        width: 20,
        height: 20,
        // borderRadius:15
    },
    lstimgvwe: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    buscatevwe: {
        backgroundColor: "rgba(0,0,0,0)",
        // margin: 10,
        marginLeft: 16,
        marginRight: 16,
        borderColor: "#d8d8d8",
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    buscatesecvwe: {
        backgroundColor: "rgba(0,0,0,0)",
        // height: 70,
        paddingTop: 20,
        paddingBottom: 20,
        width: "95%",
        borderColor: "#d8d8d8",
        paddingLeft: 20,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    bussinecatetxt: {
        fontSize: 17,
        color: BLACK_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR
    },
    bcvwe: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    crossvwe:{
        flexDirection: "row",
        margin: 2,
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#d8d8d8",
    },
    onpresscrossvwe:{
        borderLeftWidth: 1,
        padding: 5,
        borderColor: "#d8d8d8",
    },
    searchvwe:{
        paddingLeft: 14,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#a9a9a9",
    },
    nodatafndtxtvwe:{
        justifyContent: "center",
        alignItems: "center",
        height: 80,
    }
})
export default Styles;