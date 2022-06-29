import { StyleSheet } from 'react-native';
import { WHITE_COLOR_CODE, FONT_FAMILY_REGULAR } from '../../../Utils/Constant';
const Styles = StyleSheet.create({
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
    textInput: {
        fontSize: 18,
        paddingLeft: 20,
        marginLeft: 4,
        fontFamily: FONT_FAMILY_REGULAR,
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
    MainContainer: {
        backgroundColor: WHITE_COLOR_CODE,
        paddingTop: 15,
        paddingBottom: 15
    },
    profileModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1
    },
    modalItem: {
        fontFamily: FONT_FAMILY_REGULAR,
        textAlign: "center",
        fontSize: 17,
    },
    ktchimgvwe: {
        flexDirection: 'row',
        borderRadius: 8,
        height: 55,
        borderColor: "#d8d8d8",
        borderWidth: 1,
        marginBottom: 5,
        marginTop: 15,
        width: '90%',
        alignSelf: 'center',
        paddingTop: 15,
        paddingLeft: 12
    },
    ktchnlble: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 15,
    },
    alertBox: {
        width: 200,
        height: 50,
        flexDirection: "row",
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(100,100,100, 0.5)'
    },
    alertBackground: {
        alignItems: 'center',
        justifyContent: "space-between",
        padding: 10,
        margin: 10,
        borderRadius: 5,
        paddingVertical: 50,
        backgroundColor: '#f2f2f2',
    },
    plseslecttxt: {
        fontSize: 15,
        fontFamily: FONT_FAMILY_REGULAR,
    },
    profileModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1
    },
})
export default Styles;