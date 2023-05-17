import { StyleSheet } from 'react-native';
import {
    YELLOW_COLOR_CODE,
    FONT_FAMILY_REGULAR,
    FONT_FAMILY_BOLD,
    SMALL_TEXT_COLOR_CODE
} from '../../../../Utils/Constant';
const Styles = StyleSheet.create({
    AddPhotosText: {
        fontSize: 24,
        fontFamily: FONT_FAMILY_BOLD,
        padding: 15,
        color: YELLOW_COLOR_CODE
    },
    ContainerStyle: {
        padding: 15
    },
    BrowseImgeView: {
        marginTop: '5%',
        width: '90%',
        height: '90%',
        marginVertical: 10,
        borderStyle: 'dotted',
        borderRadius: 5,
        borderColor: YELLOW_COLOR_CODE,
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    firstbdy: {
        flex: 3.5,
    },
    bdyfrstvwe: {
        flex: 1
    },
    txtfrstvwe: {
        padding: 15
    },
    Autotxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 21
    },
    txtbdys: {
        fontSize: 13,
        fontFamily: FONT_FAMILY_REGULAR,
        color: SMALL_TEXT_COLOR_CODE,
        lineHeight: 20
    },
    footvwe: {
        flex: 1.5,
    },
    footvwesec: {
        paddingTop: 15,
        paddingLeft: 4,
        paddingRight: 4
    },
    footlargetxt: {
        textAlign: 'center',
        fontSize: 15,
        lineHeight: 23,
        color: SMALL_TEXT_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR
    }
})
export default Styles;