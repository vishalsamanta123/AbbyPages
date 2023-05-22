import React, { useState } from "react";
import { View, Modal, TouchableOpacity, Platform } from "react-native";
import styles from "./styles";
import moment from "moment";
import Button from "../../../../../Components/Button";
import { COLORS, FONT_FAMILY } from "../../../../../Utils/Constant";
import Loader from "../../../../../Utils/Loader";
import _ from "lodash";
import Input from "../../../../../Components/Input";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import ScaleText from "../../../../../Components/ScaleText";
import MainHeader from "../../../../../Components/MainHeader";
import PageScroll from "../../../../../Components/PageScroll";

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
      transparent={true}
      visible={props.buyTicketModal === 2}
      onRequestClose={() => {
        props.setBuyTicketModal("");
      }}
    >
      <View style={styles.modalCon}>
        {props?.loader && <Loader state={props?.loader} />}
        <MainHeader headerText={"But Ticket"} />
        <PageScroll keyboardShouldPersistTaps={"always"}>
          <View style={styles.modalsVw}>
            <ScaleText style={styles.eventNameTx}>
              {props?.eventDetails?.event_name}
            </ScaleText>
            <ScaleText style={styles.startDateTxt}>
              Event Starts : {eventDate}
            </ScaleText>
            <ScaleText style={styles.selectTxt}>Create Ticket</ScaleText>
            {selectedIndex < props?.ticketsDetails?.length && (
              <View style={styles.ticketDetailVw}>
                <ScaleText style={styles.ticketTxt}>
                  Ticket Number : {selectedIndex + 1} [
                  {props?.ticketsDetails[selectedIndex].ticket_Name}]
                </ScaleText>
                <View style={{ marginLeft: 5, marginTop: 8 }}>
                  <ScaleText style={styles.subTitleTxt}>
                    User's first name
                  </ScaleText>
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
                  <ScaleText style={styles.subTitleTxt}>
                    User's last name
                  </ScaleText>
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
                  <ScaleText style={styles.subTitleTxt}>User's email</ScaleText>
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
                  <ScaleText style={styles.subTitleTxt}>
                    User's Address
                  </ScaleText>
                  <View style={[styles.ticketsInputVw, styles.secInputVw]}>
                    <GooglePlacesAutocomplete
                      placeholder=""
                      fetchDetails={true}
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
                        placeholderTextColor: COLORS.BLACK,
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
                          fontFamily: FONT_FAMILY.REGULAR,
                          color: COLORS.BLACK,
                        },
                        textInput: {
                          fontSize: 20,
                          color: COLORS.LIGHT_BLACK,
                          fontFamily: FONT_FAMILY.REGULAR,
                        },
                        listView: {
                          backgroundColor: COLORS.WHITE,
                          width: "90%",
                        },
                      }}
                      minLength={2}
                    />
                  </View>
                </View>

                <View style={{ marginLeft: 5, marginTop: 8 }}>
                  <ScaleText style={styles.subTitleTxt}>
                    User's Phone number
                  </ScaleText>
                  <View style={styles.straightVw}>
                    <TouchableOpacity style={styles.codesVw}>
                      <ScaleText style={styles.codesTxt}>{"+91"}</ScaleText>
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
                          color: COLORS.WHITE,
                        },
                      ]}
                      onPress={() => {
                        setselectedIndex(selectedIndex - 1);
                      }}
                      buttonText={"Previous"}
                    />
                  ) : null}
                  {selectedIndex < props?.ticketsDetails?.length - 1 ? (
                    <Button
                      style={[styles.modalBttn, { width: "36%" }]}
                      buttonLabelStyle={[
                        styles.modalBttnTxt,
                        {
                          color: COLORS.WHITE,
                        },
                      ]}
                      onPress={() => {
                        setselectedIndex(selectedIndex + 1);
                      }}
                      buttonText={"Next"}
                    />
                  ) : null}
                </View>
              </View>
              // ) : (
              //   <>
              //     {props?.ticketsDetails?.map((item, index) => {
              //       console.log("item: ", item);
              //       return (
              //         <View style={styles.ticketDetailVw}>
              //           <ScaleText style={styles.ticketTxt}>
              //             Ticket Number : {index + 1} [{item.ticket_Name}]
              //           </ScaleText>
              //           <View style={{ marginLeft: 5, marginTop: 8 }}>
              //             <ScaleText style={styles.subTitleTxt}>
              //               User's first name
              //             </ScaleText>
              //             <Input
              //               placeholder=""
              //               InputType={null}
              //               containerStyle={styles.ticketsInputVw}
              //               textInputStyle={{ marginTop: 2, paddingLeft: 8 }}
              //               onChangeText={(text) => {
              //                 handleTicketInput("cand_firstName", text, index);
              //               }}
              //               value={item.cand_firstName}
              //             />
              //           </View>
              //           <View style={{ marginLeft: 5, marginTop: 8 }}>
              //             <ScaleText style={styles.subTitleTxt}>User's last name</ScaleText>
              //             <Input
              //               placeholder=""
              //               InputType={null}
              //               containerStyle={styles.ticketsInputVw}
              //               textInputStyle={{ marginTop: 2, paddingLeft: 8 }}
              //               onChangeText={(text) => {
              //                 handleTicketInput("cand_lastName", text, index);
              //               }}
              //               value={item.cand_lastName}
              //             />
              //           </View>
              //           <View style={{ marginLeft: 5, marginTop: 8 }}>
              //             <ScaleText style={styles.subTitleTxt}>User's email</ScaleText>
              //             <Input
              //               placeholder=""
              //               InputType={null}
              //               containerStyle={styles.ticketsInputVw}
              //               textInputStyle={{ marginTop: 2, paddingLeft: 8 }}
              //               onChangeText={(text) => {
              //                 handleTicketInput("cand_email", text, index);
              //               }}
              //               value={item.cand_email}
              //             />
              //           </View>
              //           <View style={{ marginLeft: 5, marginTop: 8 }}>
              //             <ScaleText style={styles.subTitleTxt}>User's Address</ScaleText>
              //             <View
              //               style={[styles.ticketsInputVw, styles.secInputVw]}
              //             >
              //               <GooglePlacesAutocomplete
              //                 placeholder=""
              //                 fetchDetails={true}
              //                 onPress={(data, details = null) => {
              //                   handleTicketAddressInput(
              //                     "cand_address",
              //                     data.description,
              //                     details.geometry.location.lat,
              //                     details.geometry.location.lng,
              //                     index
              //                   );
              //                 }}
              //                 value={item.cand_address}
              //                 query={{
              //                   key: "AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM",
              //                   language: "en",
              //                 }}
              //                 textInputProps={{
              //                   placeholderTextColor: BLACK_COLOR_CODE,
              //                   onChangeText: (text) => {
              //                     handleTicketAddressInput(
              //                       "cand_address",
              //                       text,
              //                       item.cand_lat,
              //                       item.cand_long,
              //                       index
              //                     );
              //                   },
              //                   value: item.cand_address,
              //                 }}
              //                 styles={{
              //                   textInputContainer: {
              //                     fontFamily: FONT_FAMILY_REGULAR,
              //                     color: COLORS.BLACK,
              //                   },
              //                   textInput: {
              //                     fontSize: 20,
              //                     color: COLORS.BLACK,
              //                     fontFamily: FONT_FAMILY_REGULAR,
              //                   },
              //                   listView: {
              //                     backgroundColor: COLORS.WHITE,
              //                     width: "90%",
              //                   },
              //                 }}
              //                 minLength={2}
              //                 returnKeyType={"default"}
              //               />
              //             </View>
              //           </View>
              //           <View style={{ marginLeft: 5, marginTop: 8 }}>
              //             <ScaleText style={styles.subTitleTxt}>
              //               User's Phone number
              //             </ScaleText>
              //             <View style={styles.straightVw}>
              //               <TouchableOpacity style={styles.codesVw}>
              //                 <ScaleText style={styles.codesTxt}>{"+91"}</ScaleText>
              //               </TouchableOpacity>
              //               <Input
              //                 placeholder=""
              //                 InputType={null}
              //                 maxLength={10}
              //                 keyboardType={"number-pad"}
              //                 containerStyle={[
              //                   styles.ticketsInputVw,
              //                   { width: "72%" },
              //                 ]}
              //                 textInputStyle={{ marginTop: 2, paddingLeft: 8 }}
              //                 onChangeText={(text) => {
              //                   handleTicketInput("cand_phoneNo", text, index);
              //                 }}
              //                 value={item.cand_phoneNo}
              //               />
              //             </View>
              //           </View>
              //         </View>
              //       );
              //     })}
              //   </>
            )}
            <ScaleText style={[styles.titleTxt, { marginLeft: 0 }]}>
              Ticket Total
            </ScaleText>
            {props?.ticketsData?.map((item) => {
              return (
                <View style={styles.straightVw}>
                  <ScaleText style={styles.ticketsNameTxt}>
                    ({item.quantity}) {item.name}
                  </ScaleText>
                  <ScaleText style={styles.smallTxt}>
                    ${item.total_amount}
                  </ScaleText>
                </View>
              );
            })}
            <View style={styles.straightVw}>
              <ScaleText style={styles.subTitleTxt}>Service fee</ScaleText>
              <ScaleText style={styles.subTitleTxt}>
                {props?.eventDetails?.serviceAmount
                  ? props?.eventDetails?.serviceAmount
                  : "0.00"}
              </ScaleText>
            </View>
            <View style={[styles.straightVw, { borderBottomWidth: 0.5 }]}>
              <ScaleText style={styles.subTitleTxt}>Taxes</ScaleText>
              <ScaleText style={[styles.subTitleTxt]}>
                {props?.eventDetails?.taxesAmount
                  ? props?.eventDetails?.taxesAmount
                  : "0.00"}
              </ScaleText>
            </View>
            <View style={styles.straightVw}>
              <ScaleText style={styles.subTitleTxt}>Total</ScaleText>
              <ScaleText style={styles.subTitleTxt}>
                {props?.totalAmount ? props?.totalAmount : "0.00"}
              </ScaleText>
            </View>
            <View style={styles.modalBttnVw}>
              <Button
                style={[
                  styles.modalBttn,
                  { backgroundColor: COLORS.SMALL_TEXT },
                ]}
                buttonLabelStyle={[
                  styles.modalBttnTxt,
                  {
                    color: COLORS.WHITE,
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
        </PageScroll>
      </View>
    </Modal>
  );
};
export default TicketDetailsScreen;
