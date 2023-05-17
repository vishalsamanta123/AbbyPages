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
  LIGHT_BLACK_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Images } from "../../../Utils/images";

const StepThirdScreen = (props) => {
  return (
    <View
      style={[CommonStyles.container, { backgroundColor: WHITE_COLOR_CODE }]}
    >
      <Header
        leftImg={Images.CANCEL_IMG}
        HeaderText="3 of 5"
        // HeaderText="3 of 8"
        RightImg={null}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={"handled"}
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
              textInputProps={{
                placeholderTextColor: BLACK_COLOR_CODE,
                onChangeText: (text) => {
                  props.setZipCode({
                    ...props.ZipCode,
                    address: text,
                    latitude: text == "" ? "" : props.ZipCode.latitude,
                    longitude: text == "" ? "" : props.ZipCode.longitude,
                  });
                },
                value: props.ZipCode.address,
              }}
              query={{
                key: "AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM",
                language: "en",
              }}
              styles={styles.locationVw}
              minLength={2}
              autoFocus={false}
              returnKeyType={"default"}
            />
            <TouchableOpacity
              onPress={() =>
                props.setIsDatePickerVisible(!props.isDatePickerVisible)
              }
              style={styles.dateVw}
            >
              <Text style={styles.locationVw.textInput}>
                {props?.ZipCode?.booking_date
                  ? props?.ZipCode?.booking_date
                  : "Date"}
              </Text>
              <DateTimePickerModal
                minimumDate={new Date()}
                isVisible={props.isDatePickerVisible}
                mode="date"
                onConfirm={props.handleDateConfirm}
                onCancel={() => props.setIsDatePickerVisible(false)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.setIsTimePickerVisible(true)}
              style={styles.dateVw}
            >
              <Text style={styles.locationVw.textInput}>
                {props?.ZipCode?.booking_time
                  ? props?.ZipCode?.booking_time
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
            />
          </View>
        </View>
        <View style={styles.footervwe}>
          <View style={styles.boximgvwe}>
            <View style={styles.imgvwe}>
              <TouchableOpacity onPress={() => props.goBack()}>
                <Image
                  style={{ height: 58, width: 60 }}
                  source={Images.WHITE_ARROW_IMG}
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
