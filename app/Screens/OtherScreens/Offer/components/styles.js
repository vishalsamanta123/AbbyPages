import { StyleSheet } from 'react-native';
import {
    FONT_FAMILY_REGULAR,
    SMALL_TEXT_COLOR_CODE
} from '../../../Utils/Constant';
const styles = StyleSheet.create({
    text: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: SMALL_TEXT_COLOR_CODE,
        fontSize: 16,
        lineHeight: 20,
        paddingBottom:5
    },
    hdngtextcon: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: SMALL_TEXT_COLOR_CODE,
        marginHorizontal: 10
    }
})
export default styles;