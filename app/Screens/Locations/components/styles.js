import { StyleSheet } from 'react-native';
import { BLACK_COLOR_CODE, FONT_FAMILY_REGULAR, LIGHT_GREY_COLOR_CODE } from '../../../Utils/Constant';
const Styles = StyleSheet.create({
    EmailContainer: {
        padding: 15,
    },
    FlexViewContain: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 10
    },
    EmailNotifyTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 19
    },
    AddLocationView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    EmailContainerBox: {
        borderRadius: 5,
        borderWidth: 0.4,
        padding: 20,
        marginTop: 15,
        marginBottom: 20,
        borderColor: LIGHT_GREY_COLOR_CODE
    },
    ImageDelete: {
        margin: 5
    },
    MainEmaliTXt: {
        fontSize: 19,
        color: BLACK_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR
    },
    PrimaryText: {
        color: LIGHT_GREY_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR
    },
})
export default Styles;