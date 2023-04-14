import React, { useState } from "react";
import { View, FlatList, KeyboardAvoidingView, Platform } from "react-native";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import { WHITE_COLOR_CODE } from "../../../Utils/Constant";
import { Images } from "../../../Utils/images";
const ShopList = (props) => {
  const [scrollBegin, setScrollBegin] = useState();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
      <Header
        RightImg={Images.MAP_LIST_IMG}
        HeaderText={""}
        onPress={() => props.onPressMap()}
        textInput={true}
        placeholder={"Search Shop"}
        onChangeText={(searchKey) => props.setInputSearch(searchKey)}
        type="Map"
        tintColor={WHITE_COLOR_CODE}
        logoImg={false}
      />
      <View style={[CommonStyles.body, { padding: 10 }]}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={props.shopList}
          onMomentumScrollBegin={() => setScrollBegin(true)}
          renderItem={({ item, index }) => props._handleShopList(item, index)}
          onEndReached={() => {
            if (scrollBegin) {
              if (props.search || props.inputSearch) {
                !props.stopOffset
                  ? props?.handleSearchData(
                      props.shopList.length > 5
                        ? props.offSet + 1
                        : props.offSet
                    )
                  : null;
                setScrollBegin(false);
              }
            }
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default ShopList;
