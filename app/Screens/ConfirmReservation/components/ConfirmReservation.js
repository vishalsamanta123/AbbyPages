import React from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Header from '../../../Components/Header';
import CommonStyles from '../../../Utils/CommonStyles';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import styles from './styles';
import { FONT_FAMILY_REGULAR, YELLOW_COLOR_CODE, WHITE_COLOR_CODE } from '../../../Utils/Constant';
const ConfirmReservation = (props) => {
    return (
        <KeyboardAvoidingView style={[CommonStyles.container]}>
            <StatusBar
                translucent={true}
                backgroundColor='transparent'
                barStyle='dark-content'
            />
            <Header
                RightImg={null}
                HeaderText={'Confirm Reservation'}
            />
            <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
                <ScrollView>
                    <View style={styles.ConfirmationContain}>
                        <Text style={styles.HaedingParatTXT}>
                            You 'll get response through Abby here.
                            Businesses will not see your contact information.
                        </Text>
                        <View style={styles.RestroInfoView}>
                            <Image style={styles.RestroProfile}
                                source={{ uri: props.restroDetail && props.restroDetail.logo }} />
                            <View style={styles.RestroNameView}>
                                <Text style={styles.RestroNameTxt}>{props.restroDetail.business_name}</Text>
                                <View style={styles.GuestsView} >
                                    <Image style={styles.UserImgeStyle} resizeMode='contain' source={require('../../../Assets/list_guest_icon.png')} />
                                    <Text style={styles.DateMainTxt}> {props.reservationData.people} guests</Text>
                                </View>
                                <View style={styles.GuestsView} >
                                    <Image style={styles.CalenderImge} resizeMode='contain' source={require('../../../Assets/info_calendar_icon.png')} />
                                    <Text style={styles.DateMainTxt}> {props.reservationData.date} -{props.reservationData.time} </Text>
                                </View>
                                <TouchableOpacity onPress={() => props.onPressEditDetails()} style={styles.GuestsView} >
                                    <Text style={styles.EditDetailTxt}>Edit Details</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Input
                        onChangeText={(firstName) => props.setLocalUserData({
                            ...props.localUserData,
                            first_name: firstName
                        })}
                        value={props.localUserData.first_name && props.localUserData.first_name}
                        placeholder="First Name"
                        InputType="withScroll"
                    />
                    <Input
                        onChangeText={(last_name) => props.setLocalUserData({
                            ...props.localUserData,
                            last_name: last_name
                        })}
                        value={props.localUserData.last_name && props.localUserData.last_name}
                        placeholder="Last Name"
                        InputType="withScroll"
                    />
                    <Input
                        onChangeText={(email) => props.setLocalUserData({
                            ...props.localUserData,
                            email: email
                        })}
                        value={props.localUserData.email && props.localUserData.email}
                        placeholder="Email"
                        InputType="withScroll"
                    />
                    <Input
                        onChangeText={(mobile) => props.setLocalUserData({
                            ...props.localUserData,
                            mobile: mobile
                        })}
                        value={props.localUserData.mobile && props.localUserData.mobile}
                        placeholder="Mobile Number"
                        InputType="withScroll"
                    />
                    <Input
                        onChangeText={(note) => props.setLocalUserData({
                            ...props.localUserData,
                            note: note
                        })}
                        value={props.localUserData.note && props.localUserData.note}
                        placeholder="Notes (optional)"
                        InputType="withScroll"
                        multiLine={true}
                    />
                    <View style={styles.ConfirmationContain}>
                        <Text style={[styles.HaedingParatTXT, { lineHeight: 21 }]}>
                            You'll receive texts about your restaurant visit.
                            By continuing below, you agree to AbbyPage's Terms of
                            <Text style={{ fontFamily: FONT_FAMILY_REGULAR, color: YELLOW_COLOR_CODE, fontSize: 14 }}>
                                Service</Text> and <Text style={{ fontFamily: FONT_FAMILY_REGULAR, color: YELLOW_COLOR_CODE, fontSize: 14 }}>
                                Privacy Policy</Text>
                                .We'll send your name, mobile number, and notes to the restaurant.
                        </Text>
                        <View style={{ flexDirection: 'row', paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>
                            <TouchableOpacity onPress={() => props.onPressCheckBox()}>
                                {props.SaveCheckBox ?
                                    <Image style={{ width: 25, height: 25, top: 5 }} source={require('../../../Assets/uncheck_box.png')} />
                                    :
                                    <Image style={{ width: 25, height: 25, top: 5 }} source={require('../../../Assets/checked_box.png')} />
                                }
                            </TouchableOpacity>
                            <Text style={[styles.HaedingParatTXT, { lineHeight: 19 }]}>Receive special offers and updates from Osteria Toscana</Text>
                        </View>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Button
                            buttonText="Confirm"
                            onPress={() => props.onPressConfirm()}
                        />
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}
export default ConfirmReservation
