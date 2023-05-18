import React, { useEffect, useContext, useState, useLayoutEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StatusBar, View, StyleSheet, Text } from "react-native";
import { Images } from "../Utils/images";
import MyCustomDrawer from "./MyCustomDrawer";
import AnimatedLottieView from "lottie-react-native";
import MyTabBar from "./MyTabBar";
import AsyncStorage from "@react-native-community/async-storage";
import { apiCall, setDefaultHeader } from "../Utils/httpClient";
import ENDPOINTS from "../Utils/apiEndPoints";
import {
  UserContext,
  AuthContext,
  MessageShowModal,
} from "../Utils/UserContext";
import Loader from "../Utils/Loader";
import { COLORS, Constants, FONT_FAMILY, FONT_SIZE } from "../Utils/Constant";

// ==================Auth Screens=========================
import LoginScreen from "../Screens/Authentication/Login";
import SignUpScreen from "../Screens/Authentication/SignUp";
import BusinessSignUpScreen from "../Screens/Authentication/BusinessSignUp";
import UserVerifyScreen from "../Screens/Authentication/UserVerify";
import BusinessUserVerifyScreen from "../Screens/Authentication/BusinessUserVerify";
import ForgotPasswordScreen from "../Screens/Authentication/ForgotPassword";
import ForgotPasswordFieldScreen from "../Screens/Authentication/ForgotPasswordField";

// ==================App Screens=========================
import BusinessPageDetails from "../Screens/User/BusinessPageMng/BusinessPageDetails";
import DashBoardScreen from "../Screens/User/DashBoard";
import BusinessPageListing from "../Screens/User/BusinessPageMng/BusinessPageListing";
import MenuPage from "../Screens/User/OtherScreens/MenuManagement/MenuPage";
import ReviewRating from "../Screens/User/BusinessPageMng/ReviewRating";
import CategorySearch from "../Screens/User/OtherScreens/SearchMng/CategorySearch";
import SubCategorySearchView from "../Screens/User/OtherScreens/SearchMng/CategorySearch/components/SubCategories";
import EventListing from "../Screens/User/EventMng/EventListing";
import JobListing from "../Screens/User/JobMng/JobListing";
import HowItWorks from "../Screens/User/EventMng/HowItWorks";
import Pricing from "../Screens/User/EventMng/Pricing";
import NewsFeed from "../Screens/User/BusinessPageMng/NewsFeed";
import JobDetail from "../Screens/User/JobMng/JobDetail";
import NeweFeedDetails from "../Screens/User/BusinessPageMng/NewsFeedDetails";
import ApplyJob from "../Screens/User/JobMng/ApplyJob";
import RestroBooking from "../Screens/User/RestroMng/RestauranrtBooking";
import ConfirmReservationView from "../Screens/User/RestroMng/ConfirmReservation";
import OrderHistoryView from "../Screens/User/RestroMng/OrderHistory";
import RestroMenu from "../Screens/User/RestroMng/RestroMenu";
import MarketplaceScreen from "../Screens/User/MarketplaceMng/Marketplace";
import Features from "../Screens/User/EventMng/Features";
import MarketplaceDetail from "../Screens/User/MarketplaceMng/MarketplaceDetail";
import RestroItemDetail from "../Screens/User/RestroMng/RestroItemDetail";
import RestroCheckout from "../Screens/User/RestroMng/RestroCheckout";
import ShoppingCart from "../Screens/User/MarketplaceMng/ShoppingCart";
import CheckOut from "../Screens/User/MarketplaceMng/CheckOut";
import AddNewLocation from "../Screens/Common/AddNewLocation";
import RestroPlaceOrder from "../Screens/User/RestroMng/RestroPlaceOrder";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator lazy={true} tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="DashBoard" component={DashBoardScreen} />
      <Tab.Screen name="MenuPage" component={MenuPage} />
      <Tab.Screen name="HowItWorks" component={HowItWorks} />
      <Tab.Screen name="Features" component={Features} />
      <Tab.Screen name="BusinessPageListing" component={BusinessPageListing} />
      <Tab.Screen name="BusinessPageDetails" component={BusinessPageDetails} />
      <Tab.Screen name="ReviewRating" component={ReviewRating} />
      <Tab.Screen name="CategorySearch" component={CategorySearch} />
      <Tab.Screen
        name="SubCategorySearchView"
        component={SubCategorySearchView}
      />
      <Tab.Screen name="EventListings" component={EventListing} />
      <Tab.Screen name="JobListing" component={JobListing} />
      <Tab.Screen name="JobDetail" component={JobDetail} />
      <Tab.Screen name="Pricing" component={Pricing} />
      <Tab.Screen name="NewsFeed" component={NewsFeed} />
      <Tab.Screen name="ApplyJob" component={ApplyJob} />
      <Tab.Screen name="RestroBooking" component={RestroBooking} />
      <Tab.Screen
        name="ConfirmReservation"
        component={ConfirmReservationView}
      />
      <Tab.Screen name="OrderHistory" component={OrderHistoryView} />
      <Tab.Screen name="RestroMenu" component={RestroMenu} />
      <Tab.Screen name="MarketplaceScreen" component={MarketplaceScreen} />
      <Tab.Screen name="MarketplaceDetail" component={MarketplaceDetail} />
      <Tab.Screen name="RestroItemDetail" component={RestroItemDetail} />
      <Tab.Screen name="RestroCheckout" component={RestroCheckout} />
      <Tab.Screen name="ShoppingCart" component={ShoppingCart} />
      <Tab.Screen name="CheckOut" component={CheckOut} />
    </Tab.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"HomeDashboard"}
    >
      <Stack.Screen name="HomeDashboard" component={TabNavigation} />
      <Stack.Screen name="MenuPage" component={TabNavigation} />
      <Stack.Screen name="BusinessPageListing" component={TabNavigation} />
      <Stack.Screen name="BusinessPageDetails" component={TabNavigation} />
      <Stack.Screen name="ReviewRating" component={TabNavigation} />
      <Stack.Screen name="ShopList" component={TabNavigation} />
      <Stack.Screen name="CategorySearch" component={TabNavigation} />
      <Stack.Screen name="SubCategorySearchView" component={TabNavigation} />
      <Stack.Screen name="EventListings" component={TabNavigation} />
      <Stack.Screen name="JobListing" component={TabNavigation} />
      <Stack.Screen name="JobDetail" component={TabNavigation} />
      <Stack.Screen name="Pricing" component={TabNavigation} />
      <Stack.Screen name="NewsFeed" component={TabNavigation} />
      <Stack.Screen name="NeweFeedDetails" component={NeweFeedDetails} />
      <Stack.Screen name="ApplyJob" component={TabNavigation} />
      <Stack.Screen name="RestroBooking" component={TabNavigation} />
      <Stack.Screen name="ConfirmReservation" component={TabNavigation} />
      <Stack.Screen name="OrderHistory" component={TabNavigation} />
      <Stack.Screen name="RestroMenu" component={TabNavigation} />
      <Stack.Screen name="MarketplaceScreen" component={TabNavigation} />
      <Stack.Screen name="MarketplaceDetail" component={TabNavigation} />
      <Stack.Screen name="RestroItemDetail" component={RestroItemDetail} />
      <Stack.Screen name="RestroCheckout" component={RestroCheckout} />
      <Stack.Screen name="ShoppingCart" component={TabNavigation} />
      <Stack.Screen name="CheckOut" component={TabNavigation} />
      <Stack.Screen name="AddNewLocation" component={AddNewLocation} />
      <Stack.Screen name="RestroPlaceOrder" component={RestroPlaceOrder} />

      {/* ===========Login Screens======= */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="BusinessSignUp" component={BusinessSignUpScreen} />
      <Stack.Screen name="UserVerify" component={UserVerifyScreen} />
      <Stack.Screen
        name="BusinessUserVerify"
        component={BusinessUserVerifyScreen}
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen
        name="ForgotPasswordField"
        component={ForgotPasswordFieldScreen}
      />
    </Stack.Navigator>
  );
}

function AuthLoading({ navigation }) {
  const [userData, setUserData] = useContext(UserContext);
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );
  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        getLoginType();
        const userToken = data.token;
        try {
          await AsyncStorage.setItem("userToken", userToken);
          await AsyncStorage.setItem("userData", JSON.stringify(data.data));
        } catch (error) {
          console.log(error.message);
        }
        dispatch({ type: "LOGIN", id: "userName", token: userToken });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("userData");
          await AsyncStorage.removeItem("userToken");
          await AsyncStorage.removeItem("fcmToken");
          setUserData({});
        } catch (error) {
          console.log(error.message);
        }
        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {},
    }),
    []
  );
  React.useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (error) {
        console.log(error.message);
      }
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 2000);
  }, []);
  if (loginState.isLoading) {
    return (
      <>
        <StatusBar
          translucent={true}
          backgroundColor={"transparent"}
          barStyle="dark-content"
        />
        <View style={Styles.container}>
          <Image
            resizeMode={"contain"}
            style={Styles.spalshLogoImg}
            source={Images.LOGO}
          />
          <View>
            <Loader type={"small"} />
            {/* <Text style={Styles.splashText}>Loading...</Text> */}
          </View>
        </View>
      </>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="App" component={AppStack} />
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}
const Route = () => {
  const [userData, setUserData] = useContext(UserContext);
  useLayoutEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    let userToken = await AsyncStorage.getItem("userToken");
    if (userToken === null) {
      const { data } = await apiCall("GET", ENDPOINTS.GENERATE_TOKEN);
      if (data.status === 200) {
        await setDefaultHeader("token", data.token);
      }
    } else {
      const getUserData = JSON?.parse(await AsyncStorage.getItem("userData"));
      setUserData({ ...getUserData });
      setDefaultHeader("token", userToken);
    }
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthLoading" component={AuthLoading} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Route;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  spalshLogoImg: {
    width: Constants.windowWidth / 1.5,
  },
  splashText: {
    fontSize: FONT_SIZE.large,
    color: COLORS.LIGHT_YELLOW,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});
