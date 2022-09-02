import React from "react";
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
import styles from "./../../AddJobs/components/styles";
import Input from "../../../../Components/Input";
import Button from "../../../../Components/Button";
import Header from "../../../../Components/Header";
import CommonStyles from "../../../../Utils/CommonStyles";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../../Utils/Constant";
const EditJobScreen = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        leftImg={require("../../../../Assets/header_back_btn.png")}
        HeaderText="Edit Jobs"
        RightImg={null}
        MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
      />
      <ScrollView keyboardShouldPersistTaps={"handled"}>
        <View style={styles.BasicVwe}>
          <Text style={styles.basictxt}>Basic Job Details</Text>
        </View>
        <View style={styles.inputwvwe}>
          <TouchableOpacity
            onPress={() => props._handleOpenJobCategory()}
            style={styles.container}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props?.selectedJobCategory?.category_name
                  ? props.selectedJobCategory.category_name
                  : "Job category"}
              </Text>
            </View>
            <View style={styles.BckArrowBack}>
              <Image source={require("../../../../Assets/dropdown_icon.png")} />
            </View>
          </TouchableOpacity>

          <Input
            onChangeText={(JobTitle) => props.setJobTitle(JobTitle)}
            value={props.JobTitle}
            secureTextEntry={false}
            placeholder="Job Title *"
            InputType="withScroll"
          />
          <Input
            onChangeText={(Openings) => props.setOpenings(Openings)}
            value={props.Openings}
            secureTextEntry={false}
            placeholder="No Of Openings *"
            InputType="withScroll"
          />
          <Input
            onChangeText={(startTimeDay) => props.setStartTimeDay(startTimeDay)}
            value={props.startTimeDay}
            secureTextEntry={false}
            placeholder="Start working days*"
            InputType="withScroll"
            keyboardType={"numeric"}
          />
          <Input
            onChangeText={(endTimeDay) => props.setEndTimeDay(endTimeDay)}
            value={props.endTimeDay}
            secureTextEntry={false}
            placeholder="End working days*"
            InputType="withScroll"
            keyboardType={"numeric"}
          />
          <Input
            onChangeText={(SalaryFrom) => props.setSalaryFrom(SalaryFrom)}
            value={props.SalaryFrom}
            secureTextEntry={false}
            placeholder="Monthly In-hand Salary From *"
            InputType="withScroll"
          />
          <Input
            onChangeText={(SalaryTo) => props.setSalaryTo(SalaryTo)}
            value={props.SalaryTo}
            secureTextEntry={false}
            placeholder="Monthly In-hand Salary To *"
            InputType="withScroll"
          />
          <TouchableOpacity
            onPress={() => props._handleModalOpen()}
            style={styles.container}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props?.selectedCountry?.name
                  ? props?.selectedCountry?.name
                  : "Select country"}
              </Text>
            </View>
            <View style={styles.BckArrowBack}>
              <Image source={require("../../../../Assets/dropdown_icon.png")} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props._handleStateModalOpen()}
            style={styles.container}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props?.selectedState?.name
                  ? props?.selectedState?.name
                  : "Select state"}
              </Text>
            </View>
            <View style={styles.BckArrowBack}>
              <Image source={require("../../../../Assets/dropdown_icon.png")} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props._handleCityModalOpen()}
            style={styles.container}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props?.selectedCity?.name
                  ? props?.selectedCity?.name
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
            multiline
            numberOfLines={2}
            style={styles.jobinputvwe}
            onChangeText={(JobDescription) =>
              props.setJobDescription(JobDescription)
            }
            value={props?.JobDescription?.replace(/<\/?[^>]+>/gi, " ")}
            secureTextEntry={false}
            placeholder="Job Info / Job Description *"
            InputType="withScroll"
          />
        </View>
        <Input
          onChangeText={(jobRequirements) =>
            props.setJobReqiurements(jobRequirements)
          }
          value={props?.jobRequirements?.replace(/<\/?[^>]+>/gi, " ")}
          secureTextEntry={false}
          placeholder="Job Requirements*"
          InputType="withScroll"
        />
        <View style={styles.inputwvwe}>
          <TouchableOpacity
            style={styles.secContainer}
            onPress={() => props.showTimePicker()}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props.startTime ? props.startTime : "Start Time"}
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
          {/* End time */}
          <TouchableOpacity
            style={styles.secContainer}
            onPress={() => props.showEndTimePicker()}
          >
            <View style={styles.CameraImgView}>
              <Text style={styles.AddPhotosTxt}>
                {props.endTime ? props.endTime : "End Time"}
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
            onChangeText={(InterviewDetails) =>
              props.setInterviewDetails(InterviewDetails)
            }
            value={props.InterviewDetails?.replace(/<\/?[^>]+>/gi, " ")}
            secureTextEntry={false}
            placeholder="Interview Details *"
            InputType="withScroll"
          />
          <Input
            onChangeText={(jobLevel) => props.setJobLevel(jobLevel)}
            value={props.jobLevel}
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
            onChangeText={(CompanyName) => props.setCompanyName(CompanyName)}
            value={props.CompanyName}
            secureTextEntry={false}
            placeholder="Company Name *"
            InputType="withScroll"
          />
          <Input
            onChangeText={(CompanyPersonName) =>
              props.setCompanyPersonName(CompanyPersonName)
            }
            value={props.CompanyPersonName}
            secureTextEntry={false}
            placeholder="Company Person Name *"
            InputType="withScroll"
          />
          <Input
            onChangeText={(language) => props.setLanguage(language)}
            value={props.language}
            secureTextEntry={false}
            placeholder="Language"
            InputType="withScroll"
          />
          <Input
            onChangeText={(PhoneNumber) => props.setPhoneNumber(PhoneNumber)}
            value={props.PhoneNumber}
            secureTextEntry={false}
            keyboardType={"numeric"}
            placeholder="Phone Number *"
            InputType="withScroll"
          />
          <Input
            onChangeText={(EmailID) => props.setEmailID(EmailID)}
            value={props.EmailID}
            secureTextEntry={false}
            keyboardType={"email-address"}
            placeholder="Email ID *"
            InputType="withScroll"
          />
          <View style={styles.jobdesvwe}>
            <Input
              multiline
              numberOfLines={2}
              style={styles.jobinputvwe}
              onChangeText={(JobAddress) => props.setJobAddress(JobAddress)}
              value={props.JobTitle}
              secureTextEntry={false}
              placeholder="Job Address *"
              InputType="withScroll"
            />
            <Input
              onChangeText={(skills) => props.setSkills(skills)}
              value={props.skills}
              secureTextEntry={false}
              placeholder="Skills"
              InputType="withScroll"
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => props.setMenuTypeVisible()}
              style={styles.tchvwe}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: FONT_FAMILY_REGULAR,
                  color: BLACK_COLOR_CODE,
                }}
              >
                {/* {props?.selectedBenefits.length > 0 ? null : "Select job benefits"} */}
                Select job benefits
              </Text>
              {/* {props?.selectedBenefits?.map((data) => {
                return (
                  <View style={{}}>
                    <Text style={styles.slctdtxt}>
                      •{data.job_benefits_name}
                    </Text>
                  </View>
                );
              })} */}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footermainvwe}>
          <View style={styles.conditionvwe}>
            <TouchableOpacity onPress={() => props._handleFocus()}>
              <Image
                style={styles.alluncheck}
                source={
                  props.box
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
      {/* Country Modal */}
      <Modal
        animationType="slide"
        visible={props.countryVisible}
        onRequestClose={() => {
          props.setCountryVisible(false);
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View style={styles.moadlvwe}>
            <View style={styles.headervwe}>
              <View style={{ flex: 1 }} />
              <View style={styles.arealstvwe}>
                <Text style={styles.arealsttxt}>Country List</Text>
              </View>
              <TouchableOpacity
                onPress={() => props.setCountryVisible(false)}
                style={styles.cancelbtnimgvwe}
              >
                <Image
                  style={styles.cancelimg}
                  source={require("../../../../Assets/cancelModalBtn.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: "15%" }}>
              <View style={{ width: "100%" }}>
                <TextInput
                  placeholder={"Search country"}
                  onChangeText={(text) => props.SearchCountry(text)}
                  style={styles.TxtInptStyle}
                />
              </View>
              <FlatList
                data={props.countryList}
                renderItem={(item) => props.renderCountryListItem(item)}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </View>
      </Modal>
      {/*  */}
      {/* State Modal */}
      <Modal
        animationType="slide"
        visible={props.stateVisible}
        onRequestClose={() => {
          props.setStateVisible(false);
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View style={styles.moadlvwe}>
            <View style={styles.headervwe}>
              <View style={{ flex: 1 }} />
              <View style={styles.arealstvwe}>
                <Text style={styles.arealsttxt}>State List</Text>
              </View>
              <TouchableOpacity
                onPress={() => props.setStateVisible(false)}
                style={styles.cancelbtnimgvwe}
              >
                <Image
                  style={styles.cancelimg}
                  source={require("../../../../Assets/cancelModalBtn.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: "15%" }}>
              <View style={{ width: "100%" }}>
                <TextInput
                  placeholder={"Search state"}
                  onChangeText={(text) => props.SearchState(text)}
                  style={styles.TxtInptStyle}
                />
              </View>
              <FlatList
                data={props.stateList}
                renderItem={(item) => props.renderStateListItem(item)}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={() => {
                  return (
                    <View
                      style={{
                        flex: 1,
                        alignSelf: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: FONT_FAMILY_REGULAR,
                          fontSize: 15,
                        }}
                      >
                        First select Country.
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
      {/*  */}

      {/* City Modal */}
      <Modal
        animationType="slide"
        visible={props.cityVisible}
        onRequestClose={() => {
          props.setCityVisible(false);
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View style={styles.moadlvwe}>
            <View style={styles.headervwe}>
              <View style={{ flex: 1 }} />
              <View style={styles.arealstvwe}>
                <Text style={styles.arealsttxt}>City List</Text>
              </View>
              <TouchableOpacity
                onPress={() => props.setCityVisible(false)}
                style={styles.cancelbtnimgvwe}
              >
                <Image
                  style={styles.cancelimg}
                  source={require("../../../../Assets/cancelModalBtn.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: "15%" }}>
              <View style={{ width: "100%" }}>
                <TextInput
                  placeholder={"Search city"}
                  onChangeText={(text) => props.SearchCity(text)}
                  style={styles.TxtInptStyle}
                />
              </View>
              <FlatList
                data={props.cityList}
                renderItem={(item) => props.renderCityListItem(item)}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={() => {
                  return (
                    <View
                      style={{
                        flex: 1,
                        alignSelf: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: FONT_FAMILY_REGULAR,
                          fontSize: 15,
                        }}
                      >
                        First select State.
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
      {/*  */}
      <Modal
        animationType="slide"
        visible={props.addJobCategoryModalVisible}
        onRequestClose={() => {
          props.setAddJobCategoryModalVisible(false);
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View style={styles.moadlvwe}>
            <View style={styles.headervwe}>
              <View style={{ flex: 1 }} />
              <View style={styles.arealstvwe}>
                <Text style={styles.arealsttxt}>Job category list</Text>
              </View>
              <TouchableOpacity
                onPress={() => props.setAddJobCategoryModalVisible(false)}
                style={styles.cancelbtnimgvwe}
              >
                <Image
                  style={styles.cancelimg}
                  source={require("../../../../Assets/cancelModalBtn.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: "15%" }}>
              <FlatList
                data={props.jobCategoryList}
                renderItem={(item) => props.renderJobCategoryListItem(item)}
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
