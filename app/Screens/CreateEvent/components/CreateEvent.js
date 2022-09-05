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
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import { BLACK_COLOR_CODE, FONT_FAMILY_REGULAR, WHITE_COLOR_CODE, YELLOW_COLOR_CODE } from "../../../Utils/Constant";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const CreateEvent = (props) => {
  console.log('props.createEvent.event_address: ', props.createEvent.eventType);
  const hideDatePicker = () => {
    props.setDatePickerVisibility(false);
  };
  const hideTimePicker = () => {
    props.setIsStartTimePickerVisible(false);
  };
  const hideEndTimePicker = () => {
    setIsEndTimePickerVisible(false);
  };
  return (
    <KeyboardAvoidingView style={CommonStyles.container}>
      <Header
        RightImg={null}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        leftImg={
          props.type === 'busniess' || props.type === 'Edit_event' ? require("../../../Assets/header_back_btn.png")
            : require("../../../Assets/hamburger_icon.png")
        }
        HeaderText={props.type === 'busniess' ? "Create Event" : props.type === 'Edit_event' ? "Edit Event" : "Submit an Event"}
        type="props.type !== 'busniess' && Drawer"
      />
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.MainContainer}>
          <TouchableOpacity
            onPress={() => props.setEventModalVisible(true)}
            style={styles.ktchimgvwe}
          >
            <Text style={styles.ktchnlble}>Select event image</Text>
          </TouchableOpacity>
          {props?.createEvent?.event_photo.length > 0 ? (
            <View style={{ padding: 10 }}>
              <View>{props.renderEventImage()}</View>
            </View>
          ) : null}
          <Input
            onChangeText={(text) =>
              props.setCreateEvent({
                ...props.createEvent,
                eventName: text,
              })
            }
            value={props.createEvent?.eventName}
            secureTextEntry={false}
            placeholder="Event Name"
            InputType="withScroll"
          />
          <View style={{ marginHorizontal: 15, padding: 8 }}>
            <Text style={{ fontSize: 18, fontFamily: FONT_FAMILY_REGULAR }}>Event Type</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 }}>
                <TouchableOpacity onPress={() => props.setCreateEvent({
                  ...props.createEvent,
                  eventType: 1,
                })}>
                  <Image
                    source={
                      props.createEvent.eventType == 1
                        ? require("../../../Assets/radio_circled_checked.png")
                        : require("../../../Assets/radio_circled_unchecked.png")
                    }
                    // source={require("../../../Assets/radio_circled_checked.png")}
                    style={{ width: 18, height: 18, marginRight: 5 }}
                  />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, fontFamily: FONT_FAMILY_REGULAR }}>Single</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => props.setCreateEvent({
                  ...props.createEvent,
                  eventType: 2,
                })}>
                  <Image
                    source={
                      props.createEvent.eventType == 2
                        ? require("../../../Assets/radio_circled_checked.png")
                        : require("../../../Assets/radio_circled_unchecked.png")
                    }
                    // source={require("../../../Assets/radio_circled_checked.png")}
                    style={{ width: 18, height: 18, marginRight: 5 }}
                  />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, fontFamily: FONT_FAMILY_REGULAR }}>Recurring</Text>
              </View>
            </View>
          </View>
          {props.createEvent.eventType !== 2 ?
         ( <TouchableOpacity
            onPress={() => props.setDatePickerVisibility(true)}
            style={styles.container}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props?.createEvent?.date ?
                  props?.createEvent?.date :
                    "Date"}
              </Text>
            </View>
            <View style={styles.BckArrowBack}>
              <Image source={require("../../../Assets/calendar_icon.png")} />
            </View>
            <DateTimePickerModal
              isVisible={props.isDatePickerVisible}
              mode="date"
              minimumDate={new Date()}
              onConfirm={(date) => props.handleConfirm(date)}
              onCancel={hideDatePicker}
            />
          </TouchableOpacity>)
          :
         ( <TouchableOpacity
            onPress={() => props.setDatePickerVisibility(true)}
            style={styles.container}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props?.createEvent?.startDate ?
                  props?.createEvent?.startDate : "Start Date"}
              </Text>
            </View>
            <View style={styles.BckArrowBack}>
              <Image source={require("../../../Assets/calendar_icon.png")} />
            </View>
            <DateTimePickerModal
              isVisible={props.isDatePickerVisible}
              mode="date"
              minimumDate={new Date()}
              onConfirm={(date) => props.handleStartConfirm(date)}
              onCancel={hideDatePicker}
            />
          </TouchableOpacity>)
}
          {props.createEvent.eventType == 2 &&
            <TouchableOpacity
              onPress={() => props.setDatePickerVisibility(true)}
              style={styles.container}
            >
              <View style={styles.CameraImgView}>
                <Text style={styles.AddPhotosTxt}>
                  {props?.createEvent?.EndDate ? props?.createEvent?.EndDate : " End Date"}
                </Text>
              </View>
              <View style={styles.BckArrowBack}>
                <Image source={require("../../../Assets/calendar_icon.png")} />
              </View>
              <DateTimePickerModal
                isVisible={props.isDatePickerVisible}
                mode="date"
                minimumDate={new Date()}
                onConfirm={(date) => props.handleEndConfirm(date)}
                onCancel={hideDatePicker}
              />
            </TouchableOpacity>
          }
          <TouchableOpacity
            style={styles.container}
            onPress={() => props.setIsStartTimePickerVisible(true)}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props?.createEvent?.start_time
                  ? props?.createEvent?.start_time
                  : "Start Time"}
              </Text>
            </View>
            <View style={styles.BckArrowBack}>
              <Image source={require("../../../Assets/dropdown_icon.png")} />
            </View>
            <DateTimePickerModal
              isVisible={props.isStartTimePickerVisible}
              mode="time"
              onConfirm={(date) => props.handleTimeConfirm(date)}
              onCancel={hideTimePicker}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.container}
            onPress={() => props.setIsEndTimePickerVisible(true)}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props?.createEvent?.end_time
                  ? props?.createEvent?.end_time
                  : "End Time"}
              </Text>
            </View>
            <View style={styles.BckArrowBack}>
              <Image source={require("../../../Assets/dropdown_icon.png")} />
            </View>
            <DateTimePickerModal
              isVisible={props.isEndTimePickerVisible}
              mode="time"
              onConfirm={(date) => props.handleEndTimeConfirm(date)}
              onCancel={hideEndTimePicker}
            />
          </TouchableOpacity>
          {/* <GooglePlacesAutocomplete
            placeholder={"Near by location"}
            fetchDetails={true}
            onPress={(data, details = null) => {
              props.setCreateEvent({
                ...props.createEvent,
                find_me_in: data.description,
                find_me_lat: details.geometry.location.lat,
                find_me_long: details.geometry.location.lng,
              });
            }}
            textInputProps={{
              placeholderTextColor: BLACK_COLOR_CODE,
              onChangeText: (text) => {
                props.setCreateEvent({
                  ...props.createEvent,
                  find_me_in: text,
                });
              },
              value: props.createEvent.find_me_in,
            }}
            query={{
              key: "AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM",
              language: "en",
            }}
            styles={styles.addressInputVw}
            minLength={2}
            autoFocus={false}
            returnKeyType={"default"}
          /> */}
          {/* <Input
            onChangeText={(text) =>
              props.setCreateEvent({
                ...props.createEvent,
                businessName: text,
              })
            }
            value={props?.createEvent?.businessName}
            secureTextEntry={false}
            placeholder="Business Name"
            InputType="withScroll"
          /> */}
          <GooglePlacesAutocomplete
            placeholder={
              props.createEvent.event_address
                ? props.createEvent.event_address
                : "Address"
            }
            fetchDetails={true}
            onPress={(data, details = null) => {
              props.setCreateEvent({
                ...props.createEvent,
                event_address: data.description,
                event_Addr_lat: details.geometry.location.lat,
                event_Addr_long: details.geometry.location.lng,
              });
            }}
            textInputProps={{
              placeholderTextColor: BLACK_COLOR_CODE,
              onChangeText: (text) => {
                props.setCreateEvent({
                  ...props.createEvent,
                  event_address: text,
                });
              },
              value: props.createEvent.event_address,
            }}
            query={{
              key: "AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM",
              language: "en",
            }}
            styles={styles.addressInputVw}
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
          {/* <Button
            buttonText="Search"
            style={{ marginTop: 5, marginBottom: 5 }}
          /> */}
          {/*
                            <Input
                                onChangeText={(WhatWhy) => props.setWhatWhy(WhatWhy)}
                                value={props.WhatWhy}
                                secureTextEntry={false}
                                placeholder="What and Why?"
                                InputType="withScroll"
                            />
                            */}
          {/* <Input
            onChangeText={(text) =>
              props.setCreateEvent({
                ...props.createEvent,
                description: text,
              })
            }
            value={props.createEvent.description}
            secureTextEntry={false}
            placeholder="Description"
            InputType="withScroll"
          /> */}
          {/* <Input
            onChangeText={(text) =>
              props.setCreateEvent({
                ...props.createEvent,
                official_Web: text,
              })
            }
            value={props?.createEvent?.official_Web}
            secureTextEntry={false}
            placeholder="Official Website URL:"
            InputType="withScroll"
          /> */}
          {/* <Input
            onChangeText={(text) =>
              props.setCreateEvent({
                ...props.createEvent,
                ticketURL: text,
              })
            }
            value={props?.createEvent?.ticketURL}
            secureTextEntry={false}
            placeholder="Ticket URL:"
            InputType="withScroll"
          /> */}
          {/* <Input
            onChangeText={(text) =>
              props.setCreateEvent({
                ...props.createEvent,
                priceFrom: text,
              })
            }
            value={props?.createEvent?.priceFrom}
            secureTextEntry={false}
            placeholder="Price from"
            InputType="withScroll"
          />
          <Input
            onChangeText={(text) =>
              props.setCreateEvent({
                ...props.createEvent,
                priceTo: text,
              })
            }
            value={props?.createEvent?.priceTo}
            secureTextEntry={false}
            placeholder="Price to"
            InputType="withScroll"
          /> */}
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
            onPress={() => props.setEventCategoryModalVisible(true)}
            style={styles.container}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props?.createEvent?.category_name
                  ? props?.createEvent?.category_name
                  : "Category"}
              </Text>
            </View>
            <View style={styles.BckArrowBack}>
              <Image source={require("../../../Assets/dropdown_icon.png")} />
            </View>
          </TouchableOpacity>

          <View style={{ marginHorizontal: 15, padding: 8 }}>
            <Text style={{ fontSize: 18, fontFamily: FONT_FAMILY_REGULAR }}>Ticket Type</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 }}>
                <TouchableOpacity onPress={() => props.setCreateEvent({
                  ...props.createEvent,
                  ticketType: 1,
                })}>
                  <Image
                    source={
                      props.createEvent.ticketType == 1
                        ? require("../../../Assets/radio_circled_checked.png")
                        : require("../../../Assets/radio_circled_unchecked.png")
                    }
                    // source={require("../../../Assets/radio_circled_checked.png")}
                    style={{ width: 18, height: 18, marginRight: 5 }}
                  />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, fontFamily: FONT_FAMILY_REGULAR }}>Free</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => props.setCreateEvent({
                  ...props.createEvent,
                  ticketType: 2,
                })}>
                  <Image
                    source={
                      props.createEvent.ticketType == 2
                        ? require("../../../Assets/radio_circled_checked.png")
                        : require("../../../Assets/radio_circled_unchecked.png")
                    }
                    // source={require("../../../Assets/radio_circled_checked.png")}
                    style={{ width: 18, height: 18, marginRight: 5 }}
                  />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, fontFamily: FONT_FAMILY_REGULAR }}>Paid</Text>
              </View>
            </View>
          </View>
          {props.createEvent.ticketType == 2 &&
            (<Input
              onChangeText={(text) =>
                props.setCreateEvent({
                  ...props.createEvent,
                  ticketPrice: text,
                })
              }
              value={props.createEvent?.eventName}
              secureTextEntry={false}
              placeholder="Ticket Price"
              InputType="withScroll"
            />)}

{/* Ticket availability */}

          <View style={{ marginHorizontal: 15, padding: 8 }}>
            <Text style={{ fontSize: 18, fontFamily: FONT_FAMILY_REGULAR }}>Ticket Availability</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 }}>
                <TouchableOpacity onPress={() => props.setCreateEvent({
                  ...props.createEvent,
                  ticketAvailability: 1,
                })}>
                  <Image
                    source={
                      props.createEvent.ticketAvailability == 1
                        ? require("../../../Assets/radio_circled_checked.png")
                        : require("../../../Assets/radio_circled_unchecked.png")
                    }
                    // source={require("../../../Assets/radio_circled_checked.png")}
                    style={{ width: 18, height: 18, marginRight: 5 }}
                  />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, fontFamily: FONT_FAMILY_REGULAR }}>Unlimited</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => props.setCreateEvent({
                  ...props.createEvent,
                  ticketAvailability: 2,
                })}>
                  <Image
                    source={
                      props.createEvent.ticketAvailability == 2
                        ? require("../../../Assets/radio_circled_checked.png")
                        : require("../../../Assets/radio_circled_unchecked.png")
                    }
                    // source={require("../../../Assets/radio_circled_checked.png")}
                    style={{ width: 18, height: 18, marginRight: 5 }}
                  />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, fontFamily: FONT_FAMILY_REGULAR }}>Limited</Text>
              </View>
            </View>
          </View>
          {props.createEvent.ticketAvailability == 2 &&
            (<Input
              onChangeText={(text) =>
                props.setCreateEvent({
                  ...props.createEvent,
                  ticketLimit: text,
                })
              }
              value={props.createEvent?.eventName}
              secureTextEntry={false}
              placeholder="Ticket Limit"
              InputType="withScroll"
              keyboardType="phone-pad"
            />)}
          {/* <TouchableOpacity
            onPress={() => props.onPressPublicVenue()}
            style={styles.container}
          >
            <View style={styles.CameraImgView}>
              <View>
                <Image
                  source={
                    props.checkbox
                      ? require("../../../Assets/checked_circled_icon_box.png")
                      : require("../../../Assets/unchecked_circled_icon_box.png")
                  }
                />
              </View>
              <Text style={styles.AddPhotosTxt}>Public Venue</Text>
            </View>
          </TouchableOpacity> */}
          <Button
            buttonText={props.type !== 'Edit_event' ? "Create Event" : "Edit Event"}
            style={{ marginTop: 10 }}
            onPress={props.onPressCreateEvent}
          />
          {/* <Button
            buttonLabelStyle={{ color: WHITE_COLOR_CODE }}
            buttonText="Cancel"
            style={{ marginTop: 10, backgroundColor: GREY_COLOR_CODE }}
          /> */}
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
              <View style={{ flex: 0.5 }} />
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
