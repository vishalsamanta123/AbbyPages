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
import Error from "../../Components/Modal/showMessage";
import { LINE_COMMON_COLOR_CODE } from "../../Utils/Constant";
import { Images } from "../../Utils/images";

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
        handleSearchData(0);
      }
    } else {
      if (inputSearch) {
        handleSearchData(0);
      }
    }
  }, [search, inputSearch]);

  const handleSearchData = async (offSet) => {
    setOffSet(offSet);
    try {
      if (inputSearch) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      const params = {
        latitude: search.latitude,
        longitude: search.longitude,
        category_id: search.category_id,
        limit: 10 + offSet,
        offset: offSet,
        business_type: 2,
        search_key: inputSearch ? inputSearch : "",
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_NEW_BUSINESS,
        params
      );
      if (data.status == 200) {
        setVisible(false);
        setShopList(data.data);
      } else {
        setstopOffset(true);
        if (data.status === 201) {
          // setShopList([]);
          setVisible(false);
        } else {
          setErrorMessage(data.message);
          setVisibleErr(true);
          setVisible(false);
        }
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const onPressShop = (item) => {
    navigation.navigate("ShopDetail", { detail: item });
  };
  const onPressLike = async (item) => {
    try {
      setVisible(true);
      const params = {
        // business_id: item.business_id,
        // like_status: item.user_like === 1 ? 0 : 1,

        item_type: Number(item.search_business_type),
        item_id: item.business_id,
        like: item?.user_like === 1 ? 0 : 1,
        favorite: item?.user_favorite ? item?.user_favorite : 0,
        interest: item?.interest ? item?.interest : 0,
        views: item?.views,
      };
      const { data } = await apiCall("POST", ENDPOINTS.USERCOMMONLIKES, params);
      if (data.status == 200) {
        handleSearchData(offSet);
        ToastAndroid.show(data.message, ToastAndroid.LONG);
        setVisible(false);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
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
            <Text style={styles.RatingTextMain}>
              {item.rating.length > 5
                ? item.rating.toString().slice(0, -3)
                : item.rating.length}{" "}
              ratings
            </Text>
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
                  style={{
                    tintColor:
                      item.user_like === 1 ? null : LINE_COMMON_COLOR_CODE,
                  }}
                  source={Images.FAVRT_IMG}
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
              source={Images.LOCATION_IMG}
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
            {item.about_business ? (
              <Text
                numberOfLines={1}
                style={[styles.AddressTextStyles, { paddingVertical: 1 }]}
              >
                {item.about_business}
              </Text>
            ) : null}
            {/* <Image style={{}} source={require('../../Assets/truck_icon.png')} /> */}
            {/* <View style={{ flexDirection: "row" }}>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                    <Image
                                        tintColor={YELLOW_COLOR_CODE}
                                        // style={styles.RightImgeStyle}
                                        source={
                                            item.offers_delivery === 1 ?
                                                Images.TICK_IMG : Images.CANCEL_IMG }
                                    />
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                    <Image
                                        tintColor={YELLOW_COLOR_CODE}
                                        // style={styles.RightImgeStyle}
                                        source={
                                            item.offers_takeout === 1 ?
                                            Images.TICK_IMG : Images.CANCEL_IMG}
                                    />
                                    <Text style={styles.AddressTextStyles}>Takeout</Text>
                                </View>
                            </View> */}
            {/* <Text numberOfLines={1} style={styles.AddressTextStyles}>hii  </Text> */}
          </View>
          <View style={styles.InformationView}>
            <Image style={{}} source={Images.FIRE_IMG} />
            <Text style={styles.AddressTextStyles}>
              {moment(item.create_date).startOf("MM/DD/YYYY").fromNow()}
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

  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <ShopListScreen
        shopList={shopList}
        _handleShopList={_handleShopList}
        onPressMap={onPressMap}
        search={search}
        handleSearchData={handleSearchData}
        offSet={offSet}
        stopOffset={stopOffset}
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
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
