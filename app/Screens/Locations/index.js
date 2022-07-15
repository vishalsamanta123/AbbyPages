import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { useFocusEffect, useLinkProps } from '@react-navigation/native';
import Locations from './components/Locations';
import styles from './components/styles';
import CommonStyles from '../../Utils/CommonStyles';
import { apiCall } from '../../Utils/httpClient';
import ENDPOINTS from '../../Utils/apiEndPoints';
import Loader from '../../Utils/Loader';
import Success from '../../Components/Modal/success';
import Error from '../../Components/Modal/error';
const LocationsView = ({ navigation }) => {
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false);

    const [SavedLocations, setSavedLocations] = useState([]);
    // useEffect(() => {
    // DashBoardDetails()
    // }, []);
    useFocusEffect(
        React.useCallback(() => {
            DashBoardDetails()
            return () => DashBoardDetails();
        }, [])
    );
    const DashBoardDetails = async () => {
        setVisible(true)
        const { data } = await apiCall('POST', ENDPOINTS.DASHBOARD_DETAILS);
        if (data.status === 200) {
            setSavedLocations(data.data.user_location)
            setVisible(false);
        } else {
            setErrorMessage(data.message);
            setVisibleErr(true);
            setVisible(false);
        }
    };
    const OnDeleteLocation = async (item) => {
        setVisible(true);
        try {
            const params = {
                type: 1,
                location_id: item.location_id
            }
            const { data } = await apiCall('POST', ENDPOINTS.DELETE_EMAIL_LOCATION, params);
            if (data.status === 200) {
                DashBoardDetails();
                setVisibleSuccess(true);
                setSuccessMessage(data.message);
                setVisible(false);
            } else {
                setErrorMessage(data.message);
                setVisibleErr(true);
                setVisible(false);
            }
        } catch (error) {
            setVisibleErr(true);
            setErrorMessage(error);
        }
    }
    const _handleSavedLocation = (item, index) => {
        return (
            <>
                <View style={[styles.EmailContainerBox, { flexDirection: "row" }]}>
                    <View style={{ flex: 5 }}>
                        <Text style={styles.MainEmaliTXt}>{item.location} </Text>
                        {item.primary_status === 1 &&
                            <Text style={styles.PrimaryText}>Primary</Text>
                        }
                    </View>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    position: "absolute",
                    right: 10,
                    bottom: 0
                }}>
                    {
                        item.primary_status !== 1 &&
                        <TouchableOpacity
                            onPress={() => onPressPrimary(item.location_id)}
                            style={[styles.ImageDelete]}>
                            <Image
                                style={{ height: 42, width: 42 }}
                                source={require('../../Assets/add_primary_icon_color.png')} />
                        </TouchableOpacity>
                    }
                    {/* <TouchableOpacity style={[styles.ImageDelete]}>
                        <Image source={require('../../Assets/list_edit_icon.png')} />
                    </TouchableOpacity> */}
                    {item.primary_status !== 1 &&
                        <TouchableOpacity
                            style={styles.ImageDelete}
                            onPress={() => OnDeleteLocation(item)}>
                            <Image
                                source={require('../../Assets/list_delete_icon.png')} />
                        </TouchableOpacity>}
                </View>
            </>
        )
    };
    const onPressAddLocation = () => {
        navigation.navigate('AddLocation');
    };
    const onPressPrimary = async (location_id) => {
        setVisible(true);
        const params = {
            location_id: location_id
        };
        const { data } = await apiCall
            ('POST', ENDPOINTS.CHANGE_PRIMARY_LOCATION, params);
        if (data.status === 200) {
            DashBoardDetails();
            setVisibleSuccess(true);
            setSuccessMessage(data.message);
            setVisible(false);
        } else {
            setErrorMessage(data.message);
            setVisibleErr(true);
            setVisible(false);
        };
    };
    return (
        <View style={CommonStyles.container}>
            {visible && <Loader state={visible} />}
            <Locations
                SavedLocations={SavedLocations}
                _handleSavedLocation={_handleSavedLocation}
                onPressAddLocation={onPressAddLocation}
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
    );
};
export default LocationsView;