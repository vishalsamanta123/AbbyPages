import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AddJobsScreen from "./components/AddJobsScreen";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import Error from "../../../Components/Modal/error";
import Success from "../../../Components/Modal/success";
import { BLACK_COLOR_CODE, FONT_FAMILY_REGULAR } from "../../../Utils/Constant";
const AddJobs = ({ navigation }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  {
    /* Countries States */
  }
  const [countryVisible, setCountryVisible] = useState(false);
  const [countryList, setCountryList] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  {
    /**/
  }
  {
    /* State States */
  }
  const [stateVisible, setStateVisible] = useState(false);
  const [stateList, setStateList] = useState("");
  const [selectedState, setSelectedState] = useState("");
  {
    /**/
  }
  {
    /* City States */
  }
  const [cityVisible, setCityVisible] = useState(false);
  const [cityList, setCityList] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [JobTitle, setJobTitle] = useState("");
  const [Openings, setOpenings] = useState("");
  const [SalaryFrom, setSalaryFrom] = useState("");
  const [SalaryTo, setSalaryTo] = useState("");
  const [JobDescription, setJobDescription] = useState("");
  const [JobTimeings, setJobTimeings] = useState("");
  const [InterviewDetails, setInterviewDetails] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [CompanyPersonName, setCompanyPersonName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [EmailID, setEmailID] = useState("");
  const [JobAddress, setJobAddress] = useState("");
  const [addressState, setAddressState] = useState("");
  const [city, setcity] = useState("");
  const [jobBenefits, setJobBenefits] = useState("");
  const [box, setbox] = useState(true);
  const _handleFocus = () => {
    setbox(!box);
  };
  const onPressToPreview = () => {
    navigation.navigate("AddTextPreview");
  };
  const _handleModalOpen = () => {
    setCountryVisible(true);
    getCountryList();
  };
  const _handleStateModalOpen = () => {
    setStateVisible(true);
    getStateList();
  };
  const _handleCityModalOpen = () => {
    setCityVisible(true);
    getCityList();
  };
  const getCountryList = async () => {
    try {
      const params = {
        status: 0,
      };
      const response = await apiCall("POST", ENDPOINTS.COUNTRY_LIST, params);
      if (response.status === 200) {
        setCountryList(response.data.data);
      } else {
      }
    } catch (error) {
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  const getStateList = async () => {
    try {
      const params = {
        status: 1,
        country_id: selectedCountry.country_id,
      };
      const response = await apiCall("POST", ENDPOINTS.COUNTRY_LIST, params);
      if (response.status === 200) {
        setStateList(response.data.data);
      } else {
      }
    } catch (error) {
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  const getCityList = async () => {
    try {
      const params = {
        status: 2,
        state_id: selectedState.state_id,
      };
      const response = await apiCall("POST", ENDPOINTS.COUNTRY_LIST, params);
      if (response.status === 200) {
        setCityList(response.data.data);
      } else {
      }
    } catch (error) {
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  const onPressSubmit = async () => {
    const valid = validationFrom();
    if (valid) {
      setVisible(true);
      try {
        const params = {
          business_id: null,
          company_name: CompanyName,
          contact_person_name: CompanyPersonName,
          email: EmailID,
          interview_details: InterviewDetails,
          job_address: JobAddress,
          job_benefits: jobBenefits,
          job_category_id: 1,
          job_description: JobDescription,
          job_end_time_day: 5,
          job_end_timing: JobTimeings,
          job_level: "job_level",
          job_location_city: city,
          job_location_country: selectedCountry.country_id,
          job_location_state: selectedState.state_id,
          job_requirements: "asdasd",
          job_start_time_day: "1",
          job_start_timing: "16:44",
          job_status: null,
          job_timing: JobTimeings,
          job_title: JobTitle,
          job_type: 1,
          language: "asdasda",
          monthly_in_hand_salary_from: SalaryFrom, //2000
          monthly_in_hand_salary_to: SalaryTo, //"20000",
          no_of_openings: Openings, //10
          phone_no: PhoneNumber,
          skills: "asdasd",
        };
        const { data } = await apiCall("POST", ENDPOINTS.CREATE_JOB, params);
        if (data.status === 200) {
          // setErrorMessage(data.message);
          navigation.navigate("JobManagementList");
          setVisible(false);
        } else {
          setVisible(false);
          setErrorMessage(data.message);
          setVisibleErr(true);
        }
      } catch (error) {
        setErrorMessage(error);
        setVisibleErr(true);
        setVisible(false);
      }
    }
  };

  function validationFrom() {
    if (JobTitle == "") {
      setErrorMessage("Please enter job title");
      setVisibleErr(true);
      return false;
    }
    if (Openings == "") {
      setErrorMessage("Please enter no of openings");
      setVisibleErr(true);
      return false;
    }
    if (SalaryFrom == "") {
      setErrorMessage("Please enter monthly in hand salary from");
      setVisibleErr(true);
      return false;
    }
    if (SalaryTo == "") {
      setErrorMessage("Please enter monthly in hand salary to");
      setVisibleErr(true);
      return false;
    }
    if (selectedCountry.name == "") {
      setErrorMessage("Please enter job country");
      setVisibleErr(true);
      return false;
    }
    if (selectedState.name == "") {
      setErrorMessage("Please enter job state");
      setVisibleErr(true);
      return false;
    }
    if (city == "") {
      setErrorMessage("Please enter job city");
      setVisibleErr(true);
      return false;
    }
    if (JobDescription == "") {
      setErrorMessage("Please enter job description");
      setVisibleErr(true);
      return false;
    }
    if (JobTimeings == "") {
      setErrorMessage("Please enter job time");
      setVisibleErr(true);
      return false;
    }
    if (InterviewDetails == "") {
      setErrorMessage("Please enter interview details");
      setVisibleErr(true);
      return false;
    }
    if (CompanyName == "") {
      setErrorMessage("Please enter company name");
      setVisibleErr(true);
      return false;
    }
    if (CompanyPersonName == "") {
      setErrorMessage("Please enter company person name");
      setVisibleErr(true);
      return false;
    }
    if (PhoneNumber == "") {
      setErrorMessage("Please enter phone number");
      setVisibleErr(true);
      return false;
    }
    if (EmailID == "") {
      setErrorMessage("Please enter email");
      setVisibleErr(true);
      return false;
    }
    if (JobAddress == "") {
      setErrorMessage("Please enter job address");
      setVisibleErr(true);
      return false;
    }
    if (box == true) {
      setErrorMessage("Please select terms and condition");
      setVisibleErr(true);
      return false;
    }
    return true;
  }
  const _handleSelectedCountry = (item) => {
    setSelectedCountry(item);
    setCountryVisible(false);
  };
  const renderCountryListItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => _handleSelectedCountry(item)}
        style={{
          flex: 1,
          borderBottomWidth: 0.3,
          borderBottomColor: "#f2f2f2",
          padding: 10,
          paddingVertical: 15,
          marginHorizontal: 15,
        }}
      >
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
  };
  const renderStateListItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => _handleSelectedState(item)}
        style={{
          flex: 1,
          borderBottomWidth: 0.3,
          borderBottomColor: "#f2f2f2",
          padding: 10,
          paddingVertical: 15,
          marginHorizontal: 15,
        }}
      >
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
  const _handleSelectedCity = (item) => {
    setSelectedCity(item);
    setCityVisible(false);
  };
  const renderCityListItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => _handleSelectedCity(item)}
        style={{
          flex: 1,
          borderBottomWidth: 0.3,
          borderBottomColor: "#f2f2f2",
          padding: 10,
          paddingVertical: 15,
          marginHorizontal: 15,
        }}
      >
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
  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <AddJobsScreen
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
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => ("Home", setVisibleSuccess(false))}
      />
    </View>
  );
};
export default AddJobs;
