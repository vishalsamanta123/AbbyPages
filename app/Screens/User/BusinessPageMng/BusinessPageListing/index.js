import React, { useState, useEffect } from "react";
import { View } from "react-native";
import _ from "lodash";
import BusinessPageListingView from "./components/BusinessPageListingView";
import CommonStyles from "../../../../Utils/CommonStyles";
import { apiCall } from "../../../../Utils/httpClient";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import { restaurantOptions } from "../../../../Utils/staticData";

const BusinessPageListing = ({ navigation, route }) => {
  const { nearbySearch } = route?.params || {};
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState({ selectOption: [] });
  const [inputSearch, setInputSearch] = useState("");
  const [offSet, setOffSet] = useState(0);
  const [moreData, setMoreData] = useState(0);
  const [restroList, setRestroList] = useState([]);

  useEffect(() => {
    if (search?.selectOption?.length === 0) {
      const filterSearch = {
        ...nearbySearch,
        selectOption: Number(nearbySearch?.selectOption)
          ? nearbySearch?.selectOption?.toString()
          : "",
      };
      setSearch(filterSearch);
      handleSearchData(offSet, filterSearch);
    }
  }, [navigation, inputSearch]);

  const handleSearchData = async (offset, getObj) => {
    setOffSet(offset);
    setSearch(getObj);
    try {
      if (inputSearch) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      const params = {
        latitude: getObj?.latitude ? getObj?.latitude : "28",
        longitude: getObj?.longitude ? getObj?.longitude : "-81",
        category_id: getObj?.category_id ? getObj?.category_id : "",
        limit: 5,
        offset: offset,
        business_type: getObj?.business_type
        ? Number(getObj?.business_type)
        : "",
        search_key: inputSearch ? inputSearch : null,
        city: getObj?.city ? getObj?.city : "",
        options:
        getObj?.selectOption?.length > 0 ||
        Array?.isArray(getObj?.selectOption)
        ? getObj?.selectOption?.toString()
        : "",
      };
      console.log('params: ', params);
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_NEW_BUSINESS,
        params
        );
        console.log('data: ', data);
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
          setVisible(false);
        }
      }
    } catch (error) {
      setVisible(false);
    }
  };
  const onPressView = (item) => {
    navigation.navigate("BusinessPageDetails", { detail: item });
  };
  const onPressMap = () => {
    navigation.navigate("ListingMap", {
      businessList: restroList,
      business_type: 1,
    });
  };

  const handleOptions = (item) => {
    if (search?.selectOption?.toString()?.includes(item?.type)) {
      const toRemoveObj = [...search.selectOption];
      toRemoveObj.splice(
        toRemoveObj.findIndex((a) => a === item.type),
        1
      );
      const newObject = { ...search, selectOption: toRemoveObj };
      handleSearchData(0, newObject);
    } else {
      if (item?.type) {
        const newArray = [...search?.selectOption];
        newArray.push(item.type);
        const newObject = { ...search, selectOption: newArray };
        handleSearchData(0, newObject);
      } else {
        const newObject = { ...search, selectOption: item };
        handleSearchData(0, newObject);
      }
    }
  };

  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <BusinessPageListingView
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
    </View>
  );
};
export default BusinessPageListing;
