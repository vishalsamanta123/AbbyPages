import React, { useState, Fragment, useContext } from 'react';
import Budgets from './components/Budgets';
import { UserContext, AuthContext } from '../../../Utils/UserContext';
import AsyncStorage from '@react-native-community/async-storage';

const BudgetsView = ({ navigation }) => {
    const [textOptn, setTextOptn] = useState(false)
    const [Dollar15Optn, setDollar15Optn] = useState(false)
    const [Dollar25Optn, setDollar25Optn] = useState(false)
    const [DollarQualified, setDollarQualified] = useState(false)
    const [UpgradePackage, setUpgradePackage] = useState(false)
    const { signIn } = React.useContext(AuthContext);
    const onPressTextOptn = () => {
        setTextOptn(!textOptn)
    }
    const onPress15Dollar = () => {
        setDollar15Optn(!Dollar15Optn)
    }
    const onPress25Dollar = () => {
        setDollar25Optn(!Dollar25Optn)
    }
    const onPressQualified = () => {
        setDollarQualified(!DollarQualified)
    }
    const onPressUpgrade = () => {
        setUpgradePackage(!UpgradePackage)
    }
    const onPressCOntinue = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        userToken == '01' ?
            navigation.navigate('BusinessHome')
            :
            signIn()
            navigation.navigate('Login')
    }
    return (
        <Budgets
            onPressCOntinue={onPressCOntinue}
            onPressTextOptn={onPressTextOptn}
            onPress15Dollar={onPress15Dollar}
            onPress25Dollar={onPress25Dollar}
            onPressQualified={onPressQualified}
            onPressUpgrade={onPressUpgrade}
            textOptn={textOptn}
            Dollar15Optn={Dollar15Optn}
            Dollar25Optn={Dollar25Optn}
            DollarQualified={DollarQualified}
            UpgradePackage={UpgradePackage}
        />
    )
}
export default BudgetsView;