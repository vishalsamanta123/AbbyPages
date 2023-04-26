import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import { Images } from "../../Utils/images";
import { BLACK_COLOR_CODE, COLORS } from "../../Utils/Constant";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import CommonStyles from "../../Utils/CommonStyles";

const MainHeader = (props) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const {
    isBack,
    headerText,
    isSearch = true,
    notify = true,
    isLogin = true,
    loginButton = false,
    headerType = "",
    justifyContent = "space-between",
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
        <View style={styles.blockCont}>
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
                style={styles.leftIconVw}
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
        <View style={styles.blockCont}>
          {isLogin ? (
            <TouchableOpacity
              onPress={() => handleGoBack()}
              style={CommonStyles.straightCon}
            >
              <IconX
                origin={ICON_TYPE.ANT_ICON}
                name={"left"}
                size={25}
                color={BLACK_COLOR_CODE}
              />
              <Text style={styles.backtxt}>Back</Text>
            </TouchableOpacity>
          ) : (
            <Image source={Images.ABBYLOGO_TRNSP} style={styles.topLogoVw} />
          )}
          {isLogin ? (
            <Text style={styles.topHeaderTxt}>{headerText}</Text>
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
                  style={styles.leftIconVw}
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
          )}
        </View>
      )}
      {/* <TouchableOpacity onPress={() => (isBack ? handleGoBack() : {})}>
          {isBack ? (
            <View style={styles.backView}>
              <IconX
                origin={ICON_TYPE.ANT_ICON}
                name={"left"}
                size={25}
                color={BLACK_COLOR_CODE}
              />
              {<Text style={styles.backtxt}>Back</Text>}
            </View>
          ) : (
            <Image
              source={Images.LOGO}
              resizeMode={"contain"}
              style={styles.logoVw}
            />
          )}
        </TouchableOpacity>
        {headerText ? (
          <Text style={styles.topHeaderTxt}>{headerText}</Text>
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
            <TouchableOpacity
              disabled={!isSearch}
              onPress={() => handleSearchPress()}
              style={styles.leftIconVw}
            >
              {isSearch ? (
                <IconX
                  origin={ICON_TYPE.ICONICONS}
                  name={"search-outline"}
                  size={22}
                  color={BLACK_COLOR_CODE}
                />
              ) : null}
            </TouchableOpacity>
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
            ) : null}
          </>
        )} */}
      {/* {searchOpen ? (
        <>
          <Input />
          <Input />
        </>
      ) : null} */}
    </SafeAreaView>
  );
};

export default MainHeader;
