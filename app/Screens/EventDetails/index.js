import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import EventDetailsScreen from "./components/EventDetailsScreen";
import BuyTicket from "./components/BuyTicket";
import CommonStyles from "../../Utils/CommonStyles";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Error from "../../Components/Modal/error";
import Success from "../../Components/Modal/success";
import moment from "moment";
import TicketDetails from "./components/TicketsDetail";
import BuyerInfo from "./components/BuyerInfo";
import TicketPayment from "./components/TicketPayment";

const EventDetails = ({ route }) => {
  const params = route.params;
  const [counrtys, setCounrtys] = useState([]);
  const [eventDetails, setEventDetails] = useState("");
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { currentPage: pageIndex } = sliderState;
  const [changeInterest, setChangeInterest] = useState("");
  const [interestedModal, setInterstedModal] = useState(false);
  const [buyTicketModal, setBuyTicketModal] = useState("");
  const [loader, setLoader] = useState(false);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [totalAmount, setTotalAmount] = useState("");
  const [ticketsDetails, setTicketsDetails] = useState([]);
  const [ticketsData, setTicketsData] = useState([]);
  const [ticketCategory, setTicketCategory] = useState([
    {
      category_id: 1,
      name: "General Ticket",
      amount: "30",
    },
    {
      category_id: 2,
      name: "VIP Ticket",
      amount: "50",
    },
    {
      category_id: 3,
      name: "Time limit",
      amount: "20",
    },
  ]);
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
  const [percentage, setPercentage] = useState();
  const couts = percentage * 0.15;
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
        // setNumbers(Array.from(Array(10)));
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
        interest_status: changeInterest,
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
          setSuccessMessage("Interest Updated");
          setVisibleSuccess(true);
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
  };
  const onPressTicketResp = (resp) => {
    if (resp <= 4) {
      setBuyTicketModal(resp);
    }
  };
  const submitBuyingForm = async (resp) => {
    try {
      setLoader(true);
      const todaysDate = moment(new Date()).format("MM/DD/YYYY");
      const params = {
        // event_id: eventDetails?.event_id,
        // no_of_ticket: ticketBuyData.number_of_ticket,
        // total_amount:
        //   eventDetails?.ticket_price * ticketBuyData?.number_of_ticket,
        // address: ticketBuyData.address,
        // city: ticketBuyData.city,
        // country: ticketBuyData.country,
        // create_date: todaysDate,
        // latitude: "22.0012",
        // longitude: "22.123",
        // ticket_amount: eventDetails.total_ticket,
        // ticket_user_name:
        //   ticketBuyData.first_name + " " + ticketBuyData.last_name,
        // user_email: ticketBuyData.email_id,
        // user_phone: ticketBuyData.phoneNo,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.BUY_EVENT_TICKET,
        params
      );
      if (data.status === 200) {
        setLoader(false);
        setSuccessMessage(data.message + ",Now do payment process");
      } else {
        setBuyTicketModal("");
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
