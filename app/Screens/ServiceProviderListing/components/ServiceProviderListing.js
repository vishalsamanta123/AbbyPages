import React, { useState } from "react";
import {
  View,
  FlatList,
  KeyboardAvoidingView,
  Text,
  Platform,
} from "react-native";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import { WHITE_COLOR_CODE, YELLOW_COLOR_CODE } from "../../../Utils/Constant";
import styles from "./styles";
const ServiceProviderListing = (props) => {
  const [scrollBegin, setScrollBegin] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
      <Header
        RightImg={require("../../../Assets/map_list_icon.png")}
        HeaderText={""}
        onPress={() => props.onPressMap()}
        placeholder={"Developer Plumber..."}
        textInput={true}
        type="Map"
        onChangeText={(searchKey) => props.setInputSearch(searchKey)}
        logoImg={false}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
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
        onMomentumScrollBegin={() => setScrollBegin(true)}
        onEndReached={() => {
          if (scrollBegin) {
            if (props.search || props.inputSearch) {
              setScrollBegin(false);
              !props.stopOffset
                ? props?.handleSearchData(
                    props.serviceData.length > 5
                      ? props.offSet + 1
                      : props.offSet
                  )
                : null;
            } else {
              setScrollBegin(false);
              !props.stopOffset
                ? props?.handleServiceList(
                    props.serviceData.length > 5
                      ? props.offSet + 1
                      : props.offSet
                  )
                : null;
            }
          }
        }}
        // onEndReachedThreshold={0.1}
      />
    </KeyboardAvoidingView>
  );
};
export default ServiceProviderListing;
