import React from "react";
import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import Input from "../../../../Components/Input";
import Button from "../../../../Components/Button";
import Header from "../../../../Components/Header";
import CommonStyles from "../../../../Utils/CommonStyles";
import {
  WHITE_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_BOLD,
  LIGHT_GREY_COLOR_CODE,
} from "../../../../Utils/Constant";
import { Picker } from "@react-native-community/picker";

const ApplyJob = (props) => {
  return (
    <KeyboardAvoidingView style={[CommonStyles.container]}>
      <Header RightImg={null} HeaderText={"Apply Job"} />
      <View style={[CommonStyles.body]}>
        <ScrollView style={{ flexGrow: 1 }}>
          <View style={styles.ContainerStyle}>
            <Text style={styles.CommntyAmbsdorTxt}>Community Ambassador</Text>
            <Text style={styles.ColumbiaText}>
              Columbia, SC / G&A - Community / Part Time
            </Text>
          </View>
          <View style={[styles.ContainerStyle, { marginTop: 10 }]}>
            <Text style={styles.HeadingTextStyle}>Submit your application</Text>
            <TouchableOpacity
              onPress={() => props.openUpload(1)}
              style={styles.container}
            >
              <View style={styles.CameraImgView}>
                <Text numberOfLines={1} style={styles.AddPhotosTxt}>
                  {props?.resume ? props?.resume?.name : "ReSume/CV"}
                </Text>
              </View>
              <View style={styles.BckArrowBack}>
                <Image
                  source={require("../../../../Assets/upload_icon_field.png")}
                />
              </View>
            </TouchableOpacity>
            <Input
              containerStyle={styles.TextinputContain}
              onChangeText={(FullName) => props.setFullName(FullName)}
              value={props.FullName}
              secureTextEntry={false}
              placeholder="Full Name"
              InputType="withScroll"
            />
            <Input
              containerStyle={styles.TextinputContain}
              onChangeText={(EmailAddress) =>
                props.setEmailAddress(EmailAddress)
              }
              value={props.EmailAddress}
              secureTextEntry={false}
              placeholder="Email"
              InputType="withScroll"
            />
            <Input
              containerStyle={styles.TextinputContain}
              onChangeText={(Phone) => props.setPhone(Phone)}
              value={props.Phone}
              secureTextEntry={false}
              placeholder="Phone"
              InputType="withScroll"
              keyboardType={"number-pad"}
              maxLength={10}
            />
            <Input
              containerStyle={styles.TextinputContain}
              onChangeText={(CurrentCompany) =>
                props.setCurrentCompany(CurrentCompany)
              }
              value={props.CurrentCompany}
              secureTextEntry={false}
              placeholder="Current Company"
              InputType="withScroll"
            />
          </View>
          <View style={[styles.ContainerStyle, { marginTop: 10 }]}>
            <Text style={styles.HeadingTextStyle}>Links</Text>
            <Input
              containerStyle={styles.TextinputContain}
              onChangeText={(AbbyPagesURL) =>
                props.setAbbyPagesURL(AbbyPagesURL)
              }
              value={props.AbbyPagesURL}
              secureTextEntry={false}
              placeholder="AbbyPages Profile URL"
              InputType="withScroll"
            />
            <Input
              containerStyle={styles.TextinputContain}
              onChangeText={(Linkedin) => props.setLinkedin(Linkedin)}
              value={props.Linkedin}
              secureTextEntry={false}
              placeholder="LinkedIn URL"
              InputType="withScroll"
            />
            <Input
              containerStyle={styles.TextinputContain}
              onChangeText={(TwitterUrl) => props.setTwitterUrl(TwitterUrl)}
              value={props.TwitterUrl}
              secureTextEntry={false}
              placeholder="Twitter URL"
              InputType="withScroll"
            />
            <Input
              containerStyle={styles.TextinputContain}
              onChangeText={(GithubUrl) => props.setGithubUrl(GithubUrl)}
              value={props.GithubUrl}
              secureTextEntry={false}
              placeholder="Github URL"
              InputType="withScroll"
            />
            <Input
              containerStyle={styles.TextinputContain}
              onChangeText={(PortfolioUrl) =>
                props.setPortfolioUrl(PortfolioUrl)
              }
              value={props.PortfolioUrl}
              secureTextEntry={false}
              placeholder="Portfolio URL"
              InputType="withScroll"
            />
            <Input
              containerStyle={styles.TextinputContain}
              onChangeText={(OtherWebsite) =>
                props.setOtherWebsite(OtherWebsite)
              }
              value={props.OtherWebsite}
              secureTextEntry={false}
              placeholder="Other Website"
              InputType="withScroll"
            />
          </View>
          <View style={[styles.ContainerStyle, { marginTop: 10 }]}>
            <Text style={styles.HeadingTextStyle}>Cover Letter</Text>
            <Text style={styles.coverLetterDescrptn}>
              Please include a cover letter outling your interest in AbbyPages
              and why you're our ideal candidate *
            </Text>
            <TouchableOpacity
              onPress={() => props.openUpload(2)}
              style={styles.container}
            >
              <View style={styles.CameraImgView}>
                <Text numberOfLines={1} style={styles.AddPhotosTxt}>
                  {props.coverLetter ? props?.coverLetter?.name : "Upload File"}
                </Text>
              </View>
              <View style={styles.BckArrowBack}>
                <Image
                  source={require("../../../../Assets/upload_icon_field.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.ContainerStyle, { marginTop: 10 }]}>
            <Text style={styles.HeadingTextStyle}>Us Work Status</Text>
            <Text style={styles.coverLetterDescrptn}>
              Are you legally authorized to work in the U.S *
            </Text>
            <TouchableOpacity
              onPress={() => props.onPressYesBtn(1, 1)}
              style={styles.container}
            >
              <View style={styles.CameraImgView}>
                <Image
                  source={
                    props.workStatus == 1
                      ? require("../../../../Assets/checked_circled_v1.png")
                      : require("../../../../Assets/unchecked_circled_v1.png")
                  }
                />
                <Text style={styles.AddPhotosTxt}>Yes</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.onPressNoBtn(1, 2)}
              style={styles.container}
            >
              <View style={styles.CameraImgView}>
                <Image
                  source={
                    props.workStatus == 2
                      ? require("../../../../Assets/checked_circled_v1.png")
                      : require("../../../../Assets/unchecked_circled_v1.png")
                  }
                />
                <Text style={styles.AddPhotosTxt}>No</Text>
              </View>
            </TouchableOpacity>
            <Text style={[styles.willYouNowText, { paddingTop: 15 }]}>
              Will you now or in the future require sponsership for employment
              visa status (e.g, H1-B visa status) *
            </Text>
            <TouchableOpacity
              onPress={() => props.onPressYesBtn(2, 1)}
              style={styles.container}
            >
              <View style={styles.CameraImgView}>
                <Image
                  source={
                    props.visaStatus == 1
                      ? require("../../../../Assets/checked_circled_v1.png")
                      : require("../../../../Assets/unchecked_circled_v1.png")
                  }
                />
                <Text style={styles.AddPhotosTxt}>Yes</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.onPressNoBtn(2, 2)}
              style={styles.container}
            >
              <View style={styles.CameraImgView}>
                <Image
                  source={
                    props.visaStatus == 2
                      ? require("../../../../Assets/checked_circled_v1.png")
                      : require("../../../../Assets/unchecked_circled_v1.png")
                  }
                />
                <Text style={styles.AddPhotosTxt}>No</Text>
              </View>
            </TouchableOpacity>
            <Input
              containerStyle={styles.TextinputContain}
              onChangeText={(AdditionalInfo) =>
                props.setAdditionalInfo(AdditionalInfo)
              }
              value={props.AdditionalInfo}
              secureTextEntry={false}
              placeholder="Additional Information"
              InputType="withScroll"
            />
          </View>
          <View style={[styles.ContainerStyle, { marginTop: 10 }]}>
            <Text style={styles.HeadingTextStyle}>
              U.S equal employment opportunity information
            </Text>
            <Text style={styles.coverLetterDescrptn}>
              (Completion isvoluntary a. wilt not subject you to adverse
              treatment)
            </Text>
            <View style={{ paddingTop: 15 }}>
              <Text style={styles.coverLetterDescrptn}>
                Our company values diversity. To ensure that we comply with
                reporting requirements a. to learn more about how we can
                increase diversity In our candidate pool, we invite you to
                voluntarily provide demographic information Ina confidential
                survey at the end if this appLicanon. Providing this information
                isoptional. It will not be accessible or used in the hiring
                process,and has no effect on your opportunity for employment.
              </Text>
            </View>
            <View style={styles.container}>
              <Picker
                selectedValue={`${props.gender}`}
                style={styles.pickerVw}
                onValueChange={(itemValue, itemIndex) =>
                  props.setGender(itemValue, itemIndex)
                }
              >
                <Picker.Item label="Gender" />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
              <View style={styles.BckArrowBack}>
                <Image
                  source={require("../../../../Assets/dropdown_icon.png")}
                />
              </View>
            </View>
            <View style={styles.container}>
              <Picker
                selectedValue={`${props.race}`}
                style={styles.pickerVw}
                onValueChange={(itemValue, itemIndex) =>
                  props.setRace(itemValue, itemIndex)
                }
              >
                <Picker.Item label="Race" />
                <Picker.Item label="American Indian" value="1" />
                <Picker.Item label="Indian" value="2" />
                <Picker.Item label="African American" value="3" />
                <Picker.Item label="African American" value="4" />
              </Picker>
              <View style={styles.BckArrowBack}>
                <Image
                  source={require("../../../../Assets/dropdown_icon.png")}
                />
              </View>
            </View>
            <View style={styles.container}>
              <Picker
                selectedValue={`${props.veteranStatus}`}
                style={styles.pickerVw}
                onValueChange={(itemValue, itemIndex) =>
                  props.setVeteranStatus(itemValue, itemIndex)
                }
              >
                <Picker.Item label="Veteran Status" />
                <Picker.Item label="Yes" value="1" />
                <Picker.Item label="No" value="2" />
              </Picker>
              <View style={styles.BckArrowBack}>
                <Image
                  source={require("../../../../Assets/dropdown_icon.png")}
                />
              </View>
            </View>
          </View>
          <Button
            buttonText="Submit Application"
            buttonLabelStyle={styles.ADDBtnTxt}
            onPress={() => props.onSubmit()}
            style={styles.SubmitBtnMain}
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default ApplyJob;
