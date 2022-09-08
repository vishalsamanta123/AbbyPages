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
  const { img_url, detail, itemData } = route?.params || {};
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
    }, [img_url, detail, itemData])
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
        detail.status = detail?.status === 1 ? 0 : 1;
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
  const getSingleEventEdit = async () => {
    try {
      setVisible(true);
      navigation.navigate("CreateEvent", {
        type: "Edit_event",
        item: detail,
        img_url: img_url,
        detail: itemData,
      });
      setVisible(false);
    } catch (error) {
      setVisible(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: WHITE_COLOR_CODE }}>
      {visible && <Loader state={visible} />}
      <EventDetails
        detail={detail}
        img_url={img_url}
        eventStatus={eventStatus}
        getSingleEventEdit={getSingleEventEdit}
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
