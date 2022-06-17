import React from 'react';
import {
    View,
    FlatList,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import CommonStyles from '../../../../Utils/CommonStyles';
import styles from './styles';
import Header from '../../../../Components/Header';
import Button from '../../../../Components/Button';
import Dialog, { DialogContent, SlideAnimation, } from 'react-native-popup-dialog';
import { FONT_FAMILY_REGULAR, YELLOW_COLOR_CODE } from '../../../../Utils/Constant';
const CheckOutScreen = (props) => {
    const screenlowerdata = (item) => {
        return (
            <View style={[{ flex: 1, paddingTop: 12, paddingLeft: 20, paddingRight: 20 }]}>
                <View>
                    <Text style={[styles.hdngtxt, { fontSize: 18, opacity: 0.9 }]}>
                        Delievery Address
                    </Text>
                    {/* <Button
                        buttonLabelStyle
                        style={{ marginTop: 10, marginBottom: 10 }}
                        buttonText='Add Address'
                        onPress={() => props.onPressAddAddress()}
                    /> */}
                    <Text style={[styles.hdngtxt, { paddingVertical: 5, fontSize: 15, opacity: 0.9 }]}>
                        {props.location.location}
                    </Text>
                    {props.location.location ?
                        <TouchableOpacity
                            onPress={() => props.setAddressListVisible(true)}
                            style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={[{ fontSize: 12, color: YELLOW_COLOR_CODE, fontFamily: FONT_FAMILY_REGULAR }]}>
                                Change Address
                            </Text>
                            <Image
                                style={{ marginLeft: 4, height: 11, width: 11 }}
                                resizeMode='contain'
                                source={require('../../../../Assets/edit_pencil_icon.png')}
                            />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            onPress={() => props.onPressAddAddress(true)}
                            style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={[{ fontSize: 12, color: YELLOW_COLOR_CODE, fontFamily: FONT_FAMILY_REGULAR }]}>
                                Add Address
                            </Text>
                            <Image
                                style={{ marginLeft: 4, height: 11, width: 11 }}
                                resizeMode='contain'
                                source={require('../../../../Assets/edit_pencil_icon.png')}
                            />
                        </TouchableOpacity>
                    }
                    <View style={{
                        width: '100%',
                        height: 1,
                        backgroundColor: "lightgrey",
                        marginTop: 5,
                        marginBottom: 5
                    }} />
                    <Text style={[styles.hdngtxt, { fontSize: 18, opacity: 0.9 }]}>
                        Payment Method
                    </Text>
                    <View style={[styles.basiccon, {
                        paddingBottom: 8, paddingTop: 8
                    }]}>
                        <TouchableOpacity
                            // onPress={() => props.setOrderPaymentType(!props.order_payment_type)}
                            style={[styles.basiccon, {}]}>
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={
                                    props.order_payment_type ?
                                        require('../../../../Assets/radio_circled_checked.png')
                                        :
                                        require('../../../../Assets/radio_circled_unchecked.png')
                                }
                            />
                            <Text style={[styles.hdngtxt, { marginLeft: 10, fontSize: 18, opacity: 0.9, width: null }]}>
                                CashOnDelievery
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            // onPress={() => props.setOrderPaymentType(!props.order_payment_type)}
                            style={[styles.basiccon, { marginLeft: 10 }]}>
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={
                                    !props.order_payment_type ?
                                        require('../../../../Assets/radio_circled_checked.png')
                                        :
                                        require('../../../../Assets/radio_circled_unchecked.png')
                                }
                            />
                            <Text style={[styles.hdngtxt, { marginLeft: 10, fontSize: 18, opacity: 0.9, width: null }]}>
                                Pay Online
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width: '100%',
                        height: 1,
                        backgroundColor: "lightgrey",
                        marginTop: 5,
                        marginBottom: 5
                    }} />
                </View>
                <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
                    <Text style={[styles.hdngtxt, { opacity: 0.8, fontSize: 16, width: null }]}>
                        Original Price
                            </Text>
                    <Text style={[styles.hdngtxt, { opacity: 0.8, fontSize: 16, width: null }]}>
                        $ {props.finalAmount}
                    </Text>
                </View>
                <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
                    <Text style={[styles.hdngtxt, { opacity: 0.8, fontSize: 16, width: null }]}>
                        Offer
                            </Text>
                    <Text style={[styles.hdngtxt, { opacity: 0.8, fontSize: 16, width: null }]}>
                        0
                            </Text>
                </View>
                <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
                    <Text style={[styles.hdngtxt, { opacity: 0.8, fontSize: 16, width: null }]}>
                        Promocode
                            </Text>
                    <Text style={[styles.hdngtxt, { opacity: 0.8, fontSize: 16, width: null }]}>
                        0
                            </Text>
                </View>
                <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
                    <Text style={[styles.hdngtxt, { opacity: 0.8, fontSize: 16, width: null }]}>
                        Current Total Price
                               </Text>
                    <Text style={[styles.hdngtxt, { opacity: 0.8, fontSize: 16, width: null }]}>
                        $ {props.finalAmount}
                    </Text>
                </View>
                <Button
                    buttonLabelStyle
                    style={{ marginTop: 10, marginBottom: 10 }}
                    buttonText='Continue'
                    onPress={() => props.onPressContinue()}
                />
            </View>
        );
    };
    const _renderAddressList = (item) => {
        return (
            <TouchableOpacity
                onPress={() => props.setLocation(item, props.setAddressListVisible(false))}
                style={styles.dataCon}>
                <Text style={{ fontFamily: FONT_FAMILY_REGULAR, color: '#3a3838' }}>
                    {item.location}
                </Text>
            </TouchableOpacity>
        );
    };
    const _renderCartItemList = (item) => {
        return (
            <View style={styles.dataCon}>
                <View style={{ flex: 2, justifyContent: "center" }}>
                    <Image
                        resizeMode='stretch'
                        resizeMethod='auto'
                        style={styles.posterimg}
                        source={{ uri: item.product_image }}
                    />
                </View>
                <View style={{ flex: 4 }}>
                    <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
                        <Text style={[styles.hdngtxt, { width: null, fontSize: 15 }]}>
                            {item.product_name}
                        </Text>
                        <TouchableOpacity
                            onPress={() => props.onPressDeleteItem(item)}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../../../../Assets/cart_delete_icon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.text, { fontSize: 12 }]}>
                        {item.product_description}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <View style={[styles.basiccon, { flex: 1 }]}>
                            <Text style={[styles.hdngtxt, { width: null, fontSize: 15 }]}>
                                {'Qty : ' + item.quantity}
                            </Text>
                        </View>
                        <View
                            style={{ flex: 1, marginRight: 10 }}>
                            <Text style={[styles.hdngtxt, { width: null, fontSize: 15 }]}>
                                {'$ ' + item.total_product_price}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };
    return (
        <View style={CommonStyles.container}>
            <Header
                HeaderText='Confirm Order'
                headerSecondText='confirm order with the following details'
                RightImg={require('../../../../Assets/trash_icon_header.png')}
                onPress={() => props.onPressDeleteCart()}
            />
            <View style={CommonStyles.body}>
                <FlatList
                    data={props.shoppingCartData}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={() => screenlowerdata()}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => _renderCartItemList(item, index)}
                />
            </View>
            <Dialog
                visible={props.addressListVisible}
                width={1}
                useNativeDriver={true}
                dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
                onTouchOutside={() => {
                    props.setAddressListVisible(false)
                }}
            >
                <DialogContent>
                    <View style={{ paddingTop: 10 }}>
                        <FlatList
                            data={props.locationList}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => _renderAddressList(item, index)}
                            ListFooterComponent={<View>
                                <Button
                                    buttonLabelStyle
                                    style={{ marginTop: 10, height: 40, width: 160 }}
                                    buttonText='Add Address'
                                    onPress={() => props.onPressAddAddress()}
                                />
                            </View>}
                        />
                    </View>
                </DialogContent>
            </Dialog>
        </View>
    );
};
export default CheckOutScreen;