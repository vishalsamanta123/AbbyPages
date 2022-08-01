import React, { useContext, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import Header from "../../../Components/Header";
import Button from "../../../Components/Button";
import CommonStyles from "../../../Utils/CommonStyles";
import { UserContext } from "../../../Utils/UserContext";
import moment from "moment";
const ProfileSettings = (props) => {
  return (
    <KeyboardAvoidingView style={[CommonStyles.container]}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Header
        RightImg={null}
        leftImg={require("../../../Assets/hamburger_icon.png")}
        HeaderText={"Profile Settings"}
        type="Drawer"
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
                  source={require("../../../Assets/profile_icon_menu.png")}
                />
              </View>
              <View style={styles.TextContainer}>
                <Text style={styles.AddPhotosTxt}>Update Profile</Text>
              </View>
              <View style={styles.BckArrowBack}>
                <Image
                  source={require("../../../Assets/business_chevron_icon.png")}
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
                    source={require("../../../Assets/lock_icon_menu.png")}
                  />
                </View>
                <View style={styles.TextContainer}>
                  <Text style={styles.AddPhotosTxt}>Password</Text>
                </View>
                <View style={styles.BckArrowBack}>
                  <Image
                    source={require("../../../Assets/business_chevron_icon.png")}
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
                  source={require("../../../Assets/envelope_icon_menu.png")}
                />
              </View>
              <View style={styles.TextContainer}>
                <Text style={styles.AddPhotosTxt}>Email / Notifications</Text>
              </View>
              <View style={styles.BckArrowBack}>
                <Image
                  source={require("../../../Assets/business_chevron_icon.png")}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.onPressLocations()}
              style={styles.container}
            >
              <View style={styles.CameraImgView}>
                <Image
                  source={require("../../../Assets/marker_icon_menu.png")}
                />
              </View>
              <View style={styles.TextContainer}>
                <Text style={styles.AddPhotosTxt}>Locations</Text>
              </View>
              <View style={styles.BckArrowBack}>
                <Image
                  source={require("../../../Assets/business_chevron_icon.png")}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.onPressSettings()}
              style={styles.container}
            >
              <View style={styles.CameraImgView}>
                <Image
                  source={require("../../../Assets/settings_icon_menu.png")}
                />
              </View>
              <View style={styles.TextContainer}>
                <Text style={styles.AddPhotosTxt}>Settings</Text>
              </View>
              <View style={styles.BckArrowBack}>
                <Image
                  source={require("../../../Assets/business_chevron_icon.png")}
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
                {moment(props.userProfileData.create_date).format("MMM Do YY")}
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
                source={require("../../../Assets/headphones_icon_box.png")}
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
