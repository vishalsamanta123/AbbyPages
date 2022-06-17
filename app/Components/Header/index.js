import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Text, StyleSheet, Image, View, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import {
    FONT_FAMILY_BOLD, WHITE_COLOR_CODE, YELLOW_COLOR_CODE, FONT_FAMILY_REGULAR, BLACK_COLOR_CODE
} from '../../Utils/Constant';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { ShoppingCartContext } from '../../Utils/UserContext';
const Header = (props) => {
    const [shoppingCartData, setShoppingCartData] = useContext(ShoppingCartContext);
    const navigation = useNavigation();
    const {
        HeaderView, headerSecondTextStyle, iptcontainer, HeaderMiddleView,
        container, MainHeadTxt
    } = styles;
    const {
        headerSecondText, stheaderSecondText, HeaderText,
        RightImg, leftImg, mncontainer, MainHeadStyle,
        HeaderMiddleTxt, HeaderMiddleImg, textInput, onPress,
        type, onChangeText, placeholder, cartLength
    } = props;
    const OnpressBack = () => {
        navigation.dispatch(DrawerActions.closeDrawer())
        navigation.goBack(null);
    };
    const handleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    };

    return (
        <View
            style={[
                textInput === true ? iptcontainer : container,
                mncontainer
            ]}>
            <StatusBar
                barStyle="dark-content"
                hidden={false}
                backgroundColor={YELLOW_COLOR_CODE}
                translucent={false}
            />
            <TouchableOpacity onPress={() => type === "Drawer" ? handleDrawer() : OnpressBack()} style={[HeaderView], { width: 50, justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    {leftImg === "header-back-btn.png" ?
                        <Image
                            style={{ width: 35, height: 25 }}
                            source={leftImg}
                        /> :
                        <Image
                            source={leftImg}
                        />
                    }
                </View>
            </TouchableOpacity>
            <View style={[HeaderMiddleView, HeaderMiddleTxt,
                {
                    paddingTop: textInput === true ? 80 : 10,
                }]}>
                {textInput === true &&
                    <View style={{
                        width: '100%', height: 50,
                        flexDirection: "row", backgroundColor: WHITE_COLOR_CODE,
                        borderRadius: 10
                    }}>
                        <View style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Image
                                source={require('../../Assets/search_field_icon.png')}
                            />
                        </View>
                        <View style={{ flex: 5 }}>
                            <TextInput
                                onChangeText={onChangeText}
                                placeholder={placeholder}
                                placeholderTextColor={BLACK_COLOR_CODE}
                                style={{
                                    fontSize: 16,
                                    fontFamily: FONT_FAMILY_REGULAR,
                                    borderRadius: 5,
                                    flex: 1
                                }} />
                        </View>
                    </View>
                }
                {HeaderText != '' ?
                    <Text style={[MainHeadTxt, MainHeadStyle]}>
                        {HeaderText}
                    </Text>
                    :
                    <View style={styles.MainDotView}>
                        <Image
                            resizeMode='contain'
                            resizeMethod='auto'
                            style={{ width: 120, height: 60 }}
                            source={HeaderMiddleImg} />
                    </View>
                }
                {
                    HeaderText === 'Confirm Order' &&
                    <Text style={[headerSecondTextStyle, stheaderSecondText]}>
                        {headerSecondText}
                    </Text>
                }
                {
                    HeaderText === 'Shopping Cart' &&
                    <Text style={[headerSecondTextStyle, stheaderSecondText]}>
                        You have {headerSecondText} items in cart
                    </Text>
                }
            </View>
            <View style={HeaderView}>
                {
                    RightImg &&
                    <TouchableOpacity onPress={onPress}>
                        <Image
                            style={{ height: 24, width: 24 }}
                            source={RightImg}
                        />
                        {cartLength > 0 &&
                            <View style={{
                                position: "absolute", zIndex: 1, right: -5,
                                height: 15, width: 15, borderRadius: 50,
                                backgroundColor: WHITE_COLOR_CODE, top: -5
                            }}>
                                <Text style={{
                                    fontFamily: FONT_FAMILY_REGULAR,
                                    color: YELLOW_COLOR_CODE, fontSize: 12,
                                    textAlign: "center", bottom: 2
                                }}>
                                    {cartLength}
                                </Text>
                            </View>
                        }
                    </TouchableOpacity>
                }
            </View>
        </View >
    );
}
Header.defaultProps = {
    HeaderText: "CommonName",
    RightImg: require('../../Assets/plus_icon_header.png'),
    leftImg: require('../../Assets/header_back_btn.png'),
};
const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        flexDirection: 'row',
        backgroundColor: YELLOW_COLOR_CODE,
    },
    iptcontainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: YELLOW_COLOR_CODE,
    },
    HeaderView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    HeaderMiddleView: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerSecondTextStyle: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 12,
        color: WHITE_COLOR_CODE,
        paddingBottom: 12
    },
    MainDotView: {
        flexDirection: 'row'
    },
    MainHeadTxt: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: 17,
        color: WHITE_COLOR_CODE
    }
})
export default Header;