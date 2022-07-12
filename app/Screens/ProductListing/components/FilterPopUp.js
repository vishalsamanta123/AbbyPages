import React, { useState } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import Dialog, {
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";
import CommonStyles from "../../../Utils/CommonStyles";
import Input from "../../../Components/Input";
import {
  FONT_FAMILY_REGULAR,
  YELLOW_COLOR_CODE,
  WHITE_COLOR_CODE,
  FONT_FAMILY_BOLD,
} from "../../../Utils/Constant";
import styles from "./styles";
import { Picker } from "@react-native-community/picker";

export default function FilterPopUp(props) {
  return (
    <View>
      <Dialog
        visible={props.filter}
        width={"100%"}
        height={"100%"}
        useNativeDriver={true}
        dialogAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        onTouchOutside={() => {
          props.closeModel();
        }}
        onHardwareBackPress={() => {
          props.closeModel();
        }}
      >
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={YELLOW_COLOR_CODE}
          translucent={false}
        />
        <View style={[CommonStyles.header, { justifyContent: "center" }]}>
          <TouchableOpacity
            onPress={() => props.closeModel()}
            style={styles.HeaderArrow}
          >
            <Image source={require("../../../Assets/header_back_btn.png")} />
          </TouchableOpacity>
          <View style={styles.HeaderViewMidle}>
            <Text style={styles.HeaderMiddleTxt}>Filter Jobs</Text>
          </View>
          <View style={styles.FilterImgeView}>
            <Image source={require("../../../Assets/filter_icon.png")} />
            <Image
              style={{ marginLeft: 5 }}
              source={require("../../../Assets/search_icon_header.png")}
            />
          </View>
        </View>
        <View style={styles.filterVw}>
          <View style={styles.container}>
            <Picker
              selectedValue={`${props.filterData.color}`}
              style={styles.pickerVw}
              onValueChange={(itemValue, itemIndex) =>
                props.setFilterData({
                  ...props.filterData,
                  color: itemValue,
                })
              }
            >
              <Picker.Item label="Color" />
              <Picker.Item label="Red" value="red" />
              <Picker.Item label="Blue" value="blue" />
            </Picker>
          </View>
        </View>
      </Dialog>
    </View>
  );
}
