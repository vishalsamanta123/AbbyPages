import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  FlatList,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import styles from "./styles";
import moment from "moment";
import Header from "../../../Components/Header";
import Button from "../../../Components/Button";
import {
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  LIGHT_BLACK_COLOR_CODE,
  SMALL_TEXT_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import Loader from "../../../Utils/Loader";
import _ from "lodash";
import Input from "../../../Components/Input";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const TicketDetailsScreen = (props) => {
  const eventDate = moment(props?.eventDetails?.created_at).format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
  );
  const [selectedIndex, setselectedIndex] = useState(0);
  console.log("selectedIndex: ", selectedIndex);
  const handleTicketInput = (key, value, index) => {
    let NewEventTicket = [...props.ticketsDetails];
    const ticket = NewEventTicket[index];
    if (key == "cand_firstName") {
      const tic = { ...ticket, cand_firstName: value };
      NewEventTicket[index] = tic;
    }
    if (key == "cand_lastName") {
      const tic = { ...ticket, cand_lastName: value };
      NewEventTicket[index] = tic;
    }
    if (key == "cand_email") {
      const tic = { ...ticket, cand_email: value };
      NewEventTicket[index] = tic;
    }
    if (key === "cand_address") {
      const tic = { ...ticket, cand_address: value };
      NewEventTicket[index] = tic;
    }
    if (key == "cand_phoneNo") {
      const tic = { ...ticket, cand_phoneNo: value };
      NewEventTicket[index] = tic;
    }
    props.setTicketsDetails(NewEventTicket);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.buyTicketModal === 2}
      onRequestClose={() => {
        props.setBuyTicketModal("");
      }}
    >
      <KeyboardAvoidingView style={styles.modalCon}>
        <Header
          mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
          tintColor={WHITE_COLOR_CODE}
          HeaderText="Buy Ticket"
          leftImg={""}
          RightImg={null}
        />
        <ScrollView>
          {props?.loader && <Loader state={props?.loader} />}
          <View style={styles.modalsVw}>
            <Text style={styles.eventNameTx}>
              {props?.eventDetails?.event_name}
            </Text>
            <Text style={styles.startDateTxt}>Event Starts : {eventDate}</Text>
            <Text style={styles.selectTxt}>Create Ticket</Text>
            {typeof selectedIndex === "number" &&
            selectedIndex < props?.ticketsDetails?.length ? (
              <View style={styles.ticketDetailVw}>
                <Text style={styles.ticketTxt}>
                  Ticket Number : {selectedIndex + 1} [
                  {props?.ticketsDetails[selectedIndex].ticket_Name}]
                </Text>
                <View style={{ marginLeft: 5, marginTop: 8 }}>
                  <Text style={styles.subTitleTxt}>User's first name</Text>
                  <Input
                    placeholder=""
                    InputType={null}
                    containerStyle={styles.ticketsInputVw}
                    textInputStyle={{ marginTop: 2, paddingLeft: 8 }}
                    onChangeText={(text) => {
                      handleTicketInput("cand_firstName", text, selectedIndex);
                    }}
                    value={props?.ticketsDetails[selectedIndex]?.cand_firstName}
                  />
                </View>
                <View style={{ marginLeft: 5, marginTop: 8 }}>
                  <Text style={styles.subTitleTxt}>User's last name</Text>
                  <Input
                    placeholder=""
                    InputType={null}
                    containerStyle={styles.ticketsInputVw}
                    textInputStyle={{ marginTop: 2, paddingLeft: 8 }}
                    onChangeText={(text) => {
                      handleTicketInput("cand_lastName", text, selectedIndex);
                    }}
                    value={props?.ticketsDetails[selectedIndex]?.cand_lastName}
                  />
                </View>
                <View style={{ marginLeft: 5, marginTop: 8 }}>
                  <Text style={styles.subTitleTxt}>User's email</Text>
                  <Input
                    placeholder=""
                    InputType={null}
                    containerStyle={styles.ticketsInputVw}
                    textInputStyle={{ marginTop: 2, paddingLeft: 8 }}
                    onChangeText={(text) => {
                      handleTicketInput("cand_email", text, selectedIndex);
                    }}
                    value={props?.ticketsDetails[selectedIndex]?.cand_email}
                  />
                </View>
                <View style={{ marginLeft: 5, marginTop: 8 }}>
                  <Text style={styles.subTitleTxt}>User's Address</Text>
                  <View style={[styles.ticketsInputVw, styles.secInputVw]}>
                    <GooglePlacesAutocomplete
                      placeholder=""
                      fetchDetails={true}
                      onPress={(data, details = null) => {
                        // latitude: details.geometry.location.lat,
                        // longitude: details.geometry.location.lng,
                        handleTicketInput(
                          "cand_address",
                          details.formatted_address,
                          selectedIndex
                        );
                      }}
                      value={props?.ticketsDetails[selectedIndex]?.cand_address}
                      query={{
                        key: "AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM",
                        language: "en",
                      }}
                      textInputProps={{
                        placeholderTextColor: BLACK_COLOR_CODE,
                        onChangeText: (text) => {
                          handleTicketInput(
                            "cand_address",
                            text,
                            selectedIndex
                          );
                        },
                        value:
                          props?.ticketsDetails[selectedIndex]?.cand_address,
                      }}
                      styles={{
                        textInputContainer: {
                          fontFamily: FONT_FAMILY_REGULAR,
                          color: BLACK_COLOR_CODE,
                        },
                        textInput: {
                          fontSize: 20,
                          color: LIGHT_BLACK_COLOR_CODE,
                          fontFamily: FONT_FAMILY_REGULAR,
                        },
                        listView: {
                          backgroundColor: WHITE_COLOR_CODE,
                          width: "90%",
                        },
                      }}
                      minLength={2}
                      autoFocus={false}
                      returnKeyType={"default"}
                    />
                  </View>
                </View>
                <View style={{ marginLeft: 5, marginTop: 8 }}>
                  <Text style={styles.subTitleTxt}>User's Phone number</Text>
                  <Input
                    placeholder=""
                    InputType={null}
                    maxLength={10}
                    keyboardType={"number-pad"}
                    containerStyle={styles.ticketsInputVw}
                    textInputStyle={{ marginTop: 2, paddingLeft: 8 }}
                    onChangeText={(text) => {
                      handleTicketInput("cand_phoneNo", text, selectedIndex);
                    }}
                    value={props?.ticketsDetails[selectedIndex]?.cand_phoneNo}
                  />
                </View>
                <View style={[styles.modalBttnVw, { left: 25 }]}>
                  {selectedIndex > 0 ? (
                    <Button
                      style={[styles.modalBttn, { width: "36%" }]}
                      buttonLabelStyle={[
                        styles.modalBttnTxt,
                        {
                          color: WHITE_COLOR_CODE,
                        },
                      ]}
                      onPress={() => {
                        setselectedIndex(selectedIndex - 1);
                      }}
                      buttonText={"Previous"}
                    />
                  ) : null}

                  <Button
                    style={[styles.modalBttn, { width: "36%" }]}
                    buttonLabelStyle={[
                      styles.modalBttnTxt,
                      {
                        color: WHITE_COLOR_CODE,
                      },
                    ]}
                    onPress={() => {
                      setselectedIndex(selectedIndex + 1);
                    }}
                    buttonText={"Next"}
                  />
                </View>
              </View>
            ) : (
              <>
                {props?.ticketsDetails?.map((item, index) => {
                  return (
                    <View style={styles.ticketDetailVw}>
                      <Text style={styles.ticketTxt}>
                        Ticket Number : {index + 1} [{item.ticket_Name}]
                      </Text>
                      <View style={{ marginLeft: 5, marginTop: 8 }}>
                        <Text style={styles.subTitleTxt}>
                          User's first name
                        </Text>
                        <Input
                          placeholder=""
                          InputType={null}
                          containerStyle={styles.ticketsInputVw}
                          textInputStyle={{ marginTop: 2, paddingLeft: 8 }}
                          onChangeText={(text) => {
                            handleTicketInput("cand_firstName", text, index);
                          }}
                          value={item.cand_firstName}
                        />
                      </View>
                      <View style={{ marginLeft: 5, marginTop: 8 }}>
                        <Text style={styles.subTitleTxt}>User's last name</Text>
                        <Input
                          placeholder=""
                          InputType={null}
                          containerStyle={styles.ticketsInputVw}
                          textInputStyle={{ marginTop: 2, paddingLeft: 8 }}
                          onChangeText={(text) => {
                            handleTicketInput("cand_lastName", text, index);
                          }}
                          value={item.cand_lastName}
                        />
                      </View>
                      <View style={{ marginLeft: 5, marginTop: 8 }}>
                        <Text style={styles.subTitleTxt}>User's email</Text>
                        <Input
                          placeholder=""
                          InputType={null}
                          containerStyle={styles.ticketsInputVw}
                          textInputStyle={{ marginTop: 2, paddingLeft: 8 }}
                          onChangeText={(text) => {
                            handleTicketInput("cand_email", text, index);
                          }}
                          value={item.cand_email}
                        />
                      </View>
                      <View style={{ marginLeft: 5, marginTop: 8 }}>
                        <Text style={styles.subTitleTxt}>User's Address</Text>
                        <View
                          style={[styles.ticketsInputVw, styles.secInputVw]}
                        >
                          <GooglePlacesAutocomplete
                            placeholder=""
                            fetchDetails={true}
                            onPress={(data, details = null) => {
                              handleTicketInput(
                                "cand_address",
                                details.formatted_address,
                                index
                              );
                            }}
                            value={item.cand_address}
                            query={{
                              key: "AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM",
                              language: "en",
                            }}
                            textInputProps={{
                              placeholderTextColor: BLACK_COLOR_CODE,
                              onChangeText: (text) => {
                                handleTicketInput("cand_address", text, index);
                              },
                              value: item.cand_address,
                            }}
                            styles={{
                              textInputContainer: {
                                fontFamily: FONT_FAMILY_REGULAR,
                                color: BLACK_COLOR_CODE,
                              },
                              textInput: {
                                fontSize: 20,
                                color: LIGHT_BLACK_COLOR_CODE,
                                fontFamily: FONT_FAMILY_REGULAR,
                              },
                              listView: {
                                backgroundColor: WHITE_COLOR_CODE,
                                width: "90%",
                              },
                            }}
                            minLength={2}
                            autoFocus={false}
                            returnKeyType={"default"}
                          />
                        </View>
                      </View>
                      <View style={{ marginLeft: 5, marginTop: 8 }}>
                        <Text style={styles.subTitleTxt}>
                          User's Phone number
                        </Text>
                        <Input
                          placeholder=""
                          InputType={null}
                          maxLength={10}
                          keyboardType={"number-pad"}
                          containerStyle={styles.ticketsInputVw}
                          textInputStyle={{ marginTop: 2, paddingLeft: 8 }}
                          onChangeText={(text) => {
                            handleTicketInput("cand_phoneNo", text, index);
                          }}
                          value={item.cand_phoneNo}
                        />
                      </View>
                    </View>
                  );
                })}
              </>
            )}
            <Text style={[styles.titleTxt, { marginLeft: 0 }]}>
              Ticket Total
            </Text>
            {props?.ticketsData?.map((item) => {
              return (
                <View style={styles.straightVw}>
                  <Text style={styles.ticketsNameTxt}>
                    ({item.quantity}) {item.name}
                  </Text>
                  <Text style={styles.smallTxt}>${item.total_amount}</Text>
                </View>
              );
            })}
            <View style={styles.straightVw}>
              <Text style={styles.subTitleTxt}>Service fee</Text>
              <Text style={styles.subTitleTxt}>
                {props?.eventDetails?.serviceAmount
                  ? props?.eventDetails?.serviceAmount
                  : "0.0"}
              </Text>
            </View>
            <View style={[styles.straightVw, { borderBottomWidth: 0.5 }]}>
              <Text style={styles.subTitleTxt}>Taxes</Text>
              <Text style={[styles.subTitleTxt]}>
                {props?.eventDetails?.taxesAmount
                  ? props?.eventDetails?.taxesAmount
                  : "0.0"}
              </Text>
            </View>
            <View style={styles.straightVw}>
              <Text style={styles.subTitleTxt}>Total</Text>
              <Text style={styles.subTitleTxt}>
                {props?.totalAmount ? props?.totalAmount : "0.0"}
              </Text>
            </View>
            <View style={styles.modalBttnVw}>
              <Button
                style={[
                  styles.modalBttn,
                  { backgroundColor: SMALL_TEXT_COLOR_CODE },
                ]}
                buttonLabelStyle={[
                  styles.modalBttnTxt,
                  {
                    color: WHITE_COLOR_CODE,
                  },
                ]}
                onPress={() =>
                  props.onPressTicketResp(props.buyTicketModal - 1)
                }
                buttonText={"Back"}
              />
              {/* {props?.eventDetails?.ticket_price > 0 && ( */}
              <Button
                style={styles.modalBttn}
                buttonLabelStyle={styles.modalBttnTxt}
                onPress={() => {
                  // setselectedIndex();
                  props.onPressTicketResp(3);
                }}
                buttonText={"Next"}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};
export default TicketDetailsScreen;
