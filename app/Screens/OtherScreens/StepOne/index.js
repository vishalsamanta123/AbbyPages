import React from 'react';
import StepOneScreen from './components/StepOneScreen';

const StepOne = ({ navigation, route }) => {
    const onPressStepSecond = () => {
        if (route.params) {
            const { serviceDetail } = route.params;
            navigation.navigate('StepSecond', { serviceDetail: serviceDetail });
        };
    };
    return (
        <StepOneScreen
            onPressStepSecond={onPressStepSecond}
        />
    )
}
export default StepOne;