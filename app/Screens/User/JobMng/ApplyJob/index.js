import React, { useState } from "react";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import { apiCall } from "../../../../Utils/httpClient";
import ApplyJobView from "./components/ApplyJobView";
import DocumentPicker from "react-native-document-picker";
import Loader from "../../../../Utils/Loader";
import Error from "../../../../Components/Modal/error";
import Success from "../../../../Components/Modal/success";
import { useFocusEffect } from "@react-navigation/native";

const ApplyJob = ({ navigation, route }) => {
  const itemData = route.params || {};
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

  useFocusEffect(
    React.useCallback(() => {
      getProfile();
    }, [navigation, route])
  );

  const getProfile = async () => {
    try {
      setVisible(true);
      const { data } = await apiCall("GET", ENDPOINTS.USERLASTJOBDTL);
      if (data?.status === 200) {
        setVisible(false);
        const getData = { ...data?.data };
        setApplyJob({
          ...applyJob,
          resume:
            getData?.resume_url === "" || getData?.resume_url === null
              ? ""
              : getData?.resume_url,
          fullName: getData?.user_name ? getData?.user_name : "",
          email: getData?.email ? getData?.email : "",
          phone: getData?.phone ? getData?.phone : "",
          abby_profile_url: getData?.business_logo
            ? getData?.business_logo
            : "",
          other_website: getData?.blog_website ? getData?.blog_website : "",
          gender: getData?.gender ? getData?.gender : "",
          current_Company: getData?.current_company
            ? getData?.current_company
            : "",
          abby_profile_url: getData?.abbypages_profile_url
            ? getData?.abbypages_profile_url
            : "",
          linkedinUrl: getData?.linkedin_url ? getData?.linkedin_url : "",
          twitterUrl: getData?.twitter_url ? getData?.twitter_url : "",
          githubUrl: getData?.github_url ? getData?.github_url : "",
          portfolioUrl: getData?.portfolio_url ? getData?.portfolio_url : "",
          other_website: getData?.other_website ? getData?.other_website : "",
          cover_letter:
            getData?.cover_letter === "" || getData?.cover_letter === null
              ? ""
              : getData?.cover_letter,
          workStatus: getData?.you_legally_authorized_to_work_status
            ? getData?.you_legally_authorized_to_work_status
            : "",
          visaStatus: getData?.future_require_sponsorship_for_employment_visa
            ? getData?.future_require_sponsorship_for_employment_visa
            : "",
          additional_Info: getData?.additional_information
            ? getData?.additional_information
            : "",
          gender: getData?.gender ? getData?.gender : "",
          race: getData?.race ? getData?.race : "",
          veteran_status: getData?.veteran_status
            ? getData?.veteran_status
            : "",
        });
      }
    } catch (error) {}
  };

  const openUpload = async (resq) => {
    DocumentPicker.pick({
      presentationStyle: "fullScreen",
      type: DocumentPicker.types.pdf,
      copyTo: "cachesDirectory",
      allowMultiSelection: false,
    }).then((pdf) => {
      pdf.map((pdfFile) => {
        if (resq === 1) {
          setApplyJob({
            ...applyJob,
            resume: pdfFile,
          });
        }
        if (resq === 2) {
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
      setErrorMessage("Please select Résumé");
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
      try {
        setVisible(true);
        let formData = new FormData();
        formData.append("job_id", itemData.job_id);
        formData.append("business_id", itemData.business_id);
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
      <ApplyJobView
        itemData={itemData}
        onSubmit={onSubmit}
        openUpload={openUpload}
        applyJob={applyJob}
        setApplyJob={setApplyJob}
        requires={requires}
      />
    </>
  );
};
export default ApplyJob;
