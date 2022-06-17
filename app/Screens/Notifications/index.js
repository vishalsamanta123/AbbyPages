import React, { useState, useEffect } from 'react';
import Notifications from './components/Notifications';
import styles from './components/styles';
import {
    View,
    Text,
} from 'react-native';
import moment from 'moment';
import CommonStyles from '../../Utils/CommonStyles';
import { apiCall } from '../../Utils/httpClient';
import ENDPOINTS from '../../Utils/apiEndPoints';
import Loader from '../../Utils/Loader';
import Success from '../../Components/Modal/success';
import Error from '../../Components/Modal/error';
const NotificationsView = () => {
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false);
    useEffect(() => {
            getNotificationList();
    }, []);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         getNotificationList();
    //     }, 1000);
    //     // return clearInterval(interval);
    //     return () => clearInterval(interval);
    // }, []);
    const getNotificationList = async () => {
        try {
            const { data } = await apiCall('POST', ENDPOINTS.NOTIFICATION_LIST)
            if (data.status == 200) {
                console.log('data', data.data)
                setNotificationData(data.data)
                setVisible(false);
            } else {
                setErrorMessage(data.message);
                setVisibleErr(true);
                setVisible(false);
            }
        } catch (error) {
            setErrorMessage(data.message);
            setVisibleErr(true);
            setVisible(false);
        }
    };
    const [NotificationData, setNotificationData] = useState([]);
    const _handleNotificationData = (item, index) => {
        return (
            <View style={styles.EmailContainer}>
                <Text style={styles.NotificationText}>{item.message}</Text>
                <Text style={styles.TimingTextMain}>
                    {moment(item.create_date).startOf('hour').fromNow()}
                    {/* 8 Hours ago */}
                </Text>
            </View>
        )
    }
    return (
        <View style={CommonStyles.container}>
            {visible && <Loader state={visible} />}
            <Notifications
                NotificationData={NotificationData}
                _handleNotificationData={_handleNotificationData}
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
};
export default NotificationsView;