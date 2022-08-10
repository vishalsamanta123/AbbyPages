import React, { useEffect, useState } from "react";
import { View } from "react-native";
import EventListingScreen from "./components/EventListingScreen";
import CommonStyles from "../../Utils/CommonStyles";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Error from "../../Components/Modal/error";
import AllEvents from "./components/AllEvents";

const EventListing = ({ navigation }) => {
  const [loader, setLoader] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [isSelectedCatgory, setIsSelectedCatgory] = useState(0);
  const [isSelectedDay, setIsSelectedDay] = useState(0);
  const [eventsList, setEventsList] = useState([]);
  const [events, setEvents] = useState([]);
  const [stopOffset, setstopOffset] = useState(false);
  const [openAll, setOpenAll] = useState(false);
  const [offset, setoffset] = useState(0);
  const [limit, setLimit] = useState(4);
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
  }, [limit]);
  const _handleDataTypeSelected = (index, item) => {
    setIsSelectedCatgory(index);
  };
  const [dayData, setDayData] = useState(
    [
      { id: 1, name: "Today" },
      { id: 2, name: "Tomorrow" },
      { id: 3, name: "This Weekend" },
      { id: 4, name: "This Week" },
      { id: 5, name: "Next Week" },
      { id: 6, name: "Jump to Date" },
    ],
    []
  );
  const _handleDaySelected = (index, item) => {
    getEventList(0, item);
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

  const getEventList = async (offSet, type) => {
    setoffset(offSet);
    setLoader(true);
    try {
      const params = {
        offset: offSet,
        limit: limit + offSet,
        event_type: type ? type : 0,
      };
      const { data } = await apiCall("POST", ENDPOINTS.GET_EVENT_LIST, params);
      if (data.status === 200) {
        setEventsList(data?.data);
        setLoader(false);
      } else {
        if (data.status === 201) {
          setEventsList([]);
          setLoader(false);
        } else {
          setLoader(false);
          setVisibleErr(true);
          setErrorMessage(data.message);
          setstopOffset(true);
        }
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
      {openAll ? (
        <AllEvents
          openAll={openAll}
          setOpenAll={setOpenAll}
          eventsList={eventsList}
          navToEventDetail={navToEventDetail}
          getEventList={getEventList}
          setLimit={setLimit}
          handleCraeteEvent={handleCraeteEvent}
          offset={offset}
          stopOffset={stopOffset}
        />
      ) : (
        <EventListingScreen
          dataType={dataType}
          _handleDataTypeSelected={_handleDataTypeSelected}
          isSelectedCatgory={isSelectedCatgory}
          dayData={dayData}
          isSelectedDay={isSelectedDay}
          _handleDaySelected={_handleDaySelected}
          navToEventDetail={navToEventDetail}
          eventsList={eventsList}
          events={events}
          stopOffset={stopOffset}
          getEventList={getEventList}
          limit={limit}
          setLimit={setLimit}
          handleCraeteEvent={handleCraeteEvent}
          offset={offset}
          openAll={openAll}
          setOpenAll={setOpenAll}
        />
      )}
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
    </View>
  );
};
export default EventListing;
