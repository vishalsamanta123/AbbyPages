import React, { useState } from 'react';
import { View } from 'react-native';
import EventDetailsScreen from './components/EventDetailsScreen';
import CommonStyles from '../../Utils/CommonStyles';
const EventDetails = () => {
    return (
        <View style={CommonStyles.container}>
            <EventDetailsScreen
            />
        </View>
    );
};
export default EventDetails;