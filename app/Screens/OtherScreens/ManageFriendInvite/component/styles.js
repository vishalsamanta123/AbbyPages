import { StyleSheet } from 'react-native';
import { WHITE_COLOR_CODE, FONT_FAMILY_REGULAR } from '../../../Utils/Constant';
const styles = StyleSheet.create({
    cardCon: {
        paddingHorizontal: 20,
        backgroundColor: WHITE_COLOR_CODE,
        paddingBottom: 15,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 1
    },
    imgCon: {
        justifyContent: "center",
        alignItems: "center",
        bottom: 45
    },
    lablestyle: {
        flexDirection: 'row',
        margin: 15,
    },
    txtCat: {
        fontSize: 15,
        lineHeight: 18,
        color: WHITE_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR,
    },
    FriendContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    FlatlistContain: {
        width: '100%',
        borderTopColor: WHITE_COLOR_CODE,
        borderTopWidth: 0.3
    }

})
export default styles;