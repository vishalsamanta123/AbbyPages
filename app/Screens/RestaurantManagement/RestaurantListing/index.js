import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
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
import { restaurantOptions } from "../../../Utils/staticData";

const RestaurantListing = ({ navigation, route }) => {
  const { nearbySearch } = route?.params || {};
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

  useEffect(() => {
    if (navigation) {
      const filterSearch = nearbySearch?.selectOption?.toString();
      const navigateObj = { ...search, selectOption: filterSearch };
      handleSearchData(offSet, navigateObj);
    } else {
      handleSearchData(offSet, search);
    }
  }, [navigation, search]);

  const handleSearchData = async (offSet, getObj) => {
    setSearch(getObj);
    setOffSet(offSet);
    try {
      if (inputSearch) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      const params = {
        latitude: getObj?.latitude ? getObj?.latitude : "",
        longitude: getObj?.longitude ? getObj?.longitude : "",
        category_id: getObj?.category_id ? getObj?.category_id : "",
        limit: 10,
        offset: offSet,
        business_type: 1,
        search_key: inputSearch ? inputSearch : null,
        city: getObj?.city ? getObj?.city : "",
      };
      const getOptions = getObj?.selectOption?.map(({ type }) => type);
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
  const onPressView = (item) => {
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
        handleSearchData(offSet);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
    }
  };
  const onPressMap = () => {
    navigation.navigate("ListingMap", {
      businessList: restroList,
      business_type: 1,
    });
  };

  const handleOptions = (item) => {
    const newArray = [...search?.selectOption];
    newArray.push(item.type);
    setSearch({
      ...search,
      selectOption: newArray,
    });
  };

  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <RestaurantScreen
        restroList={restroList}
        search={search}
        setInputSearch={setInputSearch}
        handleSearchData={handleSearchData}
        onPressMap={onPressMap}
        offSet={offSet}
        moreData={moreData}
        inputSearch={inputSearch}
        restaurantOptions={restaurantOptions}
        // selectOption={selectOption}
        handleOptions={handleOptions}
        onPressView={onPressView}
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
