import React, { useState } from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import moment from "moment";
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
import { eventTickets } from "../../../../../Utils/staticData";

const BuyTicketScreen = (props) => {
  const [bestQuality, setBestQuality] = useState("");
  const eventDate = moment(props?.eventDetails?.created_at).format(
    Constants.TIME_DATE_FORMAT
  );
  const getqty = (item) => {
    var getIndex = _.findIndex(props?.ticketAdded, {
      ticket_title: item.ticket_title,
    });
    if (getIndex >= 0) {
      return props?.ticketAdded[getIndex]?.ticket_quantity
        ? props?.ticketAdded[getIndex]?.ticket_quantity
        : 0;
    }
  };
  const getTicketAmount = (item) => {
    var getIndex = _.findIndex(props?.ticketAdded, {
      ticket_title: item.ticket_title,
    });
    if (getIndex >= 0) {
      return props?.ticketAdded[getIndex]?.ticket_totalAmt
        ? props?.ticketAdded[getIndex]?.ticket_totalAmt
        : 0;
    }
  };
  const addProductOnCart = async (item, value) => {
    const objSet = {
      ...item,
      ticket_quantity: value,
      ticket_totalAmt: item?.ticket_price * value,
    };
    if (props?.ticketAdded?.length === 0) {
      props.setTicketAdded([objSet]);
    } else {
      var getIndex = _.findIndex(props?.ticketAdded, {
        ticket_title: item.ticket_title,
      });
      if (getIndex >= 0) {
        const newObj = { ...props?.ticketAdded[getIndex] };
        newObj.ticket_quantity = newObj.ticket_quantity + 1;
        const newArray = [...props?.ticketAdded];
        newArray[getIndex] = newObj;
        props.setTicketAdded(newArray);
      } else {
        props.setTicketAdded((curr) => [...curr, objSet]);
      }
    }
  };
  const removeFromCart = (item, value) => {
    if (props?.ticketAdded?.length > 0) {
      var getIndex = _.findIndex(props?.ticketAdded, {
        ticket_title: item.ticket_title,
      });
      if (getIndex >= 0) {
        if (props?.ticketAdded[getIndex].ticket_quantity > 0 && value > 0) {
          const newObj = { ...props?.ticketAdded[getIndex] };
          newObj.ticket_quantity = newObj.ticket_quantity - 1;
          const newArray = [...props?.ticketAdded];
          newArray[getIndex] = newObj;
          props.setTicketAdded(newArray);
        } else if (value === 0) {
          props?.ticketAdded.splice(getIndex, 1);
          props.setTicketAdded(props?.ticketAdded);
        }
      }
    }
  };
  return (
    <>
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
                data={eventTickets}
                renderItem={({ item, index }) => {
                  return (
                    <View style={styles.ticketCategoryVw}>
                      <View>
                        <ScaleText style={styles.ticketCtgryTxt}>
                          {item?.ticket_title}
                        </ScaleText>
                        <ScaleText style={styles.ticketAmtTxt}>
                          $ {getAmount(item?.ticket_price)}
                        </ScaleText>
                      </View>
                      <View style={{ alignItems: "flex-end" }}>
                        <AddMinusView
                          colorMin={COLORS.THEME}
                          colorMax={COLORS.THEME}
                          minVal={0}
                          value={getqty(item)}
                          onPressAdd={(val) =>
                            addProductOnCart(item, val, index)
                          }
                          onPressMinus={(val) =>
                            removeFromCart(item, val, index)
                          }
                        />
                        <ScaleText style={styles.smallTxt}>
                          Total Amount:{" "}
                          {getTicketAmount(item)
                            ? getTicketAmount(item)
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
            {props?.ticketAdded?.map((item) => {
              return (
                <View style={styles.straightVw}>
                  <ScaleText style={styles.ticketsNameTxt}>
                    ({item.ticket_quantity}) {item.ticket_title}
                  </ScaleText>
                  <ScaleText style={styles.smallTxt}>
                    ${item.ticket_totalAmt}
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
    </>
  );
};
export default BuyTicketScreen;
