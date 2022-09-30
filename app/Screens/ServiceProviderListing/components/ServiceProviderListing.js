import React from "react";
import {
  View,
  FlatList,
  StatusBar,
  KeyboardAvoidingView,
  Text,
  Platform
} from "react-native";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../Utils/Constant";
import styles from "./styles";
const ServiceProviderListing = (props) => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? 'padding' : null}
    style={[CommonStyles.container]}>
      <Header
        RightImg={require("../../../Assets/map_list_icon.png")}
        HeaderText={""}
        onPress={() => props.onPressMap()}
        placeholder={"Developer Plumber..."}
        textInput={true}
        type="Map"
        onChangeText={(searchKey) => props.setInputSearch(searchKey)}
        logoImg={false}
        MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={props.serviceData}
        ListEmptyComponent={() => {
          return (
            <View style={styles.emptyConVw}>
              <Text style={styles.emptyConTxt}>No Service is available</Text>
            </View>
          );
        }}
        renderItem={({ item, index }) => props._handleSerivces(item, index)}
        onEndReached={({ distanceFromEnd }) => {
          console.log("distanceFromEnd: ", distanceFromEnd);

          props.search || props.inputSearch
            ? !props.stopOffset
              ? props?.handleSearchData(
                  props.serviceData.length > 5 ? props.offSet + 1 : props.offSet
                )
              : null
            : !props.stopOffset
            ? props?.handleServiceList(
                props.serviceData.length > 5 ? props.offSet + 1 : props.offSet
              )
            : null;
        }}
        // onEndReachedThreshold={0.1}
      />
    </KeyboardAvoidingView>
  );
};
export default ServiceProviderListing;
