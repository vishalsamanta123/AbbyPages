import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./styles";
import Header from "../../../../Components/Header";
import CommonStyles from "../../../../Utils/CommonStyles";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";

const JobManagementList = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
      <Header
        RightImg={null}
        HeaderText={"My Jobs"}
        leftImg={Images.DRAWER_IMG}
        type="Drawer"
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <TouchableOpacity
        style={styles.moreOptionVw}
        onPress={() => props.onPressAdd(1)}
      >
        <View style={styles.moreOptionInnrVw}>
          <Image
            resizeMode={"contain"}
            style={{ width: 28, height: 28 }}
            source={Images.JOB_LIST_IMG}
          />
          <Text style={styles.JobDscrptn}>Create Job</Text>
        </View>
        <Image
          style={styles.PlusImge}
          resizeMode={"contain"}
          source={Images.QTY_PLUS_IMG}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.moreOptionVw}
        onPress={() => props.onPressAdd(2)}
      >
        <View style={styles.moreOptionInnrVw}>
          <Image
            resizeMode={"contain"}
            style={{ width: 28, height: 28 }}
            source={Images.JOB_LIST_IMG}
          />
          <Text style={styles.JobDscrptn}>Applied Jobs</Text>
        </View>
        <Image
          style={styles.listImg}
          resizeMode={"contain"}
          source={Images.LIST_IMG}
        />
      </TouchableOpacity>
      <View style={styles.manageVw}>
        <Text style={styles.JobDscrptn}>Manage Jobs -</Text>
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={props?.businessJobList}
        renderItem={({ item, index }) => props._handleTableData(item, index)}
      />
    </KeyboardAvoidingView>
  );
};
export default JobManagementList;
