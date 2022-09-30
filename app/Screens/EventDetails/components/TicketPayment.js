import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from "react-native";
import styles from "./styles";
import moment from "moment";
import Header from "../../../Components/Header";
import Button from "../../../Components/Button";
import {
  BLACK_COLOR_CODE,
  SMALL_TEXT_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import Loader from "../../../Utils/Loader";
import Error from "../../../Components/Modal/error";
import { CardField } from "@stripe/stripe-react-native";
import CountDown from "react-native-countdown-component";
import Input from "../../../Components/Input";

const TicketPaymentScreen = (props) => {
  const eventDate = moment(props?.eventDetails?.created_at).format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
  );
  const [newPercentage, setNewPercentage] = useState();
  const couts = newPercentage * 0.16;
  return (
    <Modal
      animationType={Platform.OS==='ios'?'none':"slide"}
      transparent={true}
      visible={props.buyTicketModal === 4}
      onRequestClose={() => {
        props.setBuyTicketModal("");
      }}
    >
      <Error
        message={props.errorMessage}
        visible={props.visibleErr}
        closeModel={() => props.setVisibleErr(false)}
      />
      <KeyboardAvoidingView
       behavior={Platform.OS === "ios" ? 'padding' : null}
      style={styles.modalCon}>
        {props?.loader && <Loader state={props?.loader} />}
        <Header
          mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
          tintColor={WHITE_COLOR_CODE}
          HeaderText="Buy Ticket"
          leftImg={""}
          RightImg={null}
        />
        <ScrollView>
          <View style={styles.modalsVw}>
            <Text style={styles.eventNameTx}>
              {props?.eventDetails?.event_name}
            </Text>
            <Text style={styles.startDateTxt}>Event Starts : {eventDate}</Text>
            <Text style={styles.selectTxt}>Ticket Payment</Text>
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
                  <Text style={styles.timeTxt}>time remains</Text>
                </View>
                <Text style={styles.percentTxt}>
                  {Number(couts).toFixed(0)}%
                </Text>
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
                  <Text />
                </View>
              </View>
              <Text style={styles.timeTxt}>to complete the purchase</Text>
              <View style={styles.ticketDetailVw}>
                <Text
                  style={[
                    styles.selectTxt,
                    { marginTop: 0, textAlign: "left" },
                  ]}
                >
                  Card Details
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
                <Text style={[styles.subTitleTxt, { marginTop: 12 }]}>
                  Have a discount code?
                </Text>
                <View style={styles.straightVw}>
                  <Input
                    placeholder=""
                    keyboardType={"number-pad"}
                    InputType={null}
                    containerStyle={[
                      styles.smallInputVw,
                      { width: "56%", height: 42,paddingVertical:Platform.OS==='ios'?10:0 },
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
                    : "0.00"}
                </Text>
              </View>
              <View style={[styles.straightVw, { borderBottomWidth: 0.5 }]}>
                <Text style={styles.subTitleTxt}>Taxes</Text>
                <Text style={[styles.subTitleTxt]}>
                  {props?.eventDetails?.taxesAmount
                    ? props?.eventDetails?.taxesAmount
                    : "0.00"}
                </Text>
              </View>
              <View style={styles.straightVw}>
                <Text style={styles.subTitleTxt}>Total</Text>
                <Text style={styles.subTitleTxt}>
                  {props?.totalAmount ? props?.totalAmount : "0.00"}
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
    </Modal>
  );
};
export default TicketPaymentScreen;
