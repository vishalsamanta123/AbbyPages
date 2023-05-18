import { StyleSheet } from 'react-native';
import { BLACK_COLOR_CODE, FONT_FAMILY_REGULAR,SMALL_TEXT_COLOR_CODE, WHITE_COLOR_CODE, YELLOW_COLOR_CODE } from '../../../../../Utils/Constant';
const styles = StyleSheet.create({
    body: { flex: 3.5, backgroundColor: WHITE_COLOR_CODE ,paddingLeft:15,paddingTop:5},
    localFooter: {
        flex: 2.5,
        paddingHorizontal: 2,
        paddingVertical: 10,
        backgroundColor: YELLOW_COLOR_CODE
    },
    text: {
        color: SMALL_TEXT_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize:16
    },
    MainText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 19
    },
    row: { flexDirection: "row", alignItems: "center"},
    selectvwe: {
        marginTop: 8,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tchvwe: {
        paddingLeft: 25,
        height: 65,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d8d8d8',
        width: '92%',
        justifyContent: 'center',
        marginBottom: 5
    },
    slctdtxt: {
        fontSize: 17,
        color: BLACK_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR,
    },
    orderStatusTxt: {
        fontSize: 16,
        color: SMALL_TEXT_COLOR_CODE,
        paddingBottom: 15,
      },
      orderStatusVw: {
        flexDirection: "row",
        alignItems: "flex-end",
      },
})
export default styles;