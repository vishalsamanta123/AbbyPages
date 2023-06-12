import React, { useEffect } from "react";
import { View } from "react-native";
import styles from "./styles";
import moment from "moment";
import _ from "lodash";
import CountDown from "react-native-countdown-component";
import { apiCall } from "../../../../../Utils/httpClient";
import ENDPOINTS from "../../../../../Utils/apiEndPoints";
import ScaleText from "../../../../../Components/ScaleText";
import { COLORS } from "../../../../../Utils/Constant";
import MainHeader from "../../../../../Components/MainHeader";
import PageScroll from "../../../../../Components/PageScroll";
import MainButton from "../../../../../Components/MainButton";
import MainInput from "../../../../../Components/MainInput";
import AddressInput from "../../../../../Components/AddressInput";

const BuyerInfoScreen = (props) => {
  useEffect(() => {
    if (
      props?.buyerInfo?.first_name === "" &&
      props?.buyerInfo?.last_name === ""
    ) {
      getProfile();
    }
  }, [props?.buyerInfo]);
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
    } catch (error) {}
  };
  const eventDate = moment(props?.eventDetails?.created_at).format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
  );

  return (
    <>
      <MainHeader
        headerText={"Buy Info"}
        onPressBack={() => props.setBuyTicketModal(1)}
        notifyIcon={false}
        TxtMarginRight={"8%"}
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
                until={
                  props?.percentage === 0
                    ? props?.eventDetails?.time_limit_purchase * 60
                    : props?.percentage
                }
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
              {109 - Number(props?.couts).toFixed(0)}%
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
            <View style={styles.inputVw}>
              <MainInput
                placeholder=""
                headTxt="First Name"
                borderRadius={10}
                onChangeText={(text) => {
                  props.setBuyerInfo({
                    ...props.buyerInfo,
                    first_name: text,
                  });
                }}
                value={props?.buyerInfo?.first_name}
              />
            </View>
            <View style={styles.inputVw}>
              <MainInput
                placeholder=""
                headTxt="Last name"
                borderRadius={10}
                onChangeText={(text) => {
                  props.setBuyerInfo({
                    ...props.buyerInfo,
                    last_name: text,
                  });
                }}
                value={props?.buyerInfo?.last_name}
              />
            </View>
            <View style={styles.inputVw}>
              <MainInput
                placeholder=""
                headTxt="Email"
                borderRadius={10}
                onChangeText={(text) => {
                  props.setBuyerInfo({
                    ...props.buyerInfo,
                    email: text,
                  });
                }}
                value={props?.buyerInfo?.email}
              />
            </View>
            <View style={styles.inputVw}>
              <AddressInput
                placeholder=""
                onPress={(data, details = null) => {
                  props.setBuyerInfo({
                    ...props.buyerInfo,
                    address: details.formatted_address,
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                  });
                }}
                borderRadius={10}
                value={props.buyerInfo?.address}
                headTxt={"Address"}
                onChangeText={(text) => {
                  props.setBuyerInfo({
                    ...props.buyerInfo,
                    address: text,
                  });
                }}
              />
            </View>
            <View style={styles.inputVw}>
              <MainInput
                placeholder=""
                headTxt="Phone number"
                borderRadius={10}
                maxLength={10}
                keyboardType={"number-pad"}
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
            <MainButton
              paddingHorizontal={30}
              buttonTxt={"Back"}
              backgroundColor={COLORS.COMMON}
              txtColor={COLORS.BLACK}
              borderRadius={10}
              borderColor={COLORS.LIGHT_GREY}
              onPressButton={() =>
                props.setBuyTicketModal(props.buyTicketModal - 2)
              }
            />
            <MainButton
              paddingHorizontal={40}
              borderRadius={10}
              backgroundColor={COLORS.YELLOW}
              txtColor={COLORS.WHITE}
              borderColor={COLORS.TRANSPARENT}
              buttonTxt={"Next"}
              onPressButton={() => props.onPressTicketResp(4)}
            />
          </View>
        </View>
      </PageScroll>
    </>
  );
};
export default BuyerInfoScreen;
