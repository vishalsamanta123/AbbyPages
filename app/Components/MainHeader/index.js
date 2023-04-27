import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import { Images } from "../../Utils/images";
import { BLACK_COLOR_CODE, COLORS, FONT_SIZE } from "../../Utils/Constant";
import {
  DrawerActions,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import CommonStyles from "../../Utils/CommonStyles";
import AsyncStorage from "@react-native-community/async-storage";

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
    loginButton = true,
    headerType = "",
    justifyContent = "space-between",
    fontSize = FONT_SIZE.largeL,
    backgroundColor = COLORS.WHITE,
    onPressBack = false,
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
          <View>
            <Image
              source={Images.LOGO}
              resizeMode={"contain"}
              style={styles.logoVw}
            />
          </View>
          <View style={CommonStyles.straightCon}>
            {notify ? (
              <TouchableOpacity style={styles.leftIconVw}>
                <IconX
                  origin={ICON_TYPE.FONT_AWESOME}
                  name={"bell-o"}
                  size={21}
                  color={BLACK_COLOR_CODE}
                />
                <View style={styles.notifyVw}>
                  <Text style={styles.notifyTxt}>1</Text>
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
                  color={BLACK_COLOR_CODE}
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
            {isLogin ? (
              <View style={CommonStyles.straightCon}>
                <IconX
                  origin={ICON_TYPE.ANT_ICON}
                  name={"left"}
                  size={25}
                  color={BLACK_COLOR_CODE}
                />
                <Text style={styles.backtxt}>Back</Text>
              </View>
            ) : (
              <View style={CommonStyles.straightCon}>
                <IconX
                  origin={ICON_TYPE.ANT_ICON}
                  name={"left"}
                  size={25}
                  color={BLACK_COLOR_CODE}
                />
                <Image
                  source={Images.ABBYLOGO_TRNSP}
                  style={styles.topLogoVw}
                />
              </View>
            )}
          </TouchableOpacity>
          {isLogin ? (
            <Text
              style={[
                styles.topHeaderTxt,
                {
                  fontSize: fontSize,
                  marginRight: !isSearch && !notify ? 18 : 0,
                },
              ]}
            >
              {headerText}
            </Text>
          ) : null}
          {isLogin ? (
            <View style={CommonStyles.straightCon}>
              {notify ? (
                <TouchableOpacity style={styles.leftIconVw}>
                  <IconX
                    origin={ICON_TYPE.FONT_AWESOME}
                    name={"bell-o"}
                    size={21}
                    color={BLACK_COLOR_CODE}
                  />
                  <View style={styles.notifyVw}>
                    <Text style={styles.notifyTxt}>1</Text>
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
                    color={BLACK_COLOR_CODE}
                  />
                </TouchableOpacity>
              ) : null}
            </View>
          ) : (
            <>
              {loginButton ? (
                <View style={CommonStyles.straightCon}>
                  <TouchableOpacity
                    style={[styles.topButtonVw, styles.topButtonVwNon]}
                  >
                    <Text
                      style={[
                        styles.topButtonTxt,
                        {
                          color: COLORS.BLACK,
                        },
                      ]}
                    >
                      Log In
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.topButtonVw}>
                    <Text style={styles.topButtonTxt}>To Register</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={CommonStyles.straightCon}>
                  {notify ? (
                    <TouchableOpacity style={styles.leftIconVw}>
                      <IconX
                        origin={ICON_TYPE.FONT_AWESOME}
                        name={"bell-o"}
                        size={21}
                        color={BLACK_COLOR_CODE}
                      />
                      <View style={styles.notifyVw}>
                        <Text style={styles.notifyTxt}>1</Text>
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
                        color={BLACK_COLOR_CODE}
                      />
                    </TouchableOpacity>
                  ) : null}
                </View>
              )}
            </>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default MainHeader;
