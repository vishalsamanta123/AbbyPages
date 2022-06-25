import React, { useState, useContext } from 'react';
import StepSevenScreen from './components/StepSevenScreen';
import { View } from 'react-native';
import CommonStyles from '../../Utils/CommonStyles';
import { apiCall } from '../../Utils/httpClient';
import ENDPOINTS from '../../Utils/apiEndPoints';
import Loader from '../../Utils/Loader';
import Success from '../../Components/Modal/success';
import Error from '../../Components/Modal/error';
import { ServiceProviderContext, ServiceProviderContextQueAnsData } from '../../Utils/UserContext';
const StepSeven = ({ navigation }) => {
    const [serviceProviderQueAnsData, setServiceProviderQueAnsData] = useContext(ServiceProviderContextQueAnsData);
    const [serviceProviderData, setServiceProviderData] = useContext(ServiceProviderContext);
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false);

    const [service_provide_type, setServiceProvideType] = useState(false);

    const onPressStepEight = async () => {
        setVisible(true);
        try {
            const params = {
                selected_service_answer: serviceProviderQueAnsData,
                business_id: service_provide_type ? null : serviceProviderData.serviceDetail.business_id,
                service_provide_type: service_provide_type ? 2 : 1,
                business_type: 3,
                category_id: serviceProviderData.selectedCategory,
                // category_id: serviceProviderData.selectedCategory.category_id,
                what_type_project_are_looking_start: serviceProviderData.selectedSubCategory,
                // what_type_project_are_looking_start: serviceProviderData.selectedSubCategory.id,
                latitude: serviceProviderData.latitude,
                longitude: serviceProviderData.longitude,
                address: serviceProviderData.address,
                username: serviceProviderData.username,
                email: serviceProviderData.email,
                phone: serviceProviderData.phone,
                description: serviceProviderData.description,
                booking_time: serviceProviderData.booking_time,
                booking_date: serviceProviderData.booking_date,
            };
            const { data } = await apiCall("POST", ENDPOINTS.SERVICE_BOOKING, params);
            if (data.status == 200) {
                setVisibleSuccess(true);
                setServiceProviderData('');
                setSuccessMessage(data.message);
                setServiceProviderQueAnsData('');
                setVisible(false);
            } else {
                setVisible(false);
                setErrorMessage(data.message);
                setVisibleErr(true);
            }
            // navigation.navigate('StepEight');
        } catch (error) {
            setVisible(false);
            setErrorMessage(error);
            setVisibleErr(true);
        }
    };
    return (
        <View style={CommonStyles.container}>
            {visible && <Loader state={visible} />}
            <StepSevenScreen
                service_provide_type={service_provide_type}
                setServiceProvideType={setServiceProvideType}
                goBack={() => navigation.goBack(null)}
                onPressStepEight={onPressStepEight}
            />
            <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
            <Success
                message={successMessage}
                visible={visibleSuccess}
                closeModel={() => { setVisibleSuccess(false), navigation.navigate('OrderHistory') }}
            />
        </View>
    )
}
export default StepSeven;