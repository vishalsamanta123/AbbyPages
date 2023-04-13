import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Keyboard,
} from "react-native";
import _ from "lodash";
import moment from "moment";
import styles from "./components/styles";
import RestaurantScreen from "./components/RestaurantScreen";
import CommonStyles from "../../../Utils/CommonStyles";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import Success from "../../../Components/Modal/success";
import Error from "../../../Components/Modal/error";
import {
  YELLOW_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
} from "../../../Utils/Constant";
import { Images } from "../../../Utils/images";

const RestaurantListing = ({ navigation, route }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState({ selectOption: [] });
  const [inputSearch, setInputSearch] = useState("");
  const [offSet, setOffSet] = useState(0);
  const [moreData, setMoreData] = useState(0);
  const [restroList, setRestroList] = useState([]);
  const options = [
    { type: "", name: "All" },
    { type: "9", name: "Open Now" },
    { type: "1", name: "Open Delivery" },
    { type: "10", name: "Offer Takeout" },
    { type: "2", name: "Reservations" },
  ];

  useEffect(() => {
    if (route?.params?.nearbySearch) {
      const { nearbySearch } = route?.params || {};
      if (search?.selectOption?.length === 0) {
        const selectedArry = options?.filter((item) => {
          return item.type === nearbySearch?.selectOption;
        });
        const getObj = nearbySearch;
        getObj.selectOption = selectedArry;
        setSearch(getObj);
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
        latitude: search.latitude ? search.latitude : "",
        longitude: search.longitude ? search.longitude : "",
        category_id: search.category_id ? search.category_id : "",
        limit: 10,
        offset: offSet,
        business_type: 1,
        search_key: inputSearch ? inputSearch : null,
        city: search.city ? search.city : "",
      };
      const getOptions = search?.selectOption?.map(({ type }) => type);
      params.options = getOptions?.length === 0 ? "" : getOptions?.toString();
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_NEW_BUSINESS,
        params
      );
      if (data.status == 200) {
        setVisible(false);
        setMoreData(data.total_number_data);
        if (offSet === 0) {
          setRestroList(data.data);
        } else {
          setRestroList([...restroList, ...data.data]);
        }
      } else {
        if (data.status === 201) {
          setRestroList([]);
          setVisible(false);
        } else {
          setErrorMessage(data.message);
          setVisibleErr(true);
          setVisible(false);
        }
      }
    } catch (error) {
      setErrorMessage(data.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  // const handleRestroList = async (offSet) => {
  //   setOffSet(offSet);
  //   try {
  //     setVisible(true);
  //     const params = {
  //       business_type: 1,
  //       offset: offSet,
  //       limit: 10,
  //     };
  //     const { data } = await apiCall("POST", ENDPOINTS.BUSINESS_LIST, params);
  //     if (data.status === 200) {
  //       setVisible(false);
  //       setMoreData(data.total_number_data);
  //       if (offSet === 0) {
  //         setRestroList(data.data);
  //       } else {
  //         setRestroList([...restroList, ...data.data]);
  //       }
  //     } else {
  //       if (data.status === 201) {
  //         setRestroList([]);
  //         setVisible(false);
  //       } else {
  //         setErrorMessage(data.message);
  //         setVisibleErr(true);
  //         setVisible(false);
  //       }
  //     }
  //   } catch (error) {
  //     setVisibleErr(true);
  //     setVisible(false);
  //     setErrorMessage(error.message);
  //   }
  // };
  const onPressRestro = (item) => {
    navigation.navigate("RestaurantDetails", { detail: item });
  };
  const onPressLike = async (item) => {
    try {
      const params = {
        item_type: Number(item.search_business_type),
        item_id: item?.business_id,
        like: item?.user_like === 1 ? 0 : 1,
        favorite: item?.user_favorite ? item?.user_favorite : 0,
        interest: item?.interest ? item?.interest : 0,
        views: item?.views,
      };
      const { data } = await apiCall("POST", ENDPOINTS.USERCOMMONLIKES, params);
      if (data.status == 200) {
        if (search) {
          if (inputSearch) {
            handleSearchData(offSet);
          }
          handleSearchData(offSet);
        }
        ToastAndroid.show(data.message, ToastAndroid.LONG);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
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
            source={{ uri: item.logo }}
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
        <View style={styles.MainConatinerView}>
          <View style={styles.InformationView}>
            <View style={{ flex: 5 }}>
              <Text style={styles.MainServiceName}>{item.business_name}</Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity onPress={() => onPressLike(item)}>
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
            numberOfLines={2}
            style={[styles.AddressTextStyles, { paddingRight: 5 }]}
          >
            {item.business_service_category}
          </Text>
          <View style={styles.InformationView}>
            <Image
              style={styles.MapImgeStyle}
              resizeMode="contain"
              source={Images.LOCATION_IMG}
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
                      ? Images.TICK_IMG
                      : Images.CANCEL_IMG
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
                      ? Images.TICK_IMG
                      : Images.CANCEL_IMG
                  }
                  style={{ marginHorizontal: 2 }}
                />
                <Text style={styles.AddressTextStyles}>Takeout</Text>
              </View>
            </View>
          </View>
          <View style={styles.InformationView}>
            <Image source={Images.FIRE_IMG} />
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
      businessList: restroList,
      business_type: 1,
    });
  };

  const handleOptions = (item, index) => {
    if (item?.type === "") {
      //when all types is selected it works
      const allTypes = [item];
      setSearch({
        ...search,
        selectOption: allTypes,
      });
    } else {
      if (search?.selectOption?.length > 0) {
        search?.selectOption?.find((check) => {
          if (check?.type === item?.type) {
            //when same type is selected it works to remove it
            const arrays = [...search.selectOption];
            arrays?.splice(
              arrays?.findIndex((rmv) => rmv.type === item.type),
              1
            );
            setSearch({
              ...search,
              selectOption: arrays,
            });
          } else {
            if (search?.selectOption[0]?.type === "") {
              //when other than all types is selected it works to add it
              const toRemoveAll = [...search.selectOption];
              toRemoveAll?.splice(
                arrays?.findIndex((rmv) => rmv.type === ""),
                1
              );
              const arrays = [...toRemoveAll];
              arrays?.push(item);
              setSearch({
                ...search,
                selectOption: arrays,
              });
            } else {
              //when another type is selected it works to add it
              const arrays = [...search.selectOption];
              arrays?.push(item);
              setSearch({
                ...search,
                selectOption: arrays,
              });
            }
          }
        });
      } else {
        //when nothing is selected it works
        const firstType = [item.type];
        setSearch({
          ...search,
          selectOption: firstType,
        });
      }
    }
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <RestaurantScreen
        restroList={restroList}
        search={search}
        setInputSearch={setInputSearch}
        handleSearchData={handleSearchData}
        _handleSerivces={_handleSerivces}
        onPressMap={onPressMap}
        offSet={offSet}
        moreData={moreData}
        inputSearch={inputSearch}
        options={options}
        // selectOption={selectOption}
        handleOptions={handleOptions}
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
export default RestaurantListing;
