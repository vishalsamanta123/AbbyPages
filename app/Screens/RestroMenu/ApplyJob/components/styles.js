import { StyleSheet } from 'react-native';
import { YELLOW_COLOR_CODE, WHITE_COLOR_CODE, GREY_COLOR_CODE, FONT_FAMILY_REGULAR, FONT_FAMILY_BOLD, LIGHT_GREY_COLOR_CODE } from '../../../../Utils/Constant';
const Styles = StyleSheet.create({

    ContainerStyle: {
        padding: 15,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: WHITE_COLOR_CODE
    },
    container: {
        height: 60,
        borderColor: '#d8d8d8',
        borderWidth: 1,
        borderRadius: 12,
        flexDirection: 'row',
        marginTop: 15
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
        paddingLeft: 2
    },
    BckArrowBack: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    TextinputContain: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 15
    },
    CommntyAmbsdorTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 20
    },
    ColumbiaText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 12,
        color: LIGHT_GREY_COLOR_CODE
    },
    HeadingTextStyle: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 18
    },
    coverLetterDescrptn: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 13,
        lineHeight: 20,
        color: LIGHT_GREY_COLOR_CODE
    },
    willYouNowText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 13,
        lineHeight: 20,
        color: LIGHT_GREY_COLOR_CODE
    },
    SubmitBtnMain: {
        marginBottom: 15,
        marginTop: 15
    }

})
export default Styles;