import React, { useEffect, useState } from 'react';
import moment from "moment";
import Loader from '../../../Utils/Loader';
import { apiCall } from '../../../Utils/httpClient';
import ENDPOINTS from '../../../Utils/apiEndPoints';
import Error from '../../../Components/Modal/error';
import Success from '../../../Components/Modal/success';
import AddJobsScreen from './components/AddJobsScreen';
import { View, Text, TouchableOpacity } from 'react-native';
import { BLACK_COLOR_CODE, FONT_FAMILY_REGULAR, WHITE_COLOR_CODE } from '../../../Utils/Constant';
const AddJobs = ({ navigation, route }) => {
    const {item} = route?.params || []
    let today = moment(today).format("DD-MM-YYYY");
    let benefits_Date = moment(today);
    const [addJobCategoryModalVisible, setAddJobCategoryModalVisible] = useState(false);
    const [jobCategoryList, setJobCategoryList] = useState('');
    const [selectedJobCategory, setSelectedJobCategory] = useState('');

    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false)
    {/* Countries States */ }
    const [countryVisible, setCountryVisible] = useState(false);
    const [countryList, setCountryList] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    {/**/ }
    {/* State States */ }
    const [stateVisible, setStateVisible] = useState(false);
    const [stateList, setStateList] = useState('');
    const [selectedState, setSelectedState] = useState('');
    {/**/ }
    {/* City States */ }
    const [cityVisible, setCityVisible] = useState(false);
    const [cityList, setCityList] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const [JobTitle, setJobTitle] = useState('');
    const [Openings, setOpenings] = useState('');
    const [SalaryFrom, setSalaryFrom] = useState('');
    const [SalaryTo, setSalaryTo] = useState('');
    const [JobDescription, setJobDescription] = useState('');
    const [JobTimeings, setJobTimeings] = useState('');
    const [InterviewDetails, setInterviewDetails] = useState('');
    const [CompanyName, setCompanyName] = useState('');
    const [CompanyPersonName, setCompanyPersonName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [EmailID, setEmailID] = useState('');
    const [JobAddress, setJobAddress] = useState('');
    const [addressState, setAddressState] = useState('');
    const [city, setcity] = useState('');
    const [jobBenefits, setJobBenefits] = useState('');
    const [box, setbox] = useState(true)
    const [jobRequirements, setJobReqiurements] = useState('');
    const [jobLevel, setJobLevel] = useState('');
    const [language, setLanguage] = useState('');
    const [startTimeDay, setStartTimeDay] = useState('');
    const [endTimeDay, setEndTimeDay] = useState('');
    const [skills, setSkills] = useState('');
    /* Start time */
    const [isStartTimePickerVisible, setIsStartTimePickerVisible] = useState(false);
    const [startTime, setStartTime] = useState("");
    /* End time */
    const [isEndTimePickerVisible, setIsEndTimePickerVisible] = useState(false);
    const [endTime, setEndTime] = useState("");
    /*  */
    const [itemType, setItemType] = useState('');
    const [menuTypeVisible, setMenuTypeVisible] = useState(false);

    const [selectedBenefits, setSelectedBenefits] = useState([]);

    const benifitsStaticContent = [
        {
            job_benefits_id: 1,
            job_benefits_name: "Game",
            status: 1,
            created_at: benefits_Date
        },
        {
            job_benefits_id: 2,
            job_benefits_name: "Releax",
            status: 1,
            created_at: benefits_Date
        },
        {
            job_benefits_id: 3,
            job_benefits_name: "Travel",
            status: 1,
            created_at: benefits_Date
        },
        {
            job_benefits_id: 4,
            job_benefits_name: "Pizza",
            status: 1,
            created_at: benefits_Date
        },
        {
            job_benefits_id: 5,
            job_benefits_name: "Insurance",
            status: 1,
            created_at: benefits_Date
        },
        {
            job_benefits_id: 6,
            job_benefits_name: "Wi-fi",
            status: 1,
            created_at: benefits_Date
        },
        {
            job_benefits_id: 7,
            job_benefits_name: "Laptop",
            status: 1,
            created_at: benefits_Date
        },
        {
            job_benefits_id: 8,
            job_benefits_name: "Opportunities",
            status: 1,
            created_at: benefits_Date
        },
        {
            job_benefits_id: 9,
            job_benefits_name: "Salary review",
            status: 1,
            created_at: benefits_Date
        },
        {
            job_benefits_id: 10,
            job_benefits_name: "Business expense",
            status: 1,
            created_at: benefits_Date
        },
    ];

    useEffect(() => {
        getCountryList();
        getStateList();
        getCityList();
        getJobCategoryList();
        setData()
    }, [])

    const setData = () => {
        setJobTitle(item?.job_title)
        setOpenings(item?.no_of_openings)
        setSalaryFrom(item?.monthly_in_hand_salary_from)
        setSalaryTo(item?.monthly_in_hand_salary_to)
        setJobDescription(item?.job_description)
        setJobTimeings(item?.job_timing)
        setInterviewDetails(item?.interview_details)
        setCompanyName(item?.company_name)
        setCompanyPersonName(item?.contact_person_name)
        setPhoneNumber(item?.phone_no)
        setEmailID(item?.email)
        setJobAddress(item?.job_address)
        setAddressState(item?.job_location_state)
        setcity(item?.job_location_city)
        setJobBenefits(item?.job_benefits)
        setJobReqiurements(item?.job_requirements)
        setJobLevel(item?.job_level)
        setLanguage(item?.language)
        setStartTimeDay(item?.job_start_time_day)
        setEndTimeDay(item?.job_end_time_day)
        setSkills(item?.skills)
    }
    const _handleFocus = () => {
        setbox(!box);
    }
    const onPressToPreview = () => {
        navigation.navigate('AddTextPreview')
    }
    const _handleModalOpen = () => {
        setCountryVisible(true);
        getCountryList();
    }
    const _handleStateModalOpen = () => {
        setStateVisible(true);
        getStateList();
    }
    const _handleCityModalOpen = () => {
        setCityVisible(true);
        getCityList();
    }
    const getCountryList = async () => {
        try {
            const params = {
                status: 0
            }
            const response = await apiCall('POST', ENDPOINTS.COUNTRY_LIST, params);
            if (response.status === 200) {
                setCountryList(response.data.data)
            }
            else {
                console.log('else')
            }
        }
        catch (error) {
            console.log('error: ', error);
        }
    }
    const getStateList = async () => {
        try {
            const params = {
                status: 1,
                country_id: selectedCountry.country_id
            }
            const response = await apiCall('POST', ENDPOINTS.COUNTRY_LIST, params);
            if (response.status === 200) {
                setStateList(response.data.data)
            }
            else {
                console.log('else');
            }
        }
        catch (error) {
            console.log('error: ', error);
        }
    }
    const getCityList = async () => {
        try {
            const params = {
                status: 2,
                state_id: selectedState.state_id
            }
            const response = await apiCall('POST', ENDPOINTS.COUNTRY_LIST, params);
            if (response.status === 200) {
                setCityList(response.data.data)
            }
            else {
                console.log('else');
            }
        }
        catch (error) {
            console.log('error: ', error);
        }
    }

    const onPressSubmit = async () => {
        const valid = validationFrom();
        if (valid) {
            // setVisible(true);
            try {
                const params = {
                    business_id: item?.business_id,
                    company_name: CompanyName,
                    contact_person_name: CompanyPersonName,
                    email: EmailID,
                    interview_details: InterviewDetails,
                    job_address: JobAddress,
                    job_benefits: selectedBenefits,
                    job_category_id: selectedJobCategory.id,
                    job_description: JobDescription,
                    job_end_time_day: endTimeDay,
                    job_end_timing: endTime,
                    job_level: jobLevel,

                    job_location_country: selectedCountry.country_id,
                    job_location_state: selectedState.state_id,
                    job_location_city: selectedCity.city_id,
                    job_id: item?.job_id == null ? null :  item?.job_id,
                    created_at: today,
                    job_benefits_id: itemType.id,

                    job_requirements: jobRequirements,
                    job_start_time_day: startTimeDay,
                    job_start_timing: startTime,
                    job_status: null,
                    job_timing: null,
                    job_title: JobTitle,
                    job_type: 1,
                    language: language,
                    monthly_in_hand_salary_from: SalaryFrom,//2000
                    monthly_in_hand_salary_to: SalaryTo,//"20000",
                    no_of_openings: Openings,//10
                    phone_no: PhoneNumber,
                    skills: skills,
                    status: 1,
                }
                console.log(':params ', params);
                const { data } = await apiCall('POST', ENDPOINTS.CREATE_JOB, params);
                console.log('data: ', data);
                if (data.status === 200) {
                    setSuccessMessage(data.message)
                    setVisibleSuccess(true)
                    // navigation.navigate('JobManagementList');
                    setVisible(false);
                } else {
                    setVisible(false);
                    setErrorMessage(data.message);
                    setVisibleErr(true);
                };
            } catch (error) {
                setErrorMessage(error);
                console.log('error: ', error);
                setVisibleErr(true);
                setVisible(false);
            };
        }
    }
    function validationFrom() {
        if (selectedJobCategory.category_name == "" ||
            selectedJobCategory.category_name === undefined) {
            setErrorMessage('Please select job category');
            setVisibleErr(true)
            return false;
        }
        if (JobTitle == "") {
            setErrorMessage('Please enter job title');
            setVisibleErr(true)
            return false;
        }
        if (Openings == "") {
            setErrorMessage('Please enter no of openings');
            setVisibleErr(true);
            return false;
        }
        if (startTimeDay == "") {
            setErrorMessage('Please enter your start time day');
            setVisibleErr(true);
            return false;
        }
        if (endTimeDay == "") {
            setErrorMessage('Please enter your end time day');
            setVisibleErr(true);
            return false;
        }
        if (SalaryFrom == "") {
            setErrorMessage('Please enter monthly in hand salary from');
            setVisibleErr(true);
            return false;
        }
        if (SalaryTo == "") {
            setErrorMessage('Please enter monthly in hand salary to');
            setVisibleErr(true);
            return false;
        }
        if (selectedCountry.name == "" || selectedCountry.name === undefined) {
            setErrorMessage('Please enter job country');
            setVisibleErr(true);
            return false;
        }
        if (selectedState.name == "" || selectedState.name === undefined) {
            setErrorMessage('Please enter job state');
            setVisibleErr(true);
            return false;
        }
        if (selectedCity.name == "" || selectedCity.name === undefined) {
            setErrorMessage('Please enter job city');
            setVisibleErr(true);
            return false;
        }
        if (JobDescription == "") {
            setErrorMessage('Please enter job description');
            setVisibleErr(true);
            return false;
        }
        if (jobRequirements == "") {
            setErrorMessage('Please enter job requirements');
            setVisibleErr(true);
            return false;
        }
        if (startTime == "") {
            setErrorMessage('Please select your start time');
            setVisibleErr(true);
            return false;
        }
        if (endTime == "") {
            setErrorMessage('Please select your end time');
            setVisibleErr(true);
            return false;
        }
        if (JobTimeings == "") {
            setErrorMessage('Please enter job time');
            setVisibleErr(true);
            return false;
        }
        if (InterviewDetails == "") {
            setErrorMessage('Please enter your interview details');
            setVisibleErr(true);
            return false;
        }
        if (jobLevel == "") {
            setErrorMessage('Please enter your job level');
            setVisibleErr(true);
            return false;
        }
        if (CompanyName == "") {
            setErrorMessage('Please enter company name');
            setVisibleErr(true);
            return false;
        }
        if (CompanyPersonName == "") {
            setErrorMessage('Please enter company person name');
            setVisibleErr(true);
            return false;
        }
        if (language == "") {
            setErrorMessage('Please enter which language you speak');
            setVisibleErr(true);
            return false;
        }
        if (PhoneNumber == "") {
            setErrorMessage('Please enter phone number');
            setVisibleErr(true);
            return false;
        }
        if (EmailID == "") {
            setErrorMessage('Please enter email');
            setVisibleErr(true);
            return false;
        }
        if (JobAddress == "") {
            setErrorMessage('Please enter job address');
            setVisibleErr(true);
            return false;
        }
        if (selectedBenefits == "") {
            setErrorMessage('Please select benefits');
            setVisibleErr(true);
            return false;
        }
        if (skills == "") {
            setErrorMessage('Please enter your skills');
            setVisibleErr(true);
            return false;
        }
        if (box == true) {
            setErrorMessage('Please select terms and condition');
            setVisibleErr(true);
            return false;
        }
        return true;
    }
    const _handleSelectedCountry = (item) => {
        setSelectedCountry(item);
        setCountryVisible(false);
    }
    const renderCountryListItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => _handleSelectedCountry(item)}
                style={{
                    flex: 1,
                    borderBottomWidth: 0.3,
                    borderBottomColor: '#f2f2f2',
                    padding: 10,
                    paddingVertical: 15,
                    marginHorizontal: 15,
                }}>
                <Text
                    style={{
                        fontFamily: FONT_FAMILY_REGULAR,
                        fontSize: 15,
                        color: BLACK_COLOR_CODE,
                    }}
                >
                    {item.name}
                </Text>
            </TouchableOpacity>
        );
    };
    const _handleSelectedState = (item) => {
        setSelectedState(item);
        setStateVisible(false);
    }
    const renderStateListItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => _handleSelectedState(item)}
                style={{
                    flex: 1,
                    borderBottomWidth: 0.3,
                    borderBottomColor: '#f2f2f2',
                    padding: 10,
                    paddingVertical: 15,
                    marginHorizontal: 15,
                }}>
                <Text
                    style={{
                        fontFamily: FONT_FAMILY_REGULAR,
                        fontSize: 15,
                        color: BLACK_COLOR_CODE,
                    }}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        );
    };
    const _handleSelectedCity = (item) => {
        setSelectedCity(item);
        setCityVisible(false);
    }
    const renderCityListItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => _handleSelectedCity(item)}
                style={{
                    flex: 1,
                    borderBottomWidth: 0.3,
                    borderBottomColor: '#f2f2f2',
                    padding: 10,
                    paddingVertical: 15,
                    marginHorizontal: 15,
                }}>
                <Text
                    style={{
                        fontFamily: FONT_FAMILY_REGULAR,
                        fontSize: 15,
                        color: BLACK_COLOR_CODE,
                    }}
                >
                    {item.name}
                </Text>
            </TouchableOpacity>
        );
    };
    const SearchCountry = (searchKey) => {
        if (searchKey) {
            const lowerCased = searchKey.toLowerCase();
            let list = countryList.filter(data => data.name.toLowerCase().includes(lowerCased))
            setCountryList(list.length > 0 ? list : countryList);
        }
        else {
            getCountryList();
        }
    }
    const SearchState = (searchKey) => {
        if (searchKey) {
            const lowerCased = searchKey.toLowerCase();
            let list = stateList.filter(data => data.name.toLowerCase().includes(lowerCased))
            setStateList(list.length > 0 ? list : stateList);
        }
        else {
            getStateList();
        }
    }
    const SearchCity = (searchKey) => {
        if (searchKey) {
            const lowerCased = searchKey.toLowerCase();
            let list = cityList.filter(data => data.name.toLowerCase().includes(lowerCased))
            setCityList(list.length > 0 ? list : cityList);
        }
        else {
            getCityList();
        }
    }
    const showTimePicker = () => {
        setIsStartTimePickerVisible(true);
    };
    const hideTimePicker = () => {
        setIsStartTimePickerVisible(false);
    };
    const handleTimeConfirm = (date) => {
        const value = moment(date).format(" h:mm a");
        setStartTime(value);
        hideTimePicker();
    };
    // End time
    const showEndTimePicker = () => {
        setIsEndTimePickerVisible(true);
    };
    const hideEndTimePicker = () => {
        setIsEndTimePickerVisible(false);
    };
    const handleEndTimeConfirm = (date) => {
        const value = moment(date).format(" h:mm a");
        setEndTime(value);
        hideEndTimePicker();
    };
    const _handleOpenJobCategory = () => {
        setAddJobCategoryModalVisible(true)
    }
    const getJobCategoryList = async () => {
        try {
            const params = {
                parents_id: 0
            }
            const response = await apiCall('POST', ENDPOINTS.GET_JOB_CATEGORY, params);
            if (response.status === 200) {
                setJobCategoryList(response.data.data)
            } else {
            }
        } catch (error) {
            console.log('error: ', error);
        }
    }
    const _handleSelectedJobCategory = (item) => {
        setSelectedJobCategory(item);
        setAddJobCategoryModalVisible(false);
    }
    const renderJobCategoryListItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => _handleSelectedJobCategory(item)}
                style={{
                    flex: 1,
                    borderBottomWidth: 0.3,
                    borderBottomColor: '#f2f2f2',
                    padding: 10,
                    paddingVertical: 15,
                    marginHorizontal: 15,
                }}>
                <Text
                    style={{
                        fontFamily: FONT_FAMILY_REGULAR,
                        fontSize: 15,
                        color: BLACK_COLOR_CODE,
                    }}>
                    {item.category_name}
                </Text>
            </TouchableOpacity>
        );
    };
    const handleSelectedName = (item, index) => {
        const data = [...selectedBenefits];
        data.push(item);
        setSelectedBenefits(data);
        setItemType(item);
    }
    const renderStaticContentData = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => handleSelectedName(item, index)}
                style={{ flex: 1, padding: 10 }}>
                <Text style={{ fontFamily: FONT_FAMILY_REGULAR, fontSize: 15, color: WHITE_COLOR_CODE }}>
                    {item?.job_benefits_name}
                </Text>
            </TouchableOpacity>
        )
    }
    const navigateAndCloseSuccessModal = () => {
        setVisibleSuccess(false);
        navigation.navigate('JobManagementList')
    }
    return (
        <View style={{ flex: 1 }}>
            {visible && <Loader state={visible} />}
            <AddJobsScreen
                selectedBenefits={selectedBenefits}
                benifitsStaticContent={benifitsStaticContent}

                itemType={itemType}
                menuTypeVisible={menuTypeVisible}
                setMenuTypeVisible={setMenuTypeVisible}
                renderStaticContentData={renderStaticContentData}

                _handleOpenJobCategory={_handleOpenJobCategory}
                addJobCategoryModalVisible={addJobCategoryModalVisible}
                setAddJobCategoryModalVisible={setAddJobCategoryModalVisible}
                renderJobCategoryListItem={renderJobCategoryListItem}
                jobCategoryList={jobCategoryList}
                selectedJobCategory={selectedJobCategory}

                startTimeDay={startTimeDay}
                setStartTimeDay={setStartTimeDay}
                endTimeDay={endTimeDay}
                setEndTimeDay={setEndTimeDay}
                language={language}
                setLanguage={setLanguage}
                skills={skills}
                setSkills={setSkills}
                showEndTimePicker={showEndTimePicker}
                hideEndTimePicker={hideEndTimePicker}
                handleEndTimeConfirm={handleEndTimeConfirm}
                endTime={endTime}
                isEndTimePickerVisible={isEndTimePickerVisible}

                startTime={startTime}
                showTimePicker={showTimePicker}
                hideTimePicker={hideTimePicker}
                isStartTimePickerVisible={isStartTimePickerVisible}
                handleTimeConfirm={handleTimeConfirm}

                onPressToPreview={onPressToPreview}
                JobTitle={JobTitle}
                setJobTitle={setJobTitle}
                Openings={Openings}
                setOpenings={setOpenings}
                SalaryFrom={SalaryFrom}
                setSalaryFrom={setSalaryFrom}
                SalaryTo={SalaryTo}
                setSalaryTo={setSalaryTo}
                JobDescription={JobDescription}
                setJobDescription={setJobDescription}
                JobTimeings={JobTimeings}
                setJobTimeings={setJobTimeings}
                InterviewDetails={InterviewDetails}
                setInterviewDetails={setInterviewDetails}
                CompanyName={CompanyName}
                setCompanyName={setCompanyName}
                CompanyPersonName={CompanyPersonName}
                setCompanyPersonName={setCompanyPersonName}
                PhoneNumber={PhoneNumber}
                setPhoneNumber={setPhoneNumber}
                EmailID={EmailID}
                setEmailID={setEmailID}
                JobAddress={JobAddress}
                setJobAddress={setJobAddress}
                _handleFocus={_handleFocus}
                setbox={setbox}
                box={box}
                onPressSubmit={onPressSubmit}
                setAddressState={setAddressState}
                addressState={addressState}
                setcity={setcity}
                city={city}
                jobBenefits={jobBenefits}
                setJobBenefits={setJobBenefits}
                jobLevel={jobLevel}
                setJobLevel={setJobLevel}

                renderCountryListItem={renderCountryListItem}
                countryVisible={countryVisible}
                setCountryVisible={setCountryVisible}
                _handleModalOpen={_handleModalOpen}
                countryList={countryList}
                selectedCountry={selectedCountry}

                stateVisible={stateVisible}
                setStateVisible={setStateVisible}
                stateList={stateList}
                renderStateListItem={renderStateListItem}
                selectedState={selectedState}
                _handleStateModalOpen={_handleStateModalOpen}

                _handleCityModalOpen={_handleCityModalOpen}
                cityList={cityList}
                renderCityListItem={renderCityListItem}
                cityVisible={cityVisible}
                setCityVisible={setCityVisible}
                selectedCity={selectedCity}
                jobRequirements={jobRequirements}
                setJobReqiurements={setJobReqiurements}
                SearchCountry={SearchCountry}
                SearchState={SearchState}
                SearchCity={SearchCity}
            />
            <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
            <Success
                message={successMessage}
                visible={visibleSuccess}
                closeModel={() => navigateAndCloseSuccessModal()}
            />
        </View>
    )
}
export default AddJobs;