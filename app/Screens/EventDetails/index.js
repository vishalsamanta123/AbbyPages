import React, { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import EventDetailsScreen from './components/EventDetailsScreen';
import CommonStyles from '../../Utils/CommonStyles';
import { apiCall } from '../../Utils/httpClient';
import ENDPOINTS from '../../Utils/apiEndPoints';
const EventDetails = ({ route }) => {
    const params = route.params;
    const [eventId, setEventId] = useState('');
    const [eventDetails, setEventDetails] = useState('');
    const { width, height } = Dimensions.get('window');
    const [sliderState, setSliderState] = useState({ currentPage: 0 });
    const { currentPage: pageIndex } = sliderState;
    const [interestedModal, setInterstedModal] = useState(false);

    useEffect(() => {
        setEventId(params?.item?.event_id);
        getEventDetails();
    }, [eventId])
    function openIntersetedModal() {
        alert('ko')
        setInterstedModal(true)
    }
    const getEventDetails = async () => {
        try {
            const params = {
                event_id: eventId
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
    const setSliderPage = (event) => {
        const { currentPage } = sliderState;
        const { x } = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.floor(x / width);
        if (indexOfNextScreen !== currentPage) {
            setSliderState({
                ...sliderState,
                currentPage: indexOfNextScreen,
            });
        }
    };
    return (
        <View style={CommonStyles.container}>
            <EventDetailsScreen
                eventDetails={eventDetails}
                setSliderPage={setSliderPage}
                interestedModal={interestedModal}
                openIntersetedModal={openIntersetedModal}
                setInterstedModal={setInterstedModal}
            />
        </View>
    );
};
export default EventDetails;