import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Header from '../../../../Components/Header'
import Button from '../../../../Components/Button'
import CommonStyles from '../../../../Utils/CommonStyles'
import styles from './styles'
import { WHITE_COLOR_CODE } from '../../../../Utils/Constant';
import { ScrollView } from 'react-native-gesture-handler';
const MyRestaurantItemView = (props) => {
    return (
        <View style={CommonStyles.container}>
            <Header
                HeaderText='My Restaurants'
                RightImg={null}
            />
            <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
                <View style={{ flexDirection: 'row', padding: 15, justifyContent: 'space-between' }}>
                    <Text style={styles.MainHeadText}>Categories</Text>
                    <TouchableOpacity onPress={() => props.onPressAddCategory()} >
                        <Image style={{ width: 35, height: 35 }} source={require('../../../../Assets/qty_minus_icon3.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 60 }}>
                    {props.getItemList.length >= 0 ?
                        <FlatList
                            data={props.getCategoryList}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => props._renderCategory(item, index)}
                        />
                        :
                        <View style={{ height: 60, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Thare is no Category data</Text>
                        </View>
                    }
                </View>
                <ScrollView>
                    {props.getCategoryList ?
                        <View style={styles.MainContainer}>
                            <View style={{ paddingBottom: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.MainHeadText}>Items</Text>
                                <TouchableOpacity onPress={() => props.onPressItem()}>
                                    <Image style={{ width: 35, height: 35 }} source={require('../../../../Assets/qty_minus_icon3.png')} />
                                </TouchableOpacity>
                            </View>
                            {props.getItemList.length > 0 ?
                                <FlatList
                                    data={props.getItemList}
                                    keyExtractor={(item, index) => index}
                                    renderItem={({ item, index }) => props._handleSandwichDish(item, index)}
                                />
                                :
                                <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18 }}>Thare is no item data </Text>
                                </View>
                            }
                        </View>
                        :
                        null}
                </ScrollView>
            </View>
        </View>
    )
}
export default MyRestaurantItemView;