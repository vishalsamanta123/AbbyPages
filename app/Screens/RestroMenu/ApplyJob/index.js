import React, { useState } from 'react';
import ApplyJob from './components/ApplyJob';
const ApplyJobView = ({ navigation }) => {
    const [FullName, setFullName] = useState('');
    const [EmailAddress, setEmailAddress] = useState('');
    const [CurrentCompany, setCurrentCompany] = useState('');
    const [AbbyPagesURL, setAbbyPagesURL] = useState('');
    const [Linkedin, setLinkedin] = useState('');
    const [TwitterUrl, setTwitterUrl] = useState('');
    const [GithubUrl, setGithubUrl] = useState('');
    const [PortfolioUrl, setPortfolioUrl] = useState('');
    const [OtherWebsite, setOtherWebsite] = useState('');
    const [AdditionalInfo, setAdditionalInfo] = useState('');
    const [Phone, setPhone] = useState('');
    
    const [YesOption, setYesOption] = useState(false);
    const [NoOption, setNoOption] = useState(false);
    const onPressYesBtn = () => {
        setYesOption(!YesOption)
    }
    const onPressNoBtn = () => {
        setNoOption(!NoOption)
    }
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


        />
    )
}
export default ApplyJobView;