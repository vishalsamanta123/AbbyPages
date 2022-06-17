import React from 'react';
import { View } from 'react-native';
import OfferScreen from './components/OfferScreen';
import CommonStyles from '../../Utils/CommonStyles';
const offer = () => {
    return (
        <View style={CommonStyles.container}>
            <OfferScreen />
        </View>
    )
}
export default offer;