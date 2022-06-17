import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Header from '../../../../Components/Header'
import Button from '../../../../Components/Button'
import CommonStyles from '../../../../Utils/CommonStyles'
import styles from './styles'
import { YELLOW_COLOR_CODE, FONT_FAMILY_REGULAR, WHITE_COLOR_CODE } from '../../../../Utils/Constant';
import { ScrollView } from 'react-native-gesture-handler';
const MyProductListView = (props) => {
    return (
        <View style={CommonStyles.container}>
            <Header
                HeaderText='My Product'
                RightImg={null}
                leftImg={require('../../../../Assets/hamburger_icon.png')}
                type="Drawer"
            />
            <View style={[CommonStyles.body]}>
                <ScrollView>
                    <View style={styles.MainContainer}>
                        <View style={{ paddingBottom: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.MainHeadText}>Product</Text>
                            <TouchableOpacity onPress={() => props.onPressItem()}>
                                <Image style={{ width: 35, height: 35 }} source={require('../../../../Assets/qty_minus_icon3.png')} />
                            </TouchableOpacity>
                        </View>
                        {props.productListData.length > 0 ?
                            <FlatList
                                data={props.productListData}
                                keyExtractor={(item, index) => index}
                                renderItem={({ item, index }) => props._handleSandwichDish(item, index)}
                            />
                            :
                            <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18 }}>Thare is no item data </Text>
                            </View>
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
export default MyProductListView;