import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
  FlatList,
  Platform,
} from "react-native";
import OTPTextView from "react-native-otp-textinput";
import styles from "./styles";
import Input from "../../../../../Components/Input";
import Button from "../../../../../Components/Button";
import CommonStyles from "../../../../../Utils/CommonStyles";
import { FONT_SIZE, COLORS, FONT_FAMILY } from "../../../../../Utils/Constant";
import { Images } from "../../../../../Utils/images";
import MainInput from "../../../../../Components/MainInput";
import MainHeader from "../../../../../Components/MainHeader";
import ScaleText from "../../../../../Components/ScaleText";
import { ICON_TYPE, IconX } from "../../../../../Components/Icons/Icon";
import PageScroll from "../../../../../Components/PageScroll";
const NotificationSettings = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
      <MainHeader
        headerText={"Email / Notification Settings"}
        fontSize={FONT_SIZE.medium}
        notifyIcon={false}
      />
      <View style={[CommonStyles.body]}>
        <PageScroll>
          <View style={[styles.EmailContainer, { paddingBottom: 10 }]}>
            <View style={styles.FlexViewContain}>
              <View style={{ flex: 5 }}>
                <ScaleText style={styles.EmailNotifyTxt}>
                  Email Notifications
                </ScaleText>
                <ScaleText style={styles.AddAccountTxt}>
                  Add accounts, remove accounts, and change your primary account
                </ScaleText>
              </View>
              <TouchableOpacity
                onPress={() => props.onPressAddEmail()}
                style={styles.AddLocationView}
              >
                <Image
                  style={{ width: 36, height: 36 }}
                  source={Images.THEME_ADD_IMG}
                />
              </TouchableOpacity>
            </View>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={props.emailList}
              renderItem={({ item, index }) => (
                <View style={styles.EmailContainerBox}>
                  <ScaleText style={styles.MainEmaliTXt}>
                    {item.email}
                  </ScaleText>
                  {item.primary_status === 1 && (
                    <ScaleText style={styles.PrimaryText}>
                      Primary account
                    </ScaleText>
                  )}
                  {item.primary_status !== 1 && (
                    <View style={styles.addressOptionVw}>
                      <TouchableOpacity
                        onPress={() => props.onPressPrimaryEmail(item.email_id)}
                        style={[styles.ImageDelete]}
                      >
                        <IconX
                          origin={ICON_TYPE.FONT_AWESOME5}
                          name={"crown"}
                          size={15}
                          color={COLORS.BLACK}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.ImageDelete}
                        onPress={() => {
                          props.setDeleteEmail(true);
                          props.setDeleteEmailData(item);
                        }}
                      >
                        <IconX
                          origin={ICON_TYPE.MATERIAL_ICONS}
                          name={"delete"}
                          size={20}
                          color={COLORS.BLACK}
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              )}
            />
          </View>
          <View style={styles.PhoneNumberContain}>
            <View style={styles.PhoneDescrptnView}>
              <ScaleText
                style={[styles.EmailNotifyTxt, { color: COLORS.BLACK }]}
              >
                Phone Number
              </ScaleText>
              <ScaleText style={styles.PhoneDescrptnText}>
                Add or edit your number. We'll automatically enter It when you
                request a quote, make restaurant reservations, order food
                delivery, or make other transactions on AbbyPages
              </ScaleText>
            </View>
            {props.confirm === "" ? (
              <>
                <TouchableOpacity
                  onPress={() => props.OnpressRegion()}
                  style={[
                    styles.EmailContainerBox,
                    {
                      flexDirection: "row",
                      marginLeft: 15,
                      marginRight: 15,
                      paddingBottom: props.selectedCountry ? 5 : 10,
                      paddingTop: props.selectedCountry ? 5 : 10,
                    },
                  ]}
                >
                  {props.selectedCountry ? (
                    <View style={styles.MainTextViewCountry}>
                      <ScaleText style={styles.CountryflgTxt}>
                        {props.selectedCountryFlag}
                      </ScaleText>
                      <ScaleText style={styles.RegionTextMain}>
                        {props.SelectedCode}
                      </ScaleText>
                      <ScaleText
                        numberOfLines={1}
                        style={styles.RegionTextMain}
                      >
                        {props.selectedCountry}
                      </ScaleText>
                    </View>
                  ) : (
                    <View style={{ flex: 5.5 }}>
                      <ScaleText style={{ fontFamily: FONT_FAMILY.REGULAR }}>
                        Region
                      </ScaleText>
                    </View>
                  )}
                  <TouchableOpacity
                    onPress={() => props.OnpressRegion()}
                    style={{
                      flex: 0.5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image source={Images.ARROW_RIGHT_IMG} />
                  </TouchableOpacity>
                </TouchableOpacity>
                <Input
                  onChangeText={(phone) =>
                    props.setDashBoardDetails({
                      ...props.dashBoardDetails,
                      mobile: phone,
                    })
                  }
                  value={props?.dashBoardDetails?.mobile?.slice(-10)}
                  secureTextEntry={false}
                  placeholder="Phone Number"
                  InputType="withScroll"
                  keyboardType="phone-pad"
                />
                <Button
                  onPress={() => props.onPressSavePhone()}
                  buttonText="Save Phone Number"
                  style={{ marginTop: 5 }}
                  paddingHeight={10}
                />
              </>
            ) : (
              <>
                <OTPTextView
                  handleTextChange={(val) => props.setOtp(val)}
                  tintColor={COLORS.YELLOW}
                  containerStyle={{ alignSelf: "center" }}
                  textInputStyle={{
                    borderWidth: 2,
                    color: COLORS.BLACK,
                    fontFamily: FONT_FAMILY.REGULAR,
                    borderBottomWidth: 2,
                  }}
                  inputCount={6}
                  inputCellLength={1}
                />
                <Button
                  buttonText="Confirm"
                  buttonLabelStyle={styles.logtxt}
                  onPress={() => props._handleOtpVerify()}
                  paddingHeight={10}
                />
              </>
            )}
          </View>
          <View style={[styles.PhoneNumberContain, { padding: 15 }]}>
            <ScaleText style={styles.EmalNotifyText}>
              Email Notifications Settings
            </ScaleText>
            <ScaleText style={styles.PhoneDescrptnText}>
              Manage what emaiLs are sent to your primary email
            </ScaleText>
            <View style={styles.ReceiveEmailView}>
              <TouchableOpacity
                style={{}}
                onPress={() => props._handleEmailNotificationSettings()}
              >
                <Image
                  style={{ marginTop: 5 }}
                  source={
                    props.emailNotificationSettings
                      ? Images.CHECK_IMG
                      : Images.UNCHECK_IMG
                  }
                />
              </TouchableOpacity>
              <View style={styles.ReceiveContain}>
                <ScaleText style={styles.ReceiveEmailText}>
                  Receive emails from AbbyPages
                </ScaleText>
                <ScaleText style={styles.NOteTextStyle}>
                  Note: you will still receive certain legal, transcational or
                  administrative emails.
                </ScaleText>
              </View>
            </View>
            <View style={{ paddingTop: 20 }}>
              <ScaleText style={styles.GetEmailText}>
                Get email updates about:
              </ScaleText>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handleNotification(
                      props?.notificationSettings?.friends_request,
                      "friends_request"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.notificationSettings?.friends_request === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Friend requests
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handleNotification(
                      props?.notificationSettings?.new_followers,
                      "new_followers"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.notificationSettings?.new_followers === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  New Followers
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handleNotification(
                      props?.notificationSettings
                        ?.compliment_and_direct_message,
                      "compliment_and_direct_message"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.notificationSettings
                    ?.compliment_and_direct_message === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Compliments and direct messages
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handleNotification(
                      props?.notificationSettings?.message_from_business_owners,
                      "message_from_business_owners"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.notificationSettings?.message_from_business_owners ===
                  1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Message from business owners
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handleNotification(
                      props?.notificationSettings?.your_business_info_edits,
                      "your_business_info_edits"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.notificationSettings?.your_business_info_edits ===
                  1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Status of your business info edits
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handleNotification(
                      props?.notificationSettings?.cash_back_updates,
                      "cash_back_updates"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.notificationSettings?.cash_back_updates === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Cash back updates
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handleNotification(
                      props?.notificationSettings?.contributions,
                      "contributions"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.notificationSettings.contributions === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Contributions
                </ScaleText>
              </View>
            </View>
            <View style={{ paddingTop: 20 }}>
              <ScaleText style={styles.GetEmailText}>
                We'll also let you know about:
              </ScaleText>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handleNotification(
                      props.notificationSettings?.business_you_might_like,
                      "business_you_might_like"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props.notificationSettings?.business_you_might_like === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Businesses you might like
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handleNotification(
                      props.notificationSettings?.abbypages_tips_and_tricks,
                      "abbypages_tips_and_tricks"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props.notificationSettings?.abbypages_tips_and_tricks ===
                  1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  AbbyPages tips and tricks
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handleNotification(
                      props.notificationSettings?.suggested_business_to_review,
                      "suggested_business_to_review"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props.notificationSettings?.suggested_business_to_review ===
                  1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Suggested businesses to review
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handleNotification(
                      props?.notificationSettings.discounts_and_promotions,
                      "discounts_and_promotions"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.notificationSettings?.discounts_and_promotions ===
                  1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Discounts and promotions
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handleNotification(
                      props?.notificationSettings?.restaurants_news,
                      "restaurants_news"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.notificationSettings?.restaurants_news === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Restaurants news
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handleNotification(
                      props?.notificationSettings?.new_questions_you_can_answer,
                      "new_questions_you_can_answer"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.notificationSettings?.new_questions_you_can_answer ===
                  1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  New questions you can answer
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handleNotification(
                      props?.notificationSettings?.surveys,
                      "surveys"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.notificationSettings?.surveys === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>Surveys</ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handleNotification(
                      props?.notificationSettings?.neighbourhoods,
                      "neighbourhoods"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.notificationSettings?.neighbourhoods === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Neighborhoods
                </ScaleText>
              </View>
            </View>
          </View>
          {/* <Image style={{ marginTop: 5 }} source={Images.UNCHECK_IMG} /> */}
          <View style={[styles.PhoneNumberContain, { padding: 15 }]}>
            <ScaleText style={styles.EmalNotifyText}>
              Push Notifications Settings
            </ScaleText>
            <ScaleText style={[styles.PhoneDescrptnText]}>
              Receive push notifications to mobile devices that are connected
              you Abby account
            </ScaleText>
            <ScaleText style={[styles.GetEmailText, { paddingTop: 10 }]}>
              Friend activity
            </ScaleText>
            <View style={[styles.ReceiveEmailView, { paddingTop: 5 }]}>
              <View style={styles.ReceiveContain}>
                <ScaleText style={styles.ReceiveEmailText}>
                  Check-ins(anyone)
                </ScaleText>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity
                    onPress={() =>
                      props.handlePushNotification(
                        props?.pushNotificationSetting?.by_friends_in_your_city,
                        "by_friends_in_your_city"
                      )
                    }
                    style={styles.MainGetEmailView}
                  >
                    {props?.pushNotificationSetting?.by_friends_in_your_city ===
                    1 ? (
                      <Image source={Images.CHECK_IMG} />
                    ) : (
                      <Image source={Images.UNCHECK_IMG} />
                    )}
                  </TouchableOpacity>
                  <ScaleText
                    style={[
                      styles.NOteTextStyle,
                      { width: "100%", lineHeight: 25, paddingLeft: 5 },
                    ]}
                  >
                    By friends in your city
                  </ScaleText>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity
                    onPress={() =>
                      props.handlePushNotification(
                        props?.pushNotificationSetting
                          ?.by_friends_in_all_cities,
                        "by_friends_in_all_cities"
                      )
                    }
                    style={styles.MainGetEmailView}
                  >
                    {props?.pushNotificationSetting
                      ?.by_friends_in_all_cities === 1 ? (
                      <Image source={Images.CHECK_IMG} />
                    ) : (
                      <Image source={Images.UNCHECK_IMG} />
                    )}
                  </TouchableOpacity>
                  <ScaleText
                    style={[
                      styles.NOteTextStyle,
                      { width: "100%", lineHeight: 25, paddingLeft: 5 },
                    ]}
                  >
                    By friends in all cities
                  </ScaleText>
                </View>
              </View>
            </View>
            <View style={{ paddingTop: 20 }}>
              <ScaleText style={styles.GetEmailText}>
                Reactions to your posts
              </ScaleText>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handlePushNotification(
                      props?.pushNotificationSetting?.review_votes,
                      "review_votes"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.pushNotificationSetting?.review_votes === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Review votes
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handlePushNotification(
                      props?.pushNotificationSetting?.check_in_comments,
                      "check_in_comments"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.pushNotificationSetting?.check_in_comments === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Check-in comments
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handlePushNotification(
                      props?.pushNotificationSetting?.check_in_likes,
                      "check_in_likes"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.pushNotificationSetting?.check_in_likes === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Check-in likes
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handlePushNotification(
                      props?.pushNotificationSetting?.tip_likes,
                      "tip_likes"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.pushNotificationSetting?.tip_likes === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>Tip likes</ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handlePushNotification(
                      props?.pushNotificationSetting?.photo_and_videos_likes,
                      "photo_and_videos_likes"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.pushNotificationSetting?.photo_and_videos_likes ===
                  1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Photos and videos Likes
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handlePushNotification(
                      props?.pushNotificationSetting?.compliments,
                      "compliments"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.pushNotificationSetting?.compliments === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Compliments
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handlePushNotification(
                      props?.pushNotificationSetting?.direct_messages,
                      "direct_messages"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.pushNotificationSetting?.direct_messages === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Direct messages
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handlePushNotification(
                      props?.pushNotificationSetting?.helpful_answers,
                      "helpful_answers"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.pushNotificationSetting?.helpful_answers === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Helpful answers
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handlePushNotification(
                      props?.pushNotificationSetting?.review_comments,
                      "review_comments"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.pushNotificationSetting?.review_comments === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Review comments{" "}
                </ScaleText>
              </View>
            </View>
            <View style={{ paddingTop: 20 }}>
              <ScaleText style={styles.GetEmailText}>From AbbyPages</ScaleText>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handlePushNotification(
                      props?.pushNotificationSetting?.deals_and_announcements,
                      "deals_and_announcements"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.pushNotificationSetting?.deals_and_announcements ===
                  1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Deals and announcements
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handlePushNotification(
                      props?.pushNotificationSetting
                        ?.push_business_you_might_like,
                      "push_business_you_might_like"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.pushNotificationSetting
                    ?.push_business_you_might_like === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Businesses you might like
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handlePushNotification(
                      props?.pushNotificationSetting
                        ?.push_suggested_business_to_review,
                      "push_suggested_business_to_review"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.pushNotificationSetting
                    ?.push_suggested_business_to_review === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Suggested businessses to review
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handlePushNotification(
                      props?.pushNotificationSetting?.case_back_updates,
                      "case_back_updates"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.pushNotificationSetting?.case_back_updates === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Cash back updates
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handlePushNotification(
                      props?.pushNotificationSetting?.updates_on_your_views,
                      "updates_on_your_views"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.pushNotificationSetting?.updates_on_your_views ===
                  1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Updates on your views
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handlePushNotification(
                      props?.pushNotificationSetting?.push_surveys,
                      "push_surveys"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.pushNotificationSetting?.push_surveys === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>Surveys</ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handlePushNotification(
                      props?.pushNotificationSetting?.collections_updates,
                      "collections_updates"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.pushNotificationSetting?.collections_updates === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Collections updates
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handlePushNotification(
                      props?.pushNotificationSetting?.business_you_hired,
                      "business_you_hired"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.pushNotificationSetting?.business_you_hired === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Business you hired
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handlePushNotification(
                      props?.pushNotificationSetting?.push_neighborhoods,
                      "push_neighborhoods"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.pushNotificationSetting?.push_neighborhoods === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Neighborhoods
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handlePushNotification(
                      props?.pushNotificationSetting
                        ?.order_and_purchase_updates,
                      "order_and_purchase_updates"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.pushNotificationSetting
                    ?.order_and_purchase_updates === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Order and purchase updates
                </ScaleText>
              </View>
              <View style={styles.MainGetEmailView}>
                <TouchableOpacity
                  onPress={() =>
                    props.handlePushNotification(
                      props?.pushNotificationSetting?.waitlist_updates,
                      "waitlist_updates"
                    )
                  }
                  style={styles.MainGetEmailView}
                >
                  {props?.pushNotificationSetting?.waitlist_updates === 1 ? (
                    <Image source={Images.CHECK_IMG} />
                  ) : (
                    <Image source={Images.UNCHECK_IMG} />
                  )}
                </TouchableOpacity>
                <ScaleText style={styles.GetEmailOptnTxt}>
                  Waitlist updates
                </ScaleText>
              </View>
            </View>
          </View>
          <Button
            buttonText="Save Notifications Settings"
            style={{ marginTop: 5, marginTop: 10 }}
            onPress={() => props.updateNotification()}
            paddingHeight={10}
          />
          <Button
            buttonText="Cancel"
            buttonLabelStyle={{ color: COLORS.WHITE }}
            onPress={() => props.onPressCancel()}
            style={{
              marginTop: 5,
              backgroundColor: COLORS.GREY,
              marginTop: 10,
              marginBottom: 10,
            }}
            paddingHeight={10}
          />
        </PageScroll>
      </View>
      <Modal
        animationType="fade"
        hardwareAccelerated={true}
        transparent={true}
        visible={props.ModalVisible}
        onRequestClose={() => {
          props.setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <TouchableOpacity
              style={styles.TouchableFlse}
              onPress={() => props.modalShareFalse()}
            >
              <Image source={Images.CANCEL_IMG} />
            </TouchableOpacity> */}
            <MainHeader
              headerText={"Country Region"}
              fontSize={FONT_SIZE.medium}
              notifyIcon={false}
              TxtMarginRight={"7%"}
              onPressBack={() => props.modalShareFalse()}
            />
            <View style={{ marginHorizontal: 20 }}>
              <MainInput
                onChangeText={(text) => props.SearchCountry(text)}
                placeholder="Search"
                value={props.searchFeildKey}
                marginTop={20}
                height={50}
              />
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              data={props.filterCountry}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  key={index}
                  style={styles.MainCntrySlctTouchble}
                  onPress={() => props.OnpressCountry(item)}
                >
                  <ScaleText style={{ fontSize: 25 }}>{item.flag}</ScaleText>
                  <ScaleText style={styles.CountryText}>
                    {item.dial_code}
                  </ScaleText>
                  <ScaleText style={styles.CountryText}>{item.name}</ScaleText>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};
export default NotificationSettings;
