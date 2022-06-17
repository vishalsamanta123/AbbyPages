import React, { useState, useContext } from 'react';
import BusinessChangePassword from './components/BusinessChangePassword';
import {
    apiCall, setDefaultHeader
} from '../../../Utils/httpClient';
import ENDPOINTS from '../../../Utils/apiEndPoints';
import Loader from '../../../Utils/Loader';
import { View } from 'react-native';
import Error from '../../../Components/Modal/error';
import Success from '../../../Components/Modal/success';
const BusinessChangePasswordView = ({ navigation }) => {
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    async function submitbtn() {
        const valid = validationFrom();
        if (valid) {
            setVisible(true)
            const params = {
                old_password: oldPassword,
                new_password: newPassword
            }
            try {
                const { data } = await apiCall
                    ('POST', ENDPOINTS.BUSINESS_CHANGE_PASSWORD, params);
                if (data.status === 200) {
                    setSuccessMessage('password change successfully');
                    setVisibleSuccess(true)
                    setVisible(false)
                }
                else {
                    setVisible(false)
                    setErrorMessage(data.message);
                    setVisibleErr(true)
                }
            }
            catch (e) {
                setVisible(false)
                setErrorMessage(e);
                setVisibleErr(true)
            }
        }
    }

    function validationFrom() {
        if (oldPassword == "") {
            setErrorMessage('Please enter old password');
            setVisibleErr(true)
            return false;
        }
        if (newPassword == '') {
            setErrorMessage('Please enter new password');
            setVisibleErr(true)
            return false;
        } if (newPassword.length <= 5) {
            setErrorMessage("please enter new password min 6 characters");
            setVisibleErr(true)
            return false;
        };
        return true;
    }




    function goback() {
        navigation.goBack(null)
    }
    return (
        <View style={{ flex: 1 }}>
            {visible && <Loader state={visible} />}
            <BusinessChangePassword
                goback={goback}
                submitbtn={submitbtn}
                setOldPassword={setOldPassword}
                oldPassword={oldPassword}
                setNewPassword={setNewPassword}
                newPassword={newPassword}
            />
            <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
            <Success
                message={successMessage}
                visible={visibleSuccess}
                closeModel={() => navigation.navigate('BusinessHome', setVisibleSuccess(false))}
            />
        </View>
    )
}
export default BusinessChangePasswordView;
