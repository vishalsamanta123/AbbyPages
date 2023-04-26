import AsyncStorage from "@react-native-community/async-storage";
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
import {
  BLACK_COLOR_CODE,
  COLORS,
  Constants,
  FONT_FAMILY_REGULAR,
  GREY_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../Utils/Constant";
import { Images } from "../Utils/images";
import { businessPageObj } from "../Utils/staticData";

const CustomPopups = (props) => {
  const {
    isFocused,
    setIsFocused = () => {},
    onPressOptions,
    userData,
    navigation,
  } = props;
  return (
    <>
      {isFocused.modal === "EventManagement" ||
      isFocused.modal === "PlusManagement" ||
      isFocused.modal === "JobManagement" ? (
        <Pressable
          onPress={() =>
            setIsFocused({
              ...isFocused,
              modal: "",
            })
          }
          style={styles.customPopupVw}
        >
          <View
            style={[
              styles.popupVw,
              {
                marginLeft: isFocused.modal === "EventManagement" ? 24 : 0,
                alignSelf:
                  isFocused.modal === "JobManagement" ||
                  isFocused.modal === "MoreManagement"
                    ? "flex-end"
                    : isFocused.modal === "PlusManagement"
                    ? "center"
                    : "auto",
                marginRight: isFocused.modal === "JobManagement" ? 24 : 0,
              },
            ]}
          >
            {isFocused.modal === "EventManagement" ? (
              <>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Create Event"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.subCatVw}
                  onPress={() => {
                    navigation.navigate("EventListings");
                    setIsFocused({
                      ...isFocused,
                      modal: "",
                    });
                  }}
                >
                  <Text style={styles.subCatTxt}>{"Find Event"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Featured"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.subCatVw}
                  onPress={() => {
                    navigation.navigate("HowItWorks");
                    setIsFocused({
                      ...isFocused,
                      modal: "",
                    });
                  }}
                >
                  <Text style={styles.subCatTxt}>{"How it works"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.subCatVw, { borderBottomWidth: 0 }]}
                  onPress={() => {
                    navigation.navigate("Pricing");
                    setIsFocused({
                      ...isFocused,
                      modal: "",
                    });
                  }}
                >
                  <Text style={styles.subCatTxt}>{"Pricing"}</Text>
                </TouchableOpacity>
              </>
            ) : isFocused.modal === "PlusManagement" ? (
              <>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Add a Business"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Business Post"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Create Event"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Post Job"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Sell Products"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.subCatVw, { borderBottomWidth: 0 }]}
                >
                  <Text style={styles.subCatTxt}>{"Write a Review "}</Text>
                </TouchableOpacity>
              </>
            ) : isFocused.modal === "JobManagement" ? (
              <>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("JobListing");
                    setIsFocused({
                      ...isFocused,
                      modal: "",
                    });
                  }}
                  style={styles.subCatVw}
                >
                  <Text style={styles.subCatTxt}>{"Find a Job"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Post Job"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.subCatVw, { borderBottomWidth: 0 }]}
                >
                  <Text style={styles.subCatTxt}>{"Upload Your Résumé"}</Text>
                </TouchableOpacity>
              </>
            ) : null}
          </View>
        </Pressable>
      ) : null}
    </>
  );
};
function MyTabBar({ state, descriptors, navigation }) {
  const [isFocused, setIsFocused] = useState({
    same: "DashBoard",
    other: "DashBoard",
  });
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getLoginDetail();
  }, [navigation]);
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
  const onPressOptions = (options) => {
    if (options.type === "2") {
      navigation.navigate("ShopList");
    } else if (options.type === "1" || options.type === "3") {
      const newObj = { ...businessPageObj, business_type: options.type };
      navigation.navigate("BusinessPageListing", {
        nearbySearch: newObj,
      });
    } else if (options.type === "") {
      navigation.navigate("Login");
    }
  };
  // if (focusedOptions.tabBarVisible === false) {
  //   return null;
  // }
  return (
    <View>
      <CustomPopups
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        onPressOptions={onPressOptions}
        userData={userData}
        navigation={navigation}
        // setOpenTapModel={setOpenTapModel}
        // openTapModel={openTapModel}
      />
      <View style={styles.iconStyleVw}>
        <TouchableOpacity
          style={styles.tapVws}
          onPress={() => handleNavigation("DashBoard")}
        >
          <View>
            <IconX
              origin={ICON_TYPE.ANT_ICON}
              name="home"
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
              origin={ICON_TYPE.FEATHER_ICONS}
              name="calendar"
              size={20}
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
          <View>
            <IconX
              origin={ICON_TYPE.EVIL_ICONS}
              name="plus"
              size={48}
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
              origin={ICON_TYPE.SIMPLELINE}
              name="briefcase"
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
          {!userData?.login_type ? (
            <View>
              <Image
                source={Images.DEFAULT_IMG}
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
                origin={ICON_TYPE.FEATHER_ICONS}
                name="menu"
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
    fontSize: 12,
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
