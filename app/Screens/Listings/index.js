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
import ListingsScreen from "./components/ListingsScreen";
import CommonStyles from "../../Utils/CommonStyles";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Success from "../../Components/Modal/success";
import Error from "../../Components/Modal/error";
import { YELLOW_COLOR_CODE } from "../../Utils/Constant";

const ListingsScreenView = ({ navigation, route }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [offSet, setOffSet] = useState(0);
  const [stopOffset, setstopOffset] = useState(false);
  const [restroList, setRestroList] = useState([]);

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
      } else {
        handleRestroList(0);
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
        business_type: 1,
        search_key: inputSearch ? inputSearch : null,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_NEW_BUSINESS,
        params
      );
      if (data.status == 200) {
        setVisible(false);
        setRestroList(data.data);
      } else {
        if (data.status === 201) {
          setRestroList([]);
          setVisible(false);
        } else {
          setErrorMessage(data.message);
          setVisibleErr(true);
          setstopOffset(true);
          setVisible(false);
        }
      }
    } catch (error) {
      setErrorMessage(data.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const handleRestroList = async (offSet) => {
    setOffSet(offSet);
    try {
      setVisible(true);
      const params = {
        business_type: 1,
        offset: offSet,
        limit: 10,
      };
      console.log("params: ", params);
      const { data } = await apiCall("POST", ENDPOINTS.BUSINESS_LIST, params);
      console.log("data: ", data);
      if (data.status === 200) {
        setRestroList(data.data);
        setVisible(false);
      } else {
        if (data.status === 201) {
          setRestroList([]);
          setVisible(false);
        } else {
          setstopOffset(true);
          setErrorMessage(data.message);
          setVisibleErr(true);
          setVisible(false);
        }
      }
    } catch (error) {
      setVisibleErr(true);
      setVisible(false);
      setErrorMessage(error.message);
    }
  };
  const onPressRestro = (item) => {
    navigation.navigate("RestaurantDetails", { detail: item });
  };
  const onPressLike = async (detail) => {
    try {
      setVisible(true);
      const params = {
        business_id: detail.business_id,
        like_status: detail.user_like == 1 ? 0 : 1,
      };
      const { data } = await apiCall("POST", ENDPOINTS.BUSINESS_LIKE, params);
      if (data.status == 200) {
        setVisible(false);
        if (search) {
          if (inputSearch) {
            handleSearchData(offSet);
          }
          handleSearchData(offSet);
        } else {
          handleRestroList(offSet);
        }
        ToastAndroid.show(data.message, ToastAndroid.SHORT);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
    }
  };
  const _handleSerivces = (item) => {
    return (
      <TouchableOpacity
        onPress={() => onPressRestro(item)}
        style={styles.MainConatiner}
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
            <Text numberOfLines={1} style={styles.RatingTextMain}>
              {item.rating} ratings
            </Text>
          </View>
        </View>
        <View style={styles.MainConatinerView}>
          <View style={styles.InformationView}>
            <View style={{ flex: 5 }}>
              <Text style={styles.MainServiceName}>{item.business_name}</Text>
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
          <Text
            numberOfLines={2}
            style={[styles.AddressTextStyles, { paddingRight: 5 }]}
          >
            {item.business_service_category}
          </Text>
          <View style={styles.InformationView}>
            <Image
              style={styles.MapImgeStyle}
              resizeMode="contain"
              source={require("../../Assets/map_marker_icon.png")}
            />
            <Text
              numberOfLines={2}
              style={[styles.AddressTextStyles, { paddingRight: 10 }]}
            >
              {item.address}
            </Text>
          </View>
          <View style={styles.InformationView}>
            {/* <Image style={{}} source={require('../../Assets/truck_icon.png')} /> */}
            <View style={{ flexDirection: "row" }}>
              <View style={styles.statusVw}>
                <Image
                  tintColor={YELLOW_COLOR_CODE}
                  source={
                    item.offers_delivery === 1
                      ? require("../../Assets/text_check_icon.png")
                      : require("../../Assets/cart_delete_icon.png")
                  }
                  style={{ marginHorizontal: 2 }}
                />
                <Text style={styles.AddressTextStyles}>Delievery</Text>
              </View>
              <View style={styles.statusVw}>
                <Image
                  tintColor={YELLOW_COLOR_CODE}
                  source={
                    item.offers_takeout === 1
                      ? require("../../Assets/text_check_icon.png")
                      : require("../../Assets/cart_delete_icon.png")
                  }
                  style={{ marginHorizontal: 2 }}
                />
                <Text style={styles.AddressTextStyles}>Takeout</Text>
              </View>
            </View>
          </View>
          <View style={styles.InformationView}>
            <Image style={{}} source={require("../../Assets/fire_icon.png")} />
            <Text style={styles.AddressTextStyles}>
              {moment(item.create_date).startOf("hour").fromNow()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      // <TouchableOpacity
      //   onPress={() => onPressRestro(item)}
      //   style={styles.MainConatiner}
      // >
      //   <View style={styles.InformationView}>
      //     <View style={{ flex: 1, justifyContent: "center" }}>
      //       <Image
      //         style={styles.MainImgeStyle}
      //         resizeMode="contain"
      //         source={{
      //           uri: item.logo,
      //         }}
      //       />
      //       <View style={styles.RatingContainer}>
      //         <View style={styles.RatingStyles}>
      //           <Text style={styles.RatingStylesTxt}>5.0</Text>
      //         </View>
      //         <Text numberOfLines={1} style={styles.RatingTextMain}>
      //           {item.rating} ratings
      //         </Text>
      //       </View>
      //     </View>
      //     <View style={styles.MainConatinerView}>
      //       <View style={styles.InformationView}>
      //         <View style={{ flex: 5 }}>
      //           <Text style={styles.MainServiceName}>{item.business_name}</Text>
      //         </View>
      //         <View style={{ flex: 1, alignItems: "flex-end" }}>
      //           <TouchableOpacity onPress={() => onPressLike(item)}>
      //             <Image
      //               source={
      //                 item.user_like === 1
      //                   ? require("../../Assets/like_icon_filled.png")
      //                   : require("../../Assets/like_icon_disable.png")
      //               }
      //             />
      //           </TouchableOpacity>
      //         </View>
      //       </View>
      //       <Text
      //         numberOfLines={2}
      //         style={[styles.AddressTextStyles, { paddingRight: 5 }]}
      //       >
      //         {item.business_service_category}
      //       </Text>
      //       <View style={styles.InformationView}>
      //         <Image
      //           style={styles.MapImgeStyle}
      //           resizeMode="contain"
      //           source={require("../../Assets/map_marker_icon.png")}
      //         />
      //         <Text
      //           numberOfLines={2}
      //           style={[styles.AddressTextStyles, { paddingRight: 10 }]}
      //         >
      //           {" "}
      //           {item.address}
      //         </Text>
      //       </View>
      //       <View style={styles.InformationView}>
      //         {/* <Image style={{}} source={require('../../Assets/truck_icon.png')} /> */}
      //         <View style={{ flexDirection: "row" }}>
      //           <View style={styles.statusVw}>
      //             <Image
      //               tintColor={YELLOW_COLOR_CODE}
      //               source={
      //                 item.offers_delivery === 1
      //                   ? require("../../Assets/text_check_icon.png")
      //                   : require("../../Assets/cart_delete_icon.png")
      //               }
      //               style={{ marginHorizontal: 2 }}
      //             />
      //             <Text style={styles.AddressTextStyles}>Delievery</Text>
      //           </View>
      //           <View style={styles.statusVw}>
      //             <Image
      //               tintColor={YELLOW_COLOR_CODE}
      //               source={
      //                 item.offers_takeout === 1
      //                   ? require("../../Assets/text_check_icon.png")
      //                   : require("../../Assets/cart_delete_icon.png")
      //               }
      //               style={{ marginHorizontal: 2 }}
      //             />
      //             <Text style={styles.AddressTextStyles}>Takeout</Text>
      //           </View>
      //         </View>
      //       </View>
      //       <View style={styles.InformationView}>
      //         <Image
      //           style={{}}
      //           source={require("../../Assets/fire_icon.png")}
      //         />
      //         <Text style={styles.AddressTextStyles}>
      //           {moment(item.create_date).startOf("hour").fromNow()}
      //         </Text>
      //       </View>
      //     </View>
      //   </View>
      // </TouchableOpacity>
    );
  };
  const onPressMap = () => {
    navigation.navigate("ListingMap", {
      businessList: restroList,
      business_type: 1,
    });
  };

  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <ListingsScreen
        restroList={restroList}
        search={search}
        setInputSearch={setInputSearch}
        handleSearchData={handleSearchData}
        _handleSerivces={_handleSerivces}
        onPressMap={onPressMap}
        handleRestroList={handleRestroList}
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
export default ListingsScreenView;
