import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    FlatList,
    Modal,
} from 'react-native';
import styles from './styles';
import Header from '../../../../Components/Header';
import Button from '../../../../Components/Button';
import CommonStyles from '../../../../Utils/CommonStyles';
import Input from '../../../../Components/Input';
import { FONT_FAMILY_REGULAR, WHITE_COLOR_CODE } from '../../../../Utils/Constant';
const AddJobs = (props) => {
    return (
        <View style={[CommonStyles.container]}>
            <Header
                leftImg={require('../../../../Assets/header_back_btn.png')}
                HeaderText="Add Jobs"
                RightImg={null}
            />
            <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
                <ScrollView>
                    <View style={styles.BasicVwe}>
                        <Text style={styles.basictxt}>Basic Job Details</Text>
                    </View>
                    <View style={styles.inputwvwe}>
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
                        <TouchableOpacity onPress={() => props._handleModalOpen()} style={styles.container}>
                            <View style={styles.CameraImgView}>
                                <Text style={styles.AddPhotosTxt}>
                                    {props?.selectedCountry.name ? props?.selectedCountry.name : 'Select country'}
                                </Text>
                            </View>
                            <View style={styles.BckArrowBack}>
                                <Image source={require('../../../../Assets/dropdown_icon.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props._handleStateModalOpen()} style={styles.container}>
                            <View style={styles.CameraImgView}>
                                <Text style={styles.AddPhotosTxt}>
                                    {props?.selectedState.name ? props?.selectedState.name : 'Select state'}
                                </Text>
                            </View>
                            <View style={styles.BckArrowBack}>
                                <Image source={require('../../../../Assets/dropdown_icon.png')} />
                            </View>
                        </TouchableOpacity>

                        {/* <Input
                            onChangeText={(city) => props.setcity(city)}
                            value={props.city}
                            secureTextEntry={false}
                            placeholder="Job city"
                            InputType="withScroll"
                        /> */}
                        <TouchableOpacity onPress={() => props._handleCityModalOpen()} style={styles.container}>
                            <View style={styles.CameraImgView}>
                                <Text style={styles.AddPhotosTxt}>
                                    {props?.selectedCity.name ? props?.selectedCity.name : 'Select city'}
                                </Text>
                            </View>
                            <View style={styles.BckArrowBack}>
                                <Image source={require('../../../../Assets/dropdown_icon.png')} />
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
                            numberOfLines={3}
                            style={styles.jobinputvwe}
                            onChangeText={(JobDescription) => props.setJobDescription(JobDescription)}
                            value={props.JobDescription}
                            secureTextEntry={false}
                            placeholder="Job Info / Job Description *"
                            InputType="withScroll"
                        />
                    </View>
                    <View style={styles.inputwvwe}>
                        <Input
                            onChangeText={(JobTimeings) => props.setJobTimeings(JobTimeings)}
                            value={props.JobTimeings}
                            secureTextEntry={false}
                            placeholder="Job Timeings *"
                            InputType="withScroll"
                        />
                        <Input
                            onChangeText={(InterviewDetails) => props.setInterviewDetails(InterviewDetails)}
                            value={props.InterviewDetails}
                            secureTextEntry={false}
                            placeholder="Interview Details *"
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
                            onChangeText={(CompanyPersonName) => props.setCompanyPersonName(CompanyPersonName)}
                            value={props.CompanyPersonName}
                            secureTextEntry={false}
                            placeholder="Company Person Name *"
                            InputType="withScroll"
                        />
                        <Input
                            onChangeText={(PhoneNumber) => props.setPhoneNumber(PhoneNumber)}
                            value={props.PhoneNumber}
                            secureTextEntry={false}
                            keyboardType={'numeric'}
                            placeholder="Phone Number *"
                            InputType="withScroll"
                        />
                        <Input
                            onChangeText={(EmailID) => props.setEmailID(EmailID)}
                            value={props.EmailID}
                            secureTextEntry={false}
                            keyboardType={'email-address'}
                            placeholder="Email ID *"
                            InputType="withScroll"
                        />
                        <View style={styles.jobdesvwe}>
                            <Input
                                multiline
                                numberOfLines={3}
                                style={styles.jobinputvwe}
                                onChangeText={(JobAddress) => props.setJobAddress(JobAddress)}
                                value={props.JobAddress}
                                secureTextEntry={false}
                                placeholder="Job Adress *"
                                InputType="withScroll"
                            />
                        </View>
                    </View>
                    <View style={styles.footermainvwe}>
                        <View style={styles.conditionvwe}>
                            <TouchableOpacity onPress={() => props._handleFocus()}>
                                {props.box ?
                                    <Image style={styles.alluncheck}
                                        source={require('../../../../Assets/unchecked_circled_icon_box.png')} />
                                    :
                                    <Image style={styles.alluncheck}
                                        source={require('../../../../Assets/checked_circled_icon_box.png')} />}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.acceptvwe}>
                            <Text style={styles.accepttxt}>I Accept Terms And Conditions and Privacy Policy.*</Text>
                        </View>
                    </View>
                    <View style={styles.btnvwe}>
                        <Button
                            buttonLabelStyle={styles.btntxt}
                            buttonText="Submit"
                            onPress={props.onPressSubmit}
                            style={styles.btnstyle} />
                    </View>
                </ScrollView>
            </View>

            {/* Country Modal */}
            <Modal
                animationType="slide"
                visible={props.countryVisible}
                onRequestClose={() => {
                    props.setCountryVisible(false);
                }}>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.moadlvwe}>
                        <View style={styles.headervwe}>
                            <View style={{ flex: 1 }} />
                            <View style={styles.arealstvwe}>
                                <Text style={styles.arealsttxt}>Country List</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => props.setCountryVisible(false)}
                                style={styles.cancelbtnimgvwe}>
                                <Image
                                    style={styles.cancelimg}
                                    source={require("../../../../Assets/cancelModalBtn.png")}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginBottom: "15%" }}>
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
                }}>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.moadlvwe}>
                        <View style={styles.headervwe}>
                            <View style={{ flex: 1 }} />
                            <View style={styles.arealstvwe}>
                                <Text style={styles.arealsttxt}>State List</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => props.setStateVisible(false)}
                                style={styles.cancelbtnimgvwe}>
                                <Image
                                    style={styles.cancelimg}
                                    source={require("../../../../Assets/cancelModalBtn.png")}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginBottom: "15%" }}>
                            <FlatList
                                data={props.stateList}
                                renderItem={(item) => props.renderStateListItem(item)}
                                keyExtractor={(item, index) => index.toString()}
                                ListEmptyComponent={() => {
                                    return (
                                        <View style={{
                                            flex: 1,
                                            alignSelf: 'center', justifyContent: 'center'
                                        }}>
                                            <Text style={{ fontFamily: FONT_FAMILY_REGULAR, fontSize: 15 }}>
                                                First select Country.
                                            </Text>
                                        </View>
                                    )
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
                }}>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.moadlvwe}>
                        <View style={styles.headervwe}>
                            <View style={{ flex: 1 }} />
                            <View style={styles.arealstvwe}>
                                <Text style={styles.arealsttxt}>City List</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => props.setCityVisible(false)}
                                style={styles.cancelbtnimgvwe}>
                                <Image
                                    style={styles.cancelimg}
                                    source={require("../../../../Assets/cancelModalBtn.png")}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginBottom: "15%" }}>
                            <FlatList
                                data={props.cityList}
                                renderItem={(item) => props.renderCityListItem(item)}
                                keyExtractor={(item, index) => index.toString()}
                                ListEmptyComponent={() => {
                                    return (
                                        <View style={{
                                            flex: 1,
                                            alignSelf: 'center', justifyContent: 'center'
                                        }}>
                                            <Text style={{ fontFamily: FONT_FAMILY_REGULAR, fontSize: 15 }}>
                                                First select State.
                                            </Text>
                                        </View>
                                    )
                                }}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
            {/*  */}


        </View>
    )
}
export default AddJobs;