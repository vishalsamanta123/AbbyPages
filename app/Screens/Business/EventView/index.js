import { View, Text, TouchableOpacity, FlatList, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../../Components/Header'
import { BLACK_COLOR_CODE, WHITE_COLOR_CODE } from '../../../Utils/Constant'
import EventDetails from './component/eventDetails'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { apiCall } from '../../../Utils/httpClient'
import apiEndPoints from '../../../Utils/apiEndPoints'
import Loader from '../../../Utils/Loader'

const EventView = ({ route }) => {
  const deatil = route?.params?.deatil
  const [visible, setVisible] = useState(false)
  const [singleEvent, setSingleEvent] = useState()
  const navigation = useNavigation()

  useFocusEffect(
    React.useCallback(() => {
      getSingleEvent()
      return () => getSingleEvent();
    }, [])
  );
  


  const DeleteMsg = (item) =>
    Alert.alert(
      "",
      "Are you sure you want delete this Event?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () =>
            eventStatus({
              id: item?.event_id,
              status: item?.status,
              is_delete: 1,
            }),
        },
      ],
      { cancelable: false }
    );

  const eventStatus = async ({ id, status, is_delete }) => {
    setVisible(true);
    try {
      const params = {
        event_id: id,
        status: status,
      };
      const response = await apiCall(
        "POST",
        apiEndPoints.EVENT_STATUS_UPDATE,
        params
      );
      if (response.status === 200) {
        navigation.goBack()
        setVisible(false);
      } else {
        setVisible(false);
      }
    } catch (error) {
      console.log('error: ', error);
      setVisible(false);
    }
  };

  const getSingleEvent = async () => {
    setVisible(true);
    try {
      const params = {
        business_id: 336,
        event_id: deatil?.event_id,
        offset: 0
      };
      const response = await apiCall(
        "POST",
        apiEndPoints.GET_SINGLE_EVENT_DETAILS,
        params
      );
      if (response.status === 200) {
        setSingleEvent(response?.data?.data[0])
        setVisible(false);
      } else {
        setVisible(false);
      }
    } catch (error) {
      console.log('error: ', error);
      setVisible(false);
    }
  }


  return (
    <View style={{ flex: 1, backgroundColor: WHITE_COLOR_CODE }}>
      {visible && <Loader state={visible} />}
      <EventDetails
        deatil={deatil}
        eventStatus={eventStatus}
        DeleteMsg={DeleteMsg}
        singleEvent={singleEvent}
      />
    </View>
  )
}

export default EventView