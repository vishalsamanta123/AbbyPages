import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';
import CommonStyles from '../../Utils/CommonStyles';
import ConfirmReservation from './components/ConfirmReservation';
import { apiCall } from '../../Utils/httpClient';
import ENDPOINTS from '../../Utils/apiEndPoints';
import styles from './components/styles';
import { UserContext } from '../../Utils/UserContext';
import Loader from '../../Utils/Loader';
import Success from '../../Components/Modal/success';
import Error from '../../Components/Modal/error';
import dateFormat from 'dateformat';
const ConfirmReservationView = ({ route, navigation }) => {
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
        note: ""
    });
    const [reservationData, setReservationData] = useState('');
    const [restroDetail, setRestroDetail] = useState('');
    const [SaveCheckBox, setSaveCheckBox] = useState(true);
    useEffect(() => {
        if (route.params) {
            setLocalUserData(userData.data);
            const { reservationData, restroDetail } = route.params
            setReservationData(reservationData);
            setRestroDetail(restroDetail);
        };
    }, []);
    const onPressCheckBox = () => {
        setSaveCheckBox(!SaveCheckBox)
    };
    const onPressEditDetails = () => {
        navigation.navigate('RestauranrtBooking', { detail: restroDetail });
    };
    const validationForm = () => {
        if (localUserData.first_name == '') {
            setVisibleErr(true);
            setErrorMessage('Please Enter First Name');
            return false;
        } if (localUserData.last_name == '') {
            setVisibleErr(true);
            setErrorMessage('Please Enter Last Name');
            return false;
        } if (localUserData.email == '') {
            setVisibleErr(true);
            setErrorMessage('Please Enter Email');
            return false;
        } if (localUserData.mobile == '') {
            setVisibleErr(true);
            setErrorMessage('Please Enter Phone No.');
            return false;
        } return true;
    }
    const onPressConfirm = async () => {
        const valid = validationForm();
        if (valid) {
            setVisible(true);
            var date = dateFormat(reservationData.date, 'yyyy-mm-dd')
            const params = {
                business_id: restroDetail.business_id,
                business_type: 1,
                booking_date: date,
                booking_time: reservationData.time,
                note: localUserData.note,
                people: reservationData.people,
                first_name: localUserData.first_name,
                last_name: localUserData.last_name,
                phone: localUserData.mobile,
                email: localUserData.email,
                // booking_type: reservationData.booking_type,
                order_booking_type: reservationData.booking_type == 1 ? 3 : 4,
                receive_special_offer: 1
            };
            console.log('params', params)
            const { data } = await apiCall('POST', ENDPOINTS.RESTAURANTS_TABLE_BOOKING, params)
            if (data.status === 200) {
                setSuccessMessage(data.message);
                setVisibleSuccess(true);
                setVisible(false);
            } else {
                setErrorMessage(data.message);
                setVisibleErr(true);
                setVisible(false);
            };
        };
    };
    return (
        <View style={CommonStyles.container}>
            {visible && <Loader state={visible} />}
            <ConfirmReservation
                restroDetail={restroDetail}
                reservationData={reservationData}
                localUserData={localUserData}
                setLocalUserData={setLocalUserData}
                onPressConfirm={onPressConfirm}
                onPressEditDetails={onPressEditDetails}

                onPressCheckBox={onPressCheckBox}
                SaveCheckBox={SaveCheckBox}
            />
            <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
            <Success
                message={successMessage}
                visible={visibleSuccess}
                closeModel={() => navigation.navigate('OrderHistory', setVisibleSuccess(false))}
            />
        </View>
    )
}
export default ConfirmReservationView;