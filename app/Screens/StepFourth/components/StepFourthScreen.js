import React from 'react';
import {
    View,
    Text,
    Image,
    KeyboardAvoidingView
} from 'react-native';
import styles from './styles';
import Button from '../../../Components/Button';
import Header from '../../../Components/Header';
import CommonStyles from '../../../Utils/CommonStyles';
import Input from '../../../Components/Input';
import { WHITE_COLOR_CODE } from '../../../Utils/Constant';

const StepFourthScreen = (props) => {
    return (
        <KeyboardAvoidingView style={[CommonStyles.container]}>
            <Header leftImg={require('../../../Assets/close_window_icon.png')}
                HeaderText="4 of 8"
                RightImg={null}
            />
            <View style={[CommonStyles.body,{backgroundColor:WHITE_COLOR_CODE}]}>
                <View style={styles.maintxtVwe}>
                    <Text style={styles.maintxt}>
                        In Which locations are you
                        looking for professionals ?
                    </Text>
                </View>
                <View style={styles.inputwvwe}>
                    <Input
                        onChangeText={(ZipCode) => props.setZipCode(ZipCode)}
                        value={props.ZipCode}
                        secureTextEntry={false}
                        InputType="withScroll"
                        placeholder="More details"
                    />
                </View>
            </View>
            <View style={styles.footervwe}>
                <View style={styles.boximgvwe}>
                    <View style={styles.imgvwe}>
                        <Image style={{ height: 58, width: 60 }} source={require('../../../Assets/Group1672.png')} />
                    </View>
                </View>
                <View style={styles.lstbtnvwe}>
                    <Button
                        buttonText="Next"
                        style={styles.btnvwe}
                        buttonLabelStyle={styles.startedbtntxt}
                        onPress={props.onPresstofifthScreen}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
export default StepFourthScreen;