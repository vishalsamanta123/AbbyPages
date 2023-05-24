import React from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import OTPTextView from "react-native-otp-textinput";
import styles from "./styles";
import Input from "../../../../../Components/Input";
import Button from "../../../../../Components/Button";
import Header from "../../../../../Components/Header";
import CommonStyles from "../../../../../Utils/CommonStyles";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  FONT_SIZE,
} from "../../../../../Utils/Constant";
import MainHeader from "../../../../../Components/MainHeader";
import MainInput from "../../../../../Components/MainInput";

const AddEmailScreen = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
      {/* <Header
        RightImg={null}
        HeaderText={"Add a new Email"}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      /> */}
      <MainHeader
        headerText={"Add a new Email"}
        fontSize={FONT_SIZE.medium}
        notifyIcon={false}
        TxtMarginRight={"15%"}
      />
      <View
        style={[
          CommonStyles.body,
          {
            paddingTop: "20%",
            backgroundColor: WHITE_COLOR_CODE,
            justifyContent: "center",
          },
        ]}
      >
        <ScrollView keyboardShouldPersistTaps={"always"}>
          {props.verifyEmail === "" ? (
            <>
              <View style={{ marginHorizontal: 20 }}>
                <MainInput
                  onChangeText={(email) =>
                    props.setAddEmail({
                      ...props.addEmail,
                      email: email,
                    })
                  }
                  value={props.addEmail && props.addEmail.email}
                  secureTextEntry={false}
                  placeholder="Email"
                  keyboardType="email-address"
                  InputType="withScroll"
                />
              </View>
              <Button
                buttonText="Save Changes"
                buttonLabelStyle={styles.SaveBtnTxt}
                onPress={props.onPressSave}
                style={{ marginTop: 5 }}
                paddingHeight={10}
              />
            </>
          ) : (
            <>
              <Text style={{ textAlign: "center", paddingBottom: 15 }}>
                Please Enter Otp
              </Text>
              <OTPTextView
                handleTextChange={(val) => props.setOtp(val)}
                tintColor={YELLOW_COLOR_CODE}
                containerStyle={{ alignSelf: "center" }}
                textInputStyle={{
                  borderWidth: 2,
                  color: BLACK_COLOR_CODE,
                  fontFamily: FONT_FAMILY_REGULAR,
                  borderBottomWidth: 2,
                }}
                inputCount={4}
                inputCellLength={1}
              />
              <Button
                buttonText="Confirm"
                buttonLabelStyle={styles.logtxt}
                onPress={() => props._handleOtpVerify()}
                paddingHeight={10}

              />
            </>
          )}

          <Button
            buttonText="Cancel"
            buttonLabelStyle={styles.CancelBtnTxt}
            onPress={props.onPressCancelBtn}
            style={styles.CancelBtnStyle}
            paddingHeight={10}
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default AddEmailScreen;
