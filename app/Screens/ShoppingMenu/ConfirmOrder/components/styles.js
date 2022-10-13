import { StyleSheet } from 'react-native';
import { GREY_COLOR_CODE, FONT_FAMILY_REGULAR, LINE_COMMON_COLOR_CODE } from '../../../../Utils/Constant';
const Styles = StyleSheet.create({

    TextInputView: {
        backgroundColor: "#f2f2f2",
        paddingLeft: 20,
        padding: 10,
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: LINE_COMMON_COLOR_CODE
    },
    FirsNameTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: GREY_COLOR_CODE,
        bottom: 4,
        fontSize: 16
    },
    NameTextStyle: {
        fontSize: 17,
        fontFamily: FONT_FAMILY_REGULAR,
        // backgroundColor:"red",
    },
    MainProductContain: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 15,
        borderBottomColor: LINE_COMMON_COLOR_CODE
    },
    ProductImge: {
        width: 110,
        height: 100,
        borderRadius: 3
    },
    ProdctDetailView: {
        width: '65%',
        paddingLeft: 10
    },
    ProductNameText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 18
    },
    ProductDescrptn: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: GREY_COLOR_CODE,
        fontSize: 12
    },
    QuantityText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 16
    },
    COnfirmBtnView: {
        marginBottom: 10,
        marginTop: 10
    }
})
export default Styles;