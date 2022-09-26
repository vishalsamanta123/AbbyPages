import React from "react";
import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import styles from "./styles";
import Button from "../../../Components/Button";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import Input from "../../../Components/Input";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../Utils/Constant";

const StepSixScreen = (props) => {
  return (
    <KeyboardAvoidingView style={[CommonStyles.container]}>
      <Header
        leftImg={require("../../../Assets/close_window_icon.png")}
        HeaderText="6 of 8"
        RightImg={null}
        MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
        <View style={styles.maintxtVwe}>
          <Text style={styles.maintxt}>What is your name ?</Text>
        </View>
        <View style={styles.inputwvwe}>
          <Input
            onChangeText={(ZipCode) => props.setZipCode(ZipCode)}
            value={props.ZipCode}
            secureTextEntry={false}
            placeholder="First Name"
            InputType="withScroll"
          />
        </View>
      </View>
      <View style={styles.footervwe}>
        <View style={styles.boximgvwe}>
          <View style={styles.imgvwe}>
            <TouchableOpacity>
              <Image
                style={{ height: 58, width: 60 }}
                source={require("../../../Assets/Group1672.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.lstbtnvwe}>
          <Button
            buttonText="Next"
            style={styles.btnvwe}
            buttonLabelStyle={styles.startedbtntxt}
            onPress={props.onPressStepSeven}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default StepSixScreen;
