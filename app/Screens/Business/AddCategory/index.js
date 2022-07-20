import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, ToastAndroid } from 'react-native';
import AddCategoryScreen from './components/AddCategoryScreen';
import CommonStyles from '../../../Utils/CommonStyles';
import { apiCall } from '../../../Utils/httpClient';
import ENDPOINTS from '../../../Utils/apiEndPoints';
import Loader from '../../../Utils/Loader';
import Error from '../../../Components/Modal/error';
import { useFocusEffect } from '@react-navigation/native';
import Success from '../../../Components/Modal/success';
import styles from './components/styles';
import { BLACK_COLOR_CODE, LIGHT_GREY_COLOR_CODE, WHITE_COLOR_CODE, YELLOW_COLOR_CODE } from '../../../Utils/Constant';
const AddCategory = ({ navigation, route }) => {
    const params = route.params;
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false)
    const [categoryName, setCategoryName] = useState('');
    const [editDeleteType, setEditDeleteType] = useState('');
    const [getCategoryList, setGetCategoryList] = useState([]);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editCategoryLabel, setEditCategoryLabel] = useState('');

    useFocusEffect(
        React.useCallback(() => {
            getCategoryListFun();
            if (params) {
                setEditDeleteType(params)
            }
            return () => {
            }
        }, [editDeleteType])
    );
    const onPressSave = async () => {
        const valid = validationFrom();
        if (valid) {
            setVisible(true)
            try {
                const params = {
                    'category_name': categoryName,
                    business_type: 1
                }
                const { data } = await apiCall('POST', ENDPOINTS.ADD_CATEGORY, params);
                if (data.status === 200) {
                    navigation.navigate('MyRestaurantItem')
                    setErrorMessage(data.message);
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
    }

    function validationFrom() {
        if (categoryName == "") {
            setErrorMessage('Please enter category name');
            setVisibleErr(true)
            return false;
        }
        var regex = new RegExp("^[0-9a-zA-Z \b]+$");
        if (!regex.test(categoryName)) {
            setErrorMessage('Special character is not allowd');
            setVisibleErr(true)
            return false;
        }
        return true;
    }
    const getCategoryListFun = async () => {
        setVisible(true)
        try {
            const params = {
                business_type: 1
            }
            const { data } = await apiCall('POST', ENDPOINTS.GET_CATEGORY_LIST, params);
            if (data.status === 200) {
                setGetCategoryList(data.data)
                setVisible(false);
            } else {
                setVisible(false);
            };
        } catch (error) {
            console.log('error: ', error);
            setVisible(false);
        };
    }
    const _handleActiveStatus = async (item) => {
        try {
            const params = {
                active_status: item.status === 1 ? 0 : 1,
                business_item_category_id: item.business_item_category_id,
                business_type: 1,
            }
            const response = await apiCall('POST', ENDPOINTS.ITEM_CATEGORY_REMOVE_SHOW, params);
            if (response.status === 200) {
                item.status === 0 ? ToastAndroid.show("Categories successfully active", ToastAndroid.SHORT) :
                    ToastAndroid.show('Categories successfully un-active', ToastAndroid.SHORT);
                getCategoryListFun();
            }
            else {
            }
        } catch (error) {
            console.log('error: ', error);
        }
    }
    const _renderCategory = (item) => {
        return (
            <View style={styles.mainvwe}>
                <View style={[styles.catetxt, {
                    backgroundColor: item.status === 1 ? YELLOW_COLOR_CODE : LIGHT_GREY_COLOR_CODE
                }]}>
                    <Text style={[styles.txtCat, {
                        color: item.status === 1 ? BLACK_COLOR_CODE : WHITE_COLOR_CODE
                    }]}>{item.category_name}</Text>
                </View>
                <View style={styles.commmonvwe}>
                    <TouchableOpacity onPress={() => _handleActiveStatus(item)}>
                        {item.status === 1 ?
                            <Image source={require('../../../Assets/active_switch.png')} />
                            :
                            <Image source={require('../../../Assets/unactive_switch.png')} />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.commmonvwe}>
                    <TouchableOpacity onPress={() => editModalOpen(item)}>
                        <Image source={require('../../../Assets/list_edit_icon.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    function editModalOpen(item) {
        setEditCategoryLabel(item);
        setEditModalVisible(true)
    }

    const _handleEditCategories = async () => {
        setVisible(true)
        try {
            const params = {
                business_item_category_id: editCategoryLabel.business_item_category_id,
                business_type: 1,
                category_name: editCategoryLabel.category_name
            }
            const response = await apiCall('POST', ENDPOINTS.ADD_CATEGORY, params);
            if (response.status === 200) {
                getCategoryListFun();
                setEditModalVisible(false);
                setVisible(false);
            } else {
                setVisible(false);
                setEditModalVisible(false);
            };
        } catch (error) {
            
            setVisible(false);
            setEditModalVisible(false);
        }
    }
    return (
        <View style={CommonStyles.container}>
            {visible && <Loader state={visible} />}
            <AddCategoryScreen
                categoryName={categoryName}
                setCategoryName={setCategoryName}
                onPressSave={onPressSave}
                editDeleteType={editDeleteType}
                getCategoryList={getCategoryList}
                _renderCategory={_renderCategory}
                editModalVisible={editModalVisible}
                setEditModalVisible={setEditModalVisible}

                editCategoryLabel={editCategoryLabel}
                setEditCategoryLabel={setEditCategoryLabel}
                _handleEditCategories={_handleEditCategories}

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
export default AddCategory;