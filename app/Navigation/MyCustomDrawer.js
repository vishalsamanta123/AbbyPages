import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  BLACK_COLOR_CODE,
  Constants,
  FONT_FAMILY_REGULAR,
  LINE_COMMON_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../Utils/Constant";
import QuestionModal from "../Components/Modal/questionModal";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { IconX, ICON_TYPE } from "../Components/Icons/Icon";
import { AuthContext } from "../Utils/UserContext";
import AsyncStorage from "@react-native-community/async-storage";
import { Images } from "../Utils/images";

const MyCustomDrawer = (props) => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getLoginDetail();
  }, [props]);
  const getLoginDetail = async () => {
    const getUserData = await AsyncStorage.getItem("localuserdata");
    if (JSON?.parse(getUserData)?.login_type) {
      setUserData(JSON?.parse(getUserData));
    }
  };
  const { signOut } = React.useContext(AuthContext);
  const [logoutVw, setLogoutVw] = useState(false);
  const signOutFun = () => {
    signOut();
    setLogoutVw(false);
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        contentContainerStyle={{
          paddingTop: Constants.Ios ? 0 : 0,
        }}
        {...props}
      >
        {userData?.login_type ? (
          <View style={styles.mainContainer}>
            <View style={styles.containerView}>
              <View style={styles.nameContainer}>
                {userData?.login_type === 2 ? null : (
                  <Image
                    style={styles.userImge}
                    source={{ uri: userData?.profile_image }}
                  />
                )}
                <View style={styles.userNameView}>
                  {userData?.login_type === 2 ? null : (
                    <Text
                      numberOfLines={1}
                      style={[styles.userNameText, { width: 120 }]}
                    >
                      {userData?.first_name + " " + userData?.last_name}
                    </Text>
                  )}
                  <Text style={[styles.userAddress, { width: 140 }]}>
                    {userData?.location}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.logoVw}>
            <Image
              resizeMode={"contain"}
              style={[{ width: Constants.windowWidth / 2, height: 60 }]}
              source={Images.LOGO}
            />
          </View>
        )}
        <TouchableOpacity
          style={styles.containers}
          onPress={() => {
            props.navigation.navigate("DashBoard");
          }}
        >
          <View style={styles.imgeView}>
            <IconX
              origin={ICON_TYPE.FONT_AWESOME5}
              name="home"
              color={BLACK_COLOR_CODE}
            />
          </View>
          <View style={styles.textContain}>
            <Text style={styles.drawerText}>Home</Text>
          </View>
        </TouchableOpacity>
        {userData?.login_type ? (
          <>
            <TouchableOpacity
              style={styles.containers}
              onPress={() => setLogoutVw(true)}
            >
              <View style={styles.imgeView}>
                <IconX
                  origin={ICON_TYPE.FONT_AWESOME}
                  name="power-off"
                  color={BLACK_COLOR_CODE}
                />
              </View>
              <View style={styles.textContain}>
                <Text style={styles.drawerText}>LogOut</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.containers}
              onPress={() => {
                props.navigation.navigate("ProfileSettings");
              }}
            >
              <View style={styles.imgeView}>
                <IconX
                  origin={ICON_TYPE.FONT_AWESOME}
                  name="user"
                  color={BLACK_COLOR_CODE}
                />
              </View>
              <View style={styles.textContain}>
                <Text style={styles.drawerText}>Profile</Text>
              </View>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={styles.containers}
              onPress={() => props.navigation.navigate("Login")}
            >
              <View style={styles.imgeView}>
                <IconX
                  origin={ICON_TYPE.MATERIAL_COMMUNITY}
                  name="login"
                  color={BLACK_COLOR_CODE}
                />
              </View>
              <View style={styles.textContain}>
                <Text style={styles.drawerText}>Login</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.containers}
              onPress={() => props.navigation.navigate("SignUp")}
            >
              <View style={styles.imgeView}>
                <IconX
                  origin={ICON_TYPE.FONT_AWESOME}
                  name="sign-in"
                  color={BLACK_COLOR_CODE}
                />
              </View>
              <View style={styles.textContain}>
                <Text style={styles.drawerText}>Sign Up</Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      </DrawerContentScrollView>
      <QuestionModal
        surringVisible={logoutVw}
        message={"Are you sure you want to Logout"}
        positiveResponse={() => signOutFun()}
        negativeResponse={() => setLogoutVw(false)}
      />
    </View>
  );
};

export default MyCustomDrawer;
const styles = StyleSheet.create({
  logoVw: {
    marginVertical: 8,
    alignSelf: "center",
    marginTop: Constants.Ios ? 30 : 0,
  },
  containers: {
    flexDirection: "row",
    borderBottomColor: LINE_COMMON_COLOR_CODE,
    borderBottomWidth: 0.5,
    width: "100%",
    height: 50,
    paddingLeft: 15,
    alignItems: "center",
  },
  drawerText: {
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK_COLOR_CODE,
    fontSize: 16,
    paddingLeft: 5,
  },
  imgeView: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  textContain: {
    flex: 5.3,
  },
  mainContainer: {
    padding: 15,
    backgroundColor: YELLOW_COLOR_CODE,
  },
  containerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "ios" ? 24 : 0,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImge: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  userNameView: {
    paddingLeft: 10,
  },
  userNameText: {
    fontSize: 20,
    fontFamily: FONT_FAMILY_REGULAR,
    color: WHITE_COLOR_CODE,
  },
  userAddress: {
    fontSize: 13,
    fontFamily: FONT_FAMILY_REGULAR,
    color: WHITE_COLOR_CODE,
  },
});
