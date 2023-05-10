import { View, Text, TouchableOpacity, Keyboard } from "react-native";
import React from "react";
import MainInput from "../../../../../Components/MainInput";
import ScaleText from "../../../../../Components/ScaleText";
import styles from "./styles";

const FilterField = (props) => {
  return (
    <View style={{ marginTop: 6, marginHorizontal: 12 }}>
      <MainInput
        headTxt={"Any Keyword..."}
        placeholder={"Search here..."}
        // onChangeText={(txt) => {
        //   props.setFilterData({
        //     ...props.filterData,
        //     job_title: txt,
        //   });
        // }}
        // value={props?.filterData?.job_title}
      />
      <MainInput
        placeholder={"Search here..."}
        headTxt={"City..."}
        // onChangeText={(txt) => {
        //   props.setFilterData({
        //     ...props.filterData,
        //     city_name: txt,
        //   });
        // }}
        // value={props?.filterData?.city_name}
      />
      <TouchableOpacity
        onPress={() => {
          if (
            props.filterData?.city_name != "" ||
            props.filterData?.job_title != ""
          ) {
            // props.handleJobFilter(0, {
            //   ...props?.filterData,
            // });
            // Keyboard.dismiss();
          }
        }}
        style={styles.searchBttn}
      >
        <ScaleText style={styles.searchBttnTxt}>Search</ScaleText>
      </TouchableOpacity>
    </View>
  );
};

export default FilterField;
