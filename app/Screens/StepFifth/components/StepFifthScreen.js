import React from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import Button from "../../../Components/Button";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import Input from "../../../Components/Input";
import {
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../Utils/Constant";

const StepFifthScreen = (props) => {
  return (
    <KeyboardAvoidingView style={[CommonStyles.container]}>
      <ScrollView>
        <Header
          leftImg={require("../../../Assets/close_window_icon.png")}
          HeaderText="4 of 8"
          RightImg={null}
          MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
          tintColor={BLACK_COLOR_CODE}
          mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
        />
        <View style={styles.maintxtVwe}>
          <Text style={styles.maintxt}>Enter Details</Text>
        </View>
        <View style={styles.emailview}>
          <View style={styles.emailtxtview}>
            <Text style={styles.bussinessinfotxt}>
              You'll get responses through Abby here. Bussineses will not see
              you contact information
            </Text>
          </View>
          <View style={styles.inputwvwe}>
            <Input
              onChangeText={(email) =>
                props.setLocalUserData({
                  ...props.localUserData,
                  email: email,
                })
              }
              value={props?.localUserData?.email}
              secureTextEntry={false}
              InputType="withScroll"
              placeholder="Enter email"
            />
            <Input
              onChangeText={(mobile) =>
                props.setLocalUserData({
                  ...props.localUserData,
                  mobile: mobile,
                })
              }
              value={props?.localUserData?.mobile}
              secureTextEntry={false}
              maxLength={10}
              InputType="withScroll"
              placeholder="Phone"
              keyboardType={"number-pad"}
            />
            <Input
              onChangeText={(user_name) =>
                props.setLocalUserData({
                  ...props.localUserData,
                  user_name: user_name,
                })
              }
              value={props?.localUserData?.user_name}
              secureTextEntry={false}
              InputType="withScroll"
              placeholder="UserName"
            />
          </View>
        </View>

        <View style={styles.fifht}>
          <Text style={styles.fifhttxt}>
            By proceeding, you agree to our
            <Text style={styles.yellowtxt}> Terms of Service </Text>
            and <Text style={styles.pptxt}>Privacy Policy.</Text>
          </Text>
        </View>
        <View style={styles.footervwe}>
          <TouchableOpacity
            onPress={() => props.goBack()}
            style={styles.boximgvwe}
          >
            <View style={styles.imgvwe}>
              <Image
                style={{ height: 58, width: 60 }}
                source={require("../../../Assets/Group1672.png")}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.lstbtnvwe}>
            <Button
              buttonText="Next"
              style={styles.btnvwe}
              buttonLabelStyle={styles.startedbtntxt}
              onPress={props.onPressStepSix}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default StepFifthScreen;
