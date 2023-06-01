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
import ShowMessage from "../../../../Components/Modal/showMessage";

const EventListing = ({ navigation, route }) => {
  const [loader, setLoader] = useState(false);
  const [isSelectedDay, setIsSelectedDay] = useState(null);
  const [eventsList, setEventsList] = useState([]);
  const [events, setEvents] = useState([]);
  const [moreData, setMoreData] = useState(0);
  const [openAll, setOpenAll] = useState(false);
  const [offset, setoffset] = useState(0);
  const [openSearchDate, setOpenSearchDate] = useState(false);
  const [eventType, setEventType] = useState(0);
  const [searchDate, setSearchDate] = useState("");
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
    loader: false,
  });

  useFocusEffect(
    React.useCallback(() => {
      handleCategory();
      if (offset === 0) {
        getEventList(0, 4, eventType, searchDate);
      }
      handlePopularEvents();
    }, [navigation, route])
  );

  const handleCategory = async () => {
    try {
      const { data } = await apiCall("POST", ENDPOINTS.GET_EVENT_CATEGORY_LIST);
    } catch (error) {}
  };

  const _handleDaySelected = (item, index) => {
    setIsSelectedDay(index);
    setEventsList([]);
    if (item === 6) {
      setOpenSearchDate(true);
    } else {
      if (item !== eventType) {
        setSearchDate("");
        setMessageShow({
          ...messageShow,
          loader: true,
        });
        getEventList(0, 4, item, searchDate, false);
        setEventType(item);
      }
    }
  };
  const navToEventDetail = (item) => {
    navigation.navigate("EventDetail", { item: item });
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
        setMessageShow({
          type: "error",
          message: data.message,
          visible: true,
        });
      }
    } catch (error) {
      setLoader(false);
      setMessageShow({
        type: "error",
        message: error.message,
        visible: true,
      });
    }
  };

  const getEventList = async (offSet, limit, eventType, searchDate, loader) => {
    setoffset(offSet);
    if (loader != false) {
      setLoader(true);
    }
    try {
      const params = {
        offset: offSet,
        limit: limit,
        event_type: eventType,
        search_date: searchDate ? searchDate : "",
      };
      const { data } = await apiCall("POST", ENDPOINTS.GET_EVENT_LIST, params);
      if (data.status === 200) {
        if (offSet === 0) {
          setEventsList(data?.data);
        } else {
          setEventsList([...eventsList, ...data.data]);
        }
        setMoreData(data?.event_count);
        setLoader(false);
        setMessageShow({
          ...messageShow,
          loader: false,
        });
      } else {
        if (data.status === 201) {
          setEventsList([]);
          setLoader(false);
          setMessageShow({
            ...messageShow,
            loader: false,
          });
        } else {
          setLoader(false);
          setMessageShow({
            type: "error",
            message: data.message,
            visible: true,
            loader: false,
          });
        }
      }
    } catch (error) {
      setLoader(false);
      setMessageShow({
        type: "error",
        message: error.message,
        visible: true,
      });
    }
  };
  const handleEndTimeConfirm = (selectedDate) => {
    const date = moment(selectedDate).format("MM/DD/YYYY");
    setSearchDate(date);
    getEventList(0, 4, 6, date, false);
    setOpenSearchDate(false);
    setMessageShow({
      ...messageShow,
      loader: true,
    });
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
          setOpenAll={setOpenAll}
          eventsList={eventsList}
          navToEventDetail={navToEventDetail}
          getEventList={getEventList}
          setEventType={setEventType}
          handleCreateEvent={handleCreateEvent}
          offset={offset}
          setoffset={setoffset}
          moreData={moreData}
          messageShow={messageShow}
          setMessageShow={setMessageShow}
        />
      ) : (
        <EventListingScreen
          handleEndTimeConfirm={handleEndTimeConfirm}
          isSelectedDay={isSelectedDay}
          _handleDaySelected={_handleDaySelected}
          navToEventDetail={navToEventDetail}
          openSearchDate={openSearchDate}
          eventsList={eventsList}
          events={events}
          getEventList={getEventList}
          setEventType={setEventType}
          eventType={eventType}
          handleCreateEvent={handleCreateEvent}
          offset={offset}
          openAll={openAll}
          setOpenAll={setOpenAll}
          setIsSelectedDay={setIsSelectedDay}
          setOpenSearchDate={setOpenSearchDate}
          messageShow={messageShow}
        />
      )}
      <ShowMessage
        visible={messageShow?.visible}
        message={messageShow?.message}
        messageViewType={messageShow?.type}
        onEndVisible={() => {
          setMessageShow({
            visible: false,
            message: "",
            type: "",
          });
        }}
      />
    </View>
  );
};
export default EventListing;
