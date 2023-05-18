import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import EventListingScreen from "./components/EventListingView";
import CommonStyles from "../../../../Utils/CommonStyles";
import { apiCall } from "../../../../Utils/httpClient";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import Error from "../../../../Components/Modal/showMessage";
import AllEvents from "./components/AllEvents";
import moment from "moment";

const EventListing = ({ navigation }) => {
  const [loader, setLoader] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [isSelectedCatgory, setIsSelectedCatgory] = useState(0);
  const [isSelectedDay, setIsSelectedDay] = useState(null);
  const [eventsList, setEventsList] = useState([]);
  const [events, setEvents] = useState([]);
  const [stopOffset, setstopOffset] = useState(false);
  const [openAll, setOpenAll] = useState(false);
  const [offset, setoffset] = useState(0);
  const [openSearchDate, setOpenSearchDate] = useState(false);
  const [limit, setLimit] = useState(4);
  const [eventType, setEventType] = useState(0);
  const [searchDate, setSearchDate] = useState("");
  const [dataType, setDataType] = useState([]);
  const isFocus = useIsFocused();
  useEffect(() => {
    handleCategory();
    if (offset === 0) {
      getEventList(0, limit, eventType, searchDate);
    }
    handlePopularEvents();
  }, [isFocus]);

  const handleCategory = async () => {
    try {
      const { data } = await apiCall("POST", ENDPOINTS.GET_EVENT_CATEGORY_LIST);
    } catch (error) {}
  };

  const _handleDaySelected = (item, index) => {
    setIsSelectedDay(index);
    if (item === 6) {
      setOpenSearchDate(true);
    } else {
      if (item !== eventType) {
        setSearchDate("");
        getEventList(0, limit, item, searchDate);
        setEventType(item);
      }
    }
  };
  const navToEventDetail = (item) => {
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

  const getEventList = async (offSet, limit, eventType, searchDate) => {
    setoffset(offSet);
    setLoader(true);
    setLimit(limit);
    try {
      const params = {
        offset: offSet,
        limit: limit,
        event_type: eventType,
        search_date: searchDate ? searchDate : "",
      };
      const { data } = await apiCall("POST", ENDPOINTS.GET_EVENT_LIST, params);
      if (data.status === 200) {
        setEventsList(data?.data);
        setLoader(false);
      } else {
        setstopOffset(true);
        if (data.status === 201) {
          setEventsList([]);
          setstopOffset(true);
          setLoader(false);
        } else {
          setLoader(false);
          setVisibleErr(true);
          setErrorMessage(data.message);
        }
      }
    } catch (error) {
      setLoader(false);
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  const handleEndTimeConfirm = (selectedDate) => {
    const date = moment(selectedDate).format("MM/DD/YYYY");
    setSearchDate(date);
    getEventList(0, limit, 6, date);
    setOpenSearchDate(false);
  };
  const handleCreateEvent = () => {
    navigation.navigate("CreateEvent", {
      type: "",
      item: "",
      img_url: "",
      detail: "",
    });
  };
  return (
    <View style={CommonStyles.container}>
      {loader && <Loader state={loader} />}
      {openAll ? (
        <AllEvents
          openAll={openAll}
          limit={limit}
          setOpenAll={setOpenAll}
          eventsList={eventsList}
          navToEventDetail={navToEventDetail}
          getEventList={getEventList}
          setEventType={setEventType}
          setLimit={setLimit}
          handleCreateEvent={handleCreateEvent}
          offset={offset}
          stopOffset={stopOffset}
          setSearchDate={setSearchDate}
          setoffset={setoffset}
        />
      ) : (
        <EventListingScreen
          isSelectedCatgory={isSelectedCatgory}
          handleEndTimeConfirm={handleEndTimeConfirm}
          isSelectedDay={isSelectedDay}
          _handleDaySelected={_handleDaySelected}
          navToEventDetail={navToEventDetail}
          openSearchDate={openSearchDate}
          eventsList={eventsList}
          events={events}
          stopOffset={stopOffset}
          getEventList={getEventList}
          limit={limit}
          setEventType={setEventType}
          eventType={eventType}
          setLimit={setLimit}
          handleCreateEvent={handleCreateEvent}
          offset={offset}
          openAll={openAll}
          setOpenAll={setOpenAll}
          setIsSelectedDay={setIsSelectedDay}
          setOpenSearchDate={setOpenSearchDate}
          setSearchDate={setSearchDate}
        />
      )}
    </View>
  );
};
export default EventListing;
