import React from "react";
import {
  View,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import styles from "./styles";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  WHITE_COLOR_CODE,
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
const AddLocationScreen = (props) => {
  return (
    <KeyboardAvoidingView style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        HeaderText={"Add a new location"}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
      />
      <View
        style={[
          CommonStyles.body,
          { backgroundColor: WHITE_COLOR_CODE, justifyContent: "center" },
        ]}
      >
        <ScrollView keyboardShouldPersistTaps={"always"}>
          {/* <Input
                        onChangeText={(locationName) => props.setAddress({
                            ...props.Address,
                            location: locationName
                        })}
                        value={props.Address.location}
                        secureTextEntry={false}
                        placeholder="Location Name (home or office)"
                        InputType="withScroll"
                    /> */}
          <GooglePlacesAutocomplete
            placeholder="Street Address"
            fetchDetails={true}
            onPress={(data, details = null) => {
              props.setAddress({
                ...props.Address,
                location: details.formatted_address,
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              });
            }}
            textInputProps={{
              placeholderTextColor: BLACK_COLOR_CODE,
              onChangeText: (e) => {
                props.setAddress({
                  ...props.Address,
                  location: e,
                });
              },
              value: props.Address.location,
            }}
            value={props.Address.address}
            query={{
              key: "AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM",
              language: "en",
            }}
            styles={styles.addressVw}
            minLength={2}
            autoFocus={false}
            returnKeyType={"default"}
          />
          <Input
            onChangeText={(zip_code) =>
              props.setAddress({
                ...props.Address,
                pincode: zip_code,
              })
            }
            value={props.Address.pincode}
            secureTextEntry={false}
            placeholder="Zip Code"
            InputType="withScroll"
            keyboardType="phone-pad"
          />
          <Button
            buttonText="Save Changes"
            buttonLabelStyle={styles.SaveBtnTxt}
            onPress={props.onPressSave}
            style={{ marginTop: 5 }}
          />
          <Button
            buttonText="Cancel"
            buttonLabelStyle={styles.CancelBtnTxt}
            onPress={props.onPressCancelBtn}
            style={styles.CancelBtnStyle}
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default AddLocationScreen;
