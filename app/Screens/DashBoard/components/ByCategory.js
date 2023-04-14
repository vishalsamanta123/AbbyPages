import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  Image,
  Pressable,
  Keyboard,
} from "react-native";
import styles from "./styles";
import { IconX, ICON_TYPE } from "../../../Components/Icons/Icon";
import {
  GREY_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  MAP_KEY,
  WHITE_COLOR_CODE,
} from "../../../Utils/Constant";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import CommonStyles from "../../../Utils/CommonStyles";
import Button from "../../../Components/Button";
import BoxContainers from "../../../Components/BoxContainer";
import { Images } from "../../../Utils/images";
import { apiCall } from "../../../Utils/httpClient";
import apiEndPoints from "../../../Utils/apiEndPoints";
import {
  accountantObj,
  autoRepairsObj,
  offerTakeoutObj,
  openDeliveryObj,
  plumbersObj,
  restaurantObj,
} from "../../../Utils/staticData";

const ByCategory = (props) => {
  const { searchModal, setSearchModal, navigation } = props;

  const [categoryShow, setCategoryShow] = useState(false);
  const [searchCategory, setSearchCategory] = useState({
    resBusdata: [],
    resultCat: [],
  });
  const [searchData, setSearchData] = useState({
    search_category_or_business: "",
    address: "Orlando, FL, USA",
  });

  const getCategories = async (itemData) => {
    if (itemData === "") {
      setSearchCategory({
        resBusdata: [],
        resultCat: [],
      });
      setSearchData({
        search_category_or_business: "",
        address: "Orlando, FL, USA",
      });
    } else {
      setSearchData({
        ...searchData,
        search_category_or_business: itemData,
      });
      const params = {
        search_category_or_business: itemData ? itemData : "",
        address: searchData?.address,
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
    }
  };
  const handleListNavigation = (data) => {
    const newObject = { ...data, city: searchData?.address };
    setSearchModal(false);
    setCategoryShow(false);
    if (data?.business_type === 1) {
      navigation.navigate("RestaurantListing", { nearbySearch: newObject });
    } else if (data?.business_type === 3) {
      navigation.navigate("ServiceProviderListing", {
        nearbySearch: newObject,
      });
    }
  };
  const handleDetailNavigation = (data) => {
    if (data?.business_type?.toString() === "1") {
      navigation.navigate("BusineesPage");
    }
  };
  const renderCategories = () => {
    return (
      <>
        {searchCategory?.resBusdata?.length > 0 ||
        searchCategory?.resultCat?.length > 0 ? (
          <View style={styles.categoriesVw}>
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
            {searchCategory?.resBusdata?.length > 0 ? (
              <>
                <Text style={styles.searchHeadTxt}>Related Categories:</Text>
                {searchCategory?.resultCat?.map((itm) => {
                  return (
                    <TouchableOpacity style={styles.categoryVw}>
                      <Text style={styles.categoryTxt}>
                        {itm?.category_name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </>
            ) : null}
          </View>
        ) : (
          <View style={styles.categoriesVw}>
            <TouchableOpacity
              onPress={() => handleListNavigation(restaurantObj)}
              style={styles.categoryVw}
            >
              <IconX
                origin={ICON_TYPE.ICONICONS}
                name={"restaurant"}
                size={22}
                color={LIGHT_BLACK_COLOR_CODE}
              />
              <Text style={styles.categoryTxt}>Restaurant</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleListNavigation(openDeliveryObj)}
              style={styles.categoryVw}
            >
              <IconX
                origin={ICON_TYPE.MATERIAL_ICONS}
                name={"delivery-dining"}
                size={22}
                color={LIGHT_BLACK_COLOR_CODE}
              />
              <Text style={styles.categoryTxt}>Delivery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleListNavigation(offerTakeoutObj)}
              style={styles.categoryVw}
            >
              <IconX
                origin={ICON_TYPE.FEATHER_ICONS}
                name={"shopping-bag"}
                size={22}
                color={LIGHT_BLACK_COLOR_CODE}
              />
              <Text style={styles.categoryTxt}>Offer Takeout</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleListNavigation(accountantObj)}
              style={styles.categoryVw}
            >
              <IconX
                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                name={"badge-account-outline"}
                size={22}
                color={LIGHT_BLACK_COLOR_CODE}
              />
              <Text style={styles.categoryTxt}>Accountants</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleListNavigation(plumbersObj)}
              style={styles.categoryVw}
            >
              <IconX
                origin={ICON_TYPE.MATERIAL_ICONS}
                name={"plumbing"}
                size={22}
                color={LIGHT_BLACK_COLOR_CODE}
              />
              <Text style={styles.categoryTxt}>Plumbers</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleListNavigation(autoRepairsObj)}
              style={styles.categoryVw}
            >
              <IconX
                origin={ICON_TYPE.ICONICONS}
                name={"ios-settings"}
                size={22}
                color={LIGHT_BLACK_COLOR_CODE}
              />
              <Text style={styles.categoryTxt}>Auto Repairs</Text>
            </TouchableOpacity>
          </View>
        )}
      </>
    );
  };

  return (
    <Modal
      onRequestClose={() => {
        setSearchModal(false);
        setCategoryShow(false);
      }}
      visible={searchModal}
    >
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        contentContainerStyle={styles.searchModal}
      >
        <Pressable
          onPress={() => {
            setCategoryShow(false);
            Keyboard.dismiss();
          }}
        >
          <TouchableOpacity
            onPress={() => setSearchModal(false)}
            style={styles.crossVw}
          >
            <IconX
              origin={ICON_TYPE.ENTYPO}
              color={LINE_COMMON_COLOR_CODE}
              name={"circle-with-cross"}
              size={40}
            />
          </TouchableOpacity>
          <Text style={styles.searchTxt}>Search</Text>
          <View style={styles.searchVw}>
            <Text style={styles.titlesTxt}>What</Text>
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
                onFocus={() => setCategoryShow(true)}
                onChangeText={(txt) => {
                  getCategories(txt === "" ? "" : txt);
                }}
              />
            </View>
          </View>
          {categoryShow ? renderCategories() : null}
          <View style={styles.searchVw}>
            <Text style={[styles.titlesTxt, { marginTop: 0 }]}>Where</Text>
            <View style={styles.catgSearchVw}>
              <View style={CommonStyles.locationIcon}>
                <IconX
                  origin={ICON_TYPE.SIMPLELINE}
                  color={GREY_COLOR_CODE}
                  name={"location-pin"}
                />
              </View>
              <GooglePlacesAutocomplete
                placeholder="Search Place"
                fetchDetails={true}
                onPress={(data, details = null) => {
                  setSearchData({
                    ...searchData,
                    address: data.description,
                  });
                }}
                textInputProps={{
                  placeholderTextColor: GREY_COLOR_CODE,
                  onChangeText: (txt) => {
                    if (txt === "") {
                      setSearchData({
                        ...searchData,
                        address: "",
                      });
                    } else {
                      setSearchData({
                        ...searchData,
                        address: txt ? txt : searchData?.address,
                      });
                    }
                  },
                  value: searchData?.address,
                }}
                query={{
                  key: MAP_KEY,
                  language: "en",
                }}
                styles={CommonStyles.locSearchVw}
                minLength={2}
                autoFocus={false}
                returnKeyType={"default"}
              />
            </View>
          </View>
          <View style={styles.searchVw}>
            <Button
              buttonText={"Search"}
              buttonLabelStyle={{ color: WHITE_COLOR_CODE }}
              style={styles.searchButtonVw}
            />
          </View>
          <Text style={styles.searchTxt}>Or Browse the highlight</Text>
          <View style={styles.boxesVw}>
            <BoxContainers
              boxContainerImg={Images.MINICAR_IMG}
              boxContainerTxt={"Directory"}
              marginHorizontal={10}
            />
            <BoxContainers
              boxContainerImg={Images.EVENT_LIST_IMG}
              boxContainerTxt={"Events"}
              marginHorizontal={10}
            />
            <BoxContainers
              boxContainerImg={Images.JOB_LIST_IMG}
              boxContainerTxt={"Jobs"}
              marginHorizontal={10}
            />
            <BoxContainers
              boxContainerImg={Images.SHOPP_LIST_IMG}
              boxContainerTxt={"MarketPlace"}
              marginHorizontal={10}
            />
            <BoxContainers
              boxContainerImg={Images.RESTO_LIST_IMG}
              boxContainerTxt={"Restaurants"}
              marginHorizontal={10}
            />
          </View>
        </Pressable>
      </ScrollView>
    </Modal>
  );
};

export default ByCategory;
