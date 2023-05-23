import React, { useState } from "react";
import {
  View,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import styles from "./styles";
import moment from "moment";
import Header from "../../../../../Components/Header";
import Button from "../../../../../Components/Button";
import {
  BLACK_COLOR_CODE,
  SMALL_TEXT_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../../Utils/Constant";
import Loader from "../../../../../Utils/Loader";
import { CardField } from "@stripe/stripe-react-native";
import CountDown from "react-native-countdown-component";
import Input from "../../../../../Components/Input";
import ScaleText from "../../../../../Components/ScaleText";

const TicketPaymentScreen = (props) => {
  const eventDate = moment(props?.eventDetails?.created_at).format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
  );
  const [newPercentage, setNewPercentage] = useState();
  const couts = newPercentage * 0.16;
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={styles.modalCon}
      >
        {props?.loader && <Loader state={props?.loader} />}
        <Header
          mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
          tintColor={WHITE_COLOR_CODE}
          HeaderText="Buy Payment"
          leftImg={""}
          RightImg={null}
        />
        <ScrollView keyboardShouldPersistTaps={"handled"}>
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
                    onFinish={() => alert("Your time has been finished")}
                    onChange={(timing) => {
                      setNewPercentage(timing);
                    }}
                    digitStyle={styles.digitStyle}
                    digitTxtStyle={styles.subTitleTxt}
                    separatorStyle={{ color: BLACK_COLOR_CODE }}
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
                  style={[
                    styles.selectTxt,
                    { marginTop: 0, textAlign: "left" },
                  ]}
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
                  <Input
                    placeholder=""
                    keyboardType={"number-pad"}
                    InputType={null}
                    containerStyle={[
                      styles.smallInputVw,
                      {
                        width: "56%",
                        height: 42,
                        paddingVertical: Platform.OS === "ios" ? 10 : 0,
                      },
                    ]}
                    textInputStyle={styles.smallInnrInpVw}
                    onChangeText={(text) => {
                      props.setBuyerInfo({
                        ...props.buyerInfo,
                        dis_code: text,
                      });
                    }}
                    value={props?.buyerInfo?.dis_code}
                  />
                  <Button
                    buttonText={"Apply"}
                    style={[styles.modalBttn, { width: "39%" }]}
                  />
                </View>
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
              <Button
                style={styles.modalBttn}
                buttonLabelStyle={styles.modalBttnTxt}
                onPress={() => {
                  props.paymentForTicket();
                  // props.onPressTicketResp(2);
                }}
                buttonText={"Pay"}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
export default TicketPaymentScreen;
