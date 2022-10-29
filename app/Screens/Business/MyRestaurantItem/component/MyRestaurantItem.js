import React from "react";
import {
  ScrollView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "../../../../Components/Header";
import CommonStyles from "../../../../Utils/CommonStyles";
import styles from "./styles";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";

const MyRestaurantItemView = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="My Restaurants"
        RightImg={null}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <View style={styles.categoriesvwe}>
        <View style={styles.categoriestxtvwe}>
          <Text style={styles.MainHeadText}>Categories</Text>
        </View>
        <TouchableOpacity
          style={styles.dlteaddvwe}
          onPress={(deleteType) => props.onPressEditCategory(deleteType)}
        >
          <Image
            style={styles.penciliconszedlt}
            source={Images.EDIT_PENCIL_IMG}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dlteaddvwe}
          onPress={() => props.onPressAddCategory()}
        >
          <Image
            style={styles.iconszedlt}
            source={Images.QTY_MINUS_IMG}
          />
        </TouchableOpacity>
        {/* 
                 
                   */}
      </View>
      <View style={{ height: 60 }}>
        {props.getItemList.length >= 0 ? (
          <FlatList
            data={props.getCategoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => props._renderCategory(item, index)}
          />
        ) : (
          <View
            style={{
              height: 60,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>There is no Category data</Text>
          </View>
        )}
      </View>
      <ScrollView>
        {props.getCategoryList ? (
          <View style={styles.MainContainer}>
            <View
              style={{
                paddingBottom: 15,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.MainHeadText}>Items</Text>
              <TouchableOpacity onPress={() => props.onPressItem()}>
                <Image
                  style={{ width: 35, height: 35 }}
                  source={Images.QTY_MINUS_IMG}
                />
              </TouchableOpacity>
            </View>
            {props.getItemList.length > 0 ? (
              <FlatList
                data={props.getItemList}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) =>
                  props._handleSandwichDish(item, index)
                }
              />
            ) : (
              <View
                style={{
                  height: 200,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18 }}>There is no item data </Text>
              </View>
            )}
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};
export default MyRestaurantItemView;
