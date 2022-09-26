import React from "react";
import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import styles from "./styles";
import Input from "../../../../Components/Input";
import Button from "../../../../Components/Button";
import Header from "../../../../Components/Header";
import CommonStyles from "../../../../Utils/CommonStyles";
import { BLACK_COLOR_CODE, WHITE_COLOR_CODE } from "../../../../Utils/Constant";

const ForgotPassword = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : null}
      style={CommonStyles.container}
    >
      <Header
        HeaderText="Forgot Password"
        RightImg={null}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <ScrollView contentContainerStyle={styles.body}>
        <View style={{ flex: 1, paddingTop: 40 }}>
          <Text style={styles.registxt}>Please enter you registered</Text>
          <Text style={styles.emailtxt}>Email/Mobile number.</Text>
          <Input
            onChangeText={(email) => props.setEmail(email)}
            value={props.email}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Email"
            InputType="withScroll"
          />
        </View>
        {/* <View style={styles.txtipt}>
                    <Text
                        textAlignVertical={true}
                        style={labelStyle}>
                        Email/ Mobile
                    </Text>
                    <TextInput
                        style={styles.txtipttxt}
                        onFocus={props._handleFocusEmail}
                        onBlur={props._handleBlurEmail}
                        onChangeText={(text) => props.setEmail(text)}
                    />
                </View> */}
        <View style={{ flex: 1.3, marginBottom: 10 }}>
          <Button
            buttonText="Submit"
            style={styles.LinearGradient}
            buttonLabelStyle={styles.logtxt}
            onPress={() => props.submitbtn()}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default ForgotPassword;
