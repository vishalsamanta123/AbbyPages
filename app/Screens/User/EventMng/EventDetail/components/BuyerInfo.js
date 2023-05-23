import React, { useEffect } from "react";
import { View, Modal, ScrollView } from "react-native";
import styles from "./styles";
import moment from "moment";
import Button from "../../../../../Components/Button";
import Loader from "../../../../../Utils/Loader";
import _ from "lodash";
import Input from "../../../../../Components/Input";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import CountDown from "react-native-countdown-component";
import { apiCall } from "../../../../../Utils/httpClient";
import ENDPOINTS from "../../../../../Utils/apiEndPoints";
import ScaleText from "../../../../../Components/ScaleText";
import { COLORS, FONT_FAMILY } from "../../../../../Utils/Constant";
import MainHeader from "../../../../../Components/MainHeader";
import PageScroll from "../../../../../Components/PageScroll";
import MainButton from "../../../../../Components/MainButton";

const BuyerInfoScreen = (props) => {
  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = async () => {
    try {
      const { data } = await apiCall("POST", ENDPOINTS.GET_USER_PROFILE);
      if (data.status === 200) {
        props.setBuyerInfo({
          ...props.buyerInfo,
          first_name: data?.data?.first_name ? data.data.first_name : "",
          last_name: data?.data?.last_name ? data.data.last_name : "",
          email: data?.data?.email ? data.data.email : "",
          address: data?.data?.find_me_in ? data?.data?.find_me_in : "",
          // latitude:  data?.data?.find_me_in ? data?.data?.find_me_in : "",
          // longitude: data?.data?.find_me_in ? data?.data?.find_me_in : "",
          phoneNo: data?.data?.modile ? data?.data?.modile : "",
        });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const eventDate = moment(props?.eventDetails?.created_at).format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
  );
  return (
    <>
      {props?.loader && <Loader state={props?.loader} />}
      <MainHeader
        headerText={"Buy Info"}
        onPressBack={() => props.setBuyTicketModal(1)}
      />
      <PageScroll keyboardShouldPersistTaps={"handled"}>
        <View style={styles.modalsVw}>
          <ScaleText style={styles.eventNameTx}>
            {props?.eventDetails?.event_name}
          </ScaleText>
          <ScaleText style={styles.startDateTxt}>
            Event Starts : {eventDate}
          </ScaleText>
          <ScaleText style={styles.selectTxt}>Buyers Information</ScaleText>
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
                separatorStyle={{ color: COLORS.BLACK }}
                timeToShow={["M", "S"]}
                timeLabels={{}}
                showSeparator
              />
              <ScaleText style={styles.timeTxt}>time remains</ScaleText>
            </View>
            <ScaleText style={styles.percentTxt}>
              {100 - Number(props?.couts).toFixed(0)}%
            </ScaleText>
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
              <ScaleText />
            </View>
          </View>
          <ScaleText style={styles.timeTxt}>to complete the purchase</ScaleText>
          <View style={styles.ticketDetailVw}>
            <ScaleText
              style={[styles.selectTxt, { marginTop: 0, textAlign: "left" }]}
            >
              Event Ticket Details
            </ScaleText>
            <View style={{ marginLeft: 5, marginTop: 8 }}>
              <ScaleText style={styles.subTitleTxt}>First name</ScaleText>
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
              <ScaleText style={styles.subTitleTxt}>Last name</ScaleText>
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
              <ScaleText style={styles.subTitleTxt}>Email</ScaleText>
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
              <ScaleText style={styles.subTitleTxt}>Address</ScaleText>
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
                    placeholderTextColor: COLORS.BLACK,
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
                      fontFamily: FONT_FAMILY.REGULAR,
                      color: COLORS.BLACK,
                    },
                    textInput: {
                      fontSize: 20,
                      color: COLORS.BLACK,
                      fontFamily: FONT_FAMILY.REGULAR,
                    },
                    listView: {
                      backgroundColor: COLORS.WHITE,
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
              <ScaleText style={styles.subTitleTxt}>Phone number</ScaleText>
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
          <View style={styles.modalBttnVw}>
            {/* <Button
              style={[styles.modalBttn, { backgroundColor: COLORS.SMALL_TEXT }]}
              buttonLabelStyle={[
                styles.modalBttnTxt,
                {
                  color: COLORS.WHITE,
                },
              ]}
              onPress={() => props.onPressTicketResp(props.buyTicketModal - 2)}
              buttonText={"Back"}
            /> */}
            {/* {props?.eventDetails?.ticket_price > 0 && ( */}
            {/* <Button
              style={styles.modalBttn}
              buttonLabelStyle={styles.modalBttnTxt}
              onPress={() => {
                // props.onPressTicketResp(4);
              }}
              buttonText={"Next"}
            /> */}
            <MainButton
              paddingHorizontal={30}
              buttonTxt={"Back"}
              backgroundColor={COLORS.COMMON}
              txtColor={COLORS.BLACK}
              borderRadius={10}
              borderColor={COLORS.LIGHT_GREY}
              onPressButton={() =>
                props.onPressTicketResp(props.buyTicketModal - 2)
              }
            />
            {/* {props?.eventDetails?.ticket_price > 0 && ( */}
            <MainButton
              paddingHorizontal={40}
              borderRadius={10}
              backgroundColor={COLORS.YELLOW}
              txtColor={COLORS.WHITE}
              borderColor={COLORS.TRANSPARENT}
              buttonTxt={"Next"}
              // onPressButton={() => props.onPressTicketResp(4)}
            />
          </View>
        </View>
      </PageScroll>
    </>
  );
};
export default BuyerInfoScreen;
