import React, { useEffect } from "react";
navigator.geolocation = require("@react-native-community/geolocation");
import "react-native-gesture-handler";
import Navigation from "./app/Navigation";
import { PermissionsAndroid, Platform } from "react-native";
import {
  UserProvider,
  CartProvider,
  ServiceProvider,
  ServiceProviderQueAns,
  ShoppingCartProvider,
  AddItemCategortyProvider,
  OrderCategorySelectProvider,
} from "./app/Utils/UserContext";

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
