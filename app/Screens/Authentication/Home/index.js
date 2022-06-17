import React from 'react';
import HomeScreen from './components/HomeScreen';
const HomeView = ({ navigation }) => {
    const onPressLogin = () => {
        navigation.navigate('Login')
    }
    const onPressSignUp = () => {
        navigation.navigate('SignUp')
    }
    const onPressCreateBusiness = () => {
        // navigation.navigate('GetStarted')
        navigation.navigate('BusinessSignUp')
    }
    return (
        <HomeScreen
            onPressSignUp={onPressSignUp}
            onPressLogin={onPressLogin}
            onPressCreateBusiness={onPressCreateBusiness}
        />
    )
}
export default HomeView;