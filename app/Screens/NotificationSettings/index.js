import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import CommonStyles from '../../Utils/CommonStyles';
import CountryData from '../../Components/CountryData/countryData'
import NotificationSettings from './components/NotificationSettings';
import { apiCall } from '../../Utils/httpClient';
import ENDPOINTS from '../../Utils/apiEndPoints';
import Loader from '../../Utils/Loader';
import Success from '../../Components/Modal/success';
import { useFocusEffect } from '@react-navigation/native';
import Error from '../../Components/Modal/error';
const NotificationSettingsView = ({ navigation }) => {
    const [filterCountry, SetfilterCountry] = useState(CountryData);
    const [ModalVisible, setModalVisible] = useState(false);
    const [selectedCountry, SetSelectedCountry] = useState('');
    const [selectedCountryFlag, SetSelectedCountryFlag] = useState('');
    const [SelectedCode, SetSelectedCode] = useState('');
    const [confirm, setConfirm] = useState('');
    const [otp, setOtp] = useState('');

    // add by cd
    const [emailNotificationSettings, setEmailNotificationSettings] = useState('')
    //
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false);

    const [Quantity, setQuantity] = useState('');
    const [SpiceLevel, setSpiceLevel] = useState('');
    const [Special, setSpecial] = useState('');
    const [dashBoardDetails, setDashBoardDetails] = useState('');
    const [emailList, setEmailList] = useState('');

    // CheckBox
    const [by_friends_in_your_city, setByFriendsInYourCity] = useState(true);
    const [by_friends_in_all_cities, setByFriendsInAllCities] = useState(true);
    const [friends_request, setFriendRequest] = useState(true);
    const [new_followers, setNewFollowers] = useState(true);
    const [compliment_and_direct_message, setComplimentAndDirectMessage] = useState(true);
    const [message_from_business_owners, setMessageFromBusinessOwners] = useState(true);
    const [your_business_info_edits, setYourBusinessInfoEdits] = useState(true);
    const [cash_back_updates, setCashBackUpdates] = useState(true);
    const [contributions, setContributions] = useState(true);
    const [business_you_might_like, setBusinessYouMightLike] = useState(true);
    const [abbypages_tips_and_tricks, setAbbyPagesTipsAndTricks] = useState(true);
    const [suggested_business_to_review, setSuggestedBusinessToReview] = useState(true);
    const [discounts_and_promotions, setDiscountsAndPromotions] = useState(true);
    const [restaurants_news, setRestaurantsNews] = useState(true);
    const [new_questions_you_can_answer, setNewQuestionsYouCanAnswer] = useState(true);
    const [surveys, setSurveys] = useState(true);
    const [neighbourhoods, setNeighbourHoods] = useState(true);
    //push
    const [review_votes, setReviewVotes] = useState(true);
    const [check_in_comments, setCheckInComments] = useState(true);
    const [check_in_likes, setCheckInLikes] = useState(true);
    const [tip_likes, setTipLikes] = useState(true);
    const [photo_and_videos_likes, setPhotoAndVideosLikes] = useState(true);
    const [compliments, setCompliments] = useState(true);
    const [direct_messages, setDirectMessages] = useState(true);
    const [helpful_answers, setHelpfulAnswers] = useState(true);
    const [review_comments, setReviewComments] = useState(true);

    const [deals_and_announcements, setDealsAndAnnouncements] = useState(true);
    const [push_business_you_might_like, setPushBusinessYouMightLike] = useState(true);
    const [push_suggested_business_to_review, setPushSuggestedBusinessToReview] = useState(true);
    const [case_back_updates, setCaseBackUpdates] = useState(true);
    const [updates_on_your_views, setUpdatesOnYourViews] = useState(true);
    const [push_surveys, setPushSurveys] = useState(true);
    const [collections_updates, setCollectionsUpdates] = useState(true);
    const [business_you_hired, setBusinessYouHired] = useState(true);
    const [push_neighborhoods, setPushNeighborhoods] = useState(true);
    const [order_and_purchase_updates, setOrderAndPurchaseUpdates] = useState(true);
    const [waitlist_updates, setWaitListUpdates] = useState(true);
    useEffect(() => {
        DashBoardDetails();
    }, []);
    useFocusEffect(
        React.useCallback(() => {
            DashBoardDetails();
            return () => DashBoardDetails();
        }, [])
    );
    const _handleEmailNotificationSettings = () => {
        setEmailNotificationSettings(!emailNotificationSettings);
    }
    const OnpressRegion = () => {
        setModalVisible(true)
    };
    const modalShareFalse = () => {
        SetfilterCountry(CountryData)
        setModalVisible(false)
    };
    const OnpressCountry = (item) => {
        SetSelectedCountry(item.name)
        SetSelectedCountryFlag(item.flag)
        SetSelectedCode(item.dial_code)
        setModalVisible(false)
        SetfilterCountry(CountryData)
    };
    const SearchCountry = (searchKey) => {
        const lowerCased = searchKey.toLowerCase();
        let list = CountryData.filter(data => data.name.toLowerCase().includes(lowerCased))
        SetfilterCountry(list.length > 0 ? list : CountryData)
    };
    const _handleOtpVerify = async () => {
        setVisible(true);
        confirm.confirm(otp).then(user => {
            addPhoneInDatabse(user.user._user.phoneNumber)
            setVisible(false);
        }).catch(error => {
            setVisible(false);
            setVisibleErr(true);
            setErrorMessage(error.message);
        })
    };
    const addPhoneInDatabse = async (mobile_number) => {
        const params = {
            mobile_number: mobile_number
        };
        setVisible(true);
        const { data } = await apiCall
            ('POST', ENDPOINTS.ADD_PHONE_NUMBER, params);
        if (data.status === 200) {
            DashBoardDetails();
            setConfirm('');
            setSuccessMessage(data.message);
            setVisibleSuccess(true);
            setVisible(false);
        } else {
            setErrorMessage(data.message);
            setVisibleErr(true);
            setVisible(false);
        };
    };
    function validationFormPhone() {
        if (dashBoardDetails.mobile == "" || dashBoardDetails.mobile == null) {
            setErrorMessage('Please enter Phone Number');
            setVisibleErr(true)
            return false;
        } if (dashBoardDetails.mobile.length < 10) {
            setErrorMessage('Please enter correct Phone Number');
            setVisibleErr(true)
            return false;
        } if (SelectedCode == '') {
            setErrorMessage('Please Select Country Code');
            setVisibleErr(true)
            return false;
        };
        return true;
    };
    const onPressSavePhone = async () => {
        const valid = validationFormPhone();
        if (valid) {
            setVisible(true);
            const params = {
                mobile_number: dashBoardDetails.mobile
            };
            const { data } = await apiCall
                ('POST', ENDPOINTS.CHECK_NUMBER_FOR_NOTIFICATION, params);
            if (data.status === 200) {
                await auth().signInWithPhoneNumber(SelectedCode + params.mobile_number).
                    then(abc => {
                        setConfirm(abc);
                        setVisible(false);
                    }).catch(error => {
                        setVisible(false)
                        setVisibleErr(true);
                        setErrorMessage(error.message);
                    })
                setVisible(false);
            } else {
                setErrorMessage(data.message);
                setVisibleErr(true);
                setVisible(false);
            };
        };
    };
    const DashBoardDetails = async () => {
        setVisible(true)
        const { data } = await apiCall
            ('POST', ENDPOINTS.DASHBOARD_DETAILS);
        if (data.status === 200) {
            setDashBoardDetails(data.data);
            setEmailList(data.data.user_email);
            if (data.data.notification_setting) {
                setFriendRequest(data.data.notification_setting.friends_request);
                setNewFollowers(data.data.notification_setting.new_followers);
                setComplimentAndDirectMessage(data.data.notification_setting.compliment_and_direct_message);
                setMessageFromBusinessOwners(data.data.notification_setting.message_from_business_owners);
                setYourBusinessInfoEdits(data.data.notification_setting.your_business_info_edits);
                setCashBackUpdates(data.data.notification_setting.cash_back_updates);
                setContributions(data.data.notification_setting.contributions);
                setBusinessYouMightLike(data.data.notification_setting.business_you_might_like);
                setAbbyPagesTipsAndTricks(data.data.notification_setting.abbypages_tips_and_tricks);
                setSuggestedBusinessToReview(data.data.notification_setting.suggested_business_to_review);
                setDiscountsAndPromotions(data.data.notification_setting.discounts_and_promotions);
                setRestaurantsNews(data.data.notification_setting.restaurants_news);
                setNewQuestionsYouCanAnswer(data.data.notification_setting.new_questions_you_can_answer);
                setSurveys(data.data.notification_setting.surveys);
                setNeighbourHoods(data.data.notification_setting.neighbourhoods);
            } if (data.data.push_notification_setting) {
                setByFriendsInYourCity(data.data.push_notification_setting.by_friends_in_your_city);
                setByFriendsInAllCities(data.data.push_notification_setting.by_friends_in_all_cities)
                setReviewVotes(data.data.push_notification_setting.review_votes);
                setCheckInComments(data.data.push_notification_setting.check_in_comments);
                setCheckInLikes(data.data.push_notification_setting.check_in_likes);
                setTipLikes(data.data.push_notification_setting.tip_likes);
                setPhotoAndVideosLikes(data.data.push_notification_setting.photo_and_videos_likes);
                setCompliments(data.data.push_notification_setting.compliments);
                setDirectMessages(data.data.push_notification_setting.direct_messages);
                setHelpfulAnswers(data.data.push_notification_setting.helpful_answers);
                setReviewComments(data.data.push_notification_setting.review_comments);
                setDealsAndAnnouncements(data.data.push_notification_setting.deals_and_announcements);
                setPushBusinessYouMightLike(data.data.push_notification_setting.push_business_you_might_like);
                setPushSuggestedBusinessToReview(data.data.push_notification_setting.push_suggested_business_to_review);
                setCaseBackUpdates(data.data.push_notification_setting.case_back_updates);
                setUpdatesOnYourViews(data.data.push_notification_setting.updates_on_your_views);
                setPushSurveys(data.data.push_notification_setting.push_surveys);
                setCollectionsUpdates(data.data.push_notification_setting.collections_updates);
                setBusinessYouHired(data.data.push_notification_setting.business_you_hired);
                setPushNeighborhoods(data.data.push_notification_setting.push_neighborhoods);
                setOrderAndPurchaseUpdates(data.data.push_notification_setting.order_and_purchase_updates);
                setWaitListUpdates(data.data.push_notification_setting.waitlist_updates);
            };
            setVisible(false);
        } else {
            setErrorMessage(data.message);
            setVisibleErr(true);
            setVisible(false);
        };
    };
    const onPressAddEmail = () => {
        navigation.navigate('AddEmail')
    };

    const onPressDeleteEmail = (item) =>
        Alert.alert(
            "",
            "Are you sure you want delete Email",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => onPressDeleteEmail2(item) }
            ],
            { cancelable: false }
        )
    const onPressDeleteEmail2 = async (item) => {
        setVisible(true);
        try {
            const params = {
                type: 2,
                email_id: item.email_id
            }
            const { data } = await apiCall
                ('POST', ENDPOINTS.DELETE_EMAIL_LOCATION, params);
            if (data.status === 200) {
                DashBoardDetails();
                setVisibleSuccess(true);
                setSuccessMessage(data.message);
                setVisible(false);
            } else {
                setErrorMessage(data.message);
                setVisibleErr(true);
                setVisible(false);
            }
        } catch (error) {
            setVisibleErr(true);
            setErrorMessage(error);
        }
    };
    const apiCallUpdateNotification = async (params) => {
        try {
            const { data } = await apiCall
                ('POST', ENDPOINTS.USER_NOTIFICATION_SETTING, params);
            if (data.status === 200) {
                DashBoardDetails();
                setSuccessMessage(data.message);
                setVisibleSuccess(true);
                setVisible(false);
            } else {
                setErrorMessage(data.message);
                setVisibleErr(true);
                setVisible(false);
            };
        } catch (error) {
            setErrorMessage(error);
            setVisibleErr(true);
            setVisible(false);
        }
    };
    const updateNotification = async () => {
        setVisible(true);
        try {
            const params = {
                friends_request: friends_request == 1 ? 1 : 0,
                new_followers: new_followers == 1 ? 1 : 0,
                compliment_and_direct_message: compliment_and_direct_message == 1 ? 1 : 0,
                message_from_business_owners: message_from_business_owners == 1 ? 1 : 0,
                your_business_info_edits: your_business_info_edits == 1 ? 1 : 0,
                cash_back_updates: cash_back_updates == 1 ? 1 : 0,
                contributions: contributions == 1 ? 1 : 0,
                business_you_might_like: business_you_might_like == 1 ? 1 : 0,
                abbypages_tips_and_tricks: abbypages_tips_and_tricks == 1 ? 1 : 0,
                suggested_business_to_review: suggested_business_to_review == 1 ? 1 : 0,
                discounts_and_promotions: discounts_and_promotions == 1 ? 1 : 0,
                restaurants_news: restaurants_news == 1 ? 1 : 0,
                new_questions_you_can_answer: new_questions_you_can_answer == 1 ? 1 : 0,
                surveys: surveys == 1 ? 1 : 0,
                neighbourhoods: neighbourhoods == 1 ? 1 : 0,
                review_votes: review_votes == 1 ? 1 : 0,
                check_in_comments: check_in_comments == 1 ? 1 : 0,
                check_in_likes: check_in_likes == 1 ? 1 : 0,
                tip_likes: tip_likes == 1 ? 1 : 0,
                photo_and_videos_likes: photo_and_videos_likes == 1 ? 1 : 0,
                compliments: compliments == 1 ? 1 : 0,
                direct_messages: direct_messages == 1 ? 1 : 0,
                helpful_answers: helpful_answers == 1 ? 1 : 0,
                review_comments: review_comments == 1 ? 1 : 0,
                deals_and_announcements: deals_and_announcements == 1 ? 1 : 0,
                push_business_you_might_like: push_business_you_might_like == 1 ? 1 : 0,
                push_suggested_business_to_review: push_suggested_business_to_review == 1 ? 1 : 0,
                case_back_updates: case_back_updates == 1 ? 1 : 0,
                updates_on_your_views: updates_on_your_views == 1 ? 1 : 0,
                push_surveys: push_surveys == 1 ? 1 : 0,
                collections_updates: collections_updates == 1 ? 1 : 0,
                business_you_hired: business_you_hired == 1 ? 1 : 0,
                push_neighborhoods: push_neighborhoods == 1 ? 1 : 0,
                order_and_purchase_updates: order_and_purchase_updates == 1 ? 1 : 0,
                waitlist_updates: waitlist_updates == 1 ? 1 : 0
            }
            apiCallUpdateNotification(params)
        } catch (error) {
            setErrorMessage(error);
            setVisibleErr(true);
            setVisible(false);
        };
    };
    const onPressCancel = () => {
        navigation.navigate('ProfileSettings')
    };
    const onPressPrimaryEmail = async (email_id) => {
        setVisible(true);
        const params = {
            email_id: email_id
        };
        const { data } = await apiCall
            ('POST', ENDPOINTS.CHANGE_PRIMARY_EMAIL, params);
        if (data.status === 200) {
            DashBoardDetails();
            setVisibleSuccess(true);
            setSuccessMessage(data.message);
            setVisible(false);
        } else {
            setErrorMessage(data.message);
            setVisibleErr(true);
            setVisible(false);
        };
    };
    const handleNotification = (item, setItem) => {
        setItem(!item);
        // var notificationData=[...data,item]
    };
    return (
        <View style={CommonStyles.container}>
            {visible && <Loader state={visible} />}
            <NotificationSettings
                by_friends_in_your_city={by_friends_in_your_city}
                setByFriendsInYourCity={setByFriendsInYourCity}
                by_friends_in_all_cities={by_friends_in_all_cities}
                setByFriendsInAllCities={setByFriendsInAllCities}

                friends_request={friends_request}
                setFriendRequest={setFriendRequest}
                new_followers={new_followers}
                setNewFollowers={setNewFollowers}
                compliment_and_direct_message={compliment_and_direct_message}
                setComplimentAndDirectMessage={setComplimentAndDirectMessage}
                message_from_business_owners={message_from_business_owners}
                setMessageFromBusinessOwners={setMessageFromBusinessOwners}
                your_business_info_edits={your_business_info_edits}
                setYourBusinessInfoEdits={setYourBusinessInfoEdits}
                cash_back_updates={cash_back_updates}
                setCashBackUpdates={setCashBackUpdates}
                contributions={contributions}
                setContributions={setContributions}

                business_you_might_like={business_you_might_like}
                setBusinessYouMightLike={setBusinessYouMightLike}
                abbypages_tips_and_tricks={abbypages_tips_and_tricks}
                setAbbyPagesTipsAndTricks={setAbbyPagesTipsAndTricks}
                suggested_business_to_review={suggested_business_to_review}
                setSuggestedBusinessToReview={setSuggestedBusinessToReview}
                discounts_and_promotions={discounts_and_promotions}
                setDiscountsAndPromotions={setDiscountsAndPromotions}
                restaurants_news={restaurants_news}
                setRestaurantsNews={setRestaurantsNews}
                new_questions_you_can_answer={new_questions_you_can_answer}
                setNewQuestionsYouCanAnswer={setNewQuestionsYouCanAnswer}
                surveys={surveys}
                setSurveys={setSurveys}
                neighbourhoods={neighbourhoods}
                setNeighbourHoods={setNeighbourHoods}

                dashBoardDetails={dashBoardDetails}
                setDashBoardDetails={setDashBoardDetails}

                filterCountry={filterCountry}
                ModalVisible={ModalVisible}
                selectedCountry={selectedCountry}
                SetSelectedCountry={SetSelectedCountry}
                selectedCountryFlag={selectedCountryFlag}
                SetSelectedCountryFlag={SetSelectedCountryFlag}
                setModalVisible={setModalVisible}
                modalShareFalse={modalShareFalse}
                OnpressCountry={OnpressCountry}
                CountryData={CountryData}
                SearchCountry={SearchCountry}
                OnpressRegion={OnpressRegion}
                SelectedCode={SelectedCode}
                confirm={confirm}
                _handleOtpVerify={_handleOtpVerify}
                otp={otp}
                setOtp={setOtp}

                updateNotification={updateNotification}
                handleNotification={handleNotification}
                onPressPrimaryEmail={onPressPrimaryEmail}
                onPressSavePhone={onPressSavePhone}
                onPressDeleteEmail={onPressDeleteEmail}
                onPressCancel={onPressCancel}
                emailList={emailList}
                onPressAddEmail={onPressAddEmail}
                Quantity={Quantity}
                SpiceLevel={SpiceLevel}
                Special={Special}
                setQuantity={setQuantity}
                setSpiceLevel={setSpiceLevel}
                setSpecial={setSpecial}
                //push notification
                review_votes={review_votes}
                setReviewVotes={setReviewVotes}
                check_in_comments={check_in_comments}
                setCheckInComments={setCheckInComments}
                check_in_likes={check_in_likes}
                setCheckInLikes={setCheckInLikes}
                tip_likes={tip_likes}
                setTipLikes={setTipLikes}
                photo_and_videos_likes={photo_and_videos_likes}
                setPhotoAndVideosLikes={setPhotoAndVideosLikes}
                compliments={compliments}
                setCompliments={setCompliments}
                direct_messages={direct_messages}
                setDirectMessages={setDirectMessages}
                helpful_answers={helpful_answers}
                setHelpfulAnswers={setHelpfulAnswers}
                review_comments={review_comments}
                setReviewComments={setReviewComments}
                deals_and_announcements={deals_and_announcements}
                setDealsAndAnnouncements={setDealsAndAnnouncements}
                push_business_you_might_like={push_business_you_might_like}
                setPushBusinessYouMightLike={setPushBusinessYouMightLike}
                push_suggested_business_to_review={push_suggested_business_to_review}
                setPushSuggestedBusinessToReview={setPushSuggestedBusinessToReview}
                case_back_updates={case_back_updates}
                setCaseBackUpdates={setCaseBackUpdates}
                updates_on_your_views={updates_on_your_views}
                setUpdatesOnYourViews={setUpdatesOnYourViews}
                push_surveys={push_surveys}
                setPushSurveys={setPushSurveys}
                collections_updates={collections_updates}
                setCollectionsUpdates={setCollectionsUpdates}
                business_you_hired={business_you_hired}
                setBusinessYouHired={setBusinessYouHired}
                push_neighborhoods={push_neighborhoods}
                setPushNeighborhoods={setPushNeighborhoods}
                order_and_purchase_updates={order_and_purchase_updates}
                setOrderAndPurchaseUpdates={setOrderAndPurchaseUpdates}
                waitlist_updates={waitlist_updates}
                setWaitListUpdates={setWaitListUpdates}
                emailNotificationSettings={emailNotificationSettings}
                _handleEmailNotificationSettings={_handleEmailNotificationSettings}
            />
            <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
            <Success
                message={successMessage}
                visible={visibleSuccess}
                closeModel={() => setVisibleSuccess(false)}
            />
        </View>
    );
};
export default NotificationSettingsView;