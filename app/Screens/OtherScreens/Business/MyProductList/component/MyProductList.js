import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import Header from "../../../../Components/Header";
import CommonStyles from "../../../../Utils/CommonStyles";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";

const MyProductListView = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="My Product"
        RightImg={null}
        leftImg={Images.DRAWER_IMG}
        type="Drawer"
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <View style={styles.MainContainer}>
          <TouchableOpacity
            style={styles.moreOptionVw}
            onPress={() => props.onPressItem()}
          >
            <View style={styles.moreOptionInnrVw}>
              <Image
                resizeMode={"contain"}
                style={{ width: 28, height: 28 }}
                source={Images.PRODUCT_ORDER_IMG}
              />
              <Text style={styles.productTxt}>Product</Text>
            </View>
            <Image
              style={styles.listImg}
              resizeMode={"contain"}
              source={Images.QTY_PLUS_IMG}
            />
          </TouchableOpacity>
          <FlatList
            data={props.productListData}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) =>
              props._handleSandwichDish(item, index)
            }
            ListEmptyComponent={() => {
              return (
                <View
                  style={{
                    height: 200,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 18 }}>There is no item data </Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default MyProductListView;
