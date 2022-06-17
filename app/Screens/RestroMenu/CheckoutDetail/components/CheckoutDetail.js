import React from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    Image
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import styles from './styles';
import Input from '../../../../Components/Input';
import Header from '../../../../Components/Header';
import Button from '../../../../Components/Button';
import CommonStyles from '../../../../Utils/CommonStyles';
import { WHITE_COLOR_CODE, BLACK_COLOR_CODE } from '../../../../Utils/Constant';
import { TouchableOpacity } from 'react-native-gesture-handler';
const CheckoutDetail = (props) => {
    const initialRegion = {
        latitude: props.location.latitude ? parseInt(props.location.latitude) : 22.724480,
        longitude: props.location.longitude ? parseInt(props.location.longitude) : 75.889267,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    };
    const coordinate = {
        "latitude": props.location.latitude && props.location.latitude ? parseInt(props.location.latitude) : 22.724480,
        "longitude": props.location.longitude && props.location.longitude ? parseInt(props.location.longitude) : 75.889267,
    };

    return (
        <KeyboardAvoidingView style={[CommonStyles.container]}>
            <Header
                HeaderText='Checkout'
                RightImg={null}
            />
            <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
                <ScrollView>
                    <View style={[styles.CheckOutView, { alignItems: 'center' }]}>
                        <Image source={require('../../../../Assets/checkout_user_icon.png')} />
                        <Text style={styles.CheckoutText}>Checkout</Text>
                    </View>
                    <Input
                        onChangeText={(FirstName) => props.setLocalUserData({
                            ...props.localUserData,
                            first_name: FirstName
                        })}
                        value={props.localUserData &&
                            props.localUserData.first_name &&
                            props.localUserData.first_name}
                        secureTextEntry={false}
                        placeholder="First Name"
                        InputType="withScroll"
                    />
                    <Input
                        onChangeText={(last_name) => props.setLocalUserData({
                            ...props.localUserData,
                            last_name: last_name
                        })}
                        value={props.localUserData && props.localUserData.last_name && props.localUserData.last_name}
                        secureTextEntry={false}
                        placeholder="Last Name"
                        InputType="withScroll"
                    />
                    <Input
                        onChangeText={(email) => props.setLocalUserData({
                            ...props.localUserData,
                            email: email
                        })}
                        value={props.localUserData && props.localUserData.email && props.localUserData.email}
                        secureTextEntry={false}
                        placeholder="Email Address"
                        InputType="withScroll"
                    />
                    <Input
                        onChangeText={(mobile) => props.setLocalUserData({
                            ...props.localUserData,
                            mobile: mobile
                        })}
                        value={props.localUserData && props.localUserData.mobile && props.localUserData.mobile}
                        secureTextEntry={false}
                        placeholder="Phone Number"
                        InputType="withScroll"
                    />
                    <Input
                        onChangeText={(order_description) => props.setLocalUserData({
                            ...props.localUserData,
                            order_description: order_description
                        })}
                        value={props.localUserData && props.localUserData.order_description && props.localUserData.order_description}
                        secureTextEntry={false}
                        placeholder="Description"
                        InputType="withScroll"
                        multiline={true}
                    />
                    <View style={styles.ParaViewStyle}>
                        <Text style={styles.ParaViewText}>
                            You'll receive text about your order.
                            Contact info will be sent to Grubhub for order fulfillment.
                        </Text>
                    </View>
                    <View style={[styles.CheckOutView, { alignItems: 'center' }]}>
                        <Image source={require('../../../../Assets/checkout_payment_icon.png')} />
                        <Text style={styles.TakeOutText}>Payment-Method</Text>
                        {/* <Text style={styles.CheckoutText}>Payment-Method</Text> */}
                    </View>
                    <View style={{
                        flexDirection: "row", justifyContent: "center",
                        alignItems: "center", paddingVertical: 10
                    }}>
                        <TouchableOpacity
                            onPress={() => props.onPressPaymentMethod()}
                            style={[styles.CheckOutView, { paddingTop: 5 }]}>
                            <Image
                                style={[{ marginRight: 5 }]}
                                source={
                                    props.paymentMethod ?
                                        require('../../../../Assets/checked_squared_icon_small.png')
                                        :
                                        require('../../../../Assets/unchecked_squared_icon_small.png')
                                } />
                            <Text>Online</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.onPressPaymentMethod()}
                            style={[styles.CheckOutView, { paddingTop: 5 }]}>
                            <Image
                                style={[{ marginRight: 5 }]}
                                source={
                                    !props.paymentMethod ?
                                        require('../../../../Assets/checked_squared_icon_small.png')
                                        :
                                        require('../../../../Assets/unchecked_squared_icon_small.png')
                                } />
                            <Text>Cash On Delievery</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        props.paymentMethod && props.paymentMethod &&
                        <View>
                            <View>
                                <Input
                                    onChangeText={(AddCard) => props.setAddCard(AddCard)}
                                    value={props.AddCard}
                                    secureTextEntry={false}
                                    placeholder="Phone Number"
                                    InputType="withScroll"
                                />
                                <Image style={styles.ArrowDownImge} source={require('../../../../Assets/dropdown_icon.png')} />
                            </View>
                            <Input
                                onChangeText={(CardNumber) => props.setCardNumber(CardNumber)}
                                value={props.CardNumber}
                                secureTextEntry={false}
                                placeholder="Card Number"
                                InputType="withScroll"
                            />
                            <Input
                                onChangeText={(CardExpiry) => props.setCardExpiry(CardExpiry)}
                                value={props.CardExpiry}
                                secureTextEntry={false}
                                placeholder="Card Expiry"
                                InputType="withScroll"
                            />
                            <Input
                                onChangeText={(CVVNumber) => props.setCVVNumber(CVVNumber)}
                                value={props.CVVNumber}
                                secureTextEntry={false}
                                placeholder="CVV"
                                InputType="withScroll"
                            />
                            <Input
                                onChangeText={(ZipCode) => props.setZipCode(ZipCode)}
                                value={props.ZipCode}
                                secureTextEntry={false}
                                placeholder="Zip Code"
                                InputType="withScroll"
                            />
                        </View>

                    }
                    {
                        props.delivery_type == 1 &&
                        <>
                            <View style={[styles.CheckOutView, { paddingLeft: 15 }]}>
                                <Image
                                    style={{ top: 5, height: 32, width: 32 }}
                                    tintColor={BLACK_COLOR_CODE}
                                    resizeMode='contain'
                                    source={require('../../../../Assets/Location_icon_small.png')} />
                                <View style={{ justifyContent: "center" }}>
                                    <Text style={[styles.TakeOutText, { paddingLeft: 10 }]}>Order-Delievery Address</Text>
                                </View>
                            </View>
                            <View style={[styles.CheckOutView, { paddingBottom: 12 }]}>
                                <View style={{ top: 5, height: 32, width: 32 }} />
                                <View style={{ justifyContent: "center" }}>
                                    <Text style={[styles.AddressText, { width: 280 }]}>{props.location.location}</Text>
                                </View>
                            </View>
                            <MapView
                                showsUserLocation
                                style={{ width: '100%', height: 190 }}
                                provider={PROVIDER_GOOGLE}
                                initialRegion={initialRegion}
                            >
                                <Marker
                                    coordinate={coordinate}
                                // image={require('../../../../Assets/login_logo.png')}
                                // title={props.restroDetail.business_name}
                                // description={marker.description}
                                >
                                    <Image
                                        source={require('../../../../Assets/abby_pages_map_icon.png')}
                                        style={{ height: 50, width: 50 }}
                                        resizeMode='contain'
                                        resizeMethod='auto'
                                    />
                                </Marker>
                            </MapView>
                        </>
                    }
                    <View style={[styles.CheckOutView, { paddingLeft: 15, top: 5, marginTop: 10 }]}>
                        <Image
                            resizeMode='contain'
                            source={require('../../../../Assets/checkout_scheduled_icon.png')} />
                        <View style={{ justifyContent: "center" }}>
                            <Text style={[styles.TakeOutText, { paddingLeft: 10 }]}>Scheduled</Text>
                        </View>
                    </View>
                    <View style={[styles.CheckOutView, { paddingBottom: 12 }]}>
                        <View style={{ top: 5, height: 32, width: 32 }} />
                        <View style={{ justifyContent: "center" }}>
                            <Text style={[styles.AddressText, { width: 280, paddingLeft: 0 }]}>
                                {props.dateTime}
                            </Text>
                        </View>
                    </View>
                    <Button
                        style={{ marginBottom: 10 }}
                        buttonText='Continue'
                        onPress={() => props.onPressContinue()}
                    />
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}
export default CheckoutDetail
