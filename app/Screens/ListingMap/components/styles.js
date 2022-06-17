import { StyleSheet } from 'react-native';
import { YELLOW_COLOR_CODE, WHITE_COLOR_CODE, FONT_FAMILY_REGULAR } from '../../../Utils/Constant';
const Styles = StyleSheet.create({
    header: { flex: 1, flexDirection: 'row', backgroundColor: YELLOW_COLOR_CODE },
    body: { flex: 5 },
    headerBackBtnCon: { flex: 0.8, justifyContent: "center", alignItems: "center" },
    headerMiddleCon: { flex: 4.4, justifyContent: "center" },
    iptCon: { borderRadius: 5, flexDirection: "row", backgroundColor: WHITE_COLOR_CODE },
    searchIconCon: { justifyContent: "center", padding: 5 },
    iptStyles: { fontSize: 16, fontFamily: FONT_FAMILY_REGULAR },
})
export default Styles;