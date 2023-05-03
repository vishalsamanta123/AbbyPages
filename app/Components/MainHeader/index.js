import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import { Images } from "../../Utils/images";
import { COLORS, FONT_SIZE } from "../../Utils/Constant";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import CommonStyles from "../../Utils/CommonStyles";
import AsyncStorage from "@react-native-community/async-storage";
import ScaleText from "../ScaleText";

const MainHeader = (props) => {
  const [userData, setUserData] = useState({});
  useFocusEffect(
    React.useCallback(() => {
      getUserDetails();
      return () => {};
    }, [props])
  );

  const getUserDetails = async () => {
    const getUserData = await AsyncStorage.getItem("localuserdata");
    if (JSON?.parse(getUserData)?.login_type) {
      setUserData(JSON?.parse(getUserData));
    }
  };
  const {
    isBack,
    headerText,
    isSearch = true,
    notify = userData?.login_type ? true : false,
    isLogin = userData?.login_type ? true : false,
    loginButton = false,
    headerType = "",
    justifyContent = "space-between",
    fontSize = FONT_SIZE.large,
    backgroundColor = COLORS.WHITE,
    onPressBack = false,
    TxtMarginRight = TxtMarginRight,
    backIconColor = COLORS.BLACK,
    backTxtColor = COLORS.BLACK,
    backText = true,
  } = props;
  const navigation = useNavigation();
  const OnpressBack = () => {
    navigation.goBack(null);
  };
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
            {notify ? (
              <TouchableOpacity style={styles.leftIconVw}>
                <IconX
                  origin={ICON_TYPE.FONT_AWESOME}
                  name={"bell-o"}
                  size={21}
                  color={COLORS.BLACK}
                />
                <View style={styles.notifyVw}>
                  <ScaleText style={styles.notifyTxt}>1</ScaleText>
                </View>
              </TouchableOpacity>
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
              {backText || isLogin ? (
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
                <ScaleText
                  style={[
                    styles.topButtonTxt,
                    {
                      color: COLORS.BLACK,
                    },
                  ]}
                >
                  Log In
                </ScaleText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.topButtonVw}>
                <ScaleText style={styles.topButtonTxt}>To Register</ScaleText>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={CommonStyles.straightCon}>
              {isLogin && notify ? (
                <TouchableOpacity style={styles.leftIconVw}>
                  <IconX
                    origin={ICON_TYPE.FONT_AWESOME}
                    name={"bell-o"}
                    size={21}
                    color={COLORS.BLACK}
                  />
                  <View style={styles.notifyVw}>
                    <ScaleText style={styles.notifyTxt}>1</ScaleText>
                  </View>
                </TouchableOpacity>
              ) : null}
              {isSearch ? (
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
              ) : null}
            </View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default MainHeader;
