import React, { useState } from 'react';
import {
    View, Text, StatusBar,
    KeyboardAvoidingView, Image,
    ScrollView, Modal,
    TouchableOpacity, FlatList, TextInput
} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import Header from '../../../Components/Header';
import CommonStyles from '../../../Utils/CommonStyles';
import {
    WHITE_COLOR_CODE,
    GREY_COLOR_CODE,
    BLACK_COLOR_CODE,
    YELLOW_COLOR_CODE,
    FONT_FAMILY_REGULAR
} from '../../../Utils/Constant';
const NotificationSettings = (props) => {
    return (
        <KeyboardAvoidingView style={[CommonStyles.container]}>
            <StatusBar
                translucent={true}
                backgroundColor='transparent'
                barStyle='dark-content'
            />
            <Header
                RightImg={null}
                HeaderText={'Email / Notification Settings'}
            />
            <View style={[CommonStyles.body]}>
                <ScrollView>
                    <View style={[styles.EmailContainer, { paddingBottom: 10 }]}>
                        <View style={styles.FlexViewContain}>
                            <View style={{ flex: 5 }}>
                                <Text style={styles.EmailNotifyTxt}>Email Notifications</Text>
                                <Text style={styles.AddAccountTxt}>
                                    Add accounts, remove accounts, and change your primary account
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => props.onPressAddEmail()}
                                style={styles.AddLocationView}>
                                <Image
                                    source={require('../../../Assets/add_location_icon.png')} />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            keyExtractor={(item, index) => index.toString()}
                            data={props.emailList && props.emailList}
                            renderItem={({ item, index }) =>
                                <View style={styles.EmailContainerBox}>
                                    <Text style={styles.MainEmaliTXt}>{item.email}</Text>
                                    {item.primary_status === 1 &&
                                        <Text style={styles.PrimaryText}>Primary account</Text>
                                    }
                                    <View style={[styles.ImageDelete, { flexDirection: "row" }]}>
                                        {
                                            item.primary_status !== 1 &&
                                            <TouchableOpacity
                                                onPress={() => props.onPressPrimaryEmail(item.email_id)}
                                                style={{ marginRight: 5 }}>

                                                <Image
                                                    style={{ height: 42, width: 42 }}
                                                    source={require('../../../Assets/add_primary_icon_color.png')} />
                                            </TouchableOpacity>
                                        }
                                        {item.primary_status !== 1 &&
                                            <TouchableOpacity
                                                onPress={() => props.onPressDeleteEmail(item)}>
                                                <Image
                                                    resizeMode='contain'
                                                    // style={styles.ImageDelete}
                                                    source={require('../../../Assets/list_delete_icon.png')} />
                                            </TouchableOpacity>}
                                    </View>

                                </View>
                            }
                        />
                    </View>
                    <View style={styles.PhoneNumberContain}>
                        <View style={styles.PhoneDescrptnView}>
                            <Text style={[styles.EmailNotifyTxt, { color: BLACK_COLOR_CODE }]}>Phone Number</Text>
                            <Text style={styles.PhoneDescrptnText}>
                                Add or edit your number. We'll automatically enter
                                It when you request a quote, make restaurant reservations,
                                order food delivery, or make other transactions on AbbyPages
                            </Text>
                        </View>
                        {
                            props.confirm === '' ?
                                <>
                                    <TouchableOpacity
                                        onPress={() => props.OnpressRegion()}
                                        style={[styles.EmailContainerBox, {
                                            flexDirection: "row",
                                            marginLeft: 15,
                                            marginRight: 15,
                                            paddingBottom: props.selectedCountry ? 10 : 20,
                                            paddingTop: props.selectedCountry ? 10 : 20,
                                        }]}>
                                        {props.selectedCountry ?
                                            <View style={styles.MainTextViewCountry}>
                                                <Text style={styles.CountryflgTxt}>{props.selectedCountryFlag}</Text>
                                                <Text style={styles.RegionTextMain}>{props.SelectedCode}</Text>
                                                <Text
                                                    numberOfLines={1}
                                                    style={styles.RegionTextMain}>{props.selectedCountry}</Text>
                                            </View>
                                            :
                                            <View style={{ flex: 5.5 }}>
                                                <Text style={{ fontFamily: FONT_FAMILY_REGULAR }}>Region</Text>
                                            </View>
                                        }
                                        <TouchableOpacity
                                            onPress={() => props.OnpressRegion()}
                                            style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}
                                        >
                                            <Image source={require('../../../Assets/arrow_right_icon.png')} />
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                    <Input
                                        onChangeText={(phone) => props.setDashBoardDetails({
                                            ...props.dashBoardDetails,
                                            mobile: phone
                                        })}
                                        value={props.dashBoardDetails.mobile}
                                        secureTextEntry={false}
                                        placeholder="Phone Number"
                                        InputType="withScroll"
                                        keyboardType='phone-pad'
                                    />
                                    <Button
                                        onPress={() => props.onPressSavePhone()}
                                        buttonText="Save Phone Number"
                                        style={{ marginTop: 5 }}
                                    />
                                </>
                                :
                                <>
                                    <OTPTextView
                                        handleTextChange={(val) => props.setOtp(val)}
                                        tintColor={YELLOW_COLOR_CODE}
                                        containerStyle={{ alignSelf: "center" }}
                                        textInputStyle={{
                                            borderWidth: 2,
                                            color: BLACK_COLOR_CODE,
                                            fontFamily: FONT_FAMILY_REGULAR,
                                            borderBottomWidth: 2,
                                        }}
                                        inputCount={6}
                                        inputCellLength={1}
                                    />
                                    <Button
                                        buttonText="Confirm"
                                        buttonLabelStyle={styles.logtxt}
                                        onPress={() => props._handleOtpVerify()}
                                    />
                                </>
                        }
                    </View>
                    <View style={[styles.PhoneNumberContain, { padding: 15 }]}>
                        <Text style={styles.EmalNotifyText}>Email Notifications Settings</Text>
                        <Text style={styles.PhoneDescrptnText}>
                            Manage what emaiLs are sent to your primary email
                        </Text>
                        <View style={styles.ReceiveEmailView}>
                            <TouchableOpacity style={{}} onPress={() => console.log('123')}>
                                <Image style={{ marginTop: 5 }} source={require('../../../Assets/checked_squared_icon_small.png')} />
                            </TouchableOpacity>
                            <View style={styles.ReceiveContain}>
                                <Text style={styles.ReceiveEmailText}>
                                    Receive emails from AbbyPages
                            </Text>
                                <Text style={styles.NOteTextStyle}>
                                    Note: you will still receive certain legal, transcational
                                    or administrative emails.
                            </Text>
                            </View>
                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <Text style={styles.GetEmailText}>Get email updates about:</Text>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.friends_request, props.setFriendRequest)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.friends_request ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text
                                    style={styles.GetEmailOptnTxt}>
                                    Friend requests
                                </Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.new_followers, props.setNewFollowers)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.new_followers ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>New Followers</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.compliment_and_direct_message, props.setComplimentAndDirectMessage)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.compliment_and_direct_message ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Compliments and direct messages</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.message_from_business_owners, props.setMessageFromBusinessOwners)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.message_from_business_owners ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Message from business owners</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.your_business_info_edits, props.setYourBusinessInfoEdits)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.your_business_info_edits ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Status of your business info edits</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.cash_back_updates, props.setCashBackUpdates)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.cash_back_updates ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Cash back updates</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.contributions, props.setContributions)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.contributions ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Contributions</Text>
                            </View>
                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <Text style={styles.GetEmailText}>We'll also let you know about:</Text>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.business_you_might_like, props.setBusinessYouMightLike)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.business_you_might_like ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Businesses you might like</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.abbypages_tips_and_tricks, props.setAbbyPagesTipsAndTricks)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.abbypages_tips_and_tricks ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>AbbyPages tips and tricks</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.suggested_business_to_review, props.setSuggestedBusinessToReview)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.suggested_business_to_review ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Suggested businesses to review</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.discounts_and_promotions, props.setDiscountsAndPromotions)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.discounts_and_promotions ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Discounts and promotions</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.restaurants_news, props.setRestaurantsNews)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.restaurants_news ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Restaurants news</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.new_questions_you_can_answer, props.setNewQuestionsYouCanAnswer)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.new_questions_you_can_answer ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>New questions you can answer</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.surveys, props.setSurveys)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.surveys ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Surveys</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.neighbourhoods, props.setNeighbourHoods)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.neighbourhoods ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Neighborhoods</Text>
                            </View>
                        </View>
                    </View>
                    {/* <Image style={{ marginTop: 5 }} source={require('../../../Assets/unchecked_squared_icon_small.png')} /> */}
                    <View style={[styles.PhoneNumberContain, { padding: 15 }]}>
                        <Text style={styles.EmalNotifyText}>Push Notifications Settings</Text>
                        <Text style={[styles.PhoneDescrptnText]}>
                            Receive push notifications to mobile devices that are connected you Abby account
                        </Text>
                        <Text style={[styles.GetEmailText, { paddingTop: 10 }]}>Friend activity</Text>
                        <View style={[styles.ReceiveEmailView, { paddingTop: 5 }]}>
                            <View style={styles.ReceiveContain}>
                                <Text style={styles.ReceiveEmailText}>
                                    Check-ins(anyone)
                                </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity
                                        onPress={() => props.handleNotification(props.by_friends_in_your_city, props.setByFriendsInYourCity)}
                                        style={styles.MainGetEmailView}>
                                        {
                                            props.by_friends_in_your_city ?
                                                <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                                :
                                                <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                        }
                                    </TouchableOpacity>
                                    <Text
                                        style={[styles.NOteTextStyle, { width: '100%', lineHeight: 25, paddingLeft: 5 }]}>
                                        By friends in your city
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity
                                        onPress={() => props.handleNotification(props.by_friends_in_all_cities, props.setByFriendsInAllCities)}
                                        style={styles.MainGetEmailView}>
                                        {
                                            props.by_friends_in_all_cities ?
                                                <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                                :
                                                <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                        }
                                    </TouchableOpacity>
                                    <Text style={[styles.NOteTextStyle, { width: '100%', lineHeight: 25, paddingLeft: 5 }]}>
                                        By friends in all cities
                                </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <Text style={styles.GetEmailText}>Reactions to your posts</Text>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.review_votes, props.setReviewVotes)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.review_votes ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Review votes</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.check_in_comments, props.setCheckInComments)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.check_in_comments ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Check-in comments</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.check_in_likes, props.setCheckInLikes)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.check_in_likes ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Check-in likes</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.tip_likes, props.setTipLikes)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.tip_likes ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Tip likes</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.photo_and_videos_likes, props.setPhotoAndVideosLikes)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.photo_and_videos_likes ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Photos and videos Likes</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.compliments, props.setCompliments)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.compliments ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Compliments</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.direct_messages, props.setDirectMessages)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.direct_messages ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Direct messages</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.helpful_answers, props.setHelpfulAnswers)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.helpful_answers ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Helpful answers</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.review_comments, props.setReviewComments)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.review_comments ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Review comments </Text>
                            </View>
                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <Text style={styles.GetEmailText}>From AbbyPages</Text>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.deals_and_announcements, props.setDealsAndAnnouncements)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.deals_and_announcements ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Deals and announcements</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.push_business_you_might_like, props.setPushBusinessYouMightLike)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.push_business_you_might_like ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Businesses you might like</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.push_suggested_business_to_review, props.setPushSuggestedBusinessToReview)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.push_suggested_business_to_review ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Suggested businessses to review</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.case_back_updates, props.setCaseBackUpdates)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.case_back_updates ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Cash back updates</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.updates_on_your_views, props.setUpdatesOnYourViews)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.updates_on_your_views ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Updates on your views</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.push_surveys, props.setPushSurveys)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.push_surveys ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Surveys</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.collections_updates, props.setCollectionsUpdates)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.collections_updates ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Collections updates</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.business_you_hired, props.setBusinessYouHired)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.business_you_hired ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Business you hired</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.push_neighborhoods, props.setPushNeighborhoods)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.push_neighborhoods ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Neighborhoods</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.order_and_purchase_updates, props.setOrderAndPurchaseUpdates)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.order_and_purchase_updates ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Order and purchase updates</Text>
                            </View>
                            <View style={styles.MainGetEmailView}>
                                <TouchableOpacity
                                    onPress={() => props.handleNotification(props.waitlist_updates, props.setWaitListUpdates)}
                                    style={styles.MainGetEmailView}>
                                    {
                                        props.waitlist_updates ?
                                            <Image source={require('../../../Assets/checked_squared_icon_small.png')} />
                                            :
                                            <Image source={require('../../../Assets/unchecked_squared_icon_small.png')} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.GetEmailOptnTxt}>Waitlist updates</Text>
                            </View>
                        </View>
                    </View>
                    <Button
                        buttonText="Save Notifications Settings"
                        style={{ marginTop: 5, marginTop: 10 }}
                        onPress={() => props.updateNotification()}
                    />
                    <Button
                        buttonText="Cancel"
                        buttonLabelStyle={{ color: WHITE_COLOR_CODE }}
                        onPress={() => props.onPressCancel()}
                        style={{ marginTop: 5, backgroundColor: GREY_COLOR_CODE, marginTop: 10, marginBottom: 10 }}
                    />
                </ScrollView>
            </View>
            <Modal
                animationType="fade"
                hardwareAccelerated={true}
                transparent={true}
                visible={props.ModalVisible}
                onRequestClose={() => {
                    props.setModalVisible(false)
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={styles.TouchableFlse} onPress={() => props.modalShareFalse()} >
                            <Image source={require("../../../Assets/screen_close_icon.png")} />
                        </TouchableOpacity>
                        <View style={{ width: '100%' }}>
                            <TextInput
                                placeholder={"Search"}
                                onChangeText={(text) => props.SearchCountry(text)}
                                style={styles.TxtInptStyle}
                            />
                        </View>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString()}
                            data={props.filterCountry}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity
                                    key={index} style={styles.MainCntrySlctTouchble}
                                    onPress={() => props.OnpressCountry(item)}>
                                    <Text style={{ fontSize: 25 }}>{item.flag}</Text>
                                    <Text style={styles.CountryText}>{item.dial_code}</Text>
                                    <Text style={styles.CountryText}>{item.name}</Text>
                                </TouchableOpacity>}
                        />
                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    )
}
export default NotificationSettings
