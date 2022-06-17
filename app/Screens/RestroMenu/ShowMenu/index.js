import React, { useState, useEffect, useContext } from 'react';
import { useFocusEffect, useLinkProps } from '@react-navigation/native';
import { Image, View, Text, TouchableOpacity, Alert } from 'react-native';
import InputSpinner from "react-native-input-spinner";
import AsyncStorage from '@react-native-community/async-storage';
import ShowMenu from './component/ShowMenu';
import _ from 'lodash';
import styles from './component/styles';
import { WHITE_COLOR_CODE, YELLOW_COLOR_CODE, FONT_FAMILY_REGULAR } from '../../../Utils/Constant';
import CommonStyles from '../../../Utils/CommonStyles';
import { apiCall } from '../../../Utils/httpClient';
import { CartContext } from '../../../Utils/UserContext';
import ENDPOINTS from '../../../Utils/apiEndPoints';
import Loader from '../../../Utils/Loader';
import Success from '../../../Components/Modal/success';
import Error from '../../../Components/Modal/error';
const ShowMenuView = ({ route, navigation }) => {
    const [cartData, setCartData] = useContext(CartContext);
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false);

    const [totalAmount, setTotalAmount] = useState('');
    const [restroItemCategoryList, setRestroItemCategoryList] = useState([]);
    const [restroItemList, setRestroItemList] = useState([]);
    const [restroItemParentList, setRestroItemParentList] = useState([]);
    const [isSelectedCatgory, setIsSelectedCatgory] = useState(0);
    useEffect(() => {
        if (route.params) {
            const { detail } = route.params;
            setbusinessId(detail);//function
            handleRestroItemCategoryList(detail);//function
            handleRestroItemList(detail);//function
            if (cartData.length > 0) {
                handleRestroOrderDatas()
            }
        }
    }, []);
    useFocusEffect(
        React.useCallback(() => {
            if (route.params) {
                const { detail } = route.params;
                setbusinessId(detail);//function
                handleRestroItemCategoryList(detail);//function
                handleRestroItemList(detail);//function
            }
            // return () => DashBoardDetails();
        }, [])
    );
    const handleRestroOrderDatas = async () => {
        setCartData('');
        await AsyncStorage.removeItem('orderData');
    }
    const setbusinessId = async (data) => {
        try {
            const params = {
                business_id: data.business_id,
                business_name: data.business_name
            };
            await AsyncStorage.setItem('orderData', JSON.stringify(params));
        } catch (e) {
            console.log(e);
        };
    };
    const handleRestroItemCategoryList = async (data) => {
        setVisible(true);
        const params = {
            business_type: 1,
            business_id: data.business_id
        };
        try {
            const { data } = await apiCall
                ('POST', ENDPOINTS.BUSINESS_ITEM_CATEGORY_LIST, params);
            if (data.status === 200) {
                setRestroItemCategoryList(data.data);
                setVisible(false);
            } else {
                setErrorMessage(data.message);
                setVisibleErr(true);
                setVisible(false);
            }
        } catch (error) {
            setVisibleErr(true);
            setErrorMessage(error);
        };
    };
    const handleRestroItemList = async (data) => {
        setVisible(true);
        const params = {
            business_type: 1,
            business_id: data.business_id
        };
        try {
            const { data } = await apiCall
                ('POST', ENDPOINTS.BUSINESS_ITEM_LIST, params);
            if (data.status === 200) {
                console.log('data', data)
                setRestroItemParentList(data.data)//use like a parent for filter
                setRestroItemList(data.data);
                setVisible(false);
            } else {
                setErrorMessage(data.message);
                setVisibleErr(true);
                setVisible(false);
            }
        } catch (error) {
            setVisibleErr(true);
            setErrorMessage(error);
        };
    };
    const _handleDataTypeSelected = (index, item, dataType) => {
        setVisible(true);
        if (dataType == 'allData') {
            setRestroItemList(restroItemParentList);
        } else {
            setIsSelectedCatgory(item.business_item_category_id);
            const searchArray = [...restroItemParentList];
            const filterData = _.filter(
                searchArray, { business_item_category_id: item.business_item_category_id });
            setRestroItemList(filterData);
        }
        setVisible(false);
    };
    const _renderCategory = (item, index) => {
        const selectedColor = item.business_item_category_id === isSelectedCatgory ? WHITE_COLOR_CODE : "#ffe98e"
        return (
            <TouchableOpacity
                onPress={() =>
                    _handleDataTypeSelected(index, item)}
                style={styles.lablestyle}>
                <Text style={[
                    styles.txtCat,
                    {
                        color: selectedColor
                    }]}>{item.category_name}</Text>
            </TouchableOpacity>
        );
    };
    const onPressAddItem = (item, index) => {
        addToCart(item, 1)//value dalna h 1 ki jagah
    };
    const getqty = (item) => {
        var getIndex = _.findIndex(cartData, { item_id: item.item_id })
        const FinalAmount = (cartData.reduce((accumulatedTotal, curr) => accumulatedTotal + curr.total_item_price, 0))
        setTotalAmount(FinalAmount);
        if (getIndex >= 0) {
            return cartData[getIndex].quantity;
        }
        // var getIndex = cartData.findIndex(function (datas) {
        //     return datas.item_id === item.id;
        // })
        // if (getIndex >= 0) {
        //     return cartData[getIndex].quantity;
        // }
    };
    const removeFromCart = (item) => {
        if (cartData.length > 0) {
            var getIndex = _.findIndex(cartData, { item_id: item.item_id })
            if (getIndex >= 0) {
                if (cartData[getIndex].quantity > 0) {
                    cartData[getIndex].quantity = cartData[getIndex].quantity - 1;
                    cartData[getIndex].total_item_price = cartData[getIndex].total_item_price - cartData[getIndex].price;
                    const FinalAmount = (cartData.reduce((accumulatedTotal, curr) => accumulatedTotal + curr.total_item_price, 0));
                    setTotalAmount(FinalAmount);
                    setCartData(cartData);
                } if (cartData[getIndex].quantity === 0) {
                    cartData.splice(getIndex, 1);
                    const FinalAmount = (cartData.reduce((accumulatedTotal, curr) => accumulatedTotal + curr.total_item_price, 0));
                    setTotalAmount(FinalAmount);
                    setCartData(cartData);
                    cartData.length == 0
                };
            };
        };
    };
    const addToCart = async (item, value) => {
        try {
            const cartItem = {
                item_id: item.item_id,
                item_name: item.item_name,
                price: item.price,
                quantity: value,
                total_item_price: item.price * value,
                item_discount: item.item_discount === null ? 0 : item.item_discount
                // item_discount: 0
            };
            if (cartData.length > 0) {
                var getIndex = _.findIndex(cartData, { item_id: item.item_id })
                if (getIndex >= 0) {
                    // console.log("getIndex", JSON.stringify(cartData[getIndex]))
                    cartData[getIndex].quantity = cartData[getIndex].quantity + 1;
                    cartData[getIndex].total_item_price = cartData[getIndex].price * value;
                    const FinalAmount = (cartData.reduce((accumulatedTotal, curr) => accumulatedTotal + curr.total_item_price, 0))
                    setTotalAmount(FinalAmount);
                    setCartData(cartData)
                } else {
                    setCartData(curr => [...curr, cartItem]);
                    const FinalAmount = (cartData.reduce((accumulatedTotal, curr) => accumulatedTotal + curr.total_item_price, 0))
                    setTotalAmount(FinalAmount);
                }
            } else {
                setCartData(curr => [...curr, cartItem]);
                const FinalAmount = (cartData.reduce((accumulatedTotal, curr) => accumulatedTotal + curr.total_item_price, 0))
                setTotalAmount(FinalAmount);
                // await AsyncStorage.setItem('localCartData', JSON.stringify(cartData))
                // console.log('firstTimeCartDataSetOrNewCategoryAdd', cartData);
            }
        } catch (e) {
            setErrorMessage(e);
            setVisibleErr(true);
        };
    };
    const _handleSandwichDish = (item, index) => {
        const setaddbtn = _.filter(cartData, { item_id: item.item_id })
        const selected_row = setaddbtn.length > 0 ?
            setaddbtn.item_id === item.Item_id ? true : false
            : false
        // console.log('cartData', ...cartData)
        // console.log('selected_row', selected_row)
        return (
            <View key={index} style={styles.ConatinView}>
                <Image style={styles.DishImgeStyle} source={{ uri: item.item_image }} />
                <View style={styles.DishDiscptnView}>
                    <TouchableOpacity onPress={() => navigation.navigate('AddToCart', { itemDetail: item })}>
                        <Text style={styles.DishNameTxt} >{item.item_name}</Text>
                        <Text numberOfLines={2} style={styles.DiscrptnTxtStyle} >
                            {item.description}
                        </Text>
                        <Text style={styles.PriceOfDishTxt}>${item.price}</Text>
                    </TouchableOpacity>
                    <View style={styles.ReviewView}>
                        <Image source={require('../../../Assets/star_icon_filled.png')} />
                        <Text style={styles.ReviewText}> 1 Review</Text>
                        {selected_row ?
                            // {addBtn === index ? selected_row ?
                            // <Text>true1</Text>
                            <InputSpinner
                                value={getqty(item)}
                                onIncrease={(value) => addToCart(item, value)}
                                onDecrease={(value) => removeFromCart(item, value)}
                                max={10}
                                step={1}
                                // min={1}
                                editable={false}
                                rounded={false}
                                textColor={WHITE_COLOR_CODE}
                                colorMax={YELLOW_COLOR_CODE}
                                colorMin={YELLOW_COLOR_CODE}
                                colorPress={YELLOW_COLOR_CODE}
                                color={YELLOW_COLOR_CODE}
                                inputStyle={{ backgroundColor: "transparent" }}
                                buttonPressStyle={{ height: 25, width: 25, backgroundColor: YELLOW_COLOR_CODE }}
                                buttonStyle={{ height: 25, width: 25, justifyContent: 'center', }}
                                buttonFontFamily={FONT_FAMILY_REGULAR}
                                style={styles.AddBtnTouchable}
                            />
                            :
                            <TouchableOpacity
                                onPress={() => onPressAddItem(item, index)}
                                style={styles.AddBtnTouchable}>
                                <Text style={styles.AddBtnTxt}>Add</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>
        )
    };
    const onPressCheckOut = () => {
        if (totalAmount !== '' && cartData !== '') {
            navigation.navigate('RestroCheckout');
        } else {
            setErrorMessage('Add Item To Cart');
            setVisibleErr(true);
        };
    };
    const searchItem = (searchKey) => {
        const lowerCased = searchKey.toLowerCase();
        const searchArray = [...restroItemList];
        const list = _.filter(searchArray, (item) => {
            return item.item_name.toLowerCase().match(lowerCased)
        });
        if (searchKey == '') {
            setRestroItemList(restroItemParentList)
        };
        setRestroItemList(list);
    };
    return (
        <View style={CommonStyles.container}>
            {visible && <Loader state={visible} />}
            <ShowMenu
                searchItem={searchItem}
                totalAmount={totalAmount}
                onPressCheckOut={onPressCheckOut}
                restroItemList={restroItemList}
                restroItemCategoryList={restroItemCategoryList}

                _renderCategory={_renderCategory}
                _handleDataTypeSelected={_handleDataTypeSelected}
                _handleSandwichDish={_handleSandwichDish}
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
export default ShowMenuView;