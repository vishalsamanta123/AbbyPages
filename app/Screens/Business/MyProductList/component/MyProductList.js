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
        <View style={styles.MainContainer}>
          <TouchableOpacity
            style={styles.moreOptionVw}
            onPress={() => props.onPressItem()}
          >
            <View style={styles.moreOptionInnrVw}>
              <Image
                resizeMode={"contain"}
                style={{ width: 28, height: 28 }}
                source={require("../../../../Assets/box.png")}
              />
              <Text style={styles.productTxt}>Product</Text>
            </View>
            <Image
              style={styles.listImg}
              resizeMode={"contain"}
              source={require("../../../../Assets/qty_plus_icon.png")}
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
