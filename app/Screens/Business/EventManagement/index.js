import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import ENDPOINTS from '../../../Utils/apiEndPoints';
import { apiCall } from '../../../Utils/httpClient';
import Loader from '../../../Utils/Loader';
import EventList from './Component/EventList'

const EventManagement = () => {
  const [visible, setVisible] = useState(false)
  const [eventData, setEventData] = useState([])
  console.log('eventData: ', eventData);


  useFocusEffect(
    React.useCallback(() => {
      getEventList()
      return () => getEventList();
    }, [])
  );

  const getEventList = async () => {
    setVisible(true)
    try {
      const { data } = await apiCall('POST', ENDPOINTS.GET_BUSINESS_EVENT_LIST);
      if (data.status === 200) {
        console.log('data: ', data.data);
        setVisible(false);
        setEventData(data?.data)
      } else {
        setVisible(false)
      };
    } catch (error) {
      // setErrorMessage(error);
      // setVisibleErr(true);
      setVisible(false);
    };
  }

  return (
    <>
      {visible && <Loader state={visible} />}
      <EventList
        eventData={eventData}
      />
    </>
  )
}

export default EventManagement