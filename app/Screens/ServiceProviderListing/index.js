import React, { useState, useEffect } from "react";
import ServiceProviderListing from "./components/ServiceProviderListing";
import moment from "moment";
import styles from "./components/styles";
import CommonStyles from "../../Utils/CommonStyles";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Success from "../../Components/Modal/success";
import _ from "lodash";
import Error from "../../Components/Modal/error";
const ServiceProviderListingView = ({ navigation, route }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [search, setSearch] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [visible, setVisible] = useState(false);
  const [serviceData, setserviceData] = useState([]);
  const [offSet, setOffSet] = useState();
  const [stopOffset, setstopOffset] = useState(false);

  useEffect(() => {
    if (route?.params?.nearbySearch) {
      const { nearbySearch } = route?.params;
      setSearch(nearbySearch);
      if (search) {
        handleServiceNearby(0);
      }
    } else {
      handleServiceList(0);
    }
  }, [search]);

  const handleServiceNearby = async (offSet) => {
    setOffSet(offSet);
    try {
      setVisible(true);
      const params = {
        latitude: search.latitude,
        longitude: search.longitude,
        category_id: search.category_id,
        limit: 10,
        offset: offSet,
        business_type: 3,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_NEW_BUSINESS,
        params
      );
      if (data.status === 200) {
        setserviceData(data.data);
        setVisible(false);
      } else {
        setVisible(false);
        setErrorMessage(data.message);
        setVisibleErr(true);
        setstopOffset(true);
      }
    } catch (error) {
      setErrorMessage(data.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const handleServiceList = async (offSet) => {
    setOffSet(offSet);
    try {
      setVisible(true);
      const params = {
        business_type: 3,
        offset: offSet,
        limit: 10,
      };
      const { data } = await apiCall("POST", ENDPOINTS.BUSINESS_LIST, params);
      if (data.status === 200) {
        setserviceData(data.data);
        setVisible(false);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setstopOffset(true);
        setVisible(false);
      }
    } catch (error) {
      setVisible(false);
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  const onPressServices = (detail) => {
    navigation.navigate("ServiceProviderDetails", { detail: detail });
  };
  const onPressLike = async (detail) => {
    setVisible(true);
    const params = {
      business_id: detail.business_id,
      like_status: detail.user_like == 1 ? 0 : 1,
    };
    const { data } = await apiCall("POST", ENDPOINTS.BUSINESS_LIKE, params);
    if (data.status == 200) {
      ToastAndroid.show(data.message, ToastAndroid.SHORT);
      setVisible(false);
      handleServiceList(offSet);
    } else {
      setErrorMessage(data.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const _handleSerivces = (item) => {
    return (
      <TouchableOpacity
        onPress={() => onPressServices(item)}
        style={styles.MainConatiner}
      >
        <View>
          <Image
            style={styles.MainImgeStyle}
            resizeMode="contain"
            source={{ uri: item.logo }}
          />
          <View style={styles.RatingContainer}>
            <View style={styles.RatingStyles}>
              <Text style={styles.RatingStylesTxt}>5.0</Text>
            </View>
            <Text numberOfLines={1} style={styles.RatingTextMain}>
              {item.rating} ratings
            </Text>
          </View>
        </View>
        <View style={{ flex: 2, paddingHorizontal: 5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 5,
            }}
          >
            <View style={{ flex: 5 }}>
              <Text numberOfLines={1} style={styles.MainServiceName}>
                {item.business_name}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity onPress={() => onPressLike(item)}>
                <Image
                  source={
                    item.user_like === 1
                      ? require("../../Assets/like_icon_filled.png")
                      : require("../../Assets/like_icon_disable.png")
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* <Text style={styles.MainServiceName}>{item.business_name}</Text> */}
          <Text numberOfLines={1} style={styles.AddressTxtStyle}>
            {item.business_service_category}
          </Text>
          <View style={styles.InformationView}>
            <Image
              style={styles.MapImgeStyle}
              resizeMode="contain"
              source={require("../../Assets/map_marker_icon.png")}
            />
            <Text numberOfLines={1} style={styles.AddressTextStyles}>
              {" "}
              {item.address}
            </Text>
          </View>
          <View style={styles.InformationView}>
            <Image
              style={{ top: 4 }}
              source={require("../../Assets/truck_icon.png")}
            />
            <Text numberOfLines={1} style={styles.AddressTextStyles}>
              {" "}
              Curbside drop-off during COVID-19{" "}
            </Text>
          </View>
          {/* <View style={styles.InformationView}>
                            <Image style={{ top: 4 }} source={require('../../Assets/thumb_icon.png')} />
                            <Text style={styles.AddressTextStyles}>  {item.vegNonVegService}</Text>
                        </View> */}
          <View style={styles.InformationView}>
            <Image
              style={{ top: 4 }}
              source={require("../../Assets/fire_icon.png")}
            />
            <Text style={styles.AddressTextStyles}>
              {moment(item.create_date).startOf("hour").fromNow()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const onPressMap = () => {
    navigation.navigate("ListingMap", {
      businessList: serviceData,
      business_type: 3,
    });
  };
  const searchService = (searchKey) => {
    setInputSearch(searchKey);
    const lowerCased = searchKey.toLowerCase();
    const searchArray = [...serviceData];
    const list = _.filter(searchArray, (item) => {
      return item.business_name.toLowerCase().match(lowerCased);
    });
    if (searchKey == "") {
      setVisible(true);
      if (search) {
        handleServiceNearby(0);
      } else {
        handleServiceList(0);
      }
      setVisible(false);
    } else {
      setserviceData(list);
    }
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <ServiceProviderListing
        searchService={searchService}
        serviceData={serviceData}
        search={search}
        handleServiceNearby={handleServiceNearby}
        _handleSerivces={_handleSerivces}
        onPressMap={onPressMap}
        handleServiceList={handleServiceList}
        offSet={offSet}
        stopOffset={stopOffset}
        inputSearch={inputSearch}
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
export default ServiceProviderListingView;
