import React from 'react';
import {
    View,
    Image,
    StatusBar,
    SafeAreaView,
    ScrollView,
    FlatList,
    Text,
    Dimensions,
    KeyboardAvoidingView
} from 'react-native';
import styles from './styles';
import Header from '../../../Components/Header';
import CommonStyles from '../../../Utils/CommonStyles';
import { FONT_FAMILY_REGULAR, YELLOW_COLOR_CODE, FONT_FAMILY_BOLD, GREY_COLOR_CODE, WHITE_COLOR_CODE, LINE_COMMON_COLOR_CODE } from '../../../Utils/Constant';
const { width, height } = Dimensions.get('window');
const RestaurantMenuScreen = (props) => {
    return (
        <KeyboardAvoidingView style={[CommonStyles.container]}>
            <StatusBar
                translucent={true}
                backgroundColor='transparent'
                barStyle='dark-content'
            />
            <Header
                RightImg={null}
                HeaderText={'Restaurant Menu'}
            />
            <View style={[CommonStyles.body]}>
                <ScrollView>
                    <View style={styles.Mainconatiner}>
                        <Text style={styles.HeadingView}>Dashi Stock</Text>
                    </View>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={props.handleDashiStock}
                        renderItem={({ item, index }) => props._handleDashiStock(item, index)
                        }
                    />
                     <View style={styles.Mainconatiner}>
                        <Text style={styles.HeadingView}>Vegetable Selection</Text>
                    </View>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={props.handleDashiStock}
                        renderItem={({ item, index }) => props._handleVegetableSelect(item, index)
                        }
                    />
                     <View style={styles.Mainconatiner}>
                        <Text style={styles.HeadingView}>What's Popular Here?</Text>
                    </View>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={props.handleDashiStock}
                        renderItem={({ item, index }) => props._handlePopular(item, index)
                        }
                    />
                 
                </ScrollView>
            </View>
        </KeyboardAvoidingView >
    )
}
export default RestaurantMenuScreen
