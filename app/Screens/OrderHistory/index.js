import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import OrderHistory from './component/OrderHistory';
import styles from './component/styles';
import { WHITE_COLOR_CODE } from '../../Utils/Constant';
import { useFocusEffect, useLinkProps } from '@react-navigation/native';
import CommonStyles from '../../Utils/CommonStyles';
import { apiCall } from '../../Utils/httpClient';
import ENDPOINTS from '../../Utils/apiEndPoints';
import Loader from '../../Utils/Loader';
import Success from '../../Components/Modal/success';
import Error from '../../Components/Modal/error';
const OrderHistoryView = ({ navigation }) => {
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false);

    const [itemCategoryList, setItemCategoryList] = useState('');
    const [orderItemParentList, setOrderItemParentList] = useState('');
    const [orderItemList, setOrderItemList] = useState('');
    const [isSelectedCatgory, setIsSelectedCatgory] = useState(0);
    useEffect(() => {
        handleOrderedItemList();
        handleItemCategoryList();
    }, []);
    useFocusEffect(
        React.useCallback(() => {
            handleOrderedItemList();
            handleItemCategoryList();
            return () => (
                handleOrderedItemList(),
                handleItemCategoryList()
            );
        }, [])
    );
    const handleItemCategoryList = async () => {
        setVisible(true)
        const { data } = await apiCall
            ('POST', ENDPOINTS.BUSINESS_CATEGORY_LIST);
        if (data.status === 200) {
            setItemCategoryList(data.data);
            setVisible(false);
        } else {
            setErrorMessage(data.message);
            setVisibleErr(true);
            setVisible(false);
        };
    };
    const handleOrderedItemList = async () => {
        setVisible(true)
        const params = {
            business_type: 0,
            offset: 0
        }
        const { data } = await apiCall
            ('POST', ENDPOINTS.BUSINESS_ITEM_ORDER_LIST, params);
        if (data.status === 200) {
            setOrderItemParentList(data.data);
            setOrderItemList(data.data);
            setVisible(false);
        } else {
            setErrorMessage(data.message);
            setVisibleErr(true);
            setVisible(false);
        };
    };
    const onpressOrder = (item) => {
        navigation.navigate('OrderDetailBackEnd', { OrderDetail: item });
    };
    const _handleDataTypeSelected = (index, item, dataType) => {
        // setIsSelectedCatgory(item.business_type_id);
        setVisible(true);
        if (dataType == 'allData') {
            setOrderItemList(orderItemParentList);
        } else {
            setIsSelectedCatgory(item.business_type_id);
            const searchArray = [...orderItemParentList];
            const filterData = _.filter(
                searchArray, { business_type: item.business_type_id });
            setOrderItemList(filterData);
        }
        setVisible(false);
    };
    const _renderCategory = (item, index) => {
        return (
            <TouchableOpacity
                onPress={() =>
                    _handleDataTypeSelected(index, item)}
                style={styles.lablestyle}>
                <Text style={[
                    styles.txtCat,
                    {
                        color: item.business_type_id === isSelectedCatgory ? WHITE_COLOR_CODE : "#ffe98e"
                    }]}>
                    {item.business_type_name}
                </Text>
            </TouchableOpacity>
        );
    };
    return (
        <View style={CommonStyles.container}>
            {visible && <Loader state={visible} />}
            <OrderHistory
                orderItemList={orderItemList}
                itemCategoryList={itemCategoryList}
                onpressOrder={onpressOrder}

                _renderCategory={_renderCategory}
                _handleDataTypeSelected={_handleDataTypeSelected}
            />
            <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
            <Success
                message={successMessage}
                visible={visibleSuccess}
                closeModel={() => navigation.navigate('NotificationSettings', setVisibleSuccess(false))}
            />
        </View>
    )
}
export default OrderHistoryView;