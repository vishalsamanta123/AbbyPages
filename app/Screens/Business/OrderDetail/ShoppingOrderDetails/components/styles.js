import { StyleSheet } from 'react-native';
import { FONT_FAMILY_REGULAR,SMALL_TEXT_COLOR_CODE, WHITE_COLOR_CODE, YELLOW_COLOR_CODE } from '../../../../../Utils/Constant';
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
    row: { flexDirection: "row", alignItems: "center"}
})
export default styles;