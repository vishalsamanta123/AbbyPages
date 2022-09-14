import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
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
} from "../../../Utils/Constant";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-community/picker";

const GenerateTicket = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleMoreOptions = (index) => {
    setSelectedOption(index);
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
      <ScrollView keyboardShouldPersistTaps="handled">
        {props.type === "busniess" && (
          <>
            <View style={styles.MainContainer}>
              <View style={{ marginHorizontal: 5 }}>
                <Text style={styles.headingTxt}>
                  Let's figure out what we are selling here.
                </Text>
                {props?.createEventData?.map((item, index) => {
                  return (
                    <View style={styles.mainGenerateVw}>
                      <View
                        style={[
                          styles.straightFlex,
                          { justifyContent: "space-between" },
                        ]}
                      >
                        <Text style={styles.noOfTicketTxt}>
                          Ticket Number- {index + 1}
                        </Text>
                        {index > 0 && (
                          <TouchableOpacity
                            onPress={() => props.handleRemoveTicket(index)}
                            style={styles.removeTicketVw}
                          >
                            <Image
                              style={{ width: 24, height: 24 }}
                              source={require("../../../Assets/cancelModalBtn.png")}
                            />
                          </TouchableOpacity>
                        )}
                      </View>
                      <Text style={styles.titlesTxt}>Ticket Title</Text>
                      <Input
                        InputType={""}
                        onChangeText={(value) =>
                          props.handleTicketInput("ticket_title", value, index)
                        }
                        value={props?.createEventData[index]?.ticket_title}
                        textInputStyle={styles.formsInputVw}
                      />
                      <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.titlesTxt}>Ticket Qty</Text>
                          <Input
                            InputType={""}
                            onChangeText={(value) =>
                              props.handleTicketInput(
                                "ticket_qty",
                                value,
                                index
                              )
                            }
                            value={props?.createEventData[index]?.ticket_qty}
                            textInputStyle={styles.formsInputVw}
                            keyboardType={"number-pad"}
                          />
                          <TouchableOpacity
                            onPress={() => handleMoreOptions(index)}
                            style={styles.straightVw}
                          >
                            <Image
                              source={require("../../../Assets/collection_icon_menu.png")}
                            />
                            <Text style={styles.moreOptionTxt}>
                              More Options
                            </Text>
                          </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.titlesTxt}>Ticket Price</Text>
                          <Input
                            InputType={""}
                            onChangeText={(value) =>
                              props.handleTicketInput(
                                "ticket_price",
                                value,
                                index
                              )
                            }
                            value={props?.createEventData[index]?.ticket_price}
                            keyboardType={"number-pad"}
                            textInputStyle={styles.formsInputVw}
                          />
                        </View>
                      </View>
                      {index === selectedOption ? (
                        <>
                          <View style={styles.datesColumn}>
                            <View style={styles.straightFlex}>
                              <TouchableOpacity
                                onPress={() => props.setStartDateModal(true)}
                                style={styles.datesCon}
                              >
                                <Text>Start Sale Date</Text>
                                <Image
                                  resizeMode={"contain"}
                                  style={{ width: 18, height: 18 }}
                                  source={require("../../../Assets/calendar_icon.png")}
                                />
                              </TouchableOpacity>
                              <DateTimePickerModal
                                isVisible={props.startDateModal}
                                mode="date"
                                minimumDate={new Date()}
                                onConfirm={(date) =>
                                  props.handleStartDate(date)
                                }
                                onCancel={props.handleStartDate()}
                              />
                              <TouchableOpacity
                                onPress={() => props.setEndDateModal(true)}
                                style={styles.datesCon}
                              >
                                <Text>End Sale Date</Text>
                                <Image
                                  resizeMode={"contain"}
                                  style={{ width: 18, height: 18 }}
                                  source={require("../../../Assets/calendar_icon.png")}
                                />
                                <DateTimePickerModal
                                  isVisible={props.endDateModal}
                                  mode="date"
                                  minimumDate={new Date()}
                                  onConfirm={(date) =>
                                    props.handleEndDate(date)
                                  }
                                  onCancel={props.handleEndDate()}
                                />
                              </TouchableOpacity>
                            </View>
                            <View style={styles.straightFlex}>
                              <TouchableOpacity
                                onPress={() => props.setStartTimeModal(true)}
                                style={styles.datesCon}
                              >
                                <Text>Start Sale Time</Text>
                                <Image
                                  resizeMode={"contain"}
                                  style={{ width: 18, height: 18 }}
                                  source={require("../../../Assets/calendar_icon.png")}
                                />
                                <DateTimePickerModal
                                  isVisible={props.startTimeModal}
                                  mode="date"
                                  minimumDate={new Date()}
                                  onConfirm={(date) =>
                                    props.handleStartTime(date)
                                  }
                                  onCancel={props.handleStartTime()}
                                />
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() => props.setEndTimeModal(true)}
                                style={styles.datesCon}
                              >
                                <Text>End Sale Time</Text>
                                <Image
                                  resizeMode={"contain"}
                                  style={{ width: 18, height: 18 }}
                                  source={require("../../../Assets/calendar_icon.png")}
                                />
                                <DateTimePickerModal
                                  isVisible={props.endTimeModal}
                                  mode="date"
                                  minimumDate={new Date()}
                                  onConfirm={(date) =>
                                    props.handleEndTime(date)
                                  }
                                  onCancel={props.handleEndTime()}
                                />
                              </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1 }}>
                              <Text
                                style={[styles.titlesTxt, { fontSize: 16 }]}
                              >
                                Ticket Description
                              </Text>
                              <View style={{}}>
                                <Input
                                  multiline={true}
                                  onChangeText={(value) =>
                                    props.handleTicketInput(
                                      "tckt_description",
                                      value,
                                      index
                                    )
                                  }
                                  value={
                                    props?.createEventData[index]
                                      ?.tckt_description
                                  }
                                  containerStyle={styles.descriptionVw}
                                  placeholder={"Write down"}
                                />
                              </View>
                              <TouchableOpacity
                                // onPress={() =>
                                //   props.handleCheckBoxes(
                                //     "",
                                //     !props.createEventData[index]
                                //       .hide_description,
                                //     index
                                //   )
                                // }
                                style={styles.optionChooseVw}
                              >
                                <Image
                                  style={styles.checkImg}
                                  source={require("../../../Assets/unchecked_squared_icon_small.png")}
                                  // source={require('../../../Assets/checked_squared_icon_small.png')}
                                />
                                <Text>Hide description from buyer</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.optionChooseVw}>
                                <Image
                                  style={styles.checkImg}
                                  source={require("../../../Assets/unchecked_squared_icon_small.png")}
                                  // source={require('../../../Assets/checked_squared_icon_small.png')}
                                />
                                <Text>Display remaining inventory</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.optionChooseVw}>
                                <Image
                                  style={styles.checkImg}
                                  source={require("../../../Assets/unchecked_squared_icon_small.png")}
                                  // source={require('../../../Assets/checked_squared_icon_small.png')}
                                />
                                <Text>Make transferable</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.optionChooseVw}>
                                <Image
                                  style={styles.checkImg}
                                  source={require("../../../Assets/unchecked_squared_icon_small.png")}
                                  // source={require('../../../Assets/checked_squared_icon_small.png')}
                                />
                                <Text>Make ticket private</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.optionChooseVw}>
                                <Image
                                  style={styles.checkImg}
                                  source={require("../../../Assets/unchecked_squared_icon_small.png")}
                                  // source={require('../../../Assets/checked_squared_icon_small.png')}
                                />
                                <Text>Password required</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.optionChooseVw}>
                                <Image
                                  style={styles.checkImg}
                                  source={require("../../../Assets/unchecked_squared_icon_small.png")}
                                  // source={require('../../../Assets/checked_squared_icon_small.png')}
                                />
                                <Text>Limit tickets per order</Text>
                              </TouchableOpacity>
                              <View style={styles.optionChooseVw}>
                                <View style={{ flex: 1 }}>
                                  <Text style={styles.minMaxTxt}>Min</Text>
                                  <View style={styles.minMaxVw}>
                                    <Picker
                                      mode={"dropdown"}
                                      // onValueChange={(itemValue) => {
                                      //   props.setTicketBuyData({
                                      //     ...props.ticketBuyData,
                                      //     country: itemValue,
                                      //   });
                                      // }}
                                      // selectedValue={props.ticketBuyData.country}
                                    >
                                      {props?.numbers.map((item) => {
                                        return <Picker.Item label={item} />;
                                      })}
                                    </Picker>
                                  </View>
                                </View>
                                <View style={{ flex: 1 }}>
                                  <Text style={styles.minMaxTxt}>Max</Text>
                                  <View style={styles.minMaxVw}>
                                    <Picker
                                      // onValueChange={(itemValue) => {
                                      //   props.setTicketBuyData({
                                      //     ...props.ticketBuyData,
                                      //     country: itemValue,
                                      //   });
                                      // }}
                                      // selectedValue={props.ticketBuyData.country}
                                      mode={"dropdown"}
                                      label={"Max"}
                                    >
                                      {props?.numbers.map((item) => {
                                        return <Picker.Item label={item} />;
                                      })}
                                    </Picker>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </>
                      ) : null}

                      <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1, alignItems: "center" }}>
                          <Text style={styles.nonEditTitlesTxt}>
                            Abby Charges
                          </Text>
                          <TextInput
                            style={styles.nonEditInputVw}
                            editable={false}
                            numberOfLines={1}
                            placeholder={props?.createEventData[
                              index
                            ]?.abbyPagesAmt.toString()}
                            placeholderTextColor={BLACK_COLOR_CODE}
                          />
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                          <Text style={styles.nonEditTitlesTxt}>
                            Card Charges
                          </Text>
                          <TextInput
                            style={styles.nonEditInputVw}
                            editable={false}
                            numberOfLines={1}
                            placeholder={props?.createEventData[
                              index
                            ]?.cardAmt.toString()}
                            placeholderTextColor={BLACK_COLOR_CODE}
                          />
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                          <Text style={styles.nonEditTitlesTxt}>Total Amt</Text>
                          <TextInput
                            style={styles.nonEditInputVw}
                            editable={false}
                            numberOfLines={1}
                            placeholder={props?.createEventData[
                              index
                            ]?.totalPrice.toString()}
                            placeholderTextColor={BLACK_COLOR_CODE}
                          />
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                          <Text style={styles.nonEditTitlesTxt}>You get</Text>
                          <TextInput
                            style={styles.nonEditInputVw}
                            editable={false}
                            numberOfLines={1}
                            placeholder={props?.createEventData[
                              index
                            ]?.youGetAmt.toString()}
                            placeholderTextColor={BLACK_COLOR_CODE}
                          />
                        </View>
                      </View>
                      <Text style={styles.titlesTxt}>Payment Option</Text>
                      <View style={styles.formsInputCon}>
                        <Picker
                          onValueChange={(itemValue) => {
                            let NewEventTicket = [...props.createEventData];
                            const ticket = NewEventTicket[index];
                            const tic = { ...ticket, payOtp: itemValue };
                            NewEventTicket[index] = tic;
                          }}
                          selectedValue={props?.createEventData[index]?.payOtp}
                          mode={"dropdown"}
                          style={[styles.formsInputVw, { height: 35 }]}
                        >
                          <Picker.Item
                            label={"Extra amount paid by buyer"}
                            value={1}
                          />
                          <Picker.Item
                            label={"Extra amount paid by seller"}
                            value={2}
                          />
                        </Picker>
                      </View>
                    </View>
                  );
                })}
                <TouchableOpacity
                  style={[styles.straightFlex, styles.addMoreTckVw]}
                  onPress={() => props.handleAddMoreTickets()}
                >
                  <Image
                    style={{ width: 16, height: 16 }}
                    source={require("../../../Assets/qty_plus_icon.png")}
                  />
                  <Text style={styles.moreOptionTxt}>Add More Tickets</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
        <View style={styles.twoBttnsVw}>
          <Button
            buttonText={"Back"}
            style={styles.bttnBackVw}
            onPress={() => props.setFormView(props.formView - 1)}
          />
          <Button
            buttonText={"Stripe Connect"}
            style={styles.bttnNotwoVw}
            onPress={() => props.onPressNextForm()}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default GenerateTicket;
