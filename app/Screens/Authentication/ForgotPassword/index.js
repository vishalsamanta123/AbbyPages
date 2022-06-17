import React, { useState, useContext } from 'react';
import ForgotPassword from './components/ForgotPassword';
import {
    apiCall, setDefaultHeader
} from '../../../Utils/httpClient';
import ENDPOINTS from '../../../Utils/apiEndPoints';
import Loader from '../../../Utils/Loader';
import { View } from 'react-native';
import Error from '../../../Components/Modal/error';
import Success from '../../../Components/Modal/success';
const ForgotPasswordView = ({ navigation }) => {
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState('')
    async function submitbtn() {
        setVisible(true)
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === true) {
            const params = {
                email: email
            }
            try {
                const { data } = await apiCall
                    ('POST', ENDPOINTS.FORGOT_PASSWORD, params);
                if (data.status === 200) {
                    await setDefaultHeader('token', data.token);
                    setSuccessMessage('We have sent OTP on your email please check it.');
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
        else {
            setVisible(false);
            setErrorMessage("Please Enter Correct Email");
            setVisibleErr(true);
        }
    }
    function goback() {
        navigation.goBack(null)
    }
    return (
        <View style={{ flex: 1 }}>
            {visible && <Loader state={visible} />}
            <ForgotPassword
                goback={goback}
                submitbtn={submitbtn}
                setEmail={setEmail}
                email={email}
            />
            <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
            <Success
                message={successMessage}
                visible={visibleSuccess}
                closeModel={() => navigation.navigate('ForgotPasswordField', { email: email }, setVisibleSuccess(false))}
            />
        </View>
    )
}
export default ForgotPasswordView;
