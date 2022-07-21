import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import _ from "lodash";
import moment from "moment";
import styles from "./components/styles";
import ShopListScreen from "./components/ShopList";
import CommonStyles from "../../Utils/CommonStyles";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Success from "../../Components/Modal/success";
import Error from "../../Components/Modal/error";
const ShopList = ({ navigation, route }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [visible, setVisible] = useState(false);
  const [offSet, setOffSet] = useState();
  const [stopOffset, setstopOffset] = useState(false);
  const [shopList, setShopList] = useState([]);
  const [search, setSearch] = useState("");
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    if (route?.params?.nearbySearch) {
      const { nearbySearch } = route?.params;
      setSearch(nearbySearch);
      if (search) {
        handleServiceNearby(0);
      }
    } else {
      handleShopList(0);
    }
  }, [search]);

  const handleShopList = async (offSet) => {
    setOffSet(offSet);
    try {
      setVisible(true);
      const params = {
        business_type: 2,
        offset: offSet,
        limit: 10,
      };
      console.log("params: ", params);
      const { data } = await apiCall("POST", ENDPOINTS.BUSINESS_LIST, params);
      console.log("data: ", data);
      if (data.status === 200) {
        setShopList(data.data);
        setVisible(false);
      } else {
        setstopOffset(true);
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
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
        business_type: 2,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_NEW_BUSINESS,
        params
      );
      if (data.status === 200) {
        setShopList(data.data);
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
  const onPressShop = (item) => {
    navigation.navigate("ShopDetail", { detail: item });
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
      handleShopList(offSet);
    } else {
      setErrorMessage(data.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const _handleShopList = (item) => {
    return (
      <TouchableOpacity
        onPress={() => onPressShop(item)}
        style={[styles.listVw]}
      >
        <View>
          <Image
            style={styles.MainImgeStyle}
            resizeMode="contain"
            source={{
              uri: item.logo,
            }}
          />
          <View style={styles.RatingContainer}>
            <View style={styles.RatingStyles}>
              <Text style={styles.RatingStylesTxt}>5.0</Text>
            </View>
            <Text style={styles.RatingTextMain}>{item.rating} ratings</Text>
          </View>
        </View>
        <View style={[{ flex: 1, paddingHorizontal: 10 }]}>
          {/* <View style={[styles.MainConatinerView, {}]}> */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 5 }}>
              <Text style={styles.MainServiceName}>{item.business_name}</Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity
                style={{ padding: 5 }}
                onPress={() => onPressLike(item)}
              >
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
          <Text
            numberOfLines={1}
            style={[styles.AddressTextStyles, { paddingRight: 5 }]}
          >
            {item.business_service_category}
          </Text>
          <View style={[styles.InformationView, { paddingVertical: 2 }]}>
            <Image
              style={styles.MapImgeStyle}
              resizeMode="contain"
              source={require("../../Assets/map_marker_icon.png")}
            />
            <Text
              numberOfLines={1}
              style={[
                styles.AddressTextStyles,
                { paddingRight: 10, lineHeight: 14 },
              ]}
            >
              {" "}
              {item.address}
            </Text>
          </View>
          <View style={styles.InformationView}>
            <Text
              numberOfLines={1}
              style={[styles.AddressTextStyles, { paddingVertical: 1 }]}
            >
              {item.about_business}
            </Text>
            {/* <Image style={{}} source={require('../../Assets/truck_icon.png')} /> */}
            {/* <View style={{ flexDirection: "row" }}>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                    <Image
                                        tintColor={YELLOW_COLOR_CODE}
                                        // style={styles.RightImgeStyle}
                                        source={
                                            item.offers_delivery === 1 ?
                                                require('../../Assets/text_check_icon.png')
                                                :
                                                require('../../Assets/cart_delete_icon.png')
                                        }
                                    />
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                    <Image
                                        tintColor={YELLOW_COLOR_CODE}
                                        // style={styles.RightImgeStyle}
                                        source={
                                            item.offers_takeout === 1 ?
                                                require('../../Assets/text_check_icon.png')
                                                :
                                                require('../../Assets/cart_delete_icon.png')
                                        }
                                    />
                                    <Text style={styles.AddressTextStyles}>Takeout</Text>
                                </View>
                            </View> */}
            {/* <Text numberOfLines={1} style={styles.AddressTextStyles}>hii  </Text> */}
          </View>
          <View style={styles.InformationView}>
            <Image style={{}} source={require("../../Assets/fire_icon.png")} />
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
      businessList: shopList,
      business_type: 2,
    });
  };
  const searchInput = (searchKey) => {
    setInputSearch(searchKey);
    const lowerCased = searchKey.toLowerCase();
    const searchArray = [...shopList];
    const list = _.filter(searchArray, (item) => {
      return item.business_name.toLowerCase().match(lowerCased);
    });
    if (searchKey == "") {
      setVisible(true);
      if (search) {
        handleServiceNearby(0);
      } else {
        handleShopList(0);
      }
      setVisible(false);
    }
    setShopList(list);
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <ShopListScreen
        searchInput={searchInput}
        shopList={shopList}
        _handleShopList={_handleShopList}
        onPressMap={onPressMap}
        search={search}
        handleServiceNearby={handleServiceNearby}
        handleShopList={handleShopList}
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
export default ShopList;
