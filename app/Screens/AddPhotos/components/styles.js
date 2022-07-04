import { StyleSheet } from 'react-native';
import { YELLOW_COLOR_CODE, FONT_FAMILY_BOLD } from '../../../Utils/Constant';
const Styles = StyleSheet.create({
    ContainerStyle: {
        padding: 15
    },
    AddPhotosText: {
        fontSize: 22,
        fontFamily: FONT_FAMILY_BOLD
    },
    BrowseImgeView: {
        width: '100%',
        height: '60%',
        marginVertical: 10,
        borderStyle: 'dotted',
        borderRadius: 5,
        borderColor: YELLOW_COLOR_CODE,
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Styles;