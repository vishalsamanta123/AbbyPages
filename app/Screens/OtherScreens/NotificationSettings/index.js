import React, { useState, useEffect } from "react";
import { View } from "react-native";
import auth from "@react-native-firebase/auth";
import CommonStyles from "../../Utils/CommonStyles";
import CountryData from "../../Components/CountryData/countryData";
import NotificationSettings from "./components/NotificationSettings";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Success from "../../Components/Modal/success";
import { useFocusEffect } from "@react-navigation/native";
import Error from "../../Components/Modal/showMessage";
import QuestionModal from "../../Components/Modal/questionModal";

const NotificationSettingsView = ({ navigation }) => {
  const [filterCountry, SetfilterCountry] = useState(CountryData);
  const [ModalVisible, setModalVisible] = useState(false);
  const [selectedCountry, SetSelectedCountry] = useState("");
  const [selectedCountryFlag, SetSelectedCountryFlag] = useState("");
  const [SelectedCode, SetSelectedCode] = useState("");
  const [confirm, setConfirm] = useState("");
  const [otp, setOtp] = useState("");

  // add by cd
  const [emailNotificationSettings, setEmailNotificationSettings] =
    useState("");
  //
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [deleteEmail, setDeleteEmail] = useState(false);
  const [deleteEmailData, setDeleteEmailData] = useState("");

  const [notificationSettings, setNotificationSettings] = useState("");
  const [pushNotificationSetting, setPushNotificationSetting] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [SpiceLevel, setSpiceLevel] = useState("");
  const [Special, setSpecial] = useState("");
  const [dashBoardDetails, setDashBoardDetails] = useState("");
  const [emailList, setEmailList] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      DashBoardDetails();
      return () => DashBoardDetails();
    }, [])
  );
  const _handleEmailNotificationSettings = () => {
    setEmailNotificationSettings(!emailNotificationSettings);
  };
  const OnpressRegion = () => {
    setModalVisible(true);
  };
  const modalShareFalse = () => {
    SetfilterCountry(CountryData);
    setModalVisible(false);
  };
  const OnpressCountry = (item) => {
    SetSelectedCountry(item.name);
    SetSelectedCountryFlag(item.flag);
    SetSelectedCode(item.dial_code);
    setModalVisible(false);
    SetfilterCountry(CountryData);
  };
  const SearchCountry = (searchKey) => {
    const lowerCased = searchKey.toLowerCase();
    let list = CountryData.filter((data) =>
      data.name.toLowerCase().includes(lowerCased)
    );
    SetfilterCountry(list.length > 0 ? list : CountryData);
  };
  const _handleOtpVerify = async () => {
    setVisible(true);
    confirm
      .confirm(otp)
      .then((user) => {
        addPhoneInDatabse(user.user._user.phoneNumber);
        setVisible(false);
      })
      .catch((error) => {
        setVisible(false);
        setVisibleErr(true);
        setErrorMessage(error.message);
      });
  };
  const addPhoneInDatabse = async (mobile_number) => {
    try {
      const params = {
        mobile_number: mobile_number,
      };
      setVisible(true);
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.ADD_PHONE_NUMBER,
        params
      );
      if (data.status === 200) {
        DashBoardDetails();
        setConfirm("");
        setSuccessMessage(data.message);
        setVisibleSuccess(true);
        setVisible(false);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  function validationFormPhone() {
    if (dashBoardDetails.mobile == "" || dashBoardDetails.mobile == null) {
      setErrorMessage("Please enter Phone Number");
      setVisibleErr(true);
      return false;
    }
    if (dashBoardDetails.mobile.length < 10) {
      setErrorMessage("Please enter correct Phone Number");
      setVisibleErr(true);
      return false;
    }
    if (SelectedCode == "") {
      setErrorMessage("Please Select Country Code");
      setVisibleErr(true);
      return false;
    }
    return true;
  }
  const onPressSavePhone = async () => {
    const valid = validationFormPhone();
    if (valid) {
      try {
        setVisible(true);
        const params = {
          mobile_number: dashBoardDetails.mobile,
        };
        const { data } = await apiCall(
          "POST",
          ENDPOINTS.CHECK_NUMBER_FOR_NOTIFICATION,
          params
        );
        if (data.status === 200) {
          await auth()
            .signInWithPhoneNumber(SelectedCode + params.mobile_number)
            .then((abc) => {
              setConfirm(abc);
              setVisible(false);
            })
            .catch((error) => {
              setVisible(false);
              setVisibleErr(true);
              setErrorMessage(error.message);
            });
          setVisible(false);
        } else {
          setErrorMessage(data.message);
          setVisibleErr(true);
          setVisible(false);
        }
      } catch (error) {
        setErrorMessage(error.message);
        setVisibleErr(true);
        setVisible(false);
      }
    }
  };
  const DashBoardDetails = async () => {
    try {
      setVisible(true);
      const { data } = await apiCall("POST", ENDPOINTS.DASHBOARD_DETAILS);
      if (data.status === 200) {
        setDashBoardDetails(data.data);
        setEmailList(data.data.user_email);
        if (data.data.mobile) {
          let code = data.data.mobile.substring(
            0,
            data.data.mobile.length - 10
          );
          CountryData.map((item) => {
            if (code === item.dial_code) {
              SetSelectedCountry(item.name);
              SetSelectedCode(item.dial_code);
              SetSelectedCountryFlag(item.flag);
            }
          });
        }
        if (data.data.notification_setting) {
          setNotificationSettings(data.data.notification_setting);
        }
        if (data.data.push_notification_setting) {
          setPushNotificationSetting(data.data.push_notification_setting);
        }
        setVisible(false);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const onPressAddEmail = () => {
    navigation.navigate("AddEmail");
  };

  const onPressDeleteEmail2 = async (item) => {
    setVisible(true);
    setDeleteEmail(false);
    try {
      const params = {
        type: 2,
        email_id: item.email_id,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.DELETE_EMAIL_LOCATION,
        params
      );
      if (data.status === 200) {
        DashBoardDetails();
        setVisibleSuccess(true);
        setDeleteEmailData("");
        setSuccessMessage(data.message);
        setVisible(false);
      } else {
        setDeleteEmailData("");
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setDeleteEmailData("");
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  const apiCallUpdateNotification = async (params) => {
    try {
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.USER_NOTIFICATION_SETTING,
        params
      );
      if (data.status === 200) {
        DashBoardDetails();
        setSuccessMessage(data.message);
        setVisibleSuccess(true);
        setVisible(false);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const updateNotification = async () => {
    setVisible(true);
    try {
      const params = {
        friends_request: notificationSettings.friends_request == 1 ? 1 : 0,
        new_followers: notificationSettings.new_followers == 1 ? 1 : 0,
        compliment_and_direct_message:
          notificationSettings.compliment_and_direct_message == 1 ? 1 : 0,
        message_from_business_owners:
          notificationSettings.message_from_business_owners == 1 ? 1 : 0,
        your_business_info_edits:
          notificationSettings.your_business_info_edits == 1 ? 1 : 0,
        cash_back_updates: notificationSettings.cash_back_updates == 1 ? 1 : 0,
        contributions: notificationSettings.contributions == 1 ? 1 : 0,
        business_you_might_like:
          notificationSettings.business_you_might_like == 1 ? 1 : 0,
        abbypages_tips_and_tricks:
          notificationSettings.abbypages_tips_and_tricks == 1 ? 1 : 0,
        suggested_business_to_review:
          notificationSettings.suggested_business_to_review == 1 ? 1 : 0,
        discounts_and_promotions:
          notificationSettings.discounts_and_promotions == 1 ? 1 : 0,
        restaurants_news: notificationSettings.restaurants_news == 1 ? 1 : 0,
        new_questions_you_can_answer:
          notificationSettings.new_questions_you_can_answer == 1 ? 1 : 0,
        surveys: notificationSettings.surveys == 1 ? 1 : 0,
        neighbourhoods: notificationSettings.neighbourhoods == 1 ? 1 : 0,
        by_friends_in_your_city:
          pushNotificationSetting.by_friends_in_your_city == 1 ? 1 : 0,
        by_friends_in_your_city:
          pushNotificationSetting.by_friends_in_your_city == 1 ? 1 : 0,
        review_votes: pushNotificationSetting.review_votes == 1 ? 1 : 0,
        check_in_comments:
          pushNotificationSetting.check_in_comments == 1 ? 1 : 0,
        check_in_likes: pushNotificationSetting.check_in_likes == 1 ? 1 : 0,
        tip_likes: pushNotificationSetting.tip_likes == 1 ? 1 : 0,
        photo_and_videos_likes:
          pushNotificationSetting.photo_and_videos_likes == 1 ? 1 : 0,
        compliments: pushNotificationSetting.compliments == 1 ? 1 : 0,
        direct_messages: pushNotificationSetting.direct_messages == 1 ? 1 : 0,
        helpful_answers: pushNotificationSetting.helpful_answers == 1 ? 1 : 0,
        review_comments: pushNotificationSetting.review_comments == 1 ? 1 : 0,
        deals_and_announcements:
          pushNotificationSetting.deals_and_announcements == 1 ? 1 : 0,
        push_business_you_might_like:
          pushNotificationSetting.push_business_you_might_like == 1 ? 1 : 0,
        push_suggested_business_to_review:
          pushNotificationSetting.push_suggested_business_to_review == 1
            ? 1
            : 0,
        case_back_updates:
          pushNotificationSetting.case_back_updates == 1 ? 1 : 0,
        updates_on_your_views:
          pushNotificationSetting.updates_on_your_views == 1 ? 1 : 0,
        push_surveys: pushNotificationSetting.push_surveys == 1 ? 1 : 0,
        collections_updates:
          pushNotificationSetting.collections_updates == 1 ? 1 : 0,
        business_you_hired:
          pushNotificationSetting?.business_you_hired == 1 ? 1 : 0,
        push_neighborhoods:
          pushNotificationSetting.push_neighborhoods == 1 ? 1 : 0,
        order_and_purchase_updates:
          pushNotificationSetting.order_and_purchase_updates == 1 ? 1 : 0,
        waitlist_updates: pushNotificationSetting.waitlist_updates == 1 ? 1 : 0,
      };
      apiCallUpdateNotification(params);
    } catch (error) {
      setErrorMessage(error);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const onPressCancel = () => {
    navigation.navigate("ProfileSetting");
  };
  const onPressPrimaryEmail = async (email_id) => {
    try {
      setVisible(true);
      const params = {
        email_id: email_id,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.CHANGE_PRIMARY_EMAIL,
        params
      );
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
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const handleNotification = (item, pressItem) => {
    switch (pressItem) {
      case "friends_request":
        setNotificationSettings({
          ...notificationSettings,
          friends_request: item == 0 ? 1 : 0,
        });
        break;
      case "new_followers":
        setNotificationSettings({
          ...notificationSettings,
          new_followers: item == 0 ? 1 : 0,
        });
        break;
      case "compliment_and_direct_message":
        setNotificationSettings({
          ...notificationSettings,
          compliment_and_direct_message: item == 0 ? 1 : 0,
        });
        break;
      case "message_from_business_owners":
        setNotificationSettings({
          ...notificationSettings,
          message_from_business_owners: item == 0 ? 1 : 0,
        });
        break;
      case "your_business_info_edits":
        setNotificationSettings({
          ...notificationSettings,
          your_business_info_edits: item == 0 ? 1 : 0,
        });
        break;
      case "cash_back_updates":
        setNotificationSettings({
          ...notificationSettings,
          cash_back_updates: item == 0 ? 1 : 0,
        });
        break;
      case "cash_back_updates":
        setNotificationSettings({
          ...notificationSettings,
          cash_back_updates: item == 0 ? 1 : 0,
        });
        break;
      case "contributions":
        setNotificationSettings({
          ...notificationSettings,
          contributions: item == 0 ? 1 : 0,
        });
        break;
      case "business_you_might_like":
        setNotificationSettings({
          ...notificationSettings,
          business_you_might_like: item == 0 ? 1 : 0,
        });
        break;
      case "abbypages_tips_and_tricks":
        setNotificationSettings({
          ...notificationSettings,
          abbypages_tips_and_tricks: item == 0 ? 1 : 0,
        });
        break;
      case "suggested_business_to_review":
        setNotificationSettings({
          ...notificationSettings,
          suggested_business_to_review: item == 0 ? 1 : 0,
        });
        break;
      case "discounts_and_promotions":
        setNotificationSettings({
          ...notificationSettings,
          discounts_and_promotions: item == 0 ? 1 : 0,
        });
        break;
      case "restaurants_news":
        setNotificationSettings({
          ...notificationSettings,
          restaurants_news: item == 0 ? 1 : 0,
        });
        break;
      case "new_questions_you_can_answer":
        setNotificationSettings({
          ...notificationSettings,
          new_questions_you_can_answer: item == 0 ? 1 : 0,
        });
        break;
      case "surveys":
        setNotificationSettings({
          ...notificationSettings,
          surveys: item == 0 ? 1 : 0,
        });
        break;
      case "neighbourhoods":
        setNotificationSettings({
          ...notificationSettings,
          neighbourhoods: item == 0 ? 1 : 0,
        });
        break;
    }
  };

  const handlePushNotification = (item, pressItem) => {
    switch (pressItem) {
      case "by_friends_in_your_city":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          by_friends_in_your_city: item == 0 ? 1 : 0,
        });
        break;
      case "by_friends_in_all_cities":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          by_friends_in_all_cities: item == 0 ? 1 : 0,
        });
        break;
      case "review_votes":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          review_votes: item == 0 ? 1 : 0,
        });
        break;
      case "check_in_comments":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          check_in_comments: item == 0 ? 1 : 0,
        });
        break;
      case "check_in_likes":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          check_in_likes: item == 0 ? 1 : 0,
        });
        break;
      case "tip_likes":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          tip_likes: item == 0 ? 1 : 0,
        });
        break;
      case "photo_and_videos_likes":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          photo_and_videos_likes: item == 0 ? 1 : 0,
        });
        break;
      case "compliments":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          compliments: item == 0 ? 1 : 0,
        });
        break;
      case "direct_messages":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          direct_messages: item == 0 ? 1 : 0,
        });
        break;
      case "helpful_answers":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          helpful_answers: item == 0 ? 1 : 0,
        });
        break;
      case "review_comments":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          review_comments: item == 0 ? 1 : 0,
        });
        break;
      case "deals_and_announcements":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          deals_and_announcements: item == 0 ? 1 : 0,
        });
        break;
      case "push_business_you_might_like":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          push_business_you_might_like: item == 0 ? 1 : 0,
        });
        break;
      case "push_suggested_business_to_review":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          push_suggested_business_to_review: item == 0 ? 1 : 0,
        });
        break;
      case "case_back_updates":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          case_back_updates: item == 0 ? 1 : 0,
        });
        break;
      case "updates_on_your_views":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          updates_on_your_views: item == 0 ? 1 : 0,
        });
        break;
      case "push_surveys":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          push_surveys: item == 0 ? 1 : 0,
        });
        break;
      case "collections_updates":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          collections_updates: item == 0 ? 1 : 0,
        });
        break;
      case "business_you_hired":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          business_you_hired: item == 0 ? 1 : 0,
        });
        break;
      case "push_neighborhoods":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          push_neighborhoods: item == 0 ? 1 : 0,
        });
        break;
      case "order_and_purchase_updates":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          order_and_purchase_updates: item == 0 ? 1 : 0,
        });
        break;
      case "waitlist_updates":
        setPushNotificationSetting({
          ...pushNotificationSetting,
          waitlist_updates: item == 0 ? 1 : 0,
        });
        break;
    }
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <NotificationSettings
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
        handlePushNotification={handlePushNotification}
        onPressPrimaryEmail={onPressPrimaryEmail}
        onPressSavePhone={onPressSavePhone}
        setDeleteEmail={setDeleteEmail}
        setDeleteEmailData={setDeleteEmailData}
        onPressCancel={onPressCancel}
        emailList={emailList}
        onPressAddEmail={onPressAddEmail}
        Quantity={Quantity}
        SpiceLevel={SpiceLevel}
        Special={Special}
        setQuantity={setQuantity}
        setSpiceLevel={setSpiceLevel}
        setSpecial={setSpecial}
        emailNotificationSettings={emailNotificationSettings}
        notificationSettings={notificationSettings}
        pushNotificationSetting={pushNotificationSetting}
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
      <QuestionModal
        message={"Are you sure you want to delete Email"}
        surringVisible={deleteEmail}
        positiveResponse={() => onPressDeleteEmail2(deleteEmailData)}
        negativeResponse={() => {
          setDeleteEmail(false);
          setDeleteEmailData("");
        }}
      />
    </View>
  );
};
export default NotificationSettingsView;
