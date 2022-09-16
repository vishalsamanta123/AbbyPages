import React, { useEffect, useState } from "react";
import { Dimensions, Keyboard, View } from "react-native";
import EventDetailsScreen from "./components/EventDetailsScreen";
import BuyTicket from "./components/BuyTicket";
import CommonStyles from "../../Utils/CommonStyles";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Error from "../../Components/Modal/error";
import Success from "../../Components/Modal/success";
import QuestionModal from "../../Components/Modal/questionModal";
import moment from "moment";
import RNFS from "react-native-fs";
import FileViewer from "react-native-file-viewer";

const EventDetails = ({ route }) => {
  const params = route.params;
  const [numbers, setNumbers] = useState([]);
  const [counrtys, setCounrtys] = useState([]);
  const [eventDetails, setEventDetails] = useState("");
  const { width, height } = Dimensions.get("window");
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { currentPage: pageIndex } = sliderState;
  const [changeInterest, setChangeInterest] = useState("");
  const [resposes, setResposes] = useState(1);
  const [interestedModal, setInterstedModal] = useState(false);
  const [buyTicketModal, setBuyTicketModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formErrorMssg, setFormErrorMssg] = useState("");
  const [ticketData, setTicketData] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [ticket, setTicket] = useState([]);
  const [ticketBuyData, setTicketBuyData] = useState({
    number_of_ticket: "",
    country: "",
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    email_id: "",
    phoneNo: "",

    //new
    ticktCategory: [],
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
        if (Number(data.data.total_ticket)) {
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
    if (resposes === 3) {
      if (onlineDetail.validNumber !== "Valid") {
        setErrorMessage("");
        setFormErrorMssg("Please enter card number correctly");
        setFormError(true);
        return false;
      }
      if (onlineDetail.brand !== "Visa") {
        setFormErrorMssg("Please enter card number starts from 42");
        setFormError(true);
        return false;
      }
      if (onlineDetail.validExpiryDate !== "Valid") {
        setFormErrorMssg("Please enter correct expiry date");
        setFormError(true);
        return false;
      }
      if (onlineDetail.validCVC !== "Valid") {
        setFormErrorMssg("Please enter correct cvc number");
        setFormError(true);
        return false;
      }
      if (onlineDetail.postalCode === "" || null) {
        setFormErrorMssg("Please enter postal code card details");
        setFormError(true);
        return false;
      }
    }
    return true;
  };
  const onPressCancelTick = () => {
    if (resposes < 3 || resposes === false) {
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
      setOnlineDetail({
        ...onlineDetail,
        brand: "",
        expiryMonth: "",
        expiryYear: "",
        last4: "",
        postalCode: "",
        validCVC: "",
        validExpiryDate: "",
        validNumber: "",
      });
      setResposes("");
      setFormError(false);
    }
    setBuyTicketModal(false);
  };
  const onPressTicketResp = (resp) => {
    if (resp < 4) {
      // setResposes(resp);
    }
  };
  const submitBuyingForm = async (resp) => {
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
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.BUY_EVENT_TICKET,
        params
      );
      if (data.status === 200) {
        setLoader(false);
        setResposes(resp);
        setSuccessMessage(data.message + ",Now do payment process");
        setFormError(true);
        setTicketData(data.data.slice(-1));
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
  const paymentForTicket = async (resp) => {
    try {
      setLoader(true);
      const params = {
        amount: eventDetails?.ticket_price * ticketBuyData?.number_of_ticket,
        email: ticketBuyData.email_id,
        user_name: ticketBuyData.first_name + " " + ticketBuyData.last_name,
        card_number: "424242424242" + onlineDetail.last4,
        exp_month: onlineDetail.expiryMonth.toString(),
        exp_year: onlineDetail.expiryYear.toString(),
        zipcode: onlineDetail.postalCode,
      };
      const { data } = await apiCall("POST", ENDPOINTS.ORDERPAYMENT, params);
      if (data.status === 200) {
        setLoader(false);
        eventPaymentProcess(data.data, resp);
        setOnlineDetail({
          brand: "",
          expiryMonth: "",
          expiryYear: "",
          last4: "",
          postalCode: "",
          validCVC: "",
          validExpiryDate: "",
          validNumber: "",
        });
      } else {
        setLoader(false);
        setOnlineDetail({
          brand: "",
          expiryMonth: "",
          expiryYear: "",
          last4: "",
          postalCode: "",
          validCVC: "",
          validExpiryDate: "",
          validNumber: "",
        });
        setBuyTicketModal(false);
        setVisibleErr(true);
        setErrorMessage(data.message.toString());
      }
    } catch (error) {
      setLoader(false);
      setVisibleErr(true);
      setErrorMessage(error.message.toString());
    }
  };
  const eventPaymentProcess = async (paymentData, resp) => {
    try {
      setLoader(true);
      const params = {
        event_id: eventDetails.event_id.toString(),
        payment_type: "stripe",
        ticket_id: ticketData[0].ticket_id,
        payment_amount:
          eventDetails?.ticket_price * ticketBuyData?.number_of_ticket,
        transaction_id: paymentData.id,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.EVENTPAYMENTPROCESS,
        params
      );
      if (data.status === 200) {
        setResposes(resp);
        setOnlineDetail({
          ...onlineDetail,
          brand: "",
          expiryMonth: "",
          expiryYear: "",
          last4: "",
          postalCode: "",
          validCVC: "",
          validExpiryDate: "",
          validNumber: "",
        });
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
        setTicket(data.data.slice(-1));
        setLoader(false);
        setSuccessMessage(data.message);
      } else {
        setLoader(false);
        setBuyTicketModal(false);
        setVisibleErr(true);
        setErrorMessage(data.message.toString());
      }
    } catch (error) {
      setLoader(false);
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  const onPressDownloadTckt = async () => {
    try {
      setLoader(true);
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_USER_EVENT_TICKET,
        params
      );
      if (data.status === 200) {
        setLoader(false);
        showPdfFile(data.base_url + "/" + ticket[0].ticket);
      } else {
        setLoader(false);
        setBuyTicketModal(false);
        setVisibleErr(true);
        setErrorMessage(data.message.toString());
      }
    } catch (error) {
      setLoader(false);
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  const showPdfFile = async (url) => {
    const extension = ticket[0].ticket;
    const localFile = `${RNFS.DocumentDirectoryPath}/${extension}`;
    try {
      const options = {
        fromUrl: url,
        toFile: localFile,
      };
      RNFS.downloadFile(options).promise.then(() =>
        FileViewer.open(localFile, {
          showOpenWithDialog: true,
          showAppsSuggestions: true,
        })
      );
      setBuyTicketModal(false);
    } catch (error) {
      setBuyTicketModal(false);
      setErrorMessage(error.message);
      setVisibleErr(true);
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
        setChangeInterest={setChangeInterest}
        setBuyTicketModal={setBuyTicketModal}
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

          // ticketBuyData={ticketBuyData}
          // ticketData={ticketData}
          // setTicketBuyData={setTicketBuyData}
          // numbers={numbers}
          // successMessage={successMessage}
          // formError={formError}
          // formErrorMssg={formErrorMssg}
          // counrtys={counrtys}
          // onlineDetail={onlineDetail}
          // setOnlineDetail={setOnlineDetail}
          // errorMessage={errorMessage}
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
