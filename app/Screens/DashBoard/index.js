import React, { useState } from "react";
import { View } from "react-native";
import DashBoardScreen from "./components/DashBoardScreen";
import CommonStyles from "../../Utils/CommonStyles";
import _ from "lodash";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Success from "../../Components/Modal/success";
import Error from "../../Components/Modal/error";
const DashBoardView = ({ navigation }) => {
  const [location, setLocation] = useState({
    address: "",
    latitude: "",
    longitude: "",
  });
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [dashBoardDetail, setDashBoardDetail] = useState("");
  const [businessCategory, setBusinessCategory] = useState("");
  // const [businessCategoryName, setBusinessCategoryName] = useState('');
  const [businessCategoryModal, setBusinessCategoryModal] = useState(false);
  const onPressJob = () => {
    navigation.navigate("JobList");
  };
  const onPressRestro = () => {
    navigation.navigate("Listings");
  };
  const onPressEvents = () => {
    navigation.navigate("EventListings");
  };
  const onPressShopping = () => {
    navigation.navigate("ShopList");
  };
  const onPressProvider = () => {
    navigation.navigate("ServiceProviderListing");
  };
  const SearchBusinessCategory = (searchKey) => {
    const lowerCased = searchKey.toLowerCase();
    const searchArray = [...dashBoardDetail];
    const list = _.filter(searchArray, (item) => {
      return item.category_name.toLowerCase().match(lowerCased);
    });
    if (searchKey == "") {
      setVisible(true);
      onPressSearchBusinessCategory();
      setVisible(false);
    }
    setDashBoardDetail(list);
  };
  const onPressSearch = async () => {
    console.log(
      "businessCategory.business_type: ",
      businessCategory.business_type
    );
    const params = {
      latitude: location.latitude,
      longitude: location.longitude,
      category_id: businessCategory.id,
    };
    if (businessCategory.business_type == 1) {
      navigation.navigate("Listings", { nearbySearch: params });
    }
    if (businessCategory.business_type == 2) {
      navigation.navigate("ShopList", { nearbySearch: params });
    }
    if (businessCategory.business_type == 3) {
      console.log("SSSS33");
      navigation.navigate("ServiceProviderListing", {
        nearbySearch: params,
      });
    }
  };
  const onPressSearchBusinessCategory = async () => {
    setVisible(true);
    setBusinessCategoryModal(true);
    try {
      const { data } = await apiCall("POST", ENDPOINTS.GET_SERVICES_DETAIL);
      if (data.status === 200) {
        setDashBoardDetail(data.data);
        // setVisibleSuccess(true);
        // setSuccessMessage(data.message);
        setVisible(false);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <DashBoardScreen
        setLocation={setLocation}
        location={location}
        SearchBusinessCategory={SearchBusinessCategory}
        businessCategory={businessCategory}
        setBusinessCategory={setBusinessCategory}
        businessCategoryModal={businessCategoryModal}
        setBusinessCategoryModal={setBusinessCategoryModal}
        dashBoardDetail={dashBoardDetail}
        onPressSearch={onPressSearch}
        onPressSearchBusinessCategory={onPressSearchBusinessCategory}
        onPressRestro={onPressRestro}
        onPressEvents={onPressEvents}
        onPressJob={onPressJob}
        onPressShopping={onPressShopping}
        onPressProvider={onPressProvider}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => setVisibleSuccess(false)}
      />
    </View>
  );
};
export default DashBoardView;
