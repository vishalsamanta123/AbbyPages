import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AddJobsScreen from './components/AddJobsScreen';
import {
    apiCall, setDefaultHeader
} from '../../../Utils/httpClient';
import ENDPOINTS from '../../../Utils/apiEndPoints';
import Loader from '../../../Utils/Loader';
import Error from '../../../Components/Modal/error';
import Success from '../../../Components/Modal/success';
const AddJobs = ({ navigation }) => {
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false)

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
    const onPressToPreview = () => {
        navigation.navigate('AddTextPreview')
    }

    const [box, setbox] = useState(true)
    const _handleFocus = () => {
        setbox(!box);
    }

    const onPressSubmit = async () => {
        const valid = validationFrom();
        if (valid) {
            setVisible(true)
            try {
                const params = {
                    job_title: JobTitle,
                    no_of_openings: Openings,
                    monthly_in_hand_salary_from: SalaryFrom,
                    monthly_in_hand_salary_to: SalaryTo,
                    job_description: JobDescription,
                    job_timing: JobTimeings,
                    interview_details: InterviewDetails,
                    company_name: CompanyName,
                    contact_person_name: CompanyPersonName,
                    phone_no: PhoneNumber,
                    email: EmailID,
                    job_address: JobAddress,
                    job_location_state: addressState,
                    job_location_city: city,
                }
                const { data } = await apiCall
                    ('POST', ENDPOINTS.CREATE_JOB, params);
                if (data.status === 200) {
                    setErrorMessage(data.message);
                    navigation.navigate('JobManagementList')
                    setVisible(false);
                } else {
                    setVisible(false);
                    setErrorMessage(data.message);
                    setVisibleErr(true);
                };
            } catch (error) {
                setErrorMessage(error);
                setVisibleErr(true);
                setVisible(false);
            };
        }
    }

    function validationFrom() {
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
        if (addressState == "") {
            setErrorMessage('Please enter job state');
            setVisibleErr(true);
            return false;
        }
        if (city == "") {
            setErrorMessage('Please enter job city');
            setVisibleErr(true);
            return false;
        }
        if (JobDescription == "") {
            setErrorMessage('Please enter job description');
            setVisibleErr(true);
            return false;
        }
        if (JobTimeings == "") {
            setErrorMessage('Please enter job time');
            setVisibleErr(true);
            return false;
        }
        if (InterviewDetails == "") {
            setErrorMessage('Please enter interview details');
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
        if (box == true) {
            setErrorMessage('Please select terms and condition');
            setVisibleErr(true);
            return false;
        }
        return true;
    }

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
            />
            <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
            <Success
                message={successMessage}
                visible={visibleSuccess}
                closeModel={() => ('Home', setVisibleSuccess(false))}
            />
        </View>
    )
}
export default AddJobs;