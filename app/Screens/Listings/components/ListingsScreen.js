import React from 'react';
import {
    View,
    FlatList,
    StatusBar,
    KeyboardAvoidingView
} from 'react-native';
import Header from '../../../Components/Header';
import CommonStyles from '../../../Utils/CommonStyles';
const ListingsScreen = (props) => {
    return (
        <KeyboardAvoidingView style={[CommonStyles.container]}>
            <Header
                RightImg={require('../../../Assets/map_list_icon.png')}
                HeaderText={''}
                onPress={() => props.onPressMap()}
                textInput={true}
                placeholder={"Tea Rooms Current..."}
                onChangeText={(searchKey) => props.searchResto(searchKey)}
                type="Map"
            />
            <View style={[CommonStyles.body]}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={props.restroList}
                    renderItem={({ item, index }) => props._handleSerivces(item, index)
                    }
                />
            </View>
        </KeyboardAvoidingView>
    )
}
export default ListingsScreen
