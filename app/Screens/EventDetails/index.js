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
import RNFS from "react-native-fs";
import FileViewer from "react-native-file-viewer";

const EventDetails = ({ route }) => {
  const params = route.params;
  const [counrtys, setCounrtys] = useState([]);
  const [eventDetails, setEventDetails] = useState("");
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { currentPage: pageIndex } = sliderState;
  const [changeInterest, setChangeInterest] = useState("");
  const [resposes, setResposes] = useState(1);
  const [interestedModal, setInterstedModal] = useState(false);
  const [buyTicketModal, setBuyTicketModal] = useState(false);
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
          setBuyTicketModal(true);
        }
      }
    } catch (error) {
      setLoader(false);
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  const onPressCancelTick = () => {
    setBuyTicketModal(false);
  };
  const onPressTicketResp = (resp) => {
    if (resp < 4) {
      if (resp === 2) {
        const totalQuantities = ticketsData?.reduce((accumulator, curr) => {
          return accumulator + curr.quantity;
        }, 0);
        if (totalQuantities > 0) {
          const accuratePush = totalQuantities > 1 ? totalQuantities : 1;
        }
      } else {
        setResposes(resp);
      }
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
        setResposes(resp);
        setSuccessMessage(data.message + ",Now do payment process");
      } else {
        setBuyTicketModal(false);
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
      {buyTicketModal ? (
        <BuyTicket
          eventDetails={eventDetails}
          resposes={resposes}
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
      ) : null}
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
