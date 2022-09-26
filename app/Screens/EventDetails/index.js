import React, { useEffect, useState } from "react";
import { Dimensions, ToastAndroid, View } from "react-native";
import EventDetailsScreen from "./components/EventDetailsScreen";
import BuyTicket from "./components/BuyTicket";
import CommonStyles from "../../Utils/CommonStyles";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Error from "../../Components/Modal/error";
import Success from "../../Components/Modal/success";
import TicketDetails from "./components/TicketsDetail";
import BuyerInfo from "./components/BuyerInfo";
import TicketPayment from "./components/TicketPayment";

const EventDetails = ({ route }) => {
  const { width } = Dimensions.get("window");
  const params = route.params;
  const [counrtys, setCounrtys] = useState([]);
  const [eventDetails, setEventDetails] = useState("");
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { currentPage: pageIndex } = sliderState;
  const [changeInterest, setChangeInterest] = useState("");
  const [addtoCaldr, setAddtoCaldr] = useState(false);
  const [interestedModal, setInterstedModal] = useState(false);
  const [buyTicketModal, setBuyTicketModal] = useState("");
  const [loader, setLoader] = useState(false);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [totalAmount, setTotalAmount] = useState("");
  const [ticketIds, setTicketIds] = useState([]);
  const [ticketsDetails, setTicketsDetails] = useState([]);
  const [ticketsData, setTicketsData] = useState([]);
  const [ticketList, setTicketList] = useState([]);
  const [ticketCategory, setTicketCategory] = useState([]);
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
  useEffect(() => {
    if (params?.item?.event_id) {
      getEventDetails(params?.item?.event_id);
      getPlaceData();
    }
  }, [params?.item?.event_id]);

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
        setLoader(false);
        setEventDetails(data.data);
        setChangeInterest(data.data.user_interested);
        setTicketCategory(data.data.event_ticket_type);
      } else {
        setLoader(false);
        setVisibleErr(true);
        setErrorMessage(data.message);
      }
    } catch (error) {
      setLoader(false);
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  const getPlaceData = async (type) => {
    setLoader(true);
    try {
      const params = {
        status: 0,
      };
      const { data } = await apiCall("POST", ENDPOINTS.GET_PLACES, params);
      if (data.status === 200) {
        setLoader(false);
        setCounrtys(data.data);
      } else {
        setLoader(false);
        setVisibleErr(true);
        setErrorMessage(data.message);
      }
    } catch (error) {
      setLoader(false);
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.ceil(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };
  const onInterestResp = async (resp) => {
    try {
      const params = {
        event_id: eventDetails?.event_id,
        interest_status: resp ? resp : changeInterest,
      };
      setInterstedModal(false);
      if (typeof changeInterest == "number") {
        const { data } = await apiCall(
          "POST",
          ENDPOINTS.CHOOSE_INTEREST_EVENT,
          params
        );
        if (data.status === 200) {
          setLoader(false);
          getEventDetails(eventDetails?.event_id);
          ToastAndroid.show(data.message, ToastAndroid.SHORT);
        } else {
          setLoader(false);
          setVisibleErr(true);
          setErrorMessage(data.message);
        }
      } else {
        if (changeInterest === "") {
          setInterstedModal(false);
          setBuyTicketModal(1);
        }
      }
    } catch (error) {
      setLoader(false);
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  const onPressCancelTick = (resp) => {
    setBuyTicketModal("");
    setTicketsDetails([]);
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
    setTicketsDetails([]);
    setTicketsData([]);
    setTicketList([]);
  };
  const onPressTicketResp = (resp) => {
    if (resp <= 4) {
      setBuyTicketModal(resp);
    }
  };
  const handleBuyTicket = async (resp) => {
    try {
      setLoader(true);
      const tickets_details = ticketsDetails.map((item) => {
        return {
          ticket_type_id: item.ticket_id,
          ticket_amount: item.ticket_amount,
          ticket_user_name: item.cand_firstName + "" + item.cand_lastName,
          user_email: item.cand_email,
          user_phone: item.cand_phoneNo,
          country_code: item.can_countrycode,
          address: item.cand_address,
          latitude: item.cand_lat,
          longitude: item.cand_long,
        };
      });
      const params = {
        event_id: eventDetails?.event_id,
        total_ticket_book: Number(ticketsDetails?.length),
        total_ticket_amount: totalAmount
          ? Number(totalAmount)
          : Number(ticketsData[0].total_amount),
        tickets_details: JSON.stringify(tickets_details),
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.BUY_EVENT_TICKET,
        params
      );
      if (data.status === 200) {
        setLoader(false);
        ToastAndroid.show(data.message, ToastAndroid.LONG);
        onPressTicketResp(3);
        setTicketList(data.data);
        const result = data.data.map(({ ticket_id }) => ticket_id);
        setTicketIds(result);
      } else {
        setLoader(false);
        ToastAndroid.show(data.message, ToastAndroid.LONG);
      }
    } catch (error) {
      ToastAndroid.show(error.message.toString(), ToastAndroid.LONG);
      setLoader(false);
    }
  };
  const paymentForTicket = async () => {
    try {
      setLoader(true);
      const params = {
        amount: totalAmount
          ? Number(totalAmount)
          : Number(ticketsData[0].total_amount),
        email: buyerInfo.email,
        user_name: buyerInfo.first_name + " " + buyerInfo.last_name,
        card_number: "424242424242" + buyerInfo.last4,
        exp_month: buyerInfo.expiryMonth.toString(),
        exp_year: buyerInfo.expiryYear.toString(),
        zipcode: buyerInfo.postalCode,
      };
      const { data } = await apiCall("POST", ENDPOINTS.ORDERPAYMENT, params);
      if (data.status === 200) {
        setLoader(false);
        eventPaymentProcess(data.data);
      } else {
        ToastAndroid.show(data.message.toString(), ToastAndroid.LONG);
        setLoader(false);
      }
    } catch (error) {
      ToastAndroid.show(error.message.toString(), ToastAndroid.LONG);
      setLoader(false);
    }
  };
  const eventPaymentProcess = async (paymentData) => {
    try {
      setLoader(true);
      const params = {
        event_id: eventDetails.event_id,
        payment_type: "stripe",
        ticket_id: ticketIds.toString(),
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
        ToastAndroid.show(data.message.toString(), ToastAndroid.LONG);
      }
    } catch (error) {
      ToastAndroid.show(error.message.toString(), ToastAndroid.LONG);
      setLoader(false);
    }
  };
  return (
    <View style={CommonStyles.container}>
      {loader && <Loader state={loader} />}
      <EventDetailsScreen
        eventDetails={eventDetails}
        loader={loader}
        setSliderPage={setSliderPage}
        interestedModal={interestedModal}
        setInterstedModal={setInterstedModal}
        pageIndex={pageIndex}
        changeInterest={changeInterest}
        setChangeInterest={setChangeInterest}
        setBuyTicketModal={setBuyTicketModal}
        onInterestResp={onInterestResp}
        addtoCaldr={addtoCaldr}
        setAddtoCaldr={setAddtoCaldr}
        videoUrl={videoUrl}
        getEventDetails={getEventDetails}
      />
      {buyTicketModal === 1 ? (
        <BuyTicket
          eventDetails={eventDetails}
          onPressCancelTick={onPressCancelTick}
          onPressTicketResp={onPressTicketResp}
          buyTicketModal={buyTicketModal}
          setBuyTicketModal={setBuyTicketModal}
          ticketCategory={ticketCategory}
          ticketsData={ticketsData}
          setTicketsData={setTicketsData}
          totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}
          ticketsDetails={ticketsDetails}
          setTicketsDetails={setTicketsDetails}
          loader={loader}
        />
      ) : (
        <>
          {buyTicketModal === 2 ? (
            <TicketDetails
              eventDetails={eventDetails}
              totalAmount={totalAmount}
              ticketsData={ticketsData}
              buyTicketModal={buyTicketModal}
              onPressCancelTick={onPressCancelTick}
              onPressTicketResp={onPressTicketResp}
              ticketsDetails={ticketsDetails}
              setTicketsDetails={setTicketsDetails}
              setBuyTicketModal={setBuyTicketModal}
              handleBuyTicket={handleBuyTicket}
              loader={loader}
              errorMessage={errorMessage}
              visibleErr={visibleErr}
              setVisibleErr={setVisibleErr}
            />
          ) : (
            <>
              {buyTicketModal === 3 ? (
                <BuyerInfo
                  eventDetails={eventDetails}
                  totalAmount={totalAmount}
                  ticketsData={ticketsData}
                  buyTicketModal={buyTicketModal}
                  onPressCancelTick={onPressCancelTick}
                  onPressTicketResp={onPressTicketResp}
                  ticketsDetails={ticketsDetails}
                  setTicketsDetails={setTicketsDetails}
                  setBuyTicketModal={setBuyTicketModal}
                  buyerInfo={buyerInfo}
                  setBuyerInfo={setBuyerInfo}
                  setPercentage={setPercentage}
                  couts={couts}
                  loader={loader}
                  IncreasePercentage={IncreasePercentage}
                />
              ) : (
                <>
                  {buyTicketModal === 4 ? (
                    <TicketPayment
                      eventDetails={eventDetails}
                      totalAmount={totalAmount}
                      ticketsData={ticketsData}
                      buyTicketModal={buyTicketModal}
                      onPressCancelTick={onPressCancelTick}
                      onPressTicketResp={onPressTicketResp}
                      ticketsDetails={ticketsDetails}
                      setTicketsDetails={setTicketsDetails}
                      setBuyTicketModal={setBuyTicketModal}
                      buyerInfo={buyerInfo}
                      setBuyerInfo={setBuyerInfo}
                      percentage={percentage}
                      setPercentage={setPercentage}
                      couts={couts}
                      paymentForTicket={paymentForTicket}
                      loader={loader}
                      IncreasePercentage={IncreasePercentage}
                      errorMessage={errorMessage}
                      visibleErr={visibleErr}
                      setVisibleErr={setVisibleErr}
                    />
                  ) : null}
                </>
              )}
            </>
          )}
        </>
      )}
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => setVisibleSuccess(false)}
      />
    </View>
  );
};
export default EventDetails;
