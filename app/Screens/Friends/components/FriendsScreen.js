import React from 'react';
import {
    View,
    Text,
    StatusBar,
    KeyboardAvoidingView,
    Image,
    ScrollView
} from 'react-native';
import styles from './styles';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import Header from '../../../Components/Header';
import CommonStyles from '../../../Utils/CommonStyles';
import { WHITE_COLOR_CODE } from '../../../Utils/Constant';
const FriendsScreen = (props) => {
    return (
        <KeyboardAvoidingView style={[CommonStyles.container]}>
            <StatusBar
                translucent={true}
                backgroundColor='transparent'
                barStyle='dark-content'
            />
            <Header
                RightImg={null}
                leftImg={require('../../../Assets/hamburger_icon.png')}
                HeaderText='Friends'
                type="Drawer"
            />
            <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
                <View style={styles.MainImgeStyle}>
                    <Image source={require('../../../Assets/friends_info_graphic.png')} />
                </View>
                <View style={{ paddingTop: 10 }}>
                    <View style={styles.ParaViewText}>
                        <Text style={styles.ParaMainText}>
                            Did you know you can connect with friends to
                            discover the business they love and show off your own
                            great taste? Welcome to the clubhouse, where you can
                            view your friends, profile, read their reviews, and manage
                            your friends list.
                    </Text>
                    </View>
                    <Button buttonText="Invite Friends" style={{ marginTop: 10 }} />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
export default FriendsScreen
