import React from 'react';
import FriendsScreen from './components/FriendsScreen';
const FriendsView = ({navigation}) => {
    const onPressInviteFriends = () => {
        navigation.navigate('InviteFriends')
    }
    return (
        <FriendsScreen
            onPressInviteFriends={onPressInviteFriends}
        />
    )
}
export default FriendsView;