import { StyleSheet } from 'react-native';
import { WHITE_COLOR_CODE, FONT_FAMILY_BOLD, LIGHT_GREY_COLOR_CODE, LINE_COMMON_COLOR_CODE, GREY_COLOR_CODE, BLACK_COLOR_CODE, FONT_FAMILY_REGULAR, FONT_FAMILY_THIN, FONT_FAMILY_LIGHT, YELLOW_COLOR_CODE } from '../../../../Utils/Constant';
const Styles = StyleSheet.create({
    MainCOntainer: {
        // padding: 8,
        // backgroundColor: 'red'
        // pad
        paddingRight:8,
        paddingLeft:8
    },
    body: {
        backgroundColor: 'red'
    },
    MondayView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    MondayText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 18
    },
    ClosedView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ClosedTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        paddingLeft: 5,
        color: LIGHT_GREY_COLOR_CODE,
        fontSize: 15
    },
    ClosedTxtDis: {
        fontFamily: FONT_FAMILY_REGULAR,
        paddingLeft: 5,
        color: '#C7CBCB',
        fontSize: 15
    },
    YellowTextStyle: {
        color: YELLOW_COLOR_CODE,
        fontSize: 13,
        fontFamily: FONT_FAMILY_REGULAR,
        paddingTop: 15
    },
    MainOpenClseView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 10
    },
    OpenOptnView: {
        width: "49%",
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    OpenOptnViewDis: {
        width: "49%",
        padding: 10,
        borderWidth: 0.5,
        borderColor:'#C7CBCB',
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    markMyBusiness: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 15,
        paddingLeft: 8,
        color: LIGHT_GREY_COLOR_CODE
    },
    DescrptionText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 13,
        lineHeight: 20,
        paddingTop: 10,
        color: LIGHT_GREY_COLOR_CODE
    },
    AdditionalText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 15,
        paddingTop: 10,
        color: LIGHT_GREY_COLOR_CODE
    },
    CancelBtn: {
        width: '100%',
        marginTop: 10,
        backgroundColor: GREY_COLOR_CODE
    },
    BackColorBtn: {
        color: WHITE_COLOR_CODE,
        fontFamily: FONT_FAMILY_BOLD
    },
    TemporilyCloseView: {
        flexDirection: 'row',
        paddingTop: 20
    },
    ImgeRadio: {
        marginTop: 3
    },
    textInputStyle: {
        height: 210,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 2,
        borderWidth: 0.3,
        borderColor: LIGHT_GREY_COLOR_CODE,
        // fontFamily: FONT_FAMILY_REGULAR,
        // padding: 15,
        // textAlign: 'left'  
    }

})
export default Styles;