import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { IconX, ICON_TYPE } from "../Components/Icons/Icon";
import ScaleText from "../Components/ScaleText";
import TabModal from "../Components/TabModal/TabModal";
import TabModalScreens from "../Components/TabModal/TabModalScreens";
import { COLORS, Constants, FONT_FAMILY, FONT_SIZE } from "../Utils/Constant";

function MyTabBar({ state, navigation }) {
  const [isFocused, setIsFocused] = useState("DashBoard");
  const [onPressmodal, setOnPressmodal] = useState({
    modal: "DashBoard",
    navigate: "",
  });
  const [userData, setUserData] = useState({});

  useFocusEffect(
    React.useCallback(() => {
      getLoginDetail();
      if (state?.index === 0 || state?.index === 1) {
        setIsFocused(state?.index === 1 ? "MenuPage" : "DashBoard");
      }
    }, [navigation, state?.index])
  );

  const getLoginDetail = async () => {
    const getUserData = await AsyncStorage.getItem("localuserdata");
    if (JSON?.parse(getUserData)?.login_type) {
      setUserData(JSON?.parse(getUserData));
    }
  };

  const handleNavigation = (type, index) => {
    navigation.navigate(type);
    setIsFocused(type);
    setOnPressmodal({
      ...onPressmodal,
      modal: "",
      navigate: "",
    });
  };

  return (
    <>
      <TabModalScreens
        navigation={navigation}
        onPressmodal={onPressmodal}
        setOnPressmodal={setOnPressmodal}
        isFocused={isFocused}
        setIsFocused={setIsFocused}
      />
      <View style={styles.iconStyleVw}>
        {state.routes.map((route, index) => {
          return (
            index === 1 && (
              <TouchableOpacity
                style={styles.tapVws}
                onPress={() => handleNavigation("DashBoard", 0)}
              >
                <View>
                  <IconX
                    origin={ICON_TYPE.ICONICONS}
                    name={isFocused === "DashBoard" ? "home" : "home-outline"}
                    size={24}
                    color={
                      isFocused === "DashBoard" ? COLORS.YELLOW : COLORS.BLACK
                    }
                  />
                </View>
                <ScaleText
                  style={[
                    styles.iconTxt,
                    {
                      color:
                        isFocused === "DashBoard"
                          ? COLORS.YELLOW
                          : COLORS.BLACK,
                    },
                  ]}
                >
                  Home
                </ScaleText>
              </TouchableOpacity>
            )
          );
        })}
        <TabModal
          onPressmodal={onPressmodal}
          setOnPressmodal={setOnPressmodal}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          handleNavigation={handleNavigation}
          state={state}
        />
        {state?.routes?.map((route, index) => {
          return (
            index === 1 && (
              <TouchableOpacity
                style={styles.tapVws}
                onPress={() => handleNavigation("MenuPage", 1)}
              >
                {userData?.login_type ? (
                  <View>
                    <Image
                      // source={require("../Assets/extraImages/demo-profile-image.png")}
                      source={{ uri: userData?.profile_image }}
                      style={[
                        styles.profileVw,
                        {
                          borderWidth: isFocused === "MenuPage" ? 1 : 0,
                        },
                      ]}
                      resizeMode={"cover"}
                    />
                  </View>
                ) : (
                  <View>
                    <IconX
                      origin={ICON_TYPE.MATERIAL_COMMUNITY}
                      name={"menu"}
                      size={20}
                      color={
                        isFocused === "MenuPage" ? COLORS.YELLOW : COLORS.BLACK
                      }
                    />
                  </View>
                )}
                <ScaleText
                  style={[
                    styles.iconTxt,
                    {
                      color:
                        isFocused === "MenuPage" ? COLORS.YELLOW : COLORS.BLACK,
                    },
                  ]}
                >
                  Menu
                </ScaleText>
              </TouchableOpacity>
            )
          );
        })}
      </View>
    </>
  );
}
export default MyTabBar;

const styles = StyleSheet.create({
  tapVws: {
    alignItems: "center",
    flex: 1,
  },
  iconStyleVw: {
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Constants.Ios ? 10 : 1,
    paddingTop: 6,
  },
  iconTxt: {
    fontSize: FONT_SIZE.verysmall,
    fontFamily: FONT_FAMILY.REGULAR,
    textAlign: "center",
  },
  profileVw: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: COLORS.YELLOW,
    borderRadius: 100,
  },
});
