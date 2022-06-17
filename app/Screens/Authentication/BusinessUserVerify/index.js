import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import BusinessUserVerifyScreen from './components/BusinessUserVerify';
import AsyncStorage from '@react-native-community/async-storage';
import { apiCall } from '../../../Utils/httpClient';
import ENDPOINTS from '../../../Utils/apiEndPoints';
import Loader from '../../../Utils/Loader';
import { UserContext, AuthContext } from '../../../Utils/UserContext';
import Error from '../../../Components/Modal/error';
import Success from '../../../Components/Modal/success';
const BusinessUserVerify = ({ route, navigation }) => {
    const emails = route.params.email;
     const [visible, setVisible] = useState(false);
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [userData, setUserData] = useContext(UserContext);
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState(emails);
    const { signIn } = React.useContext(AuthContext);
    useEffect(() => {
    
    }, [])
    const _handleOtpVerify = async () => {
        // navigation.navigate('DashBoard')
        setVisible(true)
        if (otp !== "") {
            const params = {
                'otp': otp
            }
            try {
                const { data } = await apiCall
                    ('POST', ENDPOINTS.USER_VERIFY, params);
                if (data.status === 200) {
                    await AsyncStorage.setItem('localuserdata', JSON.stringify(data))
                    setVisible(false)
                    console.log(data)
                    setUserData(data.data)
                    navigation.navigate('Goals')
                    // signIn()
                }
                else {
                    setVisible(false)
                    setErrorMessage(data.message);
                    setVisibleErr(true)
                }
            } catch (err) {
                setErrorMessage(err);
                setVisibleErr(true)
                setVisible(false)
            }
        } else {
            setErrorMessage('please enter otp');
            setVisibleErr(true)
            setVisible(false)
        }

    }
    const otpresend = async () => {
        setVisible(true)
        const params = {
            'email': email,
        }
        try {
            const { data } = await apiCall
                ('POST', ENDPOINTS.RESENT_OTP, params);
            if (data.status === 200) {
                setVisible(false)
                setSuccessMessage(data.message);
                setVisibleSuccess(true)
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
    function Navtoback() {
        navigation.goBack(null)
    }
    return (
        <View style={{ flex: 1 }}>
            {/* {console.log('navigation ==>', email)} */}
            {visible && <Loader state={visible} />}
            <BusinessUserVerifyScreen
                // otp={otp}
                Navtoback={Navtoback}
                otpresend={otpresend}
                handleOtp={(val) => setOtp(val)}
                _handleOtpVerify={(data) => _handleOtpVerify(data)}
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
export default BusinessUserVerify;
