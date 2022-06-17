import React from 'react';
import { View, Text, Image, ScrollView, YellowBox } from 'react-native';
import CommonStyles from '../../../../../Utils/CommonStyles';
import styles from './styles';
import Button from '../../../../../Components/Button';
import Input from '../../../../../Components/Input';
import Header from '../../../../../Components/Header';
import { WHITE_COLOR_CODE, YELLOW_COLOR_CODE, BLACK_COLOR_CODE } from '../../../../../Utils/Constant';
import moment from 'moment'
const TableBookingDetailsScreen = (props) => {
    return (
        <View style={[CommonStyles.container]}>
            <Header
                HeaderText='Table Booking Details'
                RightImg={null}
            />
            <View style={[CommonStyles.body]}>
                <ScrollView>
                    {props.orderData ?
                        <Image style={{ height: 180, width: '100%' }}
                            resizeMode='contain'
                            source={{ uri: props.orderData.logo }}
                        />
                        :
                        null
                    }
                    <View style={CommonStyles.container}>
                        <View style={styles.body}>
                            <Text style={styles.text}>
                                Table Booking Id: {props.orderData ? props.orderData.order_id : null}
                            </Text>
                            <Text style={[styles.MainText, { color: BLACK_COLOR_CODE }]}>
                                Order Type: {props.orderData ? props.orderData.order_booking_type_text : null}
                            </Text>
                            {props.orderData ? props.orderData.booking_details ?
                                <View style={[styles.row, { paddingVertical: 5 }]}>
                                    <View style={[styles.row]}>
                                        <Image
                                            style={{ height: 16, width: 14, marginHorizontal: 4 }}
                                            source={require('../../../../../Assets/calendar_icon.png')}
                                        />
                                        <Text style={styles.text}>
                                            {/* {props.orderData ? moment(props.orderData.booking_details.booking_date).format('MM/DD/YYYY') : null} */}
                                            {props.orderData ? props.orderData.booking_details ? props.orderData.booking_details.booking_date : null : null}
                                        </Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Image
                                            style={{ height: 15, width: 15, marginHorizontal: 10 }}
                                            source={require('../../../../../Assets/clock_icon2.png')}
                                        />
                                        <Text style={[styles.text, { color: YELLOW_COLOR_CODE }]}>
                                            {props.orderData ? props.orderData.booking_details ? props.orderData.booking_details.booking_time : null : null}
                                        </Text>
                                        <Text style={[styles.text, { color: YELLOW_COLOR_CODE, paddingLeft: 5 }]}>
                                            {props.orderData ? props.orderData.order_status == 0 ? 'Pending' : 'Confirm' : null}
                                        </Text>
                                    </View>
                                </View>
                                :
                                null
                                :
                                null
                            }
                            <Text style={[styles.text]}>
                                UserName: {props.orderData ? props.orderData.first_name + ' ' + props.orderData.last_name : null}
                            </Text>
                            <Text style={[styles.text]}>
                                Email: {props.orderData ? props.orderData.email : null}
                            </Text>
                            {
                                props.orderData
                                    ? props.orderData.booking_details ?
                                        <Text style={[styles.text]}>
                                            Phone No: {props.orderData ? props.orderData.booking_details.phone : null}
                                        </Text>
                                        : null
                                    : null
                            }
                            {
                                props.orderData ?
                                    props.orderData.booking_details ?
                                        <Text style={[styles.text]}>
                                            People: {props.orderData ? props.orderData.booking_details.people : null}
                                        </Text>
                                        :
                                        null
                                    :
                                    null
                            }
                            <Text style={styles.text}>
                                {props.orderData ? props.orderData.order_description : null}
                            </Text>
                        </View>

                    </View>

                </ScrollView>
                <View style={[styles.localFooter], { position: 'absolute', bottom: 5, flexDirection: 'row', padding: 8 }}>
                    {
                        props.orderData ?
                            props.orderData.order_status == '4' ?
                                <Button
                                    style={{ borderWidth: 1, borderColor: WHITE_COLOR_CODE, width: '100%' }}
                                    buttonText="Canceled"
                                // onPress={() => props.cancelOrder(props.orderData)}
                                />
                                :
                                <Button
                                    style={{ borderWidth: 1, borderColor: WHITE_COLOR_CODE, width: '50%' }}
                                    buttonText="Cancel"
                                    onPress={() => props.cancelOrder(props.orderData)}
                                />
                            :
                            null
                    }
                    {
                        props.orderData ?
                            props.orderData.order_status == '1' ?
                                <Button
                                    style={{ borderWidth: 1, borderColor: WHITE_COLOR_CODE, width: '50%' }}
                                    buttonText='Confirmed'
                                />
                                : props.orderData.order_status == '0' ?
                                    <Button
                                        style={{ borderWidth: 1, borderColor: WHITE_COLOR_CODE, width: '50%' }}
                                        buttonText="Confirm"
                                        onPress={() => props.orderConfirm(props.orderData)}
                                    />
                                    :
                                    null
                            :
                            null
                    }

                </View>
            </View>
        </View>
    );
};
export default TableBookingDetailsScreen;