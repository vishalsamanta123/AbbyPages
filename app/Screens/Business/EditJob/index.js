import React, { useEffect, useState } from "react";
import moment from "moment";
import Loader from "../../../Utils/Loader";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Error from "../../../Components/Modal/showMessage";
import Success from "../../../Components/Modal/success";
import { View, Text, TouchableOpacity } from "react-native";
import EditJobScreen from "./component/EditJobScreen";
import styles from "./component/styles";

const EditJob = ({ navigation, route }) => {
  const { item } = route?.params || { item: "" };
  let today = moment(today).format("MM/DD/YYYY");
  let benefits_Date = moment(today);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [jobCategoryList, setJobCategoryList] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalResp, setModalResp] = useState("");
  const [countryList, setCountryList] = useState("");
  const [stateList, setStateList] = useState("");
  const [cityList, setCityList] = useState("");
  const [jobBenefits, setJobBenefits] = useState("");
  const [isStartTimePickerVisible, setIsStartTimePickerVisible] =
    useState(false);
  const [isEndTimePickerVisible, setIsEndTimePickerVisible] = useState(false);
  const [menuTypeVisible, setMenuTypeVisible] = useState(false);
  const [selectedBenefits, setSelectedBenefits] = useState([]);
  const benifitsStaticContent = [
    {
      job_benefits_id: 1,
      job_benefits_name: "Game",
      status: 1,
      created_at: benefits_Date,
    },
    {
      job_benefits_id: 2,
      job_benefits_name: "Releax",
      status: 1,
      created_at: benefits_Date,
    },
    {
      job_benefits_id: 3,
      job_benefits_name: "Travel",
      status: 1,
      created_at: benefits_Date,
    },
    {
      job_benefits_id: 4,
      job_benefits_name: "Pizza",
      status: 1,
      created_at: benefits_Date,
    },
    {
      job_benefits_id: 5,
      job_benefits_name: "Insurance",
      status: 1,
      created_at: benefits_Date,
    },
    {
      job_benefits_id: 6,
      job_benefits_name: "Wi-fi",
      status: 1,
      created_at: benefits_Date,
    },
    {
      job_benefits_id: 7,
      job_benefits_name: "Laptop",
      status: 1,
      created_at: benefits_Date,
    },
    {
      job_benefits_id: 8,
      job_benefits_name: "Opportunities",
      status: 1,
      created_at: benefits_Date,
    },
    {
      job_benefits_id: 9,
      job_benefits_name: "Salary review",
      status: 1,
      created_at: benefits_Date,
    },
    {
      job_benefits_id: 10,
      job_benefits_name: "Business expense",
      status: 1,
      created_at: benefits_Date,
    },
  ];
  const [jobForm, setJobForm] = useState({
    job_category_id: "",
    job_category_name: "",
    job_title: "",
    no_of_openings: "",
    startTimeDay: "",
    endTimeDay: "",
    monthly_in_hand_salary_from: "",
    monthly_in_hand_salary_to: "",
    country_id: "",
    country_name: "",
    state_id: "",
    state_name: "",
    city_id: "",
    city_name: "",
    job_description: "",
    job_requirements: "",
    startTime: "",
    endTime: "",
    interview_details: "",
    job_level: "",
    company_name: "",
    company_personName: "",
    language: "",
    phone_no: "",
    email_id: "",
    job_address: "",
    skills: "",
    job_timing: "",
    job_benefits: [],
    accpt_trms_cond: "",
  });

  useEffect(() => {
    setJobForm({
      ...jobForm,
      job_category_id: item?.job_category_id ? item?.job_category_id : "",
      job_category_name: item?.category_name ? item?.category_name : "",
      job_title: item?.job_title ? item?.job_title : "",
      no_of_openings: item?.no_of_openings ? item?.no_of_openings : "",
      startTimeDay: item?.job_start_time_day ? item?.job_start_time_day : "",
      endTimeDay: item?.job_end_time_day ? item?.job_end_time_day : "",
      monthly_in_hand_salary_from: item?.monthly_in_hand_salary_from
        ? item?.monthly_in_hand_salary_from
        : "",
      monthly_in_hand_salary_to: item?.monthly_in_hand_salary_to
        ? item?.monthly_in_hand_salary_to
        : "",
      country_id: item?.job_location_country ? item?.job_location_country : "",
      country_name: item?.country_name ? item?.country_name : "",
      state_id: item?.job_location_state ? item?.job_location_state : "",
      state_name: item?.state_name ? item?.state_name : "",
      city_id: item?.job_location_city ? item?.job_location_city : "",
      city_name: item?.city_name ? item?.city_name : "",
      job_description: item?.job_description ? item?.job_description : "",
      job_requirements: item?.job_requirements ? item?.job_requirements : "",
      startTime: item?.job_start_timing ? item?.job_start_timing : "",
      endTime: item?.job_end_timing ? item?.job_end_timing : "",
      interview_details: item?.interview_details ? item?.interview_details : "",
      job_level: item?.job_level ? item?.job_level : "",
      company_name: item?.company_name ? item?.company_name : "",
      company_personName: item?.contact_person_name
        ? item?.contact_person_name
        : "",
      language: item?.language ? item?.language : "",
      phone_no: item?.phone_no ? item?.phone_no : "",
      email_id: item?.email ? item?.email : "",
      job_address: item?.job_address ? item?.job_address : "",
      skills: item?.skills ? item?.skills : "",
      job_timing: item?.job_timing ? item?.job_timing : "",
      job_benefits: item?.job_benefits ? JSON.parse(item?.job_benefits) : [],
      accpt_trms_cond: "",
    });
  }, [item]);
  console.log("props?.jobForm?.job_benefits", jobForm?.job_benefits);

  const onPressToPreview = () => {
    navigation.navigate("AddTextPreview");
  };

  const getPlaceList = async (status) => {
    try {
      setVisible(true);
      const params = {
        status: status,
        country_id: status === 1 ? jobForm.country_id : "",
        state_id: status === 2 ? jobForm.state_id : "",
      };
      const { data } = await apiCall("POST", ENDPOINTS.COUNTRY_LIST, params);
      if (data.status === 200) {
        setVisible(false);
        if (status === 0) {
          setCountryList(data.data);
        } else {
          if (status === 1) {
            setStateList(data.data);
          } else {
            if (status === 2) {
              setCityList(data.data);
            }
          }
        }
      } else {
        setVisible(false);
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setVisible(false);
      setErrorMessage(error.message);
      setVisibleErr(true);
    }
  };

  const handleOpenModal = (open) => {
    setModalResp(open);
    if (open === 1) {
      getJobCategoryList();
      setModalVisible(true);
    } else {
      if (open === 2) {
        getPlaceList(0);
        setModalVisible(true);
      } else {
        if (open === 3) {
          getPlaceList(1);
          setModalVisible(true);
        } else {
          if (open === 4) {
            getPlaceList(2);
            setModalVisible(true);
          }
        }
      }
    }
  };
  const handleCloseModal = () => {
    setJobCategoryList([]);
    setCountryList([]);
    setStateList([]);
    setCityList([]);
    setModalVisible(false);
    setModalResp("");
  };
  function validationFrom() {
    if (jobForm.category_name === "" && jobForm.category_name === undefined) {
      setErrorMessage("Please select job category");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.job_title === "") {
      setErrorMessage("Please enter job title");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.no_of_openings === "") {
      setErrorMessage("Please enter no of openings");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.startTimeDay === "") {
      setErrorMessage("Please enter your start time day");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.endTimeDay === "") {
      setErrorMessage("Please enter your end time day");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.monthly_in_hand_salary_from === "") {
      setErrorMessage("Please enter monthly in hand salary from");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.monthly_in_hand_salary_to === "") {
      setErrorMessage("Please enter monthly in hand salary to");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.country_name === "" || jobForm.country_name === undefined) {
      setErrorMessage("Please enter job country");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.state_name === "" || jobForm.state_name === undefined) {
      setErrorMessage("Please enter job state");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.city_name === "" || jobForm.city_name === undefined) {
      setErrorMessage("Please enter job city");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.job_description === "") {
      setErrorMessage("Please enter job description");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.job_requirements === "") {
      setErrorMessage("Please enter job requirements");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.startTime === "") {
      setErrorMessage("Please select your start time");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.endTime === "") {
      setErrorMessage("Please select your end time");
      setVisibleErr(true);
      return false;
    }
    // if (JobTimeings == "") {
    //   setErrorMessage("Please enter job time");
    //   setVisibleErr(true);
    //   return false;
    // }
    if (jobForm.interview_details === "") {
      setErrorMessage("Please enter your interview details");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.job_level === "") {
      setErrorMessage("Please enter your job level");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.company_name === "") {
      setErrorMessage("Please enter company name");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.company_personName === "") {
      setErrorMessage("Please enter company person name");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.language === "") {
      setErrorMessage("Please enter which language you speak");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.phone_no === "") {
      setErrorMessage("Please enter phone number");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.email_id === "") {
      setErrorMessage("Please enter email");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.job_address === "") {
      setErrorMessage("Please enter job address");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.job_benefits === []) {
      setErrorMessage("Please select job benefits");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.skills === "") {
      setErrorMessage("Please enter your skills");
      setVisibleErr(true);
      return false;
    }
    if (jobForm.accpt_trms_cond === "") {
      setErrorMessage("Please select terms and condition");
      setVisibleErr(true);
      return false;
    }
    return true;
  }
  const onPressSubmit = async () => {
    const valid = validationFrom();
    if (valid) {
      setVisible(true);
      try {
        const params = {
          business_id: item?.business_id,
          company_name: jobForm.company_name,
          contact_person_name: jobForm.company_personName,
          email: jobForm.email_id,
          interview_details: jobForm.interview_details,
          job_address: jobForm.job_address,
          job_benefits: JSON.stringify(jobForm.job_benefits),
          job_category_id: jobForm.id,
          job_description: jobForm.job_description,
          job_end_time_day: jobForm.endTimeDay,
          job_end_timing: jobForm.endTime,
          job_level: jobForm.job_level,
          job_location_country: jobForm?.country_id,
          job_location_state: jobForm.state_id,
          job_location_city: jobForm.city_id,
          job_id: item?.job_id == null ? null : item?.job_id,
          created_at: today,
          job_requirements: jobForm.job_requirements,
          job_start_time_day: jobForm.startTimeDay,
          job_start_timing: jobForm.startTime,
          job_status: null,
          job_timing: jobForm.job_timing,
          job_title: jobForm.job_title,
          job_type: 1,
          language: jobForm.language,
          monthly_in_hand_salary_from: jobForm.monthly_in_hand_salary_from, //2000
          monthly_in_hand_salary_to: jobForm.monthly_in_hand_salary_to, //"20000",
          no_of_openings: jobForm.no_of_openings,
          phone_no: jobForm.phone_no,
          skills: jobForm.skills,
        };
        const { data } = await apiCall("POST", ENDPOINTS.CREATE_JOB, params);
        if (data.status === 200) {
          setSuccessMessage(data.message);
          setVisibleSuccess(true);
          setVisible(false);
        } else {
          setVisible(false);
          setErrorMessage(data.message);
          setVisibleErr(true);
        }
      } catch (error) {
        setErrorMessage(error.message);
        setVisibleErr(true);
        setVisible(false);
      }
    }
  };

  const SearchPlace = (searchKey) => {
    if (searchKey) {
      const lowerCased = searchKey.toLowerCase();
      switch (modalResp) {
        case 2:
          let country = countryList.filter((data) =>
            data.name.toLowerCase().includes(lowerCased)
          );
          setCountryList(country.length > 0 ? country : countryList);
          break;
        case 3:
          let state = stateList.filter((data) =>
            data.name.toLowerCase().includes(lowerCased)
          );
          setStateList(state.length > 0 ? state : stateList);
          break;
        case 4:
          let city = cityList.filter((data) =>
            data.name.toLowerCase().includes(lowerCased)
          );
          setCityList(city.length > 0 ? city : cityList);
          break;
      }
    } else {
      getPlaceList(
        modalResp === 2 ? 0 : modalResp === 3 ? 1 : modalResp === 4 ? 2 : 0
      );
    }
  };
  const hideTimePicker = () => {
    setIsStartTimePickerVisible(false);
  };
  const handleTimeConfirm = (date) => {
    const value = moment(date).format(" h:mm a");
    setJobForm({
      ...jobForm,
      startTime: value,
    });
    hideTimePicker();
  };

  const hideEndTimePicker = () => {
    setIsEndTimePickerVisible(false);
  };
  const handleEndTimeConfirm = (date) => {
    const value = moment(date).format(" h:mm a");
    setJobForm({
      ...jobForm,
      endTime: value,
    });
    hideEndTimePicker();
  };
  const getJobCategoryList = async () => {
    try {
      setVisible(true);
      const params = {
        parents_id: 2,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_JOB_CATEGORY,
        params
      );
      if (data.status === 200) {
        setVisible(false);
        setJobCategoryList(data.data);
      } else {
        setVisible(false);
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setVisible(false);
      setErrorMessage(error.message);
      setVisibleErr(true);
    }
  };
  const _handleSelectedItem = (item) => {
    switch (modalResp) {
      case 1:
        setJobForm({
          ...jobForm,
          job_category_id: item?.id,
          job_category_name: item?.category_name,
        });
        break;
      case 2:
        setJobForm({
          ...jobForm,
          country_id: item.country_id,
          country_name: item.name,
        });
        break;
      case 3:
        setJobForm({
          ...jobForm,
          state_id: item.state_id,
          state_name: item.name,
        });
        break;
      case 4:
        setJobForm({
          ...jobForm,
          city_id: item.city_id,
          city_name: item.name,
        });
        break;
    }
    setModalVisible(false);
    handleCloseModal();
  };
  const renderModalList = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => _handleSelectedItem(item)}
        style={styles.modalVw}
      >
        <Text style={styles.modalTxt}>
          {modalResp === 1
            ? item.category_name
            : modalResp === 2
            ? item.name
            : modalResp === 3
            ? item.name
            : modalResp === 4
            ? item.name
            : "Not Found"}
        </Text>
      </TouchableOpacity>
    );
  };
  const handleSelectedName = (item) => {
    const data = [...jobForm.job_benefits];
    data.push(item);
    setJobForm({
      ...jobForm,
      job_benefits: data,
    });
  };
  const renderStaticContentData = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => handleSelectedName(item, index)}
        style={{
          flex: 1,
          padding: 10,
        }}
      >
        <Text style={styles.modalTwoTxt}>{item?.job_benefits_name}</Text>
      </TouchableOpacity>
    );
  };
  const navigateAndCloseSuccessModal = () => {
    setVisibleSuccess(false);
    navigation.navigate("JobManagementList");
  };
  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <EditJobScreen
        jobForm={jobForm}
        setJobForm={setJobForm}
        modalVisible={modalVisible}
        modalResp={modalResp}
        setModalVisible={setModalVisible}
        getPlaceList={getPlaceList}
        getJobCategoryList={getJobCategoryList}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        SearchPlace={SearchPlace}
        ////
        selectedBenefits={selectedBenefits}
        benifitsStaticContent={benifitsStaticContent}
        menuTypeVisible={menuTypeVisible}
        setMenuTypeVisible={setMenuTypeVisible}
        renderStaticContentData={renderStaticContentData}
        renderModalList={renderModalList}
        jobCategoryList={jobCategoryList}
        setIsEndTimePickerVisible={setIsEndTimePickerVisible}
        hideEndTimePicker={hideEndTimePicker}
        handleEndTimeConfirm={handleEndTimeConfirm}
        isEndTimePickerVisible={isEndTimePickerVisible}
        setIsStartTimePickerVisible={setIsStartTimePickerVisible}
        hideTimePicker={hideTimePicker}
        isStartTimePickerVisible={isStartTimePickerVisible}
        handleTimeConfirm={handleTimeConfirm}
        onPressToPreview={onPressToPreview}
        onPressSubmit={onPressSubmit}
        jobBenefits={jobBenefits}
        setJobBenefits={setJobBenefits}
        countryList={countryList}
        stateList={stateList}
        cityList={cityList}
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
  );
};

export default EditJob;
