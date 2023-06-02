import React from "react";
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./styles";
import Button from "../../../../../Components/Button";
import CommonStyles from "../../../../../Utils/CommonStyles";
import moment from "moment";
import { Images } from "../../../../../Utils/images";
import MainHeader from "../../../../../Components/MainHeader";
import ScaleText from "../../../../../Components/ScaleText";
import PageScroll from "../../../../../Components/PageScroll";
import { ICON_TYPE, IconX } from "../../../../../Components/Icons/Icon";

const ProfileSettingsView = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
      <MainHeader
        headerText={"Profile Settings"}
        isSearch={false}
        loginButton={false}
        TxtMarginRight={"5%"}
      />
      <View style={[CommonStyles.body]}>
        <PageScroll>
          <View style={styles.MainContainer}>
            <TouchableOpacity
              onPress={() => props.onPressProfile()}
              style={styles.container}
            >
              <View style={styles.CameraImgView}>
                <IconX
                  origin={ICON_TYPE.EVIL_ICONS}
                  name={"user"}
                  size={35}
                />
              </View>
              <View style={styles.TextContainer}>
                <ScaleText style={styles.AddPhotosTxt}>Profile</ScaleText>
              </View>
              <View style={styles.BckArrowBack}>
                <Image source={Images.ARROW_RIGHT_IMG} />
              </View>
            </TouchableOpacity>
            {props?.userProfileData.signup_mode == 0 ? (
              <TouchableOpacity
                onPress={() => props.onPressPassword()}
                style={styles.container}
              >
                <View style={styles.CameraImgView}>
                  <IconX
                    origin={ICON_TYPE.EVIL_ICONS}
                    name={"lock"}
                    size={35}
                  />
                </View>
                <View style={styles.TextContainer}>
                  <ScaleText style={styles.AddPhotosTxt}>Password</ScaleText>
                </View>
                <View style={styles.BckArrowBack}>
                  <Image source={Images.ARROW_RIGHT_IMG} />
                </View>
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity
              onPress={() => props.onPressEmail()}
              style={styles.container}
            >
              <View style={styles.CameraImgView}>
                <IconX
                  origin={ICON_TYPE.EVIL_ICONS}
                  name={"envelope"}
                  size={35}
                />
              </View>
              <View style={styles.TextContainer}>
                <ScaleText style={styles.AddPhotosTxt}>
                  Email / Notifications
                </ScaleText>
              </View>
              <View style={styles.BckArrowBack}>
                <Image source={Images.ARROW_RIGHT_IMG} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.onPressLocations()}
              style={styles.container}
            >
              <View style={styles.CameraImgView}>
                <IconX
                  origin={ICON_TYPE.EVIL_ICONS}
                  name={"location"}
                  size={35}
                />
              </View>
              <View style={styles.TextContainer}>
                <ScaleText style={styles.AddPhotosTxt}>Locations</ScaleText>
              </View>
              <View style={styles.BckArrowBack}>
                <Image source={Images.ARROW_RIGHT_IMG} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.onPressOrderHistory()}
              style={styles.container}
            >
              <View style={styles.CameraImgView}>
                <IconX
                  origin={ICON_TYPE.EVIL_ICONS}
                  name={"clock"}
                  size={35}
                />
              </View>
              <View style={styles.TextContainer}>
                <ScaleText style={styles.AddPhotosTxt}>Order history</ScaleText>
              </View>
              <View style={styles.BckArrowBack}>
                <Image source={Images.ARROW_RIGHT_IMG} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.onPressSettings()}
              style={styles.container}
            >
              <View style={styles.CameraImgView}>
                <IconX
                  origin={ICON_TYPE.EVIL_ICONS}
                  name={"gear"}
                  size={35}
                />
              </View>
              <View style={styles.TextContainer}>
                <ScaleText style={styles.AddPhotosTxt}>Settings</ScaleText>
              </View>
              <View style={styles.BckArrowBack}>
                <Image source={Images.ARROW_RIGHT_IMG} />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={[styles.MainContainer, { marginTop: 10, paddingLeft: 15 }]}
          >
            <ScaleText
              style={[styles.AddPhotosTxt, { fontSize: 19, paddingLeft: 0 }]}
            >
              About{" "}
              {props.userProfileData &&
                props.userProfileData.first_name +
                " " +
                props.userProfileData.last_name}
            </ScaleText>
            <View style={styles.LocationView}>
              <ScaleText style={styles.LoctionTextStyle}>Location</ScaleText>
              <ScaleText style={styles.LocationNameTXt}>
                {props.userProfileData.find_me_in}
              </ScaleText>
            </View>
            <View style={styles.LocationView}>
              <ScaleText style={styles.LoctionTextStyle}>
                Member Since
              </ScaleText>
              <ScaleText style={styles.LocationNameTXt}>
                {moment(props.userProfileData.create_date).format("MM/DD/YYYY")}
              </ScaleText>
            </View>
            <View style={styles.LocationView}>
              <ScaleText style={styles.LoctionTextStyle}>
                Things I Love
              </ScaleText>
              {props.userProfileData.i_love ? (
                <ScaleText style={styles.LocationNameTXt}>
                  {props.userProfileData && props.userProfileData.i_love}
                </ScaleText>
              ) : (
                <>
                  <ScaleText style={styles.LocationNameTXt}>
                    You haven't told us yet...
                  </ScaleText>
                  <ScaleText style={styles.LocationNameTXt}>do tell!</ScaleText>
                </>
              )}
            </View>
          </View>
          <View style={[styles.MainContainer, { marginTop: 10 }]}>
            <View style={{ alignItems: "center" }}>
              <Image source={Images.HEADPHONES_IMG} />
              <ScaleText style={styles.AnyProblmTxt}>
                Have any problem and
              </ScaleText>
              <ScaleText style={styles.AnyProblmTxt}>
                need support? Call Us directly
              </ScaleText>
              <ScaleText style={styles.LocationNameTXt}>
                (+1) 407-600-5690
              </ScaleText>
              <ScaleText style={styles.AnyProblmTxt}>or chat with us</ScaleText>
            </View>
            <Button buttonText="Contact Us" style={{ marginTop: 10 }} />
          </View>
        </PageScroll>
      </View>
    </KeyboardAvoidingView>
  );
};
export default ProfileSettingsView;
