import React from 'react';
import {
    View,
    Image,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Text,
    Dimensions,
    KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import Header from '../../../Components/Header';
import Button from '../../../Components/Button';
import Input from '../../../Components/Input';
import CommonStyles from '../../../Utils/CommonStyles';
import { GREY_COLOR_CODE, WHITE_COLOR_CODE } from '../../../Utils/Constant';
const CreateEvent = (props) => {
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
                HeaderText={'Submit an Event'}
                type="Drawer"
            />
            <View style={[CommonStyles.body]}>
                <ScrollView>
                    <View style={styles.MainContainer}>
                        <Input
                            onChangeText={(EventName) => props.setEventName(EventName)}
                            value={props.EventName}
                            secureTextEntry={false}
                            placeholder="Event Name"
                            InputType="withScroll"
                        />
                        <TouchableOpacity style={styles.container}>
                            <View style={styles.CameraImgView}>
                                <Text style={styles.AddPhotosTxt}>Date</Text>
                            </View>
                            <View style={styles.BckArrowBack}>
                                <Image source={require('../../../Assets/calendar_icon.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container}>
                            <View style={styles.CameraImgView}>
                                <Text style={styles.AddPhotosTxt}>Start Time</Text>
                            </View>
                            <View style={styles.BckArrowBack}>
                                <Image source={require('../../../Assets/dropdown_icon.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container}>
                            <View style={styles.CameraImgView}>
                                <Text style={styles.AddPhotosTxt}>End Time</Text>
                            </View>
                            <View style={styles.BckArrowBack}>
                                <Image source={require('../../../Assets/dropdown_icon.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.onPressPublicVenue()} style={styles.container}>
                            <View style={styles.CameraImgView}>
                                <TouchableOpacity>
                                    {props.checkbox ?
                                        <Image source={require('../../../Assets/checked_circled_icon_box.png')} />
                                        :
                                        <Image source={require('../../../Assets/unchecked_circled_icon_box.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.AddPhotosTxt}>Public Venue</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.onPressPrivateAdd()} style={styles.container}>
                            <View style={styles.CameraImgView}>
                                <TouchableOpacity >
                                    {props.privateCheck ?
                                        <Image source={require('../../../Assets/checked_circled_icon_box.png')} />
                                        :
                                        <Image source={require('../../../Assets/unchecked_circled_icon_box.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.AddPhotosTxt}>Private Address</Text>
                            </View>
                        </TouchableOpacity>
                        <Input
                            onChangeText={(BusinessName) => props.setBusinessName(BusinessName)}
                            value={props.BusinessName}
                            secureTextEntry={false}
                            placeholder="Business Name"
                            InputType="withScroll"
                        />
                        <Input
                            onChangeText={(NearBy) => props.setNearBy(NearBy)}
                            value={props.NearBy}
                            secureTextEntry={false}
                            placeholder="Near"
                            InputType="withScroll"
                        />
                        <Button buttonText="Search" style={{ marginTop: 5, marginBottom: 5 }} />
                        <Input
                            onChangeText={(WhatWhy) => props.setWhatWhy(WhatWhy)}
                            value={props.WhatWhy}
                            secureTextEntry={false}
                            placeholder="What and Why?"
                            InputType="withScroll"
                        />
                        <Input
                            onChangeText={(OfficialWeb) => props.setOfficialWeb(OfficialWeb)}
                            value={props.OfficialWeb}
                            secureTextEntry={false}
                            placeholder="Official Website URL:"
                            InputType="withScroll"
                        />
                        <Input
                            onChangeText={(TicketURL) => props.setTicketURL(TicketURL)}
                            value={props.TicketURL}
                            secureTextEntry={false}
                            placeholder="Ticket URL:"
                            InputType="withScroll"
                        />
                        <Input
                            onChangeText={(PriceFrom) => props.setPriceFrom(PriceFrom)}
                            value={props.PriceFrom}
                            secureTextEntry={false}
                            placeholder="Price from"
                            InputType="withScroll"
                        />
                        <Input
                            onChangeText={(PriceTo) => props.setPriceTo(PriceTo)}
                            value={props.PriceTo}
                            secureTextEntry={false}
                            placeholder="Price to"
                            InputType="withScroll"
                        />
                        <TouchableOpacity onPress={() => props.onPressFreeEvent()} style={styles.container}>
                            <View style={styles.CameraImgView}>
                                <TouchableOpacity >
                                    {props.FreeEvent ?
                                        <Image source={require('../../../Assets/checked_squared_v1.png')} />
                                        :
                                        <Image source={require('../../../Assets/unchecked_squared_v1.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.AddPhotosTxt}>Free Event</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container}>
                            <View style={styles.CameraImgView}>
                                <Text style={styles.AddPhotosTxt}>Category</Text>
                            </View>
                            <View style={styles.BckArrowBack}>
                                <Image source={require('../../../Assets/dropdown_icon.png')} />
                            </View>
                        </TouchableOpacity>
                        <Button buttonText="Create Event" style={{ marginTop: 10 }} />
                        <Button
                            buttonLabelStyle={{ color: WHITE_COLOR_CODE }}
                            buttonText="Cancel"
                            style={{ marginTop: 10, backgroundColor: GREY_COLOR_CODE }} />
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView >
    )
}
export default CreateEvent
