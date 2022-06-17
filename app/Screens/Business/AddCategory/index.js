import React, { useState } from 'react';
import { View } from 'react-native';
import AddCategoryScreen from './components/AddCategoryScreen';
import CommonStyles from '../../../Utils/CommonStyles';
import {
    apiCall, setDefaultHeader
} from '../../../Utils/httpClient';
import ENDPOINTS from '../../../Utils/apiEndPoints';
import Loader from '../../../Utils/Loader';
import Error from '../../../Components/Modal/error';
import Success from '../../../Components/Modal/success';
const AddCategory = ({ navigation }) => {
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false)

    const [categoryName, setCategoryName] = useState('')
    const onPressSave = async () => {
        const valid = validationFrom();
        if (valid) {
            setVisible(true)
            try {
                const params = {
                    'category_name': categoryName,
                    business_type: 1
                }
                const { data } = await apiCall
                    ('POST', ENDPOINTS.ADD_CATEGORY, params);
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











    return (
        <View style={CommonStyles.container}>
            {visible && <Loader state={visible} />}
            <AddCategoryScreen
                categoryName={categoryName}
                setCategoryName={setCategoryName}
                onPressSave={onPressSave}
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