import React, { useState } from 'react';
import CashBackScreen from './components/CashBackScreen';
const CashBackView = ({ navigation }) => {
    const onPressSignup = () => {
    
    }
    return (
        <CashBackScreen
            onPressSignup={onPressSignup}
        />
    )
}
export default CashBackView;