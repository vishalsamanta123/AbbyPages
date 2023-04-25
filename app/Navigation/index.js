import React, { useEffect, useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StatusBar, View, StyleSheet } from "react-native";
import { Images } from "../Utils/images";
import MyCustomDrawer from "./MyCustomDrawer";
import MyTabBar from "./MyTabBar";
import AsyncStorage from "@react-native-community/async-storage";
import { apiCall, setDefaultHeader } from "../Utils/httpClient";
import ENDPOINTS from "../Utils/apiEndPoints";
import { UserContext, AuthContext } from "../Utils/UserContext";

import HomeScreen from "../Screens/Authentication/Home";
import LoginScreen from "../Screens/Authentication/Login";
import SignUpScreen from "../Screens/Authentication/SignUp";
import BusinessSignUpScreen from "../Screens/Authentication/BusinessSignUp";
import UserVerifyScreen from "../Screens/Authentication/UserVerify";
import BusinessUserVerifyScreen from "../Screens/Authentication/BusinessUserVerify";
import ForgotPasswordScreen from "../Screens/Authentication/ForgotPassword";
import ForgotPasswordFieldScreen from "../Screens/Authentication/ForgotPasswordField";
import BusinessPageDetails from "../Screens/User/BusinessPageMng/BusinessPageDetails";
import ShopDetailScreen from "../Screens/ShopDetail";
import DashBoardScreen from "../Screens/User/DashBoard";
import BusinessPageListing from "../Screens/User/BusinessPageMng/BusinessPageListing";
import ShopListScreen from "../Screens/ShopList";
import ProfileSetting from "../Screens/ProfileSetting";
import MorePageScreen from "../Screens/User/OtherScreens/MoreManagement/MorePage";
import ReviewRating from "../Screens/User/BusinessPageMng/ReviewRating";
import CategorySearch from "../Screens/User/OtherScreens/SearchMng/CategorySearch";
import SubCategorySearchView from "../Screens/User/OtherScreens/SearchMng/CategorySearch/components/SubCategories";
import EventListing from "../Screens/User/EventMng/EventListing";
import JobListing from "../Screens/User/JobMng/JobListing";

const BusinessDrawer = createDrawerNavigator();
const customDrawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Auth = createStackNavigator();
const Business = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="DashBoard"
      lazy={true}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="DashBoard" component={CustomDrawerNavigation} />
      <Tab.Screen name="MorePage" component={MorePageScreen} />
    </Tab.Navigator>
  );
}

function CustomBusinessNavigation() {
  return (
    <BusinessDrawer.Navigator
      drawerContent={(props) => <MyCustomDrawer {...props} />}
      drawerContentOptions={{ activeBackgroundColor: "#fff" }}
    >
      {/* <BusinessDrawer.Screen
        name="BusinessHome"
        component={BusinessHomeScreen}
      /> */}
      {/* <BusinessDrawer.Screen
        name="BusinessProfile"
        component={BusinessProfileScreen}
      />
      <BusinessDrawer.Screen
        name="BussinessInfo"
        component={BussinessInfoScreen}
      />
      <BusinessDrawer.Screen
        name="OpeningHours"
        component={OpeningHoursScreen}
      />
      <BusinessDrawer.Screen
        name="JobManagementList"
        component={JobManagementListScreen}
      />
      <BusinessDrawer.Screen name="AddJobs" component={AddJobsScreen} />
      <BusinessDrawer.Screen name="EditJobs" component={EditJob} />
      <BusinessDrawer.Screen name="AppliedJob" component={AppliedJobScreen} />
      <BusinessDrawer.Screen
        name="RestaurantManagement"
        component={RestaurantManagementScreen}
      />
      <BusinessDrawer.Screen
        name="BusinessOrderHistory"
        component={BusinessOrderHistoryScreen}
      />
      <BusinessDrawer.Screen
        name="MyProductList"
        component={MyProductListScreen}
      />
      <BusinessDrawer.Screen
        name="EventManagement"
        component={EventManagement}
      />
      <BusinessDrawer.Screen name="EventView" component={EventViewScreen} /> */}
    </BusinessDrawer.Navigator>
  );
}

function CustomDrawerNavigation() {
  return (
    <customDrawer.Navigator
      drawerContent={(props) => <MyCustomDrawer {...props} />}
      drawerContentOptions={{ activeBackgroundColor: "#fff" }}
    >
      <customDrawer.Screen name="DashBoard" component={DashBoardScreen} />
      <customDrawer.Screen
        name="ProfileSettings"
        component={ProfileSetting}
      />

      {/* <customDrawer.Screen
        name="FollowingList"
        component={FollowingListScreen}
      />
      <customDrawer.Screen name="FollowerList" component={FollowerListScreen} />
      <customDrawer.Screen name="CreateEvent" component={CreateEventScreen} />
      <customDrawer.Screen name="OrderHistory" component={OrderHistoryScreen} />
      <customDrawer.Screen name="Reviews" component={ReviewsScreen} />
      <customDrawer.Screen name="Bookmark" component={BookmarkScreen} />
      <customDrawer.Screen name="Collections" component={CollectionsScreen} />
      <customDrawer.Screen
        name="UserEventsList"
        component={UserEventsListScreen}
      />
      <customDrawer.Screen
        name="Notifications"
        component={NotificationsScreen}
      />
      <customDrawer.Screen
        name="RecentActivity"
        component={RecentActivityScreen}
      />
      <customDrawer.Screen name="EventView" component={EventViewScreen} />
      <customDrawer.Screen name="EventManagement" component={EventManagement} /> */}
      {/* <customDrawer.Screen name="Friends" component={FriendsScreen} /> */}
    </customDrawer.Navigator>
  );
}

function AuthStack() {
  return (
    <Auth.Navigator
      initialRouteName="HomeDashboard"
      screenOptions={{ headerShown: false }}
    >
      <Auth.Screen name="HomeDashboard" component={TabNavigation} />
      <Auth.Screen name="BusinessPageListing" component={BusinessPageListing} />
      <Auth.Screen name="BusinessPageDetails" component={BusinessPageDetails} />
      <Auth.Screen name="MorePage" component={MorePageScreen} />
      <Auth.Screen name="ReviewRating" component={ReviewRating} />
      <Auth.Screen name="Home" component={HomeScreen} />
      <Auth.Screen name="ShopList" component={ShopListScreen} />
      <Auth.Screen name="ShopDetail" component={ShopDetailScreen} />
      <Auth.Screen name="CategorySearch" component={CategorySearch} />
      <Auth.Screen name="JobListing" component={JobListing} />
      <Auth.Screen
        name="SubCategorySearchView"
        component={SubCategorySearchView}
      />
      <Auth.Screen name="EventListings" component={EventListing} />

      {/* --------Login Screens----- */}
      <Auth.Screen name="Login" component={LoginScreen} />
      <Auth.Screen name="SignUp" component={SignUpScreen} />
      <Auth.Screen name="BusinessSignUp" component={BusinessSignUpScreen} />
      <Auth.Screen name="UserVerify" component={UserVerifyScreen} />
      <Auth.Screen
        name="BusinessUserVerify"
        component={BusinessUserVerifyScreen}
      />
      <Auth.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Auth.Screen
        name="ForgotPasswordField"
        component={ForgotPasswordFieldScreen}
      />
    </Auth.Navigator>
  );
}

function BusinessStack() {
  return (
    <Business.Navigator
      initialRouteName={"BusinessHome"}
      screenOptions={{ headerShown: false }}
    >
      {/* <Business.Screen
        name="BusinessHome"
        component={CustomBusinessNavigation}
      />
      <Business.Screen
        name="MyRestaurantItem"
        component={MyRestaurantItemScreen}
      />
      <Business.Screen
        name="AddBusinessProduct"
        component={AddBusinessProductScreen}
      />
      <Business.Screen
        name="BusinessProductDetails"
        component={BusinessProductDetailsScreen}
      />
      <Business.Screen name="GoalPreview" component={GoalPreviewScreen} />
      <Business.Screen name="AddCategory" component={AddCategoryScreen} />
      <Business.Screen name="AddItem" component={AddItemScreen} />
      <Business.Screen name="AddJobs" component={AddJobsScreen} />
      <Business.Screen name="EditJobs" component={EditJob} />
      <Business.Screen name="AddTextPreview" component={AddTextPreviewScreen} />
      <Business.Screen name="AppliedJob" component={AppliedJobScreen} />
      <Business.Screen
        name="AppliedJobDetails"
        component={AppliedJobDetailsScreen}
      />
      <Business.Screen
        name="BasicInformation"
        component={BasicInformationScreen}
      />
      <Business.Screen
        name="BusinessOrderHistory"
        component={BusinessOrderHistoryScreen}
      />
      <Business.Screen
        name="BusinessProfile"
        component={BusinessProfileScreen}
      />
      <Business.Screen name="BussinessInfo" component={BussinessInfoScreen} />
      <Business.Screen name="Confirm" component={ConfirmScreen} />
      <Business.Screen
        name="JobManagementList"
        component={JobManagementListScreen}
      />
      <Business.Screen name="OpeningHours" component={OpeningHoursScreen} />
      <Business.Screen name="PhotosVideo" component={PhotosVideoScreen} />
      <Business.Screen
        name="TableManagement"
        component={TableManagementScreen}
      />
      <Business.Screen name="AddTable" component={AddTableScreen} /> */}
      {/* <Business.Screen
        name="RestaurantManagement"
        component={RestaurantManagementScreen}
      /> */}
      {/* <Business.Screen name="UpdatePages" component={UpdatePagesScreen} /> */}

      {/* <Business.Screen name="Goals" component={GoalsScreen} />
      <Business.Screen name="AddKeybord" component={AddKeybordScreen} />
      <Business.Screen name="AddText" component={AddTextScreen} />
      <Business.Screen
        name="BusinessLocation"
        component={BusinessLocationScreen}
      />
      <Business.Screen name="Budgets" component={BudgetsScreen} />
      <Business.Screen
        name="BusinessChangePassword"
        component={BusinessChangePasswordScreen}
      />

      <Business.Screen
        name="FoodOrderDetails"
        component={FoodOrderDetailsScreen}
      />
      <Business.Screen
        name="TableBookingDetails"
        component={TableBookingDetailsScreen}
      />
      <Business.Screen
        name="ServiceOrderDetails"
        component={ServiceOrderDetailsScreen}
      />
      <Business.Screen
        name="OutSideBookingOrderDetails"
        component={OutSideBookingOrderDetailsScreen}
      />
      <Business.Screen
        name="ShoppingOrderDetails"
        component={ShoppingOrderDetailsScreen}
      />

      <Business.Screen
        name="AddEditBusinessCategory"
        component={AddEditBusinessCategoryScreen}
      />
      <Business.Screen name="EventManagement" component={EventManagement} />
      <Business.Screen name="EventView" component={EventViewScreen} />
      <Business.Screen name="CreateEvent" component={CreateEventScreen} /> */}
    </Business.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"HomeDashboard"}
    >
      <Stack.Screen name="HomeDashboard" component={TabNavigation} />
      <Stack.Screen name="MorePage" component={MorePageScreen} />
      <Stack.Screen
        name="BusinessPageListing"
        component={BusinessPageListing}
      />
      <Stack.Screen
        name="BusinessPageDetails"
        component={BusinessPageDetails}
      />
      <Stack.Screen name="ReviewRating" component={ReviewRating} />
      <Stack.Screen name="ShopList" component={ShopListScreen} />
      <Stack.Screen name="ShopDetail" component={ShopDetailScreen} />
      <Stack.Screen name="CategorySearch" component={CategorySearch} />
      <Stack.Screen
        name="SubCategorySearchView"
        component={SubCategorySearchView}
      />
      <Stack.Screen name="EventListings" component={EventListing} />
      <Stack.Screen name="JobListing" component={JobListing} />
      {/* <Stack.Screen name="OfferScreen" component={OfferScreen} /> */}
      {/* <Stack.Screen name="DashBoard" component={CustomDrawerNavigation} /> */}
      {/* <Stack.Screen
        name="OrderDetailBackEnd"
        component={OrderDetailScreenBackEnd}
      />
      <Stack.Screen name="ProfileSettings" component={CustomDrawerNavigation} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="CheckoutDetail" component={CheckoutDetailScreen} />
      <Stack.Screen name="ApplyJob" component={ApplyJobScreen} />
      <Stack.Screen name="PlaceOrder" component={PlaceOrderScreen} />
      <Stack.Screen name="ShowMenu" component={ShowMenuScreen} />
      <Stack.Screen name="AddToCart" component={AddToCartScreen} />
      <Stack.Screen name="RestroCheckout" component={RestroCheckoutScreen} />
      <Stack.Screen name="Locations" component={LocationsScreen} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
      <Stack.Screen name="InviteFriends" component={InviteFriendsScreen} />
      <Stack.Screen name="EventManagement" component={EventManagement} />
      <Stack.Screen name="UserEventsList" component={UserEventsListScreen} /> */}
      {/* <Stack.Screen
        name="ManageFriendInvite"
        component={ManageFriendInviteScreen}
      /> */}
      {/* <Stack.Screen
        name="BusinessUserVerify"
        component={BusinessUserVerifyScreen}
      />
      <Stack.Screen
        name="NotificationSettings"
        component={NotificationSettingsScreen}
      /> */}
      {/* <Stack.Screen name="AddJobs" component={AddJobsScreen} /> */}
      {/* <Stack.Screen name="Friends" component={FriendsScreen} /> */}
      {/* <Stack.Screen name="Notifications" component={NotificationsScreen} /> */}
      {/* <Stack.Screen name="Reviews" component={ReviewsScreen} /> */}
      {/* <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} /> */}
      {/* <Stack.Screen name="CreateEvent" component={CreateEventScreen} /> */}
      {/* <Stack.Screen name="FollowerList" component={FollowerListScreen} /> */}
      {/* <Stack.Screen name="FollowingList" component={FollowingListScreen} /> */}
      {/* <Stack.Screen name="Bookmark" component={BookmarkScreen} /> */}
      {/* <Stack.Screen name="Collections" component={CollectionsScreen} /> */}
      {/* <Stack.Screen name="BookmarkMap" component={BookmarkMapScreen} /> */}
      {/* <Stack.Screen name="CashBack" component={CashBackScreen} /> */}
      {/* <Stack.Screen name="AddPhotos" component={AddPhotosScreen} /> */}
      {/* <Stack.Screen name="StepOne" component={StepOneScreen} />
      <Stack.Screen name="StepSecond" component={StepSecondScreen} />
      <Stack.Screen name="AddEmail" component={AddEmailScreen} />
      <Stack.Screen name="AddLocation" component={AddLocationScreen} />
      <Stack.Screen name="StepThird" component={StepThirdScreen} />
      <Stack.Screen name="StepFourth" component={StepFourthScreen} /> */}
      {/* not in use */}
      {/* <Stack.Screen name="StepSix" component={StepSixScreen} /> */}
      {/* not in use */}
      {/* <Stack.Screen name="Addcartcashback" component={AddcartcashbackScreen} /> */}
      {/* <Stack.Screen name="StepFifth" component={StepFifthScreen} />
      <Stack.Screen
        name="ConfirmReservation"
        component={ConfirmReservationScreen}
      />
      <Stack.Screen name="StepSeven" component={StepSevenScreen} />
      <Stack.Screen name="StepEight" component={StepEightScreen} />
      <Stack.Screen
        name="RestauranrtBooking"
        component={RestauranrtBookingScreen}
      />
      <Stack.Screen name="ConfirmOrder" component={ConfirmOrderScreen} />
      <Stack.Screen name="CheckOut" component={CheckOutScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen} />
      <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
      <Stack.Screen name="JobList" component={JobListScreen} />
      <Stack.Screen name="ProductListing" component={ProductListingScreen} />
      <Stack.Screen name="EventListings" component={EventListingsScreen} />
      <Stack.Screen name="EventDetails" component={EventDetailsScreen} /> */}
      {/* <Stack.Screen name="RestaurantMenu" component={RestaurantMenuScreen} /> */}
      {/* <Stack.Screen name="ListingMap" component={ListingMapScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="BusinessSignUp" component={BusinessSignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen
        name="ForgotPasswordField"
        component={ForgotPasswordFieldScreen}
      />
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="Goals" component={GoalsScreen} />
      <Stack.Screen name="AddText" component={AddTextScreen} />
      <Stack.Screen name="AddKeybord" component={AddKeybordScreen} />
      <Stack.Screen name="AddTextPreview" component={AddTextPreviewScreen} />
      <Stack.Screen
        name="BusinessLocation"
        component={BusinessLocationScreen}
      />
      <Stack.Screen name="Budgets" component={BudgetsScreen} /> */}
    </Stack.Navigator>
  );
}

function AuthLoading({ navigation }) {
  const [loginType, setLoginType] = useState("");
  useEffect(() => {
    getLoginType();
  }, []);
  const getLoginType = async () => {
    const localuserdata = await AsyncStorage.getItem("localuserdata");
    if (localuserdata !== "") {
      setLoginType(JSON.parse(localuserdata).login_type);
    }
  };
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
          await AsyncStorage.setItem(
            "localuserdata",
            JSON.stringify(data.data)
          );
        } catch (error) {
          console.log(error.message);
        }
        dispatch({ type: "LOGIN", id: "userName", token: userToken });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("localuserdata");
          await AsyncStorage.removeItem("userToken");
          await AsyncStorage.removeItem("fcmToken");
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
      <View style={Styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor={"transparent"}
          barStyle="dark-content"
        />
        <Image
          resizeMode={"contain"}
          style={Styles.logoImg}
          source={Images.LOADER}
        />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      {loginState.userToken == null ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={AuthStack} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {loginType === 2 ? (
            <Stack.Screen name="Business" component={BusinessStack} />
          ) : (
            <Stack.Screen name="App" component={AppStack} />
          )}
        </Stack.Navigator>
      )}
    </AuthContext.Provider>
  );
}
function Route() {
  const [userData, setUserData] = useContext(UserContext);
  useEffect(() => {
    getToken();
  }, []);
  async function getToken() {
    let userToken = await AsyncStorage.getItem("userToken");
    if (userToken === null) {
      const { data } = await apiCall("GET", ENDPOINTS.GENERATE_TOKEN);
      if (data.status === 200) {
        await setDefaultHeader("token", data.token);
      }
    } else {
      const userToken = await AsyncStorage.getItem("userToken");
      setDefaultHeader("token", userToken);
    }
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthLoading" component={AuthLoading} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Route;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logoImg: {
    alignSelf: "center",
    width: "65%",
    height: "50%",
  },
});
