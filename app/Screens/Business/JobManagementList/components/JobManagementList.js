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
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
const JobManagementList = (props) => {
  return (
    <KeyboardAvoidingView style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        HeaderText={"My Jobs"}
        leftImg={require("../../../../Assets/hamburger_icon.png")}
        type="Drawer"
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={props?.businessJobList}
        ListHeaderComponent={() => {
          return (
            <>
              <TouchableOpacity
                style={styles.PlusView}
                onPress={() => props.onPressAdd()}
              >
                <Text style={styles.JobDscrptn}>Create Job</Text>
                <Image
                  style={styles.PlusImge}
                  resizeMode={"contain"}
                  source={require("../../../../Assets/add_location_icon.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.PlusView}
                // onPress={() => props.onPressAdd()}
              >
                <Text style={styles.JobDscrptn}>Applied Jobs</Text>
                <Image
                  style={styles.listImg}
                  resizeMode={"contain"}
                  source={require("../../../../Assets/listmenucopy.png")}
                />
              </TouchableOpacity>
            </>
          );
        }}
        renderItem={({ item, index }) => props._handleTableData(item, index)}
      />
    </KeyboardAvoidingView>
  );
};
export default JobManagementList;
