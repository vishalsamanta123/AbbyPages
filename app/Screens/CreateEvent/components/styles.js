import { StyleSheet, Dimensions, PixelRatio } from 'react-native';
import { WHITE_COLOR_CODE, FONT_FAMILY_BOLD, LIGHT_GREY_COLOR_CODE, LINE_COMMON_COLOR_CODE, GREY_COLOR_CODE, BLACK_COLOR_CODE, FONT_FAMILY_REGULAR, FONT_FAMILY_THIN, FONT_FAMILY_LIGHT } from '../../../Utils/Constant';
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
})
export default Styles;