import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import { GREY_COLOR_CODE, WHITE_COLOR_CODE } from "../../Utils/Constant";
import AddressInput from "../AddressInput";
import { staticSearchOptions } from "../../Utils/staticData";
import Button from "../Button";
import CommonStyles from "../../Utils/CommonStyles";

const SearchView = (props) => {
  const { resBusdata = [], resultCat = [] } = props;
  const renderCategories = () => {
    return (
      <>
        {resBusdata?.length > 0 || resultCat?.length > 0 ? (
          <View style={styles.categoriesVw}>
            {resBusdata?.length > 0 ? (
              <>
                <Text style={styles.searchHeadTxt}>Related Businesses:</Text>
                {resBusdata?.map((itm) => {
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
            {resultCat?.length > 0 ? (
              <>
                <Text style={styles.searchHeadTxt}>Related Categories:</Text>
                {resultCat?.map((itm) => {
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
                  <Text style={styles.categoryTxt}>{item.category_name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </>
    );
  };
  return (
    <View>
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
            // onFocus={() => setCategoryShow(true)}
            value={""}
            editable={false}
            onChangeText={(txt) => {
              //   getCategories(txt === "" ? "" : txt);
            }}
          />
        </View>
      </View>
      {/* {categoryShow ? renderCategories() : null} */}
      <View style={styles.searchVw}>
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
              });
            }}
            onChangeText={(txt) => {
              // if (txt === "") {
              //   setSearchData({
              //     ...searchData,
              //     address: "",
              //   });
              // } else {
              //   setSearchData({
              //     ...searchData,
              //     address: txt ? txt : searchData?.address,
              //   });
              // }
            }}
            // value={searchData?.address}
          />
        </View>
      </View>
      <Button
        buttonText={"Search"}
        buttonLabelStyle={{ color: WHITE_COLOR_CODE }}
        style={styles.searchButtonVw}
        paddingHeight={8}
        width={"92%"}
        // onPress={() => handleListNavigation(searchData)}
      />
    </View>
  );
};

export default SearchView;
