import React ,{useState}from 'react';
import StepFourthScreen from './components/StepFourthScreen';

const StepFourth =({navigation}) => {
    const [ZipCode, setZipCode] = useState('');

    const onPresstofifthScreen = () => {
        navigation.navigate('StepFifth')
    }
    return(
        <StepFourthScreen
        ZipCode={ZipCode}
        setZipCode={setZipCode}
        onPresstofifthScreen={onPresstofifthScreen}
        />
    )
}
export default  StepFourth;