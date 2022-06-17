import React, { useState } from 'react';
import { View } from 'react-native';
import JobListScreen from './components/JobListScreen';
import CommonStyles from '../../Utils/CommonStyles';
import FilterPopUp from './components/FilterPopUp'
const JobList = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [like, setLike] = useState(false)
    const openFilter = () => {
        // setVisible(true)
    }
    const goBack = () => {
        navigation.goBack(null);
    };
    const _hanldeSetLike = () => {
        setLike(!like)
    }
    const [jobList, setJobList] = useState([
        {
            posterimg: require('../../Assets/extraImages/salooonimg.jpg'),
            companyname: 'MME Studio',
            postingtime: '11 hours ago',
            title: "3D Animation Designer",
            address: "92 Halsey St,Brooklyn,New York",
            worktype: 'Abby Pages',
            req_amount: "$500.00 - $1,000.00"
        },
        {
            posterimg: require('../../Assets/extraImages/salooonimg.jpg'),
            companyname: 'Wave Agency',
            postingtime: '22 hours ago',
            title: "Account Executive",
            address: "92 Halsey St,Brooklyn,New York",
            worktype: 'Abby Pages',
            req_amount: "$500.00 - $1,000.00"
        },
        {
            posterimg: require('../../Assets/extraImages/salooonimg.jpg'),
            companyname: 'ABA Logistic JSC',
            postingtime: '1 day ago',
            title: "3 Transport Shift Controller",
            address: "92 Halsey St,Brooklyn,New York",
            worktype: 'Abby Pages',
            req_amount: "$500.00 - $1,000.00"
        },
        {
            posterimg: require('../../Assets/extraImages/salooonimg.jpg'),
            companyname: 'Roishalattan LLC',
            postingtime: '2 hours ago',
            title: "UI/UX Product Designer",
            address: "92 Halsey St,Brooklyn,New York",
            worktype: 'Abby Pages',
            req_amount: "$500.00 - $1,000.00"
        },
        {
            posterimg: require('../../Assets/extraImages/salooonimg.jpg'),
            companyname: 'BeatsLabs Co',
            postingtime: '3 days ago',
            title: "WP Front-End Developer",
            address: "92 Halsey St,Brooklyn,New York",
            worktype: 'Abby Pages',
            req_amount: "$500.00 - $1,000.00"
        },
    ])
    const onPressJob = () => {
        navigation.navigate('JobDetails');
    };
    return (
        <View style={CommonStyles.container}>
            <JobListScreen
                openFilter={openFilter}
                _hanldeSetLike={_hanldeSetLike}
                like={like}
                jobList={jobList}
                onPressJob={onPressJob}
                goBack={goBack}

            />
            <FilterPopUp
                visible={visible}
                closeModel={() => setVisible(false)}
                setVisible={setVisible}
                // OnpressBack={OnpressBack}
            />
        </View>
    );
};
export default JobList;