import React from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    ScrollView
} from 'react-native';
import styles from './styles';
import Button from '../../../Components/Button';
import Header from '../../../Components/Header';
import CommonStyles from '../../../Utils/CommonStyles';
const CashBackScreen = (props) => {
    return (
        <View style={[CommonStyles.container]}>
            <StatusBar
                translucent={true}
                backgroundColor='transparent'
                barStyle='dark-content' />
            <Header
                RightImg={null}
                HeaderText={'Cashback'}
            />
            <View style={[CommonStyles.body]}>
                <ScrollView>
                    <View style={[styles.BoxContainer, { marginTop: 10 }]}>
                        <Image source={require('../../../Assets/free_signup_icon.png')} />
                        <Text style={styles.FreeSignUpText}>Free SignUp</Text>
                        <Text style={styles.BoxTextMain}>Activate your credit or </Text>
                        <Text style={styles.BoxTextMain}>debit cards.</Text>
                    </View>
                    <View style={[styles.BoxContainer, { marginTop: 10 }]}>
                        <Image source={require('../../../Assets/dine_out_icon.png')} />
                        <Text style={styles.FreeSignUpText}>Dine Out</Text>
                        <Text style={styles.BoxTextMain}>Pay with your card at thousands</Text>
                        <Text style={styles.BoxTextMain}>of participating restaurants.</Text>
                    </View>
                    <View style={[styles.BoxContainer, { marginTop: 10 }]}>
                        <Image source={require('../../../Assets/cash_back_icon.png')} />
                        <Text style={styles.FreeSignUpText}>Get Cash Back</Text>
                        <Text style={styles.BoxTextMain}>Get upto 10% credit back to</Text>
                        <Text style={styles.BoxTextMain}>your card's account.</Text>
                    </View>
                    <Button
                        buttonText="Sign Up for Cash Back"
                        onPress={props.onPressSignup}
                        style={{ marginBottom: 10 }}
                    />
                </ScrollView>
            </View>
        </View>
    )
}
export default CashBackScreen
