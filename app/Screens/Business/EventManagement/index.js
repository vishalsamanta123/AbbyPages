import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import { apiCall } from "../../../Utils/httpClient";
import Loader from "../../../Utils/Loader";
import EventList from "./Component/EventList";
import styles from "./Component/styles";
import { BLACK_COLOR_CODE } from "../../../Utils/Constant";
import moment from "moment";
import QuestionModal from "../../../Components/Modal/questionModal";
import Success from "../../../Components/Modal/success";
import Error from "../../../Components/Modal/error";

const EventManagement = () => {
  const [visible, setVisible] = useState(false);
  const [eventData, setEventData] = useState([]);
  const [busniessData, setBusniessData] = useState("");
  const [deleteEvent, setDeleteEvent] = useState(false);
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [removeIndex, setRemoveIndex] = useState("");
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      getEventList();
      getBusinessData();
      return () => getEventList();
    }, [])
  );
  const getBusinessData = async () => {
    try {
      const { data } = await apiCall("POST", ENDPOINTS.GET_USER_PROFILE);
      if (data.status === 200) {
        setBusniessData(data.data);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const getEventList = async () => {
    try {
      setVisible(true);
      const { data } = await apiCall("POST", ENDPOINTS.GET_BUSINESS_EVENT_LIST);
      if (data.status === 200) {
        setVisible(false);
        setEventData(data?.data);
      } else {
        setVisible(false);
      }
    } catch (error) {
      setVisible(false);
    }
  };
  const getSingleEvent = async (itemData) => {
    try {
      navigation.navigate("EventView", {
        img_url: '',
        detail: '',
        itemData: '',
      });
      // setVisible(true);
      // const params = {
      //   event_id: itemData?.event_id,
      //   offset: 0,
      // };
      // console.log("params: ", params);
      // const { data } = await apiCall(
      //   "POST",
      //   ENDPOINTS.GET_SINGLE_EVENT_DETAILS,
      //   params
      // );

      // if (data.status === 200) {
      //   setVisible(false);
      //   navigation.navigate("EventView", {
      //     img_url: data.events_image_url,
      //     detail: data.data[0],
      //     itemData: itemData,
      //   });
      // } else {
      //   setErrorMessage(data.message);
      //   setVisibleErr(true);
      //   setVisible(false);
      // }
    } catch (error) {
      setVisible(false);
    }
  };
  const DeleteEvent = async (dataItem) => {
    try {
      setVisible(true);
      const params = {
        event_id: dataItem.event_id,
        status: dataItem.status,
      };
      setDeleteEvent(false);
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.EVENT_STATUS_UPDATE,
        params
      );
      if (data.status === 200) {
        setVisible(false);
        setRemoveIndex("");
        setSuccessMessage(data.message);
        setVisibleSuccess(true);
      } else {
        setVisible(false);
      }
    } catch (error) {
      setVisible(false);
    }
  };
  const onPressCreate = () => {
    navigation.navigate("CreateEvent", {
      type: "busniess",
      item: "",
      img_url: "",
      detail: "",
    });
  };

  const handleEvents = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => getSingleEvent(item)}
        style={[styles.MainConatiner, { marginTop: index === 0 ? 0 : 10 }]}
      >
        <View>
          <Image
            style={styles.MainImgeStyle}
            resizeMode="contain"
            source={{
              uri: item?.events_image,
            }}
          />
        </View>
        <View style={styles.MainConatinerView}>
          <View style={styles.InformationView}>
            <View style={{ flex: 5 }}>
              <Text style={styles.MainServiceName}>{item?.event_name}</Text>
            </View>
          </View>
          <Text
            numberOfLines={2}
            style={[styles.AddressTextStyles, { paddingRight: 5 }]}
          >
            {item?.category_name}
          </Text>
          <View style={styles.InformationView}>
            <Image
              style={styles.MapImgeStyle}
              resizeMode="contain"
              source={require("../../../Assets/map_marker_icon.png")}
            />
            <Text
              numberOfLines={2}
              style={[styles.AddressTextStyles, { paddingRight: 10 }]}
            >
              {item?.event_location}
            </Text>
          </View>
          <View style={styles.InformationView}>
            <Image
              style={{}}
              source={require("../../../Assets/fire_icon.png")}
            />
            <Text style={styles.AddressTextStyles}>
              {moment.unix(item?.event_date).format("MM/DD/YYYY")}
            </Text>
          </View>
          <View style={styles.InformationView}>
            <Text
              style={[
                styles.AddressTextStyles,
                { fontWeight: "bold", color: BLACK_COLOR_CODE },
              ]}
            >
              interested {item?.interested}
            </Text>
            <Text
              style={[
                styles.AddressTextStyles,
                { marginLeft: 10, fontWeight: "bold", color: BLACK_COLOR_CODE },
              ]}
            >
              View {item?.view}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {visible && <Loader state={visible} />}
      <EventList
        eventData={eventData}
        handleEvents={handleEvents}
        onPressCreate={onPressCreate}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => {
          setVisibleSuccess(false);
          getEventList();
        }}
      />
      <QuestionModal
        surringVisible={deleteEvent}
        // topMessage={"Delete Event"}
        message={"Are you sure you want delete this Event?"}
        positiveResponse={() => DeleteEvent(removeIndex)}
        negativeResponse={() => {
          setDeleteEvent(false);
          setRemoveIndex("");
        }}
      />
    </>
  );
};

export default EventManagement;
