import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import styles from "./styles";
import Header from "../../../../Components/Header";
import { BLACK_COLOR_CODE, WHITE_COLOR_CODE } from "../../../../Utils/Constant";
function ServiceListScreen(props) {
  const _renderItems = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => props.onClickService(item, index)}
        style={styles.labelStyle}
      >
        <View
          style={{
            flex: 5.5,
            justifyContent: "center",
          }}
        >
          <Text style={styles.txt}>{item.service_name}</Text>
        </View>
        <View style={styles.lstimgvwe}>
          {item.isSelect == true && (
            <Image
              style={styles.iconimg}
              source={require("../../../../Assets/checked_circled_icon_box.png")}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Header
        HeaderText="Service List"
        RightImg={require("../../../../Assets/box_check_white_icon.png")}
        type="serviceids"
        onPress={() => props.onClickRightIcon()}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View style={styles.body}>
        <FlatList
          data={props.subCategoryList}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => _renderItems(item, index)}
        />
      </View>
      {/* </View> */}
    </KeyboardAvoidingView>
  );
}
export default ServiceListScreen;
