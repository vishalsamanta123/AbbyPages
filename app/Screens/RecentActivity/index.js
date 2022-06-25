import React, { useState, useEffect } from 'react';
import RecentActivity from './components/RecentActivity';
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
const RecentActivityView = () => {
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false);

    useEffect(() => {
            getRecentActivityList();
    }, []);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         getRecentActivityList();
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);
    const getRecentActivityList = async () => {
        try {
            const { data } = await apiCall('POST', ENDPOINTS.RECENT_ACTIVITY)
            if (data.status == 200) {
                setRecentActivityData(data.data)
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
    const [RecentActivityData, setRecentActivityData] = useState([]);
    const _handleRecentActivityData = (item, index) => {
        return (
            <View style={styles.EmailContainer}>
                <Text style={styles.NotificationText}>{item.text}</Text>
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
            <RecentActivity
                RecentActivityData={RecentActivityData}
                _handleRecentActivityData={_handleRecentActivityData}
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
export default RecentActivityView;