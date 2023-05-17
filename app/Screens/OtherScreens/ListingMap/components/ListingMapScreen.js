import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import CommonStyles from "../../../Utils/CommonStyles";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Styles from "./styles";
import {
  WHITE_COLOR_CODE,
  BLACK_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import { Images } from "../../../Utils/images";

const ListingMapScreen = (props) => {
  return (
    <>
      <StatusBar
        backgroundColor={YELLOW_COLOR_CODE}
        barStyle="dark-content"
        animated={true}
      />
      <View style={CommonStyles.container}>
        <MapView
          showsUserLocation
          style={StyleSheet.absoluteFillObject}
          provider={PROVIDER_GOOGLE}
          initialRegion={props.initialRegion}
        >
          {props?.businessDataList?.map((item) => (
            <Marker
              // image={Images.MAP_LOGO}
              title={
                props.business_type === 1
                  ? item.business_name
                  : props.business_type === 2
                    ? item.business_name
                    : props.business_type === 3
                      ? item.business_name
                      : props.business_type === 5
                        ? item.company_name
                        : null
              }
              coordinate={{
                latitude: Number(item.latitude),
                longitude: Number(item.longitude),
              }}
            >
              <Image
                source={Images.MAP_LOGO}
                style={{ height: 50, width: 50 }}
                resizeMode="contain"
                resizeMethod="auto"
              />
              <MapView.Callout onPress={() => props.onPressRestro(item)}>
                <View style={Styles.openRestoVw}>
                  <Text style={Styles.openRestoTxt}>Open</Text>
                </View>
              </MapView.Callout>
            </Marker>
          ))}
          {/* <Marker
                        coordinate={
                            props.businessDataList.map((item) => {
                                'latitude' = item.latitude
                                'longitude' = item.longitude
                            })
                        }
                        // coordinate={props.coordinate}
                        image={Images.MIDDLE_LOGO_IMG}
                        // title={props.businessName}
                        // description={'gfyj'}
                    /> */}
        </MapView>
        <View style={Styles.header}>
          <View style={Styles.headerBackBtnCon}>
            <TouchableOpacity onPress={() => props.onPressBack()}>
              <Image source={Images.HEADER_BCK_IMG} />
            </TouchableOpacity>
          </View>
          <View style={Styles.headerMiddleCon}>
            <View style={Styles.iptCon}>
              <View style={Styles.searchIconCon}>
                <Image
                  source={Images.SEARCH_IMG}
                />
              </View>
              <TextInput
                placeholder={"Tea Rooms Current..."}
                placeholderTextColor={BLACK_COLOR_CODE}
                style={Styles.iptStyles}
              />
            </View>
          </View>
          <View style={Styles.headerBackBtnCon}>
            <TouchableOpacity onPress={() => props.onPressDone()}>
              <Image
                tintColor={WHITE_COLOR_CODE}
                resizeMode="contain"
                style={{ height: 28, width: 28 }}
                source={Images.LIST_IMG}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
export default ListingMapScreen;
