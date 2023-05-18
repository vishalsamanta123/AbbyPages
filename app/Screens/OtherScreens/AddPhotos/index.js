import React, { useState } from 'react';
import AddPhotos from './components/AddPhotos';
const AddPhotosView = () => {
    const [locationName, setLocationName] = useState('');
    const [Address, setAddress] = useState('');

    const onPressSave = () => {
        // navigation.navigate('Searching')
    }
    const onPressCancelBtn = () => {
        // navigation.navigate('Searching')
    }
    return (
        <AddPhotos
            locationName={locationName}
            Address={Address}
            setLocationName={setLocationName}
            setAddress={setAddress}
            onPressSave={onPressSave}
            onPressCancelBtn={onPressCancelBtn}
        />
    )
}
export default AddPhotosView;