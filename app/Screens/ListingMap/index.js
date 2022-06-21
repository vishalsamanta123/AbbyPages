import React, { useEffect, useState } from "react";
import ListingMapScreen from "./components/ListingMapScreen";
const ListingMapView = ({ route, navigation }) => {
  const [businessDataList, setBusinessDataList] = useState([]);
  const [business_type, setBusinessType] = useState([]);
  useEffect(() => {
    if (route.params) {
      const { businessList, business_type } = route.params;
      setBusinessType(business_type);
      setBusinessDataList(businessList);
    }
  }, []);

  const initialRegion = {
    latitude: 22.72448,
    longitude: 75.889267,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };
  const coordinate = {
    latitude: 22.72448,
    // props.restroDetail.latitude ? props.restroDetail.latitude :
    longitude: 75.889267,
    // props.restroDetail.longitude ? props.restroDetail.longitude :
  };
  const onPressBack = () => {
    navigation.goBack(null);
  };
  const onPressDone = () => {
    if (business_type) {
      // if (business_type) {
      // navigation.navigate('Listings');
      // } //only for this time
      if (business_type == 1) {
        navigation.navigate("Listings");
      }
      if (business_type == 2) {
        navigation.navigate("ShopList");
      }
      if (business_type == 3) {
        navigation.navigate("ServiceProviderListing");
      }
      if (business_type == 4) {
        navigation.navigate("Listings");
      }
      if (business_type == 4) {
        navigation.navigate("Listings");
      }
    } else {
      navigation.navigate("Listings"); //only for this time
    }
  };
  const onPressRestro = (item) => {
    console.log("itexccvm", item);
    navigation.navigate("RestaurantDetails", { detail: item });
  };
  return (
    <ListingMapScreen
      onPressRestro={onPressRestro}
      businessDataList={businessDataList}
      initialRegion={initialRegion}
      coordinate={coordinate}
      onPressDone={onPressDone}
      onPressBack={onPressBack}
    />
  );
};
export default ListingMapView;
