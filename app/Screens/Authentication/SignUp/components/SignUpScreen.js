import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  Platform
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
  BLACK_COLOR_CODE,
} from "../../../../Utils/Constant";
import Header from "../../../../Components/Header";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const SignUpScreen = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    const value = moment(date).format("MM/DD/YYYY");
    props.setRegistrationData({
      ...props.registrationData,
      birth_date: value,
    });
    hideDatePicker();
  };
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : null}
    style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        HeaderText=""
        HeaderMiddleImg={require("../../../../Assets/login_logo.png")}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <ScrollView
        keyboardShouldPersistTaps={"always"}
        contentContainerStyle={{ flexGrow: 1 }}
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
              // secureTextEntry={false}
              placeholder="Password"
              InputType="withScroll"
            />
            <Input
              onChangeText={(zip_code) =>
                props.setRegistrationData({
                  ...props.registrationData,
                  zip_code: zip_code,
                })
              }
              value={props.registrationData.zip_code}
              secureTextEntry={false}
              placeholder="Zip Code"
              keyboardType="number-pad"
              InputType="withScroll"
            />
            {/* <Input
                                onChangeText={(birth_date) => props.setRegistrationData({
                                    ...props.registrationData,
                                    birth_date: birth_date
                                })}
                                value={props.registrationData.birth_date}
                                secureTextEntry={false}
                                placeholder="Birthday"
                                InputType="withScroll"
                            /> */}
            <TouchableOpacity
              onPress={() => showDatePicker()}
              style={{
                padding: 22,
                borderColor: "#d8d8d8",
                borderWidth: 1,
                borderRadius: 12,
                flexDirection: "row",
                margin: 10,
                marginLeft: 15,
                marginRight: 15,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15, fontFamily: FONT_FAMILY_REGULAR }}>
                {props.registrationData.birth_date === ""
                  ? "Select a Date"
                  : props.registrationData.birth_date}
              </Text>
              <Image
                resizeMode={"contain"}
                style={{ height: 24, width: 24, alignSelf: "flex-end" }}
                source={require("../../../../Assets/calendar_icon_field.png")}
              />
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              maximumDate={new Date()}
            />
            <View style={styles.addressVw}>
              <GooglePlacesAutocomplete
                placeholder="Address"
                fetchDetails={true}
                onPress={(data, details = null) => {
                  props.setRegistrationData({
                    ...props.registrationData,
                    address: details.formatted_address,
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                  });
                }}
                value={props.registrationData.address}
                query={{
                  key: "AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM",
                  language: "en",
                }}
                textInputProps={{
                  placeholderTextColor: BLACK_COLOR_CODE,
                  onChangeText: (e) => {
                    props.setRegistrationData({
                      ...props.registrationData,
                      address: e,
                    });
                  },
                  value: props.registrationData.address,
                }}
                styles={{
                  textInputContainer: {
                    fontSize: 15,
                    fontFamily: FONT_FAMILY_REGULAR,
                    color: BLACK_COLOR_CODE,
                  },
                  textInput: {
                    fontSize: 15,
                    color: BLACK_COLOR_CODE,
                    fontFamily: FONT_FAMILY_REGULAR,
                  },
                  listView: {
                    backgroundColor: WHITE_COLOR_CODE,
                  },
                }}
                minLength={2}
                autoFocus={false}
                returnKeyType={"default"}
              />
            </View>
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <Button
            buttonText="Sign Up"
            buttonLabelStyle={styles.LoginBtnTxt}
            onPress={props.onPressSingUp}
          />
          {/* <Button
            buttonText="Continue with Facebook"
            buttonLabelStyle={styles.FacebookBtnTxt}
            style={styles.FacebookBtnStyle}
            onPress={props.onPressFacebook}
          />
          <Button
            buttonText="Continue with Google"
            buttonLabelStyle={styles.LoginBtnTxt}
            onPress={props.onPressGoogle}
            style={styles.GoogleBtnStyle}
          /> */}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default SignUpScreen;
