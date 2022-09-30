import React from "react";
import {
  View,
 Platform,
  ScrollView,
  FlatList,
  Text,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  WHITE_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  BLACK_COLOR_CODE,
} from "../../../Utils/Constant";
const { width, height } = Dimensions.get("window");
const RestaurantMenuScreen = (props) => {
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? 'padding' : null}
    style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        HeaderText={"Restaurant Menu"}
        MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <ScrollView>
          <View style={styles.Mainconatiner}>
            <Text style={styles.HeadingView}>Dashi Stock</Text>
          </View>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={props.handleDashiStock}
            renderItem={({ item, index }) =>
              props._handleDashiStock(item, index)
            }
          />
          <View style={styles.Mainconatiner}>
            <Text style={styles.HeadingView}>Vegetable Selection</Text>
          </View>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={props.handleDashiStock}
            renderItem={({ item, index }) =>
              props._handleVegetableSelect(item, index)
            }
          />
          <View style={styles.Mainconatiner}>
            <Text style={styles.HeadingView}>What's Popular Here?</Text>
          </View>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={props.handleDashiStock}
            renderItem={({ item, index }) => props._handlePopular(item, index)}
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default RestaurantMenuScreen;
