import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import Header from '../../../../Components/Header';
import Button from '../../../../Components/Button';
import CommonStyles from '../../../../Utils/CommonStyles';
import Input from '../../../../Components/Input';
import { WHITE_COLOR_CODE } from '../../../../Utils/Constant';
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
                        <Input
                            onChangeText={(addressState) => props.setAddressState(addressState)}
                            value={props.addressState}
                            secureTextEntry={false}
                            placeholder="job state"
                            InputType="withScroll"
                        />
                        <Input
                            onChangeText={(city) => props.setcity(city)}
                            value={props.city}
                            secureTextEntry={false}
                            placeholder="job city"
                            InputType="withScroll"
                        />
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
        </View>
    )
}
export default AddJobs;