import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import BussinessInfoScreen from './component/BussinessInfoScreen';
import {
    apiCall, setDefaultHeader
} from '../../../Utils/httpClient';
import ENDPOINTS from '../../../Utils/apiEndPoints';
import Loader from '../../../Utils/Loader';
import Error from '../../../Components/Modal/error';
import Success from '../../../Components/Modal/success';
const BussinessInfo = ({ navigation }) => {
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false)

    const [profileData, setProfileData] = useState('');

    const onPressConfirm = () => {
        navigation.navigate('Confirm')
    }
    useEffect(() => {
        // alert(4)
        getProfile()
    }, [])
    const getProfile = async () => {
        setVisible(true)
        const { data } = await apiCall
            ('POST', ENDPOINTS.GET_USER_PROFILE);
        if (data.status === 200) {
            setProfileData(data.data)
            setVisible(false)
        } else {
            setVisible(false)
        }
    };

    const naviRestaurant = () => {
        navigation.navigate('RestaurantManagement')
    }
    const goalsFun = () => {
        navigation.navigate('Goals')
    }
    const AddKeybordFun = () => {
        navigation.navigate('AddKeybord')
    }
    const AddTextFun = () => {
        navigation.navigate('AddText')
    }
    const BusinessLocationFun = () => {
        navigation.navigate('BusinessLocation')
    }
    const BudgetsFun = () => {
        navigation.navigate('Budgets')
    }
    const navToBasicInfo = () => {
        navigation.navigate('BasicInformation')
    }
    return (
        <View style={{ flex: 1 }}>
            <BussinessInfoScreen
                onPressConfirm={onPressConfirm}
                profileData={profileData}
                naviRestaurant={naviRestaurant}
                goalsFun={goalsFun}
                AddKeybordFun={AddKeybordFun}
                AddTextFun={AddTextFun}
                BusinessLocationFun={BusinessLocationFun}
                BudgetsFun={BudgetsFun}
                navToBasicInfo={navToBasicInfo}
            />
            {visible && <Loader state={visible} />}

        </View>
    )
}
export default BussinessInfo;