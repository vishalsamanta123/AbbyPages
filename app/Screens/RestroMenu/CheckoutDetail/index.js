import React, { useState, useContext, useEffect } from 'react';
import { View } from 'react-native';
import CommonStyles from '../../../Utils/CommonStyles';
import CheckoutDetail from './components/CheckoutDetail';
import AsyncStorage from '@react-native-community/async-storage';
import { UserContext, AuthContext } from '../../../Utils/UserContext';
import Loader from '../../../Utils/Loader';
import Success from '../../../Components/Modal/success';
import Error from '../../../Components/Modal/error';
const CheckoutDetailView = ({ navigation }) => {
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false);

    const [userData, setUserData] = useContext(UserContext);
    const [localUserData, setLocalUserData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        order_payment_type: "",
        order_description: ""
    });
    const [paymentMethod, setPaymentMethod] = useState(false);
    const [location, setLocation] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [delivery_type, setDeliveryType] = useState('');


    const [AddCard, setAddCard] = useState('');
    const [CardNumber, setCardNumber] = useState('');
    const [CardExpiry, setCardExpiry] = useState('');
    const [CVVNumber, setCVVNumber] = useState('');
    const [ZipCode, setZipCode] = useState('');
    useEffect(() => {
        setLocalUserData(userData.data)
        AsyncStoragefunction()
    }, []);
    const AsyncStoragefunction = async () => {
        const orderData = await AsyncStorage.getItem('orderData');
        if (orderData !== '') {
            setDateTime(JSON.parse(orderData).order_schedule_time);
            setLocation(JSON.parse(orderData).address);
            setDeliveryType(JSON.parse(orderData).delivery_type);
        }
    };
    const onPressPaymentMethod = () => {
        setPaymentMethod(!paymentMethod)
        setLocalUserData({
            ...localUserData,
            order_payment_type: paymentMethod ? 1 : 2
        })
    }
    function validationFrom() {
        if (localUserData.first_name == '') {
            setErrorMessage('Please enter name');
            setVisibleErr(true);
            return false;
        } if (localUserData.last_name == "") {
            setErrorMessage('Please enter lastname');
            setVisibleErr(true);
            return false;
        } if (localUserData.email == "") {
            setErrorMessage('Please enter email');
            setVisibleErr(true);
            return false;
        } if (localUserData.mobile == "") {
            setErrorMessage('Please enter phone no.');
            setVisibleErr(true);
            return false;
        } if (localUserData.order_payment_type === "") {
            setErrorMessage('Please Select Payment Method');
            setVisibleErr(true);
            return false;
        } if (localUserData.order_description === "") {
            setErrorMessage('Please Select Payment Method');
            setVisibleErr(true);
            return false;
        }
        return true;
    }
    const onPressContinue = async () => {
        const valid = validationFrom();
        if (valid) {
            try {
                const orderData = await AsyncStorage.getItem('orderData');
                if (orderData !== '') {
                    setVisible(true);
                    const params = {
                        business_id: JSON.parse(orderData).business_id,
                        address: JSON.parse(orderData).address,
                        order_schedule_time: JSON.parse(orderData).order_schedule_time,
                        business_name: JSON.parse(orderData).business_name,
                        delivery_type: JSON.parse(orderData).delivery_type,
                        first_name: localUserData.first_name,
                        last_name: localUserData.last_name,
                        email: localUserData.email,
                        mobile: localUserData.mobile,
                        order_payment_type: localUserData.order_payment_type,
                        order_description: localUserData.order_description
                    }
                    await AsyncStorage.setItem('orderData', JSON.stringify(params));
                    setVisible(false);
                    navigation.navigate('PlaceOrder');
                }
            } catch (e) {
                setErrorMessage(e);
                setVisibleErr(true);
            };
        }
        navigation.navigate('PlaceOrder')
    }
    return (
        <View style={CommonStyles.container}>
            {visible && <Loader state={visible} />}
            <CheckoutDetail
                delivery_type={delivery_type}
                dateTime={dateTime}
                location={location}
                localUserData={localUserData}
                setLocalUserData={setLocalUserData}

                onPressPaymentMethod={onPressPaymentMethod}
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                onPressContinue={onPressContinue}

                AddCard={AddCard}
                CardNumber={CardNumber}
                CardExpiry={CardExpiry}
                CVVNumber={CVVNumber}
                ZipCode={ZipCode}

                setAddCard={setAddCard}
                setCardNumber={setCardNumber}
                setCardExpiry={setCardExpiry}
                setCVVNumber={setCVVNumber}
                setZipCode={setZipCode}
            />
            <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
            <Success
                message={successMessage}
                visible={visibleSuccess}
                closeModel={() => setVisibleSuccess(false)}
            />
        </View>
    )
}
export default CheckoutDetailView;