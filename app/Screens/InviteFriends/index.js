import React, { useState } from 'react';
import InviteFriends from './components/InviteFriends';
const InviteFriendsView = ({ navigation }) => {
    const [EmailAddress, setEmailAddress] = useState('');
    // const [SpiceLevel, setSpiceLevel] = useState('');
    // const [Special, setSpecial] = useState('');
    const onPressSend = () => {
        // navigation.navigate('Searching')
    }
    return (
        <InviteFriends
            EmailAddress={EmailAddress}
            // SpiceLevel={SpiceLevel}
            // Special={Special}
            setEmailAddress={setEmailAddress}
            // setSpiceLevel={setSpiceLevel}
            // setSpecial={setSpecial}
            onPressSend={onPressSend}
        />
    )
}
export default InviteFriendsView;