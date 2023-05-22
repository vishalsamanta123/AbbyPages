import React, { useState } from "react";
import { View, Modal, FlatList } from "react-native";
import styles from "./styles";
import moment from "moment";
import Button from "../../../../../Components/Button";
import { COLORS, Constants } from "../../../../../Utils/Constant";
import Loader from "../../../../../Utils/Loader";
import _ from "lodash";
import ScaleText from "../../../../../Components/ScaleText";
import MainHeader from "../../../../../Components/MainHeader";
import MainInput from "../../../../../Components/MainInput";
import PageScroll from "../../../../../Components/PageScroll";
import MainButton from "../../../../../Components/MainButton";
import AddMinusView from "../../../../../Components/AddMinusView";
import { getAmount } from "../../../../../Utils/Globalfunctions";

const BuyTicketScreen = (props) => {
  const [bestQuality, setBestQuality] = useState("");
  const eventDate = moment(props?.eventDetails?.created_at).format(
    Constants.TIME_DATE_FORMAT
  );
  const getqty = (item) => {
    var getIndex = _.findIndex(props?.ticketsData, {
      category_id: item.event_type_id,
    });
    if (getIndex >= 0) {
      return props?.ticketsData[getIndex]?.quantity;
    }
  };
  const addProductOnCart = async (item, value, index) => {
    try {
      const selectedCategory = {
        category_id: item.event_type_id,
        name: item.event_type_name,
        amount: item.ticket_price,
        total_amount: item.ticket_price * value,
        quantity: value,
      };
      const arr = {
        ticket_id: item.event_type_id,
        ticket_Name: item.event_type_name,
        ticket_amount: item.ticket_price,
        ticket_totalAmt: item.ticket_price * value,
        ticket_qty: 1,
        cand_firstName: "",
        cand_lastName: "",
        cand_email: "",
        cand_phoneNo: "",
        cand_address: "",
        cand_lat: "",
        cand_long: "",
        can_countrycode: "",
      };
      if (props?.ticketsData?.length > 0) {
        var getIndex = _.findIndex(props?.ticketsData, {
          category_id: item.event_type_id,
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
        props.setTicketsData((curr) => [...curr, selectedCategory]);
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
          category_id: item.event_type_id,
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
      transparent={true}
      visible={props.buyTicketModal == 1}
      onRequestClose={() => {
        props.setBuyTicketModal("");
      }}
    >
      <MainHeader
        onPressBack={() => props.setBuyTicketModal("")}
        headerText={"Buy Ticket"}
        notifyIcon={false}
        TxtMarginRight={"8%"}
      />
      <PageScroll>
        {props?.loader && <Loader state={props?.loader} />}
        <View style={styles.modalsVw}>
          <ScaleText style={styles.eventNameTx}>
            {props?.eventDetails?.event_name}
          </ScaleText>
          <ScaleText style={styles.startDateTxt}>
            Event Starts : {eventDate}
          </ScaleText>
          <ScaleText style={styles.selectTxt}>Select Ticket</ScaleText>
          <>
            <ScaleText style={styles.titleTxt}>
              Show best available for
            </ScaleText>
            <View style={{ marginRight: 100 }}>
              <MainInput
                placeholder="Qty : "
                header={false}
                height={45}
                keyboardType={"number-pad"}
                onChangeText={(text) => {
                  setBestQuality(text);
                }}
                value={bestQuality}
              />
            </View>
            <View style={{ marginRight: "50%", marginTop: 10 }}>
              <MainButton
                buttonTxt="Submit"
                backgroundColor={COLORS.YELLOW}
                txtColor={COLORS.WHITE}
              />
            </View>
            <View style={{ marginVertical: 12 }}>
              <ScaleText style={styles.titleTxt}>Ticket Category</ScaleText>
              <FlatList
                data={props.ticketCategory}
                ListEmptyComponent={() => {
                  return (
                    <View>
                      <ScaleText style={styles.emptyTxt}>
                        No Tickets Available
                      </ScaleText>
                    </View>
                  );
                }}
                renderItem={({ item, index }) => {
                  return (
                    <View style={styles.ticketCategoryVw}>
                      <View>
                        <ScaleText style={styles.ticketCtgryTxt}>
                          {item?.event_type_name}
                        </ScaleText>
                        <ScaleText style={styles.ticketAmtTxt}>
                          $ {getAmount(item?.ticket_price)}
                        </ScaleText>
                      </View>
                      <View style={{ alignItems: "flex-end" }}>
                        <AddMinusView
                          bttnBackgroundColor={COLORS.THEME}
                          value={getqty(item, index)}
                          onPressAdd={(value) =>
                            addProductOnCart(item, value, index)
                          }
                          onPressMinus={(value) =>
                            removeFromCart(item, value, index)
                          }
                        />
                        <ScaleText style={styles.smallTxt}>
                          Total Amount:{" "}
                          {props?.ticketsData[index]?.total_amount
                            ? getAmount(props?.ticketsData[index]?.total_amount)
                            : "0.00"}
                        </ScaleText>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
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
          </>
          <View style={styles.modalBttnVw}>
            <MainButton
              paddingHorizontal={30}
              buttonTxt={"Cancel"}
              backgroundColor={COLORS.COMMON}
              txtColor={COLORS.BLACK}
              borderRadius={10}
              borderColor={COLORS.LIGHT_GREY}
              onPressButton={() => props.onPressCancelTick()}
            />
            {/* {props?.eventDetails?.ticket_price > 0 && ( */}
            <MainButton
              paddingHorizontal={40}
              borderRadius={10}
              backgroundColor={COLORS.YELLOW}
              txtColor={COLORS.WHITE}
              borderColor={COLORS.TRANSPARENT}
              buttonTxt={"Next"}
              onPressButton={() => props.onPressTicketResp(3)}
            />
          </View>
        </View>
      </PageScroll>
    </Modal>
  );
};
export default BuyTicketScreen;
