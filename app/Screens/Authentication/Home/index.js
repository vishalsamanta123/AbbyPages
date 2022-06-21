import React from 'react';
import HomeScreen from './components/HomeScreen';
const HomeView = ({ navigation }) => {
    const onPressLogin = () => {
        navigation.navigate('Login')
    }
    const onPressCreateBusiness = () => {
        navigation.navigate('BusinessSignUp')
    }
    const onPressSignUp = () => {
        navigation.navigate('SignUp')
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