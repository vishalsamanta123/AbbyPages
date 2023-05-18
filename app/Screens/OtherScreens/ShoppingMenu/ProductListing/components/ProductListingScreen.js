import React from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from "react-native";
import CommonStyles from "../../../../Utils/CommonStyles";
import styles from "./styles";
import Header from "../../../../Components/Header";
import { WHITE_COLOR_CODE, YELLOW_COLOR_CODE } from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";

const ProductListingScreen = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="Product"
        RightImg={Images.CART_ADDED_IMG}
        onPress={() => props.onPressCart()}
        cartLength={props?.shoppingCartData?.length}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
      />
      <View style={CommonStyles.body}>
        <View style={styles.inputconmn}>
          <View style={styles.inputconsmall}>
            <Image source={Images.SEARCH_IMG} />
            <TextInput
              placeholder="Search"
              onChangeText={(searchKey) => props.SearchProduct(searchKey)}
              style={styles.searchInput}
            />
          </View>
          <TouchableOpacity
            onPress={() => props.onPressFilter()}
            style={styles.filtericonCon}
          >
            <Image source={Images.FILTER_IMG} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={props.productList}
            numColumns={2}
            extraData={props.reload}
            ListEmptyComponent={() => {
              return (
                <View style={styles.emptyVw}>
                  <Text style={styles.emptyTxt}>No Data Found</Text>
                </View>
              );
            }}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) =>
              props._renderProductList(item, index)
            }
          />
        </View>
      </View>
    </View>
  );
};
export default ProductListingScreen;
