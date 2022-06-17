import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';
import ServiceListScreen from './components/ServiceListScreen';
import { apiCall } from '../../../Utils/httpClient';
import ENDPOINTS from '../../../Utils/apiEndPoints';
import CommonStyles from '../../../Utils/CommonStyles';
import Loader from '../../../Utils/Loader';
import Error from '../../../Components/Modal/error';
// import { useFocusEffect } from '@react-navigation/native';
import _ from "lodash";
function ServiceList({ navigation, route }) {
    const [isSelectedServiceId, setIsSelectedServiceId] = useState([]);
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [subCategoryList, setServiceList] = useState([])
    useEffect(() => {
        handleServiceList();
    }, []);
    const handleServiceList = async () => {
        const { data } = await apiCall
            ('POST', ENDPOINTS.SERVICE_LIST);
        if (data.status === 200) {
            setServiceList(data.data);
        } else {
            setErrorMessage(data.message);
            setVisibleErr(true);
        }
    }
    function goback() {
        navigation.goBack(null);
    }
    const onClickService = (detail, index) => {
        detail.isSelect = !detail.isSelect;
        if (detail.isSelect == false) {
            _.without(isSelectedServiceId, detail.id);
        } else {
            setIsSelectedServiceId(oldArray => [...oldArray, detail.id])
        }
        subCategoryList[index] = detail;
        setServiceList(subCategoryList)
        // setServiceList([...subCategoryList, detail])
        // navigation.navigate('ChooseCategory', { servicedetail: servicedetail });
        // console.log('detail', isSelectedServiceId)
    }
    const onClickRightIcon = () => {
        // console.log('detail', isSelectedServiceId)
        navigation.navigate('GetStarted', { serviceId: isSelectedServiceId })
    }
    return (
        <View style={CommonStyles.container}>
            <ServiceListScreen
                onClickRightIcon={onClickRightIcon}
                isSelectedService={isSelectedServiceId}
                onClickService={onClickService}
                subCategoryList={subCategoryList}
                goback={goback}
            />
            <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
        </View>
    );
};
export default ServiceList;