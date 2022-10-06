import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  Platform
} from "react-native";
import styles from "./styles";
import Header from "../../../../Components/Header";
import CommonStyles from "../../../../Utils/CommonStyles";
import {
  SMALL_TEXT_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import moment from "moment";

const AppliedJob = (props) => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? 'padding' : null}
    style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        HeaderText={"Applied Jobs"}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={props?.businessJobList}
        renderItem={({ item, index }) => {
          const date = moment(item?.create_order).format("MM/DD/YYYY");
          return (
            <View style={styles.MainContain}>
              <View>
                <Text style={styles.titleTypTxt}>Job Id - {item.order_id}</Text>
                <Text style={styles.mainTxt}>
                  Job Type - {item.order_booking_type_text}
                </Text>
                <View style={styles.straightVw}>
                  <Text style={styles.titleTypTxt}>Job Status -</Text>
                  <Text style={styles.otherTxt}>
                    {item.order_status === 0 && " Pending"}
                    {item.order_status === 1 && " Accepted"}
                    {item.order_status === 2 && " In Process"}
                    {item.order_status === 3 && " Cancelled By User"}
                    {item.order_status === 4 && " Cancelled By Business"}
                    {item.order_status === 5 && " Completed"}
                  </Text>
                </View>
                <View style={styles.straightVw}>
                  <Text style={styles.titleTypTxt}>Create Date - </Text>
                  <Text
                    style={[styles.otherTxt, { color: SMALL_TEXT_COLOR_CODE }]}
                  >
                    {date}
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => props.navToDetailPage(item)}>
                <Image
                  style={{ width: 30, height: 30, marginRight: 8 }}
                  source={require("../../../../Assets/arrow_right_icon.png")}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </KeyboardAvoidingView>
  );
};
export default AppliedJob;
