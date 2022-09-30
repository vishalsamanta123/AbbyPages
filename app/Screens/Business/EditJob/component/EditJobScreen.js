import React, { useState } from "react";
import {
  Text,
  View,
  Modal,
  Image,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import Input from "../../../../Components/Input";
import Button from "../../../../Components/Button";
import Header from "../../../../Components/Header";
import CommonStyles from "../../../../Utils/CommonStyles";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const EditJobScreen = (props) => {
  const [isFocused, setIsfocused] = useState(false);
  return (
    <View style={CommonStyles.container}>
      <Header
        leftImg={require("../../../../Assets/header_back_btn.png")}
        HeaderText="Edit Jobs"
        RightImg={null}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <ScrollView keyboardShouldPersistTaps={"handled"}>
        <View style={styles.BasicVwe}>
          <Text style={styles.basictxt}>Basic Job Details</Text>
        </View>
        <View style={styles.inputwvwe}>
          <TouchableOpacity
            onPress={() => props.handleOpenModal(1)}
            style={styles.container}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props?.jobForm?.job_category_name
                  ? props?.jobForm?.job_category_name
                  : "Job Category"}
              </Text>
            </View>
            <View style={styles.BckArrowBack}>
              <Image source={require("../../../../Assets/dropdown_icon.png")} />
            </View>
          </TouchableOpacity>
          <Input
            onChangeText={(text) =>
              props.setJobForm({
                ...props.jobForm,
                job_title: text,
              })
            }
            value={props.jobForm.job_title}
            secureTextEntry={false}
            placeholder="Job Title *"
            InputType="withScroll"
          />
          <Input
            onChangeText={(text) =>
              props.setJobForm({
                ...props.jobForm,
                no_of_openings: text,
              })
            }
            value={props?.jobForm?.no_of_openings}
            secureTextEntry={false}
            placeholder="No Of Openings *"
            InputType="withScroll"
          />
          <Input
            onChangeText={(text) =>
              props.setJobForm({
                ...props.jobForm,
                startTimeDay: text,
              })
            }
            value={props?.jobForm?.startTimeDay}
            secureTextEntry={false}
            placeholder="Start working days*"
            InputType="withScroll"
            keyboardType={"numeric"}
          />
          <Input
            onChangeText={(text) =>
              props.setJobForm({
                ...props.jobForm,
                endTimeDay: text,
              })
            }
            value={props?.jobForm?.endTimeDay}
            secureTextEntry={false}
            placeholder="End working days*"
            InputType="withScroll"
            keyboardType={"numeric"}
          />
          <Input
            onChangeText={(text) =>
              props.setJobForm({
                ...props.jobForm,
                monthly_in_hand_salary_from: text,
              })
            }
            value={props?.jobForm?.monthly_in_hand_salary_from}
            secureTextEntry={false}
            placeholder="Monthly In-hand Salary From *"
            InputType="withScroll"
          />
          <Input
            onChangeText={(text) =>
              props.setJobForm({
                ...props.jobForm,
                monthly_in_hand_salary_to: text,
              })
            }
            value={props?.jobForm?.monthly_in_hand_salary_to}
            secureTextEntry={false}
            placeholder="Monthly In-hand Salary To *"
            InputType="withScroll"
          />
          <TouchableOpacity
            onPress={() => props.handleOpenModal(2)}
            style={styles.container}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props?.jobForm?.country_name
                  ? props?.jobForm?.country_name
                  : "Select country"}
              </Text>
            </View>
            <View style={styles.BckArrowBack}>
              <Image source={require("../../../../Assets/dropdown_icon.png")} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.handleOpenModal(3)}
            style={styles.container}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props?.jobForm?.state_name
                  ? props?.jobForm?.state_name
                  : "Select state"}
              </Text>
            </View>
            <View style={styles.BckArrowBack}>
              <Image source={require("../../../../Assets/dropdown_icon.png")} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.handleOpenModal(4)}
            style={styles.container}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props?.jobForm?.city_name
                  ? props?.jobForm?.city_name
                  : "Select city"}
              </Text>
            </View>
            <View style={styles.BckArrowBack}>
              <Image source={require("../../../../Assets/dropdown_icon.png")} />
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.container}>
                            <View style={styles.CameraImgView}>
                                <Text style={styles.AddPhotosTxt}>Job Location *</Text>
                            </View>
                            <View style={styles.BckArrowBack}>
                                <Image source={require('../../../../Assets/dropdown_icon.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container}>
                            <View style={styles.CameraImgView}>
                                <Text style={styles.AddPhotosTxt}>Eg. Andheri</Text>
                            </View>
                            <View style={styles.BckArrowBack}>
                                <Image source={require('../../../../Assets/dropdown_icon.png')} />
                            </View>
                        </TouchableOpacity> */}
        </View>
        <View style={styles.addtionalvwe}>
          <Text style={styles.addtionaltxt}>Additional Job Details</Text>
        </View>
        <View style={styles.jobdesvwe}>
          <Input
            multiline={true}
            numberOfLines={2}
            textInputStyle={styles.jobinputvwe}
            onChangeText={(text) =>
              props.setJobForm({
                ...props.jobForm,
                job_description: text,
              })
            }
            value={props?.jobForm?.job_description?.replace(
              /<\/?[^>]+>/gi,
              " "
            )}
            secureTextEntry={false}
            placeholder="Job Info / Job Description *"
            InputType="withScroll"
          />
        </View>
        <Input
          textInputStyle={styles.jobinputvwe}
          onChangeText={(text) =>
            props.setJobForm({
              ...props.jobForm,
              job_requirements: text,
            })
          }
          value={props?.jobForm?.job_requirements?.replace(/<\/?[^>]+>/gi, " ")}
          secureTextEntry={false}
          placeholder="Job Requirements*"
          InputType="withScroll"
        />
        <View style={styles.inputwvwe}>
          <TouchableOpacity
            style={styles.secContainer}
            onPress={() => props.setIsStartTimePickerVisible(true)}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props?.jobForm?.startTime
                  ? props?.jobForm?.startTime
                  : "Start Time"}
              </Text>
            </View>
            <View style={styles.BckArrowBack}>
              <Image source={require("../../../../Assets/dropdown_icon.png")} />
            </View>
            <DateTimePickerModal
              isVisible={props.isStartTimePickerVisible}
              mode="time"
              onConfirm={props.handleTimeConfirm}
              onCancel={props.hideTimePicker}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secContainer}
            onPress={() => props.setIsEndTimePickerVisible(true)}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props?.jobForm?.endTime ? props?.jobForm?.endTime : "End Time"}
              </Text>
            </View>
            <View style={styles.BckArrowBack}>
              <Image source={require("../../../../Assets/dropdown_icon.png")} />
            </View>
            <DateTimePickerModal
              isVisible={props.isEndTimePickerVisible}
              mode="time"
              onConfirm={props.handleEndTimeConfirm}
              onCancel={props.hideEndTimePicker}
            />
          </TouchableOpacity>
          <Input
            textInputStyle={styles.jobinputvwe}
            onChangeText={(text) =>
              props.setJobForm({
                ...props.jobForm,
                interview_details: text,
              })
            }
            value={props?.jobForm?.interview_details?.replace(
              /<\/?[^>]+>/gi,
              " "
            )}
            secureTextEntry={false}
            placeholder="Interview Details *"
            InputType="withScroll"
          />
          <Input
            onChangeText={(text) =>
              props.setJobForm({
                ...props.jobForm,
                job_level: text,
              })
            }
            value={props?.jobForm?.job_level}
            secureTextEntry={false}
            placeholder="Job level*"
            InputType="withScroll"
          />
        </View>
        <View style={styles.addjobd}>
          <Text style={styles.addjobdtxt}>Additional Job Details</Text>
        </View>
        <View style={styles.inputwvwe}>
          <Input
            onChangeText={(text) =>
              props.setJobForm({
                ...props.jobForm,
                company_name: text,
              })
            }
            value={props?.jobForm?.company_name}
            secureTextEntry={false}
            placeholder="Company Name *"
            InputType="withScroll"
          />
          <Input
            onChangeText={(text) =>
              props.setJobForm({
                ...props.jobForm,
                company_personName: text,
              })
            }
            value={props?.jobForm?.company_personName}
            secureTextEntry={false}
            placeholder="Company Person Name *"
            InputType="withScroll"
          />
          <Input
            onChangeText={(text) =>
              props.setJobForm({
                ...props.jobForm,
                language: text,
              })
            }
            value={props?.jobForm?.language}
            secureTextEntry={false}
            placeholder="Language"
            InputType="withScroll"
          />
          <Input
            onChangeText={(text) =>
              props.setJobForm({
                ...props.jobForm,
                phone_no: text,
              })
            }
            value={props?.jobForm?.phone_no}
            secureTextEntry={false}
            keyboardType={"numeric"}
            placeholder="Phone Number *"
            InputType="withScroll"
          />
          <Input
            onChangeText={(text) =>
              props.setJobForm({
                ...props.jobForm,
                email_id: text,
              })
            }
            value={props?.jobForm?.email_id}
            secureTextEntry={false}
            keyboardType={"email-address"}
            placeholder="Email ID *"
            InputType="withScroll"
          />
          <View style={styles.jobdesvwe}>
            <View style={styles.inputsVw}>
              {props.jobForm.job_address != "" && (
                <Text
                  style={[
                    styles.inputTitleTxt,
                    {
                      top: isFocused ? 0 : -10,
                      color: isFocused ? "" : BLACK_COLOR_CODE,
                      backgroundColor: isFocused ? "" : WHITE_COLOR_CODE,
                      fontSize: isFocused ? 1 : 16,
                    },
                  ]}
                >
                  {"Job Address *"}
                </Text>
              )}
              <GooglePlacesAutocomplete
                placeholder="Job Address *"
                fetchDetails={true}
                onPress={(data, details = null) => {
                  props.setJobForm({
                    ...props.jobForm,
                    job_address: details.formatted_address,
                  });
                }}
                value={props.jobForm.job_address}
                query={{
                  key: "AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM",
                  language: "en",
                }}
                textInputProps={{
                  placeholderTextColor: BLACK_COLOR_CODE,
                  onChangeText: (e) => {
                    props.setJobForm({
                      ...props.jobForm,
                      job_address: e,
                    });
                  },
                  value: props.jobForm.job_address,
                }}
                styles={{
                  textInputContainer: {
                    fontSize: 15,
                    fontFamily: FONT_FAMILY_REGULAR,
                    color: BLACK_COLOR_CODE,
                    paddingLeft: 14,
                  },
                  textInput: {
                    fontSize: 15,
                    color: BLACK_COLOR_CODE,
                    fontFamily: FONT_FAMILY_REGULAR,
                  },
                  listView: {
                    backgroundColor: WHITE_COLOR_CODE,
                  },
                }}
                minLength={2}
                autoFocus={false}
                returnKeyType={"default"}
              />
            </View>
            <Input
              onChangeText={(text) =>
                props.setJobForm({
                  ...props.jobForm,
                  skills: text,
                })
              }
              value={props?.jobForm?.skills}
              secureTextEntry={false}
              placeholder="Skills"
              InputType="withScroll"
            />
          </View>
          <View style={styles.arraySelectVw}>
            <TouchableOpacity
              onPress={() => props.setMenuTypeVisible()}
              style={styles.tchvwe}
            >
              <Text style={styles.titlesTxt}>Select job benefits</Text>
              {typeof props?.jobForm?.job_benefits[0] === "object" &&
              props?.jobForm?.job_benefits?.length > 0 ? (
                <View style={styles.arrayVw}>
                  {props?.jobForm?.job_benefits?.map((item) => {
                    return (
                      <View style={styles.arrayItmVw}>
                        <Text style={styles.slctdtxt}>
                          • {item.job_benefits_name}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              ) : null}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footermainvwe}>
          <View style={styles.conditionvwe}>
            <TouchableOpacity
              onPress={() =>
                props.setJobForm({
                  ...props.jobForm,
                  accpt_trms_cond:
                    props?.jobForm?.accpt_trms_cond === 1 ? "" : 1,
                })
              }
            >
              <Image
                style={styles.alluncheck}
                source={
                  props?.jobForm?.accpt_trms_cond === ""
                    ? require("../../../../Assets/unchecked_circled_icon_box.png")
                    : require("../../../../Assets/checked_circled_icon_box.png")
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.acceptvwe}>
            <Text style={styles.accepttxt}>
              I Accept Terms And Conditions and Privacy Policy.*
            </Text>
          </View>
        </View>
        <View style={styles.btnvwe}>
          <Button
            buttonLabelStyle={styles.btntxt}
            buttonText="Submit"
            onPress={props.onPressSubmit}
            style={styles.btnstyle}
          />
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        visible={props.modalVisible}
        onRequestClose={() => {
          props.handleCloseModal();
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View style={styles.moadlvwe}>
            <View style={styles.headervwe}>
              <View style={{ flex: 1 }} />
              <View style={styles.arealstvwe}>
                <Text style={styles.arealsttxt}>
                  {props?.modalResp === 1
                    ? "Job Category List"
                    : props?.modalResp === 2
                    ? "Country List"
                    : props?.modalResp === 3
                    ? "State List"
                    : props?.modalResp === 4
                    ? "City List"
                    : "List"}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => props.handleCloseModal()}
                style={styles.cancelbtnimgvwe}
              >
                <Image
                  style={styles.cancelimg}
                  source={require("../../../../Assets/cancelModalBtn.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: "15%" }}>
              {props?.modalResp != 1 && (
                <View style={{ width: "100%" }}>
                  <TextInput
                    placeholder={
                      props?.modalResp === 2
                        ? "Search Country"
                        : props?.modalResp === 3
                        ? "Search State"
                        : props?.modalResp === 4
                        ? "Search City"
                        : "Search"
                    }
                    onChangeText={(text) => props.SearchPlace(text)}
                    style={styles.TxtInptStyle}
                  />
                </View>
              )}
              <FlatList
                data={
                  props?.modalResp === 1
                    ? props?.jobCategoryList
                    : props?.modalResp === 2
                    ? props?.countryList
                    : props?.modalResp === 3
                    ? props?.stateList
                    : props?.modalResp === 4
                    ? props?.cityList
                    : []
                }
                renderItem={(item) => props.renderModalList(item)}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </View>
      </Modal>
      {/*  */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={props.menuTypeVisible}
        onRequestClose={() => {
          props.setMenuTypeVisible(!props.menuTypeVisible);
        }}
      >
        <TouchableOpacity activeOpacity={1} style={styles.centeredView}>
          <View style={styles.alertBackground}>
            <View style={styles.selectyoursize}>
              <Text style={styles.sizeslct}>Select job bennifits</Text>
            </View>
            <TouchableOpacity
              style={styles.cancelvwe}
              underlayColor={"#F5F5F5"}
              onPress={() => props.setMenuTypeVisible(false)}
            >
              <Image
                style={styles.closeicon}
                source={require("../../../../Assets/cancelModalBtn.png")}
              />
            </TouchableOpacity>
            <FlatList
              data={props.benifitsStaticContent}
              renderItem={(item, index) =>
                props.renderStaticContentData(item, index)
              }
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
export default EditJobScreen;
