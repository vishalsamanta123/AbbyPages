import React from "react";
import { View, FlatList, StatusBar, KeyboardAvoidingView } from "react-native";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../Utils/Constant";
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
        MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
        onChangeText={(searchKey) => props.searchService(searchKey)}
      />
      <View style={[CommonStyles.body]}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={props.serviceData}
          renderItem={({ item, index }) => props._handleSerivces(item, index)}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default ServiceProviderListing;
