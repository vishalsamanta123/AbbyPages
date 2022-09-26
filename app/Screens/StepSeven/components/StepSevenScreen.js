import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import styles from "./styles";
import Button from "../../../Components/Button";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  BLACK_COLOR_CODE,
} from "../../../Utils/Constant";

const StepSevenScreen = (props) => {
  return (
    <KeyboardAvoidingView style={CommonStyles.container}>
      <Header
        leftImg={require("../../../Assets/close_window_icon.png")}
        HeaderText="5 of 8"
        RightImg={null}
        MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.maintxtVwe}>
          <Text style={styles.maintxt}>
            Would you like to compare quotes from similar bussinesses ?
          </Text>
        </View>
        <View style={styles.firsttextvwe}>
          <Text style={styles.firstxt}>
            You can share your project details with other recommended
            bussinesses to help choose the one that's right for you.
          </Text>
        </View>
        <View style={styles.centerbtntxt}>
          <TouchableOpacity
            onPress={() =>
              props.setServiceProvideType(!props.service_provide_type)
            }
            style={[
              styles.choiceVw,
              {
                backgroundColor: props.service_provide_type
                  ? YELLOW_COLOR_CODE
                  : WHITE_COLOR_CODE,
                borderWidth: !props.service_provide_type ? 1 : 0,
              },
            ]}
          >
            <Text style={styles.choiceTxt}>Yes, get multiple quotes</Text>
            {props.service_provide_type && (
              <Image source={require("../../../Assets/check_icon_btn.png")} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              props.setServiceProvideType(!props.service_provide_type)
            }
            style={[
              styles.choiceVw,
              {
                backgroundColor: !props.service_provide_type
                  ? YELLOW_COLOR_CODE
                  : WHITE_COLOR_CODE,
                borderWidth: props.service_provide_type ? 1 : 0,
              },
            ]}
          >
            <Text style={styles.choiceTxt}>No,don't get multiple quotes</Text>
            {!props.service_provide_type && (
              <Image source={require("../../../Assets/check_icon_btn.png")} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.footervwe}>
          <View style={styles.boximgvwe}>
            <View style={styles.imgvwe}>
              <TouchableOpacity onPress={props.goBack}>
                <Image
                  style={styles.mainboximg}
                  source={require("../../../Assets/Group1672.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.lstbtnvwe}>
            <Button
              buttonText="Send requests"
              style={styles.btnvwe}
              buttonLabelStyle={styles.startedbtntxt}
              onPress={props.onPressStepEight}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default StepSevenScreen;
