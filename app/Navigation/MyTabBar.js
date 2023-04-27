import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Pressable,
  Image,
} from "react-native";
import { IconX, ICON_TYPE } from "../Components/Icons/Icon";
import TabModalScreens from "../Components/TabModalScreens";
import {
  BLACK_COLOR_CODE,
  COLORS,
  Constants,
  FONT_FAMILY_REGULAR,
  FONT_SIZE,
  GREY_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../Utils/Constant";
import { Images } from "../Utils/images";
import { businessPageObj } from "../Utils/staticData";

function MyTabBar({ state, navigation }) {
  const [isFocused, setIsFocused] = useState({
    same: "DashBoard",
    modal: "",
    other: "DashBoard",
  });
  const [userData, setUserData] = useState({});

  useFocusEffect(
    React.useCallback(() => {
      getLoginDetail();
      if (state?.index === 0 || state?.index === 1) {
        setIsFocused({
          same: state?.index === 1 ? "MenuPage" : "DashBoard",
          modal: "",
          other: "",
        });
      }
    }, [navigation, state])
  );
  const getLoginDetail = async () => {
    const getUserData = await AsyncStorage.getItem("localuserdata");
    if (JSON?.parse(getUserData)?.login_type) {
      setUserData(JSON?.parse(getUserData));
    }
  };

  const handleNavigation = (type) => {
    if (type === "DashBoard" || type === "MenuPage") {
      navigation.navigate(type);
      setIsFocused({
        same: type,
        other: type,
        modal: "",
      });
    } else {
      setIsFocused({
        same: type,
        other: type,
        modal: type === isFocused.modal ? "" : type,
      });
    }
  };

  return (
    <View>
      <TabModalScreens
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        userData={userData}
        navigation={navigation}
      />
      <View style={styles.iconStyleVw}>
        <TouchableOpacity
          style={styles.tapVws}
          onPress={() => handleNavigation("DashBoard")}
        >
          <View>
            <IconX
              origin={ICON_TYPE.ICONICONS}
              name={isFocused.same === "DashBoard" ? "home" : "home-outline"}
              size={24}
              color={
                isFocused.same === "DashBoard"
                  ? YELLOW_COLOR_CODE
                  : BLACK_COLOR_CODE
              }
            />
          </View>
          <Text
            style={[
              styles.iconTxt,
              {
                color:
                  isFocused.same === "DashBoard"
                    ? YELLOW_COLOR_CODE
                    : BLACK_COLOR_CODE,
              },
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tapVws}
          onPress={() => handleNavigation("EventManagement")}
        >
          <View>
            <IconX
              origin={
                isFocused.same === "EventManagement"
                  ? ICON_TYPE.MATERIAL_ICONS
                  : ICON_TYPE.FEATHER_ICONS
              }
              name={isFocused.same === "EventManagement" ? "event" : "calendar"}
              size={isFocused.same === "EventManagement" ? 26 : 20}
              color={
                isFocused.same === "EventManagement"
                  ? YELLOW_COLOR_CODE
                  : BLACK_COLOR_CODE
              }
            />
          </View>
          <Text
            style={[
              styles.iconTxt,
              {
                color:
                  isFocused.same === "EventManagement"
                    ? YELLOW_COLOR_CODE
                    : BLACK_COLOR_CODE,
              },
            ]}
          >
            Events
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tapVws}
          onPress={() => handleNavigation("PlusManagement")}
        >
          <View style={{ marginBottom: 5 }}>
            <IconX
              origin={ICON_TYPE.ANT_ICON}
              name={
                isFocused.same === "PlusManagement"
                  ? "pluscircle"
                  : "pluscircleo"
              }
              size={34}
              color={
                isFocused.same === "PlusManagement"
                  ? YELLOW_COLOR_CODE
                  : BLACK_COLOR_CODE
              }
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tapVws}
          onPress={() => handleNavigation("JobManagement")}
        >
          <View>
            <IconX
              origin={ICON_TYPE.ICONICONS}
              name={
                isFocused.same === "JobManagement"
                  ? "briefcase"
                  : "briefcase-outline"
              }
              size={20}
              color={
                isFocused.same === "JobManagement"
                  ? YELLOW_COLOR_CODE
                  : BLACK_COLOR_CODE
              }
            />
          </View>
          <Text
            style={[
              styles.iconTxt,
              {
                color:
                  isFocused.same === "JobManagement"
                    ? YELLOW_COLOR_CODE
                    : BLACK_COLOR_CODE,
              },
            ]}
          >
            Jobs
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tapVws}
          onPress={() => handleNavigation("MenuPage")}
        >
          {userData?.login_type ? (
            <View>
              <Image
                source={require("../Assets/extraImages/demo-profile-image.png")}
                style={[
                  styles.profileVw,
                  {
                    borderWidth: isFocused.same === "MenuPage" ? 1 : 0,
                  },
                ]}
                resizeMode={"contain"}
              />
            </View>
          ) : (
            <View>
              <IconX
                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                name={"menu"}
                size={20}
                color={
                  isFocused.same === "MenuPage"
                    ? YELLOW_COLOR_CODE
                    : BLACK_COLOR_CODE
                }
              />
            </View>
          )}
          <Text
            style={[
              styles.iconTxt,
              {
                color:
                  isFocused.same === "MenuPage"
                    ? YELLOW_COLOR_CODE
                    : BLACK_COLOR_CODE,
              },
            ]}
          >
            Menu
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default MyTabBar;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    backfaceVisibility: "visible",
    backgroundColor: WHITE_COLOR_CODE,
    alignItems: "center",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    paddingVertical: 5,
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  plusVw: {
    position: "absolute",
    bottom: 30,
    backgroundColor: WHITE_COLOR_CODE,
    borderRadius: 100,
    alignSelf: "center",
    padding: 5,
    paddingHorizontal: 8,
    borderWidth: Constants.normalBW,
  },
  tapVws: {
    alignItems: "center",
    flex: 1,
  },
  leftContainers: {
    marginRight: 45,
  },
  rightContainers: {
    marginLeft: 26,
  },
  iconStyleVw: {
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Constants.Ios ? 10 : 1,
    paddingTop: 6,
  },
  iconActiveVw: {
    borderRadius: 100,
    backgroundColor: YELLOW_COLOR_CODE,
    padding: 5,
  },
  iconInActiveVw: {
    borderRadius: 100,
    padding: 6,
  },
  iconTxt: {
    fontSize: FONT_SIZE.verysmall,
    fontFamily: FONT_FAMILY_REGULAR,
    textAlign: "center",
  },
  profileVw: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: YELLOW_COLOR_CODE,
    borderRadius: 100,
  },
  customPopupVw: {
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 55,
    height: Constants.windowHeight,
    width: Constants.windowWidth,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  popupVw: {
    backgroundColor: WHITE_COLOR_CODE,
    paddingVertical: 10,
    width: 200,
    borderRadius: 20,
  },
  subCatVw: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.BORDER_LINE,
    borderBottomWidth: Constants.normalBW,
    paddingVertical: 8,
  },
  subCatTxt: {
    fontSize: 15,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
    textAlign: "center",
  },
});
{
  /* <View style={styles.mainContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isFocused = state.index === index;
          const onPress = () => {
            setSubCatType("");
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
            if (route.name === "EventManagement" && state.index === 1) {
              setSubCatType(route.name);
            } else {
              setSubCatType("");
            }
          };
          return (
            <>
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityStates={isFocused ? ["selected"] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.iconStyleVw}
              >
                <View style={styles.leftContainers}>
                  {label === "DashBoard" ? (
                    <View style={styles.tapVws}>
                      <View
                        style={
                          isFocused
                            ? styles.iconActiveVw
                            : styles.iconInActiveVw
                        }
                      >
                        <IconX
                          origin={ICON_TYPE.FONT_AWESOME5}
                          name="home"
                          color={
                            isFocused ? WHITE_COLOR_CODE : BLACK_COLOR_CODE
                          }
                        />
                      </View>
                      <Text
                        style={[
                          styles.iconTxt,
                          {
                            color: isFocused
                              ? YELLOW_COLOR_CODE
                              : BLACK_COLOR_CODE,
                          },
                        ]}
                      >
                        Home
                      </Text>
                    </View>
                  ) : label === "EventManagement" ? (
                    <View style={styles.tapVws}>
                      <View
                        style={
                          isFocused
                            ? styles.iconActiveVw
                            : styles.iconInActiveVw
                        }
                      >
                        <IconX
                          origin={ICON_TYPE.FONT_AWESOME5}
                          name="calendar-day"
                          color={
                            isFocused ? WHITE_COLOR_CODE : BLACK_COLOR_CODE
                          }
                        />
                      </View>
                      <Text
                        style={[
                          styles.iconTxt,
                          {
                            color: isFocused
                              ? YELLOW_COLOR_CODE
                              : BLACK_COLOR_CODE,
                          },
                        ]}
                      >
                        Event
                      </Text>
                    </View>
                  ) : null}
                </View>
                <View style={styles.rightContainers}>
                  {label === "JobList" ? (
                    <View style={styles.tapVws}>
                      <View
                        style={
                          isFocused
                            ? styles.iconActiveVw
                            : styles.iconInActiveVw
                        }
                      >
                        <IconX
                          origin={ICON_TYPE.ENTYPO}
                          name="briefcase"
                          color={
                            isFocused ? WHITE_COLOR_CODE : BLACK_COLOR_CODE
                          }
                        />
                      </View>
                      <Text
                        style={[
                          styles.iconTxt,
                          {
                            color: isFocused
                              ? YELLOW_COLOR_CODE
                              : BLACK_COLOR_CODE,
                          },
                        ]}
                      >
                        Job
                      </Text>
                    </View>
                  ) : label === "ShopList" ? (
                    <View style={styles.tapVws}>
                      <View
                        style={
                          isFocused
                            ? styles.iconActiveVw
                            : styles.iconInActiveVw
                        }
                      >
                        <IconX
                          origin={ICON_TYPE.ENTYPO}
                          name="shopping-cart"
                          color={
                            isFocused ? WHITE_COLOR_CODE : BLACK_COLOR_CODE
                          }
                        />
                      </View>
                      <Text
                        style={[
                          styles.iconTxt,
                          {
                            color: isFocused
                              ? YELLOW_COLOR_CODE
                              : BLACK_COLOR_CODE,
                          },
                        ]}
                      >
                        MarketPlace
                      </Text>
                    </View>
                  ) : null}
                </View>
              </TouchableOpacity>
            </>
          );
        })}
      </View> */
}
