import { View, Text, TouchableOpacity, Keyboard } from "react-native";
import React from "react";
import MainInput from "../../../../../Components/MainInput";
import ScaleText from "../../../../../Components/ScaleText";
import styles from "./styles";

const FilterField = (props) => {
  const {
    searchData,
    setSearchData,
    getProductList
  } = props
  return (
    <View style={{ marginTop: 6, marginHorizontal: 12 }}>
      <MainInput
        headTxt={"Any Keyword..."}
        placeholder={"Search here..."}
        height={50}
        onChangeText={(txt) => {
          setSearchData({
            ...searchData,
            search_product: txt,
          });
        }}
        value={searchData?.search_product}
      />

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MainInput
          placeholder={"Search here..."}
          headTxt={"Price..."}
          height={50}
          flex={1}
          leftTextPlaceholder={"$"}
          marginHorizontal={10}
          onChangeText={(txt) => {
            setSearchData({
              ...searchData,
              min_price: txt,
            });
          }}
          value={searchData?.min_price}
        />
        <MainInput
          placeholder={"Search here..."}
          headTxt={"To..."}
          height={50}
          flex={1}
          leftTextPlaceholder={"$"}
          marginHorizontal={10}

          onChangeText={(txt) => {
            setSearchData({
              ...searchData,
              max_price: txt,
            });
          }}
          value={searchData?.max_price}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          if (
            searchData?.search_product != "" ||
            searchData?.min_price != "" ||
            searchData?.max_price != "" 
          ) {
            getProductList(searchData);
            Keyboard.dismiss();
          } else {
            getProductList({});
          }
        }}
        style={styles.searchBttn}
      >
        <ScaleText style={styles.searchBttnTxt}>Search</ScaleText>
      </TouchableOpacity>
    </View>
  );
};

export default FilterField;
