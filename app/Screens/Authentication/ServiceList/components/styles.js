import { StyleSheet } from 'react-native';
import {
    WHITE_COLOR_CODE,
    BLACK_COLOR_CODE,
    FONT_FAMILY_REGULAR
} from '../../../../Utils/Constant';
const styles = StyleSheet.create({
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
        width: '99%',
        justifyContent: 'center',
        alignSelf: "center",
        padding: 20,
        borderRadius: 7,
        flexDirection: "row",
        marginBottom: '4%',
        backgroundColor: '#f2f2f2'
    },
    txt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 18,
        textAlign: "left",
        width: '100%',
        color: BLACK_COLOR_CODE
    },
    iconimg: {
        width: 30,
        height: 30,
        // borderRadius:15
    },
    lstimgvwe: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },

})
export default styles; 