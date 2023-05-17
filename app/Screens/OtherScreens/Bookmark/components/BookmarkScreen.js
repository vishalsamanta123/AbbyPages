import React from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import styles from "./styles";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import { BLACK_COLOR_CODE, LIGHT_BLACK_COLOR_CODE, WHITE_COLOR_CODE } from "../../../Utils/Constant";
import { Images } from "../../../Utils/images";

const BookmarkScreen = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? 'padding' : null}
      style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        leftImg={Images.DRAWER_IMG}
        HeaderText="Bookmark"
        type="Drawer"
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View style={CommonStyles.body}>
        <View style={styles.ImageContainer}>
          <Image
            style={styles.PosterImgeStyle}
            source={require("../../../Assets/extraImages/Utah-Film-Festival.jpg")}
          />
          <View style={styles.UserProfileImage}>
            <Image
              style={styles.ProfileIMG}
              source={{ uri: props?.userData?.data?.profile_image }}
            />
          </View>
          <View style={styles.ViewContain}>
            <Text style={styles.UserNameText}>
              {props?.userData?.data?.first_name +
                " " +
                props?.userData?.data?.last_name}
            </Text>
            <View style={styles.FollowersView}>
              <View style={styles.FollowersContain}>
                <Image
                  source={Images.PROFILE_IMG}
                />
                <Text style={styles.FollowersText}>276</Text>
              </View>
              <View style={styles.StarViewContain}>
                <Image source={Images.STAR_UNFILLED_IMG} />
                <Text style={styles.FollowersText}> 204star_icon_text</Text>
              </View>
            </View>
            <View style={styles.FollowersCountView}>
              <Text style={styles.LastUpdateTxt}>89 Followers</Text>
              <Text style={styles.LastUpdateTxt}>Last Updated 10/14/2020</Text>
            </View>
          </View>
        </View>
        <View style={styles.BookMarkContainer}>
          <View style={styles.BookMarkView}>
            <Text style={styles.MyBookMarkTxt}>My Bookmarks</Text>
            <Text style={styles.MyBookMarkTxt}>0 Places</Text>
          </View>
          <View style={styles.SortByView}>
            <Text style={styles.SortByText}>Sort by</Text>
            <Image source={Images.ARROW_DOWN_IMG}
              style={{ tintColor: LIGHT_BLACK_COLOR_CODE }}
            />
          </View>
          <View style={styles.ContainerCategory}>
            <View style={styles.CategoryView}>
              <Text style={styles.SortByText}>Categories</Text>
              <Image source={Images.ARROW_DOWN_IMG}
                style={{ tintColor: LIGHT_BLACK_COLOR_CODE }} />
            </View>
            <View style={styles.CategoryView}>
              <Text style={styles.SortByText}>All Cities</Text>
              <Image source={Images.ARROW_DOWN_IMG}
                style={{ tintColor: LIGHT_BLACK_COLOR_CODE }} />
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default BookmarkScreen;
