import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./styles";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
  BLACK_COLOR_CODE,
} from "../../../Utils/Constant";
const AddPhotosScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
      <Header
        RightImg={null}
        HeaderText={"Add Photos"}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <View style={styles.ContainerStyle}>
        <Text style={styles.AddPhotosText}>Add Photos</Text>
        <TouchableOpacity style={styles.BrowseImgeView}>
          <Image source={require("../../../Assets/upload_icon_box.png")} />
          <Text style={[styles.AddPhotosText, { color: YELLOW_COLOR_CODE }]}>
            Browse Files
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default AddPhotosScreen;
