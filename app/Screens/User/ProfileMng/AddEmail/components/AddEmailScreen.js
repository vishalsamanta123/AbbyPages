import React from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import OTPTextView from "react-native-otp-textinput";
import styles from "./styles";
import Button from "../../../../../Components/Button";
import CommonStyles from "../../../../../Utils/CommonStyles";
import { FONT_SIZE, COLORS, FONT_FAMILY } from "../../../../../Utils/Constant";
import MainHeader from "../../../../../Components/MainHeader";
import MainInput from "../../../../../Components/MainInput";
import ScaleText from "../../../../../Components/ScaleText";
import PageScroll from "../../../../../Components/PageScroll";

const AddEmailScreen = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
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
            backgroundColor: COLORS.WHITE,
            justifyContent: "center",
          },
        ]}
      >
        <PageScroll keyboardShouldPersistTaps={"always"}>
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
              <ScaleText style={{ textAlign: "center", paddingBottom: 15 }}>
                Please Enter Otp
              </ScaleText>
              <OTPTextView
                handleTextChange={(val) => props.setOtp(val)}
                tintColor={COLORS.YELLOW}
                containerStyle={{ alignSelf: "center" }}
                textInputStyle={{
                  borderWidth: 2,
                  color: COLORS.BLACK,
                  fontFamily: FONT_FAMILY.REGULAR,
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
        </PageScroll>
      </View>
    </KeyboardAvoidingView>
  );
};
export default AddEmailScreen;
