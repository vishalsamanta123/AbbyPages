import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
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
import Error from "../../../Components/Modal/error";
import { TouchableOpacity } from "react-native-gesture-handler";

const TicketDetailsScreen = (props) => {
  const eventDate = moment(props?.eventDetails?.created_at).format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
  );
  const [selectedIndex, setselectedIndex] = useState(0);
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
    if (key == "cand_phoneNo") {
      const tic = { ...ticket, cand_phoneNo: value, can_countrycode: "91" };
      NewEventTicket[index] = tic;
    }
    props.setTicketsDetails(NewEventTicket);
  };
  const handleTicketAddressInput = (key, address, lat, long, index) => {
    let NewEventTicket = [...props.ticketsDetails];
    const ticket = NewEventTicket[index];
    if (key === "cand_address") {
      const tic = {
        ...ticket,
        cand_address: address.toString(),
        cand_lat: lat,
        cand_long: long,
        can_countrycode: "91",
      };
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
      <View style={styles.modalCon}>
        <Error
          message={props.errorMessage}
          visible={props.visibleErr}
          closeModel={() => props.setVisibleErr(false)}
        />
        {props?.loader && <Loader state={props?.loader} />}
        <Header
          mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
          tintColor={WHITE_COLOR_CODE}
          HeaderText="Buy Ticket"
          leftImg={""}
          RightImg={null}
        />
        <ScrollView keyboardShouldPersistTaps={"always"}>
          <View style={styles.modalsVw}>
            <Text style={styles.eventNameTx}>
              {props?.eventDetails?.event_name}
            </Text>
            <Text style={styles.startDateTxt}>Event Starts : {eventDate}</Text>
            <Text style={styles.selectTxt}>Create Ticket</Text>
            {selectedIndex < props?.ticketsDetails?.length ? (
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
                      fetchDetails
                      onPress={(data, details = null) => {
                        handleTicketAddressInput(
                          "cand_address",
                          data.description,
                          details.geometry.location.lat,
                          details.geometry.location.lng,
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
                          handleTicketAddressInput(
                            "cand_address",
                            text,
                            props?.ticketsDetails[selectedIndex]?.cand_lat,
                            props?.ticketsDetails[selectedIndex]?.cand_long,
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
                    />
                  </View>
                </View>

                <View style={{ marginLeft: 5, marginTop: 8 }}>
                  <Text style={styles.subTitleTxt}>User's Phone number</Text>
                  <View style={styles.straightVw}>
                    <TouchableOpacity style={styles.codesVw}>
                      <Text style={styles.codesTxt}>{"+91"}</Text>
                    </TouchableOpacity>
                    <Input
                      placeholder=""
                      InputType={null}
                      maxLength={10}
                      keyboardType={"number-pad"}
                      containerStyle={[styles.ticketsInputVw, { width: "72%" }]}
                      textInputStyle={{ marginTop: 2, paddingLeft: 8 }}
                      onChangeText={(text) => {
                        handleTicketInput("cand_phoneNo", text, selectedIndex);
                      }}
                      value={props?.ticketsDetails[selectedIndex]?.cand_phoneNo}
                    />
                  </View>
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
                              handleTicketAddressInput(
                                "cand_address",
                                data.description,
                                details.geometry.location.lat,
                                details.geometry.location.lng,
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
                                handleTicketAddressInput(
                                  "cand_address",
                                  text,
                                  item.cand_lat,
                                  item.cand_long,
                                  index
                                );
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
                        <View style={styles.straightVw}>
                          <TouchableOpacity style={styles.codesVw}>
                            <Text style={styles.codesTxt}>{"+91"}</Text>
                          </TouchableOpacity>
                          <Input
                            placeholder=""
                            InputType={null}
                            maxLength={10}
                            keyboardType={"number-pad"}
                            containerStyle={[
                              styles.ticketsInputVw,
                              { width: "72%" },
                            ]}
                            textInputStyle={{ marginTop: 2, paddingLeft: 8 }}
                            onChangeText={(text) => {
                              handleTicketInput("cand_phoneNo", text, index);
                            }}
                            value={item.cand_phoneNo}
                          />
                        </View>
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
                  props.handleBuyTicket();
                }}
                buttonText={"Next"}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};
export default TicketDetailsScreen;
