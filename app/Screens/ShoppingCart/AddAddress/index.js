import React, { useState } from 'react';
import AddAddress from './components/AddAddress';
import styles from './components/styles';
import {
    View,
    Text,
    Image
} from 'react-native';
const AddAddressView = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [CompanyName, setCompanyName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [notes, setNotes] = useState('');
    const [Country, setCountry] = useState('');
    const [Address, setAddress] = useState('');
    const [cityName, setCityName] = useState('');
    const [EmailAddress, setEmailAddress] = useState('');
    const [SaveCheckBox, setSaveCheckBox] = useState(false);

    const onPressCheckBox = () => {
        setSaveCheckBox(!SaveCheckBox)
    }
    const onPressSave = () => {
        navigation.navigate('CheckOut')
    }
    return (
        <AddAddress
            setFirstName={setFirstName}
            setLastName={setLastName}
            setCompanyName={setCompanyName}
            setMobileNumber={setMobileNumber}
            setAddress={setAddress}
            setCityName={setCityName}
            setEmailAddress={setEmailAddress}
            setCountry={setCountry}
            setNotes={setNotes}
            firstName={firstName}
            cityName={cityName}
            Country={Country}
            Address={Address}
            lastName={lastName}
            CompanyName={CompanyName}
            mobileNumber={mobileNumber}
            notes={notes}
            EmailAddress={EmailAddress}
            onPressCheckBox={onPressCheckBox}
            SaveCheckBox={SaveCheckBox}
            onPressSave={onPressSave}
        />
    )
}
export default AddAddressView;