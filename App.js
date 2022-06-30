import React, { useEffect } from "react";
import "react-native-gesture-handler";
import Navigation from "./app/Navigation";
import { Alert, PermissionsAndroid } from "react-native";
import {
  UserProvider,
  CartProvider,
  ServiceProvider,
  ServiceProviderQueAns,
  ShoppingCartProvider,
  OrderCategorySelectProvider,
  AddItemCategortyProvider,
} from "./app/Utils/UserContext";
import AsyncStorage from "@react-native-community/async-storage";
import messaging from "@react-native-firebase/messaging";
// import firebase from './app/Utils/firebase'
console.disableYellowBox = true;
const App = () => {
  useEffect(() => {
    if (Platform.OS === "android") {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ]).then((result) => {
        if (
          result["android.permission.CAMERA"] &&
          result["android.permission.READ_EXTERNAL_STORAGE"] &&
          result["android.permission.WRITE_EXTERNAL_STORAGE"] &&
          result["android.permission.ACCESS_FINE_LOCATION"]
        ) {
        } else if (
          result["android.permission.CAMERA"] ||
          result["android.permission.READ_EXTERNAL_STORAGE"] ||
          result["android.permission.WRITE_EXTERNAL_STORAGE"] ||
          result["android.permission.ACCESS_FINE_LOCATION"]
        ) {
        }
      });
    }
  }, []);
  useEffect(() => {
    // if (!firebase.apps.length) {
    // ab.initializeApp(firebaseConfig);
    // };
    requestUserPermission();
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      // Alert.alert('New message arrived', remoteMessage.notification);
      Alert.alert(
        remoteMessage.notification.title,
        remoteMessage.notification.body
      );
      // console.log('remoteMessage.notification.body', remoteMessage.notification)
    });
    return () => {
      unsubscribe;
    };
  }, []);
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      getFcmToken();
      console.log("Authorization status:", authStatus);
    }
  }
  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      // console.log(fcmToken);
      await AsyncStorage.setItem("fcmToken", fcmToken);
      console.log("Your Firebase Token is:", fcmToken);
    } else {
      console.log("Failed", "No token received");
    }
  };
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    Alert.alert("Message handled in the background!", remoteMessage);
  });
  return (
    // <View style={{ flex: 1 }}>
    <UserProvider>
      <CartProvider>
        <ServiceProvider>
          <ServiceProviderQueAns>
            <ShoppingCartProvider>
              <OrderCategorySelectProvider>
                <AddItemCategortyProvider>
                  <Navigation />
                </AddItemCategortyProvider>
              </OrderCategorySelectProvider>
            </ShoppingCartProvider>
          </ServiceProviderQueAns>
        </ServiceProvider>
      </CartProvider>
    </UserProvider>
    // </View>
  );
};
export default App;

// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   SectionList
// } from "react-native";

// const DATA = [
//   {
//     title: "Main dishes",
//     data: ["Pizza", "Burger", "Risotto"]
//   },
//   {
//     title: "Sides",
//     data: ["French Fries", "Onion Rings", "Fried Shrimps"]
//   },
//   {
//     title: "Drinks",
//     data: ["Water", "Coke", "Beer"]
//   },
//   {
//     date: "2012-12-30",
//     time: ["20:00", "22:00"]
//   }
// ];

// const Item = ({ date }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{date}</Text>
//   </View>
// );

// const App = () => (
//   <SafeAreaView style={styles.container}>
//     <SectionList
//       sections={DATA}
//       keyExtractor={(item, index) => item + index}
//       renderItem={({ item }) => <Item title={item} />}
//       renderSectionHeader={({ section: { title } }) => (
//         <Text style={styles.header}>{title}</Text>
//       )}
//     />
//   </SafeAreaView>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginHorizontal: 16
//   },
//   item: {
//     backgroundColor: "#f9c2ff",
//     padding: 20,
//     marginVertical: 8
//   },
//   header: {
//     fontSize: 32,
//     backgroundColor: "#fff"
//   },
//   title: {
//     fontSize: 24
//   }
// });

// export default App;
