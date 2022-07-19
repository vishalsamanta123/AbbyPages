import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import styles from "./styles";
import Button from "../../../Components/Button";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import Input from "../../../Components/Input";
import {
  WHITE_COLOR_CODE,
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
} from "../../../Utils/Constant";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const StepThirdScreen = (props) => {
  return (
    <View
      style={[CommonStyles.container, { backgroundColor: WHITE_COLOR_CODE }]}
    >
      <Header
        leftImg={require("../../../Assets/close_window_icon.png")}
        HeaderText="3 of 8"
        RightImg={null}
      />
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={"always"}
      >
        <View style={styles.inputtexvwe}>
          <View style={styles.maintxtVwe}>
            <Text style={styles.maintxt}>
              In Which locations are you looking for professionals?
            </Text>
          </View>
          <View style={styles.inputwvwe}>
            <GooglePlacesAutocomplete
              placeholder={"Zip code or location"}
              // setAddressText={props.profileData.find_me_in}
              value={props.ZipCode.address}
              fetchDetails={true}
              onPress={(data, details = null) => {
                props.setZipCode({
                  ...props.ZipCode,
                  address: details.formatted_address,
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                });
              }}
              onChangeText={(address) =>
                props.setZipCode({
                  ...props.ZipCode,
                  address: address,
                })
              }
              query={{
                key: "AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM",
                language: "en",
              }}
              styles={{
                textInputContainer: {
                  backgroundColor: "rgba(0,0,0,0)",
                  height: 70,
                  margin: 10,
                  marginLeft: 17,
                  marginRight: 17,
                  borderColor: "#d8d8d8",
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                },
                textInput: {
                  fontSize: 16,
                  // color: 'red'
                  color: BLACK_COLOR_CODE,
                },
                listView: {
                  backgroundColor: WHITE_COLOR_CODE,
                  margin: 10,
                },
              }}
              minLength={2}
              autoFocus={false}
              returnKeyType={"default"}
            />
            <TouchableOpacity
              onPress={() =>
                props.setIsDatePickerVisible(!props.isDatePickerVisible)
              }
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                height: 70,
                margin: 10,
                marginLeft: 17,
                marginRight: 17,
                borderColor: "#d8d8d8",
                borderWidth: 1,
                borderRadius: 8,
                // alignItems: "center"
                justifyContent: "center",
                padding: 15,
              }}
            >
              <Text style={{ fontFamily: FONT_FAMILY_REGULAR, fontSize: 16 }}>
                {props.ZipCode &&
                  props?.ZipCode?.booking_date &&
                  props?.ZipCode?.booking_date
                  ? props.ZipCode.booking_date
                  : "Date"}
              </Text>
              <DateTimePickerModal
                isVisible={props.isDatePickerVisible}
                mode="date"
                onConfirm={props.handleDateConfirm}
                onCancel={() => props.setIsDatePickerVisible(false)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.setIsTimePickerVisible(true)}
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                height: 70,
                margin: 10,
                marginLeft: 17,
                marginRight: 17,
                borderColor: "#d8d8d8",
                borderWidth: 1,
                borderRadius: 8,
                justifyContent: "center",
                padding: 15,
              }}>
              <Text style={{ fontFamily: FONT_FAMILY_REGULAR, fontSize: 16 }}>
                {props.ZipCode &&
                  props.ZipCode.booking_time &&
                  props.ZipCode.booking_time
                  ? props.ZipCode.booking_time
                  : "Time"}
              </Text>
              <DateTimePickerModal
                isVisible={props.isTimePickerVisible}
                mode="time"
                onConfirm={props.handleTimeConfirm}
                onCancel={() => props.setIsTimePickerVisible(false)}
              />
            </TouchableOpacity>
            <Input
              onChangeText={(description) =>
                props.setZipCode({
                  ...props.ZipCode,
                  description: description,
                })
              }
              value={props.ZipCode.description}
              secureTextEntry={false}
              multiline
              placeholder="Description"
              InputType="withScroll"
            // containerStyle={{marginBottom:20}}
            />
          </View>
        </View>
        <View style={styles.footervwe}>
          <View style={styles.boximgvwe}>
            <View style={styles.imgvwe}>
              <TouchableOpacity onPress={() => props.goBack()}>
                <Image
                  style={{ height: 58, width: 60 }}
                  source={require("../../../Assets/Group1672.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.lstbtnvwe}>
            <Button
              buttonText="Next"
              style={styles.btnvwe}
              buttonLabelStyle={styles.startedbtntxt}
              onPress={props.onPressStepfourth}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default StepThirdScreen;
