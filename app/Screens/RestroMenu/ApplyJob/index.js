import AsyncStorage from "@react-native-community/async-storage";
import React, { useState } from "react";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import { apiCall } from "../../../Utils/httpClient";
import ApplyJob from "./components/ApplyJob";
import DocumentPicker from "react-native-document-picker";
import Loader from "../../../Utils/Loader";
import Error from "../../../Components/Modal/error";

const ApplyJobView = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [FullName, setFullName] = useState("");
  const [EmailAddress, setEmailAddress] = useState("");
  const [CurrentCompany, setCurrentCompany] = useState("");
  const [AbbyPagesURL, setAbbyPagesURL] = useState("");
  const [Linkedin, setLinkedin] = useState("");
  const [TwitterUrl, setTwitterUrl] = useState("");
  const [GithubUrl, setGithubUrl] = useState("");
  const [PortfolioUrl, setPortfolioUrl] = useState("");
  const [OtherWebsite, setOtherWebsite] = useState("");
  const [AdditionalInfo, setAdditionalInfo] = useState("");
  const [Phone, setPhone] = useState("");
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [YesOption, setYesOption] = useState(false);
  const [NoOption, setNoOption] = useState(false);
  const [gender, setGender] = useState("");
  const [race, setRace] = useState("");
  const [veteranStatus, setVeteranStatus] = useState("");
  const [workStatus, setWorkStatus] = useState("");
  const [visaStatus, setVisaStatus] = useState("");

  const onPressYesBtn = (type, resp) => {
    if (type == 1) {
      setWorkStatus(resp);
    }
    if (type == 2) {
      setVisaStatus(resp);
    }
  };

  const onPressNoBtn = (type, resp) => {
    if (type == 1) {
      setWorkStatus(resp);
    }
    if (type == 2) {
      setVisaStatus(resp);
    }
  };
  const openUpload = async (resq) => {
    DocumentPicker.pick({
      presentationStyle: "fullScreen",
      type: DocumentPicker.types.pdf,
    }).then((pdf) => {
      pdf.map((pdfFile) => {
        if (resq == 1) {
          setResume(pdfFile);
        }
        if (resq == 2) {
          setCoverLetter(pdfFile);
        }
      });
    });
  };
  const onSubmit = async () => {
    const { details } = route.params;
    try {
      setVisible(true);
      let formData = new FormData();
      formData.append("job_id", details.job_id);
      formData.append("business_id", details.business_id);
      formData.append("user_name", FullName);
      formData.append("email", EmailAddress);
      formData.append("phone", Phone);
      formData.append("current_companyinfo", CurrentCompany);
      formData.append("abbypages_profile_url", AbbyPagesURL);
      formData.append("linkedin_url", Linkedin);
      formData.append("twitter_url", TwitterUrl);
      formData.append("github_url", GithubUrl);
      formData.append("portfolio_url", PortfolioUrl);
      formData.append("other_website", OtherWebsite);
      formData.append("you_legally_authorized_to_work_status", workStatus);
      formData.append(
        "future_require_sponsorship_for_employment_visa",
        visaStatus
      );
      formData.append("additional_information", AdditionalInfo);
      formData.append("gender", gender);
      formData.append("race", race);
      formData.append("veteran_status", veteranStatus);
      resume.name &&
        formData.append("resume", {
          name: resume.name,
          type: resume.type,
          uri: resume.uri,
        });
      coverLetter.name &&
        formData.append("cover_letter", {
          name: coverLetter.name,
          type: coverLetter.type,
          uri: coverLetter.uri,
        });
      const { data } = await apiCall("POST", ENDPOINTS.APPLY_JOB, formData);
      if (data.status === 200) {
        setSuccessMessage(data.message);
        setVisibleSuccess(true);
        // navigation.navigate("JobDetails", { detail: details.job_id });
        setVisible(false);
      } else {
        setVisible(false);
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setErrorMessage(error);
      setVisibleErr(true);
    }
  };
  return (
    <>
      {visible && <Loader state={visible} />}
      <ApplyJob
        FullName={FullName}
        EmailAddress={EmailAddress}
        CurrentCompany={CurrentCompany}
        setFullName={setFullName}
        setEmailAddress={setEmailAddress}
        setCurrentCompany={setCurrentCompany}
        setAbbyPagesURL={setAbbyPagesURL}
        AbbyPagesURL={AbbyPagesURL}
        setLinkedin={setLinkedin}
        Linkedin={Linkedin}
        setTwitterUrl={setTwitterUrl}
        TwitterUrl={TwitterUrl}
        setGithubUrl={setGithubUrl}
        GithubUrl={GithubUrl}
        setPortfolioUrl={setPortfolioUrl}
        PortfolioUrl={PortfolioUrl}
        setOtherWebsite={setOtherWebsite}
        setAdditionalInfo={setAdditionalInfo}
        OtherWebsite={OtherWebsite}
        AdditionalInfo={AdditionalInfo}
        YesOption={YesOption}
        NoOption={NoOption}
        setPhone={setPhone}
        Phone={Phone}
        onPressYesBtn={onPressYesBtn}
        onPressNoBtn={onPressNoBtn}
        onSubmit={onSubmit}
        openUpload={openUpload}
        resume={resume}
        coverLetter={coverLetter}
        gender={gender}
        setGender={setGender}
        race={race}
        setRace={setRace}
        veteranStatus={veteranStatus}
        setVeteranStatus={setVeteranStatus}
        workStatus={workStatus}
        visaStatus={visaStatus}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => setVisibleSuccess(false)}
      />
    </>
  );
};
export default ApplyJobView;
