import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import styles from "./styles";
import Header from "../../../Components/Header";
import Button from "../../../Components/Button";
import CommonStyles from "../../../Utils/CommonStyles";
import moment from "moment";
import { WHITE_COLOR_CODE, YELLOW_COLOR_CODE } from "../../../Utils/Constant";
import { Images } from "../../../Utils/images";
const ProfileSettings = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? 'padding' : null}
      style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        leftImg={Images.DRAWER_IMG}
        HeaderText={"Profile Settings"}
        type="Drawer"
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <ScrollView>
          <View style={styles.MainContainer}>
            <TouchableOpacity
              onPress={() => props.onPressProfile()}
              style={styles.container}
            >
              <View style={styles.CameraImgView}>
                <Image
                  style={{ width: 18, height: 18 }}
                  source={Images.PROFILE_IMG}
                />
              </View>
              <View style={styles.TextContainer}>
                <Text style={styles.AddPhotosTxt}>Update Profile</Text>
              </View>
              <View style={styles.BckArrowBack}>
                <Image
                  source={Images.ARROW_RIGHT_IMG}
                />
              </View>
            </TouchableOpacity>
            {props?.userProfileData.signup_mode == 0 ? (
              <TouchableOpacity
                onPress={() => props.onPressPassword()}
                style={styles.container}
              >
                <View style={styles.CameraImgView}>
                  <Image
                    source={Images.LOCK_IMG}
                  />
                </View>
                <View style={styles.TextContainer}>
                  <Text style={styles.AddPhotosTxt}>Password</Text>
                </View>
                <View style={styles.BckArrowBack}>
                  <Image
                    source={Images.ARROW_RIGHT_IMG}
                  />
                </View>
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity
              onPress={() => props.onPressEmail()}
              style={styles.container}
            >
              <View style={styles.CameraImgView}>
                <Image
                  source={Images.ENVELOPE_IMG}
                />
              </View>
              <View style={styles.TextContainer}>
                <Text style={styles.AddPhotosTxt}>Email / Notifications</Text>
              </View>
              <View style={styles.BckArrowBack}>
                <Image
                  source={Images.ARROW_RIGHT_IMG}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.onPressLocations()}
              style={styles.container}
            >
              <View style={styles.CameraImgView}>
                <Image
                  source={Images.LOCATION_IMG}
                />
              </View>
              <View style={styles.TextContainer}>
                <Text style={styles.AddPhotosTxt}>Locations</Text>
              </View>
              <View style={styles.BckArrowBack}>
                <Image
                  source={Images.ARROW_RIGHT_IMG}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.onPressSettings()}
              style={styles.container}
            >
              <View style={styles.CameraImgView}>
                <Image
                  source={Images.SETTING_IMG}
                />
              </View>
              <View style={styles.TextContainer}>
                <Text style={styles.AddPhotosTxt}>Settings</Text>
              </View>
              <View style={styles.BckArrowBack}>
                <Image
                  source={Images.ARROW_RIGHT_IMG}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={[styles.MainContainer, { marginTop: 10, paddingLeft: 15 }]}
          >
            <Text
              style={[styles.AddPhotosTxt, { fontSize: 19, paddingLeft: 0 }]}
            >
              About{" "}
              {props.userProfileData &&
                props.userProfileData.first_name +
                " " +
                props.userProfileData.last_name}
            </Text>
            <View style={styles.LocationView}>
              <Text style={styles.LoctionTextStyle}>Location</Text>
              <Text style={styles.LocationNameTXt}>
                {props.userProfileData.find_me_in}
              </Text>
            </View>
            <View style={styles.LocationView}>
              <Text style={styles.LoctionTextStyle}>Member Since</Text>
              <Text style={styles.LocationNameTXt}>
                {moment(props.userProfileData.create_date).format("MM/DD/YYYY")}
              </Text>
            </View>
            <View style={styles.LocationView}>
              <Text style={styles.LoctionTextStyle}>Things I Love</Text>
              {props.userProfileData.i_love ? (
                <Text style={styles.LocationNameTXt}>
                  {props.userProfileData && props.userProfileData.i_love}
                </Text>
              ) : (
                <>
                  <Text style={styles.LocationNameTXt}>
                    You haven't told us yet...
                  </Text>
                  <Text style={styles.LocationNameTXt}>do tell!</Text>
                </>
              )}
            </View>
          </View>
          <View style={[styles.MainContainer, { marginTop: 10 }]}>
            <View style={{ alignItems: "center" }}>
              <Image
                source={Images.HEADPHONES_IMG}
              />
              <Text style={styles.AnyProblmTxt}>Have any problem and</Text>
              <Text style={styles.AnyProblmTxt}>
                need support? Call Us directly
              </Text>
              <Text style={styles.LocationNameTXt}>(+1) 407-600-5690</Text>
              <Text style={styles.AnyProblmTxt}>or chat with us</Text>
            </View>
            <Button buttonText="Contact Us" style={{ marginTop: 10 }} />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default ProfileSettings;
