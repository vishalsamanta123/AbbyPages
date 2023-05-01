import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
  Pressable,
  Keyboard,
} from "react-native";
import styles from "./styles";
import { IconX, ICON_TYPE } from "../../../../Components/Icons/Icon";
import { COLORS } from "../../../../Utils/Constant";
import CommonStyles from "../../../../Utils/CommonStyles";
import Button from "../../../../Components/Button";
import BoxContainers from "../../../../Components/BoxContainer";
import { Images } from "../../../../Utils/images";
import { apiCall } from "../../../../Utils/httpClient";
import apiEndPoints from "../../../../Utils/apiEndPoints";
import { staticSearchOptions } from "../../../../Utils/staticData";
import AddressInput from "../../../../Components/AddressInput";
import ScaleText from "../../../../Components/ScaleText";

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
    const newObject = {
      ...data,
      city: searchData?.address,
    };
    setSearchModal(false);
    setCategoryShow(false);
    navigation.navigate("BusinessPageListing", { nearbySearch: newObject });
  };
  const handleDetailNavigation = (data) => {
    setSearchModal(false);
    setCategoryShow(false);
    navigation.navigate("BusinessPageDetails", { detail: data });
  };
  const renderCategories = () => {
    return (
      <>
        {searchCategory?.resBusdata?.length > 0 ||
        searchCategory?.resultCat?.length > 0 ? (
          <View style={styles.categoriesVw}>
            {searchCategory?.resBusdata?.length > 0 ? (
              <>
                <ScaleText style={styles.searchHeadTxt}>
                  Related Businesses:
                </ScaleText>
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
                        <ScaleText style={styles.categoryTxt}>
                          {itm?.business_name}
                        </ScaleText>
                        <ScaleText style={styles.categorySmallTxt}>
                          {itm?.address}
                        </ScaleText>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </>
            ) : null}
            {searchCategory?.resultCat?.length > 0 ? (
              <>
                <ScaleText style={styles.searchHeadTxt}>
                  Related Categories:
                </ScaleText>
                {searchCategory?.resultCat?.map((itm) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setSearchData({
                          ...searchData,
                          category_id: itm.id,
                          business_type: itm?.business_type?.toString(),
                          search_category_or_business: itm.category_name,
                        });
                        setCategoryShow(false);
                      }}
                      style={styles.categoryVw}
                    >
                      <ScaleText style={styles.categoryTxt}>
                        {itm?.category_name}
                      </ScaleText>
                    </TouchableOpacity>
                  );
                })}
              </>
            ) : null}
          </View>
        ) : (
          <View style={styles.categoriesVw}>
            {staticSearchOptions?.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => handleListNavigation(item)}
                  style={styles.categoryVw}
                >
                  <IconX
                    origin={item.origin}
                    name={item.name}
                    size={item.size}
                    color={item.color}
                  />
                  <ScaleText style={styles.categoryTxt}>
                    {item.category_name}
                  </ScaleText>
                </TouchableOpacity>
              );
            })}
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
          <View style={[CommonStyles.straightCon]}>
            <View style={styles.ctgTopHeader}>
              <ScaleText style={styles.searchTxt}>Search</ScaleText>
            </View>
            <TouchableOpacity
              style={styles.crossVw}
              onPress={() => setSearchModal(false)}
            >
              <IconX
                origin={ICON_TYPE.ENTYPO}
                color={COLORS.COMMON}
                name={"circle-with-cross"}
                size={40}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.searchVw}>
            <ScaleText style={styles.titlesTxt}>What</ScaleText>
            <View style={styles.catgSearchVw}>
              <IconX
                origin={ICON_TYPE.OCTICONS}
                color={COLORS.GREY}
                name={"search"}
                style={{ marginHorizontal: 10 }}
              />
              <ScaleTextInput
                placeholder="Search"
                placeholderTextColor={COLORS.GREY}
                style={styles.catgSearchInput}
                onFocus={() => setCategoryShow(true)}
                value={searchData?.search_category_or_business}
                onChangeText={(txt) => {
                  getCategories(txt === "" ? "" : txt);
                }}
              />
            </View>
          </View>
          {categoryShow ? renderCategories() : null}
          <View style={styles.searchVw}>
            <ScaleText style={[styles.titlesTxt, { marginTop: 0 }]}>
              Where
            </ScaleText>
            <View style={styles.catgSearchVw}>
              <View style={CommonStyles.locationIcon}>
                <IconX
                  origin={ICON_TYPE.SIMPLELINE}
                  color={COLORS.GREY}
                  name={"location-pin"}
                />
              </View>
              <AddressInput
                onPress={(data, details = null) => {
                  setSearchData({
                    ...searchData,
                    address: data.description,
                  });
                }}
                onChangeText={(txt) => {
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
                }}
                value={searchData?.address}
              />
            </View>
          </View>
          <View style={styles.searchVw}>
            <Button
              buttonText={"Search"}
              buttonLabelStyle={{ color: COLORS.WHITE }}
              style={styles.searchButtonVw}
              onPress={() => handleListNavigation(searchData)}
            />
          </View>
          <ScaleText style={styles.searchTxt}>
            Or Browse the highlight
          </ScaleText>
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
