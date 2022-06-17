import { StyleSheet } from 'react-native';
import { FONT_FAMILY_BOLD, YELLOW_COLOR_CODE, FONT_FAMILY_REGULAR, BLACK_COLOR_CODE } from '../../../../Utils/Constant';
const Styles = StyleSheet.create({
    inputwvwe: {
        justifyContent: 'center',
        paddingTop: 10
    },
    container: {
        height: 60,
        borderColor: '#d8d8d8',
        borderWidth: 1,
        borderRadius: 12,
        flexDirection: 'row',
        margin: 10,
        marginLeft: 15,
        marginRight: 15,
    },
    CameraImgView: {
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15
    },
    AddPhotosTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 17,
        paddingLeft: 10
    },
    BckArrowBack: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    alluncheck: {
        width: 40,
        height: 40
    },
    BasicVwe: { marginLeft: '5%', marginTop: "5%" },

    basictxt: { fontSize: 20, fontFamily: FONT_FAMILY_REGULAR },

    addtionalvwe: { marginLeft: '6%', marginTop: "2%" },

    addtionaltxt: { fontSize: 20, fontFamily: FONT_FAMILY_REGULAR },

    jobdesvwe: { justifyContent: 'center', },

    jobinputvwe: {
        borderColor: '#d8d8d8',
        borderRadius: 10,
        borderWidth: 0.5,
        fontSize: 16,
        fontFamily: FONT_FAMILY_BOLD,
    },
    addjobd: { marginLeft: '6%', marginTop: "2%" },

    addjobdtxt: { fontSize: 20, fontFamily: FONT_FAMILY_REGULAR },

    footermainvwe: { flex: 1, flexDirection: 'row' },

    conditionvwe: { flex: 1, marginLeft: '5%' },

    acceptvwe: { justifyContent: 'center', marginRight: "5%", flex: 5, },

    accepttxt: { fontFamily: FONT_FAMILY_REGULAR, fontSize: 17, },

    btnvwe: { padding: 15, marginBottom: 5 },

    btntxt: { color: BLACK_COLOR_CODE, fontFamily: FONT_FAMILY_REGULAR },

    btnstyle: { marginTop: 10, backgroundColor: YELLOW_COLOR_CODE }
})
export default Styles;