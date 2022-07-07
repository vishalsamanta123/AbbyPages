import React, { useState } from 'react';
import InviteFriends from './components/InviteFriends';
const InviteFriendsView = ({ navigation }) => {
    const [EmailAddress, setEmailAddress] = useState('');
    const [emailExSecond, setEmailExSecond] = useState('');
    const [emailExThird, setEmailExThired] = useState('');
    const [showEmailBox, setShowEmailBox] = useState(false);

    const addAnotherEmail = () => {
        setShowEmailBox(true);
    }
    const handleSaveEmail = () => {
        alert('coming soon')
    }
    return (
        <InviteFriends
            showEmailBox={showEmailBox}
            EmailAddress={EmailAddress}
            emailExThird={emailExThird}
            emailExSecond={emailExSecond}
            handleSaveEmail={handleSaveEmail}
            setEmailAddress={setEmailAddress}
            addAnotherEmail={addAnotherEmail}
            setEmailExSecond={setEmailExSecond}
            setEmailExThired={setEmailExThired}
        />
    )
}
export default InviteFriendsView;