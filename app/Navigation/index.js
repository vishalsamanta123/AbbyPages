import React, { useEffect, useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

//------------------------Styles-------------------//
import { Image, StatusBar, View, StyleSheet } from "react-native";
import { customDrawerContents, BusinessDrawerContents } from "./CustomDrawer";
import { Images } from "../Utils/images";

//----------------------Functionality-------------//
import AsyncStorage from "@react-native-community/async-storage";
import { apiCall, setDefaultHeader } from "../Utils/httpClient";
import ENDPOINTS from "../Utils/apiEndPoints";
import { UserContext, AuthContext } from "../Utils/UserContext";

//--------------------------------------ScreensNavigation-------------------------------------------//
//1 ------------->Authentication and Common<------------------//
import HomeScreen from "../Screens/Authentication/Home";
import LoginScreen from "../Screens/Authentication/Login";
import SignUpScreen from "../Screens/Authentication/SignUp";
import BusinessSignUpScreen from "../Screens/Authentication/BusinessSignUp";
import UserVerifyScreen from "../Screens/Authentication/UserVerify";
import BusinessUserVerifyScreen from "../Screens/Authentication/BusinessUserVerify";
import ForgotPasswordScreen from "../Screens/Authentication/ForgotPassword";
import ForgotPasswordFieldScreen from "../Screens/Authentication/ForgotPasswordField";
import AddEmailScreen from "../Screens/AddEmail";
//-----------------Authentication and Common End------------------//

//2------------------->BusinessScreens<---------------//
//2.1------------------->BusinessScreens Register or Edit<---------------//
import GetStartedScreen from "../Screens/Business/GetStarted";
import GoalsScreen from "../Screens/Business/Goals";
import GoalPreviewScreen from "../Screens/Business/GoalPreview";
import AddTextScreen from "../Screens/Business/AddText";
import AddTextPreviewScreen from "../Screens/Business/AddTextPreview";
import AddKeybordScreen from "../Screens/Business/AddKeybord";
import BusinessLocationScreen from "../Screens/Business/BusinessLocation";
import BudgetsScreen from "../Screens/Business/Budgets";
import ConfirmScreen from "../Screens/Business/Confirm";
//2.1------------BusinessScreens Register or Edit End------------------//

//2.2------------------->BusinessScreens Drawer and Others<-------------//
import BusinessHomeScreen from "../Screens/Business/BusinessHome";
import BasicInformationScreen from "../Screens/Business/BasicInformation";
import BusinessProfileScreen from "../Screens/Business/BusinessProfile";
import BussinessInfoScreen from "../Screens/Business/BussinessInfo";
import BusinessChangePasswordScreen from "../Screens/Business/BusinessChangePassword";
import OpeningHoursScreen from "../Screens/Business/OpeningHours";
import PhotosVideoScreen from "../Screens/Business/PhotosVideo";
import AddEditBusinessCategoryScreen from "../Screens/Business/AddEditBusinessCategory";
//2.2-------------------BusinessScreens Drawer and Others End-------------//

//2.3------------------->BusinessScreens RestaurantScreens<-------------//
import RestaurantManagementScreen from "../Screens/Business/RestaurantManagement";
import TableManagementScreen from "../Screens/Business/TableManagement";
import MyRestaurantItemScreen from "../Screens/Business/MyRestaurantItem";
import AddTableScreen from "../Screens/Business/AddTable";
import AddCategoryScreen from "../Screens/Business/AddCategory";
import AddItemScreen from "../Screens/Business/AddItem";
//2.3-------------------BusinessScreens RestaurantScreens End-------------//

//2.4------------------->BusinessScreens JobScreen<-------------//
import JobManagementListScreen from "../Screens/Business/JobManagementList";
import AddJobsScreen from "../Screens/Business/AddJobs";
import EditJob from "../Screens/Business/EditJob";
import AppliedJobScreen from "../Screens/Business/AppliedJob";
import AppliedJobDetailsScreen from "../Screens/Business/OrderDetail/AppliedJobDetails";
//2.4-------------------BusinessScreens JobScreen End-------------//

//2.5------------------->BusinessScreens ProductScreen<-------------//
import MyProductListScreen from "../Screens/Business/MyProductList";
import AddBusinessProductScreen from "../Screens/Business/AddBusinessProduct";
import BusinessProductDetailsScreen from "../Screens/Business/BusinessProductDetails";
//2.5-------------------BusinessScreens ProductScreen End-------------//

//2.6------------------->BusinessScreens EventScreen<-------------//
import EventManagement from "../Screens/Business/EventManagement";
import CreateEventScreen from "../Screens/CreateEvent";
import EventViewScreen from "../Screens/Business/EventView";
//2.6-------------------BusinessScreens EventScreen End-------------//

//2.7------------------->BusinessScreens Orders<-------------//
import BusinessOrderHistoryScreen from "../Screens/Business/BusinessOrderHistory";
import FoodOrderDetailsScreen from "../Screens/Business/OrderDetail/FoodOrderDetails";
import TableBookingDetailsScreen from "../Screens/Business/OrderDetail/TableBookingDetails";
import OutSideBookingOrderDetailsScreen from "../Screens/Business/OrderDetail/OutSideBookingOrderDetails";
import ServiceOrderDetailsScreen from "../Screens/Business/OrderDetail/ServiceOrderDetails";
import ShoppingOrderDetailsScreen from "../Screens/Business/OrderDetail/ShoppingOrderDetails";
//2.7-------------------BusinessScreens Orders End-------------//
//2-------------------BusinessScreens End-------------//

//3------------------->UserScreens<----------------//
//3.1------------------>UserScreens RestaurantScreens<----------------//
import RestaurantDetailsScreen from "../Screens/RestaurantDetails";
import RestauranrtBookingScreen from "../Screens/RestauranrtBooking";
import ConfirmReservationScreen from "../Screens/ConfirmReservation";
import ShowMenuScreen from "../Screens/RestroMenu/ShowMenu";
import AddToCartScreen from "../Screens/RestroMenu/AddToCart";
import RestroCheckoutScreen from "../Screens/RestroMenu/RestroCheckout";
import CheckoutDetailScreen from "../Screens/RestroMenu/CheckoutDetail";
import PlaceOrderScreen from "../Screens/RestroMenu/PlaceOrder";
//3.1--------------UserScreens RestaurantScreens End------------------//

//3.2------------------>UserScreens JobScreens<----------------//
import JobDetailsScreen from "../Screens/JobDetails";
import ApplyJobScreen from "../Screens/ApplyJob";
//3.2--------------UserScreens JobScreens End------------------//

//3.3------------------>UserScreens ServicesScreens<----------------//
import ServiceProviderDetails from "../Screens/ServiceProviderDetails";
import StepOneScreen from "../Screens/StepOne";
import StepSecondScreen from "../Screens/StepSecond";
import StepThirdScreen from "../Screens/StepThird";
import StepFifthScreen from "../Screens/StepFifth";
import StepSevenScreen from "../Screens/StepSeven";
import StepFourthScreen from "../Screens/StepFourth";
import StepSixScreen from "../Screens/StepSix";
import StepEightScreen from "../Screens/StepEight";
//--------------UserScreens ServicesScreens End------------------//

//3.4------------------>UserScreens EventScreens<----------------//
import EventDetailsScreen from "../Screens/EventDetails";
//3.4--------------UserScreens EventScreens End------------------//

//3.5------------------>UserScreens ShopScreens<----------------//
import ShopDetailScreen from "../Screens/ShopDetail";
import ProductListingScreen from "../Screens/ShoppingMenu/ProductListing";
import ProductDetailsScreen from "../Screens/ShoppingMenu/ProductDetails";
import ShoppingCartScreen from "../Screens/ShoppingMenu/ShoppingCart";
import CheckOutScreen from "../Screens/ShoppingMenu/CheckOut";
import ConfirmOrderScreen from "../Screens/ShoppingMenu/ConfirmOrder";
//3.5--------------UserScreens ShopScreens End------------------//

//3.6------------------>UserScreens Drawer and others<----------------//
import DashBoardScreen from "../Screens/DashBoard";
import ListingsScreen from "../Screens/Listings";
import JobListScreen from "../Screens/JobList";
import ServiceProviderListingScreen from "../Screens/ServiceProviderListing";
import EventListingsScreen from "../Screens/EventListings";
import ShopListScreen from "../Screens/ShopList";
import ListingMapScreen from "../Screens/ListingMap";
import ProfileSettingsScreen from "../Screens/ProfileSettings";
import AddLocationScreen from "../Screens/AddLocation";
import OrderHistoryScreen from "../Screens/OrderHistory";
import OrderDetailScreenBackEnd from "../Screens/OrderDetail";
import UserEventsListScreen from "../Screens/UserEventsList";
import FollowingListScreen from "../Screens/FollowingList";
import FollowerListScreen from "../Screens/FollowerList";
import ReviewsScreen from "../Screens/Reviews";
import BookmarkScreen from "../Screens/Bookmark";
import CollectionsScreen from "../Screens/Collections";
import NotificationsScreen from "../Screens/Notifications";
import RecentActivityScreen from "../Screens/RecentActivity";
import FriendsScreen from "../Screens/Friends";
import InviteFriendsScreen from "../Screens/InviteFriends";
import UpdateProfileScreen from "../Screens/UpdateProfile";
import ChangePasswordScreen from "../Screens/ChangePassword";
import NotificationSettingsScreen from "../Screens/NotificationSettings";
import LocationsScreen from "../Screens/Locations";
import UserProfileScreen from "../Screens/UserProfile";
//3.6------------------>UserScreens Drawer and others End<----------------//
//3----------------UserScreens End------------------//

import UpdatePagesScreen from "../Screens/Business/UpdatePages";
import RestaurantMenuScreen from "../Screens/RestaurantMenu";
import AddcartcashbackScreen from "../Screens/Addcartcashback";
import AddPhotosScreen from "../Screens/AddPhotos";
import BookmarkMapScreen from "../Screens/BookmarkMap";
import CashBackScreen from "../Screens/CashBack";
import ManageFriendInviteScreen from "../Screens/ManageFriendInvite";

const BusinessDrawer = createDrawerNavigator();
const customDrawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Auth = createStackNavigator();
const Business = createStackNavigator();
// const Tab = createBottomTabNavigator();
// function TabNavigation() {
//     return (
//         <Tab.Navigator
//             lazy={true}
//             tabBar={props => <MyTabBar {...props} />}>
//             <Tab.Screen name="Listings" component={ListingsScreen} />
//             <Tab.Screen name="BusinessHome" component={BusinessHomeScreen} />
//             <Tab.Screen name="OpeningHours" component={OpeningHoursScreen} />
//             <Tab.Screen name="UserProfile" component={UserProfileScreen} />
//             <Tab.Screen name="OrderHistory" component={OrderHistoryScreen} />
//         </Tab.Navigator>
//     )
// }
function CustomBusinessNavigation() {
  return (
    <BusinessDrawer.Navigator
      drawerContent={(props) => BusinessDrawerContents(props)}
      drawerContentOptions={{ activeBackgroundColor: "#fff" }}
    >
      <BusinessDrawer.Screen
        name="BusinessHome"
        component={BusinessHomeScreen}
      />
      <BusinessDrawer.Screen
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
      <BusinessDrawer.Screen name="EventView" component={EventViewScreen} />
    </BusinessDrawer.Navigator>
  );
}

function CustomDrawerNavigation() {
  return (
    <customDrawer.Navigator
      drawerContent={(props) => customDrawerContents(props)}
      drawerContentOptions={{ activeBackgroundColor: "#fff" }}
    >
      <customDrawer.Screen name="DashBoard" component={DashBoardScreen} />
      <customDrawer.Screen
        name="ProfileSettings"
        component={ProfileSettingsScreen}
      />
      <customDrawer.Screen
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
      <customDrawer.Screen name="EventManagement" component={EventManagement} />
      <customDrawer.Screen name="Friends" component={FriendsScreen} />
    </customDrawer.Navigator>
  );
}

function AuthStack() {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="Home" component={HomeScreen} />
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
      {/* { business} */}
      <Auth.Screen name="GetStarted" component={GetStartedScreen} />
      <Business.Screen name="Goals" component={GoalsScreen} />
      <Business.Screen name="AddKeybord" component={AddKeybordScreen} />
      <Business.Screen name="AddText" component={AddTextScreen} />
      <Business.Screen
        name="BusinessLocation"
        component={BusinessLocationScreen}
      />
      <Business.Screen name="Budgets" component={BudgetsScreen} />
    </Auth.Navigator>
  );
}

function BusinessStack() {
  return (
    <Business.Navigator
      initialRouteName={"BusinessHome"}
      screenOptions={{ headerShown: false }}
    >
      <Business.Screen
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
      <Business.Screen name="AddTable" component={AddTableScreen} />
      <Business.Screen
        name="RestaurantManagement"
        component={RestaurantManagementScreen}
      />
      {/* <Business.Screen name="UpdatePages" component={UpdatePagesScreen} /> */}

      <Business.Screen name="Goals" component={GoalsScreen} />
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
      <Business.Screen name="CreateEvent" component={CreateEventScreen} />
    </Business.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"DashBoard"}
    >
      {/* <Stack.Screen name="BusinessOrderHistory" component={BusinessOrderHistoryScreen} /> */}
      {/* <Stack.Screen name="OfferScreen" component={OfferScreen} /> */}
      <Stack.Screen name="DashBoard" component={CustomDrawerNavigation} />
      <Stack.Screen name="ShopList" component={ShopListScreen} />
      <Stack.Screen name="ShopDetail" component={ShopDetailScreen} />
      <Stack.Screen
        name="OrderDetailBackEnd"
        component={OrderDetailScreenBackEnd}
      />
      <Stack.Screen name="Listings" component={ListingsScreen} />
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
      <Stack.Screen name="UserEventsList" component={UserEventsListScreen} />
      {/* <Stack.Screen
        name="ManageFriendInvite"
        component={ManageFriendInviteScreen}
      /> */}
      <Stack.Screen
        name="BusinessUserVerify"
        component={BusinessUserVerifyScreen}
      />
      <Stack.Screen
        name="NotificationSettings"
        component={NotificationSettingsScreen}
      />
      <Stack.Screen name="AddJobs" component={AddJobsScreen} />
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
      <Stack.Screen name="StepOne" component={StepOneScreen} />
      <Stack.Screen name="StepSecond" component={StepSecondScreen} />
      <Stack.Screen name="AddEmail" component={AddEmailScreen} />
      <Stack.Screen name="AddLocation" component={AddLocationScreen} />
      <Stack.Screen name="StepThird" component={StepThirdScreen} />
      <Stack.Screen name="StepFourth" component={StepFourthScreen} />
      {/* not in use */}
      <Stack.Screen name="StepSix" component={StepSixScreen} />
      {/* not in use */}
      {/* <Stack.Screen name="Addcartcashback" component={AddcartcashbackScreen} /> */}
      <Stack.Screen name="StepFifth" component={StepFifthScreen} />
      <Stack.Screen
        name="ConfirmReservation"
        component={ConfirmReservationScreen}
      />
      <Stack.Screen name="StepSeven" component={StepSevenScreen} />
      <Stack.Screen name="StepEight" component={StepEightScreen} />
      <Stack.Screen
        name="ServiceProviderDetails"
        component={ServiceProviderDetails}
      />
      <Stack.Screen
        name="ServiceProviderListing"
        component={ServiceProviderListingScreen}
      />
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
      <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
      />
      <Stack.Screen name="EventListings" component={EventListingsScreen} />
      <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
      {/* <Stack.Screen name="RestaurantMenu" component={RestaurantMenuScreen} /> */}
      <Stack.Screen name="ListingMap" component={ListingMapScreen} />
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
      <Stack.Screen name="Budgets" component={BudgetsScreen} />
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
          source={Images.SPLASH_LOGO}
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
  }
});
