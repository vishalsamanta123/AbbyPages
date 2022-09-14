import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import Header from "../../../Components/Header";
import Button from "../../../Components/Button";
import CommonStyles from "../../../Utils/CommonStyles";
import { WHITE_COLOR_CODE, YELLOW_COLOR_CODE } from "../../../Utils/Constant";

const StripeConnect = (props) => {
  return (
    <KeyboardAvoidingView style={CommonStyles.container}>
      <Header
        RightImg={null}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        leftImg={
          props.type === "busniess" || props.type === "Edit_event"
            ? require("../../../Assets/header_back_btn.png")
            : require("../../../Assets/hamburger_icon.png")
        }
        HeaderText={
          props.type === "busniess"
            ? "Create Event"
            : props.type === "Edit_event"
            ? "Edit Event"
            : "Submit an Event"
        }
        type={`${props.type !== "busniess" && "Drawer"}`}
      />
      <ScrollView keyboardShouldPersistTaps="always">
        {props.type === "busniess" && <></>}
        <View style={styles.twoBttnsVw}>
          <Button
            buttonText={"Back"}
            style={styles.bttnBackVw}
            onPress={() => props.setFormView(props.formView - 1)}
          />
          <Button
            buttonText={"Publish Event"}
            style={styles.bttnNotwoVw}
            onPress={() => props.onPressNextForm()}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default StripeConnect;
