import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import Header from "../../../../Components/Header";
import CommonStyles from "../../../../Utils/CommonStyles";
import {
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../../Utils/Constant";
const JobManagementList = (props) => {
  return (
    <KeyboardAvoidingView style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        HeaderText={"My Jobs"}
        leftImg={require("../../../../Assets/hamburger_icon.png")}
        type="Drawer"
        MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
      />
      <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
        <TouchableOpacity
          style={styles.PlusView}
          onPress={() => props.onPressAdd()}
        >
          <Text style={styles.JobDscrptn}>Create Job</Text>
          <Image
            style={styles.PlusImge}
            source={require("../../../../Assets/qty_minus_icon3.png")}
          />
        </TouchableOpacity>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={props?.businessJobList}
          renderItem={({ item, index }) => props._handleTableData(item, index)}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default JobManagementList;
