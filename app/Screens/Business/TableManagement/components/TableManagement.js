import React from "react";
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
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
const TableManagement = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
      <Header
        RightImg={null}
        HeaderText={"Table Management List"}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <TouchableOpacity
        style={styles.PlusView}
        onPress={() => props.onPressAddTable()}
      >
        <Text style={styles.topTxt}>Add Tables</Text>
        <Image
          style={styles.PlusImge}
          source={require("../../../../Assets/qty_minus_icon3.png")}
        />
      </TouchableOpacity>
      {props.tableData.length > 0 ? (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={props.tableData}
          renderItem={({ item, index }) => props._handleTableData(item, index)}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 20 }}>There is no table data.</Text>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};
export default TableManagement;
