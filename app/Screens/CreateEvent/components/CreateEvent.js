import React, { useEffect, useState } from "react";
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
  TextInput,
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
  FONT_FAMILY_REGULAR,
} from "../../../Utils/Constant";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-community/picker";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const CreateEvent = (props) => {
  const hideDatePicker = () => {
    props.setDatePickerVisibility(false);
  };
  const hideStartDatePicker = () => {
    props.setIsStartDatePicker(false);
  };
  const hideEndDatePicker = () => {
    props.setIsEndDatePicker(false);
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
          props.type === "busniess" || props.type === "Edit_event"
            ? require("../../../Assets/header_back_btn.png")
            : require("../../../Assets/hamburger_icon.png")
        }
        HeaderText={
          props.type === "busniess"
            ? "Create Event"
            : props.type === "Edit_event"
            ? "Edit Event"
            : "Submit an Event"
        }
        type={`${props.type !== "busniess" && "Drawer"}`}
      />
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.MainContainer}>
          <TouchableOpacity
            onPress={() => {
              props.setEventModalVisible(true);
              props.setContentType("img");
            }}
            style={styles.ktchimgvwe}
          >
            <Text style={styles.ktchnlble}>
              {props?.createEvent?.event_photo?.length > 0
                ? "Add more image -"
                : "Select event image -"}
            </Text>
          </TouchableOpacity>
          {props?.createEvent?.event_photo?.length > 0 ? (
            <View style={{ padding: 10 }}>
              <View>{props.renderEventImage()}</View>
            </View>
          ) : null}
          <TouchableOpacity
            onPress={() => {
              props.setEventModalVisible(true);
              props.setContentType("vid");
            }}
            style={styles.ktchimgvwe}
          >
            <Text style={styles.ktchnlble}>{"Select event video -"}</Text>
          </TouchableOpacity>
          {props?.createEvent?.event_video !== "" ? (
            <View style={{ margin: 16 }}>
              <TouchableOpacity
                style={[
                  styles.deleteImageVw,
                  {
                    right: 16,
                  },
                ]}
                onPress={() =>
                  props.setCreateEvent({
                    ...props.createEvent,
                    event_video: "",
                  })
                }
              >
                <Image
                  source={require("../../../Assets/cancelModalBtn.png")}
                  style={styles.deleteImage}
                />
              </TouchableOpacity>
              <Image
                source={{
                  uri: props?.createEvent?.event_video?.path,
                }}
                resizeMode={"stretch"}
                style={styles.videoStyle}
              />
            </View>
          ) : null}
          <Text style={styles.titlesTxt}>Event Name -</Text>
          <Input
            onChangeText={(text) =>
              props.setCreateEvent({
                ...props.createEvent,
                eventName: text,
              })
            }
            value={props.createEvent?.eventName}
            textInputStyle={{ bottom: 5 }}
            secureTextEntry={false}
            placeholder=""
            InputType={null}
          />
          <View style={styles.radioBttnVw}>
            <Text style={styles.radioBttnTxt}>Event Type -</Text>
            <View style={styles.radioBttnCon}>
              <View style={styles.radioInnerCon}>
                <TouchableOpacity
                  onPress={() =>
                    props.setCreateEvent({
                      ...props.createEvent,
                      eventType: 1,
                    })
                  }
                >
                  <Image
                    source={
                      props.createEvent.eventType == 1
                        ? require("../../../Assets/radio_circled_checked.png")
                        : require("../../../Assets/radio_circled_unchecked.png")
                    }
                    style={styles.radioImg}
                  />
                </TouchableOpacity>
                <Text style={styles.radioInnerTxt}>Single</Text>
              </View>
              <View style={styles.radioInnerCon}>
                <TouchableOpacity
                  onPress={() =>
                    props.setCreateEvent({
                      ...props.createEvent,
                      eventType: 2,
                    })
                  }
                >
                  <Image
                    source={
                      props.createEvent.eventType == 2
                        ? require("../../../Assets/radio_circled_checked.png")
                        : require("../../../Assets/radio_circled_unchecked.png")
                    }
                    style={styles.radioImg}
                  />
                </TouchableOpacity>
                <Text style={styles.radioInnerTxt}>Recurring</Text>
              </View>
            </View>
          </View>
          {props.createEvent.eventType !== 2 ? (
            <>
              <Text style={styles.titlesTxt}>Event Date -</Text>
              <TouchableOpacity
                onPress={() => props.setDatePickerVisibility(true)}
                style={styles.container}
              >
                <View style={styles.CameraImgView}>
                  <Text style={styles.AddPhotosTxt}>
                    {props?.createEvent?.date ? props?.createEvent?.date : ""}
                  </Text>
                </View>
                <View style={styles.BckArrowBack}>
                  <Image
                    source={require("../../../Assets/calendar_icon.png")}
                  />
                </View>
                <DateTimePickerModal
                  isVisible={props.isDatePickerVisible}
                  mode="date"
                  minimumDate={new Date()}
                  onConfirm={(date) => props.handleConfirm(date)}
                  onCancel={hideDatePicker}
                />
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.titlesTxt}>Start Date -</Text>
              <TouchableOpacity
                onPress={() => props.setIsStartDatePicker(true)}
                style={styles.container}
              >
                <View style={styles.CameraImgView}>
                  <Text style={styles.AddPhotosTxt}>
                    {props?.createEvent?.startDate
                      ? props?.createEvent?.startDate
                      : ""}
                  </Text>
                </View>
                <View style={styles.BckArrowBack}>
                  <Image
                    source={require("../../../Assets/calendar_icon.png")}
                  />
                </View>
                <DateTimePickerModal
                  isVisible={props.isStartDatePicker}
                  mode="date"
                  minimumDate={new Date()}
                  maximumDate={
                    props?.createEvent?.endDate
                      ? new Date(props?.createEvent?.endDate)
                      : null
                  }
                  onConfirm={(date) => props.handleStartConfirm(date)}
                  onCancel={hideStartDatePicker}
                />
              </TouchableOpacity>
            </>
          )}
          {props.createEvent.eventType == 2 && (
            <>
              <Text style={styles.titlesTxt}>End Date -</Text>
              <TouchableOpacity
                onPress={() => props.setIsEndDatePicker(true)}
                style={styles.container}
              >
                <View style={styles.CameraImgView}>
                  <Text style={styles.AddPhotosTxt}>
                    {props?.createEvent?.endDate
                      ? props?.createEvent?.endDate
                      : ""}
                  </Text>
                </View>
                <View style={styles.BckArrowBack}>
                  <Image
                    source={require("../../../Assets/calendar_icon.png")}
                  />
                </View>
                <DateTimePickerModal
                  isVisible={props.isEndDatePicker}
                  mode="date"
                  minimumDate={
                    props?.createEvent?.startDate
                      ? new Date(props?.createEvent?.startDate)
                      : new Date()
                  }
                  onConfirm={(date) => props.handleEndConfirm(date)}
                  onCancel={hideEndDatePicker}
                />
              </TouchableOpacity>
            </>
          )}
          <Text style={styles.titlesTxt}>Start Time -</Text>
          <TouchableOpacity
            style={styles.container}
            onPress={() => props.setIsStartTimePickerVisible(true)}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props?.createEvent?.start_time
                  ? props?.createEvent?.start_time
                  : ""}
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
          <Text style={styles.titlesTxt}>End Time -</Text>
          <TouchableOpacity
            style={styles.container}
            onPress={() => props.setIsEndTimePickerVisible(true)}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props?.createEvent?.end_time
                  ? props?.createEvent?.end_time
                  : ""}
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
          {/* <Text style={styles.titlesTxt}>Near by location</Text> */}
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
          {/* <Text style={styles.titlesTxt}>Business Name -</Text> */}
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
          <Text style={styles.titlesTxt}>Address -</Text>
          <GooglePlacesAutocomplete
            placeholder={
              props.createEvent.event_address
                ? props.createEvent.event_address
                : ""
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
          {/* <Text style={styles.titlesTxt}>Near -</Text> */}
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
          {/* <Text style={styles.titlesTxt}>What and Why? -</Text> */}
          {/*
                            <Input
                                onChangeText={(WhatWhy) => props.setWhatWhy(WhatWhy)}
                                value={props.WhatWhy}
                                secureTextEntry={false}
                                placeholder="What and Why?"
                                InputType="withScroll"
                            />
                            */}
          <Text style={styles.titlesTxt}>Event Description -</Text>
          <Input
            onChangeText={(text) =>
              props.setCreateEvent({
                ...props.createEvent,
                description: text,
              })
            }
            multiline={true}
            value={props.createEvent.description}
            textInputStyle={{ bottom: 5 }}
            secureTextEntry={false}
            placeholder=""
            InputType={null}
          />
          <Text style={styles.titlesTxt}>Add Additional Organiser -</Text>
          <Input
            onChangeText={(text) =>
              props.setCreateEvent({
                ...props.createEvent,
                add_organiser: text,
              })
            }
            value={props.createEvent.add_organiser}
            textInputStyle={{ bottom: 5 }}
            secureTextEntry={false}
            placeholder=""
            InputType={null}
          />
          <Text style={styles.titlesTxt}>Tag Permormers -</Text>
          <Input
            onChangeText={(text) =>
              props.setCreateEvent({
                ...props.createEvent,
                top_performer: text,
              })
            }
            value={props.createEvent.top_performer}
            textInputStyle={{ bottom: 5 }}
            secureTextEntry={false}
            placeholder=""
            InputType={null}
          />
          {/* <Text style={styles.titlesTxt}>Official Website URL:</Text> */}
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
          {/* <Text style={styles.titlesTxt}>Ticket URL:</Text>  */}
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
          {/* <Text style={styles.titlesTxt}>Price from</Text>  */}
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
          <Text style={styles.titlesTxt}>Price to</Text>
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
          {/* <Text style={styles.titlesTxt}>Free Event</Text> */}
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
          <Text style={styles.titlesTxt}>Category -</Text>
          <TouchableOpacity
            onPress={() => {
              props.setEventCategoryModalVisible(true);
              props.getCategoryList();
            }}
            style={styles.container}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props?.createEvent?.category_name
                  ? props?.createEvent?.category_name
                  : ""}
              </Text>
            </View>
            <View style={styles.BckArrowBack}>
              <Image source={require("../../../Assets/dropdown_icon.png")} />
            </View>
          </TouchableOpacity>
          <Text style={styles.titlesTxt}>Keywords search terms -</Text>
          <TouchableOpacity style={styles.container}>
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props?.createEvent?.category_name
                  ? props?.createEvent?.category_name
                  : ""}
              </Text>
            </View>
            <View style={styles.BckArrowBack}>
              <Image source={require("../../../Assets/dropdown_icon.png")} />
            </View>
          </TouchableOpacity>
          <Text style={styles.titlesTxt}>Type -</Text>
          <View style={[styles.container, { flexDirection: "column" }]}>
            <Picker
              mode={"dropdown"}
              onValueChange={(itemValue) =>
                props.setCreateEvent({
                  ...props.createEvent,
                  type: itemValue,
                })
              }
              selectedValue={props.createEvent.type}
            >
              <Picker.Item label={"In Person"} value={""} />
            </Picker>
          </View>
          {/* <View style={styles.radioBttnVw}>
            <Text style={styles.radioBttnTxt}>Ticket Type</Text>
            <View style={styles.radioBttnCon}>
              <View style={styles.radioInnerCon}>
                <TouchableOpacity
                  onPress={() => {
                    props.setCreateEvent({
                      ...props.createEvent,
                      ticketType: 1,
                      ticketPrice: "",
                    });
                  }}
                >
                  <Image
                    source={
                      props.createEvent.ticketType == 1
                        ? require("../../../Assets/radio_circled_checked.png")
                        : require("../../../Assets/radio_circled_unchecked.png")
                    }
                    style={styles.radioImg}
                  />
                </TouchableOpacity>
                <Text style={styles.radioInnerTxt}>Free</Text>
              </View>
              <View style={styles.radioInnerCon}>
                <TouchableOpacity
                  onPress={() =>
                    props.setCreateEvent({
                      ...props.createEvent,
                      ticketType: 2,
                    })
                  }
                >
                  <Image
                    source={
                      props.createEvent.ticketType == 2
                        ? require("../../../Assets/radio_circled_checked.png")
                        : require("../../../Assets/radio_circled_unchecked.png")
                    }
                    // source={require("../../../Assets/radio_circled_checked.png")}
                    style={styles.radioImg}
                  />
                </TouchableOpacity>
                <Text style={styles.radioInnerTxt}>Paid</Text>
              </View>
            </View>
          </View> */}
          {/* {props.createEvent.ticketType == 2 && (
            <Input
              onChangeText={(text) =>
                props.setCreateEvent({
                  ...props.createEvent,
                  ticketPrice: text,
                })
              }
              value={props.createEvent?.ticketPrice}
              secureTextEntry={false}
              placeholder="Ticket Price"
              keyboardType="phone-pad"
              InputType="withScroll"
            />
          )} */}
          {/* <View style={styles.radioBttnVw}>
            <Text style={styles.radioBttnTxt}>Ticket Availability</Text>
            <View style={styles.radioBttnCon}>
              <View style={styles.radioInnerCon}>
                <TouchableOpacity
                  onPress={() =>
                    props.setCreateEvent({
                      ...props.createEvent,
                      ticketAvailability: 1,
                      ticketLimit: "",
                    })
                  }
                >
                  <Image
                    source={
                      props.createEvent.ticketAvailability == 1
                        ? require("../../../Assets/radio_circled_checked.png")
                        : require("../../../Assets/radio_circled_unchecked.png")
                    }
                    style={styles.radioImg}
                  />
                </TouchableOpacity>
                <Text style={styles.radioInnerTxt}>Unlimited</Text>
              </View>
              <View style={styles.radioInnerCon}>
                <TouchableOpacity
                  onPress={() =>
                    props.setCreateEvent({
                      ...props.createEvent,
                      ticketAvailability: 2,
                    })
                  }
                >
                  <Image
                    source={
                      props.createEvent.ticketAvailability == 2
                        ? require("../../../Assets/radio_circled_checked.png")
                        : require("../../../Assets/radio_circled_unchecked.png")
                    }
                    style={styles.radioImg}
                  />
                </TouchableOpacity>
                <Text style={styles.radioInnerTxt}>Limited</Text>
              </View>
            </View>
          </View> */}
          {/* {props.createEvent.ticketAvailability == 2 && (
            <Input
              onChangeText={(text) =>
                props.setCreateEvent({
                  ...props.createEvent,
                  ticketLimit: text,
                })
              }
              value={props.createEvent?.ticketLimit}
              secureTextEntry={false}
              placeholder="Ticket Limit"
              InputType="withScroll"
              keyboardType="phone-pad"
            />
          )} */}
          <Text style={styles.titlesTxt}>Event Privacy -</Text>
          <View style={styles.privacyCon}>
            <TouchableOpacity
              style={[styles.CameraImgView, { flex: 0 }]}
              onPress={() => props.onPressPublicVenue()}
            >
              <View>
                <Image
                  style={{ width: 24, height: 24 }}
                  source={
                    !props.checkbox
                      ? require("../../../Assets/checked_circled_icon_box.png")
                      : require("../../../Assets/unchecked_circled_icon_box.png")
                  }
                />
              </View>
              <Text style={[styles.AddPhotosTxt, { fontSize: 15 }]}>
                Public event
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.CameraImgView}
              onPress={() => props.onPressPublicVenue()}
            >
              <View>
                <Image
                  style={{ width: 24, height: 24 }}
                  source={
                    props.checkbox
                      ? require("../../../Assets/checked_circled_icon_box.png")
                      : require("../../../Assets/unchecked_circled_icon_box.png")
                  }
                />
              </View>
              <Text style={[styles.AddPhotosTxt, { fontSize: 15 }]}>
                Private event
              </Text>
            </TouchableOpacity>
          </View>
          {/* <Button
            buttonLabelStyle={{ color: WHITE_COLOR_CODE }}
            buttonText="Cancel"
            style={{ marginTop: 10, backgroundColor: GREY_COLOR_CODE }}
          /> */}
        </View>
        {props.formView === 4 ? (
          <Button
            buttonText={
              props.type !== "Edit_event" ? "Create Event" : "Edit Event"
            }
            style={{ marginTop: 10, marginBottom: 10 }}
            onPress={props.onPressCreateEvent}
          />
        ) : (
          <>
            {props.type === "busniess" ? (
              <Button
                buttonText={"Next"}
                style={{ marginTop: 10, marginBottom: 12 }}
                onPress={() => props.onPressNextForm()}
              />
            ) : null}
          </>
        )}
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
          props.setContentType("");
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            props.setEventModalVisible(false);
            props.setContentType("");
          }}
          style={styles.centeredView}
        >
          <View style={styles.alertBackground}>
            {props.contentType === "vid" ? (
              <View style={styles.alertBox}>
                <TouchableOpacity
                  style={styles.profileModal}
                  onPress={() => {
                    props.contentType === "vid"
                      ? props.onPressOpenEventVideo()
                      : props.onPressOpenEventImage();
                  }}
                  underlayColor={"#F5F5F5"}
                >
                  <Image
                    style={{ height: 40, width: 40, zIndex: 1 }}
                    source={require("../../../Assets/image-gallery.png")}
                  />
                  <Text style={styles.modalItem}>Open Album</Text>
                </TouchableOpacity>
              </View>
            ) : (
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
            )}
          </View>
        </TouchableOpacity>
      </Modal>
    </KeyboardAvoidingView>
  );
};
export default CreateEvent;
