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
import moment from "moment";

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
  console.log("resposes: ", resposes);
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
    country: "",
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    email_id: "",
    phoneNo: "",
  });
  const [onlineDetail, setOnlineDetail] = useState({
    brand: "",
    expiryMonth: "",
    expiryYear: "",
    last4: "",
    postalCode: "",
    validCVC: "",
    validExpiryDate: "",
    validNumber: "",
  });
  console.log("ticketBuyData: ", ticketBuyData);

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
    if (resposes === 1) {
      if (ticketBuyData.number_of_ticket === "") {
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
    }
    if (resposes === 2) {
      if (ticketBuyData.country === "") {
        setFormError(true);
        setFormErrorMssg("Please enter country");
        return false;
      }
      if (ticketBuyData.first_name === "") {
        setFormError(true);
        setFormErrorMssg("Please enter first name");
        return false;
      }
      if (ticketBuyData.last_name === "") {
        setFormError(true);
        setFormErrorMssg("Please enter last name");
        return false;
      }
      if (ticketBuyData.address === "") {
        setFormError(true);
        setFormErrorMssg("Please enter address");
        return false;
      }
      if (ticketBuyData.address === "") {
        setFormError(true);
        setFormErrorMssg("Please enter address");
        return false;
      }
      if (ticketBuyData.city === "") {
        setFormError(true);
        setFormErrorMssg("Please enter city");
        return false;
      }
      if (ticketBuyData.email_id === "") {
        setFormError(true);
        setFormErrorMssg("Please enter email id");
        return false;
      }
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(ticketBuyData.email_id) === false) {
        setFormError(true);
        setFormErrorMssg("Please enter correct email id");
        return false;
      }
      if (ticketBuyData.phoneNo === "") {
        setFormError(true);
        setFormErrorMssg("Please enter phone number");
        return false;
      }
    }
    return true;
  };
  const onPressCancelTick = () => {
    setTicketBuyData({
      ...ticketBuyData,
      number_of_ticket: "",
      country: "",
      first_name: "",
      last_name: "",
      address: "",
      city: "",
      email_id: "",
      phoneNo: "",
    });
    setResposes("");
    setFormError(false);
    setBuyTicketModal(false);
  };
  const onPressTicketResp = (resp) => {
    const valid = ticketFormValid();
    switch (resp) {
      case 1:
        setResposes(resp);
        break;
      case 2:
        if (valid) {
          setResposes(resp);
          setFormError(false);
          setFormErrorMssg("");
        }
        break;
      case 3:
        if (valid) {
          setResposes(resp);
          setFormError(false);
          setFormErrorMssg("");
          submitBuyingForm();
        }
        break;
    }
  };
  const submitBuyingForm = async () => {
    try {
      setLoader(true);
      const todaysDate = moment(new Date()).format("MM/DD/YYYY");
      const params = {
        event_id: eventDetails?.event_id,
        no_of_ticket: ticketBuyData.number_of_ticket,
        total_amount:
          eventDetails?.ticket_price * ticketBuyData?.number_of_ticket,
        address: ticketBuyData.address,
        city: ticketBuyData.city,
        country: ticketBuyData.country,
        create_date: todaysDate,
        latitude: "22.0012",
        longitude: "22.123",
        ticket_amount: eventDetails.total_ticket,
        ticket_user_name:
          ticketBuyData.first_name + " " + ticketBuyData.last_name,
        user_email: ticketBuyData.email_id,
        user_phone: ticketBuyData.phoneNo,
      };
      console.log("params: ", params);
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.BUY_EVENT_TICKET,
        params
      );
      console.log("data: ", data);
      if (data.status === 200) {
        setLoader(false);
        setFormErrorMssg(data.message);
        setFormError(true);
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
        onlineDetail={onlineDetail}
        setOnlineDetail={setOnlineDetail}
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
