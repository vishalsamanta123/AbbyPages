import React from 'react';
import BookmarkMapScreen from './components/BookmarkMapScreen';
const BookmarkMapView = ({ navigation }) => {
    const onPressBack = () => {
        navigation.goBack(null);
    };
    return (
        <BookmarkMapScreen
            onPressBack={onPressBack}
        />
    )
}
export default BookmarkMapView;