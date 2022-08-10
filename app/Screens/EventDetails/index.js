import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import EventDetailsScreen from "./components/EventDetailsScreen";
import CommonStyles from "../../Utils/CommonStyles";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Error from "../../Components/Modal/error";
import data from "../../Components/CountryData/countryData";

const EventDetails = ({ route }) => {
  const params = route.params;
  const [eventDetails, setEventDetails] = useState("");
  const { width, height } = Dimensions.get("window");
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { currentPage: pageIndex } = sliderState;
  const [interestedModal, setInterstedModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);

  useEffect(() => {
    if (params?.item?.event_id) {
      getEventDetails(params?.item?.event_id);
    }
  }, []);

  function openIntersetedModal() {
    alert("ko");
    setInterstedModal(true);
  }
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
    if (resp === "Yes") {
      try {
        const params = {
          event_id: eventDetails?.event_id,
          interest_status: eventDetails?.user_interested === 0 ? 1 : 0,
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
    } else {
      setInterstedModal(false);
    }
  };
  return (
    <View style={CommonStyles.container}>
      {loader && <Loader state={loader} />}
      <EventDetailsScreen
        eventDetails={eventDetails}
        setSliderPage={setSliderPage}
        interestedModal={interestedModal}
        openIntersetedModal={openIntersetedModal}
        setInterstedModal={setInterstedModal}
        onInterestResp={onInterestResp}
        pageIndex={pageIndex}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
    </View>
  );
};
export default EventDetails;
