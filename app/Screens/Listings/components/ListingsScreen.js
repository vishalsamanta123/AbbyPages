import React from "react";
import { View, FlatList, KeyboardAvoidingView, Text } from "react-native";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import styles from "./styles";

const ListingsScreen = (props) => {
  return (
    <KeyboardAvoidingView style={CommonStyles.container}>
      <Header
        RightImg={require("../../../Assets/map_list_icon.png")}
        HeaderText={""}
        onPress={() => props.onPressMap()}
        textInput={true}
        placeholder={"Tea Rooms Current..."}
        onChangeText={(searchKey) => props.setInputSearch(searchKey)}
        type="Map"
        logoImg={false}
      />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={props.restroList}
        ListEmptyComponent={() => {
          return (
            <View style={styles.emptyConVw}>
              <Text style={styles.emptyConTxt}>No Restaurant is available</Text>
            </View>
          );
        }}
        ListFooterComponent={() => {
          return <View style={{ height: 50 }} />;
        }}
        renderItem={({ item, index }) => props._handleSerivces(item, index)}
        onEndThreshold={0}
        onEndReached={() => {
          props.search || props.inputSearch
            ? !props.stopOffset
              ? props?.handleSearchData(
                  props.restroList.length > 5 ? props.offSet + 1 : 0
                )
              : null
            : !props.stopOffset
            ? props?.handleRestroList(
                props.restroList.length > 5 ? props.offSet + 1 : 0
              )
            : null;
        }}
      />
    </KeyboardAvoidingView>
  );
};
export default ListingsScreen;
