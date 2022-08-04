import React from "react";
import { View, FlatList, KeyboardAvoidingView } from "react-native";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
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
      <View style={[CommonStyles.container]}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={props.restroList}
          ListEmptyComponent={() => {
            return (
              <View style={styles.emptyConVw}>
                <Text style={styles.emptyConTxt}>
                  No Restaurant is available
                </Text>
              </View>
            );
          }}
          renderItem={({ item, index }) => props._handleSerivces(item, index)}
          onEndReached={() => {
            props.search || props.inputSearch
              ? !props.stopOffset
                ? props?.handleSearchData(
                    props.restroList.length > 5
                      ? props.offSet + 1
                      : props.offSet
                  )
                : null
              : !props.stopOffset
              ? props?.handleRestroList(
                  props.restroList.length > 5 ? props.offSet + 1 : props.offSet
                )
              : null;
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default ListingsScreen;
