import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import Button from "../../../../../Components/Button";
import Header from "../../../../../Components/Header";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../../Utils/Constant";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Input from "../../../../../Components/Input";

const AppliedJobDetailsScreen = (props) => {
  const hideDatePicker = () => {
    props.setDatePicker(false);
  };
  const hideTimePicker = () => {
    props.setIsTimePicker(false);
  };
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="Applied Job Details"
        RightImg={null}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <ScrollView>
        <View style={styles.maincontainers}>
          <Text style={styles.mainTxt}>
            {props?.orderData?.first_name + " " + props?.orderData?.last_name}
          </Text>
          <Text style={[styles.mainTxt, { fontSize: 15 }]}>
            Job :- {props?.orderData?.jobs?.job_title}
          </Text>
          <View style={styles.straightVw}>
            <Image
              style={{ width: 18, height: 18, tintColor: YELLOW_COLOR_CODE }}
              source={
                props?.orderData?.order_status === 1
                  ? require("../../../../../Assets/verified_icon.png")
                  : require("../../../../../Assets/close_window_icon.png")
              }
            />
            <Text style={styles.otherTxt}>
              {props?.orderData?.order_status === 0 && " Pending"}
              {props?.orderData?.order_status === 1 && " Accepted"}
              {props?.orderData?.order_status === 2 && " In Process"}
              {props?.orderData?.order_status === 3 && " Cancelled By User"}
              {props?.orderData?.order_status === 4 && " Cancelled By Business"}
              {props?.orderData?.order_status === 5 && " Completed"}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={1}
            // onPress={() => props.onPressResume()}
            style={[styles.straightVw, { paddingVertical: 10 }]}
          >
            <Image
              resizeMode={"contain"}
              style={{ width: 45, height: 45, marginRight: 12 }}
              source={require("../../../../../Assets/upload_icon_box.png")}
            />
            <View>
              <Text style={styles.mainTxt}>Resume</Text>
              <Text style={styles.smallTxt}>You can download it</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.maincontainers}>
          <Text style={styles.mainTxt}>Recruitment Information</Text>
          <View style={styles.straightVw}>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Image
                style={styles.dotIcon}
                source={require("../../../../../Assets/musical-sign-of-one-dots.png")}
              />
              <Text style={styles.secondaryTxt}>Work Location :</Text>
            </View>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Text style={styles.smallTxt}>
                {props?.orderData?.jobs?.job_address}
              </Text>
            </View>
          </View>
          <View style={styles.straightVw}>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Image
                style={styles.dotIcon}
                source={require("../../../../../Assets/musical-sign-of-one-dots.png")}
              />
              <Text style={styles.secondaryTxt}>Industry :</Text>
            </View>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Text style={styles.smallTxt}>
                {props?.orderData?.jobs?.job_title}
              </Text>
            </View>
          </View>
          <View style={styles.straightVw}>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Image
                style={styles.dotIcon}
                source={require("../../../../../Assets/musical-sign-of-one-dots.png")}
              />
              <Text style={styles.secondaryTxt}>Job Level :</Text>
            </View>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Text style={styles.smallTxt}>
                {props?.orderData?.jobs?.job_level}
              </Text>
            </View>
          </View>
          <View style={styles.straightVw}>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Image
                style={styles.dotIcon}
                source={require("../../../../../Assets/musical-sign-of-one-dots.png")}
              />
              <Text style={styles.secondaryTxt}>Type :</Text>
            </View>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Text style={styles.smallTxt}>
                {props?.orderData?.jobs?.job_type}
              </Text>
            </View>
          </View>
          <View style={styles.straightVw}>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Image
                style={styles.dotIcon}
                source={require("../../../../../Assets/musical-sign-of-one-dots.png")}
              />
              <Text style={styles.secondaryTxt}>Salary :</Text>
            </View>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Text style={styles.smallTxt}>
                ${props?.orderData?.jobs?.monthly_in_hand_salary_from} - $
                {props?.orderData?.jobs?.monthly_in_hand_salary_to}
              </Text>
            </View>
          </View>
          <View style={styles.straightVw}>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Image
                style={styles.dotIcon}
                source={require("../../../../../Assets/musical-sign-of-one-dots.png")}
              />
              <Text style={styles.secondaryTxt}>Skills Requirement :</Text>
            </View>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Text style={styles.smallTxt}>
                {props?.orderData?.jobs?.skills}
              </Text>
            </View>
          </View>
          <View style={styles.straightVw}>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Image
                style={styles.dotIcon}
                source={require("../../../../../Assets/musical-sign-of-one-dots.png")}
              />
              <Text style={styles.secondaryTxt}>Language :</Text>
            </View>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Text style={styles.smallTxt}>
                {props?.orderData?.jobs?.language}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.maincontainers}>
          <Text style={styles.mainTxt}>User Information</Text>
          <View style={styles.straightVw}>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Image
                style={styles.dotIcon}
                source={require("../../../../../Assets/musical-sign-of-one-dots.png")}
              />
              <Text style={styles.secondaryTxt}>User Name :</Text>
            </View>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Text style={styles.smallTxt}>
                {props?.orderData?.userInfo?.user_name}
              </Text>
            </View>
          </View>
          <View style={styles.straightVw}>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Image
                style={styles.dotIcon}
                source={require("../../../../../Assets/musical-sign-of-one-dots.png")}
              />
              <Text style={styles.secondaryTxt}>Email :</Text>
            </View>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Text style={styles.smallTxt}>
                {props?.orderData?.userInfo?.email}
              </Text>
            </View>
          </View>
          <View style={styles.straightVw}>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Image
                style={styles.dotIcon}
                source={require("../../../../../Assets/musical-sign-of-one-dots.png")}
              />
              <Text style={styles.secondaryTxt}>Mobile :</Text>
            </View>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Text style={styles.smallTxt}>
                {props?.orderData?.userInfo?.phone}
              </Text>
            </View>
          </View>
          <View style={styles.straightVw}>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Image
                style={styles.dotIcon}
                source={require("../../../../../Assets/musical-sign-of-one-dots.png")}
              />
              <Text style={styles.secondaryTxt}>Current Company :</Text>
            </View>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Text style={styles.smallTxt}>
                {props?.orderData?.userInfo?.current_company}
              </Text>
            </View>
          </View>
          <View style={styles.straightVw}>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Image
                style={styles.dotIcon}
                source={require("../../../../../Assets/musical-sign-of-one-dots.png")}
              />
              <Text style={styles.secondaryTxt}>Gender :</Text>
            </View>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Text style={styles.smallTxt}>
                {props?.orderData?.userInfo?.gender === "1"
                  ? "Male"
                  : props?.orderData?.userInfo?.gender === "2"
                  ? "Female"
                  : "other"}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.maincontainers}>
          <Text style={styles.mainTxt}>U.S Work Status</Text>
          <View style={styles.straightVw}>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Image
                style={styles.dotIcon}
                source={require("../../../../../Assets/musical-sign-of-one-dots.png")}
              />
              <Text style={[styles.secondaryTxt, { width: "80%" }]}>
                You legally authorised to work status :
              </Text>
            </View>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Text style={styles.smallTxt}>
                {props?.orderData?.userInfo
                  ?.you_legally_authorized_to_work_status === 1
                  ? "Yes"
                  : props?.orderData?.userInfo
                      ?.you_legally_authorized_to_work_status != 1 && "No"}
              </Text>
            </View>
          </View>
          <View style={styles.straightVw}>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Image
                style={styles.dotIcon}
                source={require("../../../../../Assets/musical-sign-of-one-dots.png")}
              />
              <Text style={[styles.secondaryTxt, { width: "80%" }]}>
                Future require sponsorship for employment visa :
              </Text>
            </View>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Text style={styles.smallTxt}>
                {props?.orderData?.userInfo
                  ?.future_require_sponsorship_for_employment_visa === 1
                  ? "Yes"
                  : props?.orderData?.userInfo
                      ?.future_require_sponsorship_for_employment_visa != 1 &&
                    "No"}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.maincontainers}>
          <Text style={styles.mainTxt}>Interview Scheduled</Text>
          <View style={styles.straightVw}>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Image
                style={styles.dotIcon}
                source={require("../../../../../Assets/musical-sign-of-one-dots.png")}
              />
              <Text style={[styles.secondaryTxt, { width: "80%" }]}>
                Interview Scheduled on:
              </Text>
            </View>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Text style={styles.smallTxt}>
                {props?.orderData?.userInfo?.interview_date}
              </Text>
            </View>
          </View>
          <View style={styles.straightVw}>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Image
                style={styles.dotIcon}
                source={require("../../../../../Assets/musical-sign-of-one-dots.png")}
              />
              <Text style={[styles.secondaryTxt, { width: "80%" }]}>
                Interview Scheduled time:
              </Text>
            </View>
            <View style={[styles.straightVw, { flex: 1 }]}>
              <Text style={styles.smallTxt}>
                {props?.orderData?.userInfo?.interview_time}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Button
            buttonText={"JOB ACCEPTED"}
            showIcon={true}
            tintColor={WHITE_COLOR_CODE}
            iconName={require("../../../../../Assets/verified_icon.png")}
            onPress={() => props.setJobAccepted(true)}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.jobAccepted}
          onRequestClose={() => props.setJobAccepted(false)}
        >
          <View style={styles.modalCon}>
            <View style={styles.modelVw}>
              <Text
                style={[
                  styles.mainTxt,
                  { alignSelf: "center", marginBottom: 10 },
                ]}
              >
                Scheduled Time
              </Text>
              <TouchableOpacity
                onPress={() => props.setJobAccepted(false)}
                style={styles.modalCloseVw}
              >
                <Image
                  resizeMode={"contain"}
                  style={{ width: 24, height: 24 }}
                  source={require("../../../../../Assets/cancelModalBtn.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.setDatePicker(true)}
                style={styles.modalContentVw}
              >
                <View style={styles.modalTxtVw}>
                  <Text style={styles.modalTxt}>
                    {props?.jobAcceptData?.date
                      ? props?.jobAcceptData?.date
                      : "Select Date"}
                  </Text>
                </View>
                <View style={styles.bckArrowBack}>
                  <Image
                    source={require("../../../../../Assets/calendar_icon.png")}
                  />
                </View>
                <DateTimePickerModal
                  isVisible={props.isDatePicker}
                  mode="date"
                  minimumDate={new Date()}
                  onConfirm={(date) => props.handleConfirm(date)}
                  onCancel={hideDatePicker}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalContentVw}
                onPress={() => props.setIsTimePicker(true)}
              >
                <View style={styles.modalTxtVw}>
                  <Text style={styles.modalTxt}>
                    {props?.jobAcceptData?.time
                      ? props?.jobAcceptData?.time
                      : "Select Time"}
                  </Text>
                </View>
                <View style={styles.bckArrowBack}>
                  <Image
                    source={require("../../../../../Assets/dropdown_icon.png")}
                  />
                </View>
                <DateTimePickerModal
                  isVisible={props.isTimePicker}
                  mode="time"
                  onConfirm={(date) => props.handleTimeConfirm(date)}
                  onCancel={hideTimePicker}
                />
              </TouchableOpacity>
              <Input
                onChangeText={(text) =>
                  props.setJobAcceptData({
                    ...props.jobAcceptData,
                    description: text,
                  })
                }
                multiline={true}
                value={props.jobAcceptData.description}
                textInputStyle={{ bottom: 5, right: 5 }}
                secureTextEntry={false}
                placeholder="Description"
                InputType={null}
              />
              <View style={{ marginVertical: 12 }}>
                <Button
                  buttonText={"Save"}
                  onPress={() => props.scheduleConfirm()}
                />
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};
export default AppliedJobDetailsScreen;