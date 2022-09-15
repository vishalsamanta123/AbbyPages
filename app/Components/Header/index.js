import React, { useContext } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Platform,
} from "react-native";
import {
  FONT_FAMILY_BOLD,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  BLACK_COLOR_CODE,
} from "../../Utils/Constant";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { ShoppingCartContext } from "../../Utils/UserContext";
const Header = (props) => {
  const [shoppingCartData, setShoppingCartData] =
    useContext(ShoppingCartContext);
  const navigation = useNavigation();
  const {
    HeaderView,
    headerSecondTextStyle,
    iptcontainer,
    HeaderMiddleView,
    container,
    MainHeadTxt,
  } = styles;
  const {
    headerSecondText,
    stheaderSecondText,
    HeaderText,
    RightImg,
    leftImg,
    mncontainer,
    MainHeadStyle,
    HeaderMiddleTxt,
    HeaderMiddleImg,
    textInput,
    onPress,
    type,
    onChangeText,
    placeholder,
    cartLength,
    editHdr,
    logoImg,
    onPressBackFun,
    tintColor,
    bckgColor,
  } = props;
  const OnpressBack = () => {
    navigation.goBack(null);
    // navigation.dispatch(DrawerActions.closeDrawer());
  };
  const handleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 40 : 0;
  return (
    <>
      <View style={{ height: STATUS_BAR_HEIGHT, backgroundColor: bckgColor }}>
        <StatusBar
          backgroundColor={bckgColor}
          barStyle="dark-content"
          animated={true}
        />
      </View>
      <View
        style={[
          textInput === true ? iptcontainer : container,
          mncontainer,
          {
            paddingVertical:
              HeaderText != ""
                ? editHdr
                  ? editHdr
                  : 15
                : textInput === true
                ? 10
                : 0,
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            onPressBackFun
              ? onPressBackFun()
              : type === "Drawer"
              ? handleDrawer()
              : OnpressBack();
          }}
          style={HeaderView}
        >
          {leftImg === "header-back-btn.png" ? (
            <Image
              style={{ width: 35, height: 25, tintColor: BLACK_COLOR_CODE }}
              source={leftImg}
            />
          ) : (
            <Image
              style={{ tintColor: tintColor ? tintColor : BLACK_COLOR_CODE }}
              source={leftImg}
            />
          )}
        </TouchableOpacity>
        <View style={[HeaderMiddleView, HeaderMiddleTxt]}>
          {textInput === true && (
            <View style={[styles.inputCon]}>
              <View style={{ paddingHorizontal: 5 }}>
                <Image source={require("../../Assets/search_field_icon.png")} />
              </View>
              <TextInput
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={BLACK_COLOR_CODE}
                style={styles.input}
              />
            </View>
          )}
          {HeaderText != "" ? (
            <Text style={[MainHeadTxt, MainHeadStyle]}>{HeaderText}</Text>
          ) : (
            <>
              {logoImg ? (
                <View style={styles.MainDotView}>
                  <Image
                    resizeMode="contain"
                    style={{ width: 110, height: 60 }}
                    source={HeaderMiddleImg}
                  />
                </View>
              ) : null}
            </>
          )}
          {HeaderText === "Confirm Order" && (
            <Text style={[headerSecondTextStyle, stheaderSecondText]}>
              {headerSecondText}
            </Text>
          )}
          {HeaderText === "Shopping Cart" && (
            <Text style={[headerSecondTextStyle, stheaderSecondText]}>
              You have {headerSecondText} items in cart
            </Text>
          )}
        </View>
        <View style={HeaderView}>
          {RightImg && (
            <TouchableOpacity onPress={onPress}>
              <Image style={{ height: 24, width: 24 }} source={RightImg} />
              {cartLength > 0 && (
                <View style={styles.cartAddedVw}>
                  <Text style={styles.cartAddedTxt}>{cartLength}</Text>
                </View>
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};
Header.defaultProps = {
  HeaderText: "CommonName",
  RightImg: require("../../Assets/plus_icon_header.png"),
  leftImg: require("../../Assets/header_back_btn.png"),
  logoImg: true,
  bckgColor: YELLOW_COLOR_CODE,
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: WHITE_COLOR_CODE,
    alignItems: "center",
    paddingHorizontal: 8,
  },
  iptcontainer: {
    flexDirection: "row",
    backgroundColor: YELLOW_COLOR_CODE,
    alignItems: "center",
    paddingHorizontal: 8,
  },
  HeaderView: {
    justifyContent: "center",
    alignItems: "center",
  },
  HeaderMiddleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerSecondTextStyle: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 12,
    color: WHITE_COLOR_CODE,
  },
  MainDotView: {
    flexDirection: "row",
  },
  MainHeadTxt: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 17,
    color: WHITE_COLOR_CODE,
  },
  inputCon: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: WHITE_COLOR_CODE,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  input: {
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
    borderRadius: 5,
    paddingVertical: 4,
    width: "84%",
  },
  cartAddedVw: {
    position: "absolute",
    zIndex: 1,
    right: -5,
    height: 15,
    width: 15,
    borderRadius: 50,
    backgroundColor: WHITE_COLOR_CODE,
    top: -5,
  },
  cartAddedTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: YELLOW_COLOR_CODE,
    fontSize: 12,
    textAlign: "center",
    bottom: 2,
  },
});
export default Header;
