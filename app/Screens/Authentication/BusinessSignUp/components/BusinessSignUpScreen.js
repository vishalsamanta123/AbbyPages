import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import styles from "./styles";
import Input from "../../../../Components/Input";
import Button from "../../../../Components/Button";
import CommonStyles from "../../../../Utils/CommonStyles";
import {
  WHITE_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import Header from "../../../../Components/Header";
const BusinessSignUp = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    const value = moment(date).format("DD-MM-YYYY");
    props.setRegistrationData({
      ...props.setRegistrationData,
      birth_date: value,
    });
    hideDatePicker();
  };
  return (
    <KeyboardAvoidingView style={CommonStyles.container}>
      <Header
        RightImg={null}
        HeaderText=""
        HeaderMiddleImg={require("../../../../Assets/login_logo.png")}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.WelcomeCntainer}>
          <View style={styles.MainConatinWelcome}>
            <Text style={styles.WelcomeTxt}>Create Account,</Text>
            <Text style={styles.SignInContinue}>Sign up to get started!</Text>
          </View>
          <View style={styles.InputContainer}>
            <Input
              // autoCapitalize={'characters'}
              onChangeText={(first_name) =>
                props.setRegistrationData({
                  ...props.registrationData,
                  first_name: first_name,
                })
              }
              value={props.registrationData.first_name}
              secureTextEntry={false}
              placeholder="First Name"
              InputType="withScroll"
            />
            <Input
              onChangeText={(last_name) =>
                props.setRegistrationData({
                  ...props.registrationData,
                  last_name: last_name,
                })
              }
              value={props.registrationData.last_name}
              secureTextEntry={false}
              placeholder="Last Name"
              InputType="withScroll"
            />
            <Input
              onChangeText={(email) =>
                props.setRegistrationData({
                  ...props.registrationData,
                  email: email,
                })
              }
              value={props.registrationData.email}
              secureTextEntry={false}
              keyboardType="email-address"
              placeholder="Email"
              InputType="withScroll"
              autoCapitalize="none"
            />
            <Input
              onChangeText={(password) =>
                props.setRegistrationData({
                  ...props.registrationData,
                  password: password,
                })
              }
              value={props.registrationData.password}
              secureTextEntry
              placeholder="Password"
              InputType="withScroll"
            />
            {/* <Input
                                onChangeText={(zip_code) => props.setRegistrationData({
                                    ...props.registrationData,
                                    zip_code: zip_code
                                })}
                                value={props.registrationData.zip_code}
                                secureTextEntry={false}
                                placeholder="Zip Code"
                                InputType="withScroll"
                            /> */}
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <Button
            buttonText="Sign Up"
            buttonLabelStyle={styles.LoginBtnTxt}
            onPress={props.onPressSingUp}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default BusinessSignUp;
