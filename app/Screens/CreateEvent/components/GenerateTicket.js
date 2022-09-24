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
  const [selectedIndex, setSelectedIndex] = useState({
    indexNo: "",
    keyPress: "",
  });
  const closeDate = () => {
    setSelectedIndex({
      indexNo: "",
      keyPress: "",
    });
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
        onPressBackFun={() => props.handleBackFun()}
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
                <Text style={styles.mainTitlesTxt}>Generate Ticket -:</Text>
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
                            onPress={() =>
                              props.handleMoreOptions(
                                "showMore",
                                !props.createEventData[index].showMore,
                                index
                              )
                            }
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
                      {props.createEventData[index].showMore ? (
                        <>
                          <View style={styles.datesColumn}>
                            <View style={styles.straightFlex}>
                              <TouchableOpacity
                                onPress={() =>
                                  setSelectedIndex({
                                    ...selectedIndex,
                                    indexNo: index,
                                    keyPress: "tckt_start_date",
                                  })
                                }
                                style={styles.datesCon}
                              >
                                <Text>
                                  {props?.createEventData[index]
                                    ?.tckt_start_date != ""
                                    ? props?.createEventData[index]
                                        ?.tckt_start_date
                                    : "Start Sale Date"}
                                </Text>
                                <Image
                                  resizeMode={"contain"}
                                  style={{ width: 18, height: 18 }}
                                  source={require("../../../Assets/calendar_icon.png")}
                                />
                              </TouchableOpacity>
                              <DateTimePickerModal
                                isVisible={
                                  index === selectedIndex.indexNo &&
                                  selectedIndex.keyPress === "tckt_start_date"
                                }
                                mode="date"
                                minimumDate={new Date()}
                                onConfirm={(datetime) => {
                                  closeDate();
                                  props.handleTicketDateTime(
                                    "tckt_start_date",
                                    datetime,
                                    index
                                  );
                                }}
                                onCancel={() => closeDate()}
                              />
                              <TouchableOpacity
                                onPress={() =>
                                  setSelectedIndex({
                                    ...selectedIndex,
                                    indexNo: index,
                                    keyPress: "tckt_end_date",
                                  })
                                }
                                style={styles.datesCon}
                              >
                                <Text>
                                  {props?.createEventData[index]
                                    ?.tckt_end_date != ""
                                    ? props?.createEventData[index]
                                        ?.tckt_end_date
                                    : "End Sale Date"}
                                </Text>
                                <Image
                                  resizeMode={"contain"}
                                  style={{ width: 18, height: 18 }}
                                  source={require("../../../Assets/calendar_icon.png")}
                                />
                                <DateTimePickerModal
                                  isVisible={
                                    index === selectedIndex.indexNo &&
                                    selectedIndex.keyPress === "tckt_end_date"
                                  }
                                  mode="date"
                                  minimumDate={new Date()}
                                  onConfirm={(datetime) => {
                                    closeDate();
                                    props.handleTicketDateTime(
                                      "tckt_end_date",
                                      datetime,
                                      index
                                    );
                                  }}
                                  onCancel={() => closeDate()}
                                />
                              </TouchableOpacity>
                            </View>
                            <View style={styles.straightFlex}>
                              <TouchableOpacity
                                onPress={() =>
                                  setSelectedIndex({
                                    ...selectedIndex,
                                    indexNo: index,
                                    keyPress: "tckt_start_time",
                                  })
                                }
                                style={styles.datesCon}
                              >
                                <Text>
                                  {props?.createEventData[index]
                                    ?.tckt_start_time != ""
                                    ? props?.createEventData[index]
                                        ?.tckt_start_time
                                    : "Start Sale Time"}
                                </Text>
                                <Image
                                  resizeMode={"contain"}
                                  style={{ width: 18, height: 18 }}
                                  source={require("../../../Assets/calendar_icon.png")}
                                />
                                <DateTimePickerModal
                                  isVisible={
                                    index === selectedIndex.indexNo &&
                                    selectedIndex.keyPress === "tckt_start_time"
                                  }
                                  mode="time"
                                  minimumDate={new Date()}
                                  onConfirm={(datetime) => {
                                    closeDate();
                                    props.handleTicketDateTime(
                                      "tckt_start_time",
                                      datetime,
                                      index
                                    );
                                  }}
                                  onCancel={() => closeDate()}
                                />
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() =>
                                  setSelectedIndex({
                                    ...selectedIndex,
                                    indexNo: index,
                                    keyPress: "tckt_end_time",
                                  })
                                }
                                style={styles.datesCon}
                              >
                                <Text>
                                  {props?.createEventData[index]
                                    ?.tckt_end_time != ""
                                    ? props?.createEventData[index]
                                        ?.tckt_end_time
                                    : "End Sale Time"}
                                </Text>
                                <Image
                                  resizeMode={"contain"}
                                  style={{ width: 18, height: 18 }}
                                  source={require("../../../Assets/calendar_icon.png")}
                                />
                                <DateTimePickerModal
                                  isVisible={
                                    index === selectedIndex.indexNo &&
                                    selectedIndex.keyPress === "tckt_end_time"
                                  }
                                  mode="time"
                                  minimumDate={new Date()}
                                  onConfirm={(datetime) => {
                                    closeDate();
                                    props.handleTicketDateTime(
                                      "tckt_end_time",
                                      datetime,
                                      index
                                    );
                                  }}
                                  onCancel={() => closeDate()}
                                />
                              </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1 }}>
                              <Text
                                style={[styles.titlesTxt, { fontSize: 16 }]}
                              >
                                Ticket Description
                              </Text>
                              <View>
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
                                  textInputStyle={styles.formsInputVw}
                                  containerStyle={styles.descriptionVw}
                                  placeholder={"Write down"}
                                />
                              </View>
                              <TouchableOpacity
                                onPress={() =>
                                  props.handleCheckBoxes(
                                    "hide_description",
                                    props.createEventData[index]
                                      .hide_description === 0
                                      ? 1
                                      : 0,
                                    index
                                  )
                                }
                                style={styles.optionChooseVw}
                              >
                                <Image
                                  style={styles.checkImg}
                                  source={
                                    props.createEventData[index]
                                      .hide_description === 0
                                      ? require("../../../Assets/unchecked_squared_icon_small.png")
                                      : require("../../../Assets/checked_squared_icon_small.png")
                                  }
                                />
                                <Text style={styles.optionChooseTxt}>
                                  Hide description from buyer
                                </Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() =>
                                  props.handleCheckBoxes(
                                    "display_inventry",
                                    props.createEventData[index]
                                      .display_inventry === 0
                                      ? 1
                                      : 0,
                                    index
                                  )
                                }
                                style={styles.optionChooseVw}
                              >
                                <Image
                                  style={styles.checkImg}
                                  source={
                                    props.createEventData[index]
                                      .display_inventry === 0
                                      ? require("../../../Assets/unchecked_squared_icon_small.png")
                                      : require("../../../Assets/checked_squared_icon_small.png")
                                  }
                                />
                                <Text style={styles.optionChooseTxt}>
                                  Display remaining inventory
                                </Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() =>
                                  props.handleCheckBoxes(
                                    "trasferable",
                                    props.createEventData[index].trasferable ===
                                      0
                                      ? 1
                                      : 0,
                                    index
                                  )
                                }
                                style={styles.optionChooseVw}
                              >
                                <Image
                                  style={styles.checkImg}
                                  source={
                                    props.createEventData[index].trasferable ===
                                    0
                                      ? require("../../../Assets/unchecked_squared_icon_small.png")
                                      : require("../../../Assets/checked_squared_icon_small.png")
                                  }
                                />
                                <Text style={styles.optionChooseTxt}>
                                  Make transferable
                                </Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() =>
                                  props.handleCheckBoxes(
                                    "private_ticket",
                                    props.createEventData[index]
                                      .private_ticket === 0
                                      ? 1
                                      : 0,
                                    index
                                  )
                                }
                                style={styles.optionChooseVw}
                              >
                                <Image
                                  style={styles.checkImg}
                                  source={
                                    props.createEventData[index]
                                      .private_ticket === 0
                                      ? require("../../../Assets/unchecked_squared_icon_small.png")
                                      : require("../../../Assets/checked_squared_icon_small.png")
                                  }
                                />
                                <Text style={styles.optionChooseTxt}>
                                  Make ticket private
                                </Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() =>
                                  props.handleCheckBoxes(
                                    "password_req",
                                    props.createEventData[index]
                                      .password_req === 0
                                      ? 1
                                      : 0,
                                    index
                                  )
                                }
                                style={styles.optionChooseVw}
                              >
                                <Image
                                  style={styles.checkImg}
                                  source={
                                    props.createEventData[index]
                                      .password_req === 0
                                      ? require("../../../Assets/unchecked_squared_icon_small.png")
                                      : require("../../../Assets/checked_squared_icon_small.png")
                                  }
                                />
                                <Text style={styles.optionChooseTxt}>
                                  Password required
                                </Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() =>
                                  props.handleCheckBoxes(
                                    "ticket_limit",
                                    props.createEventData[index]
                                      .ticket_limit === 0
                                      ? 1
                                      : 0,
                                    index
                                  )
                                }
                                style={styles.optionChooseVw}
                              >
                                <Image
                                  style={styles.checkImg}
                                  source={
                                    props.createEventData[index]
                                      .ticket_limit === 0
                                      ? require("../../../Assets/unchecked_squared_icon_small.png")
                                      : require("../../../Assets/checked_squared_icon_small.png")
                                  }
                                />
                                <Text style={styles.optionChooseTxt}>
                                  Limit tickets per order
                                </Text>
                              </TouchableOpacity>
                              {props.createEventData[index].ticket_limit ===
                                1 && (
                                <View style={styles.optionChooseVw}>
                                  <View style={{ flex: 1 }}>
                                    <Text style={styles.minMaxTxt}>Min</Text>
                                    <View style={styles.minMaxVw}>
                                      <Picker
                                        mode={"dropdown"}
                                        onValueChange={(itemValue) =>
                                          props.handleTicketPicker(
                                            "min_ticket",
                                            itemValue,
                                            index
                                          )
                                        }
                                        selectedValue={
                                          props.createEventData[index]
                                            .min_ticket
                                        }
                                      >
                                        {props?.numbers.map((item, index) => {
                                          return (
                                            index < 3 && (
                                              <Picker.Item
                                                label={item}
                                                value={item}
                                              />
                                            )
                                          );
                                        })}
                                      </Picker>
                                    </View>
                                  </View>
                                  <View style={{ flex: 1 }}>
                                    <Text style={styles.minMaxTxt}>Max</Text>
                                    <View style={styles.minMaxVw}>
                                      <Picker
                                        onValueChange={(itemValue) =>
                                          props.handleTicketPicker(
                                            "max_ticket",
                                            itemValue,
                                            index
                                          )
                                        }
                                        selectedValue={
                                          props.createEventData[index]
                                            .max_ticket
                                        }
                                        mode={"dropdown"}
                                        label={"Max"}
                                      >
                                        {props?.numbers.map((item) => {
                                          return (
                                            <Picker.Item
                                              label={item}
                                              value={item}
                                            />
                                          );
                                        })}
                                      </Picker>
                                    </View>
                                  </View>
                                </View>
                              )}
                            </View>
                          </View>
                        </>
                      ) : null}
                      <View style={styles.straightFlex}>
                        <View style={{ flex: 1, alignItems: "center" }}>
                          <Text style={styles.nonEditTitlesTxt}>
                            Abby Charges
                          </Text>
                          <TextInput
                            style={styles.nonEditInputVw}
                            editable={false}
                            numberOfLines={1}
                            placeholder={Number(
                              props?.createEventData[index]?.abbyPagesAmt
                            ).toFixed(2)}
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
                            placeholder={Number(
                              props?.createEventData[index]?.cardAmt
                            ).toFixed(2)}
                            placeholderTextColor={BLACK_COLOR_CODE}
                          />
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                          <Text style={styles.nonEditTitlesTxt}>Total Amt</Text>
                          <TextInput
                            style={styles.nonEditInputVw}
                            editable={false}
                            numberOfLines={1}
                            placeholder={Number(
                              props?.createEventData[index]?.totalPrice
                            ).toFixed(2)}
                            placeholderTextColor={BLACK_COLOR_CODE}
                          />
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                          <Text style={styles.nonEditTitlesTxt}>You get</Text>
                          <TextInput
                            style={styles.nonEditInputVw}
                            editable={false}
                            numberOfLines={1}
                            placeholder={Number(
                              props?.createEventData[index]?.youGetAmt
                            ).toFixed(2)}
                            placeholderTextColor={BLACK_COLOR_CODE}
                          />
                        </View>
                      </View>
                      <Text style={styles.titlesTxt}>Payment Option</Text>
                      <View style={styles.formsInputCon}>
                        <Picker
                          onValueChange={(itemValue) =>
                            props.handleTicketPicker("payOtp", itemValue, index)
                          }
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
