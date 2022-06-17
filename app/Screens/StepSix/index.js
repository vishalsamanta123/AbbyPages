import React ,{useState}from 'react';
import StepSixScreen from './components/StepSixScreen';

const StepSix =({navigation}) => {
    const [ZipCode, setZipCode] = useState('');
    const onPressStepSeven = () => {
        navigation.navigate('StepSeven')
    }
    return(
        <StepSixScreen
        ZipCode={ZipCode}
        setZipCode={setZipCode}
        onPressStepSeven={onPressStepSeven}
        />
    )
}
export default StepSix;