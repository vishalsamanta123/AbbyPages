import React, { useState } from "react";
import {
  View,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import { Picker } from "@react-native-community/picker";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import styles from "./styles";
import Dialog, {
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";
import Header from "../../../Components/Header";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  GREY_COLOR_CODE,
  WHITE_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_BOLD,
  BLACK_COLOR_CODE,
} from "../../../Utils/Constant";
const UpdateProfile = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    const value = moment(date).format("DD-MM-YYYY");
    props.setProfileData({
      ...props.profileData,
      birth_date: value,
    });
    hideDatePicker();
  };
  return (
    <KeyboardAvoidingView style={[CommonStyles.container]}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Header RightImg={null} HeaderText={"Update Profile"} />
      <View>
        {/* // style={styles.HeaderContain}> */}
        {/* <TouchableOpacity style={[styles.ImageView, {}]}>
                    <TouchableOpacity style={{}} onPress={() => props.setProfileModal(true)}>
                    {props.renderFileUri()}
                    <TouchableOpacity style={{ position: 'absolute', right: 0, bottom: 0 }}>
                    <TouchableOpacity style={{}} onPress={() => props.setProfileModal(true)}>
                    <Image
                    // style={styles.EditProfileImge}
                    source={require('../../../Assets/edit_photo_icon.png')} />
                    </TouchableOpacity>
                    </TouchableOpacity>
                    </TouchableOpacity>
                </TouchableOpacity> */}
      </View>
      <View style={[CommonStyles.body]}>
        <ImageBackground
          source={require("../../../Assets/processed.jpg")}
          style={[styles.ImageView, {}]}
        >
          <TouchableOpacity
            style={{}}
            onPress={() => props.setProfileModal(true)}
          >
            {props.renderFileUri()}
            <View style={{ position: "absolute", right: 0, bottom: 0 }}>
              <TouchableOpacity
                style={{}}
                onPress={() => props.setProfileModal(true)}
              >
                <Image
                  source={require("../../../Assets/edit_photo_icon.png")}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </ImageBackground>
        <View>
          <Dialog
            visible={props.ProfileModal}
            dialogAnimation={
              new SlideAnimation({
                slideFrom: "bottom",
              })
            }
            transparent={true}
            onTouchOutside={() => {
              props.setProfileModal(false);
            }}
            onRequestClose={() => props.setProfileModal(false)}
          >
            <DialogContent>
              <View style={styles.alertBackground}>
                <Text style={[styles.modalItem, { paddingBottom: 10 }]}>
                  Please select
                </Text>
                <View style={styles.alertBox}>
                  <TouchableOpacity
                    style={styles.profileModal}
                    onPress={() => props.openCamera()}
                    underlayColor={"#F5F5F5"}
                  >
                    <Image
                      style={{ height: 40, width: 40 }}
                      source={require("../../../Assets/camera.png")}
                    />
                    <Text style={styles.modalItem}>Open camera</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.profileModal}
                    onPress={() => props.openAlbum()}
                    underlayColor={"#F5F5F5"}
                  >
                    <Image
                      style={{ height: 40, width: 40 }}
                      source={require("../../../Assets/image-gallery.png")}
                    />
                    <Text style={styles.modalItem}>Open album</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.profileModal}
                    underlayColor={"#F5F5F5"}
                    onPress={() => props.setProfileModal(false)}
                  >
                    <Image
                      style={{ height: 40, width: 40 }}
                      source={require("../../../Assets/cancelModalBtn.png")}
                    />
                    <Text style={styles.modalItem}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </DialogContent>
          </Dialog>
        </View>
        <ScrollView keyboardShouldPersistTaps={"always"}>
          <View style={[styles.MainContainer, { paddingTop: "15%" }]}>
            <Input
              onChangeText={(first_name) =>
                props.setProfileData({
                  ...props.profileData,
                  first_name: first_name,
                })
              }
              value={props.profileData.first_name}
              secureTextEntry={false}
              placeholder="First Name"
              InputType="withScroll"
            />
            <Input
              onChangeText={(last_name) =>
                props.setProfileData({
                  ...props.profileData,
                  last_name: last_name,
                })
              }
              value={props.profileData.last_name}
              secureTextEntry={false}
              placeholder="Last Name"
              InputType="withScroll"
            />
            <Input
              onChangeText={(nick_name) =>
                props.setProfileData({
                  ...props.profileData,
                  nick_name: nick_name,
                })
              }
              value={props.profileData.nick_name}
              secureTextEntry={false}
              placeholder="Nick Name"
              InputType="withScroll"
            />
            {/* gender */}
            <View
              style={[
                styles.container,
                { paddingHorizontal: 10, flexDirection: "column" },
              ]}
            >
              {props.profileData.gender !== 0 && (
                <Text style={[styles.AddPhotosTxt, { fontSize: 17 }]}>
                  Gender
                </Text>
              )}
              <Picker
                selectedValue={`${props.profileData.gender}`}
                style={styles.CameraImgView}
                onValueChange={(itemValue, itemIndex) =>
                  props.setProfileData({
                    ...props.profileData,
                    gender: itemValue,
                  })
                }
              >
                <Picker.Item label="Please Select Your Gender" value="0" />
                <Picker.Item label="Male" value="1" />
                <Picker.Item label="Female" value="2" />
              </Picker>
            </View>
            <TouchableOpacity
              onPress={() => showDatePicker()}
              style={{
                padding: 20,
                borderColor: "#d8d8d8",
                borderWidth: 1,
                borderRadius: 12,
                flexDirection: "row",
                margin: 10,
                marginLeft: 15,
                marginRight: 15,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15, fontFamily: FONT_FAMILY_REGULAR }}>
                {props?.profileData?.birth_date === "" ||
                props?.profileData?.birth_date === undefined
                  ? "Date Of Birth"
                  : props?.profileData?.birth_date}
              </Text>
              <Image
                resizeMode={"contain"}
                style={{ height: 24, width: 24, alignSelf: "flex-end" }}
                source={require("../../../Assets/calendar_icon_field.png")}
              />
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <Input
              onChangeText={(zip_code) =>
                props.setProfileData({
                  ...props.profileData,
                  zip_code: zip_code,
                })
              }
              value={`${props.profileData.zip_code}`}
              secureTextEntry={false}
              keyboardType="phone-pad"
              placeholder="Zip Code"
              InputType="withScroll"
            />
            <Input
              onChangeText={(headline) =>
                props.setProfileData({
                  ...props.profileData,
                  headline: headline,
                })
              }
              value={props.profileData.headline}
              secureTextEntry={false}
              placeholder="Your Headline"
              InputType="withScroll"
            />
            <Input
              onChangeText={(i_love) =>
                props.setProfileData({
                  ...props.profileData,
                  i_love: i_love,
                })
              }
              value={props.profileData.i_love}
              secureTextEntry={false}
              placeholder="I Love"
              InputType="withScroll"
            />
            <GooglePlacesAutocomplete
              placeholder={"Find me in"}
              value={props.profileData.find_me_in}
              fetchDetails={true}
              onPress={(data, details = null) => {
                props.setProfileData({
                  ...props.profileData,
                  find_me_in: details.formatted_address,
                  find_me_lat: details.geometry.location.lat,
                  find_me_long: details.geometry.location.lng,
                });
              }}
              textInputProps={{
                placeholderTextColor: BLACK_COLOR_CODE,
                onChangeText: (e) => {
                  props.setProfileData({
                    ...props.profileData,
                    find_me_in: e,
                  });
                },
                value: props.profileData.find_me_in,
              }}
              query={{
                key: "AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM",
                language: "en",
              }}
              styles={{
                textInputContainer: {
                  borderRadius: 4,
                  backgroundColor: WHITE_COLOR_CODE,
                  fontSize: 16,
                  marginHorizontal: 17,
                  margin: 10,
                  fontFamily: FONT_FAMILY_REGULAR,
                  borderColor: "#d8d8d8",
                  borderRadius: 8,
                  borderWidth: 1,
                  alignItems: "center",
                  // height: 70,
                  paddingVertical: 10,
                },
                textInput: {
                  fontSize: 15,
                  color: BLACK_COLOR_CODE,
                },
                listView: {
                  width: "90%",
                  alignSelf: "center",
                  backgroundColor: WHITE_COLOR_CODE,
                },
              }}
              minLength={2}
              autoFocus={false}
              returnKeyType={"default"}
            />
            <GooglePlacesAutocomplete
              placeholder={"Home town"}
              value={props.profileData.hometown}
              fetchDetails={true}
              onPress={(data, details = null) => {
                props.setProfileData({
                  ...props.profileData,
                  hometown: details.formatted_address,
                  hometown_lat: details.geometry.location.lat,
                  hometown_long: details.geometry.location.lng,
                });
              }}
              textInputProps={{
                placeholderTextColor: BLACK_COLOR_CODE,
                onChangeText: (e) => {
                  props.setProfileData({
                    ...props.profileData,
                    hometown_long: e,
                  });
                },
                value: props.profileData.hometown_long,
              }}
              query={{
                key: "AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM",
                language: "en",
              }}
              styles={{
                textInputContainer: {
                  borderRadius: 4,
                  backgroundColor: WHITE_COLOR_CODE,
                  fontSize: 16,
                  marginHorizontal: 17,
                  margin: 10,
                  fontFamily: FONT_FAMILY_REGULAR,
                  borderColor: "#d8d8d8",
                  borderRadius: 8,
                  borderWidth: 1,
                  alignItems: "center",
                  // height: 70,
                  paddingVertical: 10,
                },
                textInput: {
                  fontSize: 15,
                  color: BLACK_COLOR_CODE,
                },
                listView: {
                  width: "90%",
                  alignSelf: "center",
                  backgroundColor: WHITE_COLOR_CODE,
                },
              }}
              minLength={2}
              autoFocus={false}
              returnKeyType={"default"}
            />

            <Input
              onChangeText={(blog_website) =>
                props.setProfileData({
                  ...props.profileData,
                  blog_website: blog_website,
                })
              }
              value={props.profileData.blog_website}
              secureTextEntry={false}
              keyboardType="email-address"
              placeholder="My Blog or Website"
              InputType="withScroll"
            />
            <Input
              onChangeText={(when_not_on_abbypages) =>
                props.setProfileData({
                  ...props.profileData,
                  when_not_on_abbypages: when_not_on_abbypages,
                })
              }
              value={props.profileData.when_not_on_abbypages}
              secureTextEntry={false}
              placeholder="When I'm Not AbbyPages"
              InputType="withScroll"
            />
            <Input
              onChangeText={(why_should_read_my_reviews) =>
                props.setProfileData({
                  ...props.profileData,
                  why_should_read_my_reviews: why_should_read_my_reviews,
                })
              }
              value={props.profileData.why_should_read_my_reviews}
              secureTextEntry={false}
              placeholder="Why You Should Reviews"
              InputType="withScroll"
            />
            <Input
              onChangeText={(second_website) =>
                props.setProfileData({
                  ...props.profileData,
                  second_website: second_website,
                })
              }
              value={props.profileData.second_website}
              secureTextEntry={false}
              keyboardType="email-address"
              placeholder="My Second Favorite Website"
              InputType="withScroll"
            />
            <Input
              onChangeText={(great_book_read) =>
                props.setProfileData({
                  ...props.profileData,
                  great_book_read: great_book_read,
                })
              }
              value={props.profileData.great_book_read}
              secureTextEntry={false}
              placeholder="The Last Great Book I Read"
              InputType="withScroll"
            />
            <Input
              onChangeText={(concert) =>
                props.setProfileData({
                  ...props.profileData,
                  concert: concert,
                })
              }
              value={props.profileData.concert}
              secureTextEntry={false}
              placeholder="My First Concert"
              InputType="withScroll"
            />
            <Input
              onChangeText={(favorite_movie) =>
                props.setProfileData({
                  ...props.profileData,
                  favorite_movie: favorite_movie,
                })
              }
              value={props.profileData.favorite_movie}
              secureTextEntry={false}
              placeholder="My Favorite Movie"
              InputType="withScroll"
            />
            <Input
              onChangeText={(last_meal_on_earth) =>
                props.setProfileData({
                  ...props.profileData,
                  last_meal_on_earth: last_meal_on_earth,
                })
              }
              value={props.profileData.last_meal_on_earth}
              secureTextEntry={false}
              placeholder="My Last Meal on Earth"
              InputType="withScroll"
            />
            <Input
              onChangeText={(anyone_else_but) =>
                props.setProfileData({
                  ...props.profileData,
                  anyone_else_but: anyone_else_but,
                })
              }
              value={props.profileData.anyone_else_but}
              secureTextEntry={false}
              placeholder="Don't Tell Anyone Else But"
              InputType="withScroll"
            />
            <Input
              onChangeText={(most_recent_discovery) =>
                props.setProfileData({
                  ...props.profileData,
                  most_recent_discovery: most_recent_discovery,
                })
              }
              value={props.profileData.most_recent_discovery}
              secureTextEntry={false}
              placeholder="Most Recent Discovery"
              InputType="withScroll"
            />
            <Input
              onChangeText={(current_crush) =>
                props.setProfileData({
                  ...props.profileData,
                  current_crush: current_crush,
                })
              }
              value={props.profileData.current_crush}
              secureTextEntry={false}
              placeholder="Current Crush"
              InputType="withScroll"
            />

            <View
              style={[
                styles.container,
                { paddingHorizontal: 8, flexDirection: "column" },
              ]}
            >
              {props.profileData.primary_language !== null && (
                <Text style={[styles.AddPhotosTxt, { fontSize: 17 }]}>
                  Primary Language
                </Text>
              )}
              <Picker
                selectedValue={props.profileData.primary_language}
                style={styles.CameraImgView}
                onValueChange={(itemValue, itemIndex) =>
                  props.setProfileData({
                    ...props.profileData,
                    primary_language: itemValue,
                  })
                }
              >
                <Picker.Item label="Please Select Primary Language" value="0" />
                <Picker.Item label="English" value="1" />
                <Picker.Item label="Hindi" value="2" />
                <Picker.Item label="Others" value="3" />
              </Picker>
            </View>
            <Button
              onPress={() => props.handleEditProfile()}
              buttonText="Save Changes"
              style={{ marginTop: 5, marginBottom: 5 }}
            />
            <Button
              buttonLabelStyle={{
                color: WHITE_COLOR_CODE,
                fontFamily: FONT_FAMILY_BOLD,
              }}
              buttonText="Cancel"
              onPress={() => props.onClickCancel()}
              style={{ marginTop: 10, backgroundColor: GREY_COLOR_CODE }}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default UpdateProfile;
