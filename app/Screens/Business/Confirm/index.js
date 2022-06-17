import React, { useState } from 'react';
import ConfirmScreen from './components/ConfirmScreen';

const Confirm = () => {
    const onPressStart = () => {
        navigation.navigate('Start')
    }
    return(
        <ConfirmScreen
         onPressStart={onPressStart}
        />
    )
}
export default Confirm;