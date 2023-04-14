import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { IconX, ICON_TYPE } from "../Components/Icons/Icon";
import {
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  GREY_COLOR_CODE,
  IOS,
  WHITE_COLOR_CODE,
  windowHeight,
  windowWidth,
  YELLOW_COLOR_CODE,
} from "../Utils/Constant";
import { businessTypes, businessPageObj } from "../Utils/staticData";

const CustomPopups = (props) => {
  const { isFocused = "", handleNavigation, onPressOptions } = props;
  return (
    <>
      {isFocused === "EventManagement" ||
      isFocused === "PlusManagement" ||
      isFocused === "JobManagement" ||
      isFocused === "MoreManagement" ? (
        <Pressable
          onPress={() => handleNavigation("DashBoard")}
          style={styles.customPopupVw}
        >
          <View
            style={[
              styles.popupVw,
              {
                marginLeft: isFocused === "EventManagement" ? 24 : 0,
                alignSelf:
                  isFocused === "JobManagement" ||
                  isFocused === "MoreManagement"
                    ? "flex-end"
                    : isFocused === "PlusManagement"
                    ? "center"
                    : "auto",
                marginRight: isFocused === "JobManagement" ? 24 : 0,
              },
            ]}
          >
            {isFocused === "EventManagement" ? (
              <>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Find Event"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Create Event"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"How it works"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Pricing"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.subCatVw, { borderBottomWidth: 0 }]}
                >
                  <Text style={styles.subCatTxt}>{"Featured"}</Text>
                </TouchableOpacity>
              </>
            ) : isFocused === "PlusManagement" ? (
              <>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Create Job"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Create Event"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Create a Post"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Write a Review"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Sell Products"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.subCatVw, { borderBottomWidth: 0 }]}
                >
                  <Text style={styles.subCatTxt}>{"Add a Business"}</Text>
                </TouchableOpacity>
              </>
            ) : isFocused === "JobManagement" ? (
              <>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Find Post"}</Text>
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
            ) : isFocused === "MoreManagement" ? (
              <>
                <TouchableOpacity
                  onPress={() => onPressOptions(businessTypes[2])}
                  style={styles.subCatVw}
                >
                  <Text style={styles.subCatTxt}>{businessTypes[2].name}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => onPressOptions(businessTypes[3])}
                  style={styles.subCatVw}
                >
                  <Text style={styles.subCatTxt}>{businessTypes[3].name}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => onPressOptions(businessTypes[1])}
                  style={[styles.subCatVw, { borderBottomWidth: 0 }]}
                >
                  <Text style={styles.subCatTxt}>{businessTypes[1].name}</Text>
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
  const [isFocused, setIsFocused] = useState("DashBoard");
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const handleNavigation = (type) => {
    switch (type) {
      case "DashBoard":
        navigation.navigate(type);
        setIsFocused("DashBoard");
        break;
      default:
        if (isFocused === type) {
          setIsFocused("DashBoard");
        } else {
          setIsFocused(type);
        }
        break;
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
    }
  };
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View>
      <View style={styles.iconStyleVw}>
        <TouchableOpacity
          style={styles.tapVws}
          onPress={() => handleNavigation("DashBoard")}
        >
          <View
            style={
              isFocused === "DashBoard"
                ? styles.iconActiveVw
                : styles.iconInActiveVw
            }
          >
            <IconX
              origin={ICON_TYPE.FONT_AWESOME5}
              name="home"
              size={20}
              color={
                isFocused === "DashBoard" ? WHITE_COLOR_CODE : BLACK_COLOR_CODE
              }
            />
          </View>
          <Text
            style={[
              styles.iconTxt,
              {
                color:
                  isFocused === "DashBoard"
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
          <View
            style={
              isFocused === "EventManagement"
                ? styles.iconActiveVw
                : styles.iconInActiveVw
            }
          >
            <IconX
              origin={ICON_TYPE.FONT_AWESOME5}
              name="calendar-day"
              size={20}
              color={
                isFocused === "EventManagement"
                  ? WHITE_COLOR_CODE
                  : BLACK_COLOR_CODE
              }
            />
          </View>
          <Text
            style={[
              styles.iconTxt,
              {
                color:
                  isFocused === "EventManagement"
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
              origin={ICON_TYPE.FONT_AWESOME}
              name="plus-circle"
              size={40}
              color={
                isFocused === "PlusManagement"
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
          <View
            style={
              isFocused === "JobManagement"
                ? styles.iconActiveVw
                : styles.iconInActiveVw
            }
          >
            <IconX
              origin={ICON_TYPE.ENTYPO}
              name="briefcase"
              size={20}
              color={
                isFocused === "JobManagement"
                  ? WHITE_COLOR_CODE
                  : BLACK_COLOR_CODE
              }
            />
          </View>
          <Text
            style={[
              styles.iconTxt,
              {
                color:
                  isFocused === "JobManagement"
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
          onPress={() => handleNavigation("MoreManagement")}
        >
          <View
            style={
              isFocused === "MoreManagement"
                ? styles.iconActiveVw
                : styles.iconInActiveVw
            }
          >
            <IconX
              origin={ICON_TYPE.MATERIAL_COMMUNITY}
              name="more"
              size={20}
              color={
                isFocused === "MoreManagement"
                  ? WHITE_COLOR_CODE
                  : BLACK_COLOR_CODE
              }
            />
          </View>
          <Text
            style={[
              styles.iconTxt,
              {
                color:
                  isFocused === "MoreManagement"
                    ? YELLOW_COLOR_CODE
                    : BLACK_COLOR_CODE,
              },
            ]}
          >
            More
          </Text>
        </TouchableOpacity>
      </View>
      <CustomPopups
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        handleNavigation={handleNavigation}
        onPressOptions={onPressOptions}
      />
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
    borderWidth: 0.5,
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
    marginBottom: IOS ? 10 : 1,
    paddingTop: 6,
  },
  iconActiveVw: {
    borderRadius: 100,
    backgroundColor: YELLOW_COLOR_CODE,
    padding: 6,
  },
  iconInActiveVw: {
    borderRadius: 50,
    padding: 6,
  },
  iconTxt: {
    fontSize: 12,
    fontFamily: FONT_FAMILY_REGULAR,
    textAlign: "center",
  },
  customPopupVw: {
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 55,
    height: windowHeight,
    width: windowWidth,
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
    borderColor: GREY_COLOR_CODE,
    borderBottomWidth: 1.2,
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
