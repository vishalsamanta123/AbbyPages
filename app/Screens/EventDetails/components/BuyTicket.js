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
import { Picker } from "@react-native-community/picker";
import { CardField, useStripe } from "@stripe/stripe-react-native";
import Loader from "../../../Utils/Loader";
import Input from "../../../Components/Input";
import InputSpinner from "react-native-input-spinner";
import _ from "lodash";
const EventListingScreen = (props) => {
  const [dropDown, setDropDown] = useState(false);
  const eventDate = moment(props?.eventDetails?.created_at).format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
  );
  const handleTicketVal = (text) => {
    props.setTicketBuyData({
      ...props.ticketBuyData,
      number_of_ticket: text,
    });
    setDropDown(false);
    Keyboard.dismiss();
  };
  const getqty = (item) => {
    var getIndex = _.findIndex(props?.ticketsData, {
      category_id: item.category_id,
    });
    if (getIndex >= 0) {
      return props?.ticketsData[getIndex]?.quantity;
    }
    console.log("props?.ticketsData: ", props?.ticketsData);
  };
  const addProductOnCart = async (item, value, index) => {
    try {
      const selectedCategory = {
        category_id: item.category_id,
        amount: item.amount,
        name: item.name,
        total_amount: item.amount * value,
        quantity: value,
      };
      const newTicketData = [...props.ticketsData];
      console.log('newTicketData: ', newTicketData);
      props?.setTicketsData([...props?.ticketsData, selectedCategory]);
      console.log('newTicketData: ', newTicketData);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const removeFromCart = (item, value) => {
    try {
      const selectedCategory = {
        category_id: item.category_id,
        amount: item.amount,
        name: item.name,
        total_amount: item.amount * value,
        quantity: value,
      };
      props?.setTicketsData([...props?.ticketsData, selectedCategory]);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.buyTicketModal}
      onRequestClose={() => {
        props.setBuyTicketModal(false);
      }}
    >
      <KeyboardAvoidingView style={styles.ticketModal}>
        <Header
          mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
          tintColor={WHITE_COLOR_CODE}
          HeaderText="Buy Ticket"
          leftImg={""}
          RightImg={null}
        />
        <ScrollView>
          {props?.loader && <Loader state={props?.loader} />}
          <View style={styles.ticketModalVw}>
            <Text style={styles.eventNameTx}>
              {props?.eventDetails?.event_name}
            </Text>
            <Text style={styles.startDateTxt}>Event Starts : {eventDate}</Text>
            <Text style={styles.selectTxt}>
              {props.resposes === 1
                ? "Select Ticket"
                : props.resposes === 2 && "Create Ticket"}
            </Text>
            {props.resposes === 1 ? (
              <>
                <Text style={styles.titleTxt}>Qty :</Text>
                <Text style={[styles.subTitleTxt, { marginLeft: 5 }]}>
                  Show best available for
                </Text>
                <Input
                  placeholder=""
                  keyboardType={"number-pad"}
                  InputType={null}
                  containerStyle={styles.smallInputVw}
                  textInputStyle={{ marginTop: 2, paddingLeft: 8 }}
                  onChangeText={(text) => {
                    props.setTicketBuyData({
                      ...props.ticketBuyData,
                      qty: text,
                    });
                  }}
                  value={props?.ticketBuyData?.qty}
                />
                <Button style={styles.bttnSubmitVw} buttonText={"Submit"} />
                <View style={{ marginVertical: 12 }}>
                  <Text style={styles.titleTxt}>Ticket Category</Text>
                  <FlatList
                    data={props.ticketCategory}
                    renderItem={({ item, index }) => {
                      return (
                        <View style={styles.ticketCategoryVw}>
                          <View>
                            <Text style={styles.ticketCtgryTxt}>
                              {item?.name}
                            </Text>
                            <Text style={styles.ticketAmtTxt}>
                              $ {item?.amount}
                            </Text>
                          </View>
                          <View style={{ alignItems: "flex-end" }}>
                            <InputSpinner
                              value={getqty(item, index)}
                              onIncrease={(value) =>
                                addProductOnCart(item, value, index)
                              }
                              onDecrease={(value) =>
                                removeFromCart(item, value, index)
                              }
                              max={10}
                              min={0}
                              step={1}
                              editable={false}
                              rounded={false}
                              height={32}
                              width={"60%"}
                              textColor={WHITE_COLOR_CODE}
                              colorMax={YELLOW_COLOR_CODE}
                              colorMin={YELLOW_COLOR_CODE}
                              colorPress={YELLOW_COLOR_CODE}
                              buttonPressTextColor={YELLOW_COLOR_CODE}
                              buttonFontSize={28}
                              inputStyle={styles.spinnerInput}
                              buttonStyle={styles.addItemBttn}
                              buttonFontFamily={FONT_FAMILY_REGULAR}
                              style={styles.spinnerVw}
                            />
                            <Text style={styles.smallTxt}>
                              Amount: {item.amount}
                            </Text>
                          </View>
                        </View>
                      );
                    }}
                  />
                </View>
                <Text style={[styles.titleTxt, { marginLeft: 0 }]}>
                  Ticket Total
                </Text>
                <View style={styles.straightVw}>
                  <Text style={styles.subTitleTxt}>Service fee</Text>
                  <Text style={styles.subTitleTxt}>
                    {props?.ticketBuyData?.total_Tcktamount
                      ? props?.ticketBuyData?.total_Tcktamount
                      : "0.0"}
                  </Text>
                </View>
                <View style={[styles.straightVw, { borderBottomWidth: 0.5 }]}>
                  <Text style={styles.subTitleTxt}>Taxes</Text>
                  <Text style={[styles.subTitleTxt]}>
                    {props?.ticketBuyData?.taxesAmount
                      ? props?.ticketBuyData?.taxesAmount
                      : "0.0"}
                  </Text>
                </View>
                <View style={styles.straightVw}>
                  <Text style={styles.subTitleTxt}>Total </Text>
                  <Text style={styles.subTitleTxt}>
                    {props?.ticketBuyData?.taxesAmount
                      ? props?.ticketBuyData?.taxesAmount
                      : "0.0"}
                  </Text>
                </View>
              </>
            ) : (
              <></>
            )}
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
                onPress={() => props.onPressCancelTick()}
                buttonText={"Cancel"}
              />
              {props?.eventDetails?.ticket_price > 0 && (
                <Button
                  style={styles.modalBttn}
                  buttonLabelStyle={styles.modalBttnTxt}
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
                  }}
                  buttonText={"Next"}
                />
              )}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};
export default EventListingScreen;
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
