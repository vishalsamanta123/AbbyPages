import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import moment from "moment";
import Button from "../../../../../Components/Button";
import { COLORS, Constants } from "../../../../../Utils/Constant";
import { CardField } from "@stripe/stripe-react-native";
import CountDown from "react-native-countdown-component";
import Input from "../../../../../Components/Input";
import ScaleText from "../../../../../Components/ScaleText";
import PageScroll from "../../../../../Components/PageScroll";
import MainHeader from "../../../../../Components/MainHeader";
import MainInput from "../../../../../Components/MainInput";
import MainButton from "../../../../../Components/MainButton";

const TicketPaymentScreen = (props) => {
  const eventDate = moment(props?.eventDetails?.created_at).format(
    Constants.TIME_DATE_FORMAT
  );
  const [newPercentage, setNewPercentage] = useState();
  const couts = newPercentage * 0.16;
  return (
    <>
      <MainHeader
        headerText={"Buy Payment"}
        onPressBack={() => props.setBuyTicketModal(3)}
        notifyIcon={false}
        TxtMarginRight={"8%"}
      />
      <PageScroll>
        <View style={styles.modalsVw}>
          <ScaleText style={styles.eventNameTx}>
            {props?.eventDetails?.event_name}
          </ScaleText>
          <ScaleText style={styles.startDateTxt}>
            Event Starts : {eventDate}
          </ScaleText>
          <ScaleText style={styles.selectTxt}>Ticket Payment</ScaleText>
          <>
            <View style={styles.straightVw}>
              <View style={styles.timeShownVw}>
                <CountDown
                  until={props?.percentage}
                  size={16}
                  onFinish={() => {
                    props.setMessageShow({
                      visible: true,
                      message: "Your Time is Up",
                      type: "",
                    });
                    props.setBuyTicketModal("");
                  }}
                  onChange={(timing) => {
                    setNewPercentage(timing);
                  }}
                  digitStyle={styles.digitStyle}
                  digitTxtStyle={styles.subTitleTxt}
                  separatorStyle={{ color: COLORS.BLACK }}
                  timeToShow={["M", "S"]}
                  timeLabels={{}}
                  showSeparator
                />
                <ScaleText style={styles.timeTxt}>time remains</ScaleText>
              </View>
              <ScaleText style={styles.percentTxt}>
                {100 - Number(couts).toFixed(0)}%
              </ScaleText>
            </View>
            <View style={styles.timeCon}>
              <View
                style={[
                  styles.timeConVw,
                  {
                    marginRight: couts === "0.16" ? "0%" : `${couts}%`,
                  },
                ]}
              >
                <ScaleText />
              </View>
            </View>
            <ScaleText style={styles.timeTxt}>
              to complete the purchase
            </ScaleText>
            <View style={styles.ticketDetailVw}>
              <ScaleText
                style={[styles.selectTxt, { marginTop: 0, textAlign: "left" }]}
              >
                Card Details
              </ScaleText>
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
                  props.setBuyerInfo({
                    ...props.buyerInfo,
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
              <ScaleText style={[styles.subTitleTxt, { marginTop: 12 }]}>
                Have a discount code?
              </ScaleText>
              <View style={styles.straightVw}>
                <View style={{ flex: 1, marginHorizontal: 5 }}>
                  <MainInput
                    placeholder=""
                    keyboardType={"number-pad"}
                    height={45}
                    header={false}
                    borderRadius={8}
                    onChangeText={(text) => {
                      props.setBuyerInfo({
                        ...props.buyerInfo,
                        dis_code: text,
                      });
                    }}
                    value={props?.buyerInfo?.dis_code}
                  />
                </View>
                <View style={{ flex: 1, marginHorizontal: 5 }}>
                  <MainButton buttonTxt={"Apply"} borderRadius={8} />
                </View>
              </View>
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
                    ${item.total_price}
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
              buttonTxt={"Back"}
              backgroundColor={COLORS.COMMON}
              txtColor={COLORS.BLACK}
              borderRadius={10}
              borderColor={COLORS.LIGHT_GREY}
              onPressButton={() =>
                props.onPressTicketResp(props.buyTicketModal - 1)
              }
            />
            <MainButton
              paddingHorizontal={40}
              borderRadius={10}
              backgroundColor={COLORS.YELLOW}
              txtColor={COLORS.WHITE}
              borderColor={COLORS.TRANSPARENT}
              buttonTxt={"Pay"}
              onPressButton={() => {
                // props.paymentForTicket();
                // props.onPressTicketResp(2);
              }}
            />
          </View>
        </View>
      </PageScroll>
    </>
  );
};
export default TicketPaymentScreen;
