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
  const getqty = (item) => {
    var getIndex = _.findIndex(props?.ticketsData, {
      category_id: item.category_id,
    });
    if (getIndex >= 0) {
      return props?.ticketsData[getIndex]?.quantity;
    }
    const FinalAmount = props?.ticketsData?.reduce((accumulatedTotal, curr) => {
      accumulatedTotal + curr?.total_amount;
    }, 0);
    props.setTotalAmount(FinalAmount);
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
      const arr = {
        ticket_Name: item.name,
        ticket_id: item.category_id,
        ticket_amount: item.amount,
        ticket_totalAmt: item.amount * value,
        ticket_qty: 1,
        cand_firstName: "",
        cand_lastName: "",
        cand_email: "",
        cand_phoneNo: "",
        cand_address: "",
      };
      if (props?.ticketsData?.length > 0) {
        var getIndex = _.findIndex(props?.ticketsData, {
          category_id: item.category_id,
        });
        if (getIndex >= 0) {
          const newItems = props?.ticketsData[getIndex];
          newItems.quantity = newItems?.quantity + 1;
          newItems.total_amount = newItems.amount * value;
          const FinalAmount = props?.ticketsData?.reduce(
            (accumulatedTotal, curr) => accumulatedTotal + curr.total_amount,
            0
          );
          props.setTotalAmount(FinalAmount);
          props.setTicketsData(props?.ticketsData);
        } else {
          props.setTicketsData((curr) => [...curr, selectedCategory]);
          const FinalAmount = props?.ticketsData?.reduce(
            (accumulatedTotal, curr) => accumulatedTotal + curr.total_amount,
            0
          );
          props.setTotalAmount(FinalAmount);
        }
        props.ticketsDetails.push(arr);
      } else {
        props.setTicketsData([...props?.ticketsData, selectedCategory]);
        const FinalAmount = props?.ticketsData?.reduce(
          (accumulatedTotal, curr) => accumulatedTotal + curr?.total_amount,
          0
        );
        props.ticketsDetails.push(arr);
        props.setTotalAmount(FinalAmount);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const removeFromCart = (item, index) => {
    try {
      if (props.ticketsData.length > 0) {
        var getIndex = _.findIndex(props.ticketsData, {
          category_id: item.category_id,
        });
        if (getIndex >= 0) {
          const newItems = props.ticketsData[getIndex];
          if (props.ticketsData[getIndex].quantity > 0) {
            newItems.quantity = newItems.quantity - 1;
            newItems.total_amount = newItems.total_amount - newItems.amount;
            const FinalAmount = props?.ticketsData?.reduce(
              (accumulatedTotal, curr) => accumulatedTotal + curr.total_amount,
              0
            );
            props.setTotalAmount(FinalAmount);
            props.setTicketsData(props?.ticketsData);
          }
          if (props?.ticketsData[getIndex].quantity === 0) {
            props?.ticketsData.splice(getIndex, 1);
            const FinalAmount = props?.ticketsData.reduce(
              (accumulatedTotal, curr) => accumulatedTotal + curr.total_amount,
              0
            );
            props.setTotalAmount(FinalAmount);
            props.setTicketsData(props?.ticketsData);
          }
        }
        const ticketsList = [...props.ticketsDetails];
        ticketsList.splice(index, 1);
        props.setTicketsDetails(ticketsList);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.buyTicketModal == 1}
      onRequestClose={() => {
        props.setBuyTicketModal(false);
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
            <Text style={styles.selectTxt}>Select Ticket</Text>
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
                            onDecrease={(value) => removeFromCart(item, index)}
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
                            Total Amount:{" "}
                            {props?.ticketsData[index]?.total_amount
                              ? props?.ticketsData[index]?.total_amount
                              : "0"}
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
                onPress={() => props.onPressCancelTick()}
                buttonText={"Cancel"}
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
