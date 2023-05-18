import { View, Text, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import MainHeader from "../MainHeader";
import Slider from "@react-native-community/slider";
import { COLORS } from "../../Utils/Constant";
import CommonStyles from "../../Utils/CommonStyles";
import styles from "./styles";
import ScaleText from "../ScaleText";
import MapView, {
  Circle,
  Geojson,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
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
    getProductList
  } = props;
  const [pin, setPin] = useState({
    latitude: 22.7196,
    longitude: 75.8577,
  });

  console.log("🚀 ~ file: index.js:88 ~ searchData:", searchData);

  const myPlace = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [22.7196, 75.8577],
        },
      },
    ],
  };
  console.log("adddre");

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
      {/* <PageScroll keyboardShouldPersistTaps={'handled'}> */}

      {/* <View style={styles.mapView}>
        <MapView
          region={{
            latitude: 22.7196,
            longitude: 75.8577,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          // onRegionChange={this.onRegionChange}
          initialRegion={{
            latitude: 22.7196,
            longitude: 75.8577,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation
          style={StyleSheet.absoluteFillObject}
          provider={PROVIDER_GOOGLE}
        >
          <>
            <Circle
              style={StyleSheet.absoluteFillObject}
              radius={value * 1609}
              fillColor={COLORS.BLUE}
              center={{
                latitude: 22.7196,
                longitude: 75.8577,
              }}
              focusable
            />
          </>
        </MapView>
      </View> */}
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
          onPressButton={() => getProductList(searchData)}
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
