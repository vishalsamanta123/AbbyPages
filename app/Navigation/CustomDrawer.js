import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-community/async-storage";
import { apiCall } from "../Utils/httpClient";
import ENDPOINTS from "../Utils/apiEndPoints";
import {
  FONT_FAMILY_REGULAR,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
  LIGHT_GREY_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  FONT_FAMILY_LIGHT,
  BLACK_COLOR_CODE,
} from "../Utils/Constant";
import { useFocusEffect } from "@react-navigation/native";

import { AuthContext } from "../Utils/UserContext";
const DesignDrawer = () => {
  const { signOut } = React.useContext(AuthContext);
  const [profileData, setProfileData] = useState("");
  const [logoBaseImgUrl, setLogoBaseImgUrl] = useState("");
  const [loginType, setLoginType] = useState("");
  useFocusEffect(
    React.useCallback(() => {
      getProfile();
      return () => getProfile();
    }, [])
  );
  const getProfile = async () => {
    const { data } = await apiCall("POST", ENDPOINTS.GET_USER_PROFILE);
    if (data.status === 200) {
      setProfileData(data.data);
      setLogoBaseImgUrl(data.business_logo);
    }
  };
  // const getLoginType = async () => {
  //     const localuserdata = await AsyncStorage.getItem('localuserdata');
  //     if (localuserdata !== '') {
  //         setLoginType(JSON.parse(localuserdata).data.login_type);
  //     };
  // };
  return (
    <View style={styles.MainContainer}>
      <View style={styles.ContainerView}>
        <View style={styles.NameContainer}>
          {profileData.login_type == 2 ? (
            <Image
              style={styles.UserImge}
              source={{
                uri: logoBaseImgUrl + profileData.logo,
              }}
            />
          ) : (
            <Image
              style={styles.UserImge}
              source={{
                uri: profileData.profile_image,
              }}
            />
          )}
          <View style={styles.UserNameView}>
            {profileData.login_type == 2 ? (
              <Text
                numberOfLines={1}
                style={[styles.UserNameText, { width: 120 }]}
              >
                {profileData.business_name}
              </Text>
            ) : (
              <Text
                numberOfLines={1}
                style={[styles.UserNameText, { width: 120 }]}
              >
                {profileData.first_name + profileData.last_name}
              </Text>
            )}
            <Text style={[styles.UserAddress, { width: 140 }]}>
              {profileData.hometown}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={signOut}>
          <Image source={require("../Assets/menu-logout-icon.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export function customDrawerContents(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: "100%" }}>
        <DesignDrawer />
        <DrawerContentScrollView {...props}>
          <View style={styles.NavigationContain}>
            <Text style={styles.NavigationText}>NAVIGATIONS</Text>
          </View>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate("DashBoard");
            }}
          >
            <View style={styles.ImgeView}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../Assets/dashboardicon.png")}
              />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>Dashboard</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate("ProfileSettings");
            }}
          >
            <View style={styles.ImgeView}>
              <Image source={require("../Assets/profile_icon_menu.png")} />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>Profile Settings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate("FollowingList");
            }}
          >
            <View style={styles.ImgeView}>
              <Image source={require("../Assets/following_icon_menu.png")} />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>Following</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate("FollowerList");
            }}
          >
            <View style={styles.ImgeView}>
              <Image source={require("../Assets/followers_icon_menu.png")} />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>Followers</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate("CreateEvent");
            }}
          >
            <View style={styles.ImgeView}>
              <Image source={require("../Assets/events_icon_menu.png")} />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>Events</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate("OrderHistory");
            }}
          >
            <View style={styles.ImgeView}>
              <Image source={require("../Assets/order_icon_menu.png")} />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>Order History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate("Reviews");
            }}
          >
            <View style={styles.ImgeView}>
              <Image source={require("../Assets/star_icon_menu.png")} />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>Reviews</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate("Bookmark");
            }}
          >
            <View style={styles.ImgeView}>
              <Image source={require("../Assets/bookmark_icon_menu.png")} />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>Bookmarks</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate("Collections");
            }}
          >
            <View style={styles.ImgeView}>
              <Image source={require("../Assets/collection_icon_menu.png")} />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>Collections</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate("Notifications");
            }}
          >
            <View style={styles.ImgeView}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../Assets/notification.png")}
              />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>Notifications</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate("RecentActivity");
            }}
          >
            <View style={styles.ImgeView}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../Assets/recent_activity.png")}
              />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>Recent Activity</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate("Friends");
            }}
          >
            <View style={styles.ImgeView}>
              <Image source={require("../Assets/following_icon_menu.png")} />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>Friends</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactUsContainer}>
            <View style={styles.ImgeView}>
              <Image source={require("../Assets/bulb_icon_menu.png")} />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>Tips</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactUsContainer}>
            <View style={styles.ImgeView}>
              <Image source={require("../Assets/checkin_icon_menu.png")} />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>Check-Ins</Text>
            </View>
          </TouchableOpacity>
        </DrawerContentScrollView>
      </View>
    </View>
  );
}
export function BusinessDrawerContents(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: "100%" }}>
        <DesignDrawer />
        <DrawerContentScrollView {...props}>
          <View style={styles.NavigationContain}>
            <Text style={styles.NavigationText}>NAVIGATIONS</Text>
          </View>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate("BusinessHome");
            }}
          >
            <View style={styles.ImgeView}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../Assets/drawerhome.png")}
              />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate("BusinessProfile");
            }}
          >
            <View style={styles.ImgeView}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../Assets/businessprofile.png")}
              />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>Business Profile</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate("BussinessInfo");
            }}
          >
            <View style={styles.ImgeView}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../Assets/businessinformation.png")}
              />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>Business Info</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate("OpeningHours");
            }}
          >
            <View style={styles.ImgeView}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../Assets/openinghours.png")}
              />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>Add Opening Hours</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate("JobManagementList");
            }}
          >
            <View style={styles.ImgeView}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../Assets/teamwork.png")}
              />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>Job Management</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate("RestaurantManagement");
            }}
          >
            <View style={styles.ImgeView}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../Assets/diet.png")}
              />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>Restuarant Management</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate("BusinessOrderHistory");
            }}
          >
            <View style={styles.ImgeView}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../Assets/box.png")}
              />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>My Orders</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate("MyProductList");
            }}
          >
            <View style={styles.ImgeView}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../Assets/diet.png")}
              />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>My product</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate("BusinessChangePassword");
            }}
          >
            <View style={styles.ImgeView}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../Assets/diet.png")}
              />
            </View>
            <View style={styles.TextContain}>
              <Text style={styles.drawerText}>Change password</Text>
            </View>
          </TouchableOpacity>
        </DrawerContentScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  contactUsContainer: {
    flexDirection: "row",
    borderBottomColor: LINE_COMMON_COLOR_CODE,
    borderBottomWidth: 0.5,
    width: "100%",
    height: 50,
    paddingLeft: 15,
    alignItems: "center",
  },
  drawerText: {
    fontFamily: FONT_FAMILY_LIGHT,
    color: BLACK_COLOR_CODE,
    paddingLeft: 5,
  },
  NavigationContain: {
    padding: 15,
  },
  NavigationText: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_GREY_COLOR_CODE,
  },
  ImgeView: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  TextContain: {
    flex: 5.3,
  },
  MainContainer: {
    padding: 15,
    backgroundColor: YELLOW_COLOR_CODE,
  },
  ContainerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  NameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  UserImge: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  UserNameView: {
    paddingLeft: 10,
  },
  UserNameText: {
    fontSize: 20,
    fontFamily: FONT_FAMILY_REGULAR,
    color: WHITE_COLOR_CODE,
  },
  UserAddress: {
    fontSize: 13,
    fontFamily: FONT_FAMILY_REGULAR,
    color: WHITE_COLOR_CODE,
  },
});
