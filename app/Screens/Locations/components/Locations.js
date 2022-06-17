import React from 'react';
import {
    View,
    Text,
    StatusBar,
    KeyboardAvoidingView,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import styles from './styles';
import Header from '../../../Components/Header';
import CommonStyles from '../../../Utils/CommonStyles';
import { WHITE_COLOR_CODE } from '../../../Utils/Constant';
const Locations = (props) => {
    return (
        <KeyboardAvoidingView style={[CommonStyles.container]}>
            <StatusBar
                translucent={true}
                backgroundColor='transparent'
                barStyle='dark-content'
            />
            <Header
                RightImg={null}
                HeaderText={'Locations'}
            />
            <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
                <View style={styles.EmailContainer}>
                    <View style={styles.FlexViewContain}>
                        <View style={{ flex: 5 }}>
                            <Text style={styles.EmailNotifyTxt}>Your Saved Locations</Text>
                        </View>
                        <TouchableOpacity onPress={() => props.onPressAddLocation()} style={styles.AddLocationView}>
                            <Image source={require('../../../Assets/add_location_icon.png')} />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={props.SavedLocations}
                        renderItem={({ item, index }) => props._handleSavedLocation(item, index)}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
export default Locations
