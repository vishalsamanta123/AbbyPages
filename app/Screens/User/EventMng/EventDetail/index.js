import React, { useContext, useEffect, useState } from "react";
import { Dimensions, ToastAndroid, View } from "react-native";
import EventDetailView from "./components/EventDetailView";
import BuyTicket from "./components/BuyTicket";
import TicketPayment from "./components/TicketPayment";
import TicketDetails from "./components/TicketsDetail";
import BuyerInfo from "./components/BuyerInfo";
import CommonStyles from "../../../../Utils/CommonStyles";
import { apiCall } from "../../../../Utils/httpClient";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import { useFocusEffect } from "@react-navigation/native";
import ShowMessage from "../../../../Components/Modal/showMessage";
import { UserContext } from "../../../../Utils/UserContext";

const EventDetail = ({ navigation, route }) => {
  const getData = route?.params;
  const [userData, setUserData] = useContext(UserContext);
  const [eventDetails, setEventDetails] = useState("");
  const [interest, setInterest] = useState("");
  const [interestedModal, setInterstedModal] = useState(false);
  const [buyTicketModal, setBuyTicketModal] = useState("");
  const [loader, setLoader] = useState(false);
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });
  const [totalAmount, setTotalAmount] = useState("");
  const [ticketAdded, setTicketAdded] = useState([]);
  const [ticketsType, setTicketsType] = useState([]);
  const [buyerInfo, setBuyerInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    phoneNo: "",
    brand: "",
    expiryMonth: "",
    expiryYear: "",
    last4: "",
    postalCode: "",
    validCVC: "",
    validExpiryDate: "",
    validNumber: "",
    dis_code: "",
  });
  const [percentage, setPercentage] = useState(0);
  const couts = percentage * 0.16;
  const IncreasePercentage =
    100 * Math.abs((60 * 10 - percentage) / ((60 * 10 + percentage) / 2));
  const videoUrl = `${eventDetails?.events_video?.substring(
    eventDetails?.events_video?.lastIndexOf("/") + 1
  )}`;

  useFocusEffect(
    React.useCallback(() => {
      if (getData?.item?.event_id) {
        getEventDetails(getData?.item?.event_id);
        setBuyTicketModal("");
      }
    }, [navigation, getData?.item?.event_id])
  );

  const getEventDetails = async (id) => {
    setLoader(true);
    try {
      const params = {
        event_id: id,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_EVENT_DETAILS,
        params
      );
      if (data.status === 200) {
        getBusinessDetail(data?.data);
      } else {
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
    }
  };

  const getBusinessDetail = async (itemData) => {
    try {
      const params = {
        business_name_slug: itemData?.business_name,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.BUSINESSDETAILSBYNAME,
        params
        );
      if (data.status === 200) {
        const newData = { ...itemData, ...data?.data };
        setEventDetails(newData);
        setInterest(newData?.user_interested);
        const arr = newData?.event_ticket_type?.map((tic) => {
          return {
            ...tic,
            ticket_id: tic.event_type_id,
            ticket_title: tic.event_type_name,
            ticket_price: tic.ticket_price,
            min_ticket_limit: tic.buy_min_ticket,
            max_ticket_limit: tic.buy_max_ticket,
            max_booking_time: 600000,
            ticket_quantity: 0,
            total_price: 0,
          };
        });
        
console.log(':arrarr ', arr);
        setTicketsType(arr);
        setLoader(false);
      } else {
        setEventDetails(itemData);
        setInterest(itemData?.data?.user_interested);
        const arr = itemData?.data?.event_ticket_type?.map((tic) => {
          return {
            ...tic,
            ticket_id: tic.event_type_id,
            ticket_title: tic.event_type_name,
            ticket_price: tic.ticket_price,
            min_ticket_limit: tic.buy_min_ticket,
            max_ticket_limit: tic.buy_max_ticket,
            max_booking_time: 600000,
            ticket_quantity: 0,
            total_price: 0,
          };
        });
        setTicketsType(arr);
        setLoader(false);
      }
    } catch (error) {}
  };
  const onInterestPress = async (resp) => {
    if (userData?.login_type) {
      if (resp === 1 || resp === 0) {
        const params = {
          event_id: eventDetails?.event_id,
          interest_status: resp,
        };
        setInterstedModal(false);
        const { data } = await apiCall(
          "POST",
          ENDPOINTS.CHOOSE_INTEREST_EVENT,
          params
        );
        if (data.status === 200) {
          setLoader(false);
          setEventDetails({
            ...eventDetails,
            user_interested: resp,
            interested:
              resp === 0
                ? eventDetails?.interested - 1
                : eventDetails?.interested + 1,
          });
          setInterest(resp);
          setMessageShow({
            type: "success",
            message: data.message,
            visible: true,
          });
        } else {
          setLoader(false);
        }
      } else {
        setBuyTicketModal(1);
        setInterstedModal(false);
      }
    } else {
      setMessageShow({
        type: "error",
        message: "Please Login First",
        visible: true,
      });
    }
  };
  const onPressCancelTick = (resp) => {
    setBuyTicketModal("");
    setBuyerInfo({
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      phoneNo: "",
      brand: "",
      expiryMonth: "",
      expiryYear: "",
      last4: "",
      postalCode: "",
      validCVC: "",
      validExpiryDate: "",
      validNumber: "",
      dis_code: "",
    });
    setTotalAmount("");
  };
  const onPressTicketResp = (resp) => {
    if (resp <= 4) {
      if (ticketAdded?.length === 0) {
        setMessageShow({
          type: "error",
          message: "Please Add Ticket",
          visible: true,
        });
      } else {
        setBuyTicketModal(resp);
      }
    }
  };
  const handleBuyTicket = async (resp) => {
    onPressTicketResp(3);
    // try {
    //   setLoader(true);
    //   const tickets_details = ticketsDetails.map((item) => {
    //     return {
    //       ticket_type_id: item.ticket_id,
    //       ticket_amount: item.ticket_amount,
    //       ticket_user_name: item.cand_firstName + "" + item.cand_lastName,
    //       user_email: item.cand_email,
    //       user_phone: item.cand_phoneNo,
    //       country_code: item.can_countrycode,
    //       address: item.cand_address,
    //       latitude: item.cand_lat,
    //       longitude: item.cand_long,
    //     };
    //   });
    //   const params = {
    //     event_id: eventDetails?.event_id,
    //     total_ticket_book: Number(ticketsDetails?.length),
    //     total_ticket_amount: totalAmount
    //       ? Number(totalAmount)
    //       : Number(ticketsData[0].total_amount),
    //     tickets_details: JSON.stringify(tickets_details),
    //   };
    //   const { data } = await apiCall(
    //     "POST",
    //     ENDPOINTS.BUY_EVENT_TICKET,
    //     params
    //   );
    //   if (data.status === 200) {
    //     setLoader(false);
    //     ToastAndroid.show(data.message, ToastAndroid.LONG);
    //     onPressTicketResp(3);
    //     setTicketList(data.data);
    //     const result = data.data.map(({ ticket_id }) => ticket_id);
    //     setTicketIds(result);
    //   } else {
    //     setLoader(false);
    //     ToastAndroid.show(data.message, ToastAndroid.LONG);
    //   }
    // } catch (error) {
    //   ToastAndroid.show(error.message.toString(), ToastAndroid.LONG);
    //   setLoader(false);
    // }
  };
  const paymentForTicket = async () => {
    // try {
    //   setLoader(true);
    //   const params = {
    //     amount: totalAmount
    //       ? Number(totalAmount)
    //       : Number(ticketsData[0].total_amount),
    //     email: buyerInfo.email,
    //     user_name: buyerInfo.first_name + " " + buyerInfo.last_name,
    //     card_number: "424242424242" + buyerInfo.last4,
    //     exp_month: buyerInfo.expiryMonth.toString(),
    //     exp_year: buyerInfo.expiryYear.toString(),
    //     zipcode: buyerInfo.postalCode,
    //   };
    //   const { data } = await apiCall("POST", ENDPOINTS.ORDERPAYMENT, params);
    //   if (data.status === 200) {
    //     setLoader(false);
    //     eventPaymentProcess(data.data);
    //   } else {
    //     ToastAndroid.show(data.message.toString(), ToastAndroid.LONG);
    //     setLoader(false);
    //   }
    // } catch (error) {
    //   ToastAndroid.show(error.message.toString(), ToastAndroid.LONG);
    //   setLoader(false);
    // }
  };
  const eventPaymentProcess = async (paymentData) => {
    try {
      setLoader(true);
      const params = {
        event_id: eventDetails.event_id,
        payment_type: "stripe",
        ticket_id: "",
        event_book_id: ticketList[0].event_booking_id,
        payment_amount: totalAmount
          ? Number(totalAmount)
          : Number(ticketsData[0].total_amount),
        transaction_id: paymentData.id,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.EVENTPAYMENTPROCESS,
        params
      );
      if (data.status === 200) {
        setLoader(false);
        setSuccessMessage(data.message);
        setVisibleSuccess(true);
        setBuyTicketModal("");
        onPressCancelTick();
      } else {
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
    }
  };
  return (
    <View style={CommonStyles.container}>
      {loader && <Loader state={loader} />}
      {buyTicketModal === 1 ? (
        <BuyTicket
          eventDetails={eventDetails}
          onPressCancelTick={onPressCancelTick}
          onPressTicketResp={onPressTicketResp}
          buyTicketModal={buyTicketModal}
          setBuyTicketModal={setBuyTicketModal}
          totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}
          ticketAdded={ticketAdded}
          setTicketAdded={setTicketAdded}
          ticketsType={ticketsType}
          setTicketsType={setTicketsType}
        />
      ) : (
        <>
          {buyTicketModal === 2 ? (
            <TicketDetails
              eventDetails={eventDetails}
              totalAmount={totalAmount}
              buyTicketModal={buyTicketModal}
              onPressCancelTick={onPressCancelTick}
              onPressTicketResp={onPressTicketResp}
              setBuyTicketModal={setBuyTicketModal}
              handleBuyTicket={handleBuyTicket}
            />
          ) : (
            <>
              {buyTicketModal === 3 ? (
                <BuyerInfo
                  eventDetails={eventDetails}
                  totalAmount={totalAmount}
                  buyTicketModal={buyTicketModal}
                  onPressCancelTick={onPressCancelTick}
                  onPressTicketResp={onPressTicketResp}
                  setBuyTicketModal={setBuyTicketModal}
                  buyerInfo={buyerInfo}
                  setBuyerInfo={setBuyerInfo}
                  setPercentage={setPercentage}
                  couts={couts}
                  IncreasePercentage={IncreasePercentage}
                  setMessageShow={setMessageShow}
                />
              ) : (
                <>
                  {buyTicketModal === 4 ? (
                    <TicketPayment
                      eventDetails={eventDetails}
                      totalAmount={totalAmount}
                      buyTicketModal={buyTicketModal}
                      onPressCancelTick={onPressCancelTick}
                      onPressTicketResp={onPressTicketResp}
                      setBuyTicketModal={setBuyTicketModal}
                      buyerInfo={buyerInfo}
                      setBuyerInfo={setBuyerInfo}
                      percentage={percentage}
                      setPercentage={setPercentage}
                      couts={couts}
                      paymentForTicket={paymentForTicket}
                      setMessageShow={setMessageShow}
                      ticketAdded={ticketAdded}
                      IncreasePercentage={IncreasePercentage}
                    />
                  ) : (
                    <EventDetailView
                      eventDetails={eventDetails}
                      interestedModal={interestedModal}
                      setInterstedModal={setInterstedModal}
                      interest={interest}
                      setInterest={setInterest}
                      setBuyTicketModal={setBuyTicketModal}
                      onInterestPress={onInterestPress}
                      videoUrl={videoUrl}
                      getEventDetails={getEventDetails}
                      userData={userData}
                    />
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
      <ShowMessage
        visible={messageShow?.visible}
        message={messageShow?.message}
        messageViewType={messageShow?.type}
        position={"bottom"}
        onEndVisible={() => {
          setMessageShow({
            visible: false,
            message: "",
            type: "",
          });
        }}
      />
    </View>
  );
};
export default EventDetail;
