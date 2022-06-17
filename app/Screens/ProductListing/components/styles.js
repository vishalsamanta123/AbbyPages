import { StyleSheet, Dimensions } from 'react-native';
import {
    FONT_FAMILY_REGULAR,
    YELLOW_COLOR_CODE,
    WHITE_COLOR_CODE,
    SMALL_TEXT_COLOR_CODE,
    BLACK_COLOR_CODE
} from '../../../Utils/Constant'
const Styles = StyleSheet.create({
    inputconmn: {
        flexDirection: "row",
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 0,
        height: 60,
        backgroundColor: YELLOW_COLOR_CODE,
        justifyContent: "space-around"
    },
    inputconsmall: {
        backgroundColor: WHITE_COLOR_CODE,
        height: 40,
        width: '80%',
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 5,
        borderRadius: 5
    },
    filtericonCon: {
        backgroundColor: '#a48400',
        height: 39,
        width: '12%',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    text: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: BLACK_COLOR_CODE
    },
    productimg: {
        width: "100%",
        height: Dimensions.get('window').height / 5,
        backgroundColor: WHITE_COLOR_CODE
    },
    flatlistcon: {
        // height: Dimensions.get('window').height / 2,
        height: Dimensions.get('window').height / 2.7,
        width: Dimensions.get('window').width / 2,
        backgroundColor: '#f2f2f2',
        padding: 10,
        flex: 1,
        paddingBottom: 5,
        paddingTop: 15,
    },
    AddBtnTouchable: {
        backgroundColor: YELLOW_COLOR_CODE,
        width: '100%',
        marginVertical:5,
        height: 30,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
}
);
export default Styles;