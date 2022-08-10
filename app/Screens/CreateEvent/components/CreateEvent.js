import React from "react";
import {
  View,
  Text,
  Image,
  Modal,
  Alert,
  FlatList,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import Header from "../../../Components/Header";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  GREY_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../Utils/Constant";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const CreateEvent = (props) => {
  return (
    <KeyboardAvoidingView style={CommonStyles.container}>
      <Header
        RightImg={null}
        leftImg={require("../../../Assets/hamburger_icon.png")}
        HeaderText={"Submit an Event"}
        type="Drawer"
      />
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.MainContainer}>
          <TouchableOpacity
            onPress={() => props.setEventModalVisible(true)}
            style={styles.ktchimgvwe}
          >
            <Text style={styles.ktchnlble}>Select event image</Text>
          </TouchableOpacity>
          <View style={{ padding: 10 }}>
            <View>{props.renderEventImage()}</View>
          </View>
          <Input
            onChangeText={(EventName) => props.setEventName(EventName)}
            value={props.EventName}
            secureTextEntry={false}
            placeholder="Event Name"
            InputType="withScroll"
          />
          <TouchableOpacity
            onPress={() => props.showDatePicker()}
            style={styles.container}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props.selectedDate ? props.selectedDate : "Date"}
              </Text>
            </View>
            <View style={styles.BckArrowBack}>
              <Image source={require("../../../Assets/calendar_icon.png")} />
            </View>
            <DateTimePickerModal
              isVisible={props.isDatePickerVisible}
              mode="date"
              minimumDate={new Date()}
              onConfirm={props.handleConfirm}
              onCancel={props.hideDatePicker}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.container}
            onPress={() => props.showTimePicker()}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props.startTime ? props.startTime : "Start Time"}
              </Text>
            </View>
            <View style={styles.BckArrowBack}>
              <Image source={require("../../../Assets/dropdown_icon.png")} />
            </View>
            <DateTimePickerModal
              isVisible={props.isStartTimePickerVisible}
              mode="time"
              onConfirm={props.handleTimeConfirm}
              onCancel={props.hideTimePicker}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.container}
            onPress={() => props.showEndTimePicker()}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props.selectedEndTime ? props.selectedEndTime : "End Time"}
              </Text>
            </View>
            <View style={styles.BckArrowBack}>
              <Image source={require("../../../Assets/dropdown_icon.png")} />
            </View>
            <DateTimePickerModal
              isVisible={props.isEndTimePickerVisible}
              mode="time"
              onConfirm={props.handleEndTimeConfirm}
              onCancel={props.hideEndTimePicker}
            />
          </TouchableOpacity>
          <GooglePlacesAutocomplete
            placeholder={
              props.nearByLocationData.find_me_in &&
              props.nearByLocationData.find_me_in
                ? props.nearByLocationData.find_me_in
                : "Near by"
            }
            fetchDetails={true}
            onPress={(data, details = null) => {
              props.setNearByLocationData({
                ...props.nearByLocationData,
                find_me_in: data.description,
                find_me_lat: details.geometry.location.lat,
                find_me_long: details.geometry.location.lng,
              });
            }}
            onChangeText={(address) =>
              props.setNearByLocationData({
                ...props.nearByLocationData,
                find_me_in: address,
              })
            }
            query={{
              key: "AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM",
              language: "en",
            }}
            styles={{
              textInputContainer: {
                borderRadius: 4,
                backgroundColor: WHITE_COLOR_CODE,
                fontSize: 16,
                marginHorizontal: 17,
                margin: 8,
                fontFamily: FONT_FAMILY_REGULAR,
                borderColor: "#d8d8d8",
                borderRadius: 8,
                borderWidth: 1,
                alignItems: "center",
                paddingVertical: 6,
              },
              textInput: {
                fontSize: 15,
                color: BLACK_COLOR_CODE,
              },
              listView: {
                width: "90%",
                alignSelf: "center",
                backgroundColor: WHITE_COLOR_CODE,
              },
            }}
            minLength={2}
            autoFocus={false}
            returnKeyType={"default"}
          />
          <Input
            onChangeText={(BusinessName) => props.setBusinessName(BusinessName)}
            value={props.BusinessName}
            secureTextEntry={false}
            placeholder="Business Name"
            InputType="withScroll"
          />
          <GooglePlacesAutocomplete
            placeholder={
              props.locationData.find_me_in && props.locationData.find_me_in
                ? props.locationData.find_me_in
                : "Address"
            }
            fetchDetails={true}
            onPress={(data, details = null) => {
              props.setLocationData({
                ...props.locationData,
                find_me_in: data.description,
                find_me_lat: details.geometry.location.lat,
                find_me_long: details.geometry.location.lng,
              });
            }}
            onChangeText={(address) =>
              props.setLocationData({
                ...props.locationData,
                find_me_in: address,
              })
            }
            query={{
              key: "AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM",
              language: "en",
            }}
            styles={{
              textInputContainer: {
                borderRadius: 4,
                backgroundColor: WHITE_COLOR_CODE,
                fontSize: 16,
                marginHorizontal: 17,
                margin: 8,
                fontFamily: FONT_FAMILY_REGULAR,
                borderColor: "#d8d8d8",
                borderRadius: 8,
                borderWidth: 1,
                alignItems: "center",
                // height: 70,
                paddingVertical: 6,
              },
              textInput: {
                fontSize: 15,
                color: BLACK_COLOR_CODE,
              },
              listView: {
                width: "90%",
                alignSelf: "center",
                backgroundColor: WHITE_COLOR_CODE,
              },
            }}
            minLength={2}
            autoFocus={false}
            returnKeyType={"default"}
          />
          {/* <Input
                            onChangeText={(NearBy) => props.setNearBy(NearBy)}
                            value={props.NearBy}
                            secureTextEntry={false}
                            placeholder="Near"
                            InputType="withScroll"
                            />*/}
          <Button
            buttonText="Search"
            style={{ marginTop: 5, marginBottom: 5 }}
          />
          {/*
                            <Input
                                onChangeText={(WhatWhy) => props.setWhatWhy(WhatWhy)}
                                value={props.WhatWhy}
                                secureTextEntry={false}
                                placeholder="What and Why?"
                                InputType="withScroll"
                            />
                            */}
          <Input
            onChangeText={(description) => props.setDescription(description)}
            value={props.description}
            secureTextEntry={false}
            placeholder="Description"
            InputType="withScroll"
          />
          <Input
            onChangeText={(OfficialWeb) => props.setOfficialWeb(OfficialWeb)}
            value={props.OfficialWeb}
            secureTextEntry={false}
            placeholder="Official Website URL:"
            InputType="withScroll"
          />
          <Input
            onChangeText={(TicketURL) => props.setTicketURL(TicketURL)}
            value={props.TicketURL}
            secureTextEntry={false}
            placeholder="Ticket URL:"
            InputType="withScroll"
          />
          <Input
            onChangeText={(PriceFrom) => props.setPriceFrom(PriceFrom)}
            value={props.PriceFrom}
            secureTextEntry={false}
            placeholder="Price from"
            InputType="withScroll"
          />
          <Input
            onChangeText={(PriceTo) => props.setPriceTo(PriceTo)}
            value={props.PriceTo}
            secureTextEntry={false}
            placeholder="Price to"
            InputType="withScroll"
          />
          {/* <TouchableOpacity onPress={() => props.onPressFreeEvent()} style={styles.container}>
                            <View style={styles.CameraImgView}>
                                <TouchableOpacity >
                                    {props.FreeEvent ?
                                        <Image source={require('../../../Assets/checked_squared_v1.png')} />
                                        :
                                        <Image source={require('../../../Assets/unchecked_squared_v1.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.AddPhotosTxt}>Free Event</Text>
                            </View>
                        </TouchableOpacity>
                                */}
          <TouchableOpacity
            onPress={() => props._handleModalOpen()}
            style={styles.container}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props.selectedCategory.name
                  ? props.selectedCategory.name
                  : "Category"}
              </Text>
            </View>
            <View style={styles.BckArrowBack}>
              <Image source={require("../../../Assets/dropdown_icon.png")} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onPressPublicVenue()}
            style={styles.container}
          >
            <View style={styles.CameraImgView}>
              <View>
                {props.checkbox ? (
                  <Image
                    source={require("../../../Assets/checked_circled_icon_box.png")}
                  />
                ) : (
                  <Image
                    source={require("../../../Assets/unchecked_circled_icon_box.png")}
                  />
                )}
              </View>
              <Text style={styles.AddPhotosTxt}>Public Venue</Text>
            </View>
          </TouchableOpacity>
          <Button
            buttonText="Create Event"
            style={{ marginTop: 10 }}
            onPress={props.onPressCreateEvent}
          />
          <Button
            buttonLabelStyle={{ color: WHITE_COLOR_CODE }}
            buttonText="Cancel"
            style={{ marginTop: 10, backgroundColor: GREY_COLOR_CODE }}
          />
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        visible={props.eventCategoryModalVisible}
        onRequestClose={() => {
          props.setEventCategoryModalVisible(false);
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View style={styles.moadlvwe}>
            <View style={styles.headervwe}>
              <View style={{ flex: 1 }} />
              <View style={styles.arealstvwe}>
                <Text style={styles.arealsttxt}>Category List</Text>
              </View>
              <TouchableOpacity
                onPress={() => props.setEventCategoryModalVisible(false)}
                style={styles.cancelbtnimgvwe}
              >
                <Image
                  style={styles.cancelimg}
                  source={require("../../../Assets/cancelModalBtn.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: "15%" }}>
              <FlatList
                data={props.categoryListData}
                renderItem={(item) => props.renderCategoryListItem(item)}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.eventModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          props.setEventModalVisible(!props.eventModalVisible);
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => props.setEventModalVisible(false)}
          style={styles.centeredView}
        >
          <View style={styles.alertBackground}>
            <View style={styles.alertBox}>
              <TouchableOpacity
                style={styles.profileModal}
                onPress={() => props.onPressOpenEventImage()}
                underlayColor={"#F5F5F5"}
              >
                <Image
                  style={{ height: 40, width: 40, zIndex: 1 }}
                  source={require("../../../Assets/image-gallery.png")}
                />
                <Text style={styles.modalItem}>Open Album</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </KeyboardAvoidingView>
  );
};
export default CreateEvent;
