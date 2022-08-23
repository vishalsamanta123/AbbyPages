import React, { useState, useEffect } from "react";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import { apiCall } from "../../../Utils/httpClient";
import ApplyJob from "./components/ApplyJob";
import DocumentPicker from "react-native-document-picker";
import Loader from "../../../Utils/Loader";
import Error from "../../../Components/Modal/error";
import Success from "../../../Components/Modal/success";

const ApplyJobView = ({ navigation, route }) => {
  const [applyJob, setApplyJob] = useState({
    resume: "",
    fullName: "",
    email: "",
    phone: "",
    current_Company: "",
    abby_profile_url: "",
    linkedinUrl: "",
    twitterUrl: "",
    githubUrl: "",
    portfolioUrl: "",
    other_website: "",
    cover_letter: "",
    workStatus: "",
    visaStatus: "",
    additional_Info: "",
    gender: "",
    race: "",
    veteran_status: "",
  });
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [requires, setRequires] = useState(false);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const { data } = await apiCall("POST", ENDPOINTS.GET_USER_PROFILE);
      if (data.status === 200) {
        setApplyJob({
          ...applyJob,
          fullName: data.data.first_name
            ? data.data.first_name + " " + data.data.last_name
            : "",
          email: data.data.email ? data.data.email : "",
          phone: data.data.phone ? data.data.phone : "",
          abby_profile_url: data.business_logo ? data.business_logo : "",
          other_website: data.data.blog_website ? data.data.blog_website : "",
          gender: data.data.gender ? data.data.gender : "",
        });
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
    }
  };
  const onPressYesBtn = (type, resp) => {
    if (type == 1) {
      setApplyJob({
        ...applyJob,
        workStatus: resp,
      });
    }
    if (type == 2) {
      setApplyJob({
        ...applyJob,
        visaStatus: resp,
      });
    }
  };

  const onPressNoBtn = (type, resp) => {
    if (type == 1) {
      setApplyJob({
        ...applyJob,
        workStatus: resp,
      });
    }
    if (type == 2) {
      setApplyJob({
        ...applyJob,
        visaStatus: resp,
      });
    }
  };
  const openUpload = async (resq) => {
    DocumentPicker.pick({
      presentationStyle: "fullScreen",
      type: DocumentPicker.types.pdf,
    }).then((pdf) => {
      pdf.map((pdfFile) => {
        if (resq == 1) {
          setApplyJob({
            ...applyJob,
            resume: pdfFile,
          });
        }
        if (resq == 2) {
          setApplyJob({
            ...applyJob,
            cover_letter: pdfFile,
          });
        }
      });
    });
  };
  const validations = () => {
    setRequires(true);
    if (applyJob.resume == "") {
      setErrorMessage("Please select resume");
      setVisibleErr(true);
      return false;
    }
    if (applyJob.fullName == "") {
      setErrorMessage("Please fill fullname");
      setVisibleErr(true);
      return false;
    }
    if (applyJob.email == "") {
      setErrorMessage("Please fill email");
      setVisibleErr(true);
      return false;
    }
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(applyJob.email) === false) {
      setErrorMessage("Please fill proper email");
      setVisibleErr(true);
      return false;
    }
    if (applyJob.phone == "") {
      setErrorMessage("Please fill phone number");
      setVisibleErr(true);
      return false;
    }
    if (applyJob.current_Company == "") {
      setErrorMessage("Please fill current company name");
      setVisibleErr(true);
      return false;
    }
    if (applyJob.workStatus == "") {
      setErrorMessage("Please fill work status");
      setVisibleErr(true);
      return false;
    }
    if (applyJob.visaStatus == "") {
      setErrorMessage("Please fill visa status");
      setVisibleErr(true);
      return false;
    }
    setRequires(false);
    return true;
  };
  const onSubmit = async () => {
    const valid = validations();
    if (valid) {
      const { details } = route.params;
      try {
        setVisible(true);
        let formData = new FormData();
        formData.append("job_id", details.job_id);
        formData.append("business_id", details.business_id);
        formData.append("user_name", applyJob.fullName);
        formData.append("email", applyJob.email);
        formData.append("phone", applyJob.phone);
        formData.append("current_companyinfo", applyJob.current_Company);
        formData.append("abbypages_profile_url", applyJob.abby_profile_url);
        formData.append("linkedin_url", applyJob.linkedinUrl);
        formData.append("twitter_url", applyJob.twitterUrl);
        formData.append("github_url", applyJob.githubUrl);
        formData.append("portfolio_url", applyJob.portfolioUrl);
        formData.append("other_website", applyJob.other_website);
        formData.append(
          "you_legally_authorized_to_work_status",
          applyJob.workStatus
        );
        formData.append(
          "future_require_sponsorship_for_employment_visa",
          applyJob.visaStatus
        );
        formData.append("additional_information", applyJob.additional_Info);
        formData.append("gender", applyJob.gender);
        formData.append("race", applyJob.race);
        formData.append("veteran_status", applyJob.veteran_status);
        applyJob?.resume?.name &&
          formData.append("resume", {
            name: applyJob.resume.name,
            type: applyJob.resume.type,
            uri: applyJob.resume.uri,
          });
        applyJob?.cover_letter?.name &&
          formData.append("cover_letter", {
            name: applyJob?.cover_letter?.name,
            type: applyJob?.cover_letter?.type,
            uri: applyJob?.cover_letter?.uri,
          });
        const { data } = await apiCall("POST", ENDPOINTS.APPLY_JOB, formData);
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
      }
    }
  };
  return (
    <>
      {visible && <Loader state={visible} />}
      <ApplyJob
        onPressYesBtn={onPressYesBtn}
        onPressNoBtn={onPressNoBtn}
        onSubmit={onSubmit}
        openUpload={openUpload}
        applyJob={applyJob}
        setApplyJob={setApplyJob}
        requires={requires}
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
