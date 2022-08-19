import React, { useEffect, useState } from "react";
import ListingMapScreen from "./components/ListingMapScreen";
import Error from "../../Components/Modal/error";

const ListingMapView = ({ route, navigation }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [businessDataList, setBusinessDataList] = useState([]);
  const [business_type, setBusinessType] = useState(null);
  const [initialRegion, setInitialRegion] = useState({
    latitude: 22.72448,
    longitude: 75.889267,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  useEffect(() => {
    if (route.params) {
      const { businessList, business_type } = route.params;
      setBusinessType(business_type);
      setBusinessDataList(businessList);
    }
  }, []);

  const onPressBack = () => {
    navigation.goBack(null);
  };
  const onPressDone = () => {
    if (business_type) {
      if (business_type == 1) {
        navigation.navigate("Listings");
      }
      if (business_type == 2) {
        navigation.navigate("ShopList");
      }
      if (business_type == 3) {
        navigation.navigate("ServiceProviderListing");
      }
      if (business_type == 5) {
        navigation.navigate("JobList");
      }
    } else {
      navigation.navigate("Listings");
    }
  };
  const onPressRestro = (item) => {
    navigation.navigate("RestaurantDetails", { detail: item });
  };
  return (
    <>
      <ListingMapScreen
        business_type={business_type}
        onPressRestro={onPressRestro}
        businessDataList={businessDataList}
        initialRegion={initialRegion}
        onPressDone={onPressDone}
        onPressBack={onPressBack}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
    </>
  );
};
export default ListingMapView;
