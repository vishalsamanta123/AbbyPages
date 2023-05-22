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
import { COLORS } from "../../Utils/Constant";
import AddressInput from "../AddressInput";
import { staticSearchOptions } from "../../Utils/staticData";
import Button from "../Button";
import CommonStyles from "../../Utils/CommonStyles";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import apiEndPoints from "../../Utils/apiEndPoints";
import { apiCall } from "../../Utils/httpClient";
import MainInput from "../MainInput";

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
  const [listOpen, setListOpen] = useState(false);
  const [searchCategory, setSearchCategory] = useState({
    resBusdata: [],
    resultCat: [],
  });
  const [searchData, setSearchData] = useState({
    search_category_or_business: "",
    address: "Orlando, FL, USA",
  });
  console.log("searchData: ", searchData);

  const handleDetailNavigation = (data) => {
    setSearchOpen(false);
    setListOpen(false);
    navigation.navigate("BusinessPageDetails", { detail: data });
  };
  useFocusEffect(
    React.useCallback(() => {
      getHistorySearch();
    }, [navigation, searchOpen])
  );
  const getHistorySearch = async () => {
    const historySearch = await AsyncStorage.getItem("searchCategoryHistory");
    if (JSON?.parse(historySearch)) {
      setSearchHistory(JSON?.parse(historySearch)?.reverse());
    }
  };

  const getCategories = async (itemData) => {
    setSearchData({ ...itemData });
    const params = {
      search_category_or_business: itemData?.search_category_or_business
        ? itemData?.search_category_or_business
        : "",
      address: itemData?.address ? itemData?.address : "",
    };
    try {
      const { data } = await apiCall(
        "POST",
        apiEndPoints.BUSINESSLISTBYCATG,
        params
      );
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
      setSearchOpen(false);
      setListOpen(false);
      const catSearchNew = [...searchHistory];
      const objNew = {
        category_name: searchData?.search_category_or_business,
      };
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
  const onPressCat = (itm) => {
    const newObject = {
      ...itm,
      address: searchData?.address,
      search_category_or_business: itm?.category_name,
    };
    setSearchData({ ...newObject });
    setListOpen(false);
  };

  const handleOnSearch = () => {
    setSearchOpen(true);
    setListOpen(true);
  };

  const renderCategories = () => {
    return (
      <View style={styles.categoriesVw}>
        {searchHistory?.length > 0 && Array?.isArray(searchHistory)
          ? searchHistory?.map((itm) => {
              return (
                <TouchableOpacity
                  onPress={() => onPressCat(itm)}
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
                      onPress={() => onPressCat(itm)}
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
                  onPress={() => onPressCat(item)}
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
        setListOpen(false);
        Keyboard.dismiss();
      }}
    >
      <View style={styles.searchVw}>
        <TouchableOpacity
          onPress={() => setSearchOpen(searchOpen ? false : true)}
        >
          <MainInput
            leftImgOrigin={ICON_TYPE.OCTICONS}
            leftImgColor={COLORS.GREY}
            leftImgName={"search"}
            height={50}
            header={false}
            onFocus={() => handleOnSearch()}
            placeholder="Search"
            placeholderTextColor={COLORS.GREY}
            value={searchData?.search_category_or_business}
            onChangeText={(txt) => {
              setSearchData({
                ...searchData,
                search_category_or_business: txt,
              });
              if (txt != "") {
                getCategories({
                  ...searchData,
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
        </TouchableOpacity>
        {searchOpen && listOpen ? renderCategories() : null}
        {searchOpen ? (
          <>
            <AddressInput
              leftImgOrigin={ICON_TYPE.SIMPLELINE}
              leftImgColor={COLORS.GREY}
              leftImgName={"location-pin"}
              header={false}
              marginTop={3}
              paddingVertical={2}
              iconTop={15}
              value={searchData?.address ? searchData?.address : ""}
              placeholderTextColor={COLORS.GREY}
              onPress={(data, details = null) => {
                setSearchData({
                  ...searchData,
                  address: data.description,
                  latitude: details?.geometry?.location?.lat,
                  longitude: details?.geometry?.location?.lng,
                });
              }}
              onChangeText={(txt) => {
                setSearchData({
                  ...searchData,
                  address: txt ? txt : searchData?.address,
                });
              }}
            />
            <Button
              buttonText={"Search"}
              buttonLabelStyle={{ color: COLORS.WHITE }}
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
