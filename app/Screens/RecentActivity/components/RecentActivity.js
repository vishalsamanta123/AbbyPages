import React from 'react';
import {
    View,
    StatusBar,
    KeyboardAvoidingView,
    FlatList
} from 'react-native';
import Header from '../../../Components/Header';
import CommonStyles from '../../../Utils/CommonStyles';
const RecentActivity = (props) => {
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
                HeaderText='Recent Activity'
                type="Drawer"
            />
            <View style={[CommonStyles.body]}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={props.RecentActivityData}
                    renderItem={({ item, index }) => props._handleRecentActivityData(item, index)
                    }
                />
            </View>
        </KeyboardAvoidingView>
    )
}
export default RecentActivity
