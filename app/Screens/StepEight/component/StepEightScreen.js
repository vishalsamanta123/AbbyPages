import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import Button from "../../../Components/Button";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../Utils/Constant";

const StepSevenScreen = (props) => {
  return (
    <KeyboardAvoidingView style={[CommonStyles.container]}>
      <Header
        leftImg={require("../../../Assets/close_window_icon.png")}
        HeaderText="8 of 8"
        RightImg={null}
        MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <ScrollView>
          <View style={styles.bigmainvwe}>
            <View style={{ flex: 2 }}>
              <View style={styles.firstimgvwe}>
                <Image
                  style={styles.congratulationsimg}
                  source={require("../../../Assets/success_icon.png")}
                />
              </View>
              <View style={styles.maintxtimg}>
                <Text style={styles.firstlinetxt}>
                  {" "}
                  Your request has been sent!{" "}
                </Text>
                <Text style={styles.frstlinesmltxt}>
                  BV Electric and other bussiness have recieved your request.
                </Text>
              </View>
            </View>
            <View style={styles.centerlinvwe}></View>
            <View style={styles.bdymnvwe}>
              <View style={styles.scrollablevwe}>
                <Text style={styles.whtastxt}>What's next</Text>
                <View style={styles.btnvwe}>
                  <Button
                    buttonText="Yes, get multiple quotes    "
                    buttonLabelStyle={styles.startedbtntxt}
                    RightBtnImage={require("../../../Assets/check_icon_btn.png")}
                    // onPress={props.onPressStepfourth}
                  />
                </View>
              </View>
              <View style={styles.frstmnbxvwe}>
                <Text style={styles.viaemailtxt}>
                  You'll get a response via email, usally within 24 hours.
                  You'll get a response via email, usally within 24 hours.
                </Text>
              </View>
              <View style={styles.secmanvwe}>
                <Text style={styles.hiretxt}>
                  Hire the bussiness that's right for you. Hire the bussiness
                  that's right for you.
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Button
                buttonText="Got It"
                buttonLabelStyle={styles.startedbtntxt}
                onPress={props.onPressServiceprovdet}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default StepSevenScreen;
