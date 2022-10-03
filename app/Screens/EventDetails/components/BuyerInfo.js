import React from "react";
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
  FONT_FAMILY_REGULAR,
  LIGHT_BLACK_COLOR_CODE,
  SMALL_TEXT_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import Loader from "../../../Utils/Loader";
import _ from "lodash";
import Input from "../../../Components/Input";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import CountDown from "react-native-countdown-component";

const BuyerInfoScreen = (props) => {
  const eventDate = moment(props?.eventDetails?.created_at).format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
  );
  return (
    <Modal
    animationType={Platform.OS==='ios'?'none':"slide"}
      transparent={true}
      visible={props.buyTicketModal === 3}
      onRequestClose={() => {
        props.setBuyTicketModal("");
      }}
    >
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
        <ScrollView keyboardShouldPersistTaps={'handled'}>
          <View style={styles.modalsVw}>
            <Text style={styles.eventNameTx}>
              {props?.eventDetails?.event_name}
            </Text>
            <Text style={styles.startDateTxt}>Event Starts : {eventDate}</Text>
            <Text style={styles.selectTxt}>Buyers Information</Text>
            <View style={styles.straightVw}>
              <View style={styles.timeShownVw}>
                <CountDown
                  until={60 * 10}
                  size={16}
                  onFinish={() => alert("Your time has been finished")}
                  onChange={(timing) => {
                    props.setPercentage(timing);
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
                {Number(props?.couts).toFixed(0)}%
              </Text>
            </View>
            <View style={styles.timeCon}>
              <View
                style={[
                  styles.timeConVw,
                  {
                    marginRight:
                      props?.couts === "0.16" ? "0%" : `${props?.couts}%`,
                  },
                ]}
              >
                <Text />
              </View>
            </View>
            <Text style={styles.timeTxt}>to complete the purchase</Text>
            <View style={styles.ticketDetailVw}>
              <Text
                style={[styles.selectTxt, { marginTop: 0, textAlign: "left" }]}
              >
                Event Ticket Details
              </Text>
              <View style={{ marginLeft: 5, marginTop: 8 }}>
                <Text style={styles.subTitleTxt}>First name</Text>
                <Input
                  placeholder=""
                  InputType={null}
                  containerStyle={styles.ticketsInputVw}
                  textInputStyle={{ marginTop: 2, paddingLeft: 8 }}
                  onChangeText={(text) => {
                    props.setBuyerInfo({
                      ...props.buyerInfo,
                      first_name: text,
                    });
                  }}
                  value={props?.buyerInfo?.first_name}
                />
              </View>
              <View style={{ marginLeft: 5, marginTop: 8 }}>
                <Text style={styles.subTitleTxt}>Last name</Text>
                <Input
                  placeholder=""
                  InputType={null}
                  containerStyle={styles.ticketsInputVw}
                  textInputStyle={{ marginTop: 2, paddingLeft: 8 }}
                  onChangeText={(text) => {
                    props.setBuyerInfo({
                      ...props.buyerInfo,
                      last_name: text,
                    });
                  }}
                  value={props?.buyerInfo?.last_name}
                />
              </View>
              <View style={{ marginLeft: 5, marginTop: 8 }}>
                <Text style={styles.subTitleTxt}>Email</Text>
                <Input
                  placeholder=""
                  InputType={null}
                  containerStyle={styles.ticketsInputVw}
                  textInputStyle={{ marginTop: 2, paddingLeft: 8 }}
                  onChangeText={(text) => {
                    props.setBuyerInfo({
                      ...props.buyerInfo,
                      email: text,
                    });
                  }}
                  value={props?.buyerInfo?.email}
                />
              </View>
              <View style={{ marginLeft: 5, marginTop: 8 }}>
                <Text style={styles.subTitleTxt}>Address</Text>
                <View style={[styles.ticketsInputVw, styles.secInputVw]}>
                  <GooglePlacesAutocomplete
                    placeholder=""
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                      props.setBuyerInfo({
                        ...props.buyerInfo,
                        address: details.formatted_address,
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                      });
                    }}
                    value={props?.buyerInfo?.address}
                    query={{
                      key: "AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM",
                      language: "en",
                    }}
                    textInputProps={{
                      placeholderTextColor: BLACK_COLOR_CODE,
                      onChangeText: (text) => {
                        props.setBuyerInfo({
                          ...props.buyerInfo,
                          address: text,
                        });
                      },
                      value: props?.buyerInfo?.address,
                    }}
                    styles={{
                      textInputContainer: {
                        fontFamily: FONT_FAMILY_REGULAR,
                        color: BLACK_COLOR_CODE,
                      },
                      textInput: {
                        fontSize: 20,
                        color: LIGHT_BLACK_COLOR_CODE,
                        fontFamily: FONT_FAMILY_REGULAR,
                      },
                      listView: {
                        backgroundColor: WHITE_COLOR_CODE,
                        width: "90%",
                      },
                    }}
                    minLength={2}
                    autoFocus={false}
                    returnKeyType={"default"}
                  />
                </View>
              </View>
              <View style={{ marginLeft: 5, marginTop: 8 }}>
                <Text style={styles.subTitleTxt}>Phone number</Text>
                <Input
                  placeholder=""
                  InputType={null}
                  maxLength={10}
                  keyboardType={"number-pad"}
                  containerStyle={styles.ticketsInputVw}
                  textInputStyle={{ marginTop: 2, paddingLeft: 8 }}
                  onChangeText={(text) => {
                    props.setBuyerInfo({
                      ...props.buyerInfo,
                      phoneNo: text,
                    });
                  }}
                  value={props?.buyerInfo?.phoneNo}
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
              {/* {props?.eventDetails?.ticket_price > 0 && ( */}
              <Button
                style={styles.modalBttn}
                buttonLabelStyle={styles.modalBttnTxt}
                onPress={() => {
                  props.onPressTicketResp(4);
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
export default BuyerInfoScreen;
