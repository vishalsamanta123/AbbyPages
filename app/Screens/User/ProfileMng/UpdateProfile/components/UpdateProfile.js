import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
  Platform,
} from "react-native";
import styles from "./styles";
import Button from "../../../../../Components/Button";
import CommonStyles from "../../../../../Utils/CommonStyles";
import { FONT_SIZE, COLORS, FONT_FAMILY } from "../../../../../Utils/Constant";
import { Images } from "../../../../../Utils/images";
import MainHeader from "../../../../../Components/MainHeader";
import MediaPicker from "../../../../../Components/MediaPicker";
import MainInput from "../../../../../Components/MainInput";
import PageScroll from "../../../../../Components/PageScroll";
import AddressInput from "../../../../../Components/AddressInput";
import SelectButton from "../../../../../Components/SelectButton";
import DateTimeModal from "../../../../../Components/DateTimeModal";
import { ICON_TYPE } from "../../../../../Components/Icons/Icon";
const UpdateProfile = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
      <MainHeader
        headerText={"Update Profile"}
        fontSize={FONT_SIZE.medium}
        loginButton={false}
        isLogin={true}
      />
      <View style={[CommonStyles.body]}>
        <PageScroll keyboardShouldPersistTaps={"always"}>
          <ImageBackground style={styles.ImageView}>
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
                  <Image source={Images.EDIT_PHOTO_IMG} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </ImageBackground>
          <View style={[styles.MainContainer, { paddingTop: "10%" }]}>
            <MainInput
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
            <MainInput
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
            <MainInput
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
            <SelectButton
              listType={""}
              data={[
                { label: "Male", value: 1 },
                { label: "Female", value: 2 },
              ]}
              headTxt={"Gender"}
              value={
                props.profileData.gender === "1"
                  ? "Male"
                  : props.profileData.gender === "2"
                  ? "Female"
                  : ""
              }
              labelField={"label"}
              valueField={"label"}
              onPressItem={(item) => {
                props.setProfileData({
                  ...props.profileData,
                  gender: item?.value,
                });
              }}
              searchInput={false}
            />
            <DateTimeModal
              rightImgOrigin={ICON_TYPE.Fontisto}
              rightImgName={"date"}
              headTxt={"Birth date"}
              placeholder={"Birth date"}
              mode={"date"}
              borderRadius={5}
              value={props?.profileData?.birth_date}
              onPressokButton={(data) => {
                props.setProfileData({
                  ...props.profileData,
                  birth_date: data,
                });
              }}
            />
            <MainInput
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
            <MainInput
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
            <MainInput
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
            <AddressInput
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
                placeholderTextColor: COLORS.BLACK,
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
                  backgroundColor: COLORS.WHITE,
                  fontSize: 16,
                  marginHorizontal: 17,
                  margin: 10,
                  fontFamily: FONT_FAMILY.REGULAR,
                  borderColor: "#d8d8d8",
                  borderRadius: 8,
                  borderWidth: 1,
                  alignItems: "center",
                  paddingVertical: 10,
                },
                textInput: {
                  fontSize: 15,
                  color: COLORS.BLACK,
                },
                listView: {
                  width: "90%",
                  alignSelf: "center",
                  backgroundColor: COLORS.WHITE,
                },
              }}
              minLength={2}
              autoFocus={false}
              returnKeyType={"default"}
            />
            <AddressInput
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
                placeholderTextColor: COLORS.BLACK,
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
                  backgroundColor: COLORS.WHITE,
                  fontSize: 16,
                  marginHorizontal: 17,
                  margin: 10,
                  fontFamily: FONT_FAMILY.REGULAR,
                  borderColor: "#d8d8d8",
                  borderRadius: 8,
                  borderWidth: 1,
                  alignItems: "center",
                  paddingVertical: 10,
                },
                textInput: {
                  fontSize: 15,
                  color: COLORS.BLACK,
                },
                listView: {
                  width: "90%",
                  alignSelf: "center",
                  backgroundColor: COLORS.WHITE,
                },
              }}
              minLength={2}
              autoFocus={false}
              returnKeyType={"default"}
            />

            <MainInput
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
            <MainInput
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
            <MainInput
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
            <MainInput
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
            <MainInput
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
            <MainInput
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
            <MainInput
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
            <MainInput
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
            <MainInput
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
            <MainInput
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
            <MainInput
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
            <SelectButton
              listType={""}
              data={[{ label: "English", value: "1" }]}
              headTxt={"Primary Language"}
              value={
                props.profileData.primary_language === "1" ? "English" : ""
              }
              labelField={"label"}
              valueField={"label"}
              onPressItem={(item) => {
                props.setProfileData({
                  ...props.profileData,
                  primary_language: item?.value,
                });
              }}
              searchInput={false}
            />
            <Button
              onPress={() => props.handleEditProfile()}
              buttonText="Save Changes"
              style={{ marginTop: 15, marginBottom: 5 }}
              paddingHeight={10}
            />
            <Button
              buttonLabelStyle={{
                color: COLORS.WHITE,
                fontFamily: FONT_FAMILY.BOLD,
              }}
              buttonText="Cancel"
              onPress={() => props.onClickCancel()}
              style={{ marginTop: 10, backgroundColor: COLORS.LIGHT_GREY }}
              paddingHeight={10}
              buttonTxtColor={COLORS.WHITE}
            />
          </View>
        </PageScroll>
        <MediaPicker
          Visible={props.ProfileModal}
          setVisible={() => props.setProfileModal(false)}
          imageData={(data) => {
            props.handleUploadProfileImage(data);
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default UpdateProfile;
