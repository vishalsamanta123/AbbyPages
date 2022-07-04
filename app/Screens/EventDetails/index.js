import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import EventDetailsScreen from './components/EventDetailsScreen';
import CommonStyles from '../../Utils/CommonStyles';
import { apiCall } from '../../Utils/httpClient';
import ENDPOINTS from '../../Utils/apiEndPoints';
const EventDetails = ({ route }) => {
    const params = route.params;
    const [eventId, setEventId] = useState('');
    const [eventDetails,setEventDetails] = useState('');
    useEffect(() => {
        setEventId(params?.item?.event_id);
        getEventDetails();
    }, [eventId])

    const getEventDetails = async () => {
        try {
            const params = {
                event_id:eventId
            }
            const response = await apiCall('POST', ENDPOINTS.GET_EVENT_DETAILS, params);
            if (response.status === 200) {
                setEventDetails(response?.data?.data)
            } else {

            }
        }
        catch (error) {
        console.log('error: ', error);
        }
    }

    return (
        <View style={CommonStyles.container}>
            <EventDetailsScreen  eventDetails={eventDetails}/>
        </View>
    );
};
export default EventDetails;