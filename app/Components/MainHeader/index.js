import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useContext, useState } from "react";
import styles from "./styles";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import { Images } from "../../Utils/images";
import { COLORS, FONT_SIZE } from "../../Utils/Constant";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import CommonStyles from "../../Utils/CommonStyles";
import AsyncStorage from "@react-native-community/async-storage";
import ScaleText from "../ScaleText";
import { UserContext } from "../../Utils/UserContext";

const MainHeader = (props) => {
  const [userData, setUserData] = useContext(UserContext);
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setUserData(userData);
      };
    }, [userData, props])
  );

  const {
    isBack,
    headerText,
    isSearch = true,
    notify = userData?.login_type ? true : false,
    notifyIcon = true,
    isLogin = userData?.login_type ? true : false,
    loginButton = false,
    headerType = "",
    justifyContent = "space-between",
    fontSize = FONT_SIZE.medium,
    backgroundColor = COLORS.WHITE,
    onPressBack = false,
    TxtMarginRight = TxtMarginRight,
    backIconColor = COLORS.BLACK,
    backTxtColor = COLORS.BLACK,
    backText = true,
    resetButton = false,
    onPressReset = () => {},
    addToCartIcon = false,
    onPressCart = () => {},
  } = props;
  const navigation = useNavigation();
  const handleSearchPress = () => {
    navigation.navigate("CategorySearch");
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.headCon}>
      {headerType === "logo" ? (
        <View style={[styles.blockCont, { backgroundColor: backgroundColor }]}>
          <TouchableOpacity onPress={() => navigation.navigate("DashBoard")}>
            <Image
              source={Images.LOGO}
              resizeMode={"contain"}
              style={styles.logoVw}
            />
          </TouchableOpacity>
          <View style={CommonStyles.straightCon}>
            {notifyIcon ? (
              <View>
                <TouchableOpacity style={styles.leftIconVw}>
                  <IconX
                    origin={ICON_TYPE.FONT_AWESOME}
                    name={"bell-o"}
                    size={21}
                    color={COLORS.BLACK}
                  />
                </TouchableOpacity>
                {notify ? (
                  <View style={styles.notifyVw}>
                    <View style={styles.notifyConVw}>
                      <ScaleText style={styles.notifyTxt}>1</ScaleText>
                    </View>
                  </View>
                ) : null}
              </View>
            ) : null}
            {isSearch ? (
              <TouchableOpacity
                disabled={!isSearch}
                onPress={() => handleSearchPress()}
                style={[
                  styles.leftIconVw,
                  { marginHorizontal: 0, marginLeft: 4 },
                ]}
              >
                <IconX
                  origin={ICON_TYPE.ICONICONS}
                  name={"search-outline"}
                  size={22}
                  color={COLORS.BLACK}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      ) : (
        <View style={[styles.blockCont, { backgroundColor: backgroundColor }]}>
          <TouchableOpacity
            onPress={() => (onPressBack ? onPressBack() : handleGoBack())}
            activeOpacity={1}
          >
            <View style={CommonStyles.straightCon}>
              <IconX
                origin={ICON_TYPE.ANT_ICON}
                name={"left"}
                size={25}
                color={backIconColor}
              />
              {backText ? (
                <ScaleText
                  style={[
                    styles.backtxt,
                    {
                      color: backTxtColor,
                    },
                  ]}
                >
                  Back
                </ScaleText>
              ) : (
                <Image
                  source={Images.ABBYLOGO_TRNSP}
                  style={styles.topLogoVw}
                />
              )}
            </View>
          </TouchableOpacity>
          {loginButton && !isLogin ? null : (
            <ScaleText
              style={[
                styles.topHeaderTxt,
                {
                  fontSize: fontSize,
                  marginRight: isLogin && notify ? 0 : TxtMarginRight,
                },
              ]}
            >
              {headerText}
            </ScaleText>
          )}
          {loginButton && !isLogin ? (
            <View style={CommonStyles.straightCon}>
              <TouchableOpacity
                style={[styles.topButtonVw, styles.topButtonVwNon]}
              >
                <ScaleText style={styles.topButtonTxt}>Log In</ScaleText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.topButtonVw}>
                <ScaleText
                  style={[
                    styles.topButtonTxt,
                    {
                      color: COLORS.WHITE,
                    },
                  ]}
                >
                  To Register
                </ScaleText>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={CommonStyles.straightCon}>
              {!addToCartIcon ? (
                <View>
                  <TouchableOpacity
                    style={styles.leftIconVw}
                    onPress={() => onPressCart()}
                  >
                    <IconX
                      origin={ICON_TYPE.ANT_ICON}
                      name={"shoppingcart"}
                      size={21}
                      color={COLORS.BLACK}
                    />
                  </TouchableOpacity>
                  <View style={styles.notifyVw}>
                    <View style={styles.notifyConVw}>
                      <ScaleText style={styles.notifyTxt}>1</ScaleText>
                    </View>
                  </View>
                </View>
              ) : null}
              {notifyIcon ? (
                <View>
                  <TouchableOpacity style={styles.leftIconVw}>
                    <IconX
                      origin={ICON_TYPE.FONT_AWESOME}
                      name={"bell-o"}
                      size={21}
                      color={COLORS.BLACK}
                    />
                  </TouchableOpacity>
                  {notify && isLogin ? (
                    <View style={styles.notifyVw}>
                      <View style={styles.notifyConVw}>
                        <ScaleText style={styles.notifyTxt}>1</ScaleText>
                      </View>
                    </View>
                  ) : null}
                </View>
              ) : null}
              {resetButton ? (
                <TouchableOpacity
                  onPress={() => onPressReset()}
                  style={[
                    styles.topButtonVw,
                    styles.topButtonVwNon,
                    {
                      paddingVertical: 2,
                    },
                  ]}
                >
                  <ScaleText style={styles.topButtonTxt}>Reset</ScaleText>
                </TouchableOpacity>
              ) : null}
              {/* {isSearch ? (
                <TouchableOpacity
                  disabled={!isSearch}
                  onPress={() => handleSearchPress()}
                  style={[styles.leftIconVw, { marginHorizontal: 0 }]}
                >
                  <IconX
                    origin={ICON_TYPE.ICONICONS}
                    name={"search-outline"}
                    size={22}
                    color={COLORS.BLACK}
                  />
                </TouchableOpacity>
              ) : null} */}
            </View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default MainHeader;
