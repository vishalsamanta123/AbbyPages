import React from "react";
import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import inputStyle from "../../../../../Components/MainInput/styles";
import Button from "../../../../../Components/Button";
import CommonStyles from "../../../../../Utils/CommonStyles";
import { Picker } from "@react-native-community/picker";
import { COLORS, Constants } from "../../../../../Utils/Constant";
import { Images } from "../../../../../Utils/images";
import ScaleText from "../../../../../Components/ScaleText";
import MainHeader from "../../../../../Components/MainHeader";
import MainInput from "../../../../../Components/MainInput";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";

const ApplyJobView = (props) => {
  return (
    <View style={CommonStyles.container}>
      <MainHeader headerText={"Apply Job"} loginButton={false} />
      <ScrollView style={CommonStyles.scrollCon}>
        <View style={styles.containerStyl}>
          <ScaleText style={styles.CommntyAmbsdorTxt}>
            {props.itemData?.job_title}
          </ScaleText>
          <ScaleText style={styles.ColumbiaText}>
            {props.itemData?.address} /{" "}
            {props?.itemData?.job_type === "1"
              ? "Fixed Term Freelance"
              : props?.itemData?.job_type === "2"
              ? "Paid Freelance"
              : props?.itemData?.job_type === "3"
              ? "Unpaid Full Time"
              : props?.itemData?.job_type === "4"
              ? "Paid Internship"
              : props?.itemData?.job_type === "5"
              ? "Part Time Temporary"
              : props?.itemData?.job_type === "6"
              ? "Unpaid Internship"
              : "Not Found"}
          </ScaleText>
        </View>
        <View style={styles.containerStyl}>
          <ScaleText style={styles.headTxt}>Submit your application</ScaleText>
          <TouchableOpacity
            onPress={() => props.openUpload(1)}
            style={[inputStyle.mainCont, styles.inputCon]}
          >
            <ScaleText numberOfLines={1} style={inputStyle.inputCon}>
              {props?.applyJob?.resume
                ? props?.applyJob?.resume?.name
                : "Résumé/CV"}
            </ScaleText>
            <View style={styles.rightImgVw}>
              <IconX
                origin={ICON_TYPE.ICONICONS}
                size={24}
                name={"cloud-upload-outline"}
                color={COLORS.RGBA}
              />
            </View>
          </TouchableOpacity>
          <MainInput
            onChangeText={(val) =>
              props.setApplyJob({
                ...props.applyJob,
                fullName: val,
              })
            }
            value={props.applyJob?.fullName}
            placeholder="Full Name"
            rightImgName={"user"}
            rightImgOrigin={ICON_TYPE.EVIL_ICONS}
            rightImgSize={28}
          />
          <MainInput
            onChangeText={(val) =>
              props.setApplyJob({
                ...props.applyJob,
                email: val,
              })
            }
            value={props?.applyJob.email}
            placeholder="Email"
            rightImgName={"email"}
            rightImgOrigin={ICON_TYPE.Fontisto}
            rightImgSize={20}
          />
          <MainInput
            onChangeText={(val) =>
              props.setApplyJob({
                ...props.applyJob,
                phone: val,
              })
            }
            value={props.applyJob.phone}
            placeholder="Phone"
            keyboardType={"number-pad"}
            maxLength={10}
          />
          <MainInput
            onChangeText={(val) =>
              props.setApplyJob({
                ...props.applyJob,
                current_Company: val,
              })
            }
            value={props.applyJob.current_Company}
            placeholder="Current Company"
          />
        </View>
        <View style={styles.containerStyl}>
          <ScaleText style={styles.headTxt}>Links</ScaleText>
          <MainInput
            onChangeText={(val) =>
              props.setApplyJob({
                ...props.applyJob,
                abby_profile_url: val,
              })
            }
            value={props.applyJob.abby_profile_url}
            placeholder="AbbyPages Profile URL"
          />
          <MainInput
            onChangeText={(val) =>
              props.setApplyJob({
                ...props.applyJob,
                linkedinUrl: val,
              })
            }
            value={props.applyJob.linkedinUrl}
            placeholder="LinkedIn URL"
          />
          <MainInput
            onChangeText={(val) =>
              props.setApplyJob({
                ...props.applyJob,
                twitterUrl: val,
              })
            }
            value={props.applyJob.twitterUrl}
            placeholder="Twitter URL"
          />
          <MainInput
            onChangeText={(val) =>
              props.setApplyJob({
                ...props.applyJob,
                githubUrl: val,
              })
            }
            value={props.applyJob.githubUrl}
            placeholder="Github URL"
          />
          <MainInput
            onChangeText={(val) =>
              props.setApplyJob({
                ...props.applyJob,
                portfolioUrl: val,
              })
            }
            value={props.applyJob.portfolioUrl}
            placeholder="Portfolio URL"
          />
          <MainInput
            onChangeText={(val) =>
              props.setApplyJob({
                ...props.applyJob,
                other_website: val,
              })
            }
            value={props.applyJob.other_website}
            placeholder="Other Website"
          />
        </View>
        <View style={[styles.containerStyl, { marginTop: 10 }]}>
          <ScaleText style={styles.headTxt}>Cover Letter</ScaleText>
          <ScaleText style={styles.coverLetterDescrptn}>
            Please include a cover letter outling your interest in AbbyPages and
            why you're our ideal candidate *
          </ScaleText>
          <TouchableOpacity
            onPress={() => props.openUpload(2)}
            style={styles.container}
          >
            <View style={styles.CameraImgView}>
              <ScaleText numberOfLines={1} style={styles.AddPhotosTxt}>
                {props.applyJob.cover_letter
                  ? props?.applyJob.cover_letter?.name
                  : "Upload File"}
              </ScaleText>
            </View>
            <View style={styles.rightImgVw}>
              <Image source={Images.UPLOAD_IMG} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.containerStyl, { marginTop: 10 }]}>
          <ScaleText style={styles.headTxt}>Us Work Status</ScaleText>
          <ScaleText style={styles.coverLetterDescrptn}>
            Are you legally authorized to work in the U.S *
          </ScaleText>
          <TouchableOpacity
            onPress={() => props.onPressYesBtn(1, 1)}
            style={styles.container}
          >
            <View style={styles.CameraImgView}>
              <Image
                style={styles.checkImgs}
                source={
                  props.applyJob.workStatus === 1
                    ? Images.ROUND_CHECK_IMG
                    : Images.ROUND_UNCHECK_IMG
                }
              />
              <ScaleText style={styles.AddPhotosTxt}>Yes</ScaleText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onPressNoBtn(1, 2)}
            style={styles.container}
          >
            <View style={styles.CameraImgView}>
              <Image
                style={styles.checkImgs}
                source={
                  props.applyJob.workStatus == 2
                    ? Images.ROUND_CHECK_IMG
                    : Images.ROUND_UNCHECK_IMG
                }
              />
              <ScaleText style={styles.AddPhotosTxt}>No</ScaleText>
            </View>
          </TouchableOpacity>
          <ScaleText style={[styles.willYouNowText, { paddingTop: 15 }]}>
            Will you now or in the future require sponsership for employment
            visa status (e.g, H1-B visa status) *
          </ScaleText>
          <TouchableOpacity
            onPress={() => props.onPressYesBtn(2, 1)}
            style={styles.container}
          >
            <View style={styles.CameraImgView}>
              <Image
                style={styles.checkImgs}
                source={
                  props.applyJob.visaStatus == 1
                    ? Images.ROUND_CHECK_IMG
                    : Images.ROUND_UNCHECK_IMG
                }
              />
              <ScaleText style={styles.AddPhotosTxt}>Yes</ScaleText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onPressNoBtn(2, 2)}
            style={styles.container}
          >
            <View style={styles.CameraImgView}>
              <Image
                style={styles.checkImgs}
                source={
                  props.applyJob.visaStatus == 2
                    ? Images.ROUND_CHECK_IMG
                    : Images.ROUND_UNCHECK_IMG
                }
              />
              <ScaleText style={styles.AddPhotosTxt}>No</ScaleText>
            </View>
          </TouchableOpacity>
          <MainInput
            onChangeText={(val) =>
              props.setApplyJob({
                ...props.applyJob,
                additional_Info: val,
              })
            }
            value={props.applyJob.additional_Info}
            placeholder="Additional Information"
          />
        </View>
        <View style={[styles.containerStyl, { marginTop: 10 }]}>
          <ScaleText style={styles.headTxt}>
            U.S equal employment opportunity information
          </ScaleText>
          <ScaleText style={styles.coverLetterDescrptn}>
            (Completion isvoluntary a. wilt not subject you to adverse
            treatment)
          </ScaleText>
          <View style={{ paddingTop: 15 }}>
            <ScaleText style={styles.coverLetterDescrptn}>
              Our company values diversity. To ensure that we comply with
              reporting requirements a. to learn more about how we can increase
              diversity In our candidate pool, we invite you to voluntarily
              provide demographic information Ina confidential survey at the end
              if this appLicanon. Providing this information isoptional. It will
              not be accessible or used in the hiring process,and has no effect
              on your opportunity for employment.
            </ScaleText>
          </View>
          <View style={styles.container}>
            <Picker
              selectedValue={props.applyJob.gender}
              style={styles.pickerVw}
              itemStyle={{
                height: Constants.Ios.OS === "ios" ? "100%" : null,
                textAlign: "left",
              }}
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
            <View style={styles.rightImgVw}>
              <Image
                source={Images.ARROW_DOWN_IMG}
                style={styles.dropDownImg}
              />
            </View>
          </View>
          <View style={styles.container}>
            <Picker
              selectedValue={props.applyJob.race}
              style={styles.pickerVw}
              itemStyle={{
                height: Constants.Ios.OS === "ios" ? "100%" : null,
                textAlign: "left",
              }}
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
            <View style={styles.rightImgVw}>
              <Image
                source={Images.ARROW_DOWN_IMG}
                style={styles.dropDownImg}
              />
            </View>
          </View>
          <View style={styles.container}>
            <Picker
              selectedValue={props.applyJob.veteran_status}
              style={styles.pickerVw}
              itemStyle={{
                height: Constants.Ios.OS === "ios" ? "100%" : null,
                textAlign: "left",
              }}
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
            <View style={styles.rightImgVw}>
              <Image
                source={Images.ARROW_DOWN_IMG}
                style={styles.dropDownImg}
              />
            </View>
          </View>
          {props.requires ? (
            <ScaleText style={styles.requireTxt}>
              All this fields are required :- Résumé, Full Name, Email, Phone
              Number, Current Company, Work Status, Visa Status
            </ScaleText>
          ) : null}
        </View>
        <Button
          buttonText="Submit Application"
          onPress={() => props.onSubmit()}
          style={styles.SubmitBtnMain}
        />
      </ScrollView>
    </View>
  );
};
export default ApplyJobView;
