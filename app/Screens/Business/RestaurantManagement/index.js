import React, { useState, Fragment, useContext } from 'react';
import RestaurantManagement from './components/RestaurantManagement';
import { useFocusEffect, useLinkProps } from '@react-navigation/native';
import {
    apiCall, setDefaultHeader
} from '../../../Utils/httpClient';
import ENDPOINTS from '../../../Utils/apiEndPoints';
import Loader from '../../../Utils/Loader';
import Error from '../../../Components/Modal/error';
import Success from '../../../Components/Modal/success';
import { AddItemCategory } from '../../../Utils/UserContext';

const RestaurantManagementView = ({ navigation }) => {
    const [activeCategory, setactiveCategory] = useContext(AddItemCategory);
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false)
    const [profileData, setProfileData] = useState('');
    const [logoBaseImgUrl, setLogoBaseImgUrl] = useState('');
    useFocusEffect(
        React.useCallback(() => {
            getProfile()
            getCategoryListFun()
            return () => getProfile();
        }, [])
    );
    const getProfile = async () => {
        const { data } = await apiCall
            ('POST', ENDPOINTS.GET_USER_PROFILE);
        if (data.status === 200) {
            setProfileData(data.data)
            setLogoBaseImgUrl(data.business_logo)

        };
    };

    const getCategoryListFun = async (type) => {
        setVisible(true)
        try {
            const params = {
                business_type: 1
            }
            const { data } = await apiCall
                ('POST', ENDPOINTS.GET_CATEGORY_LIST, params);
            if (data.status === 200) {
                setactiveCategory({
                    ...activeCategory,
                    activeIndex: 0,
                    categoryId: data.data[0].business_item_category_id
                }
                )
                setVisible(false);
            } else {
                setVisible(false);
            };
        } catch (error) {
            setVisible(false);
        };
    }



    const onPressTable = () => {
        navigation.navigate('TableManagement')
    }
    const onPressItemManage = () => {
        navigation.navigate('MyRestaurantItem')
    }

    return (
        <RestaurantManagement
            onPressItemManage={onPressItemManage}
            onPressTable={onPressTable}
            profileData={profileData}
        />
    )
}
export default RestaurantManagementView;