import React, { useState } from 'react';
import { View } from 'react-native';
import EventListingScreen from './components/EventListingScreen';
import CommonStyles from '../../Utils/CommonStyles';
const EventListing = ({ navigation }) => {
    const [isSelectedCatgory, setIsSelectedCatgory] = useState(0);
    const [isSelectedDay, setIsSelectedDay] = useState(0);
    const [dataType, setDataType] =
        useState([
            { id: 0, name: 'Festivals and Fairs' },
            { id: 1, name: 'Food and Drinks' },
            { id: 2, name: 'NightLife' },
            { id: 3, name: 'Beardo' },
        ], []);
    const _handleDataTypeSelected = (index, item) => {
        setIsSelectedCatgory(index)
    };
    const [dayData, setDayData] =
        useState([
            { id: 0, name: 'Today' },
            { id: 1, name: 'Tomorrow' },
            { id: 2, name: 'This Weekend' },
            { id: 3, name: 'This Week' },
        ], []);
    const _handleDaySelected = (index, item) => {
        setIsSelectedDay(index)
    };
    const [eventList, setEventList] =
        useState([
            {
                id: 0,
                bannerimg: require('../../Assets/extraImages/salooonimg.jpg'),
                heading: 'Abby Haunts at Home',
                timing: 'Thursday,Oct 29, 5:30 pm',
                address: 'Virtual-onZoom! - Berkeley,CA',
                des: 'In a year where everything was cancelled,join us throughout October for Abby Haunts at Home:a month of virtual tricks and treats,sugar and pumkin spice',
                interestedPeople: '563 interested'
            },
            {
                id: 1,
                bannerimg: require('../../Assets/extraImages/salooonimg.jpg'),
                heading: 'Abby KITs Available',
                timing: 'Thursday,Oct 29, 5:30 pm',
                address: 'Virtual-onZoom! - Berkeley,CA',
                des: 'In a year where everything was cancelled,join us throughout October for Abby Haunts at Home:a month of virtual tricks and treats,sugar and pumkin spice',
                interestedPeople: '563 interested'
            },
            {
                id: 2,
                bannerimg: require('../../Assets/extraImages/salooonimg.jpg'),
                heading: 'Stay active,dance it out.Virtual salsa 5 WK series starts 9/10 & 9/12',
                timing: 'Thursday,Oct 29, 5:30 pm',
                address: 'Virtual-onZoom! - Berkeley,CA',
                des: 'In a year where everything was cancelled,join us throughout October for Abby Haunts at Home:a month of virtual tricks and treats,sugar and pumkin spice',
                interestedPeople: '563 interested'
            }
        ], []);
    const onPressEvent = (item) => {
        navigation.navigate('EventDetails', { item: item })
    }
    return (
        <View style={CommonStyles.container}>
            <EventListingScreen
                dataType={dataType}
                _handleDataTypeSelected={_handleDataTypeSelected}
                isSelectedCatgory={isSelectedCatgory}
                dayData={dayData}
                isSelectedDay={isSelectedDay}
                _handleDaySelected={_handleDaySelected}
                eventList={eventList}
                onPressEvent={onPressEvent}
            />
        </View>
    );
};
export default EventListing;