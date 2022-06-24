import AsyncStorage from "@react-native-community/async-storage";
import React, { useState } from "react";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import { apiCall } from "../../../Utils/httpClient";
import ApplyJob from "./components/ApplyJob";
import DocumentPicker from "react-native-document-picker";
import { Picker } from "@react-native-community/picker";
const ApplyJobView = ({ navigation, route }) => {
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

  const onPressYesBtn = () => {
    setYesOption(!YesOption);
  };
  const onPressNoBtn = () => {
    setNoOption(!NoOption);
  };
  const openUpload = async (resq) => {
    console.log("resq: ", resq);
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
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
      const params = {
        job_id: details.job_id,
        business_id: details.business_id,
        user_name: FullName,
        email: EmailAddress,
        phone: Phone,
        current_companyinfo: CurrentCompany,
        abbypages_profile_url: AbbyPagesURL,
        linkedin_url: Linkedin,
        twitter_url: TwitterUrl,
        github_url: GithubUrl,
        portfolio_url: PortfolioUrl,
        other_website: OtherWebsite,
        you_legally_authorized_to_work_status: 1,
        future_require_sponsorship_for_employment_visa: 1,
        additional_information: AdditionalInfo,
        gender: "Male",
        race: "",
        veteran_status: userData.verified,
        resume: "",
        cover_letter: "",
      };
      const { data } = await apiCall("POST", ENDPOINTS.APPLY_JOB, params);
      console.log("data: ", data);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
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
    />
  );
};
export default ApplyJobView;
