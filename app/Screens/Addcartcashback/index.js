import React, { useState } from 'react';
import Addcartcashback from './components/Addcartcashback';
const AddcartcashbackView = () => {
    const [CardNumber, setCardNumber] = useState('');
    const [CVVNumber, setCVVNumber] = useState('');
    const [Expiration, setExpiration] = useState('');
    const [ZipNumber, setZipNumber] = useState('');

    return (
        <Addcartcashback
            CardNumber={CardNumber}
            CVVNumber={CVVNumber}
            Expiration={Expiration}
            ZipNumber={ZipNumber}
            
            setCardNumber={setCardNumber}
            setCVVNumber={setCVVNumber}
            setExpiration={setExpiration}
            setZipNumber={setZipNumber}
        />
    )
}
export default AddcartcashbackView;