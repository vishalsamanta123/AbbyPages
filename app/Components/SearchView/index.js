import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
  Keyboard,
} from "react-native";
import styles from "./styles";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import {
  COLORS,
  GREY_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../Utils/Constant";
import AddressInput from "../AddressInput";
import { staticSearchOptions } from "../../Utils/staticData";
import Button from "../Button";
import CommonStyles from "../../Utils/CommonStyles";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import apiEndPoints from "../../Utils/apiEndPoints";
import { apiCall } from "../../Utils/httpClient";

const SearchView = (props) => {
  const {
    // resBusdata = [],
    // resultCat = [],
    searchStart = false,
    searchValues = () => {},
  } = props;
  const navigation = useNavigation();
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchCategory, setSearchCategory] = useState({
    resBusdata: [],
    resultCat: [],
  });
  const [searchData, setSearchData] = useState({
    search_category_or_business: "",
    address: "Orlando, FL, USA",
  });

  const handleDetailNavigation = (data) => {
    setSearchOpen(false);
    navigation.navigate("BusinessPageDetails", { detail: data });
  };
  useFocusEffect(
    React.useCallback(() => {
      getHistorySearch();
    }, [navigation, searchOpen])
  );
  const getHistorySearch = async () => {
    const historySearchData = await AsyncStorage.getItem(
      "searchCategoryHistory"
    );
    if (JSON?.parse(historySearchData)) {
      setSearchHistory(JSON?.parse(historySearchData)?.reverse());
    }
  };

  const getCategories = async (itemData) => {
    console.log("itemData: ", itemData);
    setSearchData({ ...itemData });
    const params = {
      search_category_or_business: itemData?.search_category_or_business
        ? itemData?.search_category_or_business
        : "",
      address: itemData?.address ? itemData?.address : "",
    };
    console.log("params:BUSINESSLISTBYCATG ", params);
    try {
      const { data } = await apiCall(
        "POST",
        apiEndPoints.BUSINESSLISTBYCATG,
        params
      );
      console.log("data:BUSINESSLISTBYCATG ", data);
      if (data?.status === 200) {
        setSearchCategory({
          resBusdata: data?.data?.resBusdata,
          resultCat: data?.data?.resultCat,
        });
      } else {
        setSearchCategory({
          resBusdata: [],
          resultCat: [],
        });
      }
    } catch (error) {}
  };

  const onSearchData = async (data) => {
    if (searchData?.search_category_or_business !== "") {
      const catSearchNew = [...searchHistory];
      const objNew = {
        category_name: searchData?.search_category_or_business,
      };
      setSearchOpen(false);
      if (catSearchNew?.length >= 5) {
        catSearchNew?.splice(catSearchNew.length - 1, 1);
        catSearchNew?.push(objNew);
        AsyncStorage.setItem(
          "searchCategoryHistory",
          JSON.stringify(catSearchNew)
        );
      } else {
        catSearchNew?.push(objNew);
        AsyncStorage.setItem(
          "searchCategoryHistory",
          JSON.stringify(catSearchNew)
        );
      }
      setSearchData({
        address: searchData?.address,
        search_category_or_business: "",
      });
      const newObject = {
        ...data,
        city: data?.address,
      };
      navigation.navigate("BusinessPageListing", { nearbySearch: newObject });
    }
  };

  const handleOnSearch = () => {
    setSearchOpen(true);
  };

  const renderCategories = () => {
    return (
      <View style={styles.categoriesVw}>
        {searchHistory?.length > 0 && Array?.isArray(searchHistory)
          ? searchHistory?.map((itm) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSearchData({
                      ...itm,
                      search_category_or_business: itm.category_name,
                    });
                  }}
                  style={styles.categoryVw}
                >
                  <IconX
                    origin={ICON_TYPE.MATERIAL_ICONS}
                    name={"history"}
                    size={22}
                    color={COLORS.BLACK}
                  />
                  <Text style={styles.categoryTxt}>{itm.category_name}</Text>
                </TouchableOpacity>
              );
            })
          : null}
        {searchCategory?.resBusdata?.length > 0 ||
        searchCategory?.resultCat?.length > 0 ? (
          <>
            {searchCategory?.resBusdata?.length > 0 ? (
              <>
                <Text style={styles.searchHeadTxt}>Related Businesses:</Text>
                {searchCategory?.resBusdata?.map((itm) => {
                  return (
                    <TouchableOpacity
                      onPress={() => handleDetailNavigation(itm)}
                      style={styles.categoryVw}
                    >
                      <Image
                        source={{ uri: itm?.logo }}
                        style={styles.categoryImg}
                      />
                      <View>
                        <Text style={styles.categoryTxt}>
                          {itm?.business_name}
                        </Text>
                        <Text style={styles.categorySmallTxt}>
                          {itm?.address}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </>
            ) : null}
            {searchCategory?.resultCat?.length > 0 ? (
              <>
                <Text style={styles.searchHeadTxt}>Related Categories:</Text>
                {searchCategory?.resultCat?.map((itm) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setSearchData({
                          ...itm,
                          search_category_or_business: itm.category_name,
                        });
                      }}
                      style={styles.categoryVw}
                    >
                      <Text style={styles.categoryTxt}>
                        {itm?.category_name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </>
            ) : null}
          </>
        ) : (
          <>
            {staticSearchOptions?.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSearchData({
                      ...item,
                      search_category_or_business: item.category_name,
                    });
                    onSearchData({
                      ...item,
                      search_category_or_business: item.category_name,
                    });
                  }}
                  style={styles.categoryVw}
                >
                  <IconX
                    origin={item.origin}
                    name={item.name}
                    size={item.size}
                    color={item.color}
                  />
                  <Text style={styles.categoryTxt}>{item.category_name}</Text>
                </TouchableOpacity>
              );
            })}
          </>
        )}
      </View>
    );
  };
  return (
    <Pressable
      onPress={() => {
        setSearchOpen(false);
        Keyboard.dismiss();
      }}
    >
      <View style={styles.searchVw}>
        <View style={styles.catgSearchVw}>
          <IconX
            origin={ICON_TYPE.OCTICONS}
            color={GREY_COLOR_CODE}
            name={"search"}
            style={{ marginHorizontal: 10 }}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor={GREY_COLOR_CODE}
            style={styles.catgSearchInput}
            onFocus={() => handleOnSearch()}
            value={searchData?.search_category_or_business}
            onChangeText={(txt) => {
              setSearchData({
                ...searchData,
                search_category_or_business: txt,
              });
              searchValues(searchData);
              if (txt != "") {
                getCategories({
                  address: searchData?.address,
                  search_category_or_business: txt,
                });
              } else {
                setSearchCategory({
                  resBusdata: [],
                  resultCat: [],
                });
              }
            }}
          />
        </View>
        {searchOpen ? renderCategories() : null}
        {searchOpen ? (
          <>
            <View style={styles.catgSearchVw}>
              <View style={CommonStyles.locationIcon}>
                <IconX
                  origin={ICON_TYPE.SIMPLELINE}
                  color={GREY_COLOR_CODE}
                  name={"location-pin"}
                />
              </View>
              <AddressInput
                onPress={(data, details = null) => {
                  setSearchData({
                    ...searchData,
                    address: data.description,
                    latitude: details?.geometry?.location?.lat,
                    longitude: details?.geometry?.location?.lng,
                  });
                  searchValues(searchData);
                }}
                onChangeText={(txt) => {
                  if (txt === "") {
                    setSearchData({
                      ...searchData,
                      address: "",
                    });
                    searchValues(searchData);
                  } else {
                    searchValues(searchData);
                    setSearchData({
                      ...searchData,
                      address: txt ? txt : searchData?.address,
                    });
                  }
                }}
                value={searchData?.address}
              />
            </View>
            <Button
              buttonText={"Search"}
              buttonLabelStyle={{ color: WHITE_COLOR_CODE }}
              style={styles.searchButtonVw}
              paddingHeight={8}
              width={"100%"}
              onPress={() => onSearchData(searchData)}
            />
          </>
        ) : null}
      </View>
    </Pressable>
  );
};

export default SearchView;
