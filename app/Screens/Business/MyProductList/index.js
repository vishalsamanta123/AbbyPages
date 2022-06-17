import React, { useState, useEffect } from 'react';
import { Image, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import MyProductList from './component/MyProductList';
import styles from './component/styles';
import { WHITE_COLOR_CODE, YELLOW_COLOR_CODE, GREY_COLOR_CODE } from '../../../Utils/Constant';
import {
    apiCall, setDefaultHeader
} from '../../../Utils/httpClient';
import ENDPOINTS from '../../../Utils/apiEndPoints';
import Loader from '../../../Utils/Loader';
import Error from '../../../Components/Modal/error';
import Success from '../../../Components/Modal/success';
import { useFocusEffect, useLinkProps } from '@react-navigation/native';
const MyProductListView = ({ navigation }) => {
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false)

    const [isSelectedCatgory, setIsSelectedCatgory] = useState(0);
    const [getItemList, setGetItemList] = useState([]);
    const [CategoryId, setCategoryId] = useState([]);
    const [productListData, setProductListData] = useState([]);
    const [imgUrl, setImgUrl] = useState();


    useFocusEffect(
        React.useCallback(() => {
            productList()
            return () => productList();
        }, [])
    );



    const productList = async () => {
        setVisible(true)
        try {
            const { data } = await apiCall
                ('POST', ENDPOINTS.BUSINESS_PRODUCT_LIST);
            if (data.status === 200) {
                setVisible(false);
                setProductListData(data.data)
            } else {
                setVisible(false)
            };
        } catch (error) {
            // setErrorMessage(error);
            // setVisibleErr(true);
            setVisible(false);
        };
    }

    const ProductDetails = (item) => {
        navigation.navigate('BusinessProductDetails', { productData: item.product_id, type: 'Edit' })
    }

    const _handleSandwichDish = (item, index) => {
        return (
            <TouchableOpacity onPress={() => ProductDetails(item)} style={styles.ConatinView}>
                <View style={{ width: '40%', alignSelf: 'center' }}>
                    <ImageBackground style={styles.DishImgeStyle}
                        source={{ uri: item.product_image }}
                        resizeMode='stretch'
                        resizeMethod='resize'

                    />
                </View>
                <View style={styles.DishDiscptnView}>
                    <View>
                        <Text style={styles.DishNameTxt} >{item.product_name}</Text>
                        <Text style={[styles.PriceOfDishTxt, { color: YELLOW_COLOR_CODE, }]}>${item.final_price}  </Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '65%' }}>
                            <Text style={[styles.PriceOfDishTxt,]}>M.R.P :</Text>
                            <Text style={[styles.PriceOfDishTxt, { textDecorationLine: 'line-through' }]}> ${item.price}</Text>
                            <Text style={[styles.PriceOfDishTxt]}> ({item.discount}% off)</Text>
                        </View>
                        <Text numberOfLines={2} style={styles.DiscrptnTxtStyle} >{item.description}</Text>
                    </View>
                </View>
            </TouchableOpacity >
        )
    }


    const onPressItem = () => {
        navigation.navigate('AddBusinessProduct')
    }

    return (
        <View style={{ flex: 1 }}>
            {visible && <Loader state={visible} />}
            <MyProductList
                _handleSandwichDish={(item, index) => _handleSandwichDish(item, index)}
                onPressItem={onPressItem}
                getItemList={getItemList}
                productListData={productListData}
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
export default MyProductListView;