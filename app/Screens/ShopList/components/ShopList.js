import React, { useState } from "react";
import { View, FlatList, KeyboardAvoidingView } from "react-native";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
const ShopList = (props) => {
  const [scrollBegin, setScrollBegin] = useState();
  return (
    <KeyboardAvoidingView style={[CommonStyles.container]}>
      <Header
        RightImg={require("../../../Assets/map_list_icon.png")}
        HeaderText={""}
        onPress={() => props.onPressMap()}
        textInput={true}
        placeholder={"Search Shop"}
        onChangeText={(searchKey) => props.setInputSearch(searchKey)}
        type="Map"
        logoImg={false}
      />
      <View style={[CommonStyles.body, { padding: 10 }]}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={props.shopList}
          onMomentumScrollBegin={() => setScrollBegin(true)}
          onMomentumScrollEnd={() => setScrollBegin(false)}
          renderItem={({ item, index }) => props._handleShopList(item, index)}
          onEndReached={({ distanceFromEnd }) => {
            if (distanceFromEnd <= 0.5) {
              (scrollBegin && props.search) || props.inputSearch
                ? !props.stopOffset
                  ? props?.handleSearchData(props.offSet + 1)
                  : null
                : !props.stopOffset
                ? props?.handleShopList(
                    props.shopList.length > 5 ? props.offSet + 1 : props.offSet
                  )
                : null;
            }
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default ShopList;
