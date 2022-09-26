import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import Button from "../../../Components/Button";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import { TouchableOpacity } from "react-native-gesture-handler";
const UserProfile = (props) => {
  return (
    <KeyboardAvoidingView style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        HeaderText={"Profile"}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <ScrollView>
          <View style={styles.EmailContainer}>
            <View style={styles.FlexViewContain}>
              <View>
                <Text style={styles.EmailNotifyTxt}>Your Profile</Text>
                <Text style={styles.AddAccountTxt}>
                  Manage the visibility of your profile.
                </Text>
              </View>
            </View>
            <View style={{ paddingTop: 15 }}>
              <Text style={styles.EmalNotifyText}>Find Friends</Text>
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
                    props.findFriends
                      ? require("../../../Assets/checked_squared_icon_small.png")
                      : require("../../../Assets/unchecked_squared_icon_small.png")
                  }
                />
              </TouchableOpacity>
              <View style={styles.ReceiveContain}>
                <Text style={styles.ReceiveEmailText}>
                  Let others find my profile using my name or email address
                </Text>
                <Text style={styles.NOteTextStyle}>
                  users added as friends can always find a profile.
                </Text>
              </View>
            </View>
            <View style={{ paddingTop: 15 }}>
              <Text style={styles.EmalNotifyText}>Bookmarks</Text>
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
                    props.bookmarks
                      ? require("../../../Assets/checked_squared_icon_small.png")
                      : require("../../../Assets/unchecked_squared_icon_small.png")
                  }
                />
              </TouchableOpacity>
              <View style={styles.ReceiveContain}>
                <Text style={[styles.ReceiveEmailText, { width: "100%" }]}>
                  Make my bookmarks public
                </Text>
              </View>
            </View>
            <View style={{ paddingTop: 15 }}>
              <Text style={styles.EmalNotifyText}>
                Direct Messages from Bussinesses
              </Text>
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
                      ? require("../../../Assets/checked_squared_icon_small.png")
                      : require("../../../Assets/unchecked_squared_icon_small.png")
                  }
                />
              </TouchableOpacity>
              <View style={styles.ReceiveContain}>
                <Text style={styles.ReceiveEmailText}>
                  Allow business owners to send you direct messages in response
                  to your review
                </Text>
              </View>
            </View>
            <View style={{ paddingTop: 15 }}>
              <Text style={styles.EmalNotifyText}>Ads Displayed Elsewhere</Text>
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
                      ? require("../../../Assets/checked_squared_icon_small.png")
                      : require("../../../Assets/unchecked_squared_icon_small.png")
                  }
                />
              </TouchableOpacity>
              <View style={styles.ReceiveContain}>
                <Text style={[styles.ReceiveEmailText]}>
                  Allow AbbyPages to target ads on other sites and apps based on
                  your use of AbbyPages
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.PhoneNumberContain}>
            <View style={styles.PhoneDescrptnView}>
              <Text
                style={[styles.EmailNotifyTxt, { color: BLACK_COLOR_CODE }]}
              >
                Business Visibility Settings
              </Text>
              <Text style={styles.PhoneDescrptnText}>
                Manage what a business sees when you interact with its AbbyPages
                Listing
              </Text>
              <View style={{ paddingTop: 15 }}>
                <Text style={styles.PhoneDescrptnText}>
                  These settings govern how businesses will see actuione you
                  take through abbyPeges, such as, mobile calls. directions
                  requests, men view, and visite to a business's webs.. The
                  date, time, and whetter you. accessing AbbyPages vie web or
                  mobile device are always shown.
                </Text>
              </View>
              <View style={{ paddingTop: 15 }}>
                <Text style={styles.PhoneDescrptnText}>
                  Businesses can always see your public contributions (Like
                  reviews and photos), and information about your transactions
                  with them through AbbyPages.
                </Text>
              </View>
            </View>
          </View>
          <Button buttonText="Save Settings" style={styles.SaveBtnsTYLE} />
          <Button
            buttonText="Cancel"
            buttonLabelStyle={styles.CancelBtnTxt}
            style={styles.CancelBtnStyle}
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default UserProfile;
