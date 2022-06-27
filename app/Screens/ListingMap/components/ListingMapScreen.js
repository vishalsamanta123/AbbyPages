import React from "react";
import {
  View,
  StatusBar,
  KeyboardAvoidingView,
  ImageBackground,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Styles from "./styles";
import {
  WHITE_COLOR_CODE,
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
} from "../../../Utils/Constant";

const ListingMapScreen = (props) => {
  return (
    <View style={CommonStyles.container}>
      <MapView
        showsUserLocation
        style={StyleSheet.absoluteFillObject}
        provider={PROVIDER_GOOGLE}
        initialRegion={props.initialRegion}
      >
        {props?.businessDataList?.map((item) => (
          <Marker
            // image={require('../../../Assets/abby_pages_map_icon.png')}
            title={
              props.business_type === 1
                ? item.business_name
                : props.business_type === 2
                ? item.companyname
                : props.business_type === 3
                ? item.business_name
                : null
            }
            coordinate={{
              latitude: Number(item.latitude),
              longitude: Number(item.longitude),
            }}
          >
            <Image
              source={require("../../../Assets/abby_pages_map_icon.png")}
              style={{ height: 50, width: 50 }}
              resizeMode="contain"
              resizeMethod="auto"
            />
            <MapView.Callout>
              <TouchableOpacity
                style={Styles.openRestoVw}
                onPress={() => props.onPressRestro(item)}
              >
                <Text>Open</Text>
              </TouchableOpacity>
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
                        image={require('../../../Assets/login_logo.png')}
                        // title={props.businessName}
                        // description={'gfyj'}
                    /> */}
      </MapView>
      <View style={Styles.header}>
        <View style={Styles.headerBackBtnCon}>
          <TouchableOpacity onPress={() => props.onPressBack()}>
            <Image source={require("../../../Assets/header_back_btn.png")} />
          </TouchableOpacity>
        </View>
        <View style={Styles.headerMiddleCon}>
          <View style={Styles.iptCon}>
            <View style={Styles.searchIconCon}>
              <Image
                source={require("../../../Assets/search_field_icon.png")}
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
              source={require("../../../Assets/listmenucopy.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ListingMapScreen;
