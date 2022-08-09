import React, { useEffect, useState } from "react";
import { View } from "react-native";
import EventListingScreen from "./components/EventListingScreen";
import CommonStyles from "../../Utils/CommonStyles";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Error from "../../Components/Modal/error";
import moment from "moment";

const EventListing = ({ navigation }) => {
  const [loader, setLoader] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [isSelectedCatgory, setIsSelectedCatgory] = useState(0);
  const [isSelectedDay, setIsSelectedDay] = useState(0);
  const [eventsList, setEventsList] = useState([]);
  const [events, setEvents] = useState([]);
  const [stopOffset, setstopOffset] = useState(false);
  const [offset, setoffset] = useState(0);
  const [dataType, setDataType] = useState([]);

  const handleCategory = async () => {
    try {
      const { data } = await apiCall("POST", ENDPOINTS.GET_EVENT_CATEGORY_LIST);
      if (data.status === 200) {
        setDataType(data.data);
      } else {
        setVisibleErr(true);
        setErrorMessage(data.message);
        setstopOffset(true);
      }
    } catch (error) {
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  useEffect(() => {
    handleCategory();
    getEventList(0);
    handlePopularEvents();
  }, []);
  const _handleDataTypeSelected = (index, item) => {
    setIsSelectedCatgory(index);
  };
  const [dayData, setDayData] = useState(
    [
      { id: 0, name: "Today" },
      { id: 1, name: "Tomorrow" },
      { id: 2, name: "This Weekend" },
      { id: 3, name: "This Week" },
    ],
    []
  );
  const _handleDaySelected = (index, item) => {
    setEventsList([]);
    setIsSelectedDay(index);
    getEventList(index);
  };
  const onPressEvent = (item) => {
    navigation.navigate("EventDetails", { item: item });
  };
  const handlePopularEvents = async () => {
    try {
      setLoader(true);
      const { data } = await apiCall("POST", ENDPOINTS.GET_POPULAR_EVENTS);
      if (data.status === 200) {
        setEvents(data.data);
        setLoader(false);
      } else {
        setLoader(false);
        setVisibleErr(true);
        setErrorMessage(data.message);
        setstopOffset(true);
      }
    } catch (error) {
      setLoader(false);
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };

  const getEventList = async (offSet) => {
    setoffset(offSet);
    try {
      setLoader(true);
      const params = {
        offset: offSet,
        limit: 10 + offSet,
      };
      const { data } = await apiCall("POST", ENDPOINTS.GET_EVENT_LIST, params);
      if (data.status === 200) {
        setEventsList(data?.data);
        setLoader(false);
      } else {
        setLoader(false);
        setVisibleErr(true);
        setErrorMessage(data.message);
        setstopOffset(true);
      }
    } catch (error) {
      setLoader(false);
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  const handleCraeteEvent = () => {
    navigation.navigate("CreateEvent");
  };
  return (
    <View style={CommonStyles.container}>
      {loader && <Loader state={loader} />}
      <EventListingScreen
        dataType={dataType}
        _handleDataTypeSelected={_handleDataTypeSelected}
        isSelectedCatgory={isSelectedCatgory}
        dayData={dayData}
        isSelectedDay={isSelectedDay}
        _handleDaySelected={_handleDaySelected}
        onPressEvent={onPressEvent}
        eventsList={eventsList}
        events={events}
        stopOffset={stopOffset}
        getEventList={getEventList}
        handleCraeteEvent={handleCraeteEvent}
        offset={offset}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
    </View>
  );
};
export default EventListing;
