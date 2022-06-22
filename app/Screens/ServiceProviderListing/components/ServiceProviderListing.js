import React from "react";
import { View, FlatList, StatusBar, KeyboardAvoidingView } from "react-native";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
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
        onChangeText={(searchKey) => props.searchService(searchKey)}
        logoImg={false}
      />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={props.serviceData}
        renderItem={({ item, index }) => props._handleSerivces(item, index)}
      />
    </KeyboardAvoidingView>
  );
};
export default ServiceProviderListing;
