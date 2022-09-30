import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import styles from "./styles";
import Header from "../../../../Components/Header";
import CommonStyles from "../../../../Utils/CommonStyles";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
const JobManagementList = (props) => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? 'padding' : null}
    style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        HeaderText={"My Jobs"}
        leftImg={require("../../../../Assets/hamburger_icon.png")}
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
            source={require("../../../../Assets/job_list_icon.png")}
          />
          <Text style={styles.JobDscrptn}>Create Job</Text>
        </View>
        <Image
          style={styles.PlusImge}
          resizeMode={"contain"}
          source={require("../../../../Assets/qty_plus_icon.png")}
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
            source={require("../../../../Assets/job_list_icon.png")}
          />
          <Text style={styles.JobDscrptn}>Applied Jobs</Text>
        </View>
        <Image
          style={styles.listImg}
          resizeMode={"contain"}
          source={require("../../../../Assets/listmenucopy.png")}
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
