import React from "react";
import {
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./styles";
import Button from "../../../../../Components/Button";
import CommonStyles from "../../../../../Utils/CommonStyles";
import { COLORS } from "../../../../../Utils/Constant";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Images } from "../../../../../Utils/images";
import Header from "../../../../../Components/Header";
import ScaleText from "../../../../../Components/ScaleText";
import MainHeader from "../../../../../Components/MainHeader";
const UserProfile = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
      <MainHeader
        headerText={"Settings"}
        isSearch={false}
        loginButton={false}
        TxtMarginRight={"5%"}
      />
      <View style={[CommonStyles.body]}>
        <ScrollView>
          <View style={styles.EmailContainer}>
            <View style={styles.FlexViewContain}>
              <View>
                <ScaleText style={styles.EmailNotifyTxt}>
                  Your Profile
                </ScaleText>
                <ScaleText style={styles.AddAccountTxt}>
                  Manage the visibility of your profile.
                </ScaleText>
              </View>
            </View>
            <View style={{ paddingTop: 15 }}>
              <ScaleText style={styles.EmalNotifyText}>Find Friends</ScaleText>
            </View>
            <View style={styles.ReceiveEmailView}>
              <TouchableOpacity
                onPress={() =>
                  props._handleCheckBox(props.findFriends, props.setFindFriends)
                }
              >
                <Image
                  style={{ marginTop: 5 }}
                  source={
                    props.findFriends ? Images.CHECK_IMG : Images.UNCHECK_IMG
                  }
                />
              </TouchableOpacity>
              <View style={styles.ReceiveContain}>
                <ScaleText style={styles.ReceiveEmailText}>
                  Let others find my profile using my name or email address
                </ScaleText>
                <ScaleText style={styles.NOteTextStyle}>
                  users added as friends can always find a profile.
                </ScaleText>
              </View>
            </View>
            <View style={{ paddingTop: 15 }}>
              <ScaleText style={styles.EmalNotifyText}>Bookmarks</ScaleText>
            </View>
            <View style={styles.ReceiveEmailView}>
              <TouchableOpacity
                onPress={() =>
                  props._handleCheckBox(props.bookmarks, props.setBookmarks)
                }
              >
                <Image
                  style={{ marginTop: 5 }}
                  source={
                    props.bookmarks ? Images.CHECK_IMG : Images.UNCHECK_IMG
                  }
                />
              </TouchableOpacity>
              <View style={styles.ReceiveContain}>
                <ScaleText style={[styles.ReceiveEmailText, { width: "100%" }]}>
                  Make my bookmarks public
                </ScaleText>
              </View>
            </View>
            <View style={{ paddingTop: 15 }}>
              <ScaleText style={styles.EmalNotifyText}>
                Direct Messages from Bussinesses
              </ScaleText>
            </View>
            <View style={styles.ReceiveEmailView}>
              <TouchableOpacity
                onPress={() =>
                  props._handleCheckBox(
                    props.directMessageFromBussiness,
                    props.setDirectMessageFromBussiness
                  )
                }
              >
                <Image
                  style={{ marginTop: 5 }}
                  source={
                    props.directMessageFromBussiness
                      ? Images.CHECK_IMG
                      : Images.UNCHECK_IMG
                  }
                />
              </TouchableOpacity>
              <View style={styles.ReceiveContain}>
                <ScaleText style={styles.ReceiveEmailText}>
                  Allow business owners to send you direct messages in response
                  to your review
                </ScaleText>
              </View>
            </View>
            <View style={{ paddingTop: 15 }}>
              <ScaleText style={styles.EmalNotifyText}>
                Ads Displayed Elsewhere
              </ScaleText>
            </View>
            <View style={styles.ReceiveEmailView}>
              <TouchableOpacity
                onPress={() =>
                  props._handleCheckBox(
                    props.adsDisplayElseWhere,
                    props.setAdsDisplayElseWhere
                  )
                }
              >
                <Image
                  style={{ marginTop: 5 }}
                  source={
                    props.adsDisplayElseWhere
                      ? Images.CHECK_IMG
                      : Images.UNCHECK_IMG
                  }
                />
              </TouchableOpacity>
              <View style={styles.ReceiveContain}>
                <ScaleText style={[styles.ReceiveEmailText]}>
                  Allow AbbyPages to target ads on other sites and apps based on
                  your use of AbbyPages
                </ScaleText>
              </View>
            </View>
          </View>
          <View style={styles.PhoneNumberContain}>
            <View style={styles.PhoneDescrptnView}>
              <ScaleText
                style={[styles.EmailNotifyTxt, { color: COLORS.BLACK }]}
              >
                Business Visibility Settings
              </ScaleText>
              <ScaleText style={styles.PhoneDescrptnText}>
                Manage what a business sees when you interact with its AbbyPages
                Listing
              </ScaleText>
              <View style={{ paddingTop: 15 }}>
                <ScaleText style={styles.PhoneDescrptnText}>
                  These settings govern how businesses will see actuione you
                  take through abbyPeges, such as, mobile calls. directions
                  requests, men view, and visite to a business's webs.. The
                  date, time, and whetter you. accessing AbbyPages vie web or
                  mobile device are always shown.
                </ScaleText>
              </View>
              <View style={{ paddingTop: 15 }}>
                <ScaleText style={styles.PhoneDescrptnText}>
                  Businesses can always see your public contributions (Like
                  reviews and photos), and information about your transactions
                  with them through AbbyPages.
                </ScaleText>
              </View>
            </View>
          </View>
          <Button
            buttonText="Save Settings"
            style={styles.SaveBtnsTYLE}
            paddingHeight={10}
          />
          <Button
            buttonText="Cancel"
            buttonLabelStyle={styles.CancelBtnTxt}
            style={styles.CancelBtnStyle}
            paddingHeight={10}

          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default UserProfile;
