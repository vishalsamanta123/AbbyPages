import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import Header from "../../../../Components/Header";
import CommonStyles from "../../../../Utils/CommonStyles";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import {
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
const MyProductListView = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="My Product"
        RightImg={null}
        leftImg={require("../../../../Assets/hamburger_icon.png")}
        type="Drawer"
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <ScrollView>
          <View style={styles.MainContainer}>
            <View
              style={{
                paddingBottom: 15,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.MainHeadText}>Product</Text>
              <TouchableOpacity onPress={() => props.onPressItem()}>
                <Image
                  style={{ width: 35, height: 35 }}
                  source={require("../../../../Assets/qty_minus_icon3.png")}
                />
              </TouchableOpacity>
            </View>
            {props.productListData.length > 0 ? (
              <FlatList
                data={props.productListData}
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
        </ScrollView>
      </View>
    </View>
  );
};
export default MyProductListView;
