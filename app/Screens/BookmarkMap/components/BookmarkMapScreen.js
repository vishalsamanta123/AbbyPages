import React from 'react';
import {
    View,
    StatusBar,
    KeyboardAvoidingView,
    ImageBackground
} from 'react-native';
import Header from '../../../Components/Header';
import CommonStyles from '../../../Utils/CommonStyles';
const BookmarkMapScreen = (props) => {
    return (
        <KeyboardAvoidingView style={[CommonStyles.container]}>
            <StatusBar
                translucent={true}
                backgroundColor='transparent'
                barStyle='dark-content'
            />
            <Header
                RightImg={require('../../../Assets/map_list_icon.png')}
                HeaderText={"Bookmark"}
                onPress={() => props.onPressBack()}
            />
            <View style={[CommonStyles.body]}>
                <ImageBackground style={{ flex: 1 }} source={require('../../../Assets/extraImages/google2x.png')} />
            </View>
        </KeyboardAvoidingView>
    )
}
export default BookmarkMapScreen
