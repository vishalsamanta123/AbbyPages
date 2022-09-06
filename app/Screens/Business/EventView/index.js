import { View } from "react-native";
import React, { useState } from "react";
import { WHITE_COLOR_CODE } from "../../../Utils/Constant";
import EventDetails from "./component/eventDetails";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { apiCall } from "../../../Utils/httpClient";
import apiEndPoints from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import QuestionModal from "../../../Components/Modal/questionModal";
import Success from "../../../Components/Modal/success";

const EventView = ({ route }) => {
  const navigation = useNavigation();
  const deatil = route?.params?.deatil;
  const [visible, setVisible] = useState(false);
  const [busniessData, setBusniessData] = useState("");
  const [deleteEvent, setDeleteEvent] = useState(false);
  const [removeIndex, setRemoveIndex] = useState("");
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  useFocusEffect(
    React.useCallback(() => {
      getBusinessData();
      return () => {
        getBusinessData();
      };
    }, [])
  );

  const getBusinessData = async () => {
    try {
      const { data } = await apiCall("POST", apiEndPoints.GET_USER_PROFILE);
      if (data.status === 200) {
        setBusniessData(data.data);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const eventStatus = async (itemData) => {
    setVisible(true);
    try {
      const params = {
        event_id: itemData.event_id,
        status: itemData.status,
      };
      setDeleteEvent(false);
      const { data } = await apiCall(
        "POST",
        apiEndPoints.EVENT_STATUS_UPDATE,
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
      console.log("error: ", error);
      setVisible(false);
    }
  };
  const DeleteEvent = async (itemData) => {};
  const getSingleEvent = async () => {
    try {
      setVisible(true);
      const params = {
        business_id: busniessData?.user_id,
        event_id: deatil?.event_id,
      };
      const { data } = await apiCall(
        "POST",
        apiEndPoints.GET_SINGLE_EVENT_DETAILS,
        params
      );
      if (data.status === 200) {
        navigation.navigate("CreateEvent", {
          type: "Edit_event",
          item: data.data[0],
          img_url: data.events_image_url,
          detail: deatil,
        });
        setVisible(false);
      } else {
        setVisible(false);
      }
    } catch (error) {
      setVisible(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: WHITE_COLOR_CODE }}>
      {visible && <Loader state={visible} />}
      <EventDetails
        deatil={deatil}
        eventStatus={eventStatus}
        getSingleEvent={getSingleEvent}
        setRemoveIndex={setRemoveIndex}
        setDeleteEvent={setDeleteEvent}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => {
          setVisibleSuccess(false);
          navigation.goBack();
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
    </View>
  );
};

export default EventView;
