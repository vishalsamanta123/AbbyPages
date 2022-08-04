import React from "react";
import {
  View,
  FlatList,
  StatusBar,
  KeyboardAvoidingView,
  Text,
} from "react-native";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import styles from "./styles";
const ServiceProviderListing = (props) => {
  return (
    <KeyboardAvoidingView style={[CommonStyles.container]}>
      <Header
        RightImg={require("../../../Assets/map_list_icon.png")}
        HeaderText={""}
        onPress={() => props.onPressMap()}
        placeholder={"Developer Plumber..."}
        textInput={true}
        type="Map"
        onChangeText={(searchKey) => props.setInputSearch(searchKey)}
        logoImg={false}
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
        onEndReached={() => {
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
      />
    </KeyboardAvoidingView>
  );
};
export default ServiceProviderListing;
