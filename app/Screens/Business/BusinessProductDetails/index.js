import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import BusinessProductDetails from './components/BusinessProductDetails';
import CommonStyles from '../../../Utils/CommonStyles';
import {
    apiCall, setDefaultHeader
} from '../../../Utils/httpClient';
import ENDPOINTS from '../../../Utils/apiEndPoints';
import Loader from '../../../Utils/Loader';
import Error from '../../../Components/Modal/error';
import Success from '../../../Components/Modal/success';
import moment from 'moment'
import { useFocusEffect, useLinkProps } from '@react-navigation/native';

const OrderDetail = ({ route, props, navigation }) => {
    console.log('route: ', route);
    const Id = route.params.productData;
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false)
    const [ProductData, setProductData] = useState()

    const [productId, setProductId] = useState(Id)

    useFocusEffect(
        React.useCallback(() => {
            productDetailsFun()
            return () => productDetailsFun();
        }, [])
    );
    const productDetailsFun = async () => {
        setVisible(true)
        try {
            const params = {
                product_id: productId,
            }
            const { data } = await apiCall
                ('POST', ENDPOINTS.GET_BUSINESS_PRODUCT_DETAILS, params);
            if (data.status === 200) {
                setProductData(data.data)
                setVisible(false);
            } else {
                setVisible(false);
                setErrorMessage(data.message);
                setVisibleErr(true);
            };
        } catch (error) {
            setErrorMessage(error);
            setVisibleErr(true);
            setVisible(false);
        };
    }


    const DeleteProductMsg = () =>
        Alert.alert(
            "",
            "Are you sure you want delete this product",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => deleteProduct() }
            ],
            { cancelable: false }
        );

    const deleteProduct = async () => {
        setVisible(true)
        try {
            const params = {
                product_id: productId,
                delete_type: '1'
            }
            const { data } = await apiCall
                ('POST', ENDPOINTS.BUSINESS_PRODUCT_DELETE, params);
            if (data.status === 200) {
                navigation.navigate('MyProductList')
                setVisible(false);
                // setSuccessMessage('Product delete successfully')
                // setVisibleSuccess(true)
            } else {
                setVisible(false);
                setErrorMessage(data.message);
                setVisibleErr(true);
            };
        } catch (error) {
            setErrorMessage(error);
            setVisibleErr(true);
            setVisible(false);
        };
    }

    const editProduct = () => {
        navigation.navigate('AddBusinessProduct', { productId: productId, type: 'Edit' })
    }

    return (
        <View style={{ flex: 1 }}>
            {visible && <Loader state={visible} />}
            <BusinessProductDetails
                ProductData={ProductData}
                DeleteProductMsg={DeleteProductMsg}
                editProduct={editProduct}
            />
            <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
            <Success
                message={successMessage}
                visible={visibleSuccess}
                closeModel={() => ('Home', setVisibleSuccess(false))}
            />
        </View>
    )
}
export default OrderDetail;