// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   Platform,
// } from "react-native";
// import { DrawerContentScrollView } from "@react-navigation/drawer";
// import AsyncStorage from "@react-native-community/async-storage";
// import { apiCall } from "../Utils/httpClient";
// import ENDPOINTS from "../Utils/apiEndPoints";
// import {
//   FONT_FAMILY_REGULAR,
//   WHITE_COLOR_CODE,
//   YELLOW_COLOR_CODE,
//   LIGHT_GREY_COLOR_CODE,
//   LINE_COMMON_COLOR_CODE,
//   FONT_FAMILY_LIGHT,
//   BLACK_COLOR_CODE,
// } from "../Utils/Constant";
// import { useFocusEffect } from "@react-navigation/native";
// import {
//   AuthContext,
//   UserContext,
//   CartContext,
//   ServiceProviderContext,
//   ServiceProviderContextQueAnsData,
//   ShoppingCartContext,
//   OrderCategorySelect,
//   AddItemCategory,
// } from "../Utils/UserContext";
// import QuestionModal from "../Components/Modal/questionModal";
// import { Images } from "../Utils/images";
// import { IconX, ICON_TYPE } from "../Components/Icons/Icon";

// const DesignDrawer = () => {
//   const [logoutVw, setLogoutVw] = useState(false);
//   const { signOut } = React.useContext(AuthContext);
//   const [profileData, setProfileData] = useState("");
//   const [userData, setUserData] = useState(UserContext);
//   const [cartData, setCartData] = useState(CartContext);
//   const [serviceProviderData, setServiceProviderData] = useState(
//     ServiceProviderContext
//   );
//   const [serviceProviderQueAnsData, setServiceProviderQueAnsData] = useState(
//     ServiceProviderContextQueAnsData
//   );
//   const [shoppingCartData, setShoppingCartData] = useState(ShoppingCartContext);
//   const [acctiveSelectedCatgory, setAcctiveSelectedCatgory] =
//     useState(OrderCategorySelect);
//   const [activeCategory, setactiveCategory] = useState(AddItemCategory);
//   const [logoBaseImgUrl, setLogoBaseImgUrl] = useState("");
//   useFocusEffect(
//     React.useCallback(() => {
//       getProfile();
//       return () => getProfile();
//     }, [])
//   );
//   const getProfile = async () => {
//     try {
//       const { data } = await apiCall("POST", ENDPOINTS.GET_USER_PROFILE);
//       if (data.status === 200) {
//         setProfileData(data.data);
//         setLogoBaseImgUrl(data.business_logo);
//       }
//     } catch (error) {
//       console.log("error: ", error);
//     }
//   };
//   const signOutFun = () => {
//     signOut();
//     setLogoutVw(false);
//     setAcctiveSelectedCatgory({
//       activeIndex: 0,
//       businsessType: 1,
//     });
//     setactiveCategory({
//       activeIndex: 0,
//       categoryId: 1,
//     });
//     setShoppingCartData([]);
//     setServiceProviderQueAnsData([]);
//     setUserData([]);
//     setCartData([]);
//     setServiceProviderData([]);
//     setProfileData("");
//   };
//   // const getLoginType = async () => {
//   //     const localuserdata = await AsyncStorage.getItem('localuserdata');
//   //     if (localuserdata !== '') {
//   //         setLoginType(JSON.parse(localuserdata).data.login_type);
//   //     };
//   // };
//   return (
//     <View style={styles.MainContainer}>
//       <View style={styles.ContainerView}>
//         <View style={styles.NameContainer}>
//           {profileData.login_type === 2 ? (
//             <Image
//               style={styles.UserImge}
//               source={{ uri: logoBaseImgUrl + profileData.logo }}
//             />
//           ) : (
//             <Image
//               style={styles.UserImge}
//               source={{ uri: profileData.profile_image }}
//             />
//           )}
//           <View style={styles.UserNameView}>
//             {profileData.login_type == 2 ? (
//               <Text
//                 numberOfLines={1}
//                 style={[styles.UserNameText, { width: 120 }]}
//               >
//                 {profileData.business_name}
//               </Text>
//             ) : (
//               <Text
//                 numberOfLines={1}
//                 style={[styles.UserNameText, { width: 120 }]}
//               >
//                 {profileData.first_name + profileData.last_name}
//               </Text>
//             )}
//             <Text style={[styles.UserAddress, { width: 140 }]}>
//               {profileData.hometown}
//             </Text>
//           </View>
//         </View>
//         {/* <TouchableOpacity onPress={() => setLogoutVw(true)}>
//           <Image source={Images.LOGOUT_IMG} />
//         </TouchableOpacity> */}
//       </View>
//     </View>
//   );
// };
// export function customDrawerContents(props) {
//   return (
//     <View>
//       <View style={{ height: "100%" }}>
//         <DesignDrawer />
//         <DrawerContentScrollView
//           contentContainerStyle={{
//             paddingTop: Platform.OS === "ios" ? 0 : 0,
//           }}
//           {...props}
//         >
//           <View style={styles.NavigationContain}>
//             <Text style={styles.NavigationText}>NAVIGATIONS</Text>
//           </View>
//           <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("DashBoard");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <IconX
//                 origin={ICON_TYPE.FONT_AWESOME5}
//                 name="home"
//                 color={BLACK_COLOR_CODE}
//               />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Home</Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("ProfileSettings");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <IconX
//                 origin={ICON_TYPE.FONT_AWESOME}
//                 name="user"
//                 color={BLACK_COLOR_CODE}
//               />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Profile</Text>
//             </View>
//           </TouchableOpacity>

//           {/* <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("FollowingList");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <Image source={Images.FOLLOWING_IMG} />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Following</Text>
//             </View>
//           </TouchableOpacity> */}
//           {/* <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("FollowerList");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <Image source={Images.FOLLOWER_IMG} />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Followers</Text>
//             </View>
//           </TouchableOpacity> */}
//           {/* <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("EventManagement");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <Image source={Images.EVENT_IMG} />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Events</Text>
//             </View>
//           </TouchableOpacity> */}
//           {/* <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("UserEventsList");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <Image source={Images.EVENT_IMG} />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>User Events</Text>
//             </View>
//           </TouchableOpacity> */}
//           {/* <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("OrderHistory");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <Image source={Images.ORDERLIST_IMG} />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Order History</Text>
//             </View>
//           </TouchableOpacity> */}
//           {/* <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("Reviews");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <Image style={{width:18,height:18}}
//               resizeMode={'contain'}
//               source={Images.STAR_IMG} />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Reviews</Text>
//             </View>
//           </TouchableOpacity> */}
//           {/* <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("Bookmark");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <Image source={Images.BOOKMARK_IMG} />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Bookmarks</Text>
//             </View>
//           </TouchableOpacity> */}
//           {/* <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("Collections");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <Image source={Images.COLLECTION_IMG} />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Collections</Text>
//             </View>
//           </TouchableOpacity> */}
//           {/* <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("Notifications");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <Image
//                 style={{ width: 20, height: 20 }}
//                 source={Images.NOTIFICATION_IMG}
//               />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Notifications</Text>
//             </View>
//           </TouchableOpacity> */}
//           {/* <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("RecentActivity");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <Image
//                 style={{ width: 20, height: 20 }}
//                 source={Images.RECENT_IMG}
//               />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Recent Activity</Text>
//             </View>
//           </TouchableOpacity> */}
//           {/* <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("Friends");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <Image source={Images.FOLLOWING_IMG} />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Friends</Text>
//             </View>
//           </TouchableOpacity> */}
//           {/* <TouchableOpacity style={styles.contactUsContainer}>
//             <View style={styles.ImgeView}>
//               <Image source={Images.BULB_IMG} />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Tips</Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.contactUsContainer}>
//             <View style={styles.ImgeView}>
//               <Image source={Images.CHECK_IN_IMG} />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Check-Ins</Text>
//             </View>
//           </TouchableOpacity> */}
//           <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => setLogoutVw(true)}
//           >
//             <View style={styles.ImgeView}>
//               <IconX
//                 origin={ICON_TYPE.FONT_AWESOME}
//                 name="power-off"
//                 color={BLACK_COLOR_CODE}
//               />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>LogOut</Text>
//             </View>
//           </TouchableOpacity>
//         </DrawerContentScrollView>
//       </View>
//       <QuestionModal
//         surringVisible={logoutVw}
//         message={"Are you sure you want to Logout"}
//         positiveResponse={() => signOutFun()}
//         negativeResponse={() => setLogoutVw(false)}
//       />
//     </View>
//   );
// }
// export function BusinessDrawerContents(props) {
//   return (
//     <View style={{}}>
//       <View style={{ height: "100%" }}>
//         <DesignDrawer />
//         <DrawerContentScrollView
//           contentContainerStyle={{
//             paddingTop: Platform.OS === "ios" ? 0 : 0,
//           }}
//           {...props}
//         >
//           <View style={styles.NavigationContain}>
//             <Text style={styles.NavigationText}>NAVIGATIONS</Text>
//           </View>
//           <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("BusinessHome");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <Image
//                 style={{ width: 25, height: 25 }}
//                 source={Images.DASHBOARDHOME_IMG}
//               />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Home</Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("BusinessProfile");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <Image
//                 style={{ width: 25, height: 25 }}
//                 source={Images.BUSINESS_PROFILE_IMG}
//               />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Business Profile</Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("BussinessInfo");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <Image
//                 style={{ width: 25, height: 25 }}
//                 source={Images.BUSINESS_INFO_IMG}
//               />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Business Info</Text>
//             </View>
//           </TouchableOpacity>
//           {/* <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("OpeningHours");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <Image
//                 style={{ width: 25, height: 25 }}
//                 source={Images.HOURS_IMG}
//               />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Add Opening Hours</Text>
//             </View>
//           </TouchableOpacity> */}
//           {/* <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("RestaurantManagement");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <Image
//                 style={{ width: 25, height: 25 }}
//                 source={Images.DIET_IMG}
//               />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Restuarant Management</Text>
//             </View>
//           </TouchableOpacity> */}
//           <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("JobManagementList");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <Image
//                 style={{ width: 25, height: 25 }}
//                 source={Images.MANAGE_JOB_IMG}
//                 resizeMode={"contain"}
//               />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Job Management</Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("MyProductList");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <Image
//                 style={{ width: 25, height: 25 }}
//                 source={Images.DIET_IMG}
//               />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Product Management</Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("EventManagement");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <Image
//                 style={{ width: 25, height: 25 }}
//                 source={Images.EVENT_LIST_IMG}
//               />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Event Management</Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("BusinessOrderHistory");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <Image
//                 style={{ width: 25, height: 25 }}
//                 source={Images.PRODUCT_ORDER_IMG}
//               />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>My Orders</Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.contactUsContainer}
//             onPress={() => {
//               props.navigation.navigate("BusinessChangePassword");
//             }}
//           >
//             <View style={styles.ImgeView}>
//               <Image
//                 style={{ width: 25, height: 25 }}
//                 resizeMode={"contain"}
//                 source={Images.PRIVACY_IMG}
//               />
//             </View>
//             <View style={styles.TextContain}>
//               <Text style={styles.drawerText}>Change password</Text>
//             </View>
//           </TouchableOpacity>
//         </DrawerContentScrollView>
//       </View>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   contactUsContainer: {
//     flexDirection: "row",
//     borderBottomColor: LINE_COMMON_COLOR_CODE,
//     borderBottomWidth: 0.5,
//     width: "100%",
//     height: 50,
//     paddingLeft: 15,
//     alignItems: "center",
//   },
//   drawerText: {
//     fontFamily: FONT_FAMILY_REGULAR,
//     color: BLACK_COLOR_CODE,
//     fontSize: 16,
//     paddingLeft: 5,
//   },
//   NavigationContain: {
//     padding: 15,
//   },
//   NavigationText: {
//     fontFamily: FONT_FAMILY_REGULAR,
//     color: LIGHT_GREY_COLOR_CODE,
//   },
//   ImgeView: {
//     flex: 0.7,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   TextContain: {
//     flex: 5.3,
//   },
//   MainContainer: {
//     padding: 15,
//     backgroundColor: YELLOW_COLOR_CODE,
//   },
//   ContainerView: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingTop: Platform.OS === "ios" ? 24 : 0,
//   },
//   NameContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   UserImge: {
//     width: 60,
//     height: 60,
//     borderRadius: 40,
//   },
//   UserNameView: {
//     paddingLeft: 10,
//   },
//   UserNameText: {
//     fontSize: 20,
//     fontFamily: FONT_FAMILY_REGULAR,
//     color: WHITE_COLOR_CODE,
//   },
//   UserAddress: {
//     fontSize: 13,
//     fontFamily: FONT_FAMILY_REGULAR,
//     color: WHITE_COLOR_CODE,
//   },
//   logoutModal: {
//     backgroundColor: "transparent",
//     flex: 1,
//   },
// });
