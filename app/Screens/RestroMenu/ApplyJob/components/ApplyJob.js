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
import { Picker } from "@react-native-community/picker";
import {
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";

const ApplyJob = (props) => {
  return (
    <KeyboardAvoidingView style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        HeaderText={"Apply Job"}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
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
                  {props?.applyJob?.resume
                    ? props?.applyJob?.resume?.name
                    : "ReSume/CV"}
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
              onChangeText={(val) =>
                props.setApplyJob({
                  ...props.applyJob,
                  fullName: val,
                })
              }
              value={props.applyJob?.fullName}
              secureTextEntry={false}
              placeholder="Full Name"
              InputType="withScroll"
            />
            <Input
              containerStyle={styles.TextinputContain}
              onChangeText={(val) =>
                props.setApplyJob({
                  ...props.applyJob,
                  email: val,
                })
              }
              value={props?.applyJob.email}
              secureTextEntry={false}
              placeholder="Email"
              InputType="withScroll"
            />
            <Input
              containerStyle={styles.TextinputContain}
              onChangeText={(val) =>
                props.setApplyJob({
                  ...props.applyJob,
                  phone: val,
                })
              }
              value={props.applyJob.phone}
              secureTextEntry={false}
              placeholder="Phone"
              InputType="withScroll"
              keyboardType={"number-pad"}
              maxLength={10}
            />
            <Input
              containerStyle={styles.TextinputContain}
              onChangeText={(val) =>
                props.setApplyJob({
                  ...props.applyJob,
                  current_Company: val,
                })
              }
              value={props.applyJob.current_Company}
              secureTextEntry={false}
              placeholder="Current Company"
              InputType="withScroll"
            />
          </View>
          <View style={[styles.ContainerStyle, { marginTop: 10 }]}>
            <Text style={styles.HeadingTextStyle}>Links</Text>
            <Input
              containerStyle={styles.TextinputContain}
              onChangeText={(val) =>
                props.setApplyJob({
                  ...props.applyJob,
                  abby_profile_url: val,
                })
              }
              value={props.applyJob.abby_profile_url}
              secureTextEntry={false}
              placeholder="AbbyPages Profile URL"
              InputType="withScroll"
            />
            <Input
              containerStyle={styles.TextinputContain}
              onChangeText={(val) =>
                props.setApplyJob({
                  ...props.applyJob,
                  linkedinUrl: val,
                })
              }
              value={props.applyJob.linkedinUrl}
              secureTextEntry={false}
              placeholder="LinkedIn URL"
              InputType="withScroll"
            />
            <Input
              containerStyle={styles.TextinputContain}
              onChangeText={(val) =>
                props.setApplyJob({
                  ...props.applyJob,
                  twitterUrl: val,
                })
              }
              value={props.applyJob.twitterUrl}
              secureTextEntry={false}
              placeholder="Twitter URL"
              InputType="withScroll"
            />
            <Input
              containerStyle={styles.TextinputContain}
              onChangeText={(val) =>
                props.setApplyJob({
                  ...props.applyJob,
                  githubUrl: val,
                })
              }
              value={props.applyJob.githubUrl}
              secureTextEntry={false}
              placeholder="Github URL"
              InputType="withScroll"
            />
            <Input
              containerStyle={styles.TextinputContain}
              onChangeText={(val) =>
                props.setApplyJob({
                  ...props.applyJob,
                  portfolioUrl: val,
                })
              }
              value={props.applyJob.portfolioUrl}
              secureTextEntry={false}
              placeholder="Portfolio URL"
              InputType="withScroll"
            />
            <Input
              containerStyle={styles.TextinputContain}
              onChangeText={(val) =>
                props.setApplyJob({
                  ...props.applyJob,
                  other_website: val,
                })
              }
              value={props.applyJob.other_website}
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
                  {props.applyJob.cover_letter
                    ? props?.applyJob.cover_letter?.name
                    : "Upload File"}
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
                    props.applyJob.workStatus == 1
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
                    props.applyJob.workStatus == 2
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
                    props.applyJob.visaStatus == 1
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
                    props.applyJob.visaStatus == 2
                      ? require("../../../../Assets/checked_circled_v1.png")
                      : require("../../../../Assets/unchecked_circled_v1.png")
                  }
                />
                <Text style={styles.AddPhotosTxt}>No</Text>
              </View>
            </TouchableOpacity>
            <Input
              containerStyle={styles.TextinputContain}
              onChangeText={(val) =>
                props.setApplyJob({
                  ...props.applyJob,
                  additional_Info: val,
                })
              }
              value={props.applyJob.additional_Info}
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
                selectedValue={props.applyJob.gender}
                style={styles.pickerVw}
                onValueChange={(itemValue, itemIndex) =>
                  props.setApplyJob({
                    ...props.applyJob,
                    gender: itemValue,
                  })
                }
              >
                <Picker.Item label="Gender" />
                <Picker.Item label="Male" value={1} />
                <Picker.Item label="Female" value={2} />
              </Picker>
              <View style={styles.BckArrowBack}>
                <Image
                  source={require("../../../../Assets/dropdown_icon.png")}
                />
              </View>
            </View>
            <View style={styles.container}>
              <Picker
                selectedValue={props.applyJob.race}
                style={styles.pickerVw}
                onValueChange={(itemValue, itemIndex) =>
                  props.setApplyJob({
                    ...props.applyJob,
                    race: itemValue,
                  })
                }
              >
                <Picker.Item label="Race" />
                <Picker.Item label="American Indian" value="1" />
                <Picker.Item label="Indian" value="2" />
                <Picker.Item label="African American" value="3" />
                <Picker.Item label="Latino" value="4" />
              </Picker>
              <View style={styles.BckArrowBack}>
                <Image
                  source={require("../../../../Assets/dropdown_icon.png")}
                />
              </View>
            </View>
            <View style={styles.container}>
              <Picker
                selectedValue={props.applyJob.veteran_status}
                style={styles.pickerVw}
                onValueChange={(itemValue, itemIndex) =>
                  props.setApplyJob({
                    ...props.applyJob,
                    veteran_status: itemValue,
                  })
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
            {props.requires ? (
              <Text style={styles.requireTxt}>
                All this fields are required :- Resume, Full Name, Email, Phone
                Number, Current Company, Work Status, Visa Status
              </Text>
            ) : null}
          </View>
          <Button
            buttonText="Submit Application"
            onPress={() => props.onSubmit()}
            style={styles.SubmitBtnMain}
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default ApplyJob;
