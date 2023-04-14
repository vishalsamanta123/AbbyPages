import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  Platform,
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
  GREEN_COLOR_CODE,
  LIGHT_RED_COLOR_CODE,
} from "../../../../Utils/Constant";
import Header from "../../../../Components/Header";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Images } from "../../../../Utils/images";
import { IconX, ICON_TYPE } from "../../../../Components/Icons/Icon";

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
    <>
      <Header
        RightImg={null}
        HeaderText=""
        HeaderMiddleImg={Images.LOGO}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        contentContainerStyle={CommonStyles.scrollCon}
      >
        <View style={styles.WelcomeCntainer}>
          <View style={styles.MainConatinWelcome}>
            <Text style={styles.WelcomeTxt}>Create Account,</Text>
            <Text style={styles.SignInContinue}>Sign up to get started!</Text>
          </View>
          <View style={styles.InputContainer}>
            <Input
              onChangeText={(txt) => {
                props.setRegistrationData({
                  ...props.registrationData,
                  user_name: txt,
                });
                props.checkUserName(txt);
                if (txt?.length <= 4) {
                  props.setUserValMessage({ message: "" });
                }
              }}
              value={props.registrationData.user_name}
              secureTextEntry={false}
              placeholder="User Name"
              onBlurPress={() => props.checkUserName(props.registrationData.user_name)}
              onFocusPress={() => {
                props.setUserValMessage({ message: "" });
              }}
              InputType="withScroll"
            />
            {props?.userValMessage?.message === "" ||
            props?.userValMessage?.message === null ? null : (
              <View style={styles.messageVw}>
                <IconX
                  origin={
                    props?.userValMessage?.status === 200
                      ? ICON_TYPE.FEATHER_ICONS
                      : ICON_TYPE.ENTYPO
                  }
                  size={20}
                  paddingRight={5}
                  name={
                    props?.userValMessage?.status === 200
                      ? "check-circle"
                      : "circle-with-cross"
                  }
                  color={
                    props?.userValMessage?.status === 200
                      ? GREEN_COLOR_CODE
                      : LIGHT_RED_COLOR_CODE
                  }
                />
                <Text
                  style={[
                    styles.messageTxt,
                    {
                      color:
                        props?.userValMessage?.status === 200
                          ? GREEN_COLOR_CODE
                          : LIGHT_RED_COLOR_CODE,
                    },
                  ]}
                >
                  {props?.userValMessage?.message}
                </Text>
              </View>
            )}
            <Input
              onChangeText={(txt) =>
                props.setRegistrationData({
                  ...props.registrationData,
                  first_name: txt,
                })
              }
              value={props.registrationData.first_name}
              secureTextEntry={false}
              placeholder="First Name"
              InputType="withScroll"
            />
            <Input
              onChangeText={(txt) =>
                props.setRegistrationData({
                  ...props.registrationData,
                  last_name: txt,
                })
              }
              value={props.registrationData.last_name}
              secureTextEntry={false}
              placeholder="Last Name"
              InputType="withScroll"
            />
            <Input
              onChangeText={(txt) =>
                props.setRegistrationData({
                  ...props.registrationData,
                  email: txt,
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
              onChangeText={(txt) =>
                props.setRegistrationData({
                  ...props.registrationData,
                  mobile: txt,
                })
              }
              value={props.registrationData.mobile}
              placeholder="Mobile"
              maxLength={10}
              keyboardType={"number-pad"}
              InputType="withScroll"
            />
            <Input
              onChangeText={(txt) =>
                props.setRegistrationData({
                  ...props.registrationData,
                  password: txt,
                })
              }
              value={props.registrationData.password}
              // secureTextEntry={true}
              placeholder="Password"
              InputType="withScroll"
            />
            <Input
              onChangeText={(txt) =>
                props.setRegistrationData({
                  ...props.registrationData,
                  cnfrmpassword: txt,
                })
              }
              value={props.registrationData.cnfrmpassword}
              // secureTextEntry={true}
              placeholder="Confirm Password"
              InputType="withScroll"
            />
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
    </>
  );
};
export default SignUpScreen;
