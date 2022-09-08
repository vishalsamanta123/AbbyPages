import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import EventDetailsScreen from "./components/EventDetailsScreen";
import CommonStyles from "../../Utils/CommonStyles";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Error from "../../Components/Modal/error";
import Success from "../../Components/Modal/success";
import QuestionModal from "../../Components/Modal/questionModal";

const EventDetails = ({ route }) => {
  const params = route.params;
  const [numbers, setNumbers] = useState([]);
  const [counrtys, setCounrtys] = useState([]);
  const [eventDetails, setEventDetails] = useState("");
  const { width, height } = Dimensions.get("window");
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { currentPage: pageIndex } = sliderState;
  const [changeInterest, setChangeInterest] = useState("");
  const [resposes, setResposes] = useState("");
  const [interestedModal, setInterstedModal] = useState(false);
  const [buyTicketModal, setBuyTicketModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formErrorMssg, setFormErrorMssg] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [ticketBuyData, setTicketBuyData] = useState({
    number_of_ticket: "",
  });

  useEffect(() => {
    if (params?.item?.event_id) {
      getEventDetails(params?.item?.event_id);
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
        if (data.data.total_ticket !== null) {
          setNumbers(Array.from(Array(parseInt(data.data.total_ticket))));
        } else {
          setNumbers(Array.from(Array(10)));
        }
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
        event_id: resp?.event_id,
        interest_status: resp?.user_interested === 0 ? 1 : 0,
      };
      setInterstedModal(false);
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
    } catch (error) {
      setLoader(false);
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  const ticketFormValid = () => {
    if (resposes == 1) {
      if (ticketBuyData.number_of_ticket == "") {
        setFormError(true);
        setFormErrorMssg("Please enter your number of ticket");
        return false;
      }
      if (ticketBuyData.number_of_ticket > numbers.length) {
        setFormError(true);
        setFormErrorMssg(
          `Enter number of tickets not more than ticket available i.e.${numbers.length}`
        );
        return false;
      }
    } else {
    }
    return true;
  };
  const onPressCancelTick = () => {
    setTicketBuyData({
      ...ticketBuyData,
      response: "",
      number_of_ticket: "",
    });
    setResposes("");
    setFormError(false);
    setBuyTicketModal(false);
  };
  const onPressTicketResp = (resp) => {
    switch (resp) {
      case 1:
        setResposes(resp);
        break;
      case 2:
        const valid = ticketFormValid();
        console.log("valid: ", valid);
        if (valid) {
          setResposes(resp);
          setFormError(false);
          setFormErrorMssg("");
        }
        break;
      default:
        break;
    }
  };
  return (
    <View style={CommonStyles.container}>
      {loader && <Loader state={loader} />}
      <EventDetailsScreen
        eventDetails={eventDetails}
        setSliderPage={setSliderPage}
        interestedModal={interestedModal}
        onPressCancelTick={onPressCancelTick}
        onPressTicketResp={onPressTicketResp}
        setInterstedModal={setInterstedModal}
        pageIndex={pageIndex}
        resposes={resposes}
        setChangeInterest={setChangeInterest}
        setBuyTicketModal={setBuyTicketModal}
        buyTicketModal={buyTicketModal}
        ticketBuyData={ticketBuyData}
        setTicketBuyData={setTicketBuyData}
        numbers={numbers}
        formError={formError}
        formErrorMssg={formErrorMssg}
        counrtys={counrtys}
        setCounrtys={setCounrtys}
      />
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
      <QuestionModal
        surringVisible={interestedModal}
        message={"You want to change interest in this event?"}
        positiveResponse={() => onInterestResp(changeInterest)}
        negativeResponse={() => setInterstedModal(false)}
      />
    </View>
  );
};
export default EventDetails;
