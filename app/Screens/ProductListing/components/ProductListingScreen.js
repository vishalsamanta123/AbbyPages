import React from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
import CommonStyles from "../../../Utils/CommonStyles";
import styles from "./styles";
import Header from "../../../Components/Header";
import { FONT_FAMILY_REGULAR } from "../../../Utils/Constant";

const ProductListingScreen = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="Product"
        RightImg={require("../../../Assets/cart_icon_header.png")}
        onPress={() => props.onPressCart()}
        cartLength={props.shoppingCartData.length}
      />
      <View style={[CommonStyles.body, {}]}>
        <View style={styles.inputconmn}>
          <View style={styles.inputconsmall}>
            <Image source={require("../../../Assets/search_field_icon.png")} />
            <TextInput
              placeholder="Search"
              onChangeText={(searchKey) => props.SearchProduct(searchKey)}
              style={{
                fontFamily: FONT_FAMILY_REGULAR,
                fontSize: 16,
                flex: 1,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => props.onPressFilter()}
            style={styles.filtericonCon}
          >
            <Image source={require("../../../Assets/filter_icon.png")} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={props.productList}
            numColumns={2}
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
