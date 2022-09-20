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
  FONT_FAMILY_REGULAR,
  LIGHT_BLACK_COLOR_CODE,
  SMALL_TEXT_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import Loader from "../../../Utils/Loader";
import Input from "../../../Components/Input";
import InputSpinner from "react-native-input-spinner";
import _ from "lodash";
const BuyTicketScreen = (props) => {
  const eventDate = moment(props?.eventDetails?.created_at).format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.buyTicketModal === 3}
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
            <Text style={styles.selectTxt}>Ticket Payment</Text>
            <>
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
            </>
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
                  props.onPressCancelTick(props.buyTicketModal - 1)
                }
                buttonText={"Back"}
              />
              {/* {props?.eventDetails?.ticket_price > 0 && ( */}
              <Button
                style={styles.modalBttn}
                buttonLabelStyle={styles.modalBttnTxt}
                onPress={() => {
                  props.onPressTicketResp(2);
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
export default BuyTicketScreen;
{
  /* {props?.resposes === "" || props?.resposes === 1 ? (
            <>
              <Text style={styles.formsTxt}>
                Per Ticket Price :
                <Text style={{ color: LIGHT_GREEN_COLOR_CODE }}>
                  {" "}
                  ${props?.eventDetails?.ticket_price}
                </Text>
              </Text>
              {props?.eventDetails?.ticket_price > 0 ? (
                <>
                  {props?.resposes === "" && (
                    <Text style={styles.ticketConfrTxt}>
                      Do you want to buy ticket of this event?
                    </Text>
                  )}
                </>
              ) : (
                <Text style={styles.ticketConfrTxt}>No ticket available</Text>
              )}
              {props?.resposes === 1 && (
                <>
                  <View style={{ paddingVertical: 4 }}>
                    <View style={styles.straightCont}>
                      <Text style={styles.formsTxt}>No. of Tickets :</Text>
                      <View style={{ width: "50%", paddingHorizontal: 5 }}>
                        <View
                          style={[styles.straightCont, styles.ticketInputVw]}
                        >
                          <TextInput
                            placeholder="Number"
                            placeholderTextColor={WHITE_COLOR_CODE}
                            style={styles.ticketInput}
                            onChangeText={(text) => {
                              props.setTicketBuyData({
                                ...props.ticketBuyData,
                                number_of_ticket: text,
                              });
                            }}
                            value={props?.ticketBuyData?.number_of_ticket.toString()}
                            onFocus={() => setDropDown(true)}
                            maxLength={parseInt(
                              props?.eventDetails?.total_ticket?.toString()
                                ? props?.eventDetails?.total_ticket?.toString()
                                    ?.length
                                : 2
                            )}
                            onEndEditing={() => setDropDown(false)}
                            keyboardType={"phone-pad"}
                          />
                          <Image
                            style={styles.ticketInputImg}
                            source={require("../../../Assets/dropdown_icon1.png")}
                          />
                        </View>
                        {dropDown ? (
                          <View style={styles.numbersListVw}>
                            <ScrollView
                              keyboardShouldPersistTaps={"always"}
                              nestedScrollEnabled={true}
                            >
                              {props?.numbers?.map((item, index) => {
                                return (
                                  <TouchableOpacity
                                    onPress={() => handleTicketVal(index + 1)}
                                    style={styles.numbersListCon}
                                  >
                                    <Text style={styles.numberTxt}>
                                      {index + 1}
                                    </Text>
                                  </TouchableOpacity>
                                );
                              })}
                            </ScrollView>
                          </View>
                        ) : null}
                      </View>
                    </View>
                    <Text style={[styles.enteredTxt, {}]}>
                      Total Price :{" "}
                      {props?.eventDetails?.ticket_price *
                        props.ticketBuyData.number_of_ticket}
                    </Text>
                  </View>
                </>
              )}
            </>
          ) : (
            <>
              {props?.resposes === 2 ? (
                <View style={{ paddingTop: 6 }}>
                  <Text style={styles.formsTxt}>Booking Details</Text>
                  <View style={[styles.formsFillsVw, { marginTop: 12 }]}>
                    <Text style={styles.enteredTxt}>Country</Text>
                    <View style={styles.formContainersVw}>
                      <Picker
                        onValueChange={(itemValue) => {
                          props.setTicketBuyData({
                            ...props.ticketBuyData,
                            country: itemValue,
                          });
                        }}
                        selectedValue={props.ticketBuyData.country}
                        mode={"dropdown"}
                        style={styles.formsStyleVws}
                      >
                        {props?.counrtys?.map((item) => {
                          return (
                            <Picker.Item label={item.name} value={item.name} />
                          );
                        })}
                      </Picker>
                    </View>
                  </View>
                  <View style={styles.formsFillsVw}>
                    <Text style={styles.enteredTxt}>First Name</Text>
                    <View style={styles.formContainersVw}>
                      <TextInput
                        style={styles.formsStyleVws}
                        onChangeText={(itemValue) => {
                          props.setTicketBuyData({
                            ...props.ticketBuyData,
                            first_name: itemValue,
                          });
                        }}
                        value={props.ticketBuyData.first_name}
                      />
                    </View>
                  </View>
                  <View style={styles.formsFillsVw}>
                    <Text style={styles.enteredTxt}>Last Name</Text>
                    <View style={styles.formContainersVw}>
                      <TextInput
                        style={styles.formsStyleVws}
                        onChangeText={(itemValue) => {
                          props.setTicketBuyData({
                            ...props.ticketBuyData,
                            last_name: itemValue,
                          });
                        }}
                        value={props.ticketBuyData.last_name}
                      />
                    </View>
                  </View>
                  <View style={styles.formsFillsVw}>
                    <Text style={styles.enteredTxt}>Address</Text>
                    <View style={styles.formContainersVw}>
                      <TextInput
                        style={styles.formsStyleVws}
                        onChangeText={(itemValue) => {
                          props.setTicketBuyData({
                            ...props.ticketBuyData,
                            address: itemValue,
                          });
                        }}
                        value={props.ticketBuyData.address}
                      />
                    </View>
                  </View>
                  <View style={styles.formsFillsVw}>
                    <Text style={styles.enteredTxt}>City</Text>
                    <View style={styles.formContainersVw}>
                      <TextInput
                        style={styles.formsStyleVws}
                        onChangeText={(itemValue) => {
                          props.setTicketBuyData({
                            ...props.ticketBuyData,
                            city: itemValue,
                          });
                        }}
                        value={props.ticketBuyData.city}
                      />
                    </View>
                  </View>
                  <View style={styles.formsFillsVw}>
                    <Text style={styles.enteredTxt}>Email</Text>
                    <View style={styles.formContainersVw}>
                      <TextInput
                        style={styles.formsStyleVws}
                        onChangeText={(itemValue) => {
                          props.setTicketBuyData({
                            ...props.ticketBuyData,
                            email_id: itemValue,
                          });
                        }}
                        value={props.ticketBuyData.email_id}
                      />
                    </View>
                  </View>
                  <View style={styles.formsFillsVw}>
                    <Text style={styles.enteredTxt}>Phone no.</Text>
                    <View style={styles.formContainersVw}>
                      <TextInput
                        style={styles.formsStyleVws}
                        onChangeText={(itemValue) => {
                          props.setTicketBuyData({
                            ...props.ticketBuyData,
                            phoneNo: itemValue,
                          });
                        }}
                        value={props.ticketBuyData.phoneNo}
                        keyboardType={"phone-pad"}
                        maxLength={10}
                      />
                    </View>
                  </View>
                </View>
              ) : (
                <>
                  {props?.resposes === 3 ? (
                    <>
                      <Text style={styles.successTxt}>
                        {props?.successMessage}
                      </Text>
                      <Text style={[styles.formsTxt, styles.cardDetailTxt]}>
                        Enter Card Details for ticket payment
                      </Text>
                      <CardField
                        postalCodeEnabled={true}
                        placeholders={{
                          number: "Number",
                          expiration: "Expiry",
                          cvc: "Cvv",
                          postalCode: "ZipCode",
                        }}
                        style={styles.cardStyleVw}
                        cardStyle={styles.cardStyle}
                        onCardChange={(cardDetails) => {
                          props.setOnlineDetail({
                            ...props.onlineDetail,
                            brand: cardDetails.brand,
                            expiryMonth: cardDetails.expiryMonth,
                            expiryYear: cardDetails.expiryYear,
                            last4: cardDetails.last4,
                            postalCode: cardDetails.postalCode,
                            validCVC: cardDetails.validCVC,
                            validExpiryDate: cardDetails.validExpiryDate,
                            validNumber: cardDetails.validNumber,
                          });
                        }}
                      />
                    </>
                  ) : (
                    <>
                      {props?.resposes >= 4 && (
                        <View style={{ marginVertical: 5 }}>
                          <Text style={styles.successTxt}>
                            {props?.successMessage}
                          </Text>
                          <Text style={styles.ticketConfrTxt}>
                            Do you want to download ticket of this event?
                          </Text>
                        </View>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}

          <View style={{ marginTop: dropDown ? "35%" : "16%" }}>
            {props?.formError && (
              <>
                <Text style={styles.errorMssgTxt}>{props?.formErrorMssg}</Text>
              </>
            )}
            <View style={styles.modalBttnVw}>
              {props?.eventDetails?.ticket_price > 0 && (
                <Button
                  style={[
                    styles.modalBttn,
                    {
                      backgroundColor: YELLOW_COLOR_CODE,
                      paddingVertical: props?.resposes >= 4 ? 13 : 8,
                    },
                  ]}
                  buttonLabelStyle={[
                    styles.modalBttnTxt,
                    {
                      color: LIGHT_BLACK_COLOR_CODE,
                      fontSize: props?.resposes >= 4 ? 13 : 20,
                    },
                  ]}
                  onPress={() => {
                    if (props?.eventDetails?.ticket_price > 0) {
                      props.onPressTicketResp(
                        props?.resposes === ""
                          ? 1
                          : props?.resposes === 1
                          ? 2
                          : props?.resposes === 2
                          ? 3
                          : props?.resposes === 3
                          ? 4
                          : props?.resposes === 4 && 5
                      );
                    }
                    setDropDown(false);
                  }}
                  buttonText={
                    props?.resposes == ""
                      ? "Yes"
                      : props?.resposes >= 4
                      ? "Download Ticket"
                      : props?.resposes === 3
                      ? "Buy"
                      : "Next"
                  }
                />
              )}
              <Button
                style={[
                  styles.modalBttn,
                  {
                    paddingVertical: props?.resposes >= 4 ? 13 : 8,
                  },
                ]}
                buttonLabelStyle={[
                  styles.modalBttnTxt,
                  {
                    fontSize: props?.resposes >= 4 ? 13 : 20,
                  },
                ]}
                onPress={() => {
                  props.onPressCancelTick();
                  setDropDown(false);
                }}
                buttonText={"Cancel"}
              />
            </View>
          </View> */
}
