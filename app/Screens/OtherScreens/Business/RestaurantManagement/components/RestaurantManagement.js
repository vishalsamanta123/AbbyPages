import React from "react";
import {
  View,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Linking,
  Platform
} from "react-native";
import styles from "./styles";
import Header from "../../../../Components/Header";
import Button from "../../../../Components/Button";
import CommonStyles from "../../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";
const RestaurantManagement = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? 'padding' : null}
      style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        HeaderText={"Restaurant"}
        leftImg={Images.DRAWER_IMG}
        type="Drawer"
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <ScrollView>
          <View style={styles.MainContainer}>
            <TouchableOpacity
              onPress={() => props.onPressTable()}
              style={styles.container}
            >
              <View style={styles.CameraImgView}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={Images.MANAGE_IMG}
                />
              </View>
              <View style={styles.TextContainer}>
                <Text style={styles.AddPhotosTxt}>Table Management</Text>
              </View>
              <View style={styles.BckArrowBack}>
                <Image
                  source={Images.ARROW_RIGHT_IMG}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.onPressItemManage()}
              style={styles.container}
            >
              <View style={styles.CameraImgView}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={Images.DINEER_IMG}
                />
              </View>
              <View style={styles.TextContainer}>
                <Text style={styles.AddPhotosTxt}>Item Management</Text>
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
            <View style={styles.LocationView}>
              <Text style={styles.LoctionTextStyle}>Business Name</Text>
              <Text style={styles.LocationNameTXt}>
                {props.profileData ? props.profileData.business_name : null}
              </Text>
            </View>
            <View style={styles.LocationView}>
              <Text style={styles.LoctionTextStyle}>Location</Text>
              <Text style={styles.LocationNameTXt}>
                {props.profileData ? props.profileData.address_first : null}
              </Text>
            </View>
            <View style={styles.LocationView}>
              <Text style={styles.LoctionTextStyle}>Member Since</Text>
              <Text style={styles.LocationNameTXt}>October 2020</Text>
            </View>
            {/* <View style={styles.LocationView}>
                            <Text style={styles.LoctionTextStyle}>Things I Love</Text>
                            <Text style={styles.LocationNameTXt}>You haven't told us yet...</Text>
                            <Text style={styles.LocationNameTXt}>do tell!</Text>
                        </View> */}
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
              <Text style={styles.LocationNameTXt}>407.600.5690</Text>
              <Text style={styles.AnyProblmTxt}>or chat with us</Text>
            </View>
            <Button
              buttonText="Contact Us"
              style={{ marginTop: 10 }}
              onPress={() => Linking.openURL(`tel:'407.600.5690'`)}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default RestaurantManagement;
