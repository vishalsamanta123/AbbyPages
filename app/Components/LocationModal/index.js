import { View, Text, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import MainHeader from "../MainHeader";
import Slider from "@react-native-community/slider";
import { COLORS } from "../../Utils/Constant";
import CommonStyles from "../../Utils/CommonStyles";
import styles from "./styles";
import ScaleText from "../ScaleText";
import MainButton from "../MainButton";
import AddressInput from "../AddressInput";
import { ICON_TYPE, IconX } from "../Icons/Icon";
import PageScroll from "../PageScroll";

const LocationModal = (props) => {
  const {
    visible,
    setVisible,
    value,
    searchData,
    setSearchData,
    getProductList,
  } = props;

  return (
    <Modal
      visible={visible}
      onRequestClose={() => setVisible(false)}
      style={{ flex: 1 }}
    >
      <MainHeader
        isSearch={false}
        headerText={"Set location"}
        loginButton={false}
        onPressBack={() => setVisible(false)}
      />
      <View style={styles.inputVw}>
        <AddressInput
          leftImgOrigin={ICON_TYPE.SIMPLELINE}
          iconTop={22}
          paddingVertical={1}
          leftImgColor={COLORS.GREY}
          leftImgName={"location-pin"}
          header={false}
          onPress={(data, details = null) => {
            setSearchData({
              ...searchData,
              address: data.description,
              latitude: details?.geometry?.location?.lat,
              longitude: details?.geometry?.location?.lng,
            });
          }}
          onChangeText={(txt) => {
            if (txt === "") {
              setSearchData({
                ...searchData,
                address: "",
                latitude: "",
                longitude: "",
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
      <View style={styles.sliderView}>
        <View style={styles.headingView}>
          <ScaleText style={styles.headingTxt}>Custom Radius</ScaleText>
          <ScaleText style={styles.descTxt}>
            Only show me listings within a specific distance
          </ScaleText>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Slider
            style={{ width: "70%", height: 50 }}
            minimumValue={1}
            step={1}
            maximumValue={250}
            minimumTrackTintColor={COLORS.BLUE}
            maximumTrackTintColor={COLORS.BLUE}
            thumbTintColor={COLORS.BLUE}
            onValueChange={(sliderValue) =>
              setSearchData({
                ...searchData,
                radius: sliderValue,
              })
            }
            value={Number(searchData?.radius)}
          />
          <ScaleText>{Number(searchData?.radius).toFixed(0)} Miles</ScaleText>
        </View>
      </View>
      <View style={{ marginHorizontal: 50, marginBottom: 20 }}>
        <MainButton
          buttonTxt={"Apply"}
          onPressButton={() => getProductList({...searchData, radius: searchData.radius})}
          borderColor={COLORS.YELLOW}
          txtColor={COLORS.WHITE}
          backgroundColor={COLORS.YELLOW}
          borderRadius={10}
          paddingHeight={9}
          paddingHorizontal={35}
        />
      </View>
      {/* </PageScroll> */}
    </Modal>
  );
};

export default LocationModal;
