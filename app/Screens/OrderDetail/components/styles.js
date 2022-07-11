import { StyleSheet } from 'react-native';
import { LIGHT_GREY_COLOR_CODE, FONT_FAMILY_REGULAR } from '../../../Utils/Constant';
const styles = StyleSheet.create({
    ConatinView: {
        marginTop: 5,
        flexDirection: 'row',
        borderRadius: 5,
        alignSelf: "center",
        marginBottom: 10,
        borderWidth: 1,
        borderColor: LIGHT_GREY_COLOR_CODE
    },
    DishImgeStyle: {
        width: 70,
        height: 70,
        borderRadius: 5
    },
    DishDiscptnView: {
        flex: 5,
        padding: 10
    },
    itemImgCon: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    text: { fontFamily: FONT_FAMILY_REGULAR }
});
export default styles;