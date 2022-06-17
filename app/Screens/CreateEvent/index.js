import React, { useState, Fragment } from 'react';
import { GREY_COLOR_CODE, FONT_FAMILY_REGULAR, LINE_COMMON_COLOR_CODE, YELLOW_COLOR_CODE } from '../../Utils/Constant';
import { Dimensions, View, Text, Image } from 'react-native';
import styles from './components/styles';
import CreateEvent from './components/CreateEvent';
const CreateEventView = () => {
    const [checkbox, SetCheckBox] = useState(false);
    const [privateCheck, SetprivateCheck] = useState(false);
    const [FreeEvent, SetFreeEvent] = useState(false);
    const [EventName, setEventName] = useState('');
    const [BusinessName, setBusinessName] = useState('');
    const [NearBy, setNearBy] = useState('');
    const [WhatWhy, setWhatWhy] = useState('');
    const [OfficialWeb, setOfficialWeb] = useState('');
    const [TicketURL, setTicketURL] = useState('');
    const [PriceFrom, setPriceFrom] = useState('');
    const [PriceTo, setPriceTo] = useState('');

    const onPressPublicVenue = () => {
        SetCheckBox(!checkbox)
    }
    const onPressPrivateAdd = () => {
        SetprivateCheck(!privateCheck)
    }
    const onPressFreeEvent = () => {
        SetFreeEvent(!FreeEvent)
    }
    return (
        <CreateEvent
            onPressPublicVenue={onPressPublicVenue}
            onPressPrivateAdd={onPressPrivateAdd}
            onPressFreeEvent={onPressFreeEvent}
            
            FreeEvent={FreeEvent}
            checkbox={checkbox}
            privateCheck={privateCheck}

            setEventName={setEventName}
            EventName={EventName}
            setBusinessName={setBusinessName}
            BusinessName={BusinessName}
            setNearBy={setNearBy}
            NearBy={NearBy}
            setWhatWhy={setWhatWhy}
            WhatWhy={WhatWhy}
            setOfficialWeb={setOfficialWeb}
            OfficialWeb={OfficialWeb}
            setTicketURL={setTicketURL}
            TicketURL={TicketURL}
            setPriceFrom={setPriceFrom}
            PriceFrom={PriceFrom}
            setPriceTo={setPriceTo}
            PriceTo={PriceTo}
        />
    )
}
export default CreateEventView;