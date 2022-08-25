import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import ENDPOINTS from '../../../Utils/apiEndPoints';
import { apiCall } from '../../../Utils/httpClient';
import Loader from '../../../Utils/Loader';
import EventList from './Component/EventList'
import styles from '../../Listings/components/styles'
import { BLACK_COLOR_CODE, YELLOW_COLOR_CODE } from '../../../Utils/Constant';
import moment from 'moment';

const EventManagement = () => {
  const [visible, setVisible] = useState(false)
  const [eventData, setEventData] = useState([])
  const navigation = useNavigation()


  useFocusEffect(
    React.useCallback(() => {
      getEventList()
      return () => getEventList();
    }, [])
  );

  const onPressEvent = (item) => {
    navigation.navigate('EventView', { deatil: item })
  }

  const getEventList = async () => {
    try {
      setVisible(true)
      const { data } = await apiCall('POST', ENDPOINTS.GET_BUSINESS_EVENT_LIST);
      if (data.status === 200) {
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

  const onPressCreate = () => {
    navigation.navigate("CreateEvent", { type: 'busniess' });
  }

  const handleEvents = (item) => {
    return (
      <TouchableOpacity
        onPress={() => onPressEvent(item)}
        style={[styles.MainConatiner,{paddingHorizontal: 0}]}
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
            <Image style={{}} source={require("../../../Assets/fire_icon.png")} />
            <Text style={styles.AddressTextStyles}>
              {moment
                .unix(item?.event_date)
                .format("dddd, MMMM Do, YYYY")}
            </Text>
          </View>
          <View style={styles.InformationView}>
            <Text style={[styles.AddressTextStyles, { fontWeight: "bold", color: BLACK_COLOR_CODE }]}>
              interested {item?.interested}
            </Text>
            <Text style={[styles.AddressTextStyles, { marginLeft: 10, fontWeight: "bold", color: BLACK_COLOR_CODE }]}>
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
    </>
  )
}

export default EventManagement