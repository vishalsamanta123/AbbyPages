import React ,{useState}from 'react';
import StepEightScreen from './component/StepEightScreen';

const StepEight =({navigation}) => {
    const [ZipCode, setZipCode] = useState('');
    const onPressServiceprovdet = () => {
        navigation.navigate('ServiceProviderDetails')
    }
    return(
        <StepEightScreen
        ZipCode={ZipCode}
        setZipCode={setZipCode}
        onPressServiceprovdet={onPressServiceprovdet}
        />
    )
}
export default StepEight;