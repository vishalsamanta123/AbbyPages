import React, { useState, useContext } from 'react';
import StepThirdScreen from './components/StepThirdScreen';
import { View } from 'react-native';
import CommonStyles from '../../Utils/CommonStyles';
import { apiCall } from '../../Utils/httpClient';
import ENDPOINTS from '../../Utils/apiEndPoints';
import Loader from '../../Utils/Loader';
import Success from '../../Components/Modal/success';
import Error from '../../Components/Modal/error';
import { ServiceProviderContext } from '../../Utils/UserContext';
import dateFormat from 'dateformat';
import moment from 'moment';
const StepThird = ({ navigation }) => {
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
    const [serviceProviderData, setServiceProviderData] = useContext(ServiceProviderContext);
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false);

    const [ZipCode, setZipCode] = useState({
        latitude: "",
        longitude: "",
        address: "",
        booking_time: "",
        booking_date: "",
        description: ""
    });
    const validationFormForAddress = () => {
        if (ZipCode.address == '') {
            setErrorMessage('Please Select Location');
            setVisibleErr(true);
            return false;
        } if (ZipCode.latitude == '') {
            setErrorMessage('Please Select Location again there is might be some problem here');
            setVisibleErr(true);
            return false;
        } if (ZipCode.longitude == '') {
            setErrorMessage('Please Select Location again there is might be some problem here');
            setVisibleErr(true);
            return false;
        } if (ZipCode.booking_date == '') {
            setErrorMessage('Please Select Date');
            setVisibleErr(true);
            return false;
        } if (ZipCode.booking_time == '') {
            setErrorMessage('Please Select Time');
            setVisibleErr(true);
            return false;
        } return true;
        // if (ZipCode.description == '') {
        //     setErrorMessage('Please Select Description');
        //     setVisibleErr(true);
        //     return false;
        // }
    };
    const onPressStepfourth = () => {
        const valid = validationFormForAddress();
        if (valid) {
            const params = {
                serviceDetail: serviceProviderData.serviceDetail,
                selectedCategory: serviceProviderData.selectedCategory,
                selectedSubCategory: serviceProviderData.selectedSubCategory,
                // zip_code: 452001
                latitude: ZipCode.latitude,
                longitude: ZipCode.longitude,
                address: ZipCode.address,
                booking_time: ZipCode.booking_time,
                booking_date: ZipCode.booking_date,
                description: ZipCode.description
            }
            setServiceProviderData(params);
            navigation.navigate('StepFifth');
        }
    };
    const handleDateConfirm = (date) => {
        var dateFormater = dateFormat(date, 'yyyy-mm-dd');
        setZipCode({
            ...ZipCode,
            booking_date: dateFormater
        })
        setIsDatePickerVisible(false);
    };
    const handleTimeConfirm = (time) => {
        const times = moment(time).format('LTS');
        setZipCode({
            ...ZipCode,
            booking_time: times
        })
        setIsTimePickerVisible(false);
    };
    const goBack = () => {
        navigation.goBack(null)
    };
    return (
        <View style={CommonStyles.container}>
            {visible && <Loader state={visible} />}
            <StepThirdScreen
                goBack={goBack}

                ZipCode={ZipCode}
                setZipCode={setZipCode}
                onPressStepfourth={onPressStepfourth}

                handleDateConfirm={handleDateConfirm}
                isDatePickerVisible={isDatePickerVisible}
                setIsDatePickerVisible={setIsDatePickerVisible}
                handleTimeConfirm={handleTimeConfirm}
                isTimePickerVisible={isTimePickerVisible}
                setIsTimePickerVisible={setIsTimePickerVisible}
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
export default StepThird;