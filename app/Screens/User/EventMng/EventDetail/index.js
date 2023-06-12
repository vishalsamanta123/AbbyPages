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
import { Regexs } from "../../../../Utils/Constant";
import { OpenDoc } from "../../../../Utils/Globalfunctions";

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
    cvc: "",
    dis_code: "",
  });
  const [percentage, setPercentage] = useState(0);
  const [downloadModal, setDownloadModal] = useState(false);
  const couts = percentage / 100;
  const videoUrl = `${eventDetails?.events_video?.substring(
    eventDetails?.events_video?.lastIndexOf("/") + 1
  )}`;

  useFocusEffect(
    React.useCallback(() => {
      if (getData?.item?.event_id) {
        getEventDetails(getData?.item?.event_id);
        setBuyTicketModal("");
        const unsubscribe = navigation.addListener("blur", () => {
          onPressCancelTick();
        });
        return unsubscribe;
      }
    }, [navigation, getData?.item?.event_id])
  );

  const getEventDetails = async (id) => {
    setLoader(true);
    try {
      const params = {
        event_id: 174,
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
            ticket_id: tic.event_type_id,
            ticket_title: tic.event_type_name,
            ticket_price: tic.ticket_price,
            min_ticket_limit: tic.buy_min_ticket,
            max_ticket_limit: tic.buy_max_ticket,
            max_booking_time: 600000,
            ticket_quantity: 0,
            total_price: 0,
            other: tic,
          };
        });
        setTicketsType(arr);
        setLoader(false);
      } else {
        setEventDetails(itemData);
        setInterest(itemData?.user_interested);
        const arr = itemData?.event_ticket_type?.map((tic) => {
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
  const onPressLike = async (item) => {
    try {
      const params = {
        favorite: item?.user_favorite === 0 ? 1 : 0,
        interest: 0,
        item_id: item?.event_id,
        item_type: 4,
        like: item?.user_favorite === 0 ? 1 : 0,
        views: item?.view,
      };
      // const { data } = await apiCall("POST", ENDPOINTS.USERCOMMONLIKES, params);
      // if (data.status === 200) {
      //   const eventDetailData = {
      //     ...eventDetails,
      //     user_favorite: eventDetails?.user_favorite === 0 ? 1 : 0,
      //   };
      //   setEventDetails(eventDetailData);
      //   // setMessageShow({
      //   //   visible: true,
      //   //   type: "success",
      //   //   message: data?.message,
      //   // });
      // } else {
      //   setMessageShow({
      //     visible: true,
      //     type: "error",
      //     message: data?.message,
      //   });
      // }
    } catch (error) {
      setMessageShow({
        visible: true,
        type: "error",
        message: error?.message,
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
      latitude: "",
      longitude: "",
      phoneNo: "",
      brand: "",
      expiryMonth: "",
      expiryYear: "",
      last4: "",
      postalCode: "",
      validCVC: "",
      validExpiryDate: "",
      cvc: "",
      validNumber: "",
      dis_code: "",
    });
    setTotalAmount("");
    setTicketAdded([]);
  };

  const handleValidation = () => {
    if (buyTicketModal === 1) {
      if (ticketAdded?.length === 0) {
        setMessageShow({
          type: "error",
          message: "Please Add Ticket",
          visible: true,
        });
        return false;
      }
    } else if (buyTicketModal === 3) {
      if (buyerInfo?.first_name === "") {
        setMessageShow({
          type: "error",
          message: "Please Enter First Name",
          visible: true,
        });
        return false;
      } else if (buyerInfo?.last_name === "") {
        setMessageShow({
          type: "error",
          message: "Please Enter Last Name",
          visible: true,
        });
        return false;
      } else if (buyerInfo?.email === "") {
        setMessageShow({
          type: "error",
          message: "Please Enter Email",
          visible: true,
        });
        return false;
      } else if (Regexs.emailRegex?.test(buyerInfo?.email) === false) {
        setMessageShow({
          type: "error",
          message: "Please Enter Email Correctly",
          visible: true,
        });
        return false;
      } else if (buyerInfo?.address === "") {
        setMessageShow({
          type: "error",
          message: "Please Enter Address",
          visible: true,
        });
        return false;
      } else if (buyerInfo?.phoneNo === "") {
        setMessageShow({
          type: "error",
          message: "Please Enter Phone Number",
          visible: true,
        });
        return false;
      }
    } else if (buyTicketModal === 4) {
      if (buyerInfo.validNumber !== "Valid") {
        setMessageShow({
          visible: true,
          message: "Please enter card number correctly",
          type: "error",
        });
        return false;
      } else if (buyerInfo.brand !== "Visa") {
        setMessageShow({
          visible: true,
          message: "Please enter card number starts from 42",
          type: "error",
        });
        return false;
      } else if (buyerInfo.validExpiryDate !== "Valid") {
        setMessageShow({
          visible: true,
          message: "Please enter correct expiry date",
          type: "error",
        });
        return false;
      } else if (buyerInfo.validCVC !== "Valid") {
        setMessageShow({
          visible: true,
          message: "Please enter correct cvc number",
          type: "error",
        });
        return false;
      } else if (buyerInfo.postalCode === "" || null) {
        setMessageShow({
          visible: true,
          message: "Please enter postal code card details",
          type: "error",
        });
        return false;
      }
    }
    return true;
  };
  const onPressTicketResp = (resp) => {
    const valid = handleValidation();
    if (valid) {
      setBuyTicketModal(resp);
    }
  };

  const paymentForTicket = async () => {
    const valid = handleValidation();
    if (valid) {
      try {
        setLoader(true);
        const params = {
          amount: totalAmount ? Number(totalAmount) : "0.00",
          email: buyerInfo.email,
          user_name: buyerInfo.first_name + " " + buyerInfo.last_name,
          card_number: "424242424242" + buyerInfo.last4,
          exp_month: buyerInfo.expiryMonth.toString(),
          exp_year: buyerInfo.expiryYear.toString(),
          zipcode: buyerInfo.postalCode,
          business_id: eventDetails?.business_id,
          business_type: eventDetails?.business_type?.toString()?.split(",")[0],
          cvc: buyerInfo?.cvc,
        };
        const { data } = await apiCall("POST", ENDPOINTS.ORDERPAYMENT, params);
        if (data.status === 200) {
          handleBuyTicket(data?.data);
        } else {
          setMessageShow({
            visible: true,
            message: data?.message,
            type: "error",
          });
          setLoader(false);
        }
      } catch (error) {
        setLoader(false);
      }
    }
  };

  const handleBuyTicket = async (paymentData) => {
    try {
      const tickets_details = ticketAdded.map((item) => {
        return {
          ticket_type_id: item.ticket_id,
          ticket_amount: item.ticket_amount,
          ticket_user_name: buyerInfo.first_name + " " + buyerInfo.last_name,
          user_email: buyerInfo.email,
          user_phone: buyerInfo.phoneNo,
          country_code: buyerInfo.country_code,
          address: buyerInfo.address,
          latitude: buyerInfo.latitude,
          longitude: buyerInfo.longitude,
        };
      });
      const params = {
        event_id: eventDetails?.event_id,
        total_ticket_book: ticketAdded.reduce(
          (accumulatedTotal, curr) => accumulatedTotal + curr.ticket_quantity,
          0
        ),
        total_ticket_amount: totalAmount ? Number(totalAmount) : "0.00",
        tickets_details: JSON.stringify(tickets_details),
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.EVENT_TICKET_BOOK,
        params
      );
      if (data.status === 200) {
        eventPaymentProcess(paymentData, data.data);
      } else {
        setLoader(false);
        setMessageShow({
          visible: true,
          message: data?.message,
          type: "error",
        });
      }
    } catch (error) {
      setLoader(false);
      setMessageShow({
        visible: true,
        message: error?.message,
        type: "error",
      });
    }
  };

  const eventPaymentProcess = async (paymentData, ticketData) => {
    const ticket_ids = ticketData.map(({ ticket_id }) => ticket_id);
    try {
      setLoader(true);
      const params = {
        event_id: eventDetails.event_id,
        payment_type: "stripe",
        ticket_id: ticket_ids?.length > 0 ? ticket_ids?.toString() : "",
        event_book_id: ticketData[0].event_booking_id,
        payment_amount: totalAmount ? Number(totalAmount) : "0.00",
        transaction_id: paymentData.id,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.EVENTPAYMENTPROCESS,
        params
      );
      if (data.status === 200) {
        setLoader(false);
        setBuyerInfo({
          first_name: "",
          last_name: "",
          email: "",
          address: "",
          latitude: "",
          longitude: "",
          phoneNo: "",
          brand: "",
          expiryMonth: "",
          expiryYear: "",
          last4: "",
          postalCode: "",
          validCVC: "",
          validExpiryDate: "",
          cvc: "",
          validNumber: "",
          dis_code: "",
        });
        setTotalAmount("");
        setTicketAdded([]);
        setMessageShow({
          visible: true,
          message: data?.message,
          type: "success",
        });
        setDownloadModal(true);
      } else {
        setLoader(false);
        setMessageShow({
          visible: true,
          message: data?.message,
          type: "error",
        });
      }
    } catch (error) {
      setLoader(false);
      setMessageShow({
        visible: true,
        message: error?.message,
        type: "error",
      });
    }
  };
  const onPressDownload = async () => {
    const { data } = await apiCall("POST", ENDPOINTS.GET_USER_EVENT_TICKET);
    if (data?.status === 200) {
      const ticketUrl = data?.base_url + "/" + data?.data[0]?.ticket;
      OpenDoc(ticketUrl);
      setDownloadModal(false);
      setBuyTicketModal("");
    } else {
      setMessageShow({
        visible: true,
        message: data?.message,
        type: "error",
      });
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
                  percentage={percentage}
                  couts={couts}
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
                      setTicketAdded={setTicketAdded}
                      downloadModal={downloadModal}
                      setDownloadModal={setDownloadModal}
                      onPressDownload={onPressDownload}
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
                      onPressLike={onPressLike}
                      navigation={navigation}
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
