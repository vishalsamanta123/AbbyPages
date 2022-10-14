import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from "react-native";
import styles from "./styles";
import Header from "../../../../Components/Header";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";

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
            <Image style={styles.iconimg} source={Images.ROUND_CHECK_IMG} />
          )}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : null}
      style={styles.container}
    >
      <Header
        HeaderText="Service List"
        RightImg={Images.OTHER_CHECK_IMG}
        type="serviceids"
        onPress={() => props.onClickRightIcon()}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
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
